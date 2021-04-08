
import React, { useEffect } from 'react'
import "./style.css"

import { Layout, Form, Input, DatePicker, Select, Row, Col, Button } from 'antd';
import { InputItems } from '../../components/add.page.form/inputs-selectors-items';
import { ChoisesItemsComponents } from '../../components/add.page.form/choises-items';
import { Link, useHistory } from 'react-router-dom';
import { addMobile, getAllMobiles } from '../../services/mobiles.services';
import moment from 'moment';
const { Item } = Form
const { Header, Footer, Sider, Content } = Layout;

export const Preview = ({ data, ...props }) => {
    let itemDefaultprops = {
        labelCol: { span: 8},
        labelAlign: "left"
    }
    let formRef = {}
    let history = useHistory();
    const onFinish = (data) => {
        console.log(useHistory, history)
        addMobile(data)
        history.push("/mainpage")
    }
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
                    onFinish={onFinish}
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
