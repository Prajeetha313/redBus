var mongoose=require('mongoose');
require('dotenv').config();
mongoose
     .connect(process.env.DB || 'mongodb+srv://PrajeethaRaj:Corona-19@cluster0.08uhr.mongodb.net/RedBus?retryWrites=true&w=majority', 
     { useNewUrlParser: true, useUnifiedTopology: true })
     .then(() => console.log('Database Connected',mongoose.connection.host,mongoose.connection.db))
     .catch(err => console.log(err));


module.exports=mongoose;