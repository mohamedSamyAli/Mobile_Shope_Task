import React from 'react'
import "./style.css"

import { Layout, Form, Row, Col, Button } from 'antd';
import { InputItems } from '../../components/add.page.form/inputs-selectors-items';
import { ChoisesItemsComponents } from '../../components/add.page.form/choises-items';
import { Link, useHistory } from 'react-router-dom';
import { addMobile } from '../../services/mobiles.services';

const { Item } = Form
const { Header, Content } = Layout;

export const AddPage = ({preview,...props}) => {
  let history = useHistory();
  const onFinish = (data) => {
    console.log(useHistory,history)
    addMobile(data)
    history.push("/mainpage")    
  }
  return (
    <Layout>
      <Header className="header">Add Mobile</Header>
      <Content className="form-wraper">
        <Form
          onFinish={onFinish}
        >
          <Row justify="space-around">
            <Col xs={24} lg={10}>
              <InputItems />
            </Col>
            <Col xs={24} lg={12}>
              <ChoisesItemsComponents/>
            </Col>
          </Row>
          
        <div className="form-btn-wraper">
            <Button type="default" >
              <Link to="/mainpage">
              Back
              </Link>
        </Button>
          <Button type="primary" htmlType="submit" >
              Save
        </Button>
          </div>
        </Form>
      </Content>
    </Layout>
  )
}
