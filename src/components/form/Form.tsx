import React from 'react';

import Button from '@components/button/Button.tsx';
import Editor from '@components/editor/Editor.tsx';
import Error from '@components/error/Error.tsx';
import Field from '@components/field/Field.tsx';

import changePropsCb from './methods/changePropsCb.ts';
import init from './methods/init.ts';
import sendForm from './methods/sendForm.ts';

import FormI from './types.ts';

class Form extends Editor<FormI['props'], FormI['state']> implements FormI {
    parent: FormI['parent'];

    constructor(props: FormI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    changingProps = ['fieldsKey'];

    changePropsCb = changePropsCb;

    init = init;

    sendForm = sendForm;

    render() {
        const { form, loadingKey, error } = this.state;
        const { fields, fieldsList, button, fieldClassName, requiredText, uploadFile } = this.props;

        if (!form) {
            return;
        }

        const resultFieldsList = fieldsList || Object.keys(fields);

        return (
            <div ref={this.parent} className="form _FULL_W _COL">
                <div className="form__fields">
                    {resultFieldsList.map((n, i) => (
                        <div
                            className="form__field"
                            key={n}
                            style={{ zIndex: resultFieldsList.length - i }}
                        >
                            <Field
                                {...fields[n]}
                                name={n}
                                value={form[n] ?? ''}
                                setValue={async ({ value }) => {
                                    await this.setValue({
                                        data: { [n]: value },
                                        targetName: 'form',
                                    });
                                }}
                                uploadFile={uploadFile}
                                className={this.getClass(
                                    '_formField',
                                    fieldClassName || '_whiteColor',
                                )}
                            />
                        </div>
                    ))}
                </div>
                {requiredText && <div className="form__required">{requiredText}</div>}
                <Error className="form__error" error={error?.text} />
                <div className="form__button">
                    <Button
                        className={this.getClass(button.className, '_bigSize')}
                        onClick={this.sendForm.bind(this)}
                        loading={loadingKey === 'send'}
                    >
                        {button.text}
                    </Button>
                </div>
            </div>
        );
    }
}

export default Form;
