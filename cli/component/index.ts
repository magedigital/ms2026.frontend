import readline from 'readline/promises';

import start from './start';

type ConfigT = {
    dir: string;
    componentName: string;
    componentClass: string;
    withStore: boolean;
    storeProps?: string[];
    renders?: { name: string; className: string }[];
    methods?: { name: string; async: boolean }[];
    requests?: { name: string }[];
    styleDir: string;
    pages?: { name: string; componentName: string }[];
    static?: { name: string; array: boolean }[];
};

const rl = readline.createInterface(process.stdin, process.stdout);

(async () => {
    await start({ rl });

    process.exit();
})();

export type { ConfigT };
