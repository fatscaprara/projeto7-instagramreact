import React from "react";

function Post(props) {
  const [like, setLike] = React.useState(false);

  return (
    <div class="post">
      <div class="post-title">
        <div class="post-profile">
          <img class="profile" src={props.profileUrl} />
          <h4>{props.profileName}</h4>
        </div>
        <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
      </div>
      <div class="post-media">
        <img src={props.postUrl} />
      </div>
      <div class="post-actions">
        <div class="left-actions">
          {like ? (
            <ion-icon
              name="heart"
              style={{ color: "#EF3B51" }}
              onClick={() => setLike(!like)}
            ></ion-icon>
          ) : (
            <ion-icon
              name="heart-outline"
              onClick={() => setLike(!like)}
            ></ion-icon>
          )}
          <ion-icon name="chatbubble-outline"></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <div class="save-actions">
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
      </div>
      <div class="post-liked">
        <img class="profile" src={props.profileLikedUrl} alt="" />
        <span>
          Curtido por <strong>{props.profileLikedName}</strong> e{" "}
          <strong>outras {props.qtdLikes} pessoas</strong>
        </span>
      </div>
    </div>
  );
}

const posts = [
  {
    profileUrl: "images/meowed.svg",
    profileName: "meowed",
    postUrl: "images/gato-telefone.svg",
    profileLikedUrl: "images/respondeai.svg",
    profileLikedName: "Responde Aí",
    qtdLikes: 10201,
  },
  {
    profileUrl: "images/barked.svg",
    profileName: "barked",
    postUrl: "images/dog.svg",
    profileLikedUrl: "images/adorable_animals.svg",
    profileLikedName: "adorable_animals",
    qtdLikes: 9784,
  },
];

export default function Feed() {
  const postComponents = posts.map((post) => (
    <Post
      profileUrl={post.profileUrl}
      profileName={post.profileName}
      postUrl={post.postUrl}
      profileLikedUrl={post.profileLikedUrl}
      profileLikedName={post.profileLikedName}
      qtdLikes={post.qtdLikes}
    />
  ));

  return <div class="feed">{postComponents}</div>;
}
