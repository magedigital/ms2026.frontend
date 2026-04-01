import { PageNamesT } from '@services/router/static/pages';

import { AppRouter } from '..';
import { StoreT, appStore } from './store';

type PopupT<T = {}> = {
    isShow: boolean;
} & Partial<T>;

type InfoPopupT<T = {}> = PopupT<
    {
        callback: () => Promise<void>;
    } & T
>;

type PopupsT = {
    chequePopup: PopupT;
    loginPopup: PopupT;
    regPopup: PopupT;
    codePopup: PopupT;
    calcPopup: PopupT;
    gamePopup: PopupT;
};

type PopupsReducersT = {
    setPopup: <T extends keyof PopupsT>(data: {
        name: T;
        data?: Omit<PopupsT[T], 'isShow'>;
        pushHistory?: boolean;
    }) => void;
    closePopup: <T extends keyof PopupsT>(data: {
        name: T | undefined;
        pushHistory?: boolean;
    }) => void;
};

const popups = {
    chequePopup: {
        check: (s: StoreT) => !!s.authUser || s.isAuthProcess,
        redirectPageName: 'index',
    },
    loginPopup: {
        check: (s: StoreT) => !s.authUser || s.isAuthProcess,
        redirectPageName: 'profile',
    },
    regPopup: {
        check: (s: StoreT) =>
            !s.authUser || s.isAuthProcess || s.authUser?.status === 'EMAIL_CONFIRM_REQUIRED',
        redirectPageName: 'profile',
    },
    codePopup: {
        check: (s: StoreT) => !!s.authUser || s.isAuthProcess,
        redirectPageName: 'profile',
    },
    gamePopup: {
        check: (s: StoreT) => !!s.authUser || s.isAuthProcess,
        redirectPageName: (s: StoreT) =>
            (!s.authUser && !s.isAuthProcess) || !s.profileData ? 'profile' : undefined,
    },
    calcPopup: {},
} as const;

type PopupDataT = Partial<{
    check: (s: StoreT) => boolean;
    redirectPageName: PageNamesT | ((s: StoreT) => PageNamesT | undefined);
}>;

const getPopupSearch = (name: string, data: ObjT | undefined): string => {
    const resultData: { key: string; value: any }[] = [];
    const check = (v: unknown) =>
        typeof v === 'string' || typeof v === 'number' || typeof v === 'boolean';

    if (data) {
        Object.keys(data).forEach((key) => {
            const v = data[key];

            if (Array.isArray(v)) {
                v.forEach((thisValue) => {
                    if (check(thisValue)) {
                        resultData.push({ key, value: thisValue });
                    }
                });
            } else if (check(v)) {
                resultData.push({ key, value: v });
            }
        });
    }

    name = name.replace('Popup', '');

    return `?` + [`popup=${name}`, ...resultData.map((v) => v.key + '=' + v.value)].join('&');
};

const defaultPopupsStore: PopupsT = {} as PopupsT;

(Object.keys(popups) as (keyof PopupsT)[]).forEach((n) => {
    defaultPopupsStore[n] = { isShow: false };
});

const createPopupsStore = (set: (data: Partial<StoreT>) => void): PopupsT & PopupsReducersT => ({
    ...defaultPopupsStore,
    setPopup: ({ name, data, pushHistory = true }) => {
        const popupData = popups[name] as PopupDataT;

        if (popupData.check && !popupData.check(appStore.getState())) {
            if (popupData.redirectPageName) {
                const redirectPageName =
                    typeof popupData.redirectPageName === 'function'
                        ? popupData.redirectPageName(appStore.getState())
                        : popupData.redirectPageName;

                if (redirectPageName) {
                    AppRouter.changePage({ pageName: redirectPageName });
                }
            }

            return;
        }

        const newUrl = window.location.pathname + getPopupSearch(name, data);
        const currentPopup = appStore.getState().currentPopup;

        set({
            ...(currentPopup ? { [currentPopup]: { isShow: false } } : {}),
            [name]: { isShow: true, ...data },
            currentPopup: name,
        });

        if (pushHistory) {
            window.history.pushState(null, '', newUrl);
        }
    },
    closePopup: ({ name, pushHistory = true }) => {
        setTimeout(() => {
            const currentPopup = appStore.getState().currentPopup;

            if (!name && currentPopup) {
                name = currentPopup as never;
            }

            if (name) {
                set({ [name]: { isShow: false }, currentPopup: undefined });
            }

            if (pushHistory) {
                window.history.pushState(null, '', window.location.pathname);
            }
        }, 10);
    },
});

export { popups, createPopupsStore };

export type { PopupsT, PopupT, InfoPopupT, PopupsReducersT };
