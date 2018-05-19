# TrashExpert
Trash Expert is an application that giving users a better understanding of recycling and play some small interactive games to inspire users. <br>
[Link to the demo](http://peterchangsite.com/aau/wnm617/final_project/)

## Description
This project is using Highcharts for showing recycling data, and we created some interactive 3D games with three.js. Also, Stripe platform has been used for payment method.

## How it works?
#### examples:
```javascript
//Using Openweathermap API to get real-time weather data
function GetCityWeather_F(city) {

    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial' + '&appid=yourID',
        type: "GET",
        dataType: "jsonp",
        success: function(data){
            //paste data to html elements
        },
        error:function(){

        }
    });
}
```
```javascript
//Using Flickr API to get city photos
function GetCityPhoto(city) {

    $.ajax({
        url: 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=yourAPIKey&tags=skyline'+'&text='+city+
        '&safe_search=1&privacy_filter=1&content_type=1&per_page=5&format=json&nojsoncallback=1',
        format: "json",
        success: function(data) {
            //paste data to html elements            
        },
        error:function() {

        },
    });
}
```
