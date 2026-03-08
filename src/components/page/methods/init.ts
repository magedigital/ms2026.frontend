import removeTransition from '@utils/removeTransition.ts';

import I from '../types.ts';

const init: I['init'] = async function (this: I) {
    if (this.pageName) {
        const scrollKey = ['scroll', this.pageName].join('_');
        let scrollTop: number | string | null = localStorage.getItem(scrollKey);

        if (scrollTop) {
            scrollTop = +scrollTop;
        }

        if (scrollTop) {
            const pageScrollNode = this.parent.current!.querySelector<HTMLElement>('.page__scroll');

            if (pageScrollNode) {
                pageScrollNode.scrollTop = +scrollTop;
            }
        }
    }

    if (this.pageInit) {
        this.pageInit();
    }

    removeTransition({ item: '.page__topBar' });
};

export default init;
