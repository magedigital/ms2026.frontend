import { UserPrizeT } from '@api/entities/User';
import DefaultI from '@components/default/types';

type PropsT = {
    prize: UserPrizeT;
};

type StateT = {};

interface PrizeI extends DefaultI<PropsT, StateT> {
    renderHead(this: PrizeI): React.ReactNode;
    renderContent(this: PrizeI): React.ReactNode;
}

export default PrizeI;
