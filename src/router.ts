import { Router } from 'express';

const router = Router();

router.get('/health-check', (req, res) => {
    res.send('I am OK');
});

export default router;
