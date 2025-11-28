import Image from "next/image";
import Link from "next/link";
import { Article } from "@/lib/api";

interface NewsCardProps {
    article: Article;
}

export default function NewsCard({ article }: NewsCardProps) {
    // Fallback image if none provided
    const imageUrl = article.imageUrl || "https://placehold.co/600x400/png?text=No+Image";

    return (
        <Link href={`/news/${article.id}`} className="group block h-full">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                <div className="relative h-48 w-full bg-gray-100">
                    <Image
                        src={imageUrl}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
                <div className="p-4 flex flex-col ">
                    <span className="text-xs font-semibold text-red-700 uppercase mb-2">
                        {article.category}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-red-700 transition-colors">
                        {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3 mb-4 ">
                        {article.summary}
                    </p>
                    <div className="text-xs text-gray-500 mt-auto">
                        {new Date(article.publishedAt).toLocaleDateString()}
                    </div>
                </div>
            </div>
        </Link>
    );
}
