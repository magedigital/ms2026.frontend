import getLocation from '@utils/getLocation.ts';
import scrollToBlock from '@utils/scrollToBlock.ts';

import I from '../types.ts';

const pageInit: I['pageInit'] = async function (this: I) {
    const { search } = getLocation();

    if (typeof search.ancor === 'string') {
        const scrollNode = this.parent
            .current!.closest('.page')!
            .querySelector<HTMLElement>('.page__scroll');
        const blockNode = document.querySelector<HTMLElement>(`[data-ancor="${search.ancor}"]`);

        if (scrollNode && blockNode) {
            scrollToBlock({ blockNode, scrollNode, duration: 0 });
        }
    }
};

export default pageInit;
