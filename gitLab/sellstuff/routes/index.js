const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const models = require('../models')

const SALT_ROUNDS = 10

router.get('/', async (req, res) => {
  let products = await models.Product.findAll()
  res.render('pages/index', { products: products })
});

router.get('/products/:productId', async (req, res) => {
  let productId = req.params.productId
  let product = await models.Product.findOne({
    include: [{
      model: models.Comment,
      as: 'comments'
    }
    ],
    where: {
      id:productId
    }
  })
 // console.log(product.dataValues);
  res.render('pages/product-details', product.dataValues)
})

router.get('/login', (req, res) => {
  res.render('pages/login')
})

router.get('/register', (req, res) => {
  res.render('pages/register')
})

router.get('/logout', (req, res, next) => {
  if (req.session) {
    req.session.destroy((error) => {
      if (error) {
        next(error)
      }
      else {
        res.redirect('/login');
      }
    });
  }
});

router.post('/register', async (req, res) => {
  let username = req.body.username
  let password = req.body.password

  let persistedUser = await models.User.findOne({
    where: {
      username: username,
    },
  })

  if (persistedUser == null) {
    bcrypt.hash(password, SALT_ROUNDS, async (error, hash) => {
      if (error) {
        res.render('pages/register', { message: 'Error creating user!' })
      } else {
        let user = models.User.build({
          username: username,
          password: hash,
        })

        let savedUser = await user.save()
        if (savedUser != null) {
          res.redirect('/login')
        } else {
          res.render('pages/register', { message: 'User already exists!' })
        }
      }
    })
  } else {
    res.render('pages/register', { message: 'User already exists!' })
  }
})

router.post('/login', async (req, res) => {
  let username = req.body.username
  let password = req.body.password

  let user = await models.User.findOne({
    where: {
      username: username,
    },
  })

  if (user != null) {
    bcrypt.compare(password, user.password, (error, result) => {
      if (result) {
        // create a session
        if (req.session) {
          req.session.user = { userId: user.id };
          console.log(' here');
          res.redirect('/users/products')
          res.end();
        }
      } else {
        res.render('pages/login', { message: 'Incorrect username or password' })
      }
    })
  } else {
    // if the user is null
    res.render('pages/login', { message: 'Incorrect username or password' })
  }
});

router.post('/add-comment', async (req, res) => {
  let productId = parseInt(req.body.productId);
  let title = req.body.title;
  let description = req.body.description;

  let comment = await models.Comment.build({
    title: title,
    description: description,
    productId: productId
  });
  let savedComment = await comment.save();
  if (savedComment) {
    res.redirect(`/products/${productId}`);
  } else {
    res.render('pages/product-details', { message: 'Error adding comment!' })
  }
});

router.get('/comments/:commentId', async (req, res) => {
  let commentId = req.params.commentId;
  let comment = await models.Comment.findOne({
    include: [{
      model: models.Product,
      as : 'product'
    }],
    where: {
      id: commentId
    }
  })

  console.log(comment);
  res.json(comment)
}) 
module.exports = router;
