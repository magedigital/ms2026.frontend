import React from 'react';

import Page from '@components/page/Page.tsx';
import { StoreT, WithStore } from '@store/store.tsx';

import Footer from '../../components/footer/Footer.tsx';
import Header from './components/header/Header.tsx';

import PrizeAnketI from './types.ts';

class PrizeAnket extends Page<PrizeAnketI['props'], PrizeAnketI['state']> implements PrizeAnketI {
    parent: PrizeAnketI['parent'];

    constructor(props: PrizeAnketI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    render() {
        const { authUser } = this.props;

        return this.renderPage({
            render: () =>
                authUser ? (
                    <>
                        <Header authUser={authUser} />
                        <Footer />
                    </>
                ) : null,
            className: '_inner',
        });
    }
}

const mapStore = (store: StoreT) => ({
    authUser: store.authUser,
});

export default WithStore(PrizeAnket, mapStore);
