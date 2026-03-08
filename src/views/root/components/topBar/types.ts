import DefaultI from '@components/default/types';
import { PageNamesT } from '@services/router/static/pages';

type PropsT = {
    mode?: 'mobMenu';
    mobMenuHandler: (s?: boolean) => Promise<void>;
};

type StateT = {};

type TopBarNavItemT = {
    text: string;
    name: string;
    type: 'ancor' | 'link';
    ancorName?: string;
    pageName?: PageNamesT;
};

interface TopBarI extends DefaultI<PropsT, StateT> {
    getNav(this: TopBarI): TopBarNavItemT[];
    navItemHandler(this: TopBarI, i: TopBarNavItemT): Promise<void>;

    renderLogo(this: TopBarI): React.ReactNode;
    renderNav(this: TopBarI): React.ReactNode;
    renderActions(this: TopBarI): React.ReactNode;
}

export default TopBarI;
export type { TopBarNavItemT };
