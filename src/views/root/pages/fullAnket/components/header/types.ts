import UserT from '@api/entities/User';
import DefaultI from '@components/default/types';
import { FieldT } from '@components/field/types';

type PropsT = {
    authUser: UserT;
};

type StateT = {};

interface HeaderI extends DefaultI<PropsT, StateT> {
    getUserData(this: HeaderI): Partial<Record<string, string>>;
    getFields(this: HeaderI): Record<string, FieldT>;

    uploadFile(this: HeaderI, d: { file: File; name: string }): Promise<void>;
    sendForm(this: HeaderI, d: Partial<Record<string, string>>): Promise<void>;
}

export default HeaderI;
