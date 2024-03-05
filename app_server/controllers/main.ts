import { Request, Response, NextFunction } from 'express';


export default class MainController {
  index = (req: Request, res: Response, next: NextFunction) => {
    res.render('index', { title: 'yo this is the kev dev site' });
  }

  bruh = (req: Request, res: Response, next: NextFunction) => {
    res.render('bruh', { title: 'bruh' });
  }


}




