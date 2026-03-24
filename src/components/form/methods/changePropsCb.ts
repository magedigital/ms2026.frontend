import I from '../types.ts';

const changePropsCb: I['changePropsCb'] = async function (this: I, key) {
    if (key === 'fieldsKey') {
        const { data } = this.props;
        await this.initTarget({ data: { ...data }, targetName: 'form' });
    }
};

export default changePropsCb;
