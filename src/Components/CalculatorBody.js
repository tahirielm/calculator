import { useReducer } from 'react'
import {ACTIONS} from '../App.js'
import {DigitButton} from './DigitButton'
import {OperationButton} from './OperationButton'
import {reducer} from '../utils/logic.js' 

export function CalculatorBody() {

    const [{previousOperand, currentOperand, operation}, dispatch ] = useReducer(reducer, {})

    return (
    <div className="App">
      <div className="output">
        <div className="previous-operand">{previousOperand}{operation}</div>
        <div className="current-operand">{currentOperand}</div>
      </div>
        <button className='span-two' onClick={() => { dispatch({type: ACTIONS.CLEAR}) }}>AC</button>
        <button onClick={() => { dispatch( {type:ACTIONS.DELETE_DIGIT}) }}>DEL</button>
        <OperationButton operation='/' dispatch = {dispatch} />
        <DigitButton digit='1' dispatch = {dispatch} />
        <DigitButton digit="2" dispatch = {dispatch} />
        <DigitButton digit="3" dispatch = {dispatch} />
        <OperationButton operation='*' dispatch = {dispatch} />
        <DigitButton digit="4" dispatch = {dispatch} />
        <DigitButton digit="5" dispatch = {dispatch} />
        <DigitButton digit="6" dispatch = {dispatch} />
        <OperationButton operation='+' dispatch = {dispatch} />
        <DigitButton digit="7" dispatch = {dispatch} />
        <DigitButton digit="8" dispatch = {dispatch} />
        <DigitButton digit="9" dispatch = {dispatch} />
        <OperationButton operation='-' dispatch = {dispatch} />
        <DigitButton digit="." dispatch = {dispatch} />
        <DigitButton digit="0" dispatch = {dispatch} />
        <button className='span-two' onClick={() => { dispatch({ type:ACTIONS.EVALUATE }) }}>=</button>
    </div>
  )
}