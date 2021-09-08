import html from "html-literal";
import music from "../../assets/images/videos/music.mp4";

export default (st) => html`


<center><video controls width="600";height="auto">

<source src="${music}" type="video/mp4">


</video>
</center>

`;

