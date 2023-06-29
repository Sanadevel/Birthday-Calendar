import { Link, useParams } from "react-router-dom";
import "../styles/BirthdayHeader.css";

export default function BirthdayHeader({ curMonth }) {
  return (
    <div className="Header">
      <Link to={`/calendar/${curMonth <= 1 ? 12 : parseInt(curMonth) - 1}`}>
        이전 달
      </Link>
      <span>이번 달은 {curMonth}월 입니다!</span>
      <Link to={`/calendar/${curMonth >= 12 ? 1 : parseInt(curMonth) + 1}`}>
        다음 달
      </Link>
    </div>
  );
}
