
import React, { useEffect } from 'react'
import "./style.css"
import { Layout, Form, Input ,Row, Col } from 'antd';
import { ChoisesItemsComponents } from '../../components/add.page.form/choises-items';
const { Item } = Form
const { Header, Footer, Sider, Content } = Layout;

export const Preview = ({ data, ...props }) => {
    let itemDefaultprops = {
        labelCol: { span: 8},
        labelAlign: "left"
    }
    let formRef = {}
    useEffect(() => {
        if (data) {
            formRef?.setFieldsValue({ ...data , manfactoringYear:data.manfactoringYear.slice(0,4) })
        }
    }, [data])
    return (
        <Layout>
            <Header className="header" >Preview Mobile Data</Header>
            <Content className="form-wraper">
                <Form
                    ref={el => formRef = el}
                >
                    <Row justify="space-around">
                        <Col xs={24} lg={10}>
                            <Item
                                name="model"
                                label="Model"
                                {...itemDefaultprops}
                            >
                                <Input className="add-form-input" />

                            </Item>
                            <Item
                                name="manfactoringYear"
                                label="Manfactoring year"
                                {...itemDefaultprops}
                            >
                                <Input className="add-form-input" />
                            </Item>

                            <Item
                                name="brand"
                                label="Brand"
                                {...itemDefaultprops}
                            >
                                <Input />
                            </Item>
                            <Item
                                name="memory"
                                label="Memory"
                                {...itemDefaultprops}
                            >
                                <Input />
                            </Item>

                        </Col>
                        <Col xs={24} lg={12}>
                            <ChoisesItemsComponents preview />
                        </Col>
                    </Row>
                </Form>
            </Content>
        </Layout>
    )
}
