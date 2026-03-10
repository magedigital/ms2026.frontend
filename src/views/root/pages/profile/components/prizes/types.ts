import UserT from '@api/entities/User';
import DefaultI from '@components/default/types';

type PropsT = {
    authUser: UserT;
};

type StateT = {};

interface PrizesI extends DefaultI<PropsT, StateT> {}

export default PrizesI;
