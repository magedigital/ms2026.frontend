import I from '../types.ts';

const resizeHandler: I['resizeHandler'] = function () {
    this.destroyNodes();
    this.init();

    if (this.reactMoveArea) {
        const resultItems = this.getReactItems();

        this.callback!({
            type: 'setItems',
            items: resultItems,
        });
    }
};

export default resizeHandler;
