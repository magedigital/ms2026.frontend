import React from 'react';

import Field from '@components/field/Field.tsx';

import I from '../types.ts';

const renderForm: I['renderForm'] = function () {
    const { form } = this.state;
    const { device } = this.props;

    if (!form) {
        return;
    }

    return (
        <div className="popup__height _COL _COL_V_CENTER">
            <div className="popup__form _FULL_W">
                <div className="popup__formField _FULL_W">
                    <Field
                        type="input"
                        support={
                            device === 'desktop'
                                ? 'Адрес электронной почты (Ваш логин)'
                                : 'Email (Ваш логин)'
                        }
                        name="login"
                        value={form?.login || ''}
                        setValue={async ({ value }) => {
                            await this.setValue({ data: { login: value }, targetName: 'form' });
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default renderForm;
