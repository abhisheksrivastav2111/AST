export const metadata = {
    title: "Terms of Service - News Site ACT",
};

export default function TermsPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-3xl">
            <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
            <div className="prose text-gray-700">
                <p>Last updated: {new Date().toLocaleDateString()}</p>
                <p>
                    Please read these Terms of Service carefully before using the News Site ACT website operated by us.
                </p>
                <h3>1. Conditions of Use</h3>
                <p>By using this website, you certify that you have read and reviewed this Agreement and that you agree to comply with its terms. If you do not want to be bound by the terms of this Agreement, you are advised to leave the website accordingly.</p>
                <h3>2. Intellectual Property</h3>
                <p>You agree that all materials, products, and services provided on this website are the property of News Site ACT, its affiliates, directors, officers, employees, agents, suppliers, or licensors including all copyrights, trade secrets, trademarks, patents, and other intellectual property.</p>
            </div>
        </div>
    );
}
