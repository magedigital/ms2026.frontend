import React from 'react';

import Button from '@components/button/Button.tsx';
import { appStore } from '@store/store.tsx';

import I from '../types.ts';

const renderEmpty: I['renderEmpty'] = function () {
    return (
        <>
            <h3>Кодов пока нет</h3>
            <div className="table__emptyButton">
                <Button
                    className="_backColor"
                    onClick={() => {
                        appStore.getState().setPopup({ name: 'codePopup' });
                    }}
                >
                    Зарегистрируйте первый код
                </Button>
            </div>
        </>
    );
};

export default renderEmpty;
