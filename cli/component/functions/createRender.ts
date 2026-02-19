import { ConfigT } from '..';
import getRenderName from './getRenderName';

type ParamsT = {
    config: ConfigT;
    name: string;
    className: string;
};

export default function createRender({ config, name, className }: ParamsT): string {
    const renderName = getRenderName(name);
    const renderClass =
        config.componentClass && className ? `${config.componentClass}__${className}` : '';

    return `import React from 'react';

import I from '../types.ts';

const ${renderName}: I['${renderName}'] = function () {
    return (
        <div className="${renderClass}">
            
        </div>
    );
};

export default ${renderName};
`;
}
