$(document).ready(function() {

    var searchData;
    // var url = '../twittersearch.json';
    $.ajax({
        type: 'GET',
        url: 'https://aravindtwitter.herokuapp.com/twittersearch?key=adobe',
        // url: url,
        data: { get_param: 'value' },
        dataType: 'json',
        success: function(data) {
            searchData = data;
            console.log('data........ santhu', data);
            $.each(data, function(index, element) {
                for (i = 0; i < element.length; i++) {
                    $("#seasons").append(`<div class="wrap"><div class="image-container">
                    <img src='${element[i].user.profile_image_url}' class="img-responsive" alt="image"> </div> 
                    <div class="name-date-wrap">
                    <span class="uname"> ${element[i].user.name}  </span> 
                    <span class="created-date"> ${element[i].created_at}  </span>
                    <div class="text-container"> ${element[i].text}  </div>`);
                }
            });
        }
    });

    $('.searchData').click(function() {
        var hasResult = false;
        $("#seasons").text('');
        var searchText = $(".searchText").val();

        searchText = searchText.toLowerCase();
        if (searchText.length > 0) {
            $.each(searchData, function(index, element) {
                for (i = 0; i < element.length; i++) {
                    if (element[i].text.toLowerCase().includes(searchText)) {
                        hasResult = true;
                        console.log('text....', element[i].text);
                        $("#seasons").append(`<div class="wrap"><div class="image-container">
                    <img src='${element[i].user.profile_image_url}' class="img-responsive" alt="image"> </div> 
                    <div class="name-date-wrap">
                    <span class="uname"> ${element[i].user.name}  </span> 
                    <span class="created-date"> ${element[i].created_at}  </span>
                    <div class="text-container"> ${element[i].text}  </div>`);
                    }
                }
            });
        } else {
            alert('empty!');
        }

        if (!hasResult) {
            seasonsOne.append('No result found');
        }
    });
});