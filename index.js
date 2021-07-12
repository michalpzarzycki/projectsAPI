const express = require('express');
const projectsRoutes = require('./routes/projects')
const PORT = 5000;
const app = express();

app.use('/api', projectsRoutes)
 


app.listen(PORT, () => {
    console.log("Hello World")
})