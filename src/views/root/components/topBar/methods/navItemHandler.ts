import { appStore } from '@store/store.tsx';
import getLocation from '@utils/getLocation.ts';
import scrollToBlock from '@utils/scrollToBlock.ts';

import I from '../types.ts';

import { AppRouter } from '../../../../../index.tsx';

const navItemHandler: I['navItemHandler'] = async function (item) {
    const { mobMenuHandler } = this.props;
    const scrollNode = this.parent
        .current!.closest('.page')!
        .querySelector<HTMLElement>('.page__scroll');
    const showPages = appStore.getState().showPages;

    if (!scrollNode) {
        return;
    }

    mobMenuHandler(false);

    if (item.type === 'ancor') {
        const { search } = getLocation();
        const ancorName = item.ancorName;

        if (search.ancor !== ancorName) {
            if (showPages.includes('index')) {
                const blockNode = document.querySelector<HTMLElement>(
                    `[data-ancor="${ancorName}"]`,
                );

                if (blockNode) {
                    scrollToBlock({ blockNode, scrollNode });
                }
            }

            AppRouter.changePage({
                pageName: 'index',
                search: ancorName !== 'index' ? [{ name: 'ancor', value: ancorName! }] : undefined,
            });
        }
    }

    if (item.type === 'link') {
        AppRouter.changePage({ pageName: item.pageName! });
    }
};

export default navItemHandler;
