import React from 'react';

import Default from '@components/default/Default.tsx';
import Link from '@components/link/Link.tsx';
import StringService from '@services/string/String.service.ts';
import { StoreT, WithStore } from '@store/store.tsx';

import FooterI from './types.ts';

class Footer extends Default<FooterI['props'], FooterI['state']> implements FooterI {
    parent: FooterI['parent'];

    constructor(props: FooterI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    render() {
        const { mainContent } = this.props;

        return (
            <div ref={this.parent} className="footer">
                <div className="footer__wrapper _SECTION">
                    <div className="footer__inner _INNER">
                        <div className="footer__nav">
                            <div className="footer__navBlock">
                                <a
                                    className="footer__navLink _CLICK"
                                    href="/upload/docs/rules.pdf"
                                    target="_blank"
                                >
                                    ПРАВИЛА АКЦИИ
                                </a>
                                <Link className="footer__navLink _CLICK" pageName="faq">
                                    ОБРАТНАЯ СВЯЗЬ
                                </Link>
                            </div>
                            <div className="footer__navBlock">
                                <a
                                    className="footer__navLink _CLICK"
                                    href="/upload/docs/politics.pdf"
                                    target="_blank"
                                >
                                    Политика в отношении обработки персональных данных
                                </a>
                                <a
                                    className="footer__navLink _CLICK"
                                    href="/upload/docs/agreement.pdf"
                                    target="_blank"
                                >
                                    Пользовательское соглашение
                                </a>
                            </div>
                        </div>
                        <p
                            className="footer__text"
                            dangerouslySetInnerHTML={{
                                __html: new StringService().setSpaces(
                                    mainContent?.components.footer.disclaimer.description,
                                ),
                            }}
                        ></p>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStore = (s: StoreT) => ({
    mainContent: s.mainContent,
});

export default WithStore(Footer, mapStore);
