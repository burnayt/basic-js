list = [ [0, 1, '^^'], [0, '^^', 2], ['^^', 1, 2] ]

function countCats(backYard) 
{
    let catsNumber = 0;
    for (let i = 0; i < backYard.length; i++) {
        for (let j = 0; j <backYard[i].length; j++){
            if(backYard[i][j] == '^^'){
                catsNumber++;
            }
        }
        
    }
    return catsNumber;
     
}


const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

function dateSample(sampleActivity) {
    if (typeof sampleActivity !== 'string' || sampleActivity==undefined) return false;
  
  let b = parseInt(sampleActivity);
  
  if(!Number.isInteger(b) || b <= 0 || b >= 15) return false;
  
  let a = Math.log(MODERN_ACTIVITY/b);
  let k = 0.693/HALF_LIFE_PERIOD;
  return Math.ceil( a/k);
  }
  
  function dateSample2(sampleActivity) {
    if (typeof sampleActivity !== 'string' || sampleActivity==undefined) return false;
  
  let b = parseFloat(sampleActivity);
  
  if(isNaN(b) || b <= 0 || b >= 15) return false;
  
  let a = Math.log(MODERN_ACTIVITY/b);
  let k = 0.693/HALF_LIFE_PERIOD;
  return Math.ceil( a/k);
  }
  
  function createDreamTeam(members) {
    if( !Array.isArray(members) ) return false;
  
    let team = members.filter(function(e) {
      if(e && typeof e == 'string') {
        return true;
      }
      return false;
    })
    team = team.map(function(e) {
  
      return e.trim()[0].toUpperCase();
    })
    return team.sort((a,b) =>  {
      if ( a>=b ) return 1;
      return -1;
    }).join('');
    
  }
r = createDreamTeam([
    'amelia',
    'ruby',
    'lily',
    'grace',
    'millie',
    'daisy',
    'freya',
    'erin',
    'megan',
    'jasmine',
    'brooke',
  ])
  function getSeason(date ) {  
  
    console.debug('before', date);
  
  
    if(!date) return 'Unable to determine the time of year!';
    if(!(date instanceof Date) ) return 'Invalid date!';
  //'Unable to determine the time of year!'
  console.debug('afte', date);

    let month = date.getMonth();
    if(month < 2 || month == 11) return 'winter';
    if(month < 5 ) return 'spring';
    if(month < 8 ) return 'summer';
    if(month < 11 ) return 'autumn';
  }
//   function getSeason(date ) {  
  
//     try{
//       console.log(date)
//       if(!date) return 'Unable to determine the time of year!';
//       if(!(date instanceof Date) ) return 'Invalid date!';
//     //'Unable to determine the time of year!'
      
  
//       let month = date.getMonth();
//       if(month < 2 || month == 11) return 'winter';
//       if(month < 5 ) return 'spring';
//       if(month < 8 ) return 'summer';
//       if(month < 11 ) return 'autumn';
//     }
//     catch{
//       throw 'Invalid date!';
//     }
    
//   }
function fakeDateDestroyer(d){

    let date = new Date(1456, 0, 2, 1, 50, 9, 238);
    for (const e in d) {
        
    }
    for (const e of date) {
        
    }
}
const fakeDate = {
    toString() {
        return Date.prototype.toString.call(new Date());
    },
    [Symbol.toStringTag]: 'Date'
};

Object.setPrototypeOf(fakeDate, Object.getPrototypeOf(new Date()));

console.log(fakeDateDestroyer(fakeDate));