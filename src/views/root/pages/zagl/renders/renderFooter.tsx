import React from 'react';

import StringService from '@services/string/String.service.ts';

import I from '../types.ts';

const renderFooter: I['renderFooter'] = function () {
    return (
        <div className="zagl__footer _COL _COL_CENTER">
            <p
                className="zagl__footerText"
                dangerouslySetInnerHTML={{
                    __html: new StringService().setSpaces(
                        '1 — Вариант использования приза. 2 — Вариант использования приза. Максимальная сумма приза 35 тысяч рублей. 3 — Кэшбэк — возврат части денежных средств, потраченных на покупку продукции «Моя Семья» объемом 0.95 л, 1.95 л. Общий срок проведения акции с 01.04.2026 по 31.08.2026. Срок регистрации кодов для участия в Акции: с 01.04.2026 по 31.07.2026 (включительно). Информацию об организаторе акции, условиях участия, правилах проведения, призах, их количестве, сроках, месте и порядке их получения узнавайте на сайте prizy-moya-semia.ru.  © 2026. АО «Мултон». Все права защищены.',
                    ),
                }}
            />
        </div>
    );
};

export default renderFooter;
