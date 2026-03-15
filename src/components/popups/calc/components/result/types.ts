import DefaultI from '@components/default/types';
import { StoreT } from '@store/store';

import { calcValues } from '../../static/values';

type PropsT = {
    amount: number;
    value: keyof typeof calcValues;
    device: StoreT['device'];
};

type StateT = {
    isSlider?: boolean;
    isStart?: boolean;
    isEnd?: boolean;
};

interface ResultI extends DefaultI<PropsT, StateT> {}

export default ResultI;
