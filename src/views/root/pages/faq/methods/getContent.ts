import { contentRequests } from '@api/requests/content.ts';

import I, { FaqContentT } from '../types.ts';

const getContent: I['getContent'] = async function () {
    const r = await contentRequests.getContent<FaqContentT>({ name: 'faq' });

    await this.asyncSetState({ content: r });
};

export default getContent;
