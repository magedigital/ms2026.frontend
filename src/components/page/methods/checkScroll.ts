import I from '../types.ts';

const checkScroll: I['checkScroll'] = async function (e) {
    const stop = 200;
    const targetNode = e.target as HTMLElement;
    const { scrollTop } = targetNode;

    if (scrollTop > stop && !this.isFixBarShow) {
        this.isFixBarShow = true;
        await this.asyncSetState({ isFixBarShow: true });
    }

    if (scrollTop <= stop && this.isFixBarShow) {
        this.isFixBarShow = false;
        await this.asyncSetState({ isFixBarShow: false });
    }

    if (this.pageName) {
        const scrollKey = ['scroll', this.pageName].join('_');
        localStorage.setItem(scrollKey, scrollTop.toString());
    }
};

export default checkScroll;
