const { Router } = require('express');
const { Blog } = require('../models/Blog');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const blogs = await Blog.getAll();
      if (!blogs) {
        next();
      }
      res.json(blogs);
    } catch (e) {
      next(e);
    }
    
  })
  .get('/:id', async (req, res, next) => {
    res.json({});
  });
