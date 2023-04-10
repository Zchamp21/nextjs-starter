
/*
* Auto generated Codehooks (c) example
* Install: npm i codehooks-js codehooks-crudlify
*/
import {Datastore, app} from 'codehooks-js'
import {crudlify} from 'codehooks-crudlify'
import { date, object, string } from 'yup';

const flashCardYup = object({
    front: string().required(),
    back: string().required(),
    category: string(),
    createdOn: date().default(() => new Date()),
})

async function getFront(req, res) {
  const conn = await Datastore.open();
  console.log(req.query.front);
  const query = {"front": req.query.front};
  const options = {
    filter: query
  }
  conn.getMany('flashCard', options).json(res);
}

app.get('/front', getFront);

app.get('/test', (req, res) => {
  res.json({result: 'you did it!'});
});

// test route for https://<PROJECTID>.api.codehooks.io/dev/
app.get('/', (req, res) => {
  res.send('CRUD server ready')
})

// Use Crudlify to create a REST API for any collection
// crudlify(app)

crudlify(app, {flashCard: flashCardYup})

// bind to serverless runtime
export default app.init();
