import { contentRequests } from '@api/requests/content.ts';

import I, { FaqContentT } from '../types.ts';

const getContent: I['getContent'] = async function () {
    try {
        const r = await contentRequests.getContent<FaqContentT>({ name: 'faq' });
        await this.asyncSetState({ content: r });
    } catch (e) {}
};

export default getContent;
