const covid19ImpactEstimator = (data) => {
  const input = data;
  const impact;
  const severeImpact;
  let days = 30 ;
  const factor; 


    impact.currentlyInfected = input.reportedCases * 10 ;
    severeImpact.currentlyInfected = input.reportedCases * 50;

    factor = days/3;
    let infectionsByTimeI= impact.infectionsByRequestedTime;
    let infectionsByTimeSI = severeImpact.infectionsByRequestedTime
    infectionsByTimeI = impact.currentlyInfected * Math.pow(2,factor);
    infectionsByTimeSI = severeImpact.currentlyInfected * Math.pow(2,factor);






    return{
        data:{input},
        impact:{ },
        severeImpact :{},
    }
};






export default covid19ImpactEstimator;
