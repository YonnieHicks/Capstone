import html from "html-literal";

export default links => html`
  <nav>
    <div class="bg-img">
      <div class="container">
        <div class="topnav">
          ${links.map(
    link =>
    `<a href="/${link.title}" title="${link.title}" data-navigo>
              ${link.text}</a>`
    )}
        </div>
      </div>
    </div>

    </div>
  </nav>
`;
