import {Router} from 'express';
import { addCategory, editCategory, getAllCategories, getCategoryById, removeCategory } from './categories.data.mjs';

export const CategoriesRouter = Router();

/**
 * CRUD -
 * Product (Create product, Read product, Update product, Delete product)
 * Category (etc.)
 * User (etc.)
 * Cart (etc.)
 * 
 * REST API (HTTP method, url, return type) -
 * 
 * Read All: (GET)  /products/ 
 *            returns Array of Products.
 * 
 * Create:   (POST) /products/
 *            Request body: product json
 *            returns new product
 * 
 * Read one: (GET)  /products/[product Id] (/products/18529)
 *            returns Product (1)
 * 
 * 
 * Update:   (PUT,PATCH) /products/[product Id]
 *           Request body: product json
 *           returns updated product
 * 
 * Delete:   (DELETE) /products/[product Id]
 *           returns null
 */

  
  // READ - Get all products
  CategoriesRouter.get('/', (req, res) => {
    res.send(getAllCategories());
  });
  
  // CREATE - Create a new product
  CategoriesRouter.post('/', (req, res) => {
    res.send(addCategory(req.body));
  });
  
  // READ - Get product by ID
  CategoriesRouter.get('/:id', (req, res) => {
    res.send(getCategoryById(req.params.id));
  });
  
  // UPDATE - Update product by ID
  CategoriesRouter.put('/:id', (req, res) => {
    res.send(editCategory(req.params.id, req.body));
  });
  
  // DELETE - Delete item by ID
  CategoriesRouter.delete('/:id', (req, res) => {
    removeCategory(req.params.id)
    res.send('ok');
  });