// app/page.tsx
import { getArticles, getTrendingArticles } from "@/lib/api";

import TrendingTicker from "@/components/TrendingTikers";
import HeroSlider from "@/components/HeroSlider";
import NewsCard from "@/components/NewsCard";
import Sidebar from "@/components/Sidebar";

export default async function Home() {
  const articles = await getArticles();
  const trending = await getTrendingArticles();

  const sliderArticles = articles.slice(0, 6);
  const gridArticles = articles.slice(6);

  return (
    <>
      <TrendingTicker articles={trending} />

      <div className="container mx-auto px-4 py-8">
        {sliderArticles.length > 0 && <HeroSlider articles={sliderArticles} />}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-8">
            <h2 className="text-2xl font-bold mb-6 border-b-2 border-red-600 pb-2 inline-block">
              Latest News
            </h2>

            {gridArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {gridArticles.map((article) => (
                  <NewsCard key={article.id} article={article} />
                ))}
              </div>
            ) : (
              <div className="p-8 text-center bg-gray-50 rounded-lg">
                <p className="text-gray-500">No more articles found.</p>
              </div>
            )}
          </div>

          <div className="lg:col-span-4 space-y-8">

  {/* Trending Sidebar */}
  <Sidebar articles={trending} />

  {/* Advertisement Section */}
  <div className="relative p-6 rounded-2xl border border-gray-200 bg-gradient-to from-white to-gray-100 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">

    {/* Decorative background */}
    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>

    <div className="relative z-10 flex flex-col items-center justify-center h-60">
      <span className="text-gray-500 text-sm tracking-wide font-semibold uppercase">
        Advertisement
      </span>

      <p className="text-gray-400 text-xs mt-2">
        Your ad could be here
      </p>

      <button className="mt-4 px-4 py-2 text-xs font-semibold bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition-all">
        Promote Now
      </button>
    </div>
  </div>

</div>


        </div>
      </div>
    </>
  );
}
