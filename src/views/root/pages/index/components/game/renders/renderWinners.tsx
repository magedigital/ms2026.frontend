import React from 'react';

import Button from '@components/button/Button.tsx';
import Icon from '@components/icon/Icon.tsx';
import Input from '@components/input/Input.tsx';
import Link from '@components/link/Link.tsx';
import Select from '@components/select/Select.tsx';
import Table from '@components/table/Table.tsx';

import I from '../types.ts';

import { winnerTableCols } from '../static/table.ts';

const renderWinners: I['renderWinners'] = function () {
    const { searchWeek, searchPhone, winnersData, limit } = this.state;
    const allWinners = this.getWinnersList();
    const hasMore = allWinners.length > limit;
    const winners = allWinners.filter((w, i) => i < limit);

    return (
        <div className="indexGame__winners _COL" data-ancor="winners">
            <div className="indexGame__winnersHead _COL">
                <h3 className="indexGame__winnersHeadTitle">ПОБЕДИТЕЛИ РОЗЫГРЫШЕЙ</h3>
                <p className="indexGame__winnersHeadInfo">
                    Подробную информацию см. в{' '}
                    <Link className="indexGame__winnersHeadInfoLink" pageName="profile">
                        личном кабинете
                    </Link>
                </p>
            </div>
            <div className="indexGame__winnersContent _COL">
                <div className="indexGame__winnersBar">
                    <div className="indexGame__winnersBarBlock">
                        <div className="indexGame__winnersBarBlockField">
                            <Select
                                className="_subMode"
                                list={(winnersData?.raffles || []).map((item) => ({
                                    id: item.id,
                                    title: [item.from.slice(0, 5), item.to.slice(0, 5)].join(' - '),
                                }))}
                                value={searchWeek}
                                onChange={async ({ value }) => {
                                    await this.setWeek(value);
                                }}
                            />
                        </div>
                        <p className="indexGame__winnersBarBlockSupport">
                            Выберите неделю, чтобы <br className="_DESKTOP" />
                            посмотреть победителей
                        </p>
                    </div>
                    <div className="indexGame__winnersBarBlock">
                        <div className="indexGame__winnersBarBlockField">
                            <div className="indexGame__winnersBarBlockSearch">
                                <Icon name="search" />
                                <Input
                                    className="_subMode"
                                    value={searchPhone || ''}
                                    onChange={async ({ value }) => {
                                        await this.setPhone(value);
                                    }}
                                    support="Поиск по номеру телефона"
                                />
                            </div>
                        </div>
                        <p className="indexGame__winnersBarBlockSupport">
                            Введите последние <br className="_DESKTOP" />
                            4&nbsp;цифры
                        </p>
                    </div>
                </div>
                <div className="indexGame__winnersTable">
                    <Table
                        name="winners"
                        rows={winners}
                        cols={winnerTableCols}
                        render={this.renderTableCol.bind(this)}
                        isMobRows={true}
                    />
                </div>
                {hasMore && (
                    <div className="indexGame__winnersButton">
                        <Button
                            className="_whiteEmptyColor _bigSize"
                            onClick={() => {
                                this.setState({ limit: limit + this.step });
                            }}
                        >
                            показать ещё
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default renderWinners;
