import React from 'react';

import Icon from '@components/icon/Icon.tsx';
import Input from '@components/input/Input.tsx';

import I from '../types.ts';

const renderField: I['renderField'] = function () {
    const { isActive, search } = this.state;
    const { value, list } = this.props;
    const currentItem = list.find((i) => i.id === value)?.title || '–';

    return (
        <div className="select__field _CLICK" onClick={() => this.setActive()}>
            {isActive ? (
                <div className="select__fieldInput">
                    <Input
                        className="_formField"
                        value={search ?? ''}
                        support="Введите название"
                        onChange={async (d) => {
                            await this.asyncSetState({ search: d.value });
                        }}
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                    />
                </div>
            ) : (
                <p className="select__fieldValue">{currentItem}</p>
            )}

            <Icon name="select-arrow" />
        </div>
    );
};

export default renderField;
