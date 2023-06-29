import { useEffect, useState } from "react";
import "../styles/BirthdayWeek.css";
export default function BirthdayWeek({ day, dayInKorean, date, curMonth }) {
  const [curMonthDays, setCurMonthDays] = useState(0);

  useEffect(() => {
    console.log(typeof curMonth);
  }, []);

  useEffect(() => {
    let intCurMonth = parseInt(curMonth);
    if (intCurMonth == 2) {
      setCurMonthDays(28);
    } else if (curMonth <= 7) {
      setCurMonthDays(curMonth % 2 == 1 ? 31 : 30);
    } else {
      setCurMonthDays(curMonth % 2 == 1 ? 31 : 30);
    }
  }, [curMonth]);

  return (
    <div className="Calendar">
      {dayInKorean.map((week, index) => {
        const targetDate = date - day + index;
        return (
          <div className="calendarDay" key={index}>
            {curMonthDays < targetDate ? targetDate - curMonthDays : targetDate}
            일
          </div>
        );
      })}
    </div>
  );
}
