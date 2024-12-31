import { Button, Checkbox, Form, Input, Table } from 'antd';
import type { CheckboxProps, TableProps } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import useTasks, { ScheduleTableOptions, TableStatusOptions, TableTaskOptions, TableUserOptions } from '../../api/useTasks';

export default function TableComponent() {

    const { getTableUsers, getTableStatus, getTableTask} = useTasks();
    const [users, setUsers] = useState<TableUserOptions[]>([]);
    const [statuses, setStatuses] = useState<TableStatusOptions[]>([]);
    const [tasks, setTasks] = useState<TableTaskOptions[]>([]);
    const [newTableName, setNewTableName] = useState('');

    useEffect(() => {
        // Fetch users
        getTableUsers({ tableID: 1 }).then(response => setUsers(response.data));
        console.log(users);

        // Fetch statuses
        getTableStatus({ tableID: 1 }).then(response => setStatuses(response.data));

        // Fetch tasks
        getTableTask({ tableID: 1 }).then(response => setTasks(response.data));
    }, [getTableUsers, getTableStatus, getTableTask]);

    const [checked, setChecked] = useState(true);

    const onChange: CheckboxProps['onChange'] = (e) => {
        console.log(`checked = ${e.target.checked}`);
        setChecked(e.target.checked);
    };

    interface DataType {
        name: React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
        task: React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
    }

    const columns: TableProps<DataType>['columns'] = [
        {
            title: 'user',
            dataIndex: 'name',
            rowScope: 'row',
            align: 'center',
        },
        {
            title: <><span>Started</span><Button style={{ width: '5px', backgroundColor: 'red', marginLeft: '8px' }}><DeleteOutlined style={{ color: 'white' }} /></Button></>,
            align: 'center',
            dataIndex: 'task',
        },
        {
            title: <><span>Pending</span><Button style={{ width: '5px', backgroundColor: 'red', marginLeft: '8px' }}><DeleteOutlined style={{ color: 'white' }} /></Button></>,
            align: 'center',
        },
        {
            title: <><span>Testing</span><Button style={{ width: '5px', backgroundColor: 'red', marginLeft: '8px' }}><DeleteOutlined style={{ color: 'white' }} /></Button></>,
            align: 'center',
        },
        {
            title: <><span>Close</span><Button style={{ width: '5px', backgroundColor: 'red', marginLeft: '8px' }}><DeleteOutlined style={{ color: 'white' }} /></Button></>,
            align: 'center',
        },
    ];

    const data: DataType[] = [
        {
            name: <><span>User1</span><Button style={{ width: '5px', backgroundColor: 'red', marginLeft: '8px' }}><DeleteOutlined style={{ color: 'white' }} /></Button></>,
            task: <Checkbox onChange={onChange} checked={checked}>Task1</Checkbox>,
        },
        {
            name: <><span>User2</span><Button style={{ width: '5px', backgroundColor: 'red', marginLeft: '8px' }}><DeleteOutlined style={{ color: 'white' }} /></Button></>,
            task: <></>,
        },
        {
            name: <><span>User3</span><Button style={{ width: '5px', backgroundColor: 'red', marginLeft: '8px' }}><DeleteOutlined style={{ color: 'white' }} /></Button></>,
            task: <></>
        },
        {
            name: <><span>User4</span><Button style={{ width: '5px', backgroundColor: 'red', marginLeft: '8px' }}><DeleteOutlined style={{ color: 'white' }} /></Button></>,
            task: <></>
        },
        {
            name: <><span>User5</span><Button style={{ width: '5px', backgroundColor: 'red', marginLeft: '8px' }}><DeleteOutlined style={{ color: 'white' }} /></Button></>,
            task: <></>
        },
    ];

    return (
        <div>
            <Table<DataType> columns={columns} dataSource={data} pagination={false} />
        </div>
    )
}
