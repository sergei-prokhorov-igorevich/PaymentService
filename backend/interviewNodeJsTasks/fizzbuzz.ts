// question
/*
    You are requested to create an API for the beloved "FizzBuzz" game.
    The game is described as follows:
    Given a number x.
    - if the number is divisible by three return the word "Fizz"
    - if the number is divisible by five return the word "Buzz"
    - if the number is divisible by both return the word "FizzBuzz"
    - otherwise, return x.
    
    Url: FizzBuzz
    Method: GET
    Parameters: x
    
    Response: as described above.
    *All responses must be strings (not numbers or objects)
    For example:
    /FizzBuzz?x=2
    Response: 2
    /FizzBuzz?x=15
    Response: FizzBuzz
    /FizzBuzz?x=12
    Response: Fizz
    /FizzBuzz?x=10
    Response: Buzz
*/

// answer
import * as express from 'express';
const app = express();
const port = 80;
app.listen(port);

app.get('/FizzBuzz', (req: express.Request, res: express.Response) => {
  const param = Number(req.query['x']);
  const isDevideThree = param % 3 === 0;
  const isDevideFive = param % 5 === 0;
  let result: string;

  if (isDevideThree && isDevideFive) {
    result = 'FizzBuzz';
  } else if (isDevideThree) {
    result = 'Fizz';
  } else if (isDevideFive) {
    result = 'Buzz';
  } else {
    result = String(param);
  }

  res.send(result);
});
