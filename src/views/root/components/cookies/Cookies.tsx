import React from 'react';

import Default from '@components/default/Default.tsx';
import Icon from '@components/icon/Icon.tsx';
import { appStore } from '@store/store.tsx';

import CookiesI from './types.ts';

class Cookies extends Default<CookiesI['props'], CookiesI['state']> implements CookiesI {
    parent: CookiesI['parent'];

    constructor(props: CookiesI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    render() {
        return (
            <div ref={this.parent} className="cookies">
                <div className="cookies__inner">
                    <div
                        className="cookies__close _CLICK"
                        onClick={() => {
                            appStore.getState().setCookiesState(false);
                        }}
                    >
                        <Icon name="cookies-close" />
                    </div>
                    <h4 className="cookies__title">Используем куки</h4>
                    <p className="cookies__text">
                        Данный сайт использует файлы-cookies, а&nbsp;также другие технологии для
                        улучшения работы, совершенствования сервисов, определения пользовательских
                        предпочтений и обеспечения безопасности. Продолжая работу с сайтом, Вы даете
                        согласие на&nbsp;обработку файлов-cookies в соответствии с{' '}
                        <a href="#">Политикой в&nbsp;отношении обработки персональных данных</a>.
                        При несогласии Вы можете отключить обработку файлов-cookies в настройках
                        Вашего браузера или закрыть страницу сайта.
                    </p>
                </div>
            </div>
        );
    }
}

export default Cookies;
