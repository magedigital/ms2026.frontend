import React from 'react';

import I from '../types.ts';

const renderStartForm: I['renderStartForm'] = function () {
    const { amount, step } = this.state;

    return (
        <div className="calc__startForm _COL">
            <div className="calc__startFormField">
                <input
                    id="calcFormInput"
                    type="text"
                    className="calc__startFormInput"
                    value={amount}
                    onChange={(e) => {
                        this.amountHandler({ value: e.target.value });
                    }}
                    onSelect={(e) => {
                        const inputNode = e.target as HTMLInputElement;

                        inputNode.focus();
                        inputNode.selectionStart = this.state.amount.length;
                        inputNode.selectionEnd = this.state.amount.length;
                    }}
                    autoComplete="off"
                    disabled={step !== 'start'}
                    readOnly={step !== 'start'}
                />
                <label htmlFor="calcFormInput">₽</label>
            </div>
        </div>
    );
};

export default renderStartForm;
