import React from 'react';

import Button from '@components/button/Button.tsx';
import List from '@components/list/List.tsx';
import Media from '@components/media/Media.tsx';

import Result from '../components/result/Result.tsx';

import I from '../types.ts';

const renderResult: I['renderResult'] = function () {
    const { step, currentTab, amount } = this.state;
    const products = this.state.products!;

    return (
        <div className="calc__result _COL">
            <h3 className="calc__resultTitle">
                Расчёт готов <span>**</span>
            </h3>
            <div className="calc__resultContent _COL">
                <div className="calc__resultTabs">
                    {Object.keys(products).map((k) => (
                        <div
                            className={this.getClass(
                                'calc__resultTab _CLICK',
                                k === currentTab && '_current',
                            )}
                            key={k}
                            onClick={async () => {
                                await this.asyncSetState({ currentTab: k });
                            }}
                        >
                            {products[k].title.replace('.', ',')} Л
                        </div>
                    ))}
                </div>
                <Media check={(d) => d === 'desktop'}>
                    <List
                        renderKey={step === 'result' ? currentTab : undefined}
                        items={step === 'result' ? [{ _id: currentTab, amount }] : []}
                        parentClass="calc__resultBlocks"
                        itemClass="calc__resultBlock"
                        itemStyleProps={[]}
                        parentStyleProps={[]}
                        parentRealStyleProps={[]}
                        render={({ item }) => ({
                            item: (
                                <Result
                                    value={item._id}
                                    amount={+item.amount.replace(/\D/gi, '')}
                                    device="desktop"
                                    products={products}
                                />
                            ),
                        })}
                        allItems={Object.keys(products)}
                        currentItem={currentTab}
                    />
                </Media>
                <Media check={(d) => d === 'mobile'}>
                    <List
                        renderKey={step === 'result' ? currentTab : undefined}
                        items={step === 'result' ? [{ _id: currentTab, amount }] : []}
                        parentClass="calc__resultBlocks"
                        itemClass="calc__resultBlock"
                        itemStyleProps={[]}
                        parentStyleProps={[]}
                        parentRealStyleProps={[]}
                        render={({ item }) => ({
                            item: (
                                <Result
                                    value={item._id}
                                    amount={+item.amount.replace(/\D/gi, '')}
                                    device="mobile"
                                    products={products}
                                />
                            ),
                        })}
                        allItems={Object.keys(products)}
                        currentItem={currentTab}
                    />
                </Media>
                <div className="calc__buttons _result">
                    <div className="calc__button">
                        <Button className="_subEmptyColor" onClick={this.close.bind(this)}>
                            Посчитать позже
                        </Button>
                    </div>
                    <div className="calc__button">
                        <Button
                            className="_subColor"
                            onClick={async () => {
                                await this.asyncSetState({
                                    step: 'start',
                                    currentProgressStep: 1,
                                    amount: '0',
                                });
                                this.setInputSize();
                            }}
                        >
                            Посчитать ещё
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default renderResult;
