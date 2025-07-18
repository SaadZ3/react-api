import * as types from '../types';

export function clicaBotaoRequest() {
    return {
        type: types.BOTAO_CLICADOREQUEST,
    };
}
export function clicaBotaoSuccess() {
    return {
        type: types.BOTAO_CLICADOSCCESS,
    };
}
export function clicaBotaoFail() {
    return {
        type: types.BOTAO_CLICADOFAIL,
    };
}