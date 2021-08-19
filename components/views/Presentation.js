import html from "html-literal";

const kelvinToFahrenheit = kelvinTemp =>
  Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);


export default (st) => html`
<section class="presentation">
<div class="introduction">
  <div class="intro-text">
    <h1>Ipsum lorem ips </h1>
    <p>
    Ipsum lorem ips
    </p>
  </div>
</div>
</section>

Weather in ${st.weather.city} ${kelvinToFahrenheit(st.weather.temp)}F, feels
    like ${kelvinToFahrenheit(st.weather.feelsLike)}F

`;
