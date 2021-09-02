import html from "html-literal";

export default (st) => html`
  <section id="Astrology">
    ${st.posts
      .map((post) => {
        return formatAstrologyPost(post);
      })
      .join("")}
  </section>
`;
function formatAstrologyPost(post) {
  return `
  <div class="astrology-post">
    <h1>${post.sign}</h1>
    <h1>by User ${post.day}</h1>

    <hr>
    <br/>
  </div>`;
}

