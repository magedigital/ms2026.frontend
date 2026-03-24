import I from '../types.ts';

const setStep: I['setStep'] = async function (this: I, s, error) {
    this.error = error;

    await this.asyncSetState({
        currentStep: s,
    });
};

export default setStep;
