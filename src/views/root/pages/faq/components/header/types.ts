import DefaultI from '@components/default/types';

import { FaqContentT } from '../../types';

type PropsT = {
    content: FaqContentT;
};

type StateT = {};

interface HeaderI extends DefaultI<PropsT, StateT> {}

export default HeaderI;
