# Notebook
Created with MERN Stack
## Dependencies
- Express.js
- bcrypt
- express-validator
- jsonwebtoken
- MongoDB
- mongoose
- Node.js
- React.js
- react-router-dom
- font-awesome
  
## Installation
1. Clone the repo
```sh
git clone git@github.com:animeshmaiti/Notebook.git
```
2. Install NPM packages
```sh
npm install
```
## Some concepts/theory/templates
helping easy understanding of the code
### Starting with backend
- [x] [Express.js](https://expressjs.com/)
```js
const express = require('express');
const app = express();
app.use(express.json());

app.use('path',require('path/to/file'))

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
```
- [x] [mongoose](https://mongoosejs.com/docs/guide.html)
```js
const mongoose = require('mongoose');
// mongooseUri is the uri of the mongodb database in this case it is a local database named inotebook
const mongooseUri = 'mongodb://localhost:27017/inotebook';
const connectToMongo = async () => {
    await mongoose.connect(mongooseUri);
    console.log('Connected to Mongo');
}

module.exports = connectToMongo;
// import this function index.js and call it
```
- [x] [mongoose schema](https://mongoosejs.com/docs/guide.html)
```js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const schemaNAme = new Schema({
    object name: {
        type: data type,
        required: mandatory or not,
    },
});
const Note = mongoose.model('model name', schemaName);

module.exports = Note;
// you can use this in routes by importing it
```
- [x] [express router](https://expressjs.com/en/guide/routing.html)
```js
// with express validator
const express = require('express');
const router = express.Router();
router.post('/path', [
    body('object name', 'error massage'),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({success, errors: errors.array() });
    }
    try {
        res.send('GET request to the path')
    } catch (error) {
        console.error(error.message);
        res.status(500).send("internal server error");
    }
})
module.exports = router;
```
- [x] [bcrypt](https://www.npmjs.com/package/bcrypt)
```js
const bcrypt = require('bcrypt');
const myPlaintextPassword = 's0/\/\P4$$w0rD';
async function userFunction(username, password) {
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(myPlaintextPassword, salt);
    const compPass = await bcrypt.compare(myPlaintextPassword, secPass);
    if (!compPass) {
        success = false;
        return res.status(400).json({errors: "pls login with correct credentials" });
    }
}
```
- [x] [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
```js
const jwt = require('jsonwebtoken');
const JWT_SECRET = '#3l0#0@r3y0u'
const payload = {
  user_id: 123,
  exp: expirationTime,
};
const token = jwt.sign(payload, JWT_SECRET);
const decoded = jwt.verify(token, JWT_SECRET);
decoded.user_id === payload.user_id // true
```
- [x] [express cors](https://www.npmjs.com/package/cors)
```js
// in main app index.js
var cors = require('cors');
app.use(cors());
```

### Starting with frontend
- [x] [useContext](https://reactjs.org/docs/hooks-reference.html#usecontext)
```js
import { createContext } from 'react';

const noteContext = createContext();

export default noteContext;
```
```js
import NoteContext from "./noteContext";

function funcName(props) {
    const functionName1 = () => {
        console.log("this is function 1");
    }
    const functionName2 = () => {
        console.log("this is function 2");
    }
    return (
        <NoteContext.Provider
        value={{functionName1: functionName1,functionName2: functionName2 }}
        >
        {props.children}
        </NoteContext.Provider>
    )
}
```
```js
// in the component where you want to use the context
import NoteContext from "../context/noteContext";
import { useContext } from "react";
const context = useContext(NoteContext);
context.functionName1();
context.functionName2();
```
- [x] [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
```js
// Example POST method implementation:
async function functionName1(url="",arg1,arg2) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({arg1,arg2}), // body data type must match "Content-Type" header
  });
  return response.json();
}
```

### this is pretty much it