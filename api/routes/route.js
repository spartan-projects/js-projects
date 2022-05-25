import user from '../bussiness/user.js';
import express from 'express';

let router = express.Router();

let user1 = new user.User("dbruera", "dbruera@fake.com", "12345");

user1.setEmail("dbruera@javascript.com");

router.get('/hello/:name', (req, res) => {
    let message = `Hello ${req.params.name} from api server!!!`

    let jsonResponse = {
        api_rest: {
            message: message,
            user_data: user1.toString()
        }
    }

    res.status(202).send(jsonResponse);
})

router.post('/hello/', (req, res) => {
    console.log(req.body);
    res.status(200).send(req.body);
})

export default router;