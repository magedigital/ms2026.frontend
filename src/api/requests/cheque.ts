import request from '@utils/request';

import { API } from '../api';

async function regCheque({ data }: { data: FormData }): Promise<{ isFirstCheck?: boolean }> {
    const response = await request<{ isFirstCheck?: boolean }>({
        method: 'POST',
        url: API.CHEQUE.SEND_FORM,
        data,
    });

    return response.data;
}

export const chequeRequests = {
    regCheque,
};
