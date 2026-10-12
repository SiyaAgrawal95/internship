
// import express from "express";
// import cors from "cors";
// import { MongoClient, ObjectId } from "mongodb";

// const app = express();

// app.use(cors());
// app.use(express.json());

// const client = new MongoClient("mongodb://127.0.0.1:27017");

// let appointments;

// async function startServer() {
//   try {
//     await client.connect();

//     const db = client.db("hospitalDB");
//     appointments = db.collection("appointments");

//     console.log("MongoDB connected");

//     app.listen(5001, () => {
//       console.log("Server running on 5001");
//     });
//   } catch (err) {
//     console.log("Connection error:", err);
//   }
// }

// startServer();

// // GET - Fetch all appointments
// app.get("/appointments", async (req, res) => {
//   try {
//     const data = await appointments.find().toArray();
//     res.json(data);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // POST - Add appointment
// app.post("/appointments", async (req, res) => {
//   try {
//     const { patientName, doctorName, specialization, date, time } = req.body;

//     if (!patientName || !doctorName || !specialization || !date || !time) {
//       return res.status(400).json({ message: "All fields required" });
//     }

//     const appointment = {
//       patientName,
//       doctorName,
//       specialization,
//       date,
//       time
//     };

//     const result = await appointments.insertOne(appointment);

//     res.json({
//       _id: result.insertedId,
//       ...appointment
//     });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // PUT - Update appointment
// app.put("/appointments/:id", async (req, res) => {
//   try {
//     if (!ObjectId.isValid(req.params.id)) {
//       return res.status(400).json({ message: "Invalid ID" });
//     }

//     const { patientName, doctorName, specialization, date, time } = req.body;

//     if (!patientName || !doctorName || !specialization || !date || !time) {
//       return res.status(400).json({ message: "All fields required" });
//     }

//     const result = await appointments.updateOne(
//       { _id: new ObjectId(req.params.id) },
//       {
//         $set: {
//           patientName,
//           doctorName,
//           specialization,
//           date,
//           time
//         }
//       }
//     );

//     if (result.matchedCount === 0) {
//       return res.status(404).json({ message: "Appointment not found" });
//     }

//     const updated = await appointments.findOne({
//       _id: new ObjectId(req.params.id)
//     });

//     res.json(updated);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // DELETE - Cancel appointment
// app.delete("/appointments/:id", async (req, res) => {
//   try {
//     if (!ObjectId.isValid(req.params.id)) {
//       return res.status(400).json({ message: "Invalid ID" });
//     }

//     const result = await appointments.deleteOne({
//       _id: new ObjectId(req.params.id)
//     });

//     if (result.deletedCount === 0) {
//       return res.status(404).json({ message: "Appointment not found" });
//     }

//     res.json({ message: "Appointment cancelled" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// import express from "express";
// import cors from "cors";
// import { MongoClient, ObjectId } from "mongodb";


// const app = express();


// app.use(cors());
// app.use(express.json());


// const client = new MongoClient("mongodb://127.0.0.1:27017");


// let books;
// let orders


// async function startServer() {
//  try {
//    await client.connect();


//    const db = client.db("bookDB");
//    books = db.collection("books");
//    orders = db.collection("orders");


//    console.log("MongoDB connected");


//    app.listen(5001, () => {
//      console.log("Server running on 5001");
//    });
//  } catch (err) {
//    console.log("Connection error:", err);
//  }
// }


// startServer();


// // GET - Fetch all books
// app.get("/books", async (req, res) => {
//  try {
//    const data = await books.find().toArray();
//    res.json(data);
//  } catch (err) {
//    res.status(500).json({ message: err.message });
//  }
// });


// // POST - Add a book
// app.post("/books", async (req, res) => {
//  try {
//    const { title, author, category, price } = req.body;


//    if (!title || !author || !category || price === undefined || price === "") {
//      return res.status(400).json({ message: "All fields required" });
//    }


//    if (Number(price) < 0 || !Number.isFinite(Number(price))) {
//      return res.status(400).json({ message: "Invalid price" });
//    }


//    const book = {
//      title,
//      author,
//      category,
//      price: Number(price)
//    };


//    const result = await books.insertOne(book);


//    res.json({
//      _id: result.insertedId,
//      ...book
//    });
//  } catch (err) {
//    res.status(500).json({ message: err.message });
//  }
// });


// // PUT - Update a book
// app.put("/books/:id", async (req, res) => {
//  try {
//    if (!ObjectId.isValid(req.params.id)) {
//      return res.status(400).json({ message: "Invalid ID" });
//    }


//    const { title, author, category, price } = req.body;


//    if (!title || !author || !category || price === undefined || price === "") {
//      return res.status(400).json({ message: "All fields required" });
//    }


//    if (Number(price) < 0 || !Number.isFinite(Number(price))) {
//      return res.status(400).json({ message: "Invalid price" });
//    }


//    const result = await books.updateOne(
//      { _id: new ObjectId(req.params.id) },
//      {
//        $set: {
//          title,
//          author,
//          category,
//          price: Number(price)
//        }
//      }
//    );


//    if (result.matchedCount === 0) {
//      return res.status(404).json({ message: "Book not found" });
//    }


//    const updated = await books.findOne({
//      _id: new ObjectId(req.params.id)
//    });


//    res.json(updated);
//  } catch (err) {
//    res.status(500).json({ message: err.message });
//  }
// });


// // DELETE - Delete a book
// app.delete("/books/:id", async (req, res) => {
//  try {
//    if (!ObjectId.isValid(req.params.id)) {
//      return res.status(400).json({ message: "Invalid ID" });
//    }


//    const result = await books.deleteOne({
//      _id: new ObjectId(req.params.id)
//    });


//    if (result.deletedCount === 0) {
//      return res.status(404).json({ message: "Book not found" });
//    }


//    res.json({ message: "Book deleted successfully" });
//  } catch (err) {
//    res.status(500).json({ message: err.message });
//  }
// });


// // PLACE ORDER
// app.post("/orders", async (req, res) => {
//  try {
//    const { items, total } = req.body;


//    if (!items || items.length === 0) {
//      return res.status(400).json({ message: "Cart is empty" });
//    }


//    const order = {
//      items: items,
//      total: Number(total),
//      date: new Date()
//    };


//    const result = await orders.insertOne(order);


//    res.json({
//      message: "Order placed successfully",
//      orderId: result.insertedId
//    });
//  } catch (err) {
//    res.status(500).json({ message: err.message });
//  }
// });


// app.get("/orders", async (req, res) => {
//  try {
//    const data = await orders.find().toArray();
//    res.json(data);
//  } catch (err) {
//    res.status(500).json({ message: err.message });
//  }
// });

import express from "express";
import cors from "cors";
import {MongoClient,ObjectId} from "mongodb";


const app = express();


app.use(cors());
app.use(express.json());


const client = new MongoClient("mongodb://127.0.0.1:27017");


let students;


async function startServer(){
   try{
       await client.connect();


       const db = client.db("studentDB");
       students = db.collection("students");


       console.log("MongoDB connected");


       app.listen(5001, () => {
           console.log("server running on 5001");
       });
   }catch(err){
       console.log("connection error :" ,err);
   }
}


startServer();


//GET


app.get("/students" ,async(req,res) => {
   try{
       const data = await students.find().toArray();
       res.send(data);
   }
   catch(err){
       res.status(500).json({message : err.message});
   }
});


//POST


app.post("/students" ,async(req,res) => {
   try{
       const {name, rollNo, department, marks} = req.body;


       if(!name || !rollNo || !department || marks === "");{
       return res.status(400).json({message : "all fiels required"});
       }


       if(marks<0 || marks>100){
        return res.status(400).json({message : "marks must be valid"});
       }


       const student = {
           name,
           rollNo,
           department,
           marks : Number(marks)
       };


       const result = await students.insertOne(student);


       res.status(200).json({
           _id: result.insertedId,
           ...student
       });
  
       }catch(err){
           res.status(500).json({message : err.message});
   }
});


//PUT


app.put("/students/:id", async(req,res) => {
   try{
       const{name,rollNo,department,marks} = req.body;


       if(!name || !rollNo || !department || marks === ""){
           return res.status(400).json({message : "required"});
       }


       if(marks<0 || marks>100){
           return res.status(400).json({message : "valid"});
       }


       const result = await students.updateOne({
           _id: new ObjectId(req.params.id)},
           {
               $set : {
                   name,
                   rollNo,
                   department,
                   marks : Number(marks)
               }
           }
       );


       if(result.matchedCount === 0){
          return res.status(400).json({
           message : "not found"
          });
       }


       const updated = await students.findOne({
           _id: new ObjectId(req.params.id)
       });


       res.json(updated);
   }
   catch(err){
       res.status(500).json({message : err.message});
   }
});


//DELETE
app.delete("/students/:id" , async(req,res) => {
   try{
       if(!ObjectId.isValid(req.params.id)){
           return res.status(400),json({message: "invalid"});
       }
       const result  = await students.deleteOne({
           _id: new ObjectId(req.params.id)
       });


       if(result.deletedCount === 0){
           return res.status(400).json({message : "not found"});
       }


       res.json("deleted");
   }
   catch(err){
       res.status(400).json({message : err.message});
   }
});


app.get("/report", async (req, res) => {
 try {
   const data = await students.find().toArray();


   const total = data.length;


   const average = total
     ? data.reduce((sum, s) => sum + s.marks, 0) / total
     : 0;


   const toppers = data.filter(s => s.marks >= 75).length;
   const passed = data.filter(s => s.marks >= 40).length;


   res.json({
     totalStudents: total,
     averageMarks: Number(average.toFixed(2)),
     toppers,
     passed,
     failed: total - passed
   });
 } catch (err) {
   res.status(500).json({ message: err.message });
 }
});


// import express from "express";
// import cors from "cors";
// import { MongoClient, ObjectId } from "mongodb";

// const app = express();

// app.use(cors());
// app.use(express.json());

// const client = new MongoClient("mongodb://127.0.0.1:27017");

// await client.connect();

// const db = client.db("feedbackDB");
// const feedback = db.collection("feedback");

// console.log("MongoDB connected");

// // GET: View all feedback
// app.get("/feedback", async (req, res) => {
//   const data = await feedback.find().toArray();
//   res.json(data);
// });

// // POST: Submit feedback
// app.post("/feedback", async (req, res) => {
//   const { name, service, rating, comment } = req.body;

//   if (!name || !service || !rating || !comment) {
//     return res.status(400).json({
//       message: "Please fill all fields"
//     });
//   }

//   const result = await feedback.insertOne({
//     name,
//     service,
//     rating: Number(rating),
//     comment
//   });

//   res.json({
//     message: "Feedback submitted successfully",
//     _id: result.insertedId
//   });
// });

// // DELETE: Delete feedback
// app.delete("/feedback/:id", async (req, res) => {
//   if (!ObjectId.isValid(req.params.id)) {
//     return res.status(400).json({ message: "Invalid ID" });
//   }

//   const result = await feedback.deleteOne({
//     _id: new ObjectId(req.params.id)
//   });

//   res.json({ message: "Feedback deleted successfully" });
// });

// app.listen(5002, () => {
//   console.log("Server running on port 5002");
// });

