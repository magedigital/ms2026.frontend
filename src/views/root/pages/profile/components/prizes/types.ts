import UserT from '@api/entities/User';
import DefaultI from '@components/default/types';

import { ProfileDataT } from '../../types';

type PropsT = {
    authUser: UserT;
    data: ProfileDataT;
};

type StateT = {};

interface PrizesI extends DefaultI<PropsT, StateT> {}

export default PrizesI;
