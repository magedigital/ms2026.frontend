import DefaultI from '@components/default/types';

type PropsT = {};

type StateT = {};

interface HeaderI extends DefaultI<PropsT, StateT> {
    renderContent(this: HeaderI): React.ReactNode;
    renderSteps(this: HeaderI): React.ReactNode;
}

export default HeaderI;
