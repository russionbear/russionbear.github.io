import React, { useState, useRef, useContext, useEffect, useMemo, useCallback } from 'react'
import { Modal, Button, Space, Input, Table, Form, InputRef, Popconfirm } from 'antd'
import { FormInstance } from 'antd/lib/form';
import {
    TYPE_BOOKMANAGER_NOWBOOK,
    TYPE_BOOKMANAGER_BOOKS,
    ItemBook as DataType // 
} from '../../redux/actions';

const EditableContext = React.createContext<FormInstance<any> | null>(null);

interface EditableRowProps {
    index: number;
}

const EditableRow: React.FC<EditableRowProps> = ({ index, ...props }) => {
    const [form] = Form.useForm();
    return (
        <Form form={form} component={false}>
            <EditableContext.Provider value={form}>
                <tr {...props} />
            </EditableContext.Provider>
        </Form>
    );
};

// interface DataType {
//     key: React.Key;
//     name: string;
//     dsc: string
// }

/**
 * dataIndex couldn't be 'operation'
 */
const colunmsSetting = [{
    title: 'name',
    dataIndex: 'name',
    editable: true,
},
{
    title: 'dsc',
    dataIndex: 'dsc',
    editable: true,
}
]

const itemFormat: DataType = {
    key: '未命名',
    dsc: '描述',
    name: '未命名'
}

interface EditableCellProps {
    title: React.ReactNode;
    editable: boolean;
    children: React.ReactNode;
    dataIndex: keyof DataType;
    record: DataType;
    handleSave: (record: DataType) => void;
}

const EditableCell: React.FC<EditableCellProps> = ({
    title,
    editable,
    children,
    dataIndex,
    record,
    handleSave,
    ...restProps
}) => {
    const [editing, setEditing] = useState(false);
    const inputRef = useRef<InputRef>(null);
    const form = useContext(EditableContext)!;

    useEffect(() => {
        if (editing) {
            inputRef.current!.focus();
        }
    }, [editing]);

    const toggleEdit = () => {
        setEditing(!editing);
        form.setFieldsValue({ [dataIndex]: record[dataIndex] });
    };

    const save = async () => {
        try {
            const values = await form.validateFields();

            toggleEdit();
            handleSave({ ...record, ...values });
        } catch (errInfo) {
            console.log('Save failed:', errInfo);
        }
    };

    let childNode = children;

    if (editable) {
        childNode = editing ? (
            <Form.Item
                style={{ margin: 0 }}
                name={dataIndex}
                rules={[
                    {
                        required: true,
                        message: `${title} is required.`,
                    },
                ]}
            >
                <Input ref={inputRef} onPressEnter={save} onBlur={save} />
            </Form.Item>
        ) : (
            <div className="editable-cell-value-wrap" style={{ paddingRight: 24 }} onClick={toggleEdit}>
                {children}
            </div>
        );
    }

    return <td {...restProps}>{childNode}</td>;
};

type EditableTableProps = Parameters<typeof Table>[0];
type ColumnTypes = Exclude<EditableTableProps['columns'], undefined>;


const components = {
    body: {
        row: EditableRow,
        cell: EditableCell,
    },
};

export default function BookManager(
    props: {
        defaultSelectedRowKeys?: Array<string>,
        dataSource?: Array<DataType>,
        cb?: (action: { type: string, books?: Array<DataType>, nowBook?: DataType }) => void,
        show?: boolean
    }
) {
    const [showModal, setShowModal] = useState(false)
    const [dataSource, setDataSource] = useState(props.dataSource || [])
    const [selectedRowKeys, setselectedRowKeys] = useState<Array<string>>(props.defaultSelectedRowKeys||[])

    useEffect(() => {
        console.log(props.dataSource)
        setDataSource(props.dataSource===undefined?[]:props.dataSource)
        // if(props.dataSource&&selectedRowKeys.length!==0){
        //     let newSelected = props.dataSource.find(item=>item.key===selectedRowKeys[0])
        //     if(!newSelected){
        //         setServers
        //     }
        // }
    }, [props.dataSource])

    useEffect(()=>{
        // console.log(props.defaultSelectedRowKeys, 'rok')
        if(props.defaultSelectedRowKeys!==undefined){
            // if(pro)
            setselectedRowKeys(props.defaultSelectedRowKeys)
        }
    }, [props.defaultSelectedRowKeys])

    useEffect(() => {
        if (props.show) {
            setShowModal(true)
        }
    }, [props.show])

    const columns = [...colunmsSetting, {
        title: 'operation',
        dataIndex: 'operation',
        // @ts-ignore
        render: (_, record: { key: React.Key }) =>
            dataSource.length >= 1 ? (
                <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
                    <a>Delete</a>
                </Popconfirm>
            ) : null,
    }].map(col => {
        // @ts-ignore
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: (record: DataType) => ({
                record,
                // @ts-ignore
                editable: col.editable,
                dataIndex: col.dataIndex,
                title: col.title,
                handleSave: handleSave,
            }),
        };
    });

    const handleDelete = (key: React.Key) => {
        const dataSource_ = [...dataSource];
        // this.setState({ dataSource: dataSource_.filter(item => item.key !== key) });
        let newData = dataSource_.filter(item => item.key !== key)
        setDataSource(newData)

        if (props.cb) {
            props.cb({
                type: TYPE_BOOKMANAGER_BOOKS,
                books: newData
            })
        }
    };

    const handleAdd = () => {
        // const { count, dataSource } = this.state;
        // let count = dataSource.length
        let newData: DataType = { ...itemFormat, key: '0' };

        do {
            newData.key = Math.random().toString(36).substring(8)
            let rlt = false
            dataSource.every(val => {
                console.log(newData.key, val.key, 'compare')
                if (val.key === newData.key) {
                    rlt = true
                    return
                }
            })
            if (!rlt) {
                break
            }
        } while (true);


        // this.setState({
        //   dataSource: [...dataSource, newData],
        //   count: count + 1,
        // });
        // @ts-ignore
        setDataSource([...dataSource, newData])

        if(dataSource.length===0){
            setselectedRowKeys([newData.key])
        }

        if (props.cb) {
            props.cb({
                type: TYPE_BOOKMANAGER_BOOKS,
                books: [...dataSource, newData]
            })
        }
    };

    const handleSave = (row: DataType) => {
        const newData = [...dataSource];
        const index = newData.findIndex(item => row.key === item.key);
        const item = newData[index];
        // @ts-ignore
        newData.splice(index, 1, { ...item, ...row });
        // this.setState({ dataSource: newData });
        setDataSource(newData)

        if (props.cb) {
            props.cb({
                type: TYPE_BOOKMANAGER_BOOKS,
                books: newData
            })
        }
    };

    const rowSelection = useMemo(() => {
        return {
            onChange: (selectedRowKeys_: React.Key[], selectedRows: DataType[]) => {
                // console.log(selectedRowKeys_)
                // @ts-ignore
                setselectedRowKeys(selectedRowKeys_)
                
                if(props.cb){
                    props.cb({type: TYPE_BOOKMANAGER_NOWBOOK, nowBook: selectedRows[0]})
                }
                // console.log(`selectedRowKeys_: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            getCheckboxProps: (record: DataType) => ({
                disabled: record.name === 'Disabled User', // Column configuration not to be checked
                name: record.name,
            }),
        }
    }, [props.cb]);

    const handleCancel = useCallback(()=>{
        setShowModal(false)
        if(props.cb){
            props.cb({type: ''})
        }
    }, [])

    // const columns = this.columns

    return (
        <Modal
            title="笔记本"
            closable={false}
            visible={showModal}
            onCancel={handleCancel}
            footer={<Space  style={{ marginBottom: 16 }}>
                <Button onClick={handleAdd} type="primary">
                    Add a row
                </Button>
                <Button onClick={handleCancel}>确定</Button>
            </Space>}
        >
            <div>
                <Table
                    size="small"
                    components={components}
                    rowSelection={{ type: "radio", ...rowSelection, selectedRowKeys: selectedRowKeys}}
                    rowClassName={() => 'editable-row'}
                    bordered
                    dataSource={dataSource}
                    // @ts-ignore
                    columns={columns as ColumnTypes}
                />
            </div>
        </Modal>
    )
}
