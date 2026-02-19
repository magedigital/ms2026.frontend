import { ConfigT } from '..';
import getComponentName from './getComponentName';

type ParamsT = {
    pages: NonNullable<ConfigT['pages']>;
};

export default function createPages({ pages }: ParamsT): string {
    return `import React from 'react';

import I from '../types.ts';


${pages.map((page) => `import ${getComponentName(page.componentName)} from '../pages/${page.componentName}/${getComponentName(page.componentName)}.tsx';`).join('\n')}

const pages = {
    ${pages
        .map(
            (page) => `${page.name}: {
        render(this: I) {
            return <${getComponentName(page.componentName)} />;
        },
    }`,
        )
        .join(',\n')}
} as const;

export default pages;
`;
}
