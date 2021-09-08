import html from "html-literal";
import music from "../../assets/images/videos/music.mp4";

export default (st) => html`

<video class="center"  controls width="600";height="auto">

<source src="${music}" type="video/mp4">


</video>


`;

