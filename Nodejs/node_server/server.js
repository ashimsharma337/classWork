import * as http from "http";

// Installing nodemon(node monitor) which helps to auto reloads a server when certain things in file changes it is for client(we do not need nodemon in server)
// npm install nodemon --save-dev (Global or local or devdependency) or use custom command in start of package.json(for long command to auto run)


const server = http.createServer((req, res) => {   // Receive one param a callback, it has res and req object which has properties and method
 console.log("Server started.....");               // req what server reiceive (only hits after opening in browser)
                                                   // res what server sends to client eg response object
   console.log("Request Method>>>", req.method);   // Req object method
   console.log("Request URl>>>", req.url);        // req object property
   

   if(req.url == "/about") {
    if(req.method == "GET") {
        res.end("Get about us");
    } else if(req.method == "POST") {
        res.end("Post request for about us");
    }
    } else if(req.method == "PUT") {
     res.end("Put request for about us");
    } else {
     res.end("Unhandled Method");
    }

    res.end("Response cycle completed");
   
   
 /*  
 *
 * res.send()
 * res.sendFile()
 * res.json()
 * res.end()
 * res.statusSend()        //Most of these are express function, and not availabe in node
 * res.download()
 * res.redirect()
 * *
 * res.status(404) 
     
     
*/                                            
});  

//After creating server it doesn't work, we need to create req so we have to  listen

server.listen(9000, "localhost", function(err) {     // receive three param..
    if(err) {                                         // 1st.Port number.
        console.log("Server Error: " , err);          // 2nd host name(IP address) or pathname
    } else {                                          // 3rd callback if port number is used by others server gives error
        console.log("Server is listening at port 9000");
        // Server should be ended too
        console.log("Press ctrl c to exit server...");
    }
});                                                  
                                                