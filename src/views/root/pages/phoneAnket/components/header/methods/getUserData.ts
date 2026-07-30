import Phone from '@services/phone/Phone.service.ts';

import I from '../types.ts';

const getUserData: I['getUserData'] = function () {
    const { authUser } = this.props;

    return {
        phone: new Phone().format(authUser.personal.phone),
    };
};

export default getUserData;
