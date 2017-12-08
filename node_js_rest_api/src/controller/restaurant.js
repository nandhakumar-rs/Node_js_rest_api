import mongoose from 'mongoose';
import { Router } from 'express';
import Restaurant from '../model/restaurant';
import bodyParser from 'body-parser';

export default({ config, db }) => {
  let api = Router();

  // '/v1/restaurant/add'
  api.post('/add', (req, res) => {
    let newRest = new Restaurant();
    newRest.name = req.body.name;

    newRest.save(function(err) {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'Restaurant saved successfully' });
    });
  });
  return api;
}
