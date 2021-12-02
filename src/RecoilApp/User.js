import React from "react";

const User = ({ profilePic, bio, likes, name, location, isLoading }) => {
  return (
    <div className={!isLoading ? "Card" : "Card Card--loading"}>
      <section className={"User__img"}>
        {profilePic && <img src={profilePic} alt="user" />}
      </section>
      {!isLoading && (
        <section className="User__info">
          <p>
            <span role="img" aria-label="owl">
              🦉
            </span>{""}
            {bio}
          </p>
          <p>
            <span role="img" aria-label="yellow">
              🌴
            </span>{" "}
            {likes}
          </p>
          <p className="User__info__details User__info__divider faint">
            <span>Name: </span>
            <span>{name}</span>
          </p>
          <p className="User__info__details User__info__divider faint">
            <span>Location: </span>
            <span>{location}</span>
          </p>
        </section>
      )}
    </div>
  );
};

export const UserPhoto = ({ profilePic, onClick, userId }) => {
  const id = userId.slice(0, userId.indexOf(".")); //remove .jpeg/.png etc.

  return (
    <button className="UserPhoto" onClick={onClick} data-id={id}>
      <img src={profilePic} alt="user" />
    </button>
  );
};
export default User;