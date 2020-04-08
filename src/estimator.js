const covid19ImpactEstimator = (data) => {
  const input = data;
<<<<<<< HEAD
  const impact = {
    currentlyInfected: 0,
    infectionsByRequestedTime: 0
  };
  const severeImpact = {
    currentlyInfected: 0,
    infectionsByRequestedTime: 0
  };

  const day = 30;
  let currInfI = impact.currentlyInfected;
  let currInfS = severeImpact.currentlyInfected;
  currInfI = input.reportedCases * 10;
  currInfS = input.reportedCases * 50;

  impact.infectionsByRequestedTime = currInfI * (2 ** (day / 3));
  severeImpact.infectionsByRequestedTime = currInfS * (2 ** (day / 3));

  return {
    data: input,
    impact,
    severeImpact
  };
};
=======
  



>>>>>>> 4e308cc34696dd63b2967680ea8b2fabd694112d

export default covid19ImpactEstimator;
