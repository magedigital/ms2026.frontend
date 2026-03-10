import UserT from '@api/entities/User';
import DefaultI from '@components/default/types';

type PropsT = {
    authUser: UserT;
};

type StateT = {};

interface HeaderI extends DefaultI<PropsT, StateT> {
    logout(this: HeaderI): Promise<void>;

    renderInfo(this: HeaderI): React.ReactNode;
    renderGame(this: HeaderI): React.ReactNode;
}

export default HeaderI;
