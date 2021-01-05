$(document).ready(function() {

    function loadMeteo(ville) {

        var url2 = 'https://www.prevision-meteo.cj/sevices/json/Mons'

        $.ajax({
            url = url2,
            method: 'GET',
            dataType: 'json',

            success:function(monObjet2){
                console.log(monObjet2)

                $('h1').html(monObjet2.city_info.name + ', ' + monObjet2.city_info.country)
                $('.daycurrent h2').html(monObjet2.current_condition.condition);
                $('.daycurrent img').attr('src', monObjet2.current_condition.icon_big)
                $('.daycurrent .date').html(monObjet2.current_condition.date)
                $('.daycurrent .temperature').html(monObjet2.current_condition.tmp + ' °C')

                $('.day0 h2').html(monObjet2.fcst_day_0.condition)
                $('.day0 img').attr('src', 'img/' + monObjet2.fcst_day_0.condition_key + '.png')
                $('.day0 .date').html(monObjet2.fcst_day_0.day_long + monObjet2.fcst_day_0.date)
                $('.day0 .temperaturemax').html(monObjet2.current_condition.tmp + ' °C')
                $('.day0 .temperaturemin').html(monObjet2.current_condition.tmp + ' °C')

            }
        })

    } //fct loadMeteo



    navigator.geolocation.getCurrentPosition(function(position){

        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        
        console.log('lat:' + lat + ' lng: ' + lng)
        
        var url = 'https://us1.locationiq.com/v1/reverse.php?key=pk.be769affcc1c32a02b8a96ec76127a93&format=json&lat='+lat+'&lon='+lng+''

        $.ajax({
            url: url,
            method: 'GET',
            dataType: 'json',

            success:function(monObjet){

                var ville = monObjet.address.town;

                console.log(ville)

            }
        })

    })

    $('#go').click(function(){
        var ville = $('#ville').val()
        console.log(ville)
        loadMeteo(ville)
    })

});