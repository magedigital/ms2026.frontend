import React from 'react';

import List from '@components/list/List.tsx';

import I from '../types.ts';

import { chequeFormSteps } from '../static/steps.ts';

const renderSteps: I['renderSteps'] = function () {
    const { currentStep, updateListRenderKey } = this.state;

    return (
        <>
            <List
                renderKey={[currentStep, updateListRenderKey].join('')}
                items={[{ _id: currentStep }]}
                parentClass="chequeForm__steps"
                itemClass="chequeForm__stepsItem"
                itemStyleProps={[]}
                parentStyleProps={['width']}
                parentRealStyleProps={['width']}
                render={({ item }) => ({
                    item: this.renderStep(item._id),
                })}
                allItems={Object.keys(chequeFormSteps)}
                currentItem={currentStep}
                resizeWidth={true}
            />
        </>
    );
};

export default renderSteps;
