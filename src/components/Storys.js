function Story(props) {
  //Fazer o titulo
  return (
    <div class="story">
      <div class="imagem">
        <img src={props.urlImage} />
      </div>
      {/* <div class="usuario">{props.user}</div> */}
    </div>
  );
}

const storys = [
  { urlImage: "images/9gag.svg", user: "9gag" },
  { urlImage: "images/meowed.svg", user: "meowed" },
  { urlImage: "images/barked.svg", user: "barked" },
  {
    urlImage: "images/nathanwpylestrangeplanet.svg",
    user: "nathanwpylestrangeplanet",
  },
  { urlImage: "images/wawawicomics.svg", user: "wawawicomics" },
  { urlImage: "images/respondeai.svg", user: "respondeai" },
  { urlImage: "images/filomoderna.svg", user: "filomoderna" },
  { urlImage: "images/memeriagourmet.svg", user: "memeriagourmet" },
];

export default function Storys() {
  return (
    <div class="storys">
      {storys.map((story) => (
        <Story urlImage={story.urlImage} user={story.user} />
      ))}

      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}
