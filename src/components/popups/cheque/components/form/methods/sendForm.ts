import { chequeRequests } from '@api/requests/cheque.ts';

import I from '../types.ts';

// const sendCRAGoal = () => {
// const user = store.getState().user;
// const utmSource = localStorage.getItem('utmSource');
// if (utmSource !== 'winbox' && utmSource !== 'advcake') {
//     return;
// }
// window.advcake_data = window.advcake_data || [];
// window.advcake_data.push({
//     pageType: 6,
//     user: {
//         email: v4(),
//         type,
//     },
//     leadInfo: {
//         id: 'e9adccc96c051de0ae5997a3bd624b36',
//         leadid: '1',
//         name: 'Регистрация чека',
//         totalPrice: 0,
//         coupon: 'NO',
//     },
// });
// };

const sendForm: I['sendForm'] = async function () {
    const { form } = this.state;

    if (!form) {
        return;
    }

    const { setStep, mode } = this.props;

    const formData: Record<string, string | null> = {
        fn: form.fn || null,
        fp: form.fp || null,
        fd: form.fd || null,
        sum: form.amount || null,
        day: null,
        month: null,
        hour: null,
        min: null,
        loadType: mode || null,
    };

    if (form.date) {
        const [day, month] = form.date.split('.');

        formData.day = day;
        formData.month = month;
    }

    if (form.time) {
        const [hour, min] = form.time.split(':');

        formData.hour = hour;
        formData.min = min;
    }

    Object.keys(formData).forEach((key) => {
        if (formData[key]) {
            this.formData.set(key, formData[key]);
        }
    });

    // if (checkChatbot()) {
    //     this.formData.set('interface', 'tg-bot');
    // }

    await this.asyncSetState({ loadingKey: 'send', error: undefined });

    try {
        await chequeRequests.regCheque({ data: this.formData });

        setStep('final');

        document.dispatchEvent(new CustomEvent('getProfileContent'));

        // sendGoal('regCheckSuccess', true);

        // if (response.data?.isFirstCheck) {
        //     sendGoal('regFirstCheck', true);
        // }

        // sendCRAGoal(response.data?.isFirstCheck ? 'new' : 'old');
    } catch (e) {
        const error = e as { errorText?: string };

        await this.asyncSetState({ error: { text: error.errorText } });

        // sendGoal('regCheckError', true);
    }

    await this.asyncSetState({ loadingKey: undefined });
};

export default sendForm;
