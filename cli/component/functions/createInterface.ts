import { ConfigT } from '..';
import getComponentName from './getComponentName';
import getRenderName from './getRenderName';

type ParamsT = {
    config: ConfigT;
};

export default function createInterface({ config }: ParamsT): string {
    const name = getComponentName(config.componentName);
    const interfaceName = `${name}I`;

    return `
    import DefaultI from '@components/default/types';

    ${config.withStore ? `import { StoreT } from '@store/store.tsx';` : ''}
    ${config.pages ? `import pages from './static/pages.tsx'` : ''}
    ${config.static ? config.static.map((staticItem) => `import { ${staticItem.name} } from './static/${staticItem.name}.ts'`).join('\n') : ''}

    type PropsT = {
        ${config.storeProps ? config.storeProps.map((prop) => `${prop}: StoreT['${prop}'];`).join('\n') : ``}
    };

type StateT = {};

interface ${interfaceName} extends DefaultI<PropsT, StateT> {
    parent: React.RefObject<HTMLDivElement | null>;
    ${config.pages ? `pages: typeof pages;` : ''}
    ${config.static ? config.static.map((staticItem) => `${staticItem.name}: typeof ${staticItem.name};`).join('\n') : ''}

    ${config.methods ? config.methods.map(({ name: methodName, async: methodAsync }) => `${methodName}(this: ${interfaceName}): ${methodAsync ? 'Promise<void>' : 'void'};`).join('\n') : ''}

    ${config.requests ? config.requests.map(({ name: requestName }) => `${requestName}(this: ${interfaceName}): Promise<void>;`).join('\n') : ''}

    ${config.renders ? config.renders.map(({ name: renderName }) => `${getRenderName(renderName)}(this: ${interfaceName}): React.ReactNode;`).join('\n') : ''}
}

export default ${interfaceName};
`;
}
