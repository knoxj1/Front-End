import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import LineItem from './LineItem';

import { personalCosts, relocationCosts } from '../cost data';



import 'antd/dist/antd.css';

const CalcPage = styled.div`
    margin-top: 100px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
`

const Results = styled.div`
    width: 80vw;
    height: 80px;
    background-color: tomato;
    border-radius: 5px;
    h2{
        color: white;
    }
`

const CalculatorHolder = styled.div`
    width: 100vw;
    height: 70vh;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
`
const Column = styled.div`
    width: 45%;
    max-width: 600px;
    height: 800px;
    background-color: #59B7FF;
    border-radius: 5px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    h2{
        font-size: 2.7rem;
        color: #ededed;
    }
    
`


const Calculator = props => {

    const [recurringTotal, setRecurringTotal] = useState(0);
    const [relocationTotal, setRelocationTotal] = useState(0);

    const updateRecurringTotal = (amount) => {
        let newSum = recurringTotal + amount;
        setRecurringTotal(newSum);
    }

    const updateRelocationTotal = amount => {
        let newSum = relocationTotal + amount;
        setRelocationTotal(newSum);
    }



    return(
        <CalcPage>
            <Results>
                <h2>Total Cost for Relocation: ${recurringTotal + relocationTotal}</h2>
            </Results>
        
            <CalculatorHolder>
                <Column>
                    <h2>My Recurring Expenses</h2>
                    {personalCosts.map(category => {
                        return <LineItem category={category} updateRecurringTotal={updateRecurringTotal} />
                    })}
                    <h3>Total Recurring Expenses: ${recurringTotal}</h3>
                </Column>
                <Column>
                    <h2>My Relocation Expenses</h2>
                    {relocationCosts.map(category => {
                        return <LineItem category={category} updateRelocationTotal={updateRelocationTotal} />
                    })}
                    <h3>Total Relocation Expenses: ${relocationTotal}</h3>
                </Column>
            </CalculatorHolder>
        </CalcPage>
    );
};

export default Calculator;