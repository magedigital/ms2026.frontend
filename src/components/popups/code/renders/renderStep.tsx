import React from 'react';

import Error from '../components/error/Error.tsx';
import Final from '../components/final/Final.tsx';
import Scan from '../components/scan/Scan.tsx';
import Start from '../components/start/Start.tsx';

import I from '../types.ts';

const renderStep: I['renderStep'] = function (id) {
    return (
        <div className="popup__step">
            {id === 'start' && <Start setStep={this.setStep.bind(this)} />}
            {id === 'scan' && (
                <Scan
                    setStep={this.setStep.bind(this)}
                    updateListRender={async () => {
                        await this.asyncSetState({ updateListRenderKey: new Date().getTime() });
                    }}
                />
            )}
            {id === 'error' && (
                <Error
                    error={this.error}
                    setStep={this.setStep.bind(this)}
                    updateListRender={async () => {
                        await this.asyncSetState({ updateListRenderKey: new Date().getTime() });
                    }}
                />
            )}
            {id === 'final' && <Final setStep={this.setStep.bind(this)} />}
        </div>
    );
};

export default renderStep;
