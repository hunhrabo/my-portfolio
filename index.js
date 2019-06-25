const express = require("express");

const app = express();

app.use(express.static("public"));
app.use(express.static(__dirname + "/public/_styles"));
app.use(express.static(__dirname + "/public/_images"));

// app.get('/', (req, res) => {
//     res.send()
// })

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
