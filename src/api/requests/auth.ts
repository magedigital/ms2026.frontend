import request from '@utils/request';

import { API } from '../api';

async function login({
    ...data
}: {
    login: string | undefined;
    password: string | undefined;
}): Promise<void> {
    await request<{ isFirstCheck?: boolean }>({
        method: 'POST',
        url: API.AUTH.LOGIN,
        data,
    });
}

export const authRequests = {
    login,
};
