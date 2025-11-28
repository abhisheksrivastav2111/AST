import Image from "next/image";
import Link from "next/link";
import { Article } from "@/lib/api";

interface HeroProps {
    article: Article;
}

export default function Hero({ article }: HeroProps) {
    const imageUrl = article.imageUrl || "https://placehold.co/1200x600/png?text=No+Image";

    return (
        <div className="relative rounded-xl overflow-hidden shadow-lg">
            <Link href={`/news/${article.id}`} className="group block relative">
                <div className="relative h-64 md:h-96 w-full">
                    <Image
                        src={imageUrl}
                        alt={article.title}
                        fill
                        priority
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="100vw"
                    />

                    {/* Gradient */}
                    <div className="absolute inset-0 bg-gradient-to from-black/80 via-black/40 to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                    <span className="inline-block px-3 py-1 bg-red-600 text-xs font-bold uppercase rounded mb-3">
                        Top Story
                    </span>

                    <h1 className="text-2xl md:text-4xl font-bold mb-3 leading-tight group-hover:text-red-200 transition-colors">
                        {article.title}
                    </h1>

                    <p className="hidden md:block text-gray-200 text-lg max-w-3xl line-clamp-2">
                        {article.summary}
                    </p>
                </div>
            </Link>
        </div>
    );
}
