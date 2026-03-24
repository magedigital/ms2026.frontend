import React from 'react';

import Button from '@components/button/Button.tsx';
import Error from '@components/error/Error.tsx';
import { appStore } from '@store/store.tsx';

import I from '../types.ts';

const renderFoot: I['renderFoot'] = function () {
    const { error, loadingKey } = this.state;
    const { isConfirm, updateListRender } = this.props;

    return (
        <div className="popup__foot _FULL_W _COL _COL_H_CENTER">
            <Error className="popup__error" error={error?.text} callback={updateListRender} />
            <div className="popup__buttons _FULL_W _ROW _ROW_H_CENTER">
                {!isConfirm && (
                    <div className="popup__button _fix">
                        <Button
                            className="_subEmptyColor"
                            onClick={() => {
                                appStore.getState().setPopup({ name: 'loginPopup' });
                            }}
                        >
                            личный кабинет
                        </Button>
                    </div>
                )}

                <div className="popup__button _fix">
                    <Button
                        className="_subColor"
                        onClick={this.sendForm.bind(this)}
                        loading={loadingKey === 'send'}
                    >
                        {isConfirm ? 'Получить код' : 'Получить пароль'}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default renderFoot;
