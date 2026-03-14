import I from '../types.ts';

const setInputSize: I['setInputSize'] = function () {
    const inputNode = this.parent.current!.querySelector<HTMLElement>('.calc__startFormInput');

    if (!inputNode) {
        return;
    }

    inputNode.style.width = '0px';

    const width = inputNode.scrollWidth;

    inputNode.style.width = `${width}px`;
};

export default setInputSize;
