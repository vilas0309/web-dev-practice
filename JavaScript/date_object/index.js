//Date objects = Objects that conatin values that represent dates and times
//               These date objects can be changed and formatted

//Date(year,month,day,hour,minute,second,ms)
// const date= new Date(2026,0,1,2,3,4,5)
// const date=new Date("2026-01-01T12:00:00Z")
// const date=new Date(0)
// const date=new Date(1780000000000)

// const date=new Date()

// const year=date.getFullYear();
// const month=date.getMonth();
// const day=date.getDate();
// const hour=date.getHours();
// const min=date.getMinutes();
// const sec=date.getSeconds();
// const dayofWeek=date.getDay();

// console.log(date)
// console.log(month)
// console.log(day)
// console.log(hour)
// console.log(min)
// console.log(sec)
// console.log(dayofWeek)

const date=new Date()

date.setFullYear(2026);
date.setMonth(0);
date.setDate(1);
date.setHours(2);
date.setMinutes(3);
date.setSeconds(4);

console.log(date)