const express = require('express')
const cors = require ('cors')


const app = express()
const routes = require('./routes/api');
const PORT = process.env.PORT || 8080;


app.use(cors())
app.get("/api", (req, res) => {
   res.json({ "users":
  ["user1",
   "user2"] })
})

if (process.env.NODE_ENV === 'production'){
   app.use(express.static('client/build'))
}

app.listen(PORT, ()=>{ console.log(`Server started on${PORT}`) })