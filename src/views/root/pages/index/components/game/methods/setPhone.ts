import I from '../types.ts';

const setPhone: I['setPhone'] = async function (p) {
    await this.asyncSetState({ searchPhone: p.replace(/\D/gi, '').slice(0, 4) });
};

export default setPhone;
