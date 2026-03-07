import DefaultI from '@components/default/types';
import { TableRenderRowT } from '@components/table/types';

import { winnerTableCols } from './static/table';

type PropsT = {};

type StateT = {
    searchWeek?: string;
    searchPhone?: string;
};

interface GameI extends DefaultI<PropsT, StateT> {
    setWeek(this: GameI, id: string): Promise<void>;
    setPhone(this: GameI, id: string): Promise<void>;

    renderGames(this: GameI): React.ReactNode;
    renderWinners(this: GameI): React.ReactNode;

    renderTableCol: TableRenderRowT<
        { date: string; phone: string; prize: string },
        keyof typeof winnerTableCols
    >;
}

export default GameI;
