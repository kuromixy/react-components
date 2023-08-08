import React from "react";
function GetTime() {
  let timeNow = new Date().toLocaleTimeString();
  let [time, updateTime] = React.useState(timeNow);
  setInterval(getTime, 1000);
  function getTime() {
    let newTime = new Date().toLocaleTimeString();
    updateTime(newTime);
  }
  return <> {time} </>;
}
export default GetTime;