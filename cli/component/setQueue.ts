import readline from 'readline/promises';

import callStack from '@functions/callStack';

type ParamsT = {
    rl: readline.Interface;
    items: { title: string; prop: string; bool?: boolean }[];
};

const setItem = async ({ rl, items }: ParamsT) => {
    const resultItem: any = {};
    const tasks = items.map((item) => async () => {
        const value = await rl.question(`${item.title}\n`);

        resultItem[item.prop] = item.bool ? value === '1' : value;
    });

    await callStack(tasks);

    return resultItem;
};

const set = async ({ rl, items, result }: ParamsT & { result: any[] }) => {
    const resultItem = await setItem({ rl, items });

    result.push(resultItem);

    const continueValue = await rl.question(`Ещё? Чтобы завершить ввод, нажмите пустой return\n`);

    if (continueValue) {
        return await set({ rl, items, result });
    }
};

export default async function setQueue<T = any>({ rl, items }: ParamsT): Promise<T[]> {
    const result: T[] = [];

    await set({ rl, items, result });

    return result;
}
