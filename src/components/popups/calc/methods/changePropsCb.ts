import I from '../types.ts';

const changePropsCb: I['changePropsCb'] = async function (this: I, p) {
    if (p === 'mainContent' && !this.state.products) {
        await this.asyncSetState({
            products: this.props.mainContent?.components.header.calculator.products,
            isInit: true,
        });
        await this.init!();
    }
};

export default changePropsCb;
