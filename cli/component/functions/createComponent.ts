import { ConfigT } from '..';
import getComponentName from './getComponentName';
import getRenderName from './getRenderName';

type ParamsT = {
    config: ConfigT;
};

export default function createComponent({ config }: ParamsT): string {
    const name = getComponentName(config.componentName);
    const interfaceName = `${name}I`;

    return `import React from 'react';

import Default from '@components/default/Default.tsx';

${config.withStore ? `import { StoreT, WithStore } from '@store/store.tsx';` : ''}

${config.methods ? config.methods.map(({ name: methodName }) => `import ${methodName} from './methods/${methodName}.ts';`).join('\n') : ''}
${config.requests ? config.requests.map(({ name: requestName }) => `import ${requestName} from './requests/${requestName}.ts';`).join('\n') : ''}
${config.static ? config.static.map((staticItem) => `import { ${staticItem.name} } from './static/${staticItem.name}.ts'`).join('\n') : ''}

${config.renders ? config.renders.map(({ name: renderName }) => `import ${getRenderName(renderName)} from './renders/${getRenderName(renderName)}.tsx';`).join('\n') : ''}

import ${interfaceName} from './types.ts';

${config.pages ? `import Pages from '@components/pages/Pages.tsx';\nimport pages from './static/pages.tsx'` : ''}

class ${name} extends Default<${interfaceName}['props'], ${interfaceName}['state']> implements ${interfaceName} {
    parent: ${interfaceName}['parent'];

    constructor(props: ${interfaceName}['props']) {
        super(props);
        this.state = {};
        this.parent = React.createRef();
    }

    ${config.pages ? `pages = pages;` : ''}
    ${config.static ? config.static.map((staticItem) => `${staticItem.name} = ${staticItem.name};`).join('\n') : ''}

    ${config.methods ? config.methods.map(({ name: methodName }) => `${methodName} = ${methodName}`).join('\n') : ''}

    ${config.requests ? config.requests.map(({ name: requestName }) => `${requestName} = ${requestName}`).join('\n') : ''}

    ${config.renders ? config.renders.map(({ name: renderName }) => `${getRenderName(renderName)} = ${getRenderName(renderName)}`).join('\n') : ''}

    render() {
        return (
            <${config.componentClass ? `div ref={this.parent} className="${config.componentClass}"` : ''}>
                ${
                    config.pages
                        ? `<Pages
                            context={this}
                            pages={this.pages}
                            filter={(page) => page.parentName === ''}
                        />`
                        : ''
                }
            </${config.componentClass ? 'div' : ''}>
            );
        }
    }

    ${
        config.withStore
            ? `const mapStore = (${config.storeProps ? `store: StoreT` : ''}) => ({
    ${config.storeProps ? config.storeProps.map((prop) => `${prop}: store.${prop}`).join(',\n') : ``}
});

export default WithStore(${name}, mapStore);
                `
            : `export default ${name};`
    }
            `;
}
