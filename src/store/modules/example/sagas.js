// call chama uma função assíncrona
// put envia uma ação para o Redux
// all permite executar múltiplas sagas em paralelo
// takeLatest escuta a última ação disparada e ignora as anteriores
import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as actions from './actions';
import * as types from '../types';

// Simula uma requisição assíncrona
const requisicao = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve();
    }, 600);
   });

// função geradora que lida com a ação de clicar no botão
function* exampleRequest() {
   try {
      yield call(requisicao); // chama a função assíncrona
      yield put(actions.clicaBotaoSuccess()); // envia/dispara a ação de sucesso
   } catch {
      toast.error('Deu erro.');
      yield put(actions.clicaBotaoFail());
   }
}

// exportando a saga que escuta a ação BOTAO_CLICADOREQUEST
// e chama a função exampleRequest quando essa ação é disparada
export default all([takeLatest(types.BOTAO_CLICADOREQUEST, exampleRequest)]);
