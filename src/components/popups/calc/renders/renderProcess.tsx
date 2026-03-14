import React from 'react';

import I from '../types.ts';

import { calcProgressSteps } from '../static/progressSteps.ts';

const renderProcess: I['renderProcess'] = function () {
    const { currentProgressStep } = this.state;

    return (
        <div className="calc__process _COL">
            {(Object.keys(calcProgressSteps) as (keyof typeof calcProgressSteps)[]).map((k) => (
                <>
                    <div
                        className={this.getClass(
                            'calc__processThumb',
                            this.setClass(k),
                            currentProgressStep === +k && '_current',
                            currentProgressStep! > +k ? '_next' : '_prev',
                        )}
                        key={k}
                    >
                        <img
                            src={require(`@media/calc/${calcProgressSteps[k].thumb}`)}
                            className={this.getClass('calc__processThumbInner')}
                        />
                    </div>

                    <img
                        src={require(`@media/calc/${calcProgressSteps[k].back}`)}
                        className={this.getClass(
                            'calc__processBack',
                            this.setClass(k),
                            currentProgressStep === +k && '_current',
                        )}
                        key={k}
                    />
                </>
            ))}

            <div className="calc__processProgress">
                <div className="calc__processProgressInner">
                    <div className="calc__processProgressLine" />
                    {(Object.keys(calcProgressSteps) as (keyof typeof calcProgressSteps)[]).map(
                        (k) => (
                            <p
                                className={this.getClass(
                                    'calc__processProgressTitle',
                                    currentProgressStep === +k && '_current',
                                    currentProgressStep! > +k ? '_next' : '_prev',
                                )}
                                key={k}
                            >
                                {calcProgressSteps[k].title}
                            </p>
                        ),
                    )}
                </div>
            </div>
        </div>
    );
};

export default renderProcess;
