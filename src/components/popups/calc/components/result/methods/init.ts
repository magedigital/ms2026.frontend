import Slider from '@services/slider/Slider.ts';

import I from '../types.ts';

const init: I['init'] = async function (this: I) {
    const slider = this.parent.current!;
    const { value, device, products } = this.props;
    const valueData = products[value];

    this.timers.start = setTimeout(async () => {
        await this.asyncSetState({ isStart: true });
    }, 150);

    this.timers.end = setTimeout(async () => {
        await this.asyncSetState({ isEnd: true });
    }, 2_200);

    if (valueData.thumbs.length <= 3 && device === 'desktop') {
        return;
    }

    await this.asyncSetState({ isSlider: true });

    const SliderInst = new Slider({
        slider,
        area: slider.querySelector('.calcResult__slider')!,
        moveArea: slider!.querySelector('.calcResult__sliderInner')!,
        itemClass: 'calcResult__sliderItem',
        infinity: true,
        buttons: {
            prev: slider.querySelector('.calcResult__sliderButton._prev') as HTMLElement,
            next: slider.querySelector('.calcResult__sliderButton._next') as HTMLElement,
        },
    });

    this.unmountHandlers.slider = () => SliderInst.destroy();
};

export default init;
