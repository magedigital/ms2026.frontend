import { API } from '@api/api';
import request from '@utils/request';

async function send({
    data,
}: {
    data: Partial<{
        firstName: string;
        lastName: string;
        thirdName: string;
        phone: string;
        agreement: boolean;
        mailing: string;
        password1: string;
        password2: string;
    }>;
}): Promise<void> {
    await request({
        method: 'POST',
        url: API.ANKET.SEND,
        data,
    });
}

async function upload({ file, name }: { file: File; name: string }): Promise<void> {
    const formData = new FormData();

    formData.append('file', file);
    formData.append('fileName', name);

    await request({
        method: 'POST',
        url: API.ANKET.UPLOAD,
        data: formData,
    });
}

export const anketRequests = {
    send,
    upload,
};
