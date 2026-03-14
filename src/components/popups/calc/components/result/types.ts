import DefaultI from '@components/default/types';

import { calcValues } from '../../static/values';

type PropsT = {
    amount: number;
    value: keyof typeof calcValues;
};

type StateT = {
    isSlider?: boolean;
    isStart?: boolean;
    isEnd?: boolean;
};

interface ResultI extends DefaultI<PropsT, StateT> {}

export default ResultI;
