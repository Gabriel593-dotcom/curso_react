import MessageMaker from "./MessageMaker";

const Message = (props) => {
  const { message } = props;

  return (
    <>
      <p>A mensagem é: {message}</p>
    </>
  );
};

export default Message;
