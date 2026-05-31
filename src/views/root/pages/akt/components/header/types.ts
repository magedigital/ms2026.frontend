import UserT from '@api/entities/User';
import DefaultI from '@components/default/types';

type PropsT = {
    authUser: UserT;
};

type StateT = {
    error?: ErrorT;
    refreshKey?: string;
};

interface HeaderI extends DefaultI<PropsT, StateT> {
    formData: FormData;

    sendForm(this: HeaderI, d: Partial<Record<string, string>>): Promise<void>;
    downloadAkt(this: HeaderI): Promise<void>;
    resetAkt(this: HeaderI): Promise<void>;

    getPrizeId(this: HeaderI): string | undefined;
}

export default HeaderI;
