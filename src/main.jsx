import ReactDOM from "react-dom/client";
import React from "react";
import { restaurants } from "./constants/mock";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div className="restaurants__wrapper">
    <div className="restaurants-01">
      <h2>{restaurants[0].name}</h2>
      <h3>Меню</h3>
      <ul>
        <li>
          <b>{restaurants[0].menu[0].name} </b>
          {restaurants[0].menu[0].price} рублей
        </li>
        <li>
          <b>{restaurants[0].menu[1].name} </b>
          {restaurants[0].menu[1].price} рублей
        </li>
        <li>
          <b>{restaurants[0].menu[2].name} </b>
          {restaurants[0].menu[2].price} рублей
        </li>
      </ul>

      <h3>Отзывы</h3>
      <ul>
        <li>
          <b>{restaurants[0].reviews[0].user}:</b>
          <br />
          <p>"{restaurants[0].reviews[0].text}"</p>
          <span>{restaurants[0].reviews[0].rating} / 5</span>
        </li>
        {/* Обычно использую CSS, что бы визуально разделить добавил br. Без него li слипаются*/}
        <br />
        <li>
          <b>{restaurants[0].reviews[1].user}:</b>
          <br />
          <p>"{restaurants[0].reviews[1].text}"</p>
          <span>{restaurants[0].reviews[1].rating} / 5</span>
        </li>
      </ul>
    </div>
    <div className="restaurants-02">
      <h2>{restaurants[1].name}</h2>
      <h3>Меню</h3>
      <ul>
        <li>
          <b>{restaurants[1].menu[0].name} </b>
          {restaurants[1].menu[0].price} рублей
        </li>
        <li>
          <b>{restaurants[1].menu[1].name} </b>
          {restaurants[1].menu[1].price} рублей
        </li>
      </ul>

      <h3>Отзывы</h3>
      <ul>
        <li>
          <b>{restaurants[1].reviews[0].user}:</b>
          <br />
          <p>"{restaurants[1].reviews[0].text}"</p>
          <span>{restaurants[1].reviews[0].rating} / 5</span>
        </li>
        <br />
        <li>
          <b>{restaurants[1].reviews[1].user}:</b>
          <br />
          <p>"{restaurants[1].reviews[1].text}"</p>
          <span>{restaurants[1].reviews[1].rating} / 5</span>
        </li>
        <br />
        <li>
          <b>{restaurants[1].reviews[2].user}:</b>
          <br />
          <p>"{restaurants[1].reviews[2].text}"</p>
          <span>{restaurants[1].reviews[2].rating} / 5</span>
        </li>
      </ul>
    </div>
    <div className="restaurants-03">
      <h2>{restaurants[2].name}</h2>
      <h3>Меню</h3>
      <ul>
        <li>
          <b>{restaurants[2].menu[0].name} </b>
          {restaurants[2].menu[0].price} рублей
        </li>
        <li>
          <b>{restaurants[2].menu[1].name} </b>
          {restaurants[2].menu[1].price} рублей
        </li>
        <li>
          <b>{restaurants[2].menu[2].name} </b>
          {restaurants[2].menu[2].price} рублей
        </li>
      </ul>

      <h3>Отзывы</h3>
      <ul>
        <li>
          <b>{restaurants[2].reviews[0].user}:</b>
          <br />
          <p>"{restaurants[2].reviews[0].text}"</p>
          <span>{restaurants[2].reviews[0].rating} / 5</span>
        </li>
      </ul>
    </div>
    <div className="restaurants-04">
      <h2>{restaurants[3].name}</h2>
      <h3>Меню</h3>
      <ul>
        <li>
          <b>{restaurants[3].menu[0].name} </b>
          {restaurants[3].menu[0].price} рублей
        </li>
        <li>
          <b>{restaurants[3].menu[1].name} </b>
          {restaurants[3].menu[1].price} рублей
        </li>
      </ul>

      <h3>Отзывы</h3>
      <ul>
        <li>
          <b>{restaurants[3].reviews[0].user}:</b>
          <br />
          <p>"{restaurants[3].reviews[0].text}"</p>
          <span>{restaurants[3].reviews[0].rating} / 5</span>
        </li>
        <br />
        <li>
          <b>{restaurants[3].reviews[1].user}:</b>
          <br />
          <p>"{restaurants[3].reviews[1].text}"</p>
          <span>{restaurants[3].reviews[1].rating} / 5</span>
        </li>
      </ul>
    </div>
  </div>
);

// root.render(
//   React.createElement("div", {
//     children: [
//       React.createElement("div", {
//         children: [
//           React.createElement("h2", { children: `${restaurants[0].name}` }),
//           React.createElement("h3", { children: "Меню" }),
//           React.createElement("ul", {
//             children: [
//               React.createElement("li", {
//                 children: React.createElement("p", {
//                   children: `${restaurants[0].menu[0].name} ${restaurants[0].menu[0].price} рублей`,
//                 }),
//               }),
//               React.createElement("li", {
//                 children: React.createElement("p", {
//                   children: `${restaurants[0].menu[1].name} ${restaurants[0].menu[1].price} рублей`,
//                 }),
//               }),
//               React.createElement("li", {
//                 children: React.createElement("p", {
//                   children: `${restaurants[0].menu[2].name} ${restaurants[0].menu[2].price} рублей`,
//                 }),
//               }),
//             ],
//           }),
//           React.createElement("h3", { children: "Отзывы" }),
//           React.createElement("ul", {
//             children: [
//               React.createElement("li", {
//                 children: React.createElement("p", {
//                   children: `${restaurants[0].reviews[0].user} 
//                   "${restaurants[0].reviews[0].text}"
//                   ${restaurants[0].reviews[0].rating} / 5
//                   `,
//                 }),
//               }),
//               React.createElement("li", {
//                 children: React.createElement("p", {
//                   children: `${restaurants[0].reviews[1].user} 
//                   "${restaurants[0].reviews[1].text}"
//                   ${restaurants[0].reviews[1].rating} / 5
//                   `,
//                 }),
//               }),
//             ],
//           }),
//         ],
//       }),
//     ],
//   })
// );
