import { Link } from "react-router-dom";

export default function Mainpage() {
  return (
    <div>
      <h1> 안녕하세요 생일이나 적으세요</h1>
      <Link to={`/calendar/1`}>1월로 가기</Link>
    </div>
  );
}
