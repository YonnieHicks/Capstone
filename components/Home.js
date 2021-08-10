const kelvinToFahrenheit = kelvinTemp =>
  Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

Weather in $;{st.weather.city} $;{kelvinToFahrenheit(st.weather.temp)}F, feels
    like${kelvinToFahrenheit(st.weather.feelsLike)}F
