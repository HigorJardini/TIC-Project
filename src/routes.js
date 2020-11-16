import { Router } from 'express';

import EstadosController from './app/controllers/EstadosController';
import CidadesController from './app/controllers/CidadesController';
import UsersController from './app/controllers/UsersController';

const routes = new Router();

routes.post('/users', UsersController.create);
routes.put('/users/:id', UsersController.update);
routes.delete('/users/:id', UsersController.destroy);

routes.post('/estados',EstadosController.create);
routes.put('/estados', EstadosController.update);
routes.delete('/estados', EstadosController.destroy);

routes.post('/cidades', CidadesController.create);
routes.put('/cidades', CidadesController.update);
routes.delete('/cidades', CidadesController.destroy);

export default routes;
