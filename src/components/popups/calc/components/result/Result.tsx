import React from 'react';

import Default from '@components/default/Default.tsx';
import Icon from '@components/icon/Icon.tsx';
import StringService from '@services/string/String.service.ts';

import init from './methods/init.ts';

import ResultI from './types.ts';

import { calcValues } from '../../static/values.ts';

class Result extends Default<ResultI['props'], ResultI['state']> implements ResultI {
    parent: ResultI['parent'];

    constructor(props: ResultI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    init = init;

    render() {
        const { isSlider, isEnd, isStart } = this.state;
        const { value, amount } = this.props;
        const valueData = calcValues[value];
        const count = Math.ceil(amount / valueData.price);

        return (
            <div
                ref={this.parent}
                className={this.getClass('calcResult _COL', isStart && '_start')}
            >
                <p className="calcResult__title">
                    Остаток по ипотеке <br className="_MOBILE" />в упаковках напитка{' '}
                    {value.replace('.', ',')}л:
                </p>
                <p className="calcResult__count">
                    <div
                        className={this.getClass(
                            'calcResult__countLines _animate _left',
                            isEnd && '_end',
                        )}
                    >
                        <div className="calcResult__countLine" />
                        <div className="calcResult__countLine" />
                        <div className="calcResult__countLine" />
                    </div>
                    <div
                        className={this.getClass(
                            'calcResult__countLines _animate _right',
                            isEnd && '_end',
                        )}
                    >
                        <div className="calcResult__countLine" />
                        <div className="calcResult__countLine" />
                        <div className="calcResult__countLine" />
                    </div>
                    <div
                        className={this.getClass(
                            'calcResult__countLines _default _left',
                            isEnd && '_end',
                        )}
                    >
                        <div className="calcResult__countLine" />
                        <div className="calcResult__countLine" />
                        <div className="calcResult__countLine" />
                    </div>
                    <div
                        className={this.getClass(
                            'calcResult__countLines _default _right',
                            isEnd && '_end',
                        )}
                    >
                        <div className="calcResult__countLine" />
                        <div className="calcResult__countLine" />
                        <div className="calcResult__countLine" />
                    </div>
                    {new StringService().priceFormat(count)}
                </p>
                <p className="calcResult__support">упаковок</p>
                <div className={this.getClass('calcResult__slider', !isSlider && '_empty')}>
                    {isSlider &&
                        (['prev', 'next'] as const).map((k) => (
                            <div
                                className={this.getClass(
                                    'calcResult__sliderButton _CLICK',
                                    this.setClass(k),
                                )}
                                key={k}
                            >
                                <Icon name={k === 'prev' ? 'prev-arrow' : 'next-arrow'} />
                            </div>
                        ))}
                    <div className="calcResult__sliderInner">
                        {valueData.thumbs.map((t) => (
                            <div
                                className={this.getClass(
                                    'calcResult__sliderItem',
                                    !isSlider && '_current',
                                )}
                                key={t}
                            >
                                <img
                                    src={require(`@media/calc/${t}`)}
                                    alt=""
                                    className="calcResult__sliderItemThumb"
                                />
                                <p className="calcResult__sliderItemTitle">
                                    напиток сокосодержащий «АБРИКОС-ПЕРСИКОС»
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Result;
