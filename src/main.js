import cards, { carruself } from "./component/cards.js";

const url="http://localhost:3004/promociones";

cards(".general-box", url);
carruself(".buttonleft",".buttonrigth",".cardsoffers");