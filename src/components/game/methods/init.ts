import I from '../types.ts';

const scriptSrc = 'js/main.90b87c54.js';
const styleSrc = 'css/main.ca3f4a3e.css';
const root = '/_game/static';

const init: I['init'] = async function (this: I) {
    const { callback } = this.props;

    window.onAppReadyHandler = this.initGame.bind(this);
    window.getAppRoot = () => this.parent.current!;

    this.parent.current!.setAttribute('oninit', 'onAppReadyHandler');

    const link = document.createElement('link');

    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', `${root}/${styleSrc}`);

    document.head.appendChild(link);

    const script = document.createElement('script');

    script.onload = async () => {
        if (window.activateGameApp) {
            window.activateGameApp();
        }

        await this.asyncSetState({ isInit: true });

        if (callback) {
            callback();
        }
    };

    script.src = `${root}/${scriptSrc}`;

    document.head.appendChild(script);

    this.unmountHandlers.all = () => {
        link.remove();
        script.remove();

        if (window.deactivateGameApp) {
            window.deactivateGameApp();
        }
    };
};

export default init;
