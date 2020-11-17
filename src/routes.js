import { Router } from 'express';

import AddressController            from './app/controllers/AddressController';
import BreedsController             from './app/controllers/BreedsController';
import CitiesController             from './app/controllers/CitiesController';
import PetsController               from './app/controllers/PetsController';
import PetshopsController           from './app/controllers/PetshopsController';
import AdminsitrationController     from './app/controllers/AdminsitrationController';
import PhonesController             from './app/controllers/PhonesController';
import RolesController              from './app/controllers/RolesController';
import SchedulingsController        from './app/controllers/SchedulingsController';
import UfsController                from './app/controllers/UfsController';

const routes = new Router();

routes.get('/address',                          AddressController.index);
routes.post('/address',                         AddressController.create);
routes.put('/address',                          AddressController.update);
routes.delete('/address',                       AddressController.destroy);

routes.get('/breeds',                           BreedsController.index);
routes.post('/breeds',                          BreedsController.create);
routes.put('/breeds',                           BreedsController.update);
routes.delete('/breeds',                        BreedsController.destroy);

routes.get('/cities',                           CitiesController.index);
routes.post('/cities',                          CitiesController.create);
routes.put('/cities',                           CitiesController.update);
routes.delete('/cities',                        CitiesController.destroy);

routes.get('/pets',                             PetsController.index);
routes.post('/pets',                            PetsController.create);
routes.put('/pets',                             PetsController.update);
routes.delete('/pets',                          PetsController.destroy);

routes.get('/petshops',                         PetshopsController.index);
routes.post('/petshops',                        PetshopsController.create);
routes.put('/petshops',                         PetshopsController.update);
routes.delete('/petshops',                      PetshopsController.destroy);

routes.get('/petshops/administration',          AdminsitrationController.index);
routes.post('/petshops/administration',         AdminsitrationController.create);
routes.put('/petshops/administration',          AdminsitrationController.update);
routes.delete('/petshops/administration',       AdminsitrationController.destroy);

routes.get('/phones',                           PhonesController.index);
routes.post('/phones',                          PhonesController.create);
routes.put('/phones',                           PhonesController.update);
routes.delete('/phones',                        PhonesController.destroy);

routes.get('/roles',                            RolesController.index);
routes.post('/roles',                           RolesController.create);
routes.put('/roles',                            RolesController.update);
routes.delete('/roles',                         RolesController.destroy);

routes.get('/schedulings',                      SchedulingsController.index);
routes.post('/schedulings',                     SchedulingsController.create);
routes.put('/schedulings',                      SchedulingsController.update);
routes.delete('/schedulings',                   SchedulingsController.destroy);

routes.get('/ufs',                              UfsController.index);
routes.post('/ufs',                             UfsController.create);
routes.put('/ufs',                              UfsController.update);
routes.delete('/ufs',                           UfsController.destroy);

routes.get('/users',                            UsersController.index);
routes.post('/users',                           UsersController.create);
routes.put('/users',                            UsersController.update);
routes.delete('/users',                         UsersController.destroy);


export default routes;
