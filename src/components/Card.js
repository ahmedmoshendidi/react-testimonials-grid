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
      <h2 className="card-title">{props.item.title}</h2>
      <h6 className="card-story">{props.item.story}</h6>
    </article>
  );
}
export default Card;
