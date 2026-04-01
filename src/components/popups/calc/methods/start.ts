import setAnimate from '@utils/setAnimate.ts';

import I from '../types.ts';

import { calcProgressSteps } from '../static/progressSteps.ts';

const start: I['start'] = async function () {
    const { amount, products } = this.state;

    if (+amount <= 0 || !products) {
        return;
    }

    const duration = 1_500;
    const lineNode = this.parent.current!.querySelector(
        '.calc__processProgressLine',
    ) as HTMLElement;

    await this.asyncSetState({ step: 'process', currentTab: Object.keys(products)[0] });

    setAnimate({
        duration: duration * 4,
        timing: (t) => t,
        draw: (p) => {
            const width = (1 - p) * 100;

            lineNode.style.width = `${width}%`;
        },
        getId: (i) => {
            this.lineAnimateId = i;
        },
    });

    await this.asyncSetState({ currentProgressStep: 1 });

    this.intervals.loading = setInterval(async () => {
        const { currentProgressStep = 0 } = this.state;

        if (+currentProgressStep + 1 > Object.keys(calcProgressSteps).length) {
            clearInterval(this.intervals.loading);

            await this.asyncSetState({ step: 'result' });
        } else {
            await this.asyncSetState({ currentProgressStep: currentProgressStep + 1 });
        }
    }, duration);
};

export default start;
