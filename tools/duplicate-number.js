
exports.init = function(array){
    const temp = [array.length];
    for (let i = 0; i < array.length; i++) {
        const ie = array[i];

        let flag = false;
        for (let j = 0; j < temp.length; j++) {
            const je = temp[j];
            
            if (je.key == ie){
                je.value++;
                flag = true;
                break;
            }
        }

        if (!flag){
            temp.push({
                key: ie,
                value: 1
            });
        }
    }
    return temp.filter(x => x.value > 1);
}