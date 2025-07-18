import { all } from 'redux-saga/effects';

import example from './example/sagas';

// exporta a função rootSaga que combina todos os sagas da aplicação
export default function* rootSaga() {
   return yield all([example]);
}
