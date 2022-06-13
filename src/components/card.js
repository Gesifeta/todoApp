import React from "react";

function Card(props) {
  const handleClick = () => {
    document.location.reload();
  };
  return (
    <>
      <section>
        <h2>{`${props.title} ${props.firstName} ${props.lastName}`}</h2>
        <img
          style={{ float: "left" }}
          src={props.profileImage}
          alt={`${props.name}`}
        />
        <p><strong>Gender:</strong> {props.gender}</p>
        <p><strong>Age: </strong>{props.age}</p>
        <p><strong>Country: </strong>{props.location.country}</p>
        <p><strong>City: </strong>{props.location.city}</p>
        <h3><strong>Address</strong></h3>
        <p><strong>Street:
          </strong>{` ${props.location.street.number}, ${props.location.street.name}`}
          
        </p>
        <p><strong>Postcode: </strong>{props.location.postcode}</p>
        <p><strong>Tele:</strong>{` ${props.telephone}`}</p>
        <p><strong>Email:</strong>{` ${props.email}`}</p>
        <button onClick={handleClick}>Next</button>
      </section>
    </>
  );
}

export default Card;
