import setAsyncTimer from '@functions/setAsyncTimer.ts';

import LazyPageI from '../types.ts';

const loadPage: LazyPageI['loadPage'] = async function (name) {
    const Component = await this.loadComponent(name);

    if (this.context.state.loadPages[name]) {
        return;
    }

    if (0) {
        await setAsyncTimer(1_000);
    }

    if (Component) {
        this.context.setState(
            (state) => {
                const newState = { ...state };
                const loadPages = newState.loadPages;

                loadPages[name] = { load: false, Component };

                newState.loadPages = loadPages;

                return newState;
            },
            () => {
                setTimeout(() => {
                    this.context.setState((state) => {
                        const newState = { ...state };
                        const loadPages = newState.loadPages;

                        loadPages[name]!.load = true;

                        newState.loadPages = loadPages;

                        return newState;
                    });
                }, 50);
            },
        );
    }
};

export default loadPage;
