import React from 'react';

import Page from '@components/page/Page.tsx';

import FaqI from './types.ts';

class Faq extends Page<FaqI['props'], FaqI['state']> implements FaqI {
    parent: FaqI['parent'];

    constructor(props: FaqI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    pageName = 'faq';

    render() {
        return this.renderPage({
            render: () => <></>,
        });
    }
}

export default Faq;
