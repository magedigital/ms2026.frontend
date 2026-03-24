import React from 'react';

import I from '../types.ts';

const renderDate: I['renderDate'] = function () {
    const { counter } = this.state;

    return (
        <div className={this.getClass('zagl__date _ROW _ROW_CENTER', counter ? '_init' : '')}>
            <div className="zagl__dateStart _COL _COL_CENTER">
                СТАРТ АКЦИИ
                <b>01.04.2026</b>
            </div>
            <div className="zagl__dateTimer _COL _COL_CENTER">
                <p className="zagl__dateTimerSupport">ДО СТАРТА АКЦИИ</p>
                <p className="zagl__dateTimerValue">{counter?.count}</p>
                <div className="zagl__dateTimerSupport _main">{counter?.title}</div>
            </div>
        </div>
    );
};

export default renderDate;
