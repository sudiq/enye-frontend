const Card = ({ cardInfo }) => {
  const { FirstName, LastName, Gender, PhoneNumber, UserName } = cardInfo;
  return (
    <div className="user__card">
      <div className="card__data">
        <div className="label">Username</div>
        <div className="data">{UserName}</div>
      </div>
      <div className="card__data">
        <div className="label">Firstname</div>
        <div className="data">{FirstName}</div>
      </div>
      <div className="card__data">
        <div className="label">Lastname</div>
        <div className="data">{LastName}</div>
      </div>
      <div className="card__data">
        <div className="label">Phonenumber</div>
        <div className="data">{PhoneNumber}</div>
      </div>
      <div className="card__data">
        <div className="label">Gender</div>
        <div className="data">{Gender}</div>
      </div>
      <div>more..</div>
    </div>
  );
};
export default Card;
