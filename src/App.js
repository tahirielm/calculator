import {CalculatorBody} from './Components/CalculatorBody';

export const ACTIONS = {
  ADD_DIGIT : 'add-digit',
  DELETE_DIGIT : 'delete-digit', 
  CLEAR : 'clear',
  EVALUATE : 'evaluate',
  CHOOSE_OPERATION : 'choose-operation'
}


function App() {

  

  return (
    <CalculatorBody/>
  );
}

export default App;
