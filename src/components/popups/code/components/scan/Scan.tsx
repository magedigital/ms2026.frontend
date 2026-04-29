import React from 'react';

import Default from '@components/default/Default.tsx';
import Icon from '@components/icon/Icon.tsx';

import init from './methods/init.ts';

import ScanI from './types.ts';

class Scan extends Default<ScanI['props'], ScanI['state']> implements ScanI {
    parent: ScanI['parent'];

    constructor(props: ScanI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    init = init;

    render() {
        const { canZoom, canFocus } = this.state;

        return (
            <>
                <div ref={this.parent} className="popup__scanReader">
                    <div className="popup__scanReaderContent" />
                    {(canZoom || canFocus) && (
                        <div className="popup__scanReaderActions">
                            {canFocus && (
                                <div className="popup__scanReaderAction _focus">
                                    <div
                                        className="popup__scanReaderActionBtn _CLICK"
                                        onClick={() => {
                                            window.dataMatrixApp?.camFocus?.(20, true);
                                        }}
                                    >
                                        <Icon name="scan-focus" />
                                    </div>
                                    <p className="popup__scanReaderActionName">Фокус</p>
                                </div>
                            )}
                            {canZoom && (
                                <>
                                    <div className="popup__scanReaderAction _minus">
                                        <div
                                            className="popup__scanReaderActionBtn _CLICK"
                                            onClick={() => {
                                                window.dataMatrixApp?.camZoom?.(-20);
                                            }}
                                        >
                                            <Icon name="scan-minus" />
                                        </div>
                                    </div>
                                    <div className="popup__scanReaderAction _plus">
                                        <div
                                            className="popup__scanReaderActionBtn _CLICK"
                                            onClick={() => {
                                                window.dataMatrixApp?.camZoom?.(20);
                                            }}
                                        >
                                            <Icon name="scan-plus" />
                                        </div>
                                        <p className="popup__scanReaderActionName">Зум</p>
                                    </div>
                                </>
                            )}
                        </div>
                    )}
                </div>
            </>
        );
    }
}

export default Scan;
