const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/CRM-VUE", { useNewUrlParser: true, useUnifiedTopology: true  })
  .catch((error) => handleError(error));
