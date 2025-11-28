import { getArticleById, getArticles } from "@/lib/api";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface Props {
    params: Promise<{ id: string }>;
}


export async function generateStaticParams() {
    const articles = await getArticles();
    return articles.map((article) => ({
        id: article.id,
    }));
}


export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const article = await getArticleById(id);

    if (!article) {
        return {
            title: "Article Not Found",
        };
    }

    return {
        title: `${article.title} - News Site ACT`,
        description: article.summary,
        openGraph: {
            title: article.title,
            description: article.summary,
            images: article.imageUrl ? [article.imageUrl] : [],
        },
    };
}

export default async function ArticlePage({ params }: Props) {
    const { id } = await params;
    const article = await getArticleById(id);

    if (!article) {
        notFound();
    }

    const imageUrl = article.imageUrl || "https://placehold.co/1200x600/png?text=No+Image";

    return (
        <article className="container mx-auto px-4 py-8 max-w-4xl">
            <div className="mb-6">
                <span className="text-red-700 font-bold uppercase tracking-wider text-sm">
                    {article.category}
                </span>
                <h1 className="text-3xl md:text-5xl font-bold mt-2 mb-4 text-gray-900 leading-tight">
                    {article.title}
                </h1>
                <div className="flex items-center text-gray-600 text-sm mb-6 border-b border-gray-200 pb-6">
                    <span className="font-semibold mr-2">{article.author}</span>
                    <span className="mx-2">•</span>
                    <time dateTime={article.publishedAt}>
                        {new Date(article.publishedAt).toLocaleDateString(undefined, {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                        })}
                    </time>
                </div>
            </div>

            <div className="relative w-full h-64 md:h-96 mb-8 rounded-xl overflow-hidden shadow-lg">
                <Image
                    src={imageUrl}
                    alt={article.title}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 1200px"
                />
            </div>

            <div className="prose prose-lg max-w-none text-gray-800">
                <p className="lead text-xl text-gray-600 mb-6 font-medium">
                    {article.summary}
                </p>
                {/* Render HTML content safely */}
                <div dangerouslySetInnerHTML={{ __html: article.content }} />
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-bold mb-4">Read More</h3>
                {/* Could add related articles here */}
                <p className="text-gray-500 italic">End of article.</p>
            </div>
        </article>
    );
}
