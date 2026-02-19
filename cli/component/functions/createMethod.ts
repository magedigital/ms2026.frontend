type ParamsT = {
    name: string;
    async: boolean;
};

export default function createMethod({ name, async }: ParamsT): string {
    return `import I from '../types.ts';

const ${name}: I['${name}'] = ${async ? 'async' : ''} function () {
    ${
        async
            ? `await this.asyncSetState({ loadingKey: 'send' });

    await this.asyncSetState({ loadingKey: undefined });`
            : ''
    }
};

export default ${name};
`;
}
