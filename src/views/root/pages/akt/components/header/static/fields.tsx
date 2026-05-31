import React from 'react';

export const aktFields = {
    act: {
        support: 'Скан подписанного акта',
        type: 'file',
    },
    policy: {
        type: 'checkbox',
        checkbox: {
            content: (
                <>
                    Я соглашаюсь с{' '}
                    <a href="/upload/docs/politics-anket.pdf" target="_blank">
                        политикой конфиденциальности
                    </a>{' '}
                    и\xa0условиями обработки персональных данных*
                </>
            ),
        },
    },
} as const;
