import React from 'react';

import Button from '@components/button/Button.tsx';
import Error from '@components/error/Error.tsx';

import I from '../types.ts';

const renderFoot: I['renderFoot'] = function () {
    const { error, loadingKey } = this.state;
    const { updateListRender } = this.props;

    return (
        <>
            <Error error={error?.text} className="popup__error" callback={updateListRender} />
            <div className="popup__buttons _FULL_W _ROW _ROW_CENTER">
                <div className="popup__button">
                    <Button
                        className="_backColor"
                        onClick={this.sendForm.bind(this)}
                        loading={loadingKey === 'send'}
                    >
                        Отправить
                    </Button>
                </div>
            </div>
        </>
    );
};

export default renderFoot;
