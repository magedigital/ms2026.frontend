import { API } from '@api/api';
import request from '@utils/request';

type WinnersDataT = {
    raffles: {
        ended: boolean;
        from: string;
        id: string;
        name: string;
        publish: string;
        to: string;
    }[];
    winners: WinnerT[];
};

type WinnerT = {
    email: string;
    phone: string;
    prize: string;
    publish: string;
    raffleId: string;
    id: string;
};

async function getList(): Promise<WinnersDataT> {
    const r = await request<WinnersDataT>({
        method: 'GET',
        url: API.WINNERS.GET_LIST,
    });

    r.data.winners.forEach((w) => {
        w.id = w.raffleId;
    });

    return r.data;
}

export const winnersRequests = {
    getList,
};
export type { WinnersDataT, WinnerT };
