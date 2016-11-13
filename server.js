var ip = "ws://192.168.1.160:1430/r";

function accept() {
    AcceptMatch("Chris Icarus-Samurai", "Sean Neas");
    alert("You Accepted Your Friends Shiproposal")

}

function decline() {
    DeclineMatch("Chris Icarus-Samurai", "Sean Neas");
        alert("You can definitely do better than him")

}

function match() {
    CreateMatch("Chris Icarus-Samurai", "Sean Neas");
    alert("Congrats! You've Shipped Chris with Sean!")
}

function CreateMatch(test1, test2){
            if ("WebSocket" in window)
            {
               //("WebSocket is supported by your Browser!");
               
               // Let us open a web socket
               var ws = new WebSocket(ip);
				
               ws.onopen = function(){
                  // Web Socket is connected, send data using send()
                  ws.send("c--"+test1+"--"+test2);
                  //("Message is sent...");
               };
				
               ws.onmessage = function (evt) 
               { 
                  var received_msg = evt.data;
                  //("Message is received..." + received_msg);
               };
				
               ws.onclose = function()
               { 
                  // websocket is closed.
                  //("Connection is closed..."); 
               };
            }
            
            else
            {
               // The browser doesn't support WebSocket
               //("WebSocket NOT supported by your Browser!");
            }
         };
         function AcceptMatch(test1, test2){
            if ("WebSocket" in window)
            {
               ////("WebSocket is supported by your Browser!");
               
               // Let us open a web socket
               var ws = new WebSocket(ip);
				
               ws.onopen = function(){
                  // Web Socket is connected, send data using send()
                  ws.send("a--"+test1+"--"+test2);
                  //("Message is sent...");
               };
				
               ws.onmessage = function (evt) 
               { 
                  var received_msg = evt.data;
                  alert("You have boarded the " + received_msg + " Ship!\nTheir phone number is 858-314-1592");
                  //("Message is received..." + received_msg);
               };
				
               ws.onclose = function()
               { 
                  // websocket is closed.
                  //("Connection is closed..."); 
               };
            }
            
            else
            {
               // The browser doesn't support WebSocket
               //("WebSocket NOT supported by your Browser!");
            }
         };
         function DeclineMatch(test1, test2){
            if ("WebSocket" in window)
            {
               //("WebSocket is supported by your Browser!");
               
               // Let us open a web socket
               var ws = new WebSocket(ip);
				
               ws.onopen = function(){
                  // Web Socket is connected, send data using send()
                  ws.send("d--"+test1+"--"+test2);
               };
				
               ws.onmessage = function (evt) 
               { 
                  var received_msg = evt.data;

               };
				
               ws.onclose = function()
               { 
                  // websocket is closed.
                  //("Connection is closed..."); 
               };
            }
            
            else
            {
               // The browser doesn't support WebSocket
               //("WebSocket NOT supported by your Browser!");
            }
         };
