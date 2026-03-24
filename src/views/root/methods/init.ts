import { contentRequests } from '@api/requests/content.ts';
import { enums } from '@global/enums.ts';
import { appStore } from '@store/store.tsx';
import checkAuth from '@utils/checkAuth.ts';
import { getCookie, setCookie } from '@utils/cookies.ts';

import I from '../types.ts';

const init: I['init'] = async function () {
    const rootJWT = document.querySelector('#root')!.getAttribute('data-jwt');

    if (rootJWT) {
        setCookie(enums.ACCESS_TOKEN, rootJWT);
    }

    window.getJWT = () => getCookie(enums.ACCESS_TOKEN);

    window.userAuthorized = !!getCookie(enums.ACCESS_TOKEN);

    this.resizeHandler(true);

    document.body.style.setProperty('--mediaM', `${window.mediaM}px`);

    window.addEventListener('resize', () => {
        this.resizeHandler();
    });

    this.popupsHandler(true);

    (document.addEventListener as CustomListenerT)('changePage', this.changePageListener);

    checkAuth({});

    const mainContent = await contentRequests.getContent({ name: 'main' });
    appStore.getState().setMainContent(mainContent);
};

export default init;
