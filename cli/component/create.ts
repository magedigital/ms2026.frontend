import fs from 'fs';

import createComponent from './functions/createComponent';
import createInterface from './functions/createInterface';
import createMethod from './functions/createMethod';
import createPages from './functions/createPages';
import createRender from './functions/createRender';
import createRequest from './functions/createRequest';
import createStatic from './functions/createStatic';
import createStyle from './functions/createStyle';
import getComponentName from './functions/getComponentName';
import getRenderName from './functions/getRenderName';

import { ConfigT } from '.';

type ParamsT = {
    config: ConfigT;
};

export default async function create({ config }: ParamsT): Promise<void> {
    const name = getComponentName(config.componentName);
    const componentData = createComponent({ config });
    const interfaceData = createInterface({ config });

    await fs.promises.mkdir(`./src/${config.dir}/${config.componentName}`);
    await fs.promises.writeFile(
        `./src/${config.dir}/${config.componentName}/${name}.tsx`,
        componentData,
    );
    await fs.promises.writeFile(
        `./src/${config.dir}/${config.componentName}/types.ts`,
        interfaceData,
    );

    if (config.styleDir) {
        const styleData = createStyle({ config });

        await fs.promises.mkdir(`./src/scss/${config.styleDir ? `${config.styleDir}/` : ``}`, {
            recursive: true,
        });
        await fs.promises.writeFile(
            `./src/scss/${config.styleDir ? `${config.styleDir}/` : ``}_${config.componentClass}.scss`,
            styleData,
        );

        let stylesMainData = await fs.promises.readFile(`./src/scss/main.scss`, {
            encoding: 'utf-8',
        });

        stylesMainData += `\n@import "${config.styleDir ? `${config.styleDir}/` : ''}${config.componentClass}";`;

        await fs.promises.writeFile(`./src/scss/main.scss`, stylesMainData);
    }

    if (config.renders) {
        await fs.promises.mkdir(`./src/${config.dir}/${config.componentName}/renders`);

        await Promise.all(
            config.renders.map(async (render) => {
                const renderData = createRender({ config, ...render });
                const renderName = getRenderName(render.name);

                await fs.promises.writeFile(
                    `./src/${config.dir}/${config.componentName}/renders/${renderName}.tsx`,
                    renderData,
                );
            }),
        );
    }

    if (config.methods) {
        await fs.promises.mkdir(`./src/${config.dir}/${config.componentName}/methods`);

        await Promise.all(
            config.methods.map(async (method) => {
                const methodData = createMethod(method);

                await fs.promises.writeFile(
                    `./src/${config.dir}/${config.componentName}/methods/${method.name}.ts`,
                    methodData,
                );
            }),
        );
    }

    if (config.requests) {
        await fs.promises.mkdir(`./src/${config.dir}/${config.componentName}/requests`);

        await Promise.all(
            config.requests.map(async (request) => {
                const data = createRequest(request);

                await fs.promises.writeFile(
                    `./src/${config.dir}/${config.componentName}/requests/${request.name}.ts`,
                    data,
                );
            }),
        );
    }

    if (config.pages || config.static) {
        await fs.promises.mkdir(`./src/${config.dir}/${config.componentName}/static`);
    }

    if (config.pages) {
        await fs.promises.mkdir(`./src/${config.dir}/${config.componentName}/pages`);

        const pagesData = createPages({ pages: config.pages });

        await fs.promises.writeFile(
            `./src/${config.dir}/${config.componentName}/static/pages.tsx`,
            pagesData,
        );
    }

    if (config.static) {
        await Promise.all(
            config.static.map(async (staticItem) => {
                const data = createStatic(staticItem);

                await fs.promises.writeFile(
                    `./src/${config.dir}/${config.componentName}/static/${staticItem.name}.ts`,
                    data,
                );
            }),
        );
    }
}
