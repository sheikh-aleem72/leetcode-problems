/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    let steps = 0;
    for(let i = 0;i<logs.length;i++){
        if(logs[i] == "../" && steps > 0){
            steps--
        }else if(logs[i] != "../" && logs[i] != "./"){
            steps++
        }
    }
    return steps;
};