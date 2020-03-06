function timeConversion(s) {
  const ampm = s.substring(s.length - 2, s.length);
  const timeArr = s.substring(0, s.length - 2).split(":");
  if (ampm === "PM") {
    return timeArr[0] === "12"
      ? timeArr.join(":")
      : parseInt(timeArr[0]) + 12 + ":" + timeArr[1] + ":" + timeArr[2];
  } else {
    return timeArr[0] === "12"
      ? "00:" + timeArr[1] + ":" + timeArr[2]
      : timeArr.join(":");
  }
}
