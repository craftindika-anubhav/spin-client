// export const sessionState = false;
// import React from "react";

// const SessionState = ({ bool = true }) => {
//   return bool;
// };

// export default SessionState;
let sessionState = false;
function setA(value) {
  sessionState = value;
}

export { sessionState, setA };
