$(document).ready(function(){

  function ChargerMeteo(ville) {

    $.ajax({

      url : 'https://www.prevision-meteo.ch/services/json/' + ville,
      type : 'GET',
      dataType : 'json',

      success : function(monArray) {
        
        $('#contenu').addClass('d-none');
        $('#champs_ville').val('');

        $('#date').html((monArray).fcst_day_0.day_long + ' ' + (monArray).current_condition.date);
        if ((monArray).city_info.name == 'Bruxelles 1') {
          $('#city').html('Bruxelles');
        } else {$('#city').html((monArray).city_info.name);
      }
        $('#condition').html((monArray).current_condition.condition);
        $('#temperature').html((monArray).current_condition.tmp + '°');
        $('#humidity').html('Humidité: ' + (monArray).current_condition.humidity + '%');
        $('#icon').attr('src', "/img/" + (monArray).current_condition.condition_key+".svg");
        $('#icon').attr('alt', (monArray).current_condition.condition);

        $('.day_1 .fcst_date').html((monArray).fcst_day_1.day_short)
        $('.day_1 .fcst_icon').attr('src', "/img/" + (monArray).fcst_day_1.condition_key + ".svg")
        $('.day_1 .fcst_icon').attr('alt', (monArray).fcst_day_1.condition);
        $('.day_1 .fcst_t_max').html('<strong><i class="fas fa-angle-up"></i></strong> ' + (monArray).fcst_day_1.tmax + '°')
        $('.day_1 .fcst_t_min').html('<strong><i class="fas fa-angle-down"></i></strong> ' +(monArray).fcst_day_1.tmin + '°')

        $('.day_2 .fcst_date').html((monArray).fcst_day_2.day_short)
        $('.day_2 .fcst_icon').attr('src', "/img/" + (monArray).fcst_day_2.condition_key + ".svg")
        $('.day_2 .fcst_icon').attr('alt', (monArray).fcst_day_2.condition);
        $('.day_2 .fcst_t_max').html('<strong><i class="fas fa-angle-up"></i></strong> ' + (monArray).fcst_day_2.tmax + '°')
        $('.day_2 .fcst_t_min').html('<strong><i class="fas fa-angle-down"></i></strong> ' +(monArray).fcst_day_2.tmin + '°')

        $('.day_3 .fcst_date').html((monArray).fcst_day_3.day_short)
        $('.day_3 .fcst_icon').attr('src', "/img/" + (monArray).fcst_day_3.condition_key + ".svg")
        $('.day_3 .fcst_icon').attr('alt', (monArray).fcst_day_3.condition);
        $('.day_3 .fcst_t_max').html('<strong><i class="fas fa-angle-up"></i></strong> ' + (monArray).fcst_day_3.tmax + '°')
        $('.day_3 .fcst_t_min').html('<strong><i class="fas fa-angle-down"></i></strong> ' +(monArray).fcst_day_3.tmin + '°')

        $('.day_4 .fcst_date').html((monArray).fcst_day_4.day_short)
        $('.day_4 .fcst_icon').attr('src', "/img/" + (monArray).fcst_day_4.condition_key + ".svg")
        $('.day_4 .fcst_icon').attr('alt', (monArray).fcst_day_4.condition);
        $('.day_4 .fcst_t_max').html('<strong><i class="fas fa-angle-up"></i></strong> ' + (monArray).fcst_day_4.tmax + '°')
        $('.day_4 .fcst_t_min').html('<strong><i class="fas fa-angle-down"></i></strong> ' +(monArray).fcst_day_4.tmin + '°')

        $('#contenu').removeClass('d-none');

      },
      error : function(ville) {

        alert('error');

      }
    }) // ajax
  } // fonction ChargerMeteo

  navigator.geolocation.getCurrentPosition(function(position){

    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    
    var url = 'https://us1.locationiq.com/v1/reverse.php?key=pk.be769affcc1c32a02b8a96ec76127a93&format=json&lat='+lat+'&lon='+lng+''

    $.ajax({
        url: url,
        method: 'GET',
        dataType: 'json',

        success:function(monObjet){

            var ville = monObjet.address.town;
            ChargerMeteo(ville)

        }
    })
  }) // navigator

  $('#bouton_ville').click(function(e){
    e.preventDefault();

    var ville = $('#champs_ville').val()

    if (ville == "bruxelles" || ville == "Bruxelles"|| ville == "BRUXELLES") {
      ville = "bruxelles-1";
    }

    if (ville != '') {
      ChargerMeteo(ville)
    }
  })
  
  $('#bouton_reset').click(function(e){
    e.preventDefault();

    navigator.geolocation.getCurrentPosition(function(position){

    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    
    var url = 'https://us1.locationiq.com/v1/reverse.php?key=pk.be769affcc1c32a02b8a96ec76127a93&format=json&lat='+lat+'&lon='+lng+''

    $.ajax({
        url: url,
        method: 'GET',
        dataType: 'json',

        success:function(monObjet){

            var ville = monObjet.address.town;
            ChargerMeteo(ville)

        }
      })
    }) // navigator
    $(this).unselect();
  })

  $('#champs_ville').click(function(){
    $(this).select();
  })


}); // ready