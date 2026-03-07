import React from 'react';

import Media from '@components/media/Media.tsx';

import I from '../types.ts';

const renderContent: I['renderContent'] = function () {
    const { rows, cols, render, isMobRows } = this.props;

    return (
        <div className="table__content">
            {rows.map((r) => (
                <div className="table__row" key={r.id}>
                    <Media check={(d) => d === 'desktop' || !isMobRows}>
                        {Object.keys(cols).map((n) => (
                            <div
                                className={this.getClass('table__rowCol _COL', this.setClass(n))}
                                key={n}
                                style={{ width: `${this.getColWidth(n)}%` }}
                            >
                                {render({ row: r, name: n })}
                            </div>
                        ))}
                    </Media>
                    <Media check={(d) => d === 'mobile' && !!isMobRows}>
                        <div className="table__rowMob">
                            {Object.keys(cols).map((n) => (
                                <div className={this.getClass('table__rowMobRow')} key={n}>
                                    <div
                                        className={this.getClass(
                                            'table__rowMobCol _head _COL',
                                            this.setClass(n),
                                        )}
                                        key={n}
                                    >
                                        {cols[n].title}
                                    </div>
                                    <div
                                        className={this.getClass(
                                            'table__rowMobCol _COL',
                                            this.setClass(n),
                                        )}
                                        key={n}
                                    >
                                        {render({ row: r, name: n })}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Media>
                </div>
            ))}
        </div>
    );
};

export default renderContent;
