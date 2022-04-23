import style from './GithubTopbar.module.css'
import { Breadcrumb, Button, Dropdown, Input, Select, Space } from 'antd'
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';


export default function GithubTopbar() {
    const [nowState, setnowState] = useState('/books')
    const [books, setbooks] = useState([])
    const [notes, setnotes] = useState([])
    const [sources, setsources] = useState([])

    const handleBookClick = useCallback((e) => {
        console.log(e, 'e')
    },
        [],
    )

    const handleNoteClick = useCallback(
        () => {

        },
        [],
    )

    return (
        <div className={style.body}>
            <Breadcrumb>
                <Breadcrumb.Item>
                    <Link to='books'><HomeOutlined /></Link>

                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <Select
                        size="small"
                        bordered={false}
                        style={{ minWidth: '100px' }}
                        showSearch
                        placeholder="Select a person"
                        showArrow={false}
                    // optionFilterProp="children"
                    // onChange={onChange}
                    // onSearch={onSearch}
                    // filterOption={(input, option) =>
                    //     option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    // }
                    >
                        <Select.Option>sdf1</Select.Option>
                        <Select.Option>sdf2</Select.Option>
                        <Select.Option>sdf3</Select.Option>
                        <Select.Option>sdf4</Select.Option>
                    </Select>
                </Breadcrumb.Item>

                <Breadcrumb.Item>
                    <Link to='books'><HomeOutlined /></Link>

                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <Select
                        size="small"
                        bordered={false}
                        style={{ minWidth: '100px' }}
                        showSearch
                        placeholder="Select a person"
                        showArrow={false}
                    // optionFilterProp="children"
                    // onChange={onChange}
                    // onSearch={onSearch}
                    // filterOption={(input, option) =>
                    //     option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    // }
                    >
                        <Select.Option>sdf1</Select.Option>
                        <Select.Option>sdf2</Select.Option>
                        <Select.Option>sdf3</Select.Option>
                        <Select.Option>sdf4</Select.Option>
                    </Select>
                </Breadcrumb.Item>
            </Breadcrumb>
            <Space>
                <Dropdown overlay={<div>123123</div>}>
                    <Link to="/source"><Button type='text'>source</Button></Link>
                </Dropdown>
            </Space>

        </div>
    )
}
