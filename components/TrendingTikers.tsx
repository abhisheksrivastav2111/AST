"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { Article } from "@/lib/api";

interface Props {
  articles: Article[]; // expects at least a few items; safe if empty
  speed?: number; // pixels per second
}

export default function TrendingTicker({ articles = [], speed = 60 }: Props) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const content = contentRef.current;
    if (!wrapper || !content || articles.length === 0) return;

    // duplicate content for seamless loop
    const contentWidth = content.scrollWidth;
    // if content too short, don't animate
    if (contentWidth === 0) return;

    // Reset scroll
    wrapper.scrollLeft = 0;
    lastTimeRef.current = null;

    const step = (time: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = time;
      const delta = time - lastTimeRef.current;
      lastTimeRef.current = time;

      // convert speed (px/sec) to px per ms
      const px = (speed / 1000) * delta;

      wrapper.scrollLeft += px;

      // reset when scrolled past first copy
      if (wrapper.scrollLeft >= contentWidth) {
        wrapper.scrollLeft = wrapper.scrollLeft - contentWidth;
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [articles, speed]);

  if (!articles || articles.length === 0) {
    return null;
  }

  // Render a compact inline item for trending (title + optional label)
  const Item = ({ article }: { article: Article }) => (
    <Link
      href={`/news/${article.id}`}
      className="inline-flex items-center gap-3 mr-8 whitespace-nowrap text-sm text-gray-800 hover:text-red-600"
    >
      <span className="px-2 py-0.5 bg-red-600 text-white text-xs font-semibold rounded">TREND</span>
      <span className="max-w-xs truncate">{article.title}</span>
    </Link>
  );

  return (
    <div className="bg-gray-50 border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-4 py-2">
          <div className="text-sm font-semibold text-red-600">Trending</div>

          {/* wrapper - this scrolls*/}
          <div
            ref={wrapperRef}
            className="flex-1 overflow-hidden"
            onMouseEnter={() => {
              // pause
              if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
                rafRef.current = null;
                lastTimeRef.current = null;
              }
            }}
            onMouseLeave={() => {
              // restart by calling effect indirectly: manual restart
              if (!rafRef.current) {
                lastTimeRef.current = null;
                rafRef.current = requestAnimationFrame((t) => {
                  lastTimeRef.current = t;
                  const wrapper = wrapperRef.current!;
                  const content = contentRef.current!;
                  const contentWidth = content.scrollWidth;
                  const step = (time: number) => {
                    if (!lastTimeRef.current) lastTimeRef.current = time;
                    const delta = time - lastTimeRef.current;
                    lastTimeRef.current = time;
                    const px = (speed / 1000) * delta;
                    wrapper.scrollLeft += px;
                    if (wrapper.scrollLeft >= contentWidth) wrapper.scrollLeft -= contentWidth;
                    rafRef.current = requestAnimationFrame(step);
                  };
                  rafRef.current = requestAnimationFrame(step);
                });
              }
            }}
          >
            {/* content duplicated twice for continuous loop */}
            <div ref={contentRef} className="flex items-center">
              {articles.map((a) => (
                <Item key={a.id + "-first"} article={a} />
              ))}
              {/* duplicate */}
              {articles.map((a) => (
                <Item key={a.id + "-second"} article={a} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
