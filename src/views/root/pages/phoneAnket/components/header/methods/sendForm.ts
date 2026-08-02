import { anketRequests } from '@api/requests/anket.ts';
import checkAuth from '@utils/checkAuth.ts';

import { setError } from '../../../../../components/errors/utils/errorHandler.ts';

import I from '../types.ts';

const sendForm: I['sendForm'] = async function (d) {
    const data = {
        phone: d.phone,
        sbpPhoneRepeat: d.phone2,
        bank: d.bank,
        agreement: !!d.agreement && !!d.personal,
    };

    if (!d.phone2) {
        return Promise.reject({ errorText: 'Введите номер мобильного телефона повторно' });
    }

    if (d.phone !== d.phone2) {
        return Promise.reject({ errorText: 'Телефоны должны совпадать' });
    }

    await anketRequests.send({ data });
    await checkAuth({ redirect: true });

    setError({ text: 'Данные успешно сохранены', type: 'success' });
};

export default sendForm;
