import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';
import styled from 'styled-components';

import 'antd/dist/antd.css';

const Item = styled.div`
    width: 90%;
    height: auto;
    background-color: #66ccda;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: baseline;
    margin: 5px 5px;
    border-radius: 4px;
    text-align: left;
    &:hover{
        background-color: #9ddee7;
        transition-duration: 0.2s;
    }
`

const InputLine = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
`


const LineItem = props => {
    console.log(props.recurringTotal);

    const [modalVisible, setModalVisible] = useState(false);

    const [categoryCosts, setCategoryCosts] = useState({});

  



    const handleRecurringOk = e => {
        e.preventDefault();
        props.updateRecurringTotal(categorySum);
        setModalVisible(false);
      };

    const handleRelocationOk = e => {
    e.preventDefault();
    props.updateRelocationTotal(categorySum);
    setModalVisible(false);
    };

    const handleCancel = e => {
        console.log(e);
        setModalVisible(false);
      };

    const handleChange = e => {
        e.preventDefault();
        setCategoryCosts({
            ...categoryCosts,
            [e.target.name]: e.target.value
        })
    }

    const Sum = obj => {
        return Object.keys(obj).reduce((sum, key) => sum+parseFloat(obj[key] || 0), 0);
        
    };
    const categorySum = Sum(categoryCosts);
    
    
    
    return(
        
        <>
            <Item onClick={() => setModalVisible(!modalVisible)}>
                <h2>{props.category.name}</h2>
                <h2>${categorySum}</h2>
            </Item>
            <Modal
            title={props.category.name}
            visible={modalVisible}
            onOk={e => {props.updateRecurringTotal ? handleRecurringOk(e) : handleRelocationOk(e)}}
            onCancel={handleCancel}
            >
            <h3>Things to consider: </h3>
                {props.category.categories.map(category => {
                return(
                    <InputLine>
                        <p>{category}</p>
                        <input
                            type="number"
                            placeholder="0"
                            name={category}
                            value={categoryCosts.category}
                            onChange={e => handleChange(e)}
                        />
                    </InputLine>
                )      
                })}
            </Modal>
        </>
    )
};

export default LineItem;