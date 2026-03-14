import { anketRequests } from '@api/requests/anket.ts';
import checkAuth from '@utils/checkAuth.ts';

import I from '../types.ts';

const uploadFile: I['uploadFile'] = async function ({ file }) {
    await anketRequests.upload({ file });
    await checkAuth({});
};

export default uploadFile;
