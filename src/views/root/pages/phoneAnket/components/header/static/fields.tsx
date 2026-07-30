import React from 'react';

export const phoneAnketFields = {
    phone: {
        type: 'input',
        support: 'Номер мобильного телефона*',
        input: {
            reg: 'phone',
        },
    },
    phone2: {
        type: 'input',
        support: 'Номер мобильного телефона повторно*',
        input: {
            reg: 'phone',
        },
    },
    bank: {
        type: 'select',
        support: 'Выбор банка*',
    },
    agreement: {
        type: 'checkbox',
        checkbox: {
            content: (
                <>
                    Я соглашаюсь с{' '}
                    <a href="/upload/docs/politics.pdf" target="_blank">
                        политикой конфиденциальности
                    </a>
                </>
            ),
        },
    },
    personal: {
        type: 'checkbox',
        checkbox: {
            content: (
                <>
                    Я соглашаюсь с{' '}
                    <a href="/upload/docs/agreement-anket.pdf" target="_blank">
                        условиями обработки персональных данных
                    </a>
                </>
            ),
        },
    },
} as const;
