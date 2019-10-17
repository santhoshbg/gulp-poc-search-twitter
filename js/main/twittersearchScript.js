class TwitterSearchComponent {
    constructor() {}  
    draw() {
        var searchData;
        fetch("twittersearch.json")
            .then(function (response) {
                    response.json().then(function (responseData) {
                    console.log(responseData);
                    searchData = responseData;
                    $.each(responseData, function(index, element) {
                        // console.log('index............', index);
                        // console.log('element............', element);
                        for (let i = 0; i < element.length; i++) {
                            console.log('i............', element[i]);
                            console.log('created_at : ............ : ', element[i].created_at);
                            console.log('user name ............ : ', element[i].user.name);

                            $("#seasons").append(`<div class="wrap"><div class="image-container">
                            <img src='${element[i].user.profile_image_url}' class="img-responsive" alt="image"> </div> 
                            <div class="name-date-wrap">
                            <span class="uname"> ${element[i].user.name}  </span> 
                            <span class="created-date"> ${element[i].created_at}  </span>
                            <div class="text-container"> ${element[i].text}  </div>`);

                        }
                    });
                });
            });          
            
      //button listener
      document.getElementById('searchData').addEventListener('click', function(){
        var hasResult = false;
        $("#seasons").text('');
        let searchText = document.getElementById('searchText').value;
        
        if (searchText.length > 0) {
            $.each(searchData, function(index, element) {
                for (let i = 0; i < element.length; i++) {
                    if (element[i].text.toLowerCase().includes(searchText)) {
                        hasResult = true;
                        console.log('text....', element[i].text);
                        $("#seasons").append(`<div class="wrap"><div class="image-container">
                            <img src='${element[i].user.profile_image_url}' class="img-responsive" alt="image"> </div> 
                            <div class="name-date-wrap">
                            <span class="uname"> ${element[i].user.name}  </span> 
                            <span class="created-date"> ${element[i].created_at}  </span>
                            <div class="text-container"> ${element[i].text}  </div>`);
                    };
                };
            });
            
        }else {
            alert('empty!');
        }
        if (!hasResult) {
            seasons.append('No result found');
        }
      }.bind(this));
    }
  }
  
  var twittersearch = new TwitterSearchComponent();
  twittersearch.draw();



