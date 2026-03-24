import DefaultI from '@components/default/types';

type PropsT = {};

type StateT = {};

interface PrizesI extends DefaultI<PropsT, StateT> {
    renderMainPrize(this: PrizesI): React.ReactNode;
    renderPrizes(this: PrizesI): React.ReactNode;
}

export default PrizesI;
