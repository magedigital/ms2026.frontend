import { enums } from '@global/enums.ts';
import { getCookie } from '@utils/cookies.ts';

import I from '../types.ts';

const scriptSrc = 'index-Cha0RgGU.js';
const styleSrc = 'index-D5odaqUt.css';
const root = '/reader/assets';

const init: I['init'] = async function (this: I) {
    const { setStep } = this.props;

    window.JWT = getCookie(enums.ACCESS_TOKEN);
    window.dataMatrixApp = {
        root: this.parent.current!,
        config: {
            duplicateTimeout: 3_000,
            showConsole: false,
            apiURL: '/api/ChZScan',
        },
        getAppRoot: () => this.parent.current!,
        activate: () => undefined,
        deactivate: () => undefined,
        restart: () => undefined,
        on: {
            // dataMatrixSuccess: (d) => {
            //     console.log(d);
            // },
            // dataMatrixError: (e) => {
            //     console.log(e);
            // },
            apiSuccess: async () => {
                await setStep('final');
            },
            apiError: async () => {
                await setStep('error');
            },
        },
    };

    const link = document.createElement('link');

    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', `${root}/${styleSrc}`);

    document.head.appendChild(link);

    const script = document.createElement('script');

    script.onload = async () => {
        window.dataMatrixApp!.activate();
        await this.asyncSetState({ isInit: true });
    };

    script.src = `${root}/${scriptSrc}`;

    document.head.appendChild(script);

    this.unmountHandlers.all = () => {
        link.remove();
        script.remove();

        if (window.dataMatrixApp?.deactivate) {
            window.dataMatrixApp.deactivate();
        }
    };
};

export default init;
