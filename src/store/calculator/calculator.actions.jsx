import * as types from '../calculator/calculator.types';
import { createAction } from '../../utils/reducer/reducer.utils';

export const clearFormula = () => {
    return createAction(types.CLEAR)
}
export const add = () => {
    return createAction(types.ADD)
}

export const subtract = () => {
    return createAction(types.SUBTRACT)
}

export const multiply = () => {
    return createAction(types.MULTIPLY)
}

export const divide = () => {
    return createAction(types.DIVIDE)
}

export const evaluateFormula = () => {
    return createAction(types.EQUAL)
}

export const addDecimalPoint = () => {
    return createAction(types.DECIMAL)
}

export const pushDigit = (digit) => {
    return createAction(types.DIGIT, digit)
}

export const cancelDigit = () => {
    return createAction(types.CANCEL)
}

export const eraseHistory = () => {
    return createAction(types.ERASEHISTORY)
}