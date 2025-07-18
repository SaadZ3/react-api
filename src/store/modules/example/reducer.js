import * as types from '../types';

const initialState = {
    botaoClicado: false,
}
 
// reducer é uma função que recebe o estado atual e uma ação, e retorna o novo estado
export default function reducer (state = initialState, action) {
    switch (action.type) {
        case types.BOTAO_CLICADOSCCESS:
            console.log('Botão clicado com sucesso');
            const newState = { ...state };
            newState.botaoClicado = !newState.botaoClicado; // inverte o estado do botão clicado
            return newState;

        case types.BOTAO_CLICADOFAIL:
            console.log('Erro ao clicar no botão');
            return state; // mantém o estado atual, pois não há alteração no estado

        case types.BOTAO_CLICADOREQUEST:
            console.log('aguardando resposta...');
            return state; // mantém o estado atual, pois não há alteração no estado
        default:
            return state;
    }
}