import { FieldT } from '@components/field/types.ts';

import I from '../types.ts';

const getFields: I['getFields'] = function () {
    const { authUser } = this.props;
    const fields: Record<string, FieldT> = {};

    if (authUser.extraDataRequired) {
        Object.keys(authUser.extraDataRequired).forEach((name) => {
            const field = authUser.extraDataRequired![name];
            let reg;
            let regExp;
            let type: FieldT['type'] | undefined;
            let isAddress: boolean | undefined;

            if (field.type === 'photo') {
                type = 'file';
            } else {
                type = 'input';
            }

            if (field.type === 'phone') {
                reg = 'phone' as const;
            } else if (field.type === 'date') {
                reg = 'date' as const;
            } else if (name === 'passportSeriesNumber') {
                reg = 'passport' as const;
            }

            if (field.type === 'address') {
                isAddress = true;
            }

            if (name === 'inn') {
                regExp = /\D/gi;
            }

            if (type) {
                fields[name] = {
                    type,
                    support: field.title,
                    ...(type === 'input' ? { input: { reg, regExp, isAddress } } : {}),
                };
            }
        });
    }

    fields.agreement = {
        type: 'checkbox',
        checkbox: {
            content:
                'Я соглашаюсь с политикой конфиденциальности и\xa0условиями обработки персональных данных*',
        },
    };

    return fields;
};

export default getFields;
