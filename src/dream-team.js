const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if( !Array.isArray(members) ) return false;

  let team = members.filter(function(e) {
    if(e && typeof e == 'string'){
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

module.exports = {
  createDreamTeam
};
