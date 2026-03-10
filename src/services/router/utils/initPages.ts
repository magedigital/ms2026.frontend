import { StoreT } from '@store/store';

import pages from '../static/pages';

export default function initPages(): StoreT['pages'] {
    const resultPages = {} as StoreT['pages'];

    (Object.keys(pages) as (keyof typeof pages)[]).forEach((name) => {
        resultPages[name] = {
            isShow: false,
        };
    });

    return resultPages;
}
