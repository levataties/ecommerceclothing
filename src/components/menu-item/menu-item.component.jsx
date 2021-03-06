import React from "react";
import { useNavigate } from "react-router-dom";
import "./menu-item.component.scss";

export const MenuItem = ({ title, imageUrl, size }) => {
  let navigate = useNavigate();
  return (
    <div className={`menu-item ${size}`} onClick={() => navigate(title)}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};
