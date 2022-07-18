import Storys from "./Storys";
import Feed from "./Feed";
import Sidebar from "./Sidebar";

export default function content() {
  return (
    <div class="container">
      <div class="container-principal">
        <Storys />
        <Feed />
        <div class="actions-mobile">
          <ion-icon name="home"></ion-icon>
          <ion-icon name="search-outline"></ion-icon>
          <ion-icon name="add-circle-outline"></ion-icon>
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="person-outline"></ion-icon>
        </div>
      </div>

      <div class="container-secundario">
        <Sidebar />
      </div>
    </div>
  );
}
