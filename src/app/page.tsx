import { Metadata } from "next";
import { Client } from "./_components/client";

// === DATA ===
const data = {
    "/": {
        root: {
            props: {
                title: "Testing Title",
                description: "Testing description",
            },
        },
        content: [
            {
                id: "navbar-1",
                type: "Navbar",
            },
            {
                id: "hero-1",
                type: "HeroBlock",
                props: {
                    title: "Welcome to Our Site",
                    subtitle: "We build amazing products with React and Tailwind",
                    buttonText: "Get Started",
                    buttonUrl: "#features",
                },
            },
            {
                id: "features-1",
                type: "Features",
                props: {
                    items: [
                        { title: "Fast", description: "Our platform is optimized for speed." },
                        { title: "Secure", description: "We take security seriously." },
                        { title: "Scalable", description: "Built to grow with your business." },
                    ],
                },
            },
            {
                id: "testimonials-1",
                type: "Testimonials",
                props: {
                    quotes: [
                        { name: "Alice", text: "This service changed the way we work." },
                        { name: "Bob", text: "A must-have for modern businesses." },
                    ],
                },
            },
            {
                id: "footer-1",
                type: "Footer",
                props: {
                    brand: "MySite",
                    year: "2025",
                },
            },
        ],
    },
};

export async function generateMetadata(): Promise<Metadata> {
    const pageData = data?.["/"];
    return {
        title: pageData.root.props?.title,
        description: pageData.root.props?.description,
    };
}
export default function Home() {
    const pageData = data?.["/"];
    return (
        <div>
            <Client data={pageData} />
        </div>
    );
}
