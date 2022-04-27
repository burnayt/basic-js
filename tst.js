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
  
let r = dateSample2('10.98064159551825');
console.log(r);