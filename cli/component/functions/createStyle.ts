import { ConfigT } from '..';

type ParamsT = {
    config: ConfigT;
};

export default function createStyle({ config }: ParamsT): string {
    return `.${config.componentClass} {
    ${config.renders ? `${config.renders.map((render) => `&__${render.className} {}`).join('\n\n')}` : ''}
    }`;
}
