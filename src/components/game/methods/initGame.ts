import { enums } from '@global/enums.ts';
import { appStore } from '@store/store.tsx';
import { getCookie } from '@utils/cookies.ts';

import I, { GameDataT } from '../types.ts';

const initGame: I['initGame'] = function (app) {
    const { close } = this.props;

    const updateLayout = () => {
        app.resize(this.parent.current!.clientWidth, this.parent.current!.clientHeight);
    };

    updateLayout();

    window.addEventListener('load', updateLayout);
    window.addEventListener('resize', updateLayout);

    window.JWT = getCookie(enums.ACCESS_TOKEN);

    const data: GameDataT = {
        gameData: {
            id: 'SLOT',
            request1: { url: '/api/TentGame', method: 'POST' },
            request2: { url: '/api/TentGame', method: 'POST' },
        },
        gameIndex: 0,
        closeHandler: close,
        registerHandler: () => {
            appStore.getState().setPopup({ name: 'regPopup' });
        },
        signUpHandler: () => {
            appStore.getState().setPopup({ name: 'loginPopup' });
        },
        playWithoutConfirmation: () => {
            console.log('playWithoutConfirmation');
        },
        switchToMobileWidth: 480,
        userNotAuthorized: !getCookie(enums.ACCESS_TOKEN),
        activityIsOver: true,
    };

    app.setData(data);
};

export default initGame;
