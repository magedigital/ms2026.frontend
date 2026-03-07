import React from 'react';

import Page from '@components/page/Page.tsx';

import Footer from '../../components/footer/Footer.tsx';
import Game from './components/game/Game.tsx';
import Header from './components/header/Header.tsx';
import MainPrize from './components/mainPrize/MainPrize.tsx';

import IndexI from './types.ts';

class Index extends Page<IndexI['props'], IndexI['state']> implements IndexI {
    parent: IndexI['parent'];

    constructor(props: IndexI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    pageName = 'index';

    render() {
        return this.renderPage({
            render: () => (
                <>
                    <Header />
                    <MainPrize />
                    <Game />
                    <Footer />
                </>
            ),
        });
    }
}

export default Index;
