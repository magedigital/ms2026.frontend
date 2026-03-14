import React from 'react';

import I from '../types.ts';

const renderStartHead: I['renderStartHead'] = function () {
    return (
        <div className="calc__startHead _COL">
            <h3 className="calc__startHeadTitle">ИПОТЕЧНый Калькулятор</h3>
            <p className="calc__startHeadText">
                Введи размер остатка по своей ипотеке, и мы посчитаем
                <br />
                сколько это в упаковках сока Моя Семья**
            </p>
            <img
                src={require('@media/calc/pack-1.png')}
                alt=""
                className="calc__startHeadThumb _left"
            />
            <img
                src={require('@media/calc/pack-2.png')}
                alt=""
                className="calc__startHeadThumb _right"
            />
        </div>
    );
};

export default renderStartHead;
