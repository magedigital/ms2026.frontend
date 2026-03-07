import React from 'react';

import Default from '@components/default/Default.tsx';

import ButtonI from './types.ts';

class Button extends Default<ButtonI['props'], ButtonI['state']> implements ButtonI {
    parent: ButtonI['parent'];

    constructor(props: ButtonI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    render() {
        const { children, className, onClick, isLabel } = this.props;
        const Tag = isLabel ? 'label' : 'div';

        return (
            <Tag
                className={this.getClass('button _CLICK', this.getClass(className))}
                onClick={onClick}
            >
                {children}
            </Tag>
        );
    }
}

export default Button;
