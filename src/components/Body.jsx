import Card from "./Card";
const Body = ({ data }) => {
  return (
    <>
      <div className="userdata">
        {data.map(
          ({ FirstName, LastName, Gender, Email, PhoneNumber, UserName }) => (
            <Card
              cardInfo={{
                FirstName,
                LastName,
                Gender,
                Email,
                PhoneNumber,
                UserName,
              }}
            />
          )
        )}
      </div>
    </>
  );
};
export default Body;
