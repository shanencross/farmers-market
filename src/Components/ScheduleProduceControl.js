import React from "react";
import MarketSchedule from "./MarketSchedule";
import SeasonalProduce from "./SeasonalProduce";

function ScheduleProduceControl() {
  return (
    <React.Fragment>
      <MarketSchedule />
      <SeasonalProduce />
    </React.Fragment>
  );
}

export default ScheduleProduceControl;