const express = require('express');
const db = require('./config/db_connection')

const PORT = 3001;
const app = express();
app.use(express.json());

app.use('/api',require('./routes/routes'))

app.get('/', (req, res) => {
    res.send('OK')
})


db.connect(() => app.listen(PORT,() => console.log(`Server is running on port ${PORT}`)))