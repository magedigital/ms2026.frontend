import DefaultI from '@components/default/types';

type PropsT = {
    mode?: 'mobMenu';
    mobMenuHandler: (s?: boolean) => Promise<void>;
};

type StateT = {};

type TopBarNavItemT = { text: string; name: string };

interface TopBarI extends DefaultI<PropsT, StateT> {
    getNav(this: TopBarI): TopBarNavItemT[];

    renderLogo(this: TopBarI): React.ReactNode;
    renderNav(this: TopBarI): React.ReactNode;
    renderActions(this: TopBarI): React.ReactNode;
}

export default TopBarI;
export type { TopBarNavItemT };
