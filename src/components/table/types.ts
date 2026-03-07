import DefaultI from '@components/default/types';

type PropsT = {
    name: string;
    rows: ({ id: string } & ObjT)[];
    cols: Record<string, { title: string; width: number }>;
    render: TableRenderRowT;
    isMobRows?: boolean;
};

type TableRenderRowT<T = any, K = any> = (d: { row: T; name: K }) => React.ReactNode;

type StateT = {};

interface TableI extends DefaultI<PropsT, StateT> {
    getColWidth(this: TableI, name: string): number;

    renderHead(this: TableI): React.ReactNode;
    renderContent(this: TableI): React.ReactNode;
}

export default TableI;
export type { TableRenderRowT };
