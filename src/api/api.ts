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
    },
};
