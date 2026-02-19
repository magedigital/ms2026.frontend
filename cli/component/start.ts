import readline from 'readline/promises';

import { ConfigT } from '.';
import create from './create';
import setQueue from './setQueue';

type ParamsT = {
    rl: readline.Interface;
};

export default async function start({ rl }: ParamsT): Promise<void> {
    const config: ConfigT = {} as ConfigT;

    config.dir = await rl.question('Введите путь компонента\n');
    config.componentName = await rl.question('Введите название компонента\n');
    config.componentClass = await rl.question('Введите класс компонента\n');

    if (config.componentClass) {
        config.styleDir = await rl.question('Введите путь стилей\n');
    }

    config.withStore = !!(await rl.question(
        'Использовать global store? Чтобы завершить ввод, нажмите пустой return\n',
    ));

    if (config.withStore) {
        config.storeProps = (await rl.question('Укажите store props через пробел\n')).split(' ');
    }

    const needRenders = !!(await rl.question(
        'Требуются renders? Чтобы завершить ввод, нажмите пустой return\n',
    ));

    if (needRenders) {
        config.renders = await setQueue({
            rl,
            items: [
                { title: 'Введите название render`a', prop: 'name' },
                { title: 'Введите class render`a', prop: 'className' },
            ],
        });
    }

    const needMethods = !!(await rl.question(
        'Требуются methods? Чтобы завершить ввод, нажмите пустой return\n',
    ));

    if (needMethods) {
        config.methods = await setQueue({
            rl,
            items: [
                { title: 'Введите название method`a', prop: 'name' },
                { title: 'Метод асинхронный?', prop: 'async' },
            ],
        });
    }

    const needRequests = !!(await rl.question(
        'Требуются requests? Чтобы завершить ввод, нажмите пустой return\n',
    ));

    if (needRequests) {
        config.requests = await setQueue({
            rl,
            items: [{ title: 'Введите название request`a', prop: 'name' }],
        });
    }

    const needPages = !!(await rl.question(
        'Требуется pages? Чтобы завершить ввод, нажмите пустой return\n',
    ));

    if (needPages) {
        config.pages = await setQueue({
            rl,
            items: [
                { title: 'Введите pageName', prop: 'name' },
                { title: 'Введите название компонента', prop: 'componentName' },
            ],
        });
    }

    const needStatic = !!(await rl.question(
        'Требуется static? Чтобы завершить ввод, нажмите пустой return\n',
    ));

    if (needStatic) {
        config.static = await setQueue({
            rl,
            items: [
                { title: 'Введите название', prop: 'name' },
                { title: 'Array?', prop: 'array', bool: true },
            ],
        });
    }

    await create({ config });
}
