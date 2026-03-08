import checkAuth from '@utils/checkAuth.ts';

import I from '../types.ts';

const init: I['init'] = async function () {
    this.resizeHandler(true);

    document.body.style.setProperty('--mediaM', `${window.mediaM}px`);

    window.addEventListener('resize', () => {
        this.resizeHandler();
    });

    this.popupsHandler(true);

    (document.addEventListener as CustomListenerT)('changePage', this.changePageListener);

    checkAuth({});
};

export default init;
