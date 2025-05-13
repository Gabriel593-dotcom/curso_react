const UserDetails = ({ user }) => {
  const { name, age, job } = user;
  return (
    <div>
      <h3>{name}</h3>
      <h4>{age}</h4>
      <h4>{job}</h4>
      <h4>
        {age >= 18
          ? `${name} has minimum age to take driver license.`
          : `${name} hasn't minimum age to take driver license.`}
      </h4>
      <br />
      <hr />
    </div>
  );
};

export default UserDetails;
