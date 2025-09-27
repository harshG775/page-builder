import { Metadata } from "next";
import { Client } from "./_components/client";

// === DATA ===
const data = {
    "/": {
        root: {
            props: {
                title: "Testing Title",
            },
        },
        content: [
            {
                id: "navbar-1",
                type: "Navbar",
                props: {
                    brand: "MySite",
                    links: ["Home", "About", "Contact"],
                },
            },
            {
                id: "hero-1",
                type: "HeroBlock",
                props: {
                    title: "Welcome to Our Site",
                    subtitle: "We build amazing products with React and Tailwind",
                    buttonText: "Get Started",
                    buttonUrl: "#",
                },
            },
        ],
    },
};

export async function generateMetadata(): Promise<Metadata> {
    const pageData = data?.["/"];
    return {
        title: pageData.root.props?.title,
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
