import express from 'express';

// even though express is a function ( remember use: express())
// we can invoke Router on express() as functions in javascripts are just objects
// and we can attach other properties on that object
const router = express.Router();

// router objec t is similar to server object. We can define .get calls on it
// and handle them on the second argument (res here)
router.get('/', (req, res) => {
    // this is an api call so a json response is expected
    res.send({ data: [] });
});

// to be able to use this router we need to export it
// to be imported in server.js
export default router;