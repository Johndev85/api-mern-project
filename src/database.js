import mongoose from "mongoose"
import config from "./config"
;(async () => {
    try {
        const mongooseOptions = {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        }
        const db = await mongoose.connect(
            `mongodb+srv://${config.MONGO_USER}:${config.MONGO_PASSWORD}${config.MONGO_HOST}`,
            mongooseOptions
        )
        console.log("database is connected to:", db.connection.name)
    } catch (error) {
        console.log(error)
    }
})()
