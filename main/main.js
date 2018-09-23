function rtrim(str){ 
    return str.replace(/(\s*$)/g,"");
}
module.exports = function main(sting) {
    var lcdTotal = [
        ['._. ','|.| ','|_| '],
        ['... ','..| ','..| '],
        ['._. ','._| ','|_. '],
        ['._. ','._| ','._| '],
        ['... ','|_| ','..| '],
        ['._. ','|_. ','._| '],
        ['._. ','|_. ','|_| '],
        ['._. ','..| ','..| '],
        ['._. ','|_| ','|_| '],
        ['._. ','|_| ','..| ']];
    var result = '';
    for (var i = 0; i<3; i++){
        for (var num of sting){
            num = Number(num);
            result += lcdTotal[num][i];
        }
        result = rtrim(result);
        result += '\n';
    }
        return result;
};