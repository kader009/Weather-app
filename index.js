  
  // selector
  const input = document.getElementById('input')
  const btn = document.getElementById('btn')
  const image = document.getElementById('picture')


  // data fetch with button click
  btn.addEventListener('click', function() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=f75d546a7c226b506aa116b94c29c651`)
    .then(res => res.json())
    .then(data =>{
      UpdateUi(data)
      console.log(data);
    })

    // show alert for impty input value
    if(document.getElementById('input').value === ''){
      alert("Type a right city name please...")
      return UpdateUi(data);
    }

  })

  
  
  
  function UpdateUi(data) {

    document.getElementById('city').innerHTML = data.name
    document.getElementById('country').innerHTML = data.sys.country
    document.getElementById('temp').innerHTML = Math.round(data.main.temp) + ' °C'
    document.getElementById('wind').innerHTML = data.wind.speed + ' km/h'
    document.getElementById('humidity').innerHTML = data.main.humidity + '%';

    // if(data.sys.country == ''){
    //   UpdateUi('wrong city name')
    // }



    // code for image change every weather

    if(data.weather[0].main === 'Clouds'){
      image.src = 'images/clouds.png'
    } else if(data.weather[0].main === 'Drizzle'){
      image.src = 'images/drizzle.png'
    } else if(data.weather[0].main === 'Humidity'){
      image.src ='images/humidity.png'
    } else if(data.weather[0].main === 'Mist'){
      image.src = 'images/mist.png'
    }else if(data.weather[0].main === 'Rain'){
      image.src = 'images/rain.png'
    }else if(data.weather[0].main === 'Snow'){
      image.src = 'images/snow.png'
    }else if(data.weather[0].main === 'Clear'){
      image.src = 'images/clear.png'
    }
  }


