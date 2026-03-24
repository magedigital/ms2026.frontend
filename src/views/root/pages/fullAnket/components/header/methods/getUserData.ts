import Phone from '@services/phone/Phone.service.ts';

import I from '../types.ts';

const getUserData: I['getUserData'] = function () {
    const { authUser } = this.props;
    const data: Partial<Record<string, string>> = {};

    if (authUser.extraDataRequired) {
        Object.keys(authUser.extraDataRequired).forEach((name) => {
            const field = authUser.extraDataRequired![name];

            if (typeof field.value === 'string') {
                data[name] = field.value;

                if (name === 'phone') {
                    data[name] = new Phone().format(field.value);
                }
            }

            if (field.type === 'photo') {
                data[name] = typeof field.value === 'string' ? field.value : field.value?.name;
            }
        });
    }

    return data;
};

export default getUserData;
