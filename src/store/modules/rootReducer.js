// a função desse arquivo é juntar todos os reducers da aplicação
import { combineReducers } from "redux";
import exampleReducer from "./example/reducer"; // importando o reducer do exemplo

export default combineReducers({
    example: exampleReducer, // combinando o reducer do exemplo
});