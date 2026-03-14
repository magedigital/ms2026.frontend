import React from 'react';

import Button from '@components/button/Button.tsx';

import I from '../types.ts';

const renderStartButtons: I['renderStartButtons'] = function () {
    return (
        <div className="calc__buttons _start">
            <div className="calc__button">
                <Button className="_subEmptyColor" onClick={this.close.bind(this)}>
                    Посчитать позже
                </Button>
            </div>
            <div className="calc__button">
                <Button className="_subColor" onClick={this.start.bind(this)}>
                    Получить расчёт
                </Button>
            </div>
        </div>
    );
};

export default renderStartButtons;
