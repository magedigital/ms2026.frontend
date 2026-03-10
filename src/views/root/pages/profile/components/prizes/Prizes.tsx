import React from 'react';

import Default from '@components/default/Default.tsx';

import PrizesI from './types.ts';

import Prize from '../prize/Prize.tsx';

class Prizes extends Default<PrizesI['props'], PrizesI['state']> implements PrizesI {
    parent: PrizesI['parent'];

    constructor(props: PrizesI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    render() {
        const { authUser } = this.props;

        return (
            <div ref={this.parent} className="profilePrizes _SECTION">
                <div className="profilePrizes__inner _INNER _inner">
                    <h3 className="profilePrizes__title _TITLE _mediumSize">МОИ ПРИЗЫ</h3>
                    <div className="profilePrizes__prizes">
                        {authUser.prizes.map((p) => (
                            <div className="profilePrizes__prizesCard" key={p.id}>
                                <Prize prize={p} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Prizes;
