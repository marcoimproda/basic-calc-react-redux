import * as types from '../types';

export const clearFormula = () => {
    return {
            type: types.CLEAR,
        }
}
export const add = () => {
    return {
            type: types.ADD
        }
}

export const subtract = () => {
    return {
            type: types.SUBTRACT
    }
}

export const multiply = () => {
    return {
            type: types.MULTIPLY
        }
}

export const divide = () => {
    return {
            type: types.DIVIDE
    }
}

export const evaluateFormula = () => {
    return {
            type: types.EQUAL
        }
}

export const addDecimalPoint = () => {
    return {
            type: types.DECIMAL
    }
}

export const pushDigit = (digit) => {
    return {
            type: types.DIGIT,
            payload: digit
    }
}

export const cancelDigit = () => {
    return {
            type: types.CANCEL,
    }
}

export const eraseHistory = () => {
    return {
            type: types.ERASEHISTORY,
    }
}