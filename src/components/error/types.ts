import DefaultI from '@components/default/types';

type PropsT = {
    error?: string;
    errorClassName?: string;
    callback?: () => void;
};

type StateT = {};

interface ErrorI extends DefaultI<PropsT, StateT> {}

export default ErrorI;
