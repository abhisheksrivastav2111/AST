// app/[category]/page.tsx
import { getArticles, getTrendingArticles } from "@/lib/api";
import TrendingTicker from "@/components/TrendingTikers";
import NewsCard from "@/components/NewsCard";
import Sidebar from "@/components/Sidebar";

interface Props {
  params: Promise<{ category: string }>;
}

// ------- Metadata -------
export async function generateMetadata({ params }: Props) {
  const { category } = await params;

  const clean = category.replace(/-/g, " ");
  const cap = clean.charAt(0).toUpperCase() + clean.slice(1);

  return {
    title: `${cap} News - Live Hindustan Clone`,
    description: `Latest ${cap} news and updates.`,
  };
}

// ------- Page -------
export default async function CategoryPage({ params }: Props) {
  const { category } = await params;

  const articles = await getArticles(category);
  const trending = await getTrendingArticles();

  return (
    <>
      <TrendingTicker articles={trending} />

      <div className="container mx-auto px-4 py-8">
        
        <h1 className="text-3xl font-bold mb-6 border-b-2 border-red-600 pb-2 inline-block capitalize">
          {category.replace(/-/g, " ")}
        </h1>

        {articles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="p-8 text-center bg-gray-50 rounded-lg">
            <p className="text-gray-500">No articles found for this category.</p>
          </div>
        )}

        <div className="lg:mt-12 mt-8">
          <Sidebar articles={trending} />
        </div>

      </div>
    </>
  );
}
