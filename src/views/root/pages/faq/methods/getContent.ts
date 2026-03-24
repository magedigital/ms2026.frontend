import { contentRequests } from '@api/requests/content.ts';

import I from '../types.ts';

const getContent: I['getContent'] = async function () {
    try {
        const r = await contentRequests.getContent({ name: 'faq' });
        await this.asyncSetState({ content: r, isInit: true });
    } catch (e) {}
};

export default getContent;
