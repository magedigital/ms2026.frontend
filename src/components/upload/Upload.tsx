import React from 'react';

import DashedBorder from '@components/dashedBorder/DashedBorder.tsx';
import Default from '@components/default/Default.tsx';

import init from './methods/init.ts';
import uploadHandler from './methods/uploadHandler.ts';

import UploadI from './types.ts';

import renderMain from './renders/renderMain.tsx';
import renderOver from './renders/renderOver.tsx';
import renderResult from './renders/renderResult.tsx';

class Upload extends Default<UploadI['props'], UploadI['state']> implements UploadI {
    parent: UploadI['parent'];

    constructor(props: UploadI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    init = init;

    uploadHandler = uploadHandler;

    renderMain = renderMain;
    renderResult = renderResult;
    renderOver = renderOver;

    render() {
        const { isOver } = this.state;
        const { fileName } = this.props;

        return (
            <div
                ref={this.parent}
                className={this.getClass('upload', fileName && '_upload', isOver && '_over')}
            >
                <div className="upload__border">
                    <DashedBorder />
                </div>
                {this.renderMain()}
                {this.renderResult()}
                {this.renderOver()}
            </div>
        );
    }
}

export default Upload;
