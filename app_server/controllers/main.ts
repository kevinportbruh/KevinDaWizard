import { Request, Response, NextFunction } from 'express';


export default class MainController {
  index = (req: Request, res: Response, next: NextFunction) => {
    res.render('index', {title: 'Kevin Da Wizard'});
  }
  
  aboutPage = (req: Request, res: Response, next: NextFunction) => {
    res.render('about', { title: 'About' });
  }

  
  bruh = (req: Request, res: Response, next: NextFunction) => {
    res.render('bruh', { title: 'bruh' });
  }
  

}




