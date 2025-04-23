import "dotenv/config"
import { connectDB } from "./src/config/connect.js"
import { PORT } from "./src/config/config.js";
import fastify from "fastify";

const start = async()=>{
    await connectDB(process.env.MONGO_URI);
    const app = fastify()
    app.listen({port:PORT, host:"0.0.0.0"}, (err, addr)=>{
        if(err){
            console.error("[ERROR] - app.js")
        }else{
            console.log(`Grocery App running on http://localhost:${PORT}`);
        }
    })
}

start()