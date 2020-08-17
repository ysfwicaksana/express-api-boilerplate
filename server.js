const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const moment = require("moment");
require("dotenv/config");

//local timezone moment indonesia
moment.locale("id");

//setup dependencies
app.use(bodyParser.json()); //buar request content-type: application/json
app.use(bodyParser.urlencoded({ extended: true })); //buar request content-type - application/x-www-form-urlencoded
app.use(cors());

//API Route
const api = require("./src/routes");
app.use("/api/v1", api);

//setup port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`SERVER RUNNING ON PORT ${PORT}`));
