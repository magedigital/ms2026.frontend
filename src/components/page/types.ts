import { UIEvent } from 'react';

import DefaultI from '@components/default/types';

type PropsT = {};

type StateT = {
    isFixBarShow?: boolean;
    isMobMenuShow?: boolean;
};

interface PageI<P = {}, S = {}> extends DefaultI<PropsT & P, StateT & S> {
    isFixBarShow?: boolean;
    pageName?: string;

    checkScroll(this: PageI, e: UIEvent): Promise<void>;
    setMobMenu(this: PageI, s?: boolean): Promise<void>;

    pageInit?: () => Promise<void>;

    renderPage(this: PageI, data: { render: () => React.ReactNode }): React.ReactNode;
}

export default PageI;
