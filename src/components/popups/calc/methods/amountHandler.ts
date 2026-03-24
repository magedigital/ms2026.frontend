import I from '../types.ts';

const amountHandler: I['amountHandler'] = async function ({ value }) {
    value = value.replace(/\D/gi, '');

    if (value === '') {
        value = '0';
    }

    value = (+value).toString();
    value = value.slice(0, 9);

    const resultValueAr: string[] = [];

    value
        .split('')
        .reverse()
        .forEach((c, i) => {
            resultValueAr.unshift(c);

            if (i % 3 === 2 && value.length > 3) {
                resultValueAr.unshift(' ');
            }
        });

    value = resultValueAr.join('');

    await this.asyncSetState({ amount: value });
    this.setInputSize();
};

export default amountHandler;
