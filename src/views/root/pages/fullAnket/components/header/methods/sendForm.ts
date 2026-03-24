import { anketRequests } from '@api/requests/anket.ts';
import checkAuth from '@utils/checkAuth.ts';

import I from '../types.ts';

const sendForm: I['sendForm'] = async function (d) {
    const data = {
        firstName: d.firstName,
        lastName: d.lastName,
        thirdName: d.thirdName,
        phone: d.phone,
        agreement: !!d.agreement,
        mailing: d.mailing ? '1' : undefined,
        password1: d.password,
        password2: d.password2,
    };

    await anketRequests.send({ data });
    await checkAuth({ redirect: true });
};

export default sendForm;
