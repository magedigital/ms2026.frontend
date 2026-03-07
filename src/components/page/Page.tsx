import React from 'react';

import Default from '@components/default/Default.tsx';

import checkScroll from './methods/checkScroll.ts';
import init from './methods/init.ts';
import setMobMenu from './methods/setMobMenu.ts';

import PageI from './types.ts';

import renderPage from './renders/renderPage.tsx';

class Page<P extends {}, S extends {}>
    extends Default<PageI<P, S>['props'], PageI<P, S>['state']>
    implements PageI<P, S>
{
    parent: PageI<P, S>['parent'];

    constructor(props: PageI<P, S>['props']) {
        super(props);
        this.state = {} as PageI<P, S>['state'];

        this.parent = React.createRef();
    }

    init = init;

    checkScroll = checkScroll;
    setMobMenu = setMobMenu;

    renderPage = renderPage;
}

export default Page;
