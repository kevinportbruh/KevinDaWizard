import express from 'express';
import MainCtrl from '../controllers/main';

const router = express.Router();
const ctrlMain = new MainCtrl();


/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/bruh', ctrlMain.bruh);

export default router;