type ParamsT = {
    name: string;
};

export default function createRequest({ name }: ParamsT): string {
    return `import I from '../types.ts';

const ${name}: I['${name}'] = async function () {
    await this.asyncSetState({ loadingKey: 'send' });

    await this.asyncSetState({ loadingKey: undefined });
};

export default ${name};
`;
}
