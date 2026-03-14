import React from 'react';

import I from '../types.ts';

const renderContent: I['renderContent'] = function (this: I) {
    const { step } = this.state;

    return (
        <div className={this.getClass('calc', this.setClass(step))}>
            {this.renderStartHead()}
            {this.renderStartForm()}
            {this.renderStartButtons()}
            {this.renderProcess()}
            {this.renderResult()}
            <p className="calc__support">
                ** Расчёт не является точным и носит игровой характер, подробнее - в{' '}
                <a href="#">Правилах акции</a>
            </p>
        </div>
    );
};

export default renderContent;
