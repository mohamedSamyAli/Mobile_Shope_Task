
import React from 'react'

import { Layout, Form, Input, DatePicker, Select, Row, Col, Checkbox, Radio } from 'antd';

import "./styles.css"
const { Item } = Form
const { Header, Footer, Sider, Content } = Layout;

export const ChoisesItemsComponents = ({preview}) => {
  
  return (
    <>
      <div className="choises-box">

        <Item
          name="extraOptions"
        >
          <Checkbox.Group disabled={preview} className="choises-directions" options={extraOptions} />
        </Item>
        <div style={{ display: "flex" }}>
          <div className="radio-lable">Screen</div>
          <Item
            name="screenSize"
            initialValue={preview?null:'6"'}
          >
            <Radio.Group disabled={preview}  className="choises-directions" options={screenSize}  />
          </Item>
        </div >

        <div style={{ display: "flex" }}>
          <div className="radio-lable">Color</div>
          <Item
            name="color"
            initialValue={preview?null:'black'}
          >
            <Radio.Group disabled={preview}  className="choises-directions" options={color}  />
          </Item>
        </div>
      </div>
    </>
  )
}

const extraOptions = [
  { label: "Dual SIM", value: "Dual SIM" },
  { label: "NFC", value: "NFC" },
  { label: "4G", value: "4G" }
]


const screenSize = [
  { label: '4"', value: '4"' },
  { label: '5"', value: '5"' },
  { label: '6"', value: '6"' }
]

const color = [
  { label: 'white', value: 'white' },
  { label: 'black', value: 'black' },
  { label: 'gold', value: 'gold' }
]