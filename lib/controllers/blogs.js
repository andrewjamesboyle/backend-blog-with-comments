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
    try {
      const blog = await Blog.getById(req.params.id);
      await blog.addComments();
      if (!blog) {
        next();
      }
      res.json(blog);
    } catch (e) {
      next(e);
    }
    
  });
