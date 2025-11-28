export const metadata = {
    title: "Contact Us - News Site ACT",
};

export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <p className="mb-6 text-gray-600">
                    Have a story tip, feedback, or inquiry? We'd love to hear from you.
                </p>

                <form className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500" placeholder="Your Name" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500" placeholder="your@email.com" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                        <textarea id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500" placeholder="How can we help?"></textarea>
                    </div>
                    <button type="submit" className="bg-red-700 text-white px-6 py-2 rounded-md hover:bg-red-800 transition-colors">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}
