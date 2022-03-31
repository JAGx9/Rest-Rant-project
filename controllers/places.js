const router = require('express').Router();


//Get /Places
router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/Thai-dish.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/Cat-cafe-mug.jpg'
      }]
    res.render('places', {places})
});

router.get('/new', (req, res)=> {
  res.render('places/new');
});

router.get('/id', (req, res) => {
  let myId = req.params.id;
  res.send(`Details for ${myId}`)
});

router.get('/:id/edit', (req, res)=> {
  let myId = req.params.id;
  res.send(`Edit page for ${myId}`)
});


module.exports = router;
