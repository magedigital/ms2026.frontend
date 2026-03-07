import I from '../types.ts';

const setStep: I['setStep'] = async function (s) {
    await this.asyncSetState({ currentStep: s });
};

export default setStep;
