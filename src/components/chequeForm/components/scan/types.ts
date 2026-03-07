import ChequeFormI from '@components/chequeForm/types';
import DefaultI from '@components/default/types';

type PropsT = {
    setStep: ChequeFormI['setStep'];
    setQRCode: ChequeFormI['setQRCode'];
};

type StateT = {
    videoReady?: boolean;
    loadingKey?: string;
};

interface ChequeScanI extends DefaultI<PropsT, StateT> {
    video: React.RefObject<HTMLVideoElement | null>;

    flagTick?: boolean;
    isComplete?: boolean;

    videoStart(this: ChequeScanI): Promise<void>;
    videoStop(this: ChequeScanI): Promise<void>;
    setFrame(this: ChequeScanI): Promise<void>;
}

export default ChequeScanI;
