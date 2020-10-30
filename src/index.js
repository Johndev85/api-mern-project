import app from "./app"
import db from "./database"

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log("server started on PORT", PORT)
})
