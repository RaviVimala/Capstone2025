import express from "express";
import cors from "cors";
import dotenv from "dotenv";
// import hotelRoutes from "./routes/hotelRoute.js";
// import authorityRoutes from "./routes/AuthorityRoutes.js"
import { connectDB } from "./Config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config';
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";


//App Config
dotenv.config();
const app = express();
//Middlewares
app.use(express.json());
app.use(cors());

//DB Connection
connectDB();
// mongoose.connect("mongodb://localhost:27017/foodorder")
// .then(() => console.log("Mongo DB Connected Success"))
// .catch(err => console.log(err));


//API Endpoints
app.use("/api/food", foodRouter);
app.use("/images",express.static('uploads')); 
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order",orderRouter);
// app.use("/api/hotels", hotelRoutes);
// app.use("/api/authority", authorityRoutes);

app.get('/', (req, res) => {
    res.send("Now API is Working...!");
});

const PORT = 8080 || 5000;
app.listen(PORT, () => {
    console.log(`Server is Running on http://localhost:${PORT}`);
});

//mongodb+srv://fullstackb21:Ravi12345@cluster0.dfpby4s.mongodb.net/?appName=Cluster0