import React from 'react';

import Default from '@components/default/Default.tsx';

import HeaderI from './types.ts';

import renderContent from './renders/renderContent.tsx';
import renderSteps from './renders/renderSteps.tsx';

class Header extends Default<HeaderI['props'], HeaderI['state']> implements HeaderI {
    parent: HeaderI['parent'];

    constructor(props: HeaderI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    renderContent = renderContent;
    renderSteps = renderSteps;

    render() {
        return (
            <div ref={this.parent} className="indexHeader _SECTION">
                <div className="indexHeader__inner _INNER">
                    {this.renderContent()}
                    {this.renderSteps()}
                </div>
            </div>
        );
    }
}

export default Header;
