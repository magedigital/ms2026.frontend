import React from 'react';

import Default from '@components/default/Default.tsx';

import FieldI from './types.ts';

import renderField from './renders/renderField.tsx';

class Field extends Default<FieldI['props'], FieldI['state']> implements FieldI {
    parent: FieldI['parent'];

    constructor(props: FieldI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    renderField = renderField;

    render() {
        const { className, support } = this.props;

        return (
            <div ref={this.parent} className={this.getClass('field', className)}>
                <p className="field__support">{support}</p>
                <div className="field__box">{this.renderField()}</div>
            </div>
        );
    }
}

export default Field;
