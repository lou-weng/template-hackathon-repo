import {Router} from 'express';

const router = Router();

router.get("/", (req, res) => {
    res.send("Marcus, Louie, Shannon, Sue");
});

export default router;