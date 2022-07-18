export default function Header() {
  return (
    <div class="topo">
      <div class="topo-container">
        <div class="logo-container">
          <ion-icon name="logo-instagram"></ion-icon>
          <div class="separador"></div>
          <img src="images/logo.png" class="logo" />
        </div>
        <input type="text" placeholder="Pesquisar" />
        <div class="botoes-topo">
          <ion-icon name="paper-plane-outline"></ion-icon>
          <ion-icon name="compass-outline"></ion-icon>
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="person-outline"></ion-icon>
        </div>
      </div>
    </div>
  );
}
