import html from "html-literal";

export default (st) => html`
  <section id="astrology">
    ${st.posts
      .map((post) => {
        return formatAstrologyPost(post);
      })
      .join("")}
  </section>
`;
