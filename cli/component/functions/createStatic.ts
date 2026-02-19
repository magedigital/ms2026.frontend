type ParamsT = {
    name: string;
    array?: boolean;
};

export default function createStatic({ name, array }: ParamsT): string {
    return `export const ${name} = ${array ? '[]' : '{}'} as const;`;
}
