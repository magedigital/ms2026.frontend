import PageI from '@components/page/types';
import { StoreT } from '@store/store';

type PropsT = {
    authUser: StoreT['authUser'];
    isAuthCheck: StoreT['isAuthCheck'];
};

type StateT = {
    data?: ProfileDataT;
};

type ProfileDataT = {
    personal: {
        id: string;
        firstName: string;
        lastName: string;
    };
    game: {
        attempts: number;
    };
    hasTransactions: boolean;
    transactions: any[];
    balance: number;
    balanceTitle: string;
    checks: any[];
    codes: any[];
    chzCodes: ProfileChzCodeT[];
    prizes: ProfileDataPrizeT[];
    canInputPromocode: boolean;
};

type ProfileChzCodeT = {
    id: string;
    registeredAt: string;
    productName: string;
    status: 'pending' | 'accepted' | 'refused';
    statusTitle: string;
    refuseReason?: string;
};

type ProfileDataPrizeT = {
    userPrizeId: string;
    id: string;
    title: string;
    url?: string;
    thumb: string;
    code: string;
    status: 'SENDING';
    statusTitle: string;
    act: any[];
    extraTitle: string;
    count: number;
};

interface ProfileI extends PageI<PropsT, StateT> {
    getData(this: ProfileI): Promise<void>;
}

export default ProfileI;
export type { ProfileDataT, ProfileDataPrizeT, ProfileChzCodeT };
