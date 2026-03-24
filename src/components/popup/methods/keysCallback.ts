import I from '../types.ts';

const keysCallback: I['keysCallback'] = async function (this: I, { name }) {
    if (name === 'Escape') {
        this.close();
    }
};

export default keysCallback;
