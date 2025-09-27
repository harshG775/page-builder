"use client";
import { config } from "./config";
import { Render } from "./Render";

export function Client({
    data,
}: {
    data: {
        root: { props: {} };
        content: {
            id: string;
            type: string;
            props?: any;
        }[];
    };
}) {
    return <Render config={config} data={data} />;
}
