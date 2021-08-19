const express = require('express')
const router = express.Router()
const models = require('../models')
const formidable = require('formidable');
const { v1: uuidv1 } = require('uuid');

let uniqueFilename = '';

function uploadFile(req, callback) {
  new formidable.IncomingForm()
    .parse(req)
    .on('fileBegin', (name, file) => {
      uniqueFilename = `${uuidv1()}.${file.name.split('.').pop()}`
      file.name = uniqueFilename
      file.path = __basedir + '/uploads/' + file.name
    })
    .on('file', (name, file) => {
      callback(file.name)
    })
}


router.get('/add-product',  (req, res) => {
 res.render('pages/add-product');
});

router.get('/products', async (req, res) => {
  let products = await models.Product.findAll({
    where: {
      userId: req.session.user.userId
    }
  });
  res.render('pages/products', { products: products })
});

router.get('/products/:productId', async (req, res) => {
  let productId = req.params.productId
  let product = await models.Product.findByPk(productId)
  res.render('pages/edit', product.dataValues);
});

router.post('/delete-product', async (req, res) => {
  let productId = parseInt(req.body.productId);
  let result = await models.Product.destroy({
    where: {
      id: productId,
    }
  })
  res.redirect('/users/products');
})

router.post('/add-product', async (req, res) => {
  let title = req.body.title
  let description = req.body.description
  let price = parseFloat(req.body.price)
  let userId = req.session.user.userId
  //console.log(userId)

  let product = models.Product.build({
    title: title,
    description: description,
    price: price,
    userId: userId,
    imageURL: uniqueFilename
  });
  let persistedProduct = await product.save()
  if (persistedProduct != null) {
    res.redirect('/users/products')
  } else {
    res.render('pages/add-product', { message: 'Unable to add product' })
  }
});

router.post('/upload', (req, res) => {
  uploadFile(req, (photoURL) => {
  
    photoURL = `/uploads/${photoURL}`;
    res.render('pages/add-product', { imageURL: photoURL, className: 'product-preview-image' });
  })
});

router.post('/upload/edit/:productId', (req, res) => {
  uploadFile(req, async (photoURL) => {
    let productId = parseInt(req.params.productId);
    let product = await models.Product.findByPk(productId);
    let response = product.dataValues;
    response.imageURL = photoURL;
    res.render('pages/edit', response);
  })
});

router.post('/update-product', async (req, res) => {
  let title = req.body.title;
  let description = req.body.description;
  let price = parseFloat(req.body.price);
  let productId = req.body.productId;
 
  const result =  await models.Product.update({
    title: title,
    description: description,
    price: price,
    imageURL: uniqueFilename
  }, {
    where: {
      id: productId
    }
  })
  res.redirect('/users/products')
});

module.exports = router;