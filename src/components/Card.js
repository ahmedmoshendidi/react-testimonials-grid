import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <article className="card">
      <div className="user-info">
        <img
          src={`./images/${props.item.img}`}
          className="user-photo"
          alt="user-photo"
        />
        <div>
          <p className="user-name">{props.item.name}</p>
          <span className="user-status">{props.item.status}</span>
        </div>
      </div>
      <p className="card-title">{props.item.title}</p>
      <p className="card-story">{props.item.story}</p>
    </article>
  );
}
export default Card;
