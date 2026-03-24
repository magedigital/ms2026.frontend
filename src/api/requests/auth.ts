import { API } from '@api/api';
import UserT from '@api/entities/User';
import request from '@utils/request';

import { ProfileDataT } from '../../views/root/pages/profile/types';

async function login({
    ...data
}: {
    login: string | undefined;
    password: string | undefined;
    isCode?: boolean;
}): Promise<void> {
    await request<{ isFirstCheck?: boolean }>({
        method: 'POST',
        url: API.AUTH.LOGIN,
        data,
    });
}

async function logout(): Promise<void> {
    await request({
        method: 'POST',
        url: API.AUTH.LOGOUT,
    });
}

async function registration({
    ...data
}: {
    login: string | undefined;
    mode?: string;
    confirmEmail?: boolean;
}): Promise<{ mailService?: string }> {
    const r = await request<{ mailService?: string }>({
        method: 'POST',
        url: API.AUTH.REGISTRATION,
        data,
    });

    return {
        mailService: r.data.mailService,
    };
}

async function getUser(): Promise<{ user: UserT }> {
    const r = await request<UserT>({
        method: 'GET',
        url: API.AUTH.GET_USER,
    });

    return {
        user: r.data,
    };
}

const chzCodeStatues = {
    pending: { title: 'На проверке' },
    accepted: { title: 'Принят' },
    refused: { title: 'Отклонен' },
};

async function getInfo(): Promise<ProfileDataT> {
    const r = await request<ProfileDataT>({
        method: 'GET',
        url: API.AUTH.GET_INFO,
    });

    if (r.data.chzCodes) {
        r.data.chzCodes = r.data.chzCodes.map((c, i) => ({
            ...c,
            id: i.toString(),
            statusTitle: chzCodeStatues[c.status]?.title,
        }));
    }

    // r.data.chzCodes = [
    //     {
    //         id: '1',
    //         status: 'accepted',
    //         statusTitle: 'Accepted',
    //         registeredAt: '12.12.12',
    //         productName: 'Test',
    //     },
    //     {
    //         id: '2',
    //         status: 'accepted',
    //         statusTitle: 'Accepted',
    //         registeredAt: '12.12.12',
    //         productName: 'Test',
    //     },
    // ];

    return r.data;
}

export const authRequests = {
    login,
    logout,
    registration,
    getUser,
    getInfo,
};
