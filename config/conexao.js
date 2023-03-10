const mongoose = require("mongoose");
const banco =
"mongodb://luissilvabg014:luisjuliano@ac-zj3osy6-shard-00-00.iuridzd.mongodb.net:27017,ac-zj3osy6-shard-00-01.iuridzd.mongodb.net:27017,ac-zj3osy6-shard-00-02.iuridzd.mongodb.net:27017/?ssl=true&replicaSet=atlas-45ah6v-shard-0&authSource=admin&retryWrites=true&w=majority";

mongoose.connect(banco, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose;
