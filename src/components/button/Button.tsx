import React from 'react';

import Default from '@components/default/Default.tsx';
import LoaderBlock from '@components/loaderBlock/LoaderBlock.tsx';

import ButtonI from './types.ts';

class Button extends Default<ButtonI['props'], ButtonI['state']> implements ButtonI {
    parent: ButtonI['parent'];

    constructor(props: ButtonI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    render() {
        const { children, className, onClick, isLabel, loading } = this.props;
        const Tag = isLabel ? 'label' : 'div';

        return (
            <Tag
                className={this.getClass('button _CLICK', this.getClass(className))}
                onClick={onClick}
            >
                <LoaderBlock isShow={loading === true} className="button__loader" />
                {children}
            </Tag>
        );
    }
}

export default Button;
