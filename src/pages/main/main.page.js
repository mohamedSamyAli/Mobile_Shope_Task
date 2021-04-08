import React from 'react'
import './style.css'
import { Button, Col, Layout, Row } from 'antd';
import { MobilesTable } from '../../components/table-search';
import { ChartsComponent } from '../../components/charts';
import { Link } from 'react-router-dom';

const { Header, Footer, Sider, Content } = Layout;
export const MainPage = (props) => {

    return (
        <Layout>
            <Header className="header">Mobile Shope</Header>
            <Content>
                <Row>
                    <Col  className="border-rigth-style" xs={24} lg={16}>
                        <Row justify="end">
                            <Button style={{margin:"10px"}} type="primary">
                                <Link to="/addpage">
                                    Add Mobile
                            </Link>
                            </Button>
                        </Row>
                        <MobilesTable />
                    </Col>
                    <Col xs={24} lg={8}>
                        <ChartsComponent />
                    </Col>
                </Row>

            </Content>

        </Layout>
    )
}
