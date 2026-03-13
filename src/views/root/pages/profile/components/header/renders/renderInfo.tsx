import React from 'react';

import Button from '@components/button/Button.tsx';
import Link from '@components/link/Link.tsx';

import I from '../types.ts';

const renderInfo: I['renderInfo'] = function () {
    const { loadingKey } = this.state;
    const { authUser } = this.props;

    return (
        <div className="profileHeader__info">
            <div className="profileHeader__infoInner">
                <h3 className="profileHeader__infoName">
                    {authUser.personal.lastName} {authUser.personal.firstName}
                </h3>
                <div className="profileHeader__infoContent">
                    <div className="profileHeader__infoId">ID {authUser.userId}</div>
                    <Link pageName="anket" className="profileHeader__infoEdit">
                        Изменить данные
                    </Link>
                </div>
                <div className="profileHeader__infoButton">
                    <Button
                        className="_subColor _minSize"
                        onClick={this.logout.bind(this)}
                        loading={loadingKey === 'logout'}
                    >
                        выход
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default renderInfo;
