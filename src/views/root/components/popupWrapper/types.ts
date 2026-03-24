import DefaultI from '@components/default/types';
import { PopupsT } from '@store/popups';

type PropsT = {
    name: keyof PopupsT;
    isShow: boolean;
    props?: Record<any, unknown>;
};

type StateT = {
    PopupComponent?: React.ElementType;
};

interface PopupWrapperI extends DefaultI<PropsT, StateT> {
    loadPopup(this: PopupWrapperI): Promise<void>;
}

export default PopupWrapperI;
