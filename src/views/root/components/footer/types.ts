import DefaultI from '@components/default/types';
import { StoreT } from '@store/store';

type PropsT = {
    mainContent: StoreT['mainContent'];
};

type StateT = {};

interface FooterI extends DefaultI<PropsT, StateT> {}

export default FooterI;
