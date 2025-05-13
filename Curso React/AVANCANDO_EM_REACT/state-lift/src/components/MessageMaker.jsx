const MessageMaker = ({ setMessage }) => {
  const arr = ["Olá", "Tudo bem?", "Olá, tudo bem?"];

  return (
    <div>
      <button onClick={() => setMessage(arr[0])}>1</button>
      <button onClick={() => setMessage(arr[1])}>2</button>
      <button onClick={() => setMessage(arr[2])}>3</button>
    </div>
  );
};

export default MessageMaker;
