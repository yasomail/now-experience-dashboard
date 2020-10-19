import { createCustomElement } from '@servicenow/ui-core';
import { actionHandlers } from './actionHandlers.js';

import styles from './styles.scss';

import '../components/now-experience-table';
import '../components/now-experience-filter';
import { columns } from './defaults.js';

createCustomElement('snc-now-experience-dashboard', {
    view: function(state, helpers) {
        const { dataRows } = state;
        const displayColumns = columns.filter((col) => {
            return col.field !== 'sys_id';
        });

        return (
            <div className="container">
                <div className="">
                    <now-experience-filter></now-experience-filter>
                    <now-experience-table
                        title="Task table"
                        dataColumns={displayColumns}
                        dataRows={dataRows}
                    ></now-experience-table>
                </div>
            </div>
        );
    },
    actionHandlers: {
        ...actionHandlers
    },
    styles
});