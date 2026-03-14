import React from 'react';

import Default from '@components/default/Default.tsx';
import Form from '@components/form/Form.tsx';

import getUserData from './methods/getUserData.ts';
import sendForm from './methods/sendForm.ts';

import HeaderI from './types.ts';

import { anketFields } from './static/fields.tsx';

class Header extends Default<HeaderI['props'], HeaderI['state']> implements HeaderI {
    parent: HeaderI['parent'];

    constructor(props: HeaderI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    getUserData = getUserData;

    sendForm = sendForm;

    render() {
        const { authUser } = this.props;

        return (
            <div ref={this.parent} className="anketHeader _SECTION">
                <div className="anketHeader__inner _INNER">
                    <div className="anketHeader__head _COL">
                        <h1 className="anketHeader__headTitle _TITLE">АНКЕТА</h1>
                        <p className="anketHeader__headText _TITLE _sub">
                            {authUser.isFirstAnket
                                ? 'Для завершения регистрации заполните данные ниже'
                                : 'Вы можете изменить данные ниже'}
                        </p>
                    </div>
                    <div className="anketHeader__content">
                        <Form
                            data={this.getUserData()}
                            fields={anketFields}
                            fieldsList={Object.keys(anketFields).filter(
                                (k) => authUser.isFirstAnket || k !== 'mailing',
                            )}
                            button={{
                                text: authUser.isFirstAnket ? 'завершить регистрацию' : 'Сохранить',
                                className: '_subColor',
                            }}
                            request={this.sendForm.bind(this)}
                            fieldClassName="_"
                            requiredText="* обязательные поля"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
