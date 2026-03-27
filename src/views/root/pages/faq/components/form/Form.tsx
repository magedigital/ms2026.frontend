import React from 'react';

import Default from '@components/default/Default.tsx';
import Form from '@components/form/Form.tsx';
import List from '@components/list/List.tsx';

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
            <div
                ref={this.parent}
                className={this.getClass('faqForm _SECTION', isSuccess && '_success')}
            >
                <div className="faqForm__inner">
                    <List
                        renderKey={isSuccess ? '1' : '0'}
                        items={isSuccess ? [{ _id: 'success' }] : [{ _id: 'form' }]}
                        parentClass="faqForm__innerBlocks"
                        itemClass="faqForm__innerBlock"
                        itemStyleProps={[]}
                        parentStyleProps={['width']}
                        parentRealStyleProps={['width']}
                        render={({ item }) => ({
                            item: (
                                <div className="faqForm__innerBlock">
                                    {item._id === 'success' && (
                                        <div className="faqForm__success">
                                            <div className="faqForm__successInner _COL">
                                                <h3 className="faqForm__successTitle">
                                                    Спасибо, {name}!
                                                </h3>
                                                <p className="faqForm__successText">
                                                    Сообщение отправлено, мы свяжемся <br />
                                                    с&nbsp;тобой в&nbsp;ближайшее время
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                    {item._id === 'form' && (
                                        <>
                                            <h3 className="faqForm__title">
                                                ЕСЛИ ВЫ НЕ НАШЛИ ОТВЕТ
                                                <br />
                                                НА СВОЙ ВОПРОС, <br className="_MOBILE" />
                                                СВЯЖИТЕСЬ С НАМИ
                                            </h3>
                                            <div className={this.getClass('faqForm__form')}>
                                                <div className="faqForm__formInner">
                                                    <Form
                                                        fields={faqFields}
                                                        button={{
                                                            text: 'отправить',
                                                            className: '_whiteEmptyColor',
                                                        }}
                                                        request={this.sendForm.bind(this)}
                                                    />
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            ),
                        })}
                        resizeWidth={true}
                    />
                </div>
            </div>
        );
    }
}

export default FaqForm;
