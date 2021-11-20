import logo from './logo.svg';
import './App.css';



const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://cortom-add-account:456Pass1234@cluster0.emmrp.mongodb.net/Accounts?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  const doc = {
    Name : "Atharva",
    Mobile_no: "7020084093"
  }
  db.collection("devices").insertOne(doc);
  client.close();
});


function App() {
  return (
    <div>
      <h1>1 collection created</h1>
      </div>
  );
}

export default App;
