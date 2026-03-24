import DefaultI from '@components/default/types';
import { StoreT } from '@store/store';

import { MainContentT } from '../../../../../views/root/pages/index/types';

type PropsT = {
    amount: number;
    value: string;
    device: StoreT['device'];
    products: MainContentT['components']['header']['calculator']['products'];
};

type StateT = {
    isSlider?: boolean;
    isStart?: boolean;
    isEnd?: boolean;
};

interface ResultI extends DefaultI<PropsT, StateT> {}

export default ResultI;
