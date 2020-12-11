const returnFirstTwoDrivers = function(drivers){
 return drivers.slice(0, 2)
};

const returnLastTwoDrivers = function(drivers){
 return drivers.slice(-2)
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(int){
  return function(value){
      return int * value
  }
};

function fareDoubler(fare){
    return fare * 2
};

function fareTripler(fare){
    return fare * 3
};

function selectDifferentDrivers(drivers, func){
    return func(drivers)   
};