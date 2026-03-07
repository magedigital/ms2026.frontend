import PopupI from '@components/popup/types';
import { StoreT } from '@store/store';

type PropsT = {
    chequePopup: StoreT['chequePopup'];
};

type StateT = {};

interface ChequePopupI extends PopupI<PropsT, StateT> {}

export default ChequePopupI;
