import {Router} from 'express';
import { addUser, editUser, getAllUsers, getUserById, removeUser } from './users.data.mjs';
import {addProduct} from '../products/products.data.mjs';

export const UsersRouter = Router();

/**
 * GET All
 * Get by ID
 * POST
 * PUT by ID
 * DELET by ID
 */

 UsersRouter.get('/', async (req, res) => {
   res.send(await getAllUsers());
 });
 
 UsersRouter.get('/:id', async (req, res) => {
   res.send(await getUserById(req.params.id));
 });

 UsersRouter.post('/:id/products', async (req, res) => {
  res.send(await addProduct(req.body, req.params.id))
});
 
 UsersRouter.post('/', async (req, res) => {
   res.send(await addUser(req.body));
 });
 
 UsersRouter.put('/:id', async (req, res) => {
   res.send(await editUser(req.params.id, req.body));
 });
 
 UsersRouter.delete('/:id', async (req, res) => {
  await removeUser(req.params.id);
   res.send('ok');
 });