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
  const DIncome = input.region.avgDailyIncomeInUSD;
  const DIncPop = input.region.avgDailyIncomePopulation;
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
  const dayz = Math.trunc(days);
  const dayx = dayz / 3;
  const dayzs = Math.trunc(dayx);
  infecByTimeI = Math.trunc(currentlyInfectedI * (2 ** dayzs));
  infecByTimeS = Math.trunc(currentlyInfectedS * (2 ** dayzs));
  const casesI = 0.15 * infecByTimeI;
  const casesS = 0.15 * infecByTimeS;
  const availBed = 0.35 * totalBedSpace;
  const availBedTimeI = Math.trunc(availBed - casesI);
  const availBedTimeS = Math.trunc(availBed - casesS);
  const icuCasesI = Math.trunc(0.05 * infecByTimeI);
  const icuCasesS = Math.trunc(0.05 * infecByTimeS);
  const ventCasesI = Math.trunc(0.02 * infecByTimeI);
  const ventCasesS = Math.trunc(0.02 * infecByTimeS);
  const majorityI = DIncPop * infecByTimeI;
  const majorityS = DIncPop * infecByTimeS;
  const dollInFligI = Math.trunc((majorityI * DIncome) / dayz);
  const dollInFligS = Math.trunc((majorityS * DIncome) / dayz);
  return {
    data: input,
    impact: {
      severeCasesByRequestedTime: casesI,
      currentlyInfected: currentlyInfectedI,
      infectionsByRequestedTime: infecByTimeI,
      hospitalBedsByRequestedTime: availBedTimeI,
      casesForICUByRequestedTime: icuCasesI,
      casesForVentilatorsByRequestedTime: ventCasesI,
      dollarsInFlight: dollInFligI
    },
    severeImpact: {
      severeCasesByRequestedTime: casesS,
      currentlyInfected: currentlyInfectedS,
      infectionsByRequestedTime: infecByTimeS,
      hospitalBedsByRequestedTime: availBedTimeS,
      casesForICUByRequestedTime: icuCasesS,
      casesForVentilatorsByRequestedTime: ventCasesS,
      dollarsInFlight: dollInFligS
    }
  };
};

export default covid19ImpactEstimator;
