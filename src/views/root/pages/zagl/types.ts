import DefaultI from '@components/default/types';

type PropsT = {};

type StateT = {
    counter?: {
        title: string;
        count: string;
    };
};

interface ZaglI extends DefaultI<PropsT, StateT> {
    getCounter(this: ZaglI): Promise<void>;

    renderLogo(this: ZaglI): React.ReactNode;
    renderDate(this: ZaglI): React.ReactNode;
    renderContent(this: ZaglI): React.ReactNode;
    renderFooter(this: ZaglI): React.ReactNode;
}

export default ZaglI;
