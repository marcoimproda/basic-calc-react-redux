import { combineReducers } from 'redux';
import calculatorReducer from "./calculator/calculator.reduce";

export const rootReducer = combineReducers({
    operations: calculatorReducer
});