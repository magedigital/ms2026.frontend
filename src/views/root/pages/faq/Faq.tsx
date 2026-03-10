import React from 'react';

import { getLocalContent } from '@api/requests/content.ts';
import Page from '@components/page/Page.tsx';

import Footer from '../../components/footer/Footer.tsx';
import Form from './components/form/Form.tsx';
import Header from './components/header/Header.tsx';

import getContent from './methods/getContent.ts';
import pageInit from './methods/pageInit.ts';

import FaqI from './types.ts';

class Faq extends Page<FaqI['props'], FaqI['state']> implements FaqI {
    parent: FaqI['parent'];

    constructor(props: FaqI['props']) {
        super(props);
        this.state = {
            content: getLocalContent('faq'),
        };

        this.parent = React.createRef();
    }

    pageName = 'faq';

    getContent = getContent;
    pageInit = pageInit;

    render() {
        const { content } = this.state;

        return this.renderPage({
            render: () =>
                content ? (
                    <>
                        <Header content={content} />
                        <Form />
                        <Footer />
                    </>
                ) : null,
            className: '_inner',
        });
    }
}

export default Faq;
