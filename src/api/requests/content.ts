import { API } from '@api/api';
import request from '@utils/request';

import { FaqContentT } from '../../views/root/pages/faq/types';

const version = 1;

type ContentNamesT = 'faq';
type ContentDatasT = {
    faq: FaqContentT;
};

const urls = {
    faq: 'FAQ',
} as const;

export const setLocalContent = function (d: { name: ContentNamesT; data: any }): void {
    const localContentJson = localStorage.getItem(`content_v${version}`);
    let localContent: Record<string, ObjT> = {};

    if (localContentJson) {
        localContent = JSON.parse(localContentJson);
    } else {
        localContent = {};
    }

    localContent[d.name] = d.data;
    localStorage.setItem(`content_v${version}`, JSON.stringify(localContent));
};

export const getLocalContent = function <T extends ContentNamesT>(
    n: T,
): ContentDatasT[T] | undefined {
    const localContentJson = localStorage.getItem(`content_v${version}`);
    let localContent: Record<string, ObjT> | undefined;

    try {
        if (localContentJson) {
            localContent = JSON.parse(localContentJson);
        }

        if (localContent) {
            return localContent[n] as ContentDatasT[T];
        }
    } catch (e) {}
};

async function getContent<T extends {}>({ name }: { name: ContentNamesT }): Promise<T> {
    const response = await request<T>({ method: 'GET', url: API.CONTENT[urls[name]] });
    setLocalContent({ name, data: response.data });
    return response.data;
}

export const contentRequests = {
    getContent,
};
