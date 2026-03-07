import React from 'react';

import Fade from '@components/fade/Fade.tsx';
import Media from '@components/media/Media.tsx';

import TopBar from '../../../views/root/components/topBar/TopBar.tsx';

import I from '../types.ts';

const renderPage: I['renderPage'] = function ({ render }) {
    const { isFixBarShow, isMobMenuShow } = this.state;

    return (
        <div ref={this.parent} className={this.getClass('page')}>
            <div className={this.getClass('page__topBar _fix', isFixBarShow ? '_show' : '')}>
                <TopBar mobMenuHandler={this.setMobMenu.bind(this)} className="_fix" />
            </div>
            <Media check={(d) => d === 'mobile'}>
                <Fade className={this.getClass('page__topBar _mobMenu')} isShow={!!isMobMenuShow}>
                    <TopBar mobMenuHandler={this.setMobMenu.bind(this)} mode="mobMenu" />
                </Fade>
            </Media>
            <div className="page__scroll" onScroll={this.checkScroll.bind(this)}>
                <div className="page__scrollInner">
                    <div className="page__topBar">
                        <TopBar mobMenuHandler={this.setMobMenu.bind(this)} />
                    </div>
                    <div className="page__scrollContent">{render()}</div>
                </div>
            </div>
        </div>
    );
};

export default renderPage;
