"use client";
import { Config, Render } from "./_components/Render";

// === DATA ===
const data = {
    "/": {
        root: { props: {} },
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

// === TYPES ===
type Props = {
    Navbar: {
        brand: string;
        links: string[];
    };
    HeroBlock: {
        title: string;
        subtitle?: string;
        buttonText?: string;
        buttonUrl?: string;
    };
};

// === CONFIG ===
const config: Config<Props> = {
    components: {
        Navbar: {
            fields: {
                brand: { type: "text" },
                links: { type: "text" },
            },
            defaultProps: {
                brand: "Brand",
                links: ["Home", "About"],
            },
            render: ({ brand, links }) => (
                <nav className=" bg-gray-800 text-white">
                    <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
                        <div className="font-bold text-xl">{brand}</div>
                        <ul className="flex gap-4">
                            {links.map((link, i) => (
                                <li key={i} className="hover:text-gray-300 cursor-pointer">
                                    {link}
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            ),
        },
        HeroBlock: {
            fields: {
                title: { type: "text" },
                subtitle: { type: "text" },
                buttonText: { type: "text" },
                buttonUrl: { type: "text" },
            },
            defaultProps: {
                title: "Default Hero Title",
                subtitle: "Default subtitle",
                buttonText: "Click Me",
                buttonUrl: "#",
            },
            render: ({ title, subtitle, buttonText, buttonUrl }) => (
                <div className=" bg-blue-100">
                    <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center py-32">
                        <h1 className="text-4xl font-bold mb-4">{title}</h1>
                        {subtitle && <p className="mb-6 text-lg">{subtitle}</p>}
                        {buttonText && (
                            <a
                                href={buttonUrl}
                                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                            >
                                {buttonText}
                            </a>
                        )}
                    </div>
                </div>
            ),
        },
    },
};

// === PAGE ===
export default function Home() {
    const renderData = data?.["/"];
    return (
        <div>
            <Render config={config} data={renderData} />
        </div>
    );
}
