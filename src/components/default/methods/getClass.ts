import I from '../types.ts';

const getClass: I['getClass'] = function (...classes) {
    return Array.from(
        new Set(classes.map((c) => (typeof c === 'string' ? c : undefined)).filter((c) => c)),
    ).join(' ');
};

export default getClass;
