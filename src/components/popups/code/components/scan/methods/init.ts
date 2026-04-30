import { enums } from '@global/enums.ts';
import checkAuth from '@utils/checkAuth.ts';
import { getCookie } from '@utils/cookies.ts';
import sendGoal from '@utils/sendGoal.ts';

import I from '../types.ts';

const scriptSrc = 'index-BHAlkg5t.js';
const styleSrc = 'index-Dhd3dDzA.css';
const root = '/reader/assets';

const init: I['init'] = async function (this: I) {
    const { setStep, updateListRender } = this.props;

    window.JWT = getCookie(enums.ACCESS_TOKEN);

    const rootNode = this.parent.current!.querySelector<HTMLElement>('.popup__scanReaderContent')!;

    if (!document.head.querySelector('link[data-reader]')) {
        const link = document.createElement('link');

        link.setAttribute('data-reader', 'true');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', `${root}/${styleSrc}`);

        document.head.appendChild(link);
    }

    if (!document.head.querySelector('script[data-reader]')) {
        window.dataMatrixApp = {
            root: rootNode,
            config: {
                duplicateTimeout: 3_000,
                showConsole: false,
                apiURL: '/api/ChZScan',
                catchOnce: true,
            },
            getAppRoot: () => rootNode,
            on: {
                apiSuccess: async (r) => {
                    await checkAuth({});
                    await setStep('final');

                    if (r?.isFirstCode || r?.data?.isFirstCode) {
                        sendGoal('regFirstCode');
                    }

                    sendGoal('regCodeSuccess');
                },
                apiError: async (e) => {
                    await setStep('error', e?.response?.data?.errorText || 'Ошибка сервера');
                    sendGoal('regCodeError');
                },
                camCapabilities: async (c) => {
                    await this.asyncSetState({ canZoom: !!c.zoom, canFocus: !!c.focusDistance });
                    await updateListRender();
                },
            },
        };
    }

    if (window.dataMatrixApp) {
        window.dataMatrixApp.root = rootNode;
        window.dataMatrixApp.getAppRoot = () => rootNode;
        window.dataMatrixApp.on = {
            apiSuccess: async () => {
                await checkAuth({});
                await setStep('final');
            },
            apiError: async (e) => {
                await setStep('error', e?.response?.data?.errorText || 'Ошибка сервера');
            },
            camCapabilities: async (c) => {
                await this.asyncSetState({ canZoom: !!c.zoom, canFocus: !!c.focusDistance });
                await updateListRender();
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
