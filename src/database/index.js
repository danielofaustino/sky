const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://danielofaustino:Anl92br.@cluster0.izb07.gcp.mongodb.net/ski?retryWrites=true&w=majority', 
{useNewUrlParser: true,
useUnifiedTopology: true,
useCreateIndex: true});

mongoose.Promise = global.Promise;

module.exports = mongoose;