import React from 'react';

export const faqFields = {
    question: {
        type: 'input',
        support: 'Твой вопрос',
        input: {
            isArea: true,
        },
    },
    name: {
        type: 'input',
        support: 'Как тебя зовут',
        input: {},
    },
    email: {
        type: 'input',
        support: 'E-mail для получения ответа',
        input: {},
    },
    agreement: {
        type: 'checkbox',
        checkbox: {
            content: (
                <>
                    Я соглашаюсь с <a href="#">политикой конфиденциальности</a>
                </>
            ),
        },
    },
    personal: {
        type: 'checkbox',
        checkbox: {
            content: (
                <>
                    Я соглашаюсь с <a href="#">условиями обработки персональных данных</a>
                </>
            ),
        },
    },
} as const;
