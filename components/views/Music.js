import html from "html-literal";
import music from "../../assets/images/videos/music.mp4";

export default (st) => html`


<video controls width="750">

        <source src="${music}" type="video/webm">

        <source src="${music}" type="video/mp4">

        Sorry, your browser doesn't support embedded videos.
</video>


`;

