import Link from "next/link";
import { Article } from "@/lib/api";

interface SidebarProps {
    articles: Article[];
}

export default function Sidebar({ articles }: SidebarProps) {
    return (
        <aside className="bg-white/70 backdrop-blur-md p-5 rounded-2xl border border-gray-200 shadow-lg">
            <h2 className="text-2xl font-extrabold mb-6 text-gray-900 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-red-600 rounded-full"></span>
                Trending Now
            </h2>

            <div className="space-y-5">
                {articles.map((article, index) => (
                    <Link
                        key={article.id}
                        href={`/news/${article.id}`}
                        className="group block hover:bg-red-50/50 p-3 rounded-xl transition-all duration-300"
                    >
                        <div className="flex items-start space-x-4">
                            <span className="text-3xl font-black text-gray-300 group-hover:text-red-500 transition-all duration-300 transform group-hover:scale-110">
                                {index + 1}
                            </span>

                            <div className="flex-1">
                                <h3 className="text-sm font-semibold text-gray-800 group-hover:text-red-700 leading-snug transition-colors duration-300 line-clamp-2">
                                    {article.title}
                                </h3>

                                <span className="inline-block mt-2 text-[10px] px-2 py-1 rounded-full bg-gray-100 text-gray-600 group-hover:bg-red-100 group-hover:text-red-600 transition-all">
                                    {article.category}
                                </span>
                            </div>
                        </div>

                        {index < articles.length - 1 && (
                            <div className="mt-4 border-b border-gray-200"></div>
                        )}
                    </Link>
                ))}
            </div>
        </aside>
    );
}
