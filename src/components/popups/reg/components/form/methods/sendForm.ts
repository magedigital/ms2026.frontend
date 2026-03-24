import { authRequests } from '@api/requests/auth.ts';
import { RequestErrorT } from '@utils/request.ts';

import I from '../types.ts';

const sendForm: I['sendForm'] = async function () {
    const { form } = this.state;
    const { setStep } = this.props;

    if (!form) {
        return;
    }

    await this.asyncSetState({ loadingKey: 'send', error: undefined });

    try {
        const response = await authRequests.registration({ login: form.login });

        await setStep('code', {
            login: form.login!,
            mailService: response.mailService,
        });
    } catch (e) {
        const error = e as RequestErrorT;

        await this.asyncSetState({ error: { text: error?.errorText } });
    }

    await this.asyncSetState({ loadingKey: undefined });
};

export default sendForm;
