import { authRequests } from '@api/requests/auth.ts';

import I from '../types.ts';

const getData: I['getData'] = async function () {
    const data = await authRequests.getInfo();

    await this.asyncSetState({ data, isInit: true });
};

export default getData;
