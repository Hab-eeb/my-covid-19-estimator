const covid19ImpactEstimator = (data) => {
  const input = data;
  const Week = 'weeks';
  const Months = 'months';
  let currentlyInfectedI = 0;
  let infecByTimeI = 0;
  let currentlyInfectedS = 0;
  let infecByTimeS = 0;
  const perType = input.periodType;
  const day = input.timeToElapse;
  let days = 0;
  currentlyInfectedI = input.reportedCases * 10;
  currentlyInfectedS = input.reportedCases * 50;

  if (perType === Months) {
    days = 30 * day;
  } else if (perType === Week) {
    days = 7 * day;
  } else {
    days = day;
  }
  const dayz = Math.round(days);
  const dayx = dayz / 3;
  const dayzs = Math.round(dayx);
  infecByTimeI = currentlyInfectedI * (2 ** dayzs);
  infecByTimeS = currentlyInfectedS * (2 ** dayzs);
  return {
    data: input,
    impact: {
      currentlyInfected: currentlyInfectedI,
      infectionsByRequestedTime: infecByTimeI
    },
    severeImpact: {
      currentlyInfected: currentlyInfectedS,
      infectionsByRequestedTime: infecByTimeS
    }
  };
};

export default covid19ImpactEstimator;
