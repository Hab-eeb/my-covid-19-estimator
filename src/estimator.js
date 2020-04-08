const covid19ImpactEstimator = (data) => {
  const input = data;
  const Week = 'week';
  const Months = 'months';

  let impact = {
    currentlyInfected: 0,
    infectionsByRequestedTime: 0
  };
  let severeImpact = {
    currentlyInfected: 0,
    infectionsByRequestedTime: 0
  };

  const rImpact = impact;
  const rSevereImpact = severeImpact;
  const perType = input.periodType;
  const day = input.timeToElapse;
  let days = 0;
  let currInfI = rImpact.currentlyInfected;
  let currInfS = rSevereImpact.currentlyInfected;
  currInfI = input.reportedCases * 10;
  currInfS = input.reportedCases * 50;

  if (perType === Months) {
    days = 30 * day;
  } else if (perType === Week) {
    days = 7 * day;
  } else {
    days = day;
  }

  rImpact.infectionsByRequestedTime = currInfI * (2 ** (days / 3));
  rSevereImpact.infectionsByRequestedTime = currInfS * (2 ** (days / 3));
  impact = rImpact;
  severeImpact = rSevereImpact;
  return {
    input,
    impact,
    severeImpact
  };
};

export default covid19ImpactEstimator;
