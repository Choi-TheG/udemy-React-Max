import "./ExpenseDate.css";

function ExpenseDate(props) {
  const month = props.date.toLocaleString("ko-KR", { month: "short" }); // short, long
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("ko-KR", { day: "2-digit" }); //

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
