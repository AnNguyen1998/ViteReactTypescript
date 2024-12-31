import TableComponent from "./TableComponent"
import { Button, Col, Form, Row, Select } from 'antd'
import { Input } from 'antd';
import { useEffect, useState } from "react";
import useTasks, { TableUserOptions } from "../../api/useTasks";

type LayoutType = Parameters<typeof Form>[0]['layout'];

function Table3() {

    const { createTableUser, createTableStatus, createTableTask } = useTasks();
    const [users, setUsers] = useState<TableUserOptions[]>([]);
    const [newUserName, setNewUserName] = useState('User5');
    const [newUserTableID, setNewUserTableID] = useState<number>(1);

    const { Option } = Select;
    const [currency, setCurrency] = useState('User1');
    const [currency1, setCurrency1] = useState('Started');
    const [currency2, setCurrency2] = useState('Users');
    const [currency3, setCurrency3] = useState('Status');
    const [form] = Form.useForm();

    const handleAddUsers = () => {
        console.log(newUserName);
        console.log(newUserTableID);
        createTableUser({ tableID: newUserTableID, name: newUserName });
    }

    return (
        <div>
            <h1 style={{ fontSize: '18px', fontWeight: '400', textAlign: 'left' }}>Table3</h1>
            <div style={{ border: '1px solid #bdc3c7', padding: '15px' }}>
                <div>
                    <Row
                        gutter={{
                            xs: 8,
                            sm: 16,
                            md: 24,
                            lg: 32,
                        }}
                    >
                        <Col className="gutter-row">
                            <Form
                                layout="vertical"
                                onFinish={handleAddUsers}
                                style={{}}>
                                <Form.Item label={<span style={{ fontSize: '18px' }}>Create User:</span>}>
                                    <Input value={newUserName}
                                        onChange={(e) => setNewUserName(e.target.value)} addonBefore="Name" />
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" style={{ width: '100%' }} htmlType="submit">Submit</Button>
                                </Form.Item>
                            </Form>
                        </Col>
                        <Col className="gutter-row">
                            <Form
                                layout="vertical"
                                style={{}}>
                                <Form.Item label={<span style={{ fontSize: '18px' }}>Create Status:</span>}>
                                    <Input addonBefore="Label" defaultValue="Close" />
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" style={{ width: '100%' }} htmlType="submit">Submit</Button>
                                </Form.Item>
                            </Form>
                        </Col>
                        <Col className="gutter-row">
                            <Form
                                layout="vertical"
                                style={{}}>
                                <Form.Item label={<span style={{ fontSize: '18px' }}>Create task:</span>}>
                                    <Input addonBefore="Label" defaultValue="Task1" />
                                </Form.Item>
                                <Form.Item>
                                    <Select
                                        style={{
                                            width: 80,
                                        }}
                                        value={currency}
                                    >
                                        <Option value="user1">User1</Option>
                                        <Option value="status">Started</Option>
                                    </Select>
                                    <Select
                                        style={{
                                            width: 80,
                                            margin: '0 8px',
                                        }}
                                        value={currency1}
                                    >
                                        <Option value="user1">User1</Option>
                                        <Option value="status">Started</Option>
                                    </Select>
                                    <Button type="primary" style={{ width: '30%' }} htmlType="submit">Submit</Button>
                                </Form.Item>
                            </Form>
                        </Col>
                        <Col className="gutter-row">
                            <Form
                                layout="vertical"
                                style={{}}>
                                <Form.Item label={<span style={{ fontSize: '18px' }}>Update Task:</span>}>
                                    <Input addonBefore="Label" defaultValue="" />
                                </Form.Item>
                                <Form.Item>
                                    <Select disabled
                                        style={{
                                            width: 80,
                                        }}
                                        value={currency2}
                                    >
                                        <Option value="user1">User1</Option>
                                        <Option value="status">Started</Option>
                                    </Select>
                                    <Select disabled
                                        style={{
                                            width: 80,
                                            margin: '0 8px',
                                        }}
                                        value={currency3}
                                    >
                                        <Option value="user1">User1</Option>
                                        <Option value="status">Started</Option>
                                    </Select>
                                    <Button type="primary" style={{ width: '30%' }} htmlType="submit">Submit</Button>
                                </Form.Item>
                            </Form>
                        </Col>
                        <Col style={{ width: '300px', alignItems: 'right', justifyContent: 'right' }}>
                            <div style={{ width: '100px', transform: 'translateX(160px)' }}>
                                <Button color="danger" variant="outlined" style={{ marginBottom: '15px' }}>
                                    Delete table
                                </Button>
                                <Button color="danger" variant="outlined">
                                    Delete Tasks
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </div>
                <TableComponent />
            </div>

        </div>
    )
}

export default Table3

