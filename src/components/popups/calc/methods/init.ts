import I from '../types.ts';

const init: I['init'] = async function (this: I) {
    this.setInputSize();

    this.unmountHandlers.all = () => {
        if (this.lineAnimateId) {
            cancelAnimationFrame(this.lineAnimateId);
        }
    };
};

export default init;
