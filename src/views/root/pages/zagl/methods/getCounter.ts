import request from '@functions/request.ts';

import I from '../types.ts';

const getCounter: I['getCounter'] = async function () {
    const response = await request<{
        components?: { counter?: { days: string; daysTitle: string } };
    }>({
        method: 'GET',
        url: '/content/soon/',
    });

    if (response.data.components?.counter) {
        await this.asyncSetState({
            counter: {
                title: response.data.components.counter.daysTitle,
                count: response.data.components.counter.days,
            },
        });
    }
};

export default getCounter;
