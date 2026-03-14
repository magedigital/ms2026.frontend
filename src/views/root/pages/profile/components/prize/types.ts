import DefaultI from '@components/default/types';

import { ProfileDataPrizeT } from '../../types';

type PropsT = {
    prize: ProfileDataPrizeT;
};

type StateT = {};

interface PrizeI extends DefaultI<PropsT, StateT> {
    renderHead(this: PrizeI): React.ReactNode;
    renderContent(this: PrizeI): React.ReactNode;
}

export default PrizeI;
