import React from 'react';

import Icon from '@components/icon/Icon.tsx';
import StringService from '@services/string/String.service.ts';

import I from '../types.ts';

const renderContent: I['renderContent'] = function () {
    const { prize } = this.props;

    return (
        <div className="profilePrize__content _COL">
            <p className="profilePrize__name">
                {prize.title}
                {prize.extraTitle && (
                    <div className="profilePrize__info">
                        <Icon className="_CLICK" name="info-i" />
                        <div
                            className="profilePrize__infoAlert"
                            dangerouslySetInnerHTML={{
                                __html: new StringService().setSpaces(prize.extraTitle),
                            }}
                        ></div>
                    </div>
                )}
            </p>
            <div className={this.getClass('profilePrize__status', this.setClass(prize.status))}>
                {prize.statusTitle}
            </div>
        </div>
    );
};

export default renderContent;
