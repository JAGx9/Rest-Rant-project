const router = require('express').Router();
const res = require('express/lib/response');
const places = require ('../models/places.js')


router.get('/', (req, res) => {
  res.render('places/index', {places})
})

router.get('/new', (req, res)=> {
  res.render('places/new');
});

router.post('/', (req, res) => {
  console.log(req.body)
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})

router.get('/id', (req, res) => {
  let myId = req.params.id;
  res.send(`Details for ${myId}`)
});

router.get('/:id/edit', (req, res)=> {
  let myId = req.params.id;
  res.send(`Edit page for ${myId}`)
});


module.exports = router;
