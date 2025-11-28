export const metadata = {
    title: "About Us - News Site ACT",
};

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">About Us</h1>
            <div className="prose prose-lg text-gray-700">
                <p>
                    Welcome to <strong>News Site ACT</strong>, your premier destination for reliable, up-to-the-minute news coverage.
                </p>
                <p>
                    Founded with a mission to bring clarity to a complex world, we cover everything from national politics and global events to the latest in technology and sports. Our team is dedicated to journalistic integrity and unbiased reporting.
                </p>
                <p>
                    Whether you are looking for breaking news, in-depth analysis, or just the latest cricket scores, News Site ACT has you covered.
                </p>
            </div>
        </div>
    );
}
