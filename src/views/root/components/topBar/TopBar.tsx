import React from 'react';

import Default from '@components/default/Default.tsx';
import Icon from '@components/icon/Icon.tsx';
import Media from '@components/media/Media.tsx';

import getNav from './methods/getNav.ts';

import TopBarI from './types.ts';

import renderActions from './renders/renderActions.tsx';
import renderLogo from './renders/renderLogo.tsx';
import renderNav from './renders/renderNav.tsx';

class TopBar extends Default<TopBarI['props'], TopBarI['state']> implements TopBarI {
    parent: TopBarI['parent'];

    constructor(props: TopBarI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    getNav = getNav;

    renderLogo = renderLogo;
    renderNav = renderNav;
    renderActions = renderActions;

    render() {
        const { className, mode, mobMenuHandler } = this.props;

        return (
            <div
                ref={this.parent}
                className={this.getClass('topBar _SECTION', className, this.setClass(mode))}
            >
                <div className="topBar__inner _INNER">
                    <Media check={(d) => d === 'mobile'}>
                        <Icon
                            name={mode === 'mobMenu' ? 'menu-close' : 'menu-open'}
                            className="topBar__btn"
                            onClick={() => {
                                mobMenuHandler(mode !== 'mobMenu');
                            }}
                        />
                    </Media>
                    {this.renderLogo()}
                    <Media check={(d) => d === 'desktop'}>
                        {this.renderNav()}
                        {this.renderActions()}
                    </Media>
                    <Media check={(d) => d === 'mobile' && mode !== 'mobMenu'}>
                        <img
                            src={require('@media/user-profile.svg').default}
                            alt=""
                            className="topBar__profile"
                        />
                    </Media>
                </div>
                <Media check={(d) => d === 'mobile' && mode === 'mobMenu'}>
                    <div className="topBar__mobile _INNER">
                        {this.renderNav()}
                        {this.renderActions()}
                    </div>
                </Media>
            </div>
        );
    }
}

export default TopBar;
