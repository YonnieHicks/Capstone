import html from "html-literal";

export default st => html`
  <header>
    <h1>@ Home Wellness ${st.header}</h1>
    <div class="logo-container">
      <img src="images/WellnessLogo.jpg" alt="logo" />
    </div>
    <nav>
      <ul class="nav-links">
        <li><a class="nav-link" href="topics.html">Topics</a></li>
        <li><a class="nav-link" href="about.html">About</a></li>
        <li><a class="nav-link" href="contact.html">Contact</a></li>
      </ul>
    </nav>
  </header>
`;
