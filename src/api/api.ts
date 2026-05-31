const routes = {
    CONTENT: '/content',
};

export const API = {
    CHEQUE: {
        SEND_FORM: '/CheckRegistration',
    },
    AUTH: {
        LOGIN: '/Login',
        LOGOUT: '/Logout',
        REGISTRATION: '/Registration',
        GET_USER: '/GetParticipantInfo',
        GET_INFO: '/GetCabinetInfo',
    },
    CONTENT: {
        MAIN: routes.CONTENT + '/main/',
        FAQ: routes.CONTENT + '/faq/',
    },
    FAQ: {
        SEND_FORM: '/SendQuestion',
    },
    WINNERS: {
        GET_LIST: '/GetWinnerList',
    },
    ANKET: {
        SEND: '/SendParticipantInfo',
        UPLOAD: '/UploadParticipantFile',
        GET_AKT: '/GetAct',
        RESET_AKT: '/ResetParticipantInfoStatus',
        SEND_AKT: '/SendParticipantAct',
    },
};
