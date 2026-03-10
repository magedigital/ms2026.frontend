import React from 'react';

import Default from '@components/default/Default.tsx';

import HeaderI from './types.ts';

import Question from '../question/Question.tsx';

class Header extends Default<HeaderI['props'], HeaderI['state']> implements HeaderI {
    parent: HeaderI['parent'];

    constructor(props: HeaderI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    render() {
        const { content } = this.props;
        const questions = content!.components.faq;

        return (
            <div ref={this.parent} className="faqHeader _SECTION">
                <div className="faqHeader__inner _INNER">
                    <h1 className="faqHeader__title _TITLE">ВОПРОС/ОТВЕТ</h1>
                    <div className="faqHeader__items _FULL_W">
                        {questions.map((question, index) => (
                            <div className="faqHeader__item _FULL_W" key={index}>
                                <Question question={{ ...question, key: index + 1 }} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
