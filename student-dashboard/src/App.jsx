
// import { useState, useEffect } from "react";

// const API = "http://localhost:5001/appointments";

// function App() {
//   const [appointments, setAppointments] = useState([]);

//   const [form, setForm] = useState({
//     patientName: "",
//     doctorName: "",
//     specialization: "",
//     date: "",
//     time: ""
//   });

//   const [editId, setEditId] = useState(null);

//   // Fetch appointments
//   const getAppointments = async () => {
//     const res = await fetch(API);
//     const data = await res.json();
//     setAppointments(data);
//   };

//   useEffect(() => {
//     getAppointments();
//   }, []);

//   // Handle input
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // Add or update appointment
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     await fetch(
//       editId ? `${API}/${editId}` : API,
//       {
//         method: editId ? "PUT" : "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form)
//       }
//     );

//     setForm({
//       patientName: "",
//       doctorName: "",
//       specialization: "",
//       date: "",
//       time: ""
//     });

//     setEditId(null);
//     getAppointments();
//   };

//   // Edit appointment
//   const editAppointment = (a) => {
//     setForm({
//       patientName: a.patientName,
//       doctorName: a.doctorName,
//       specialization: a.specialization,
//       date: a.date,
//       time: a.time
//     });

//     setEditId(a._id);
//   };

//   // Delete appointment
//   const deleteAppointment = async (id) => {
//     await fetch(`${API}/${id}`, {
//       method: "DELETE"
//     });

//     getAppointments();
//   };

//   return (
//     <div>
//       <h1>Doctor Appointment System</h1>

//       <h3>Total Appointments: {appointments.length}</h3>

//       <h2>{editId ? "Edit Appointment" : "Book Appointment"}</h2>

//       <form onSubmit={handleSubmit}>
//         <input
//           name="patientName"
//           placeholder="Patient Name"
//           value={form.patientName}
//           onChange={handleChange}
//           required
//         />

//         <input
//           name="doctorName"
//           placeholder="Doctor Name"
//           value={form.doctorName}
//           onChange={handleChange}
//           required
//         />

//         <input
//           name="specialization"
//           placeholder="Specialization"
//           value={form.specialization}
//           onChange={handleChange}
//           required
//         />

//         <input
//           name="date"
//           type="date"
//           value={form.date}
//           onChange={handleChange}
//           required
//         />

//         <input
//           name="time"
//           type="time"
//           value={form.time}
//           onChange={handleChange}
//           required
//         />

//         <button type="submit">
//           {editId ? "Update Appointment" : "Book Appointment"}
//         </button>

//         {editId && (
//           <button
//             type="button"
//             onClick={() => {
//               setForm({
//                 patientName: "",
//                 doctorName: "",
//                 specialization: "",
//                 date: "",
//                 time: ""
//               });
//               setEditId(null);
//             }}
//           >
//             Cancel
//           </button>
//         )}
//       </form>

//       <h2>Appointment Records</h2>

//       <table border="1" cellPadding="8">
//         <thead>
//           <tr>
//             <th>Patient</th>
//             <th>Doctor</th>
//             <th>Specialization</th>
//             <th>Date</th>
//             <th>Time</th>
//             <th>Actions</th>
//           </tr>
//         </thead>

//         <tbody>
//           {appointments.map((a) => (
//             <tr key={a._id}>
//               <td>{a.patientName}</td>
//               <td>{a.doctorName}</td>
//               <td>{a.specialization}</td>
//               <td>{a.date}</td>
//               <td>{a.time}</td>
//               <td>
//                 <button onClick={() => editAppointment(a)}>
//                   Edit
//                 </button>

//                 <button onClick={() => deleteAppointment(a._id)}>
//                   Cancel Appointment
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default App;

// import { useState, useEffect } from "react";
// import { Routes, Route, Link } from "react-router-dom";


// function App() {
//  const [books, setBooks] = useState([]);
//  const [title, setTitle] = useState("");
//  const [author, setAuthor] = useState("");
//  const [category, setCategory] = useState("");
//  const [price, setPrice] = useState("");
//  const [editId, setEditId] = useState(null);


//  const [search, setSearch] = useState("");
//  const [cart, setCart] = useState([]);
//  const [orders, setOrders] = useState([]);


//  const API = "http://localhost:5001/books";


//  // READ BOOKS
//  const getBooks = async () => {
//    const res = await fetch(API);
//    const data = await res.json();
//    setBooks(data);
//  };


//  // READ ORDERS
//  const getOrders = async () => {
//    const res = await fetch("http://localhost:5001/orders");
//    const data = await res.json();
//    setOrders(data);
//  };


//  useEffect(() => {
//    getBooks();
//  }, []);


//  // ADD OR UPDATE BOOK
//  const handleSubmit = async (e) => {
//    e.preventDefault();


//    const book = {
//      title: title,
//      author: author,
//      category: category,
//      price: Number(price)
//    };


//    if (editId) {
//      await fetch(API + "/" + editId, {
//        method: "PUT",
//        headers: { "Content-Type": "application/json" },
//        body: JSON.stringify(book)
//      });
//    } else {
//      await fetch(API, {
//        method: "POST",
//        headers: { "Content-Type": "application/json" },
//        body: JSON.stringify(book)
//      });
//    }


//    setTitle("");
//    setAuthor("");
//    setCategory("");
//    setPrice("");
//    setEditId(null);


//    getBooks();
//  };


//  // EDIT BOOK
//  const editBook = (book) => {
//    setTitle(book.title);
//    setAuthor(book.author);
//    setCategory(book.category);
//    setPrice(book.price);
//    setEditId(book._id);
//  };


//  // DELETE BOOK
//  const deleteBook = async (id) => {
//    await fetch(API + "/" + id, {
//      method: "DELETE"
//    });


//    getBooks();
//  };


//  // SEARCH BOOKS
//  const filteredBooks = books.filter((book) =>
//    book.title.toLowerCase().includes(search.toLowerCase())
//  );


//  // ADD TO CART
//  const addToCart = (book) => {
//    setCart([...cart, book]);
//    alert("Book added to cart!");
//  };


//  // REMOVE FROM CART
//  const removeFromCart = (index) => {
//    setCart(cart.filter((book, i) => i !== index));
//  };


//  // CART TOTAL
//  const total = cart.reduce(
//    (sum, book) => sum + Number(book.price),
//    0
//  );


//  // PLACE ORDER
//  const placeOrder = async () => {
//    if (cart.length === 0) {
//      alert("Cart is empty");
//      return;
//    }


//    try {
//      const res = await fetch("http://localhost:5001/orders", {
//        method: "POST",
//        headers: { "Content-Type": "application/json" },
//        body: JSON.stringify({
//          items: cart,
//          total: total
//        })
//      });


//      const data = await res.json();


//      if (res.ok) {
//        alert("Order placed successfully!");
//        setCart([]);
//        getOrders();
//      } else {
//        alert(data.message || "Order failed");
//      }
//    } catch (error) {
//      alert("Could not connect to server");
//    }
//  };


//  return (
//    <div>
//      <h1>Book Store</h1>


//      <nav>
//        <Link to="/">Books</Link>{" | "}
//        <Link to="/cart">Cart ({cart.length})</Link>{" | "}
//        <Link to="/orders">Orders</Link>
//      </nav>


//      <Routes>
//        {/* BOOKS PAGE */}
//        <Route
//          path="/"
//          element={
//            <div>
//              <h2>{editId ? "Edit Book" : "Add Book"}</h2>


//              <form onSubmit={handleSubmit}>
//                <input
//                  placeholder="Title"
//                  value={title}
//                  onChange={(e) => setTitle(e.target.value)}
//                  required
//                />


//                <input
//                  placeholder="Author"
//                  value={author}
//                  onChange={(e) => setAuthor(e.target.value)}
//                  required
//                />


//                <input
//                  placeholder="Category"
//                  value={category}
//                  onChange={(e) => setCategory(e.target.value)}
//                  required
//                />


//                <input
//                  type="number"
//                  placeholder="Price"
//                  min="0"
//                  value={price}
//                  onChange={(e) => setPrice(e.target.value)}
//                  required
//                />


//                <button type="submit">
//                  {editId ? "Update Book" : "Add Book"}
//                </button>


//                {editId && (
//                  <button
//                    type="button"
//                    onClick={() => {
//                      setTitle("");
//                      setAuthor("");
//                      setCategory("");
//                      setPrice("");
//                      setEditId(null);
//                    }}
//                  >
//                    Cancel
//                  </button>
//                )}
//              </form>


//              <h2>Available Books</h2>
//              <h3>Total Books: {books.length}</h3>


//              <input
//                placeholder="Search books by title..."
//                value={search}
//                onChange={(e) => setSearch(e.target.value)}
//              />


//              <table border="1" cellPadding="8">
//                <thead>
//                  <tr>
//                    <th>Title</th>
//                    <th>Author</th>
//                    <th>Category</th>
//                    <th>Price</th>
//                    <th>Actions</th>
//                  </tr>
//                </thead>


//                <tbody>
//                  {filteredBooks.map((book) => (
//                    <tr key={book._id}>
//                      <td>{book.title}</td>
//                      <td>{book.author}</td>
//                      <td>{book.category}</td>
//                      <td>₹{book.price}</td>
//                      <td>
//                        <button onClick={() => editBook(book)}>
//                          Edit
//                        </button>


//                        <button onClick={() => deleteBook(book._id)}>
//                          Delete
//                        </button>


//                        <button onClick={() => addToCart(book)}>
//                          Add to Cart
//                        </button>
//                      </td>
//                    </tr>
//                  ))}
//                </tbody>
//              </table>
//            </div>
//          }
//        />


//        {/* CART PAGE */}
//        <Route
//          path="/cart"
//          element={
//            <div>
//              <h2>My Cart</h2>
//              <h3>Total Items: {cart.length}</h3>


//              {cart.map((book, index) => (
//                <p key={index}>
//                  {book.title} - ₹{book.price}{" "}
//                  <button onClick={() => removeFromCart(index)}>
//                    Remove
//                  </button>
//                </p>
//              ))}


//              <h3>Total Price: ₹{total}</h3>


//              <button onClick={placeOrder}>
//                Place Order
//              </button>
//            </div>
//          }
//        />


//        {/* ORDERS PAGE */}
//        <Route
//          path="/orders"
//          element={
//            <div>
//              <h2>My Orders</h2>


//              <button onClick={getOrders}>
//                Refresh Orders
//              </button>


//              {orders.map((order) => (
//                <div key={order._id}>
//                  <h3>Order ID: {order._id}</h3>
//                  <p>Total: ₹{order.total}</p>


//                  {order.items.map((book, index) => (
//                    <p key={index}>{book.title}</p>
//                  ))}


//                  <hr />
//                </div>
//              ))}
//            </div>
//          }
//        />
//      </Routes>
//    </div>
//  );
// }


// export default App;

import { useState, useEffect } from "react";


const API = "http://localhost:5000";


function App() {
 const [students, setStudents] = useState([]);
 const [form, setForm] = useState({
   name: "",
   rollNo: "",
   department: "",
   marks: ""
 });
 const [editId, setEditId] = useState(null);


 // Fetch students
 const getStudents = async () => {
   const res = await fetch(`${API}/students`);
   const data = await res.json();
   setStudents(data);
 };


 useEffect(() => {
   getStudents();
 }, []);


 // Handle input
 const handleChange = (e) => {
   setForm({ ...form, [e.target.name]: e.target.value });
 };


 // Add or update student
 const handleSubmit = async (e) => {
   e.preventDefault();


   await fetch(
     editId
       ? `${API}/students/${editId}`
       : `${API}/students`,
     {
       method: editId ? "PUT" : "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify({
         ...form,
         marks: Number(form.marks)
       })
     }
   );


   setForm({
     name: "",
     rollNo: "",
     department: "",
     marks: ""
   });
   setEditId(null);
   getStudents();
 };


 // Edit student
 const editStudent = (s) => {
   setForm({
     name: s.name,
     rollNo: s.rollNo,
     department: s.department,
     marks: s.marks
   });
   setEditId(s._id);
 };


 // Delete student
 const deleteStudent = async (id) => {
   await fetch(`${API}/students/${id}`, {
     method: "DELETE"
   });
   getStudents();
 };


 // Performance report
 const average = students.length
   ? (
       students.reduce((sum, s) => sum + s.marks, 0) /
       students.length
     ).toFixed(2)
   : 0;


 return (
   <div>
     <h1>Student Performance Dashboard</h1>


     <h3>Total Students: {students.length}</h3>
     <h3>Average Marks: {average}</h3>


     <h2>{editId ? "Edit Student" : "Add Student"}</h2>


     <form onSubmit={handleSubmit}>
       <input
         name="name"
         placeholder="Name"
         value={form.name}
         onChange={handleChange}
         required
       />


       <input
         name="rollNo"
         placeholder="Roll Number"
         value={form.rollNo}
         onChange={handleChange}
         required
       />


       <input
         name="department"
         placeholder="Department"
         value={form.department}
         onChange={handleChange}
         required
       />


       <input
         name="marks"
         type="number"
         placeholder="Marks"
         min="0"
         max="100"
         value={form.marks}
         onChange={handleChange}
         required
       />


       <button type="submit">
         {editId ? "Update" : "Add Student"}
       </button>
     </form>


     <h2>Student Records</h2>


     <table border="1" cellPadding="8">
       <thead>
         <tr>
           <th>Name</th>
           <th>Roll No</th>
           <th>Department</th>
           <th>Marks</th>
           <th>Actions</th>
         </tr>
       </thead>


       <tbody>
         {students.map((s) => (
           <tr key={s._id}>
             <td>{s.name}</td>
             <td>{s.rollNo}</td>
             <td>{s.department}</td>
             <td>{s.marks}</td>
             <td>
               <button onClick={() => editStudent(s)}>
                 Edit
               </button>


               <button onClick={() => deleteStudent(s._id)}>
                 Delete
               </button>
             </td>
           </tr>
         ))}
       </tbody>
     </table>
   </div>
 );
}


export default App;
