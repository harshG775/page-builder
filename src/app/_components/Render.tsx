import React, { Fragment } from "react";

type FieldType = "text" | "number" | "select" | "boolean";

type FieldConfig = {
    type: FieldType;
    options?: string[];
};

type ComponentConfig<Props> = {
    fields: Record<keyof Props, FieldConfig>;
    defaultProps: Props;
    render: (props: Props) => React.ReactNode;
};

export type Config<T extends Record<string, any>> = {
    components: {
        [K in keyof T]: ComponentConfig<T[K]>;
    };
};

// RENDER
export function Render<T extends Record<string, any>>({
    config,
    data,
}: {
    config: Config<T>;
    data: {
        root: { props: {} };
        content: {
            id: string;
            type: string;
            props?: Partial<T[keyof T]>;
        }[];
    };
}) {
    const { content } = data;
    return (
        <>
            {content?.map((block, i) => {
                const component = config.components[block.type as keyof T];
                if (!component) {
                    return (
                        <div key={i} style={{ color: "red" }}>
                            Unknown block: {block.type}
                        </div>
                    );
                }

                type BlockKey = keyof T;
                const props = {
                    ...component.defaultProps,
                    ...(block.props ?? {}),
                } as T[BlockKey];

                return <Fragment key={block.id}>{component.render(props)}</Fragment>;
            })}
        </>
    );
}
