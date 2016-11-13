 window.fbAsyncInit = function() {
    FB.init({
      appId      : '183728002087329',
      xfbml      : true,
      version    : 'v2.8'
    });
      FB.AppEvents.logPageView();
      
     FB.getLoginStatus(function(response) {
         login();
          if(response.status === 'connected'){
              document.getElementById('status').innerHTML = 'We are connected.';
          } else if (response.status === 'not_authorized') {
              document.getElementById('status').innerHTML = 'We are not logged in';
          } else {
              document.getElementById('status').innerHTML = 'You are not logged into Facebook';
          }});
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
    
    function showAccountInfo() {
        FB.api('/me?fields=name,picture', function(response) {
            console.log(response.name)
        }
              )
    }

    function login() {
        FB.login(function(response) {
            if(response.status === 'connected'){
              document.getElementById('status').innerHTML = 'We are connected.';
                
                
               showAccountInfo();
                
                
          } else if (response.status === 'not_authorized') {
              document.getElementById('status').innerHTML = 'We are not logged in';
          } else {
              document.getElementById('status').innerHTML = 'You are not logged into Facebook';
          }
        }
                );
    }
            
function getFirstName() {
    console.log(response.first_name);
}
function getFriends() {
FB.api(
    "/{user-id}/friends",
    function (response) {
      if (response && !response.error) {
        console.log(response);
      }
    }
);
}

