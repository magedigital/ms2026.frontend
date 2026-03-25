import I from '../types.ts';

const changePropsCb: I['changePropsCb'] = async function (this: I, p) {
    if (p === 'profileData') {
        await this.asyncSetState({ isInit: true });
    }
};

export default changePropsCb;
