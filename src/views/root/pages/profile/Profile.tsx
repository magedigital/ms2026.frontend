import React from 'react';

import Page from '@components/page/Page.tsx';
import { StoreT, WithStore } from '@store/store.tsx';

import Footer from '../../components/footer/Footer.tsx';
import Codes from './components/codes/Codes.tsx';
import Header from './components/header/Header.tsx';
import Prizes from './components/prizes/Prizes.tsx';

import getData from './methods/getData.ts';
import init from './methods/init.ts';

import ProfileI from './types.ts';

class Profile extends Page<ProfileI['props'], ProfileI['state']> implements ProfileI {
    parent: ProfileI['parent'];

    constructor(props: ProfileI['props']) {
        super(props);
        this.state = {
            isInit: false,
        };

        this.parent = React.createRef();
    }

    init = init;

    getData = getData;

    render() {
        const { data } = this.state;
        const { authUser } = this.props;

        return this.renderPage({
            render: () => (
                <>
                    {authUser && data ? (
                        <>
                            <Header authUser={authUser} />
                            <Codes authUser={authUser} />
                            <Prizes authUser={authUser} data={data} />
                        </>
                    ) : null}

                    <Footer />
                </>
            ),
            className: '_inner',
        });
    }
}

const mapStore = (store: StoreT) => ({
    authUser: store.authUser,
});

export default WithStore(Profile, mapStore);
