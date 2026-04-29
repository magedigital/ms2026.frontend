import DefaultI from '@components/default/types';

import CodePopupI from '../../types';

type PropsT = {
    setStep: CodePopupI['setStep'];
    updateListRender: () => Promise<void>;
};

type StateT = {
    isInit?: boolean;
    canFocus?: boolean;
    canZoom?: boolean;
};

interface ScanI extends DefaultI<PropsT, StateT> {}

export default ScanI;
