const { MongoClient, ObjectId } = require("mongodb");

// your client mongodb uri
const uri = "mongodb://127.0.0.1:27017";
const dbName = "mongo-crud";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((err, client) => {
  if (err) return console.log("Unconnected");
  console.log("connected");

  // choose database
  const db = client.db(dbName);

  // insert one data to collection contacts
  //   db.collection("contacts").insertOne(
  //     {
  //       name: "Dudung",
  //       email: "dudung@app.com",
  //     },
  //     (err, res) => {
  //       if (err) return console.log("Failed ", err.stack);
  //       console.log(res);
  //     }
  //   );

  // Insert multiple data to collections contacts
  //   db.collection("contacts").insertMany(
  //     [
  //       {
  //         name: "Dedeng",
  //         email: "dedeng@app.com",
  //       },
  //       {
  //         name: "Dodong",
  //         email: "dodong@app.com",
  //       },
  //     ],
  //     (err, res) => {
  //       if (err) return console.log("Failed ", err.stack);
  //       console.log(res);
  //     }
  //   );

  // Displaying all data in collections contacts
  //   const contacts = db.collection("contacts").find();
  //   console.log(
  //     contacts.toArray((err, res) => {
  //       console.log(res);
  //     })
  //   );

  // Displays data based on existing criteria in the contact collection
  //   const contacts = db
  //     .collection("contacts")
  //     .find({ _id: ObjectId("622cd8f581dbfe9aa7e022ca") });
  //   console.log(
  //     contacts.toArray((err, res) => {
  //       console.log(res);
  //     })
  //   );

  // Change 1 data
  //   const updatePromise = db.collection("contacts").updateOne(
  //     {
  //       _id: ObjectId("622cd8f581dbfe9aa7e022ca"),
  //     },
  //     {
  //       $set: {
  //         name: "Dadang update",
  //       },
  //     }
  //   );

  //   updatePromise
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));

  // Change data more than 1 based on criteria
  //   const updatePromise = db.collection("contacts").updateMany(
  //     {
  //       _id: ObjectId("622cd8f581dbfe9aa7e022ca"),
  //     },
  //     {
  //       $set: {
  //         name: "Dadang update many",
  //       },
  //     }
  //   );

  //   updatePromise
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));

  // Deleting 1 data
  //   db.collection("contacts")
  //     .deleteOne({
  //       _id: ObjectId("622cd8f581dbfe9aa7e022ca"),
  //     })
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));

  // Deleting data more than 1
  //   db.collection("contacts")
  //     .deleteOne({
  //       name: "Diding",
  //     })
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
});
