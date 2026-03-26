import DefaultI from '@components/default/types';

type PropsT = {
    callback?: () => void;
    close?: () => void;
};

type StateT = {};

type GameAppT = {
    resize: (w: number, h: number) => void;
    setData: (d: GameDataT) => void;
};
type GameDataT = {
    gameData: {
        id: string;
        request1: { url: string; method: string };
        request2: { url: string; method: string };
    };
    gameIndex: number;
    switchToMobileWidth: number;
    closeHandler?: () => void;
    registerHandler?: () => void;
    signUpHandler?: () => void;
    playWithoutConfirmation?: () => void;
    gameStartHandler: () => void;
    gameFinishHandler: () => void;
    userNotAuthorized: boolean;
    activityIsOver: boolean;
};

interface GameI extends DefaultI<PropsT, StateT> {
    initGame(this: GameI, app: GameAppT): void;
}

export default GameI;

export type { GameAppT, GameDataT };
