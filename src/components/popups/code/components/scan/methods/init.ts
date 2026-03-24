import { enums } from '@global/enums.ts';
import checkAuth from '@utils/checkAuth.ts';
import { getCookie } from '@utils/cookies.ts';

import I from '../types.ts';

const scriptSrc = 'index-BTTRtr2W.js';
const styleSrc = 'index-D5odaqUt.css';
const root = '/reader/assets';

const init: I['init'] = async function (this: I) {
    const { setStep } = this.props;

    window.JWT = getCookie(enums.ACCESS_TOKEN);

    if (!document.head.querySelector('link[data-reader]')) {
        const link = document.createElement('link');

        link.setAttribute('data-reader', 'true');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', `${root}/${styleSrc}`);

        document.head.appendChild(link);
    }

    if (window.dataMatrixApp) {
        window.dataMatrixApp.root = this.parent.current!;
        window.dataMatrixApp.getAppRoot = () => this.parent.current!;
    }

    if (!document.head.querySelector('script[data-reader]')) {
        window.dataMatrixApp = {
            root: this.parent.current!,
            config: {
                duplicateTimeout: 3_000,
                showConsole: false,
                apiURL: '/api/ChZScan',
                catchOnce: true,
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
                    await checkAuth({});
                    await setStep('final');
                },
                apiError: async (e) => {
                    await setStep('error', e?.response?.data?.errorText || 'Ошибка сервера');
                },
            },
        };

        const script = document.createElement('script');

        script.onload = async () => {
            window.dataMatrixApp!.activate();
            await this.asyncSetState({ isInit: true });
        };

        script.setAttribute('data-reader', 'true');
        script.src = `${root}/${scriptSrc}`;

        document.head.appendChild(script);
    } else {
        window.dataMatrixApp!.activate();
        await this.asyncSetState({ isInit: true });
    }

    this.unmountHandlers.all = () => {
        if (window.dataMatrixApp?.deactivate) {
            console.log('deac');
            window.dataMatrixApp.deactivate();
        }
    };
};

export default init;
