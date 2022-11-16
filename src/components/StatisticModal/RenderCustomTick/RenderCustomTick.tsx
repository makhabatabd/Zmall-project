import React from 'react';

function RenderCustomTick(props: any) {
  return (
    <text orientation='bottom' width={props.width} height={props.height} type='category' x={props.x} y={props.y}
          stroke='none' fill='#666' transform={`rotate(-90, ${props.x}, ${props.y})`}
          className='recharts-text recharts-cartesian-axis-tick-value' textAnchor='middle'>
      <tspan x={props.x} dy={'0.3rem'}>{props.payload.value.slice(0, -5)}</tspan>
    </text>
  );
}

export default RenderCustomTick;