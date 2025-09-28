"use client";
import { config } from "./config";
import { Data, Render } from "./Render";

export function Client({ data }: { data: Data }) {
    return <Render config={config} data={data} />;
}
