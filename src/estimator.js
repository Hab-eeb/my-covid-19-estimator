const covid19ImpactEstimator = (data) => {
  const input = data;
  const Week = 'weeks';
  const Months = 'months';
  let currentlyInfectedI = 0;
  let infecByTimeI = 0;
  let currentlyInfectedS = 0;
  let infecByTimeS = 0;
  const totalBedSpace = input.totalHospitalBeds;
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
  let dayx = dayz / 3;
  if (dayz % 3 === 2) {
    dayx -= 0.3;
  }
  const dayzs = Math.round(dayx);
  infecByTimeI = Math.round(currentlyInfectedI * (2 ** dayzs));
  infecByTimeS = Math.round(currentlyInfectedS * (2 ** dayzs));
  const casesI = 0.15 * infecByTimeI;
  const casesS = 0.15 * infecByTimeS;
  const availBed = 0.35 * totalBedSpace;
  const availBedTimeI = Math.floor(availBed - casesI);
  const availBedTimeS = Math.floor(availBed - casesS);
  return {
    data: input,
    impact: {
      severeCasesByRequestedTime: casesI,
      currentlyInfected: currentlyInfectedI,
      infectionsByRequestedTime: infecByTimeI,
      hospitalBedsByRequestedTime: availBedTimeI
    },
    severeImpact: {
      severeCasesByRequestedTime: casesS,
      currentlyInfected: currentlyInfectedS,
      infectionsByRequestedTime: infecByTimeS,
      hospitalBedsByRequestedTime: availBedTimeS
    }
  };
};

export default covid19ImpactEstimator;
