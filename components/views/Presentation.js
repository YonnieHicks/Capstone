export default () => `
<section class="presentation">
<class class="introduction">
  <div class="intro-text">
    <h1>Ipsum lorem ips </h1>
    <p>
    Ipsum lorem ips
    </p>
  </div>
</class>
</section>
const kelvinToFahrenheit = kelvinTemp =>
  Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

Weather in ${st.weather.city} ${kelvinToFahrenheit(st.weather.temp)}F, feels
    like ${kelvinToFahrenheit(st.weather.feelsLike)}F

`;
