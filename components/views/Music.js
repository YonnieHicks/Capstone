import html from "html-literal";
import music from "../../assets/images/videos/music.mp4";

export default (st) => html`

<img src="${music}" alt="me" />

<video controls width="absolute">

    <source src="${music}"
            type="video/webm">

    <source src="${music}"
            type="video/mp4">

    Sorry, your browser doesn't support embedded videos.
</video>


`;

