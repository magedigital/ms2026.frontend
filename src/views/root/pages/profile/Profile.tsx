import React from 'react';

import Page from '@components/page/Page.tsx';
import { StoreT, WithStore } from '@store/store.tsx';

import Footer from '../../components/footer/Footer.tsx';
import Codes from './components/codes/Codes.tsx';
import Header from './components/header/Header.tsx';
import Prizes from './components/prizes/Prizes.tsx';

import changePropsCb from './methods/changePropsCb.ts';
import checkAuthCb from './methods/checkAuthCb.ts';

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

    changingProps = ['profileData'];

    changePropsCb = changePropsCb;

    checkAuthCb = checkAuthCb;

    render() {
        const { authUser, profileData } = this.props;

        return this.renderPage({
            render: () => (
                <>
                    {authUser && profileData ? (
                        <>
                            <Header data={profileData} authUser={authUser} />
                            <Codes data={profileData} authUser={authUser} />
                            <Prizes data={profileData} authUser={authUser} />
                        </>
                    ) : null}

                    <Footer />
                </>
            ),
            className: '_inner',
        });
    }
}

const mapStore = (s: StoreT) => ({
    authUser: s.authUser,
    isAuthCheck: s.isAuthCheck,
    profileData: s.profileData,
});

export default WithStore(Profile, mapStore);
