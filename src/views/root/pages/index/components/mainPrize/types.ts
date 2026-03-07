import DefaultI from '@components/default/types';

type PropsT = {};

type StateT = {};

interface MainPrizeI extends DefaultI<PropsT, StateT> {
    renderMainPrize(this: MainPrizeI): React.ReactNode;
    renderPrizes(this: MainPrizeI): React.ReactNode;
}

export default MainPrizeI;
