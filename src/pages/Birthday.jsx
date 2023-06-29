import { useParams } from "react-router-dom";
import BirthdayHeader from "../components/BirthdayHeader";
import { useEffect, useState } from "react";
import BirthdayWeek from "../components/BirthdayWeek";

export default function Birthday() {
  const [todayValue, setTodayValue] = useState();

  let { curMonth } = useParams();
  const today = new Date();

  const dayInKorean = ["일", "월", "화", "수", "목", "금", "토"];

  const day = today.getDay();
  const date = today.getDate();

  const props = {
    day: day,
    dayInKorean: dayInKorean,
    date: date,
    curMonth: curMonth,
  };

  useEffect(() => {
    console.log(`${today.getMonth() + 1}월 ${today.getDate()}일`); // 날짜
  }, []);

  useEffect(() => {
    console.log(curMonth);
  }, [curMonth]);
  return (
    <>
      <BirthdayHeader curMonth={curMonth} />
      <BirthdayWeek
        day={day}
        dayInKorean={dayInKorean}
        date={date - 28}
        curMonth={curMonth}
      />
      <BirthdayWeek
        day={day}
        dayInKorean={dayInKorean}
        date={date - 7}
        curMonth={curMonth}
      />
      <BirthdayWeek
        day={day}
        dayInKorean={dayInKorean}
        date={date}
        curMonth={curMonth}
      />
      <BirthdayWeek
        day={day}
        dayInKorean={dayInKorean}
        date={date + 7}
        curMonth={curMonth}
      />
      <BirthdayWeek
        day={day}
        dayInKorean={dayInKorean}
        date={date + 14}
        curMonth={curMonth}
      />
    </>
  );
}
