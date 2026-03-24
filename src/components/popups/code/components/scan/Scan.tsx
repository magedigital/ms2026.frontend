import React from 'react';

import Default from '@components/default/Default.tsx';

import init from './methods/init.ts';

import ScanI from './types.ts';

class Scan extends Default<ScanI['props'], ScanI['state']> implements ScanI {
    parent: ScanI['parent'];

    constructor(props: ScanI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    init = init;

    render() {
        return (
            <>
                <div ref={this.parent} className="popup__scanReader"></div>
            </>
        );
    }
}

export default Scan;
