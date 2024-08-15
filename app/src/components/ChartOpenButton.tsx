import React from "react";
import { useStyleContext } from "./Context";

const ChartOpenButton = (props): React.Component=> {
  const { setMobileChart } = props;
  const style = useStyleContext();
  return (
    <div className={'chartOpenButtonCon'}>
      <p className={'chartOpenButton'}>Open Chart</p>
    </div>
  );
};

export default ChartOpenButton;
