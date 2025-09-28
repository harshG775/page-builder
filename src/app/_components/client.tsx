"use client";
import { config } from "../../puck/config";
import { Data, Render } from "../../puck/lib/Render";

export function Client({ data }: { data: Data }) {
    return <Render config={config} data={data} />;
}
