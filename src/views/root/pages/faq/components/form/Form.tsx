import React from 'react';

import Default from '@components/default/Default.tsx';
import Fade from '@components/fade/Fade.tsx';
import Form from '@components/form/Form.tsx';

import sendForm from './methods/sendForm.ts';

import FormI from './types.ts';

import { faqFields } from './static/fields.tsx';

class FaqForm extends Default<FormI['props'], FormI['state']> implements FormI {
    parent: FormI['parent'];

    constructor(props: FormI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    sendForm = sendForm;

    render() {
        const { isSuccess, name } = this.state;

        return (
            <div ref={this.parent} className="faqForm _SECTION">
                <div className="faqForm__inner _COL">
                    <h3 className="faqForm__title">
                        ЕСЛИ ВЫ НЕ НАШЛИ ОТВЕТ
                        <br />
                        НА СВОЙ ВОПРОС, <br className="_MOBILE" />
                        СВЯЖИТЕСЬ С НАМИ
                    </h3>

                    <div className={this.getClass('faqForm__form', isSuccess && '_success')}>
                        <Fade className="faqForm__success" isShow={!!isSuccess}>
                            <h3 className="faqForm__successTitle">Спасибо, {name}!</h3>
                            <p className="faqForm__successText">
                                Сообщение отправлено, мы свяжемся <br />
                                с&nbsp;тобой в&nbsp;ближайшее время
                            </p>
                        </Fade>
                        <div className="faqForm__formInner">
                            <Form
                                fields={faqFields}
                                button={{ text: 'отправить', className: '_whiteEmptyColor' }}
                                request={this.sendForm.bind(this)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FaqForm;
