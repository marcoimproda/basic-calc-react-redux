import { evaluate } from "mathjs";
import * as types from './calculator.types';

// Define default state
const defaultState = {
    display: '0',
    formula: '',
    operation: '',
    history: [],
};

// Define operations
const operations = ['+', '-', '/', '*', '.'];

export const calculatorReducer = (state = defaultState, action) => {
    switch(action.type) {
        case types.CLEAR:
            return {
               display: defaultState.display,
               formula: defaultState.formula,
               operation: defaultState.operation,
               history: [...state.history]
            };
        case types.ADD:
            if(state.formula === '') {
                return state;
            } else {
                return {
                    display: '+',
                    operation: '+',
                    formula: state.formula.includes('=') ? state.formula.split('=').at(-1) + '+' : (operations.includes(state.formula.substring(state.formula.length-1)) || operations.includes(state.formula.substring(state.formula.length-1)) === '+' ? state.formula.substring(0, state.formula.length-1) + '+' : state.formula + '+'),
                    history: state.history
                };
            }
            
        case types.SUBTRACT:
            if(state.formula === '') {
                return state;
            } else {
            return {
                display: '-',
                operation: '-',
                formula: state.formula.includes('=') ? state.formula.split('=').at(-1) + '-' : (operations.includes(state.formula.substring(state.formula.length-1)) && state.formula.substring(state.formula.length-1) !== '+' ? state.formula.substring(0, state.formula.length-1) + '-' : state.formula + '-'),
                history: state.history
            };
        }
        case types.DIVIDE:
            if(state.formula === '') {
                return state;
            } else {
            return {
                display: '/',
                operation: '/',
                formula: state.formula.includes('=') ? state.formula.split('=').at(-1) + '/' : (operations.includes(state.formula.substring(state.formula.length-1)) ? state.formula.substring(0, state.formula.length-1) + '/' : state.formula + '/'),
                history: state.history
            };
        } 
        case types.MULTIPLY:
            if(state.formula === '') {
                return state;
            } else {
            return {
                display: '*',
                operation: '*',
                formula: state.formula.includes('=') ? state.formula.split('=').at(-1) + '*' : (operations.includes(state.formula.substring(state.formula.length-1)) ? state.formula.substring(0, state.formula.length-1) + '*' : state.formula + '*'),
                history: state.history
            };
        } 
        case types.EQUAL:
            if (state.formula.includes('=') || state.operation === '') {
                return state
            }
            else {
                const result = parseFloat(evaluate(state.formula).toFixed(2));
                return {
                    formula: state.formula + '=' + result,
                    operation: defaultState.operation,
                    display: result,
                    history: [...state.history, {formula: 'Operation: ' + state.formula, result: result}]
                };
            }
        case types.DECIMAL:
            if(state.formula.includes('=')) {
                return state;
            } else {
            return {
                display: state.display.includes('.') ? state.display : operations.includes(state.display.substring(state.display.length-1)) ? '0.' : state.display + '.',
                formula: state.display.includes('.') ? state.formula : operations.includes(state.display.substring(state.display.length-1)) ? state.formula + '0.' : state.formula + '.',
                operation: state.operation,
                history: state.history
            };
        }
        case types.DIGIT:
            const digit = action.payload;
            if(state.formula.includes('=')) {
                return state;
            } else {
                return {
                    display: state.display.substring(0) === '0' ? `${digit}` : state.display + `${digit}`,
                    formula: state.formula.substring(0) === '0' ? `${digit}` : state.formula + `${digit}`,
                    operation: state.operation,
                    history: state.history
                };
            }
         case types.CANCEL:
            if(state.formula.includes('=')) {
                return state;
            } else {
         return {
            display: state.display.substring(0) === '0' ? state.display : state.display.slice(0, -1),
            formula: state.formula.substring(0) === '0' ? state.formula : state.formula.slice(0, -1),
            operation: defaultState.operation,
            history: state.history
        };
    }
        case types.ERASEHISTORY: 
        return {
            display: defaultState.display,
            formula: defaultState.formula,
            operation: defaultState.operation,
            history: []
         };
        default:
        return state
    }
};

export default calculatorReducer;