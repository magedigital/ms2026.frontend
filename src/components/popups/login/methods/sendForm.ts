import { authRequests } from '@api/requests/auth.ts';
import { enums } from '@global/enums.ts';
import checkAuth from '@utils/checkAuth.ts';
import { getCookie } from '@utils/cookies.ts';
import { RequestErrorT } from '@utils/request.ts';

import I from '../types.ts';

const sendForm: I['sendForm'] = async function () {
    const { form } = this.state;

    if (!form) {
        return;
    }

    if (getCookie(enums.ACCESS_TOKEN)) {
        return;
    }

    await this.asyncSetState({ loadingKey: 'send', error: undefined });

    try {
        await authRequests.login({
            login: form.login,
            password: form.password,
        });
        await checkAuth({ redirect: true });
    } catch (e) {
        const error = e as RequestErrorT;

        await this.asyncSetState({ error: { text: error?.errorText } });
    }

    await this.asyncSetState({ loadingKey: undefined });
};

export default sendForm;
