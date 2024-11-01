const dotenv = require('dotenv')
dotenv.config()

const app = require('./app')

// Starting the server
const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})