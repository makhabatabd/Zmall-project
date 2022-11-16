import React from "react"
import { CustomTooltipDiv, CustomTooltipLabel, CustomTooltipTitle } from './CustomTooltip.style';

type payload = {
  value: string
  chartType?: string
  color: string
  dataKey: string
  fill: string
  formatter?: string
  name: string
}

interface CustomTooltipTyp {
  active: boolean,
  payload: payload[],
  label: string
}

function CustomTooltip({ active, payload, label }: any) {
  if (active && payload && payload.length) {
    return (
      <CustomTooltipDiv>
        <CustomTooltipTitle >{label}</CustomTooltipTitle>
        <CustomTooltipLabel >{`Просмотры обявления: ${payload[1].value}`}</CustomTooltipLabel>
        <CustomTooltipLabel >{`Просмотры контактов: ${payload[0].value}`}</CustomTooltipLabel>
      </CustomTooltipDiv>
    );
  } else {
    return null
  }
}

export default CustomTooltip