export const metadata = {
    title: "Privacy Policy - News Site ACT",
};

export default function PrivacyPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-3xl">
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
            <div className="prose text-gray-700">
                <p>Last updated: {new Date().toLocaleDateString()}</p>
                <p>
                    At News Site ACT, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website.
                </p>
                <h3>1. Information We Collect</h3>
                <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows: Identity Data, Contact Data, Technical Data, and Usage Data.</p>
                <h3>2. How We Use Your Data</h3>
                <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances: Where we need to perform the contract we are about to enter into or have entered into with you.</p>
            </div>
        </div>
    );
}
