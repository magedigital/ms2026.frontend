import React from 'react';

import Fade from '@components/fade/Fade.tsx';
import LoaderBlock from '@components/loaderBlock/LoaderBlock.tsx';
import Media from '@components/media/Media.tsx';

import TopBar from '../../../views/root/components/topBar/TopBar.tsx';

import I from '../types.ts';

const renderPage: I['renderPage'] = function ({ render, className }) {
    const { isFixBarShow, isMobMenuShow, isInit } = this.state;

    return (
        <div
            ref={this.parent}
            className={this.getClass('page', className, isInit === false && '_loading')}
        >
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
                    {typeof isInit === 'boolean' && (
                        <LoaderBlock isShow={!isInit} className="page__loader" />
                    )}
                    <div className="page__scrollContent _COL">{render()}</div>
                </div>
            </div>
        </div>
    );
};

export default renderPage;
