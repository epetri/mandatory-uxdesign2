
//Lösning ett
let startDate = new Date ("2018-07-01");
let endDate = new Date ("2018-08-31");


let getDateArray = function(start, end){
  let arr = new Array();
  var dt = new Date(start);
  while (dt <= end){
    arr.push(new Date(dt));
    dt.setDate(dt.getDate() +1);

  }
  return arr;
}
let dateArr = getDateArray(startDate, endDate);
    console.log(dateArr);

//lösning två
var getDates = function(startDate, endDate) {
  var dates = [],
      currentDate = startDate,
      addDays = function(days) {
        var date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
      };
  while (currentDate <= endDate) {
    dates.push(currentDate);
    currentDate = addDays.call(currentDate, 1);
  }
  return dates;
};

var dates = getDates(new Date(2018,07,01), new Date(2018,08,31));
dates.forEach(function(date) {
  console.log(date);
});

//Viktors Lösning
const year = "2018";

for (let month = 7; month <= 8; month += 1) {
  let monthStr = month;
  if ( month < 10){
    monthStr = "0" + monthStr;
  }
  for (let day = 1; day <= 31; day += 1 ) {
    let dayStr = day;
    if ( day < 10 ) {
      dayStr = "0" + dayStr;
    }
    dates.push(year +"-"+ monthStr + "-" + dayStr);
  }
}
console.log(dates);

//Viktors lösning 2



function formatNumber(val){
  if(val < 10) return "0" + val;
  return val;
}

 function datesArray(){
   const year = "2018";
   let dates = [];
   for (let month = 7; month <= 8; month += 1) {
     for (let day = 1; day <= 31; day += 1 ) {
       dates.push(year + "-" + formatNumber(month) + "-" + formatNumber(day));
     }
   }
return dates;
}
console.log(datesArray());
