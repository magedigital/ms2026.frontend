import React from 'react';

import Editor from '@components/editor/Editor.tsx';

import IndexI from './types.ts';

import { AppRouter } from '../../../../index.tsx';

class Index extends Editor<IndexI['props'], IndexI['state']> implements IndexI {
    parent: IndexI['parent'];

    constructor(props: IndexI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    componentDidMount(): void {
        this.initTarget({
            data: {
                title: '',
            },
            targetName: 'test',
        });
    }

    render() {
        return (
            <div ref={this.parent} className="index">
                Index
                <button
                    onClick={() => {
                        AppRouter.changePage({ pageName: 'auth' });
                    }}
                >
                    To inner
                </button>
            </div>
        );
    }
}

export default Index;
