import React from 'react';

import I from '../types.ts';

import Faq from '../pages/faq/Faq.tsx';
import Index from '../pages/index/Index.tsx';

const pages = {
    index: {
        render(this: I) {
            return <Index />;
        },
    },
    faq: {
        render(this: I) {
            return <Faq />;
        },
    },
} as const;

export default pages;
