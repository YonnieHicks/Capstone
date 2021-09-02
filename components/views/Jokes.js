import html from "html-literal";

export default (st) => html`
  <section id="jokes">
    ${st.posts
      .map((post) => {
        return formatJokesPost(post);
      })
      .join("")}
  </section>
`;


