import React from 'react';

import I from '../types.ts';

import Anket from '../pages/anket/Anket.tsx';
import Faq from '../pages/faq/Faq.tsx';
import Index from '../pages/index/Index.tsx';
import Profile from '../pages/profile/Profile.tsx';

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
    profile: {
        render(this: I) {
            return <Profile />;
        },
    },
    anket: {
        render(this: I) {
            return <Anket />;
        },
    },
} as const;

export default pages;
