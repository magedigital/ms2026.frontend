import React from 'react';

import Checkbox from '@components/checkbox/Checkbox.tsx';
import Input from '@components/input/Input.tsx';
import Select from '@components/select/Select.tsx';
import Upload from '@components/upload/Upload.tsx';

import I from '../types.ts';

const renderField: I['renderField'] = function () {
    const { type, name, value, setValue, uploadFile, input, select, checkbox, className } =
        this.props;

    if (type === 'input') {
        return (
            <Input
                className={this.getClass('_formField', className)}
                value={value}
                onChange={async (p) => {
                    await setValue({ name, value: p.value });
                }}
                regExp={input?.regExp}
                regName={input?.reg}
                support={input?.support}
                isArea={input?.isArea}
                isPassword={input?.isPassword}
            />
        );
    }

    if (type === 'select') {
        return (
            <Select
                className={this.getClass('_formField', className)}
                value={value}
                list={select?.list || []}
                onChange={async (p) => {
                    await setValue({ name, value: p.value });
                }}
            />
        );
    }

    if (type === 'checkbox') {
        return (
            <Checkbox
                className={this.getClass('_formField', className)}
                value={!!value}
                onChange={async (p) => {
                    await setValue({ name, value: p.value });
                }}
            >
                {checkbox?.content}
            </Checkbox>
        );
    }

    if (type === 'file') {
        return (
            <Upload
                fileName={value}
                onChange={async (d) => {
                    if (uploadFile) {
                        await uploadFile({ file: d.file });
                    }
                }}
            />
        );
    }
};

export default renderField;
