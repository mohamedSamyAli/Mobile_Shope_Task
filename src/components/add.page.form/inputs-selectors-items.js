
import React from 'react'

import { Layout, Form, Input, DatePicker, Select} from 'antd';
import "./styles.css"
import { getBrands, getMemory } from '../../services/lookups.services';
const { Item } = Form
const { Header, Footer, Sider, Content } = Layout;

export const InputItems = () => {
    let itemDefaultprops = {
      labelCol:{span:5},
      labelAlign:"left"
    }
      return (
        <>
          <Item
            name="model"
            label="Model"
            {...itemDefaultprops}
            rules={[{required:true,message:"Enter Model"}]}
          >
            <Input className="add-form-input" />
    
          </Item>
          <Item
            name="manfactoringYear"
            label="Manfactoring year"
            {...itemDefaultprops}
            rules={[{required:true,message:"Manfactoring year"}]}
          >
            <DatePicker  picker="year" className="add-form-input" />
          </Item>
    
          <Item
            name="brand"
            label="Brand"
            {...itemDefaultprops}
            rules={[{required:true,message:"Brand"}]}
          >
            <Select options={getBrands().map(e => { return { label: e.name, value: e.id } })} />
          </Item>
          <Item
            name="memory"
            label="Memory"
            {...itemDefaultprops}
            rules={[{required:true,message:"Memory"}]}
          >
            <Select options={getMemory().map(e => { return { label: e.name, value: e.id } })} />
          </Item>
        </>
      )
    }

