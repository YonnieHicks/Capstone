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
    <h3>${jokes.setup}</h3><br>
    <h3>${jokes.punchline}</h3>


  </div></center>`;
}
