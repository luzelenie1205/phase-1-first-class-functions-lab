// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']
function returnFirstTwoDrivers(drivers){
const a= [drivers[0],drivers[1]]
    return a
}

function returnLastTwoDrivers(drivers){
    //const last= [drivers[-2],drivers[-1]]

    return drivers.slice(-2)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer){
    return function (){
        return integer*integer 
    }
}
//const createFareMultiplier = fare=> function(farer) { return fare * fare };
const fareDoubler = fare => fare*2
const fareTripler = fare => fare *3
//function selectDifferentDrivers(drivers){
  //return function returnFirstTwoDrivers(){
    //  return 


function selectDifferentDrivers(drivers,selectingDrivers) {
//   const first=[ selectingDrivers[0],selectingDrivers[1]]
//  function returnLastTwoDrivers(drivers){
//     const last= [drivers[2],drivers[3]]
//     return last
//  }
    return selectingDrivers(drivers)
}
