import { StoreT, appStore } from '../../../store/store';

const pages = {
    index: {
        links: ['', undefined],
        isPublic: true,
    },
    profile: {
        links: ['profile'],
        check: (s: StoreT) => {
            if (!s.authUser) {
                const pageName = s.showPages.find((p) => (pages[p] as PageT).isPublic);

                return {
                    pageName: pageName || 'index',
                    callback: () => {
                        appStore.getState().setPopup({ name: 'loginPopup' });
                    },
                };
            }
        },
    },
    faq: {
        links: ['faq'],
        isPublic: true,
    },
    anket: {
        links: ['anket'],
    },
    fullAnket: {
        links: ['full-anket'],
    },
};

type PageT = {
    links: readonly (string | undefined)[];
} & Partial<{
    level: number;
    parentName: PageNamesT;
    isPopup: boolean;
    content: string;
    group: string;
    className: string;
    isPublic: boolean;
    mainPage: string | ((data: StoreT) => string);
    check: (s: StoreT) => { pageName: PageNamesT; callback?: () => void } | undefined;
}>;

type PageNamesT = keyof typeof pages;

export default pages;

export type { PageT, PageNamesT };
