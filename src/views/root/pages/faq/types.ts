import PageI from '@components/page/types';

import { QuestionT } from './components/question/types';

type PropsT = {};

type StateT = {
    content?: FaqContentT;
};

type FaqContentT = {
    components: {
        faq: QuestionT[];
    };
};

interface IndexI extends PageI<PropsT, StateT> {
    getContent(this: IndexI): Promise<void>;
}

export default IndexI;
export type { FaqContentT };
