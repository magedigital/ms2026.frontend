import I from '../types.ts';

const setActive: I['setActive'] = async function (this: I, isActive = !this.state.isActive) {
    await this.asyncSetState({ isActive });

    if (isActive) {
        const input = this.parent.current!.querySelector(
            '.select__fieldInput input',
        ) as HTMLInputElement;

        if (input) {
            input.focus();
        }
    }
};

export default setActive;
