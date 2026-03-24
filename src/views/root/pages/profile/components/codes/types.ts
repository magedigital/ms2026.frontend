import UserT from '@api/entities/User';
import DefaultI from '@components/default/types';
import { TableRenderEmptyT, TableRenderRowT } from '@components/table/types';

import { ProfileChzCodeT, ProfileDataT } from '../../types';
import { codesTableCols } from './static/table';

type PropsT = {
    authUser: UserT;
    data: ProfileDataT;
};

type StateT = {};

interface CodesI extends DefaultI<PropsT, StateT> {
    renderTableCol: TableRenderRowT<ProfileChzCodeT, keyof typeof codesTableCols>;
    renderEmpty: TableRenderEmptyT;
}

export default CodesI;
