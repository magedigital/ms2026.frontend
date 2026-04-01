import { authRequests } from '@api/requests/auth.ts';
import { appStore } from '@store/store.tsx';
import checkAuth from '@utils/checkAuth.ts';
import { RequestErrorT } from '@utils/request.ts';

import I from '../types.ts';

const sendForm: I['sendForm'] = async function (code) {
    const { login } = this.props;

    if (!login) {
        return;
    }

    await this.asyncSetState({ loadingKey: 'send', error: undefined });

    try {
        await authRequests.login({
            login,
            password: code,
            isCode: true,
            ...(appStore.getState().authUser?.status === 'EMAIL_CONFIRM_REQUIRED'
                ? { confirmEmail: true }
                : {}),
        });
        await checkAuth({ redirect: true });
    } catch (e) {
        const error = e as RequestErrorT;
        await this.asyncSetState({ error: { text: error?.errorText } });
    }

    await this.asyncSetState({ loadingKey: undefined });
};

export default sendForm;
