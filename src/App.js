import { useReducer } from 'react';
import DigitButton from './DigitButton';
import OperationButton from './OperationButton'

export const ACTIONS = {
  ADD_DIGIT : 'add-digit',
  DELETE_DIGIT : 'delete-digit', 
  CLEAR : 'clear',
  EVALUATE : 'evaluate',
  CHOOSE_OPERATION : 'choose-operation'
}

function reducer(state, {type, payload}){
  switch(type){
    case ACTIONS.ADD_DIGIT:
      if( state.reset ){
        return{
          ...state,
          currentOperand : payload.digit,
          previousOperand : '',
          reset : false
        }
      }
      if (payload.digit == '.' && state.currentOperand.includes('.')){
        return state
      }
      return {
        ...state,
        currentOperand : `${state.currentOperand || ""}${payload.digit}`,
      }
    case ACTIONS.CLEAR:
      return {}
    case ACTIONS.DELETE_DIGIT:
      return {
        ...state,
        currentOperand : state.currentOperand.slice(0,-1)
      }
    case ACTIONS.CHOOSE_OPERATION:
      return{
        ...state,
        previousOperand : state.currentOperand,
        currentOperand : '',
        operation : payload.operation
      }
    case ACTIONS.EVALUATE:
      return{
        ...state,
        currentOperand : handleOperation(state.operation, parseFloat(state.previousOperand), parseFloat(state.currentOperand)),
        operation : '',
        previousOperand : '',
        reset : true
      }
    default:
      console.log(state)
  }
}

function handleOperation(operation, numberA, numberB){
  switch(operation){
    case '+':
      return numberA + numberB
    case '-':
      return numberA - numberB
    case '*':
      return numberA * numberB
    case '/':
      return numberA / numberB
    default:
      console.log("Operation not known")
  }
}

function App() {

  const [{previousOperand, currentOperand, operation, reset}, dispatch ] = useReducer(reducer, {reset:false})

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
  );
}

export default App;
