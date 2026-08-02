import React from 'react';

import I from '../types.ts';

const renderList: I['renderList'] = function () {
    const { search } = this.state;
    const { value, onChange } = this.props;
    const list = this.props.list.filter(
        (i) => !search || i.title.toLowerCase().includes(search.toLowerCase()),
    );

    if (!list.length) {
        return;
    }

    return (
        <div className="select__list">
            {list.map((i) => (
                <div
                    className={this.getClass(
                        'select__listItem _CLICK',
                        i.id === value ? '_current' : '',
                    )}
                    key={i.id}
                    onClick={async () => {
                        if (onChange) {
                            onChange({ value: i.id });
                        }

                        await this.asyncSetState({ search: '' });
                        this.setActive(false);
                    }}
                >
                    {i.title}
                </div>
            ))}
        </div>
    );
};

export default renderList;
