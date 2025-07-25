import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './myRoute';

import Aluno from '../pages/aluno';
import Alunos from '../pages/alunos';
import Fotos from '../pages/fotos';
import Register from '../pages/register';
import Login from '../pages/login';
import Page404 from '../pages/page404';

export default function Routes() {
   return (
      <Switch>
         <MyRoute exact path="/" component={Alunos} isClosed={false} />
         <MyRoute exact path="/aluno/:id/edit" component={Aluno} isClosed />
         <MyRoute exact path="/aluno/" component={Aluno} isClosed />
         <MyRoute exact path="/fotos/:id" component={Fotos} isClosed />
         <MyRoute exact path="/login/" component={Login} isClosed={false} />
         <MyRoute
            exact
            path="/register/"
            component={Register}
            isClosed={false}
         />
         <MyRoute path="*" component={Page404} />
      </Switch>
   );
}
