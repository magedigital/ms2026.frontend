import PageI from '@components/page/types';
import { StoreT } from '@store/store';

type PropsT = {
    authUser: StoreT['authUser'];
};

type StateT = {};

interface ProfileI extends PageI<PropsT, StateT> {}

export default ProfileI;
