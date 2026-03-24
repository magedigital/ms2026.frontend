import { WinnerT, WinnersDataT } from '@api/requests/winners';
import DefaultI from '@components/default/types';
import { TableRenderEmptyT, TableRenderRowT } from '@components/table/types';

import { winnerTableCols } from './static/table';

type PropsT = {};

type StateT = {
    searchWeek?: string;
    searchPhone?: string;
    winnersData?: WinnersDataT;
    limit: number;
};

interface GameI extends DefaultI<PropsT, StateT> {
    step: number;

    setWeek(this: GameI, id: string): Promise<void>;
    setPhone(this: GameI, id: string): Promise<void>;

    getWinners(this: GameI): Promise<void>;
    getWinnersList(this: GameI): WinnerT[];

    renderGames(this: GameI): React.ReactNode;
    renderWinners(this: GameI): React.ReactNode;

    renderTableCol: TableRenderRowT<WinnerT, keyof typeof winnerTableCols>;
    renderTableEmpty: TableRenderEmptyT;
}

export default GameI;
