import React from 'react';

import Editor from '@components/editor/Editor.tsx';

import init from './methods/init.ts';

import CodeI from './types.ts';

import renderFoot from './renders/renderFoot.tsx';
import renderForm from './renders/renderForm.tsx';
import renderHead from './renders/renderHead.tsx';

class Code extends Editor<CodeI['props'], CodeI['state']> implements CodeI {
    parent: CodeI['parent'];

    constructor(props: CodeI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    init = init;

    renderHead = renderHead;
    renderForm = renderForm;
    renderFoot = renderFoot;

    render() {
        return (
            <>
                {this.renderHead()}
                {this.renderForm()}
                {this.renderFoot()}
            </>
        );
    }
}

export default Code;
