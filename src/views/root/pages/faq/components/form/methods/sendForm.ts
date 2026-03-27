import { faqRequests } from '@api/requests/faq.ts';
import scrollToBlock from '@utils/scrollToBlock.ts';

import I from '../types.ts';

const sendForm: I['sendForm'] = async function (form) {
    const data: Record<string, string | undefined> = {
        notFoundQuestion: 'Y',
    };

    Object.keys(form).forEach((k) => {
        const v = form[k];

        data[k] = v;
    });

    delete data.agreement;

    if (form.agreement && form.personal) {
        data.agreement = 'Y';
    }

    await faqRequests.sendForm({ data });
    await this.asyncSetState({ isSuccess: true, name: form.name });

    scrollToBlock({
        blockNode: this.parent.current!,
        scrollNode: this.parent.current!.closest('.page__scroll') as HTMLElement,
        duration: 300,
    });
};

export default sendForm;
