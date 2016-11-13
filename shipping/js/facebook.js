 window.fbAsyncInit = function() {
    FB.init({
      appId      : '183728002087329',
      xfbml      : true,
      version    : 'v2.8'
    });
      FB.AppEvents.logPageView();
      
     FB.getLoginStatus(function(response) {
          if(response.status === 'connected'){
              //document.getElementById('status').innerHTML = 'We are connected.';
              alert("YAYAYYAYA");
          } else if (response.status === 'not_authorized') {
             // document.getElementById('status').innerHTML = 'We are not logged in';
              alert("shit");
          } else {
             // document.getElementById('status').innerHTML = 'You are not logged into Facebook';
              alert("shit");
          }});
  };
