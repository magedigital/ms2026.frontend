import I, { TopBarNavItemT } from '../types.ts';

const getNav: I['getNav'] = function () {
    const nav: TopBarNavItemT[] = [];

    nav.push({ text: 'ГЛАВНАЯ', name: 'index', type: 'ancor', ancorName: 'index' });
    nav.push({ text: 'ПРИЗЫ', name: 'prizes', type: 'ancor', ancorName: 'prizes' });
    nav.push({ text: 'ПОБЕДИТЕЛИ', name: 'winners', type: 'ancor', ancorName: 'winners' });
    nav.push({ text: 'ВОПРОС/ОТВЕТ', name: 'faq', type: 'link', pageName: 'faq' });

    return nav;
};

export default getNav;
