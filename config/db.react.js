const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/crudReact', {useNewUrlParser:true,  useUnifiedTopology: true },
    err=>{
        !err? console.log("connect to mongose successfull"):console.log(`Connection to mongo errone : ${JSON.stringify(err, undefined, 2)}`);
    }
)