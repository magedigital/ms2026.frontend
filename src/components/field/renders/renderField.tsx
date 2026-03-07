import React from 'react';

import Input from '@components/input/Input.tsx';
import Select from '@components/select/Select.tsx';

import I from '../types.ts';

const renderField: I['renderField'] = function () {
    const { type, name, value, setValue, input, select } = this.props;

    console.log(value);

    if (type === 'input') {
        return (
            <Input
                className="_formField"
                value={value}
                onChange={async (p) => {
                    await setValue({ name, value: p.value });
                }}
                regExp={input?.regExp}
                regName={input?.reg}
                support={input?.support}
            />
        );
    }

    if (type === 'select') {
        return (
            <Select
                className="_formField"
                value={value}
                list={select?.list || []}
                onChange={async (p) => {
                    await setValue({ name, value: p.value });
                }}
            />
        );
    }
};

export default renderField;
