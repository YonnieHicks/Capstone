import html from "html-literal";

export default (st) => html`
  <section id="Affirmations">
    ${st.posts
      .map((post) => {
        return formatAffirmationsPost(post);
      })
      .join("")}
  </section>
`;
function formatAffirmationsPost(post) {
  return `
  <div class="affirmations-post">
    <h1>${post.sign}</h1>
    <h1>by User ${post.day}</h1>

    <hr>
    <br/>
  </div>`;
}

