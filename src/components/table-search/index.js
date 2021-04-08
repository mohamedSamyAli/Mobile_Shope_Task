import { Button, Col, Form, Input, Row, Select, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { getBrands } from '../../services/lookups.services'
import { getAllMobiles, getFilteredMobiles } from '../../services/mobiles.services'
import { Preview } from '../mobile-info-previewer'


let columns = [
    { key: '1', title: 'Brand', dataIndex: 'brand', sorter: (a,b)=> a.brand>b.brand?-1:1 },
    { key: '21', title: 'Model', dataIndex: 'model', sorter: (a,b)=> a.model>b.model?-1:1  },
    { key: '31', title: 'Year', dataIndex: 'manfactoringYear', render: el => <div>{el.slice(0, 4)}</div>, sorter: (a,b)=> a.manfactoringYear>b.manfactoringYear?-1:1  }
]
const { Item } = Form
export const MobilesTable = (props) => {
    const [previewData, setPreviewData] = useState(null)
    const [data, setData] = useState([])
    const onSearch = (e) => {
        
        setData(getFilteredMobiles(e.model, e.brand))
    }
    useEffect(() => {
        setData(getAllMobiles())

    }, [])
    return (
        <div>
            <Form onFinish={onSearch}>
                <Row align="middle">
                    <Col span={18}>
                        <Item
                            label="Model"
                            name="model"
                        >
                            <Input />
                        </Item>
                        <Item
                            label="Brand"
                            name="brand"
                        >
                            <Select options={getBrands().map(e => { return { label: e.name, value: e.id } })} allowClear />
                        </Item>
                    </Col>
                    <Col  span={6}>
                        <Button style={{marginBottom:"24px"}} type="primary" htmlType="submit">
                            Search
                         </Button>
                    </Col>
                </Row>
            </Form>
            <Table
                onRow={(record, rowIndex) => {
                    return {
                        onClick: (event) => {
                            
                            setPreviewData(record)
                        }, // click row
                    };
                }}
                dataSource={data}
                columns={columns}
                pagination={{pageSize:5}}
            />
            {previewData && <Preview preview={true} data={previewData} />}
        </div>
    )
}
