import { AxiosError } from 'axios';

declare global {
    interface Window {
        widthValue: number;
        heightValue: number;
        mediaM: number;
        widthPrevValue: number;
        heightPrevValue: number;
        socAuthUrls: Record<string, string>;
        daDataToken: string;
        userAuthorized?: boolean;
        getJWT: () => string | undefined;
        dataMatrixApp?: {
            root?: HTMLElement;
            config: {
                duplicateTimeout: number;
                showConsole: boolean;
                apiURL: string;
                catchOnce?: boolean;
            };
            getAppRoot: () => HTMLElement;
            activate: () => void;
            deactivate: () => void;
            restart: () => void;
            on?: Partial<{
                camAccessError: (e: any) => void;
                camAccessSuccess: (d: any) => void;
                camStarting: () => void;
                camStopped: () => void;
                dataMatrixSuccess: (d: any) => void;
                dataMatrixError: (e: any) => void;
                apiSuccess: (d: any) => void;
                apiError: (e?: AxiosError) => void;
            }>;
        };
        JWT?: string;

        getAppRoot?: () => HTMLElement;
        activateGameApp?: () => void;
        deactivateGameApp?: () => void;
        restartGameApp?: () => void;
        onAppReadyHandler?: (d: any) => void;
    }

    namespace NodeJS {
        interface ProcessEnv {
            REACT_APP_SEO: string;
            REACT_APP_API: string;
        }
    }

    type ObjT = Record<any, unknown>;

    type ResponseT<T = {}> = {
        accessToken?: string;
    } & T;

    type ResponseErrorT = {
        accessToken?: string;
        message?: string;
        error?: ErrorT;
    };

    type ErrorT = {
        text: string;
        name?: string;
    };

    type FilterQueryT = {
        name: string;
        value: string;
    };

    type ListenerT<T = MouseEvent | TouchEvent> = (
        event: string,
        listener: (event: T) => void,
        options?: {
            passive?: boolean;
            once?: boolean;
            capture?: boolean;
        },
    ) => void;

    type CustomListenerT = (
        event: string,
        listener: (event: CustomEvent) => void,
        options?: {
            passive?: boolean;
            once?: boolean;
            capture?: boolean;
        },
    ) => void;

    type MetaModelDataT = {
        _id: string;
        cDate: number;
    };

    type FileT = {
        size?: number;
        name?: string;
        width?: number;
        height?: number;
        fullSrc?: string;
    };
}

export type {};
