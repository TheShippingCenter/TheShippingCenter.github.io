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
               var ws = new WebSocket("ws://192.168.1.132:1430/r");
				
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
               var ws = new WebSocket("ws://192.168.1.132:1430/r");
				
               ws.onopen = function(){
                  // Web Socket is connected, send data using send()
                  ws.send("a--"+test1+"--"+test2);
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
         function DeclineMatch(test1, test2){
            if ("WebSocket" in window)
            {
               //("WebSocket is supported by your Browser!");
               
               // Let us open a web socket
               var ws = new WebSocket("ws://192.168.1.132:1430/r");
				
               ws.onopen = function(){
                  // Web Socket is connected, send data using send()
                  ws.send("d--"+test1+"--"+test2);
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