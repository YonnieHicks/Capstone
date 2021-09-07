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
  <div class="jokes">
    <h1>${jokes.setup}</h1>
    <h2>by User ${jokes.punchline}</h2>

    <hr>
    <br/>
  </div>`;
}
