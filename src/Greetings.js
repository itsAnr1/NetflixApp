import React from "react";

function Greetings() {
  let curDate = new Date(2020, 5, 5, 14);
  curDate = curDate.getHours();
  let greeting = "";
  const cssStyle = {};

  if (curDate >= 1 && curDate < 12) {
    greeting = "Good Morning";
    cssStyle.color = "green";
  } else if (curDate > 12 && curDate < 19) {
    greeting = "Good Afternoon";
    cssStyle.color = "orange";
  } else {
    greeting = "Good Night";
    cssStyle.color = "black";
  }
  return (
    <div>
      <div>
        <h1>
          Hello Sir ,<span style={cssStyle}>{greeting}</span>
        </h1>
      </div>
    </div>
  );
}
export default Greetings;
