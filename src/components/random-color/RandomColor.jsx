import { useState } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState();
  const [] = useState();

  return (
    <div>
      <button>Create HEX Color</button>
      <button>Create RGB Color</button>
      <button>Generate Random Color</button>
    </div>
  );
}
