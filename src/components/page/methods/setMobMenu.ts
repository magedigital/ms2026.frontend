import I from '../types.ts';

const setMobMenu: I['setMobMenu'] = async function (
    this: I,
    isMobMenuShow = !this.state.isMobMenuShow,
) {
    await this.asyncSetState({ isMobMenuShow });
};

export default setMobMenu;
