import UserT from '@api/entities/User';
import DefaultI from '@components/default/types';
import { TableRenderRowT } from '@components/table/types';

import { codesTableCols } from './static/table';

type PropsT = {
    authUser: UserT;
};

type StateT = {};

interface CodesI extends DefaultI<PropsT, StateT> {
    renderTableCol: TableRenderRowT<
        { date: string; phone: string; prize: string },
        keyof typeof codesTableCols
    >;
}

export default CodesI;
