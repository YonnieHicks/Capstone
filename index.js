import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
import dotenv from "dotenv";
import "./env";

dotenv.config();

const router = new Navigo(window.location.origin);
console.log('yhick-process.env:', process.env);

function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Nav(state.Links)}
  ${Main(st)}
  ${Footer()}
`;

  router.updatePageLinks();

  // addEventListeners(st);
}

function addEventListeners(st) {
  // add event listeners to Nav items for navigation
  document.querySelectorAll("nav a").forEach((navLink) =>
    navLink.addEventListener("click", (event) => {
      event.preventDefault();
      render(state[event.target.title]);
    })
  );

  // add menu toggle to bars icon in nav bar
  document
    .querySelector(".fa-bars")
    .addEventListener("click", () =>
      document.querySelector("nav > ul").classList.toggle("hidden--mobile")
    );
  }



// router.hooks({
//   before: (done, params) => {
//     const page = params && params.hasOwnProperty("page") ? capitalize(params.page) : "Home";

//     switch (page) {
//
//       case "Affirmations":
//         state.Affirmations.posts = [];
//         axios
//           .get("https://vedicrishi-horoscope-matching-v1.p.rapidapi.com/basic_panchang")
//           .then((response) => {
//             response.data.forEach((post) => {
//               state.Affirmations.posts.push(post);
//             });
//             done();

//             console.log(state.Affirmations.posts);
//           })
//           .catch((err) => console.log(err));
//         break;

//       case "Home":
//         axios
//           .get(
//             `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.	WEATHER_API_KEY}&q=st.%20louis`
//           )
//           .then((response) => {
//             state.Home.weather = {};
//             state.Home.weather.city = response.data.name;
//             state.Home.weather.temp = response.data.main.temp;
//             state.Home.weather.feelsLike = response.data.main.feels_like;
//             state.Home.weather.humidity = response.data.main.humidity;
//             state.Home.weather.description = response.data.weather[0]["description"];
//             done();
//           })
//           .catch((err) => console.log(err));
//         break;

//       default:
//         done();
//     }
//   },
// });

router
  .on({
    "/": () => render(state.Home),
    ":page": (params) => render(state[capitalize(params.page)]),
  })
  .resolve();
