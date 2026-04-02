import { enums } from '@global/enums.ts';
import checkAuth from '@utils/checkAuth.ts';
import { getCookie } from '@utils/cookies.ts';
import sendGoal from '@utils/sendGoal.ts';

import I from '../types.ts';

const scriptSrc = 'index-l-Ggnx_o.js';
const styleSrc = 'index-pmtJmDpG.css';
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
            on: {
                apiSuccess: async () => {
                    await checkAuth({});
                    await setStep('final');
                    sendGoal('regCodeSuccess');
                },
                apiError: async (e) => {
                    await setStep('error', e?.response?.data?.errorText || 'Ошибка сервера');
                    sendGoal('regCodeError');
                },
            },
        };
    }

    if (window.dataMatrixApp) {
        window.dataMatrixApp.root = this.parent.current!;
        window.dataMatrixApp.getAppRoot = () => this.parent.current!;
        window.dataMatrixApp.on = {
            apiSuccess: async () => {
                await checkAuth({});
                await setStep('final');
            },
            apiError: async (e) => {
                await setStep('error', e?.response?.data?.errorText || 'Ошибка сервера');
            },
        };
    }

    if (!document.head.querySelector('script[data-reader]')) {
        const script = document.createElement('script');

        script.onload = async () => {
            window.dataMatrixApp!.activate!();
            await this.asyncSetState({ isInit: true });
        };

        script.setAttribute('data-reader', 'true');
        script.src = `${root}/${scriptSrc}`;

        document.head.appendChild(script);
    } else {
        window.dataMatrixApp!.activate!();
        await this.asyncSetState({ isInit: true });
    }

    this.unmountHandlers.all = () => {
        if (window.dataMatrixApp?.deactivate) {
            window.dataMatrixApp.deactivate();
        }
    };
};

export default init;
