import Card from "./Card";
import Pages from "./Pages";
const Body = ({ data, pageProp }) => {
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
      <Pages pageProp={pageProp} />
    </>
  );
};
export default Body;
