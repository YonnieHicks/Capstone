import html from "html-literal";

export default (st) => html`
  <section id="Jokes">
    ${st.jokes
      .map((jokes) => {
        return formatJokesjokes(jokes);
      })
      .join("")}
  </section>
`;

function formatJokesjokes(jokes) {
  return `
 <center> <div class="jokes">

 <section id="jumbotron">
 <h2><underline>Joke of the Day</underline></h2>
 </section>

   <center> <h3>A lion would never play golf,</h3><br>
    <h3>but a Tiger Wood! </h3></center>



  </div></center>`;
}
