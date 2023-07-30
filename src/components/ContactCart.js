import React from "react";
import { Link } from "react-router-dom";

const ContactCart = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="item">
      <img
        className="image-avtar"
        src="http://www.gravatar.com/avatar/?d=mp"
        alt="user"
      />
      <Link to={`/contact/${id}`}>
        <div className="content">
          <div className="item-name">{name}</div>
          <div className="item-mail">{email}</div>
        </div>
      </Link>
      <Link to={{ pathname: `/edit/${id}`, id: id }}>
        <i className="edit-icon fa fa-edit" />
      </Link>
      <i
        className="remove-icon fa fa-remove"
        onClick={() => props.clickHandler(id)}
      />
    </div>
  );
};

export default ContactCart;
