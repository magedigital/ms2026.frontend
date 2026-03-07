import React from 'react';

import Form from '../components/form/Form.tsx';
import Scan from '../components/scan/Scan.tsx';
import Start from '../components/start/Start.tsx';

import I from '../types.ts';

const renderStep: I['renderStep'] = function (id) {
    const { mode } = this.state;

    return (
        <div className="chequeForm__step">
            {id === 'start' && (
                <Start
                    setStep={this.setStep.bind(this)}
                    uploadQRCode={this.uploadQRCode.bind(this)}
                />
            )}
            {id === 'scan' && (
                <Scan setStep={this.setStep.bind(this)} setQRCode={this.setQRCode.bind(this)} />
            )}
            {id === 'form' && (
                <Form
                    scanData={this.scanData}
                    setStep={this.setStep.bind(this)}
                    updateListRender={async () => {
                        await this.asyncSetState({ updateListRenderKey: new Date().getTime() });
                    }}
                    mode={mode}
                />
            )}
        </div>
    );
};

export default renderStep;
