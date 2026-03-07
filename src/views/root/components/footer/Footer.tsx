import React from 'react';

import Default from '@components/default/Default.tsx';
import StringService from '@services/string/String.service.ts';

import FooterI from './types.ts';

class Footer extends Default<FooterI['props'], FooterI['state']> implements FooterI {
    parent: FooterI['parent'];

    constructor(props: FooterI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    render() {
        return (
            <div ref={this.parent} className="footer _SECTION">
                <div className="footer__inner _INNER">
                    <div className="footer__nav">
                        <div className="footer__navBlock">
                            <div className="footer__navLink _CLICK">ПРАВИЛА АКЦИИ</div>
                            <div className="footer__navLink _CLICK">ОБРАТНАЯ СВЯЗЬ</div>
                        </div>
                        <div className="footer__navBlock">
                            <div className="footer__navLink _CLICK">
                                Политика в отношении обработки персональных данных
                            </div>
                            <div className="footer__navLink _CLICK">
                                Пользовательское соглашение
                            </div>
                        </div>
                    </div>
                    <p
                        className="footer__text"
                        dangerouslySetInnerHTML={{
                            __html: new StringService().setSpaces(
                                '1 — Вариант использования приза. 2 — Вариант использования приза. Максимальная сумма приза 35 тысяч рублей. 3 — Кэшбэк — возврат части денежных средств, потраченных на покупку продукции «Моя Семья» объемом 0.95 л, 1.93 л. Общий срок проведения акции с 01.04.2026 по 31.08.2026. Срок регистрации кодов для участия в Акции: с 01.04.2026 по 31.07.2026 (включительно). Информацию об организаторе акции, условиях участия, правилах проведения, призах, их количестве, сроках, месте и порядке их получения узнавайте на сайте prizy-moya-semia.ru.  © 2026. АО «Мултон». Все права защищены.',
                            ),
                        }}
                    ></p>
                </div>
            </div>
        );
    }
}

export default Footer;
