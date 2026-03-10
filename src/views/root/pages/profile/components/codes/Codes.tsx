import React from 'react';

import Default from '@components/default/Default.tsx';
import Table from '@components/table/Table.tsx';

import CodesI from './types.ts';

import renderTableCol from './renders/renderTableCol.tsx';
import { codesTableCols } from './static/table.ts';

class Codes extends Default<CodesI['props'], CodesI['state']> implements CodesI {
    parent: CodesI['parent'];

    constructor(props: CodesI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    renderTableCol = renderTableCol;

    render() {
        return (
            <div ref={this.parent} className="profileCodes _SECTION">
                <div className="profileCodes__inner _INNER _inner">
                    <h2 className="profileCodes__title _TITLE _mediumSize">МОИ КОДЫ</h2>
                    <div className="profileCodes__table">
                        <Table
                            name="codes"
                            rows={[]}
                            cols={codesTableCols}
                            render={this.renderTableCol.bind(this)}
                            isMobRows={true}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Codes;
