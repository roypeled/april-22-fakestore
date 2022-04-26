import { UsersRouter } from './users/users.routes.mjs';
import { ProductsRouter } from './products/products.routes.mjs';
import {Router} from 'express';

export const AppRouter = Router();

AppRouter.use('/users', UsersRouter);
AppRouter.use('/products', ProductsRouter);
// AppRouter.use('/reviews', ReviewsRouter);
// AppRouter.use('/categories', CategoriesRouter);