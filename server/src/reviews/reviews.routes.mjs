import {Router} from 'express';
import { addReview, editReview, getAllReviews, getReviewById, removeReview } from './reviews.data.mjs';

export const ReviewsRouter = Router();

  ReviewsRouter.get('/', (req, res) => {
    res.send(getAllReviews());
  });
  
  ReviewsRouter.post('/', (req, res) => {
    res.send(addReview(req.body));
  });