import connectToDB from './database/index.js';
import {app, port} from './app.js';

connectToDB()
.then(()=>{
    app.listen(port, ()=>{
        console.log("Server is running on port: ", port);
    });
})
.catch(err=>{console.log("Server in not running!!", err)});
