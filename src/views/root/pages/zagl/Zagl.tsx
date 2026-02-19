import React from 'react';

import Default from '@components/default/Default.tsx';

import getCounter from './methods/getCounter.ts';
import init from './methods/init.ts';

import ZaglI from './types.ts';

import renderContent from './renders/renderContent.tsx';
import renderDate from './renders/renderDate.tsx';
import renderFooter from './renders/renderFooter.tsx';
import renderLogo from './renders/renderLogo.tsx';

class Zagl extends Default<ZaglI['props'], ZaglI['state']> implements ZaglI {
    parent: ZaglI['parent'];

    constructor(props: ZaglI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    init = init;

    getCounter = getCounter;

    renderLogo = renderLogo;
    renderDate = renderDate;
    renderContent = renderContent;
    renderFooter = renderFooter;

    render() {
        return (
            <div ref={this.parent} className="zagl">
                <div className="zagl__wrapper _SECTION">
                    <div className="zagl__inner">
                        {this.renderLogo()}
                        {this.renderDate()}
                        {this.renderContent()}
                    </div>
                    {this.renderFooter()}
                </div>
            </div>
        );
    }
}

export default Zagl;
