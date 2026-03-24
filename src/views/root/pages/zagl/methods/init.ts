import I from '../types.ts';

const init: I['init'] = async function (this: I) {
    await this.getCounter();
};

export default init;
