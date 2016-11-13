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
    
    function getUserFriends() {
  FB.api('user_friends', function (response) {
    console.log('Got friends: ', response.data);
    //$("#friendslist").html('<img src="'+response.data[0].picture.data.url+'"/>');
    // maybe an $.each as well
    // var friendMarkup = '';
    // $.each(response.data, function(e, v) {
    //   friendMarkup += '<img src="' + v.picture.data.url +'" alt="'+ v.name +' picture"/>';
    // }
    // $("#friendlist").html(friendMarkup);
  });
}
              
    


       function login() {
        FB.login(function(response) {
    if (response.authResponse) {
        window.location.reload();
    }
}, {scope:'email,user_friends,public_profile'});
    }

            
function getFirstName() {
    console.log(response.first_name);
}
function getFriends() {
FB.api(
    "/{user-id}/friends",
    function (response) {
      //if (response && !response.error) {
        console.log(response.data[0]);
      //}
    }
);
}

