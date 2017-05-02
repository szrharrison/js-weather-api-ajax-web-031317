function getFahrenheits(result){
  // Your code goes here
  let temps = result.hourly_forecast.map(function(forecast, i, hourly_forecast) {
    return forecast.temp.english
  })
  return temps
}

function getHours(result){
  // Your code goes here
  let hours = result.hourly_forecast.map(function(forecast, i, hourly_forecast) {
    return forecast.FCTTIME.hour_padded
  })
  return hours
}

function generateDataSet(labels, data) {
  // Your code goes here
  return {
    labels: labels,
    datasets: [{
      data: data,
      label : 'Hourly Weather for New York',
      fillColor : 'rgba(220,220,220,0.2)',
      strokeColor : 'rgba(220,220,220,1)',
      pointColor : 'rgba(220,220,220,1)',
      pointStrokeColor : '#fff',
      pointHighlightFill : '#fff',
      pointHighlightStroke : 'rgba(220,220,220,1)',
    }],
  }
}

function makeAjaxRequest(endpoint, success) {
  // Your code goes here
  $.ajax({
    url: endpoint,
    dataType : 'jsonp',
    success: success
  })
}
