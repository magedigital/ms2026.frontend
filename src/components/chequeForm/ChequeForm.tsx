import React from 'react';

import Default from '@components/default/Default.tsx';

import setQRCode from './methods/setQRCode.ts';
import setStep from './methods/setStep.ts';
import uploadQRCode from './methods/uploadQRCode.ts';

import ChequeFormI from './types.ts';

import renderStep from './renders/renderStep.tsx';
import renderSteps from './renders/renderSteps.tsx';

class ChequeForm
    extends Default<ChequeFormI['props'], ChequeFormI['state']>
    implements ChequeFormI
{
    parent: ChequeFormI['parent'];

    constructor(props: ChequeFormI['props']) {
        super(props);
        this.state = {
            currentStep: 'start',
        };

        this.parent = React.createRef();
    }

    setStep = setStep;
    uploadQRCode = uploadQRCode;
    setQRCode = setQRCode;

    renderSteps = renderSteps;
    renderStep = renderStep;

    render() {
        return (
            <div ref={this.parent} className="chequeForm">
                {this.renderSteps()}
            </div>
        );
    }
}

export default ChequeForm;
