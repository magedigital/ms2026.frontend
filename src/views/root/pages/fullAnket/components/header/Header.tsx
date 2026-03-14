import React from 'react';

import Default from '@components/default/Default.tsx';
import Form from '@components/form/Form.tsx';

import getFields from './methods/getFields.ts';
import getUserData from './methods/getUserData.ts';
import sendForm from './methods/sendForm.ts';
import uploadFile from './methods/uploadFile.ts';

import HeaderI from './types.ts';

class Header extends Default<HeaderI['props'], HeaderI['state']> implements HeaderI {
    parent: HeaderI['parent'];

    constructor(props: HeaderI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    getUserData = getUserData;
    getFields = getFields;

    uploadFile = uploadFile;
    sendForm = sendForm;

    render() {
        return (
            <div ref={this.parent} className="anketHeader _SECTION">
                <div className="anketHeader__inner _INNER">
                    <div className="anketHeader__head _COL">
                        <h1 className="anketHeader__headTitle _TITLE">АНКЕТА</h1>
                        <p className="anketHeader__headText _TITLE _sub">
                            Для получения приза заполните все поля и приложите необходимые документы
                        </p>
                    </div>
                    <div className="anketHeader__content">
                        <Form
                            data={this.getUserData()}
                            fields={this.getFields()}
                            button={{ text: 'сохранить данные', className: '_subColor' }}
                            request={this.sendForm.bind(this)}
                            uploadFile={this.uploadFile.bind(this)}
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
