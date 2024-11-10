const Amount = ({ amount, setAmount }) => {
  const increaseAmount = () => setAmount(amount + 1);
  const decreaseAmount = () => setAmount(amount > 1 ? amount - 1 : 1);

  return (
    <div className="AmountCont">
      <button onClick={decreaseAmount} disabled={amount <= 1} className="AmountBtn">-</button>
      <p className="AmountNumber">{amount}</p>
      <button onClick={increaseAmount} className="AmountBtn">+</button>
    </div>
  );
};

export default Amount;