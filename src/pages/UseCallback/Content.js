import { memo } from "react";


function Content({onIncrease}) {
  console.log('re-render');
  return (
    <div className="UseState" style={{padding: 32}}>
      <button onClick={onIncrease}>Increase</button>
    </div>
  );
}

export default memo(Content);
