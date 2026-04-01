import { authRequests } from '@api/requests/auth';
import { enums } from '@global/enums';
import { PageNamesT } from '@services/router/static/pages';
import { appStore } from '@store/store';

import { AppRouter } from '..';
import { deleteCookie, getCookie } from './cookies';

export const logoutHandler = async function (): Promise<void> {
    window.userAuthorized = false;
    appStore.getState().setAuthProcess(true);
    AppRouter.changePage({ pageName: 'index' });
    appStore.getState().setPopup({ name: 'loginPopup' });
    deleteCookie(enums.ACCESS_TOKEN);
    localStorage.removeItem(enums.USER);

    setTimeout(async () => {
        appStore.getState().setAuthUser(undefined);
    }, 300);
};

type ParamsT = {
    redirect?: boolean;
};

export default async function checkAuth({ redirect }: ParamsT): Promise<void> {
    if (!getCookie(enums.ACCESS_TOKEN)) {
        if (localStorage.getItem(enums.USER)) {
            await logoutHandler();
        }

        if (localStorage.getItem('forgetEmail')) {
            // await changePage({ pageName: 'forget' });
        }

        return;
    }

    let user;

    try {
        user = (await authRequests.getUser()).user;
    } catch (e) {
        await logoutHandler();

        return;
    }

    if (!user) {
        await logoutHandler();

        return;
    }

    try {
        const d = await authRequests.getInfo();
        appStore.getState().setProfileData(d);
    } catch (e) {}

    if (user.personal.phone && user.personal.phone.length === 11) {
        user.personal.phone = user.personal.phone.slice(1);
    }

    appStore.getState().setAuthUser(user);
    window.userAuthorized = true;
    localStorage.setItem(enums.USER, JSON.stringify(user));

    let pageName: PageNamesT | undefined;
    let ids: Record<string, string> | undefined;

    if (user?.status === 'ANKET_REQUIRED') {
        pageName = 'anket';
    }

    if (user?.status === 'EXTRA_ANKET_REQUIRED') {
        pageName = 'fullAnket';
    }

    // if (user?.status === 'ACT_REQUIRED' && user.nextActPrizeId) {
    //     pageName = 'akt-inner';
    //     ids = { '1': user.nextActPrizeId };
    // }

    if (redirect && !pageName) {
        pageName = 'profile';
    }

    if (pageName) {
        AppRouter.changePage({ pageName, ids });
    }

    if (user?.status === 'EMAIL_CONFIRM_REQUIRED') {
        appStore.getState().setPopup({ name: 'regPopup' });
    }
}
