import PopupI from '@components/popup/types';
import { StoreT } from '@store/store';

type PropsT = {
    loginPopup: StoreT['loginPopup'];
    device: StoreT['device'];
};

type StateT = {
    form?: Partial<{ login: string; password: string }>;
};

interface LoginPopupI extends PopupI<PropsT, StateT> {
    sendForm(this: LoginPopupI): Promise<void>;

    renderHead(this: LoginPopupI): React.ReactNode;
    renderFields(this: LoginPopupI): React.ReactNode;
    renderSocials(this: LoginPopupI): React.ReactNode;
    renderFoot(this: LoginPopupI): React.ReactNode;
}

export default LoginPopupI;
