import { API } from '@api/api';
import request from '@utils/request';

async function sendForm(d: { data: ObjT }): Promise<void> {
    await request({
        method: 'POST',
        url: API.FAQ.SEND_FORM,
        data: d.data,
    });
}

export const faqRequests = {
    sendForm,
};
