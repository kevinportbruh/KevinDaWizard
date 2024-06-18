import { run } from './run.js';
import * as prog from 'public/javascripts/slime_dish.js'
run(prog, { element : document.querySelector('pre') }).then(function(e){
  console.log(e)
  console.log("we did not throw an error")
}).catch(function(e) {
  console.warn(e.message)
  console.log(e.error)
})