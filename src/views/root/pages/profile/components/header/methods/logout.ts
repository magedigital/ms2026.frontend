import { authRequests } from '@api/requests/auth.ts';
import { logoutHandler } from '@utils/checkAuth.ts';

import I from '../types.ts';

const logout: I['logout'] = async function () {
    await this.asyncSetState({ loadingKey: 'logout' });

    try {
        await authRequests.logout();
        await logoutHandler();
    } catch (e) {}

    await this.asyncSetState({ loadingKey: undefined });
};

export default logout;
