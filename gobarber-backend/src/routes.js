import { Router } from 'express';

const routes = new Router();


routes.get('/', (req, res) => {
    return res.json({ mensagem: "Hello World." })
});

//module.exports = routes;
export default routes;