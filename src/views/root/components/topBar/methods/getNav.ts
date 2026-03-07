import I, { TopBarNavItemT } from '../types.ts';

const getNav: I['getNav'] = function () {
    const nav: TopBarNavItemT[] = [];

    nav.push({ text: 'ГЛАВНАЯ', name: 'index' });
    nav.push({ text: 'ПРИЗЫ', name: 'prizes' });
    nav.push({ text: 'ПОБЕДИТЕЛИ', name: 'winners' });
    nav.push({ text: 'ВОПРОС/ОТВЕТ', name: 'faq' });

    return nav;
};

export default getNav;
