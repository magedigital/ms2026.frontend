import get from './methods/get';

import DadataI from './types';

export default class Dadata implements DadataI {
    token = window.daDataToken;
    url = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address';

    get = get;
}
