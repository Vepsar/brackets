module.exports = function check(str, bracketsConfig) {
    let sarr = str.split('');
    const stack = [],
        open = [],
        close = [];
    repeat = [];

    bracketsConfig.forEach(element => {
        if (element[0] == element[1]) {
            repeat.push(element[0])
        }
        open.push(element[0]);
        close.push(element[1]);

    });

    for (var i = 0; i < str.length; i++) {
        const bracket = sarr[i];
        if (open.includes(bracket)) {
            if (repeat.includes(bracket) && stack[stack.length - 1] == bracket) {
                stack.pop()
                continue
            }
            stack.push(bracket);
            if (i == str.length - 1) { return false }
        } else {
            if (close.includes(bracket) || repeat.includes(bracket)) {
                if (stack.length == 0) {
                    return false
                } else {
                    for (var j = 0; j < close.length; j++) {
                        if (bracket == close[j] && stack[stack.length - 1] == open[j]) {
                            stack.pop()
                            break;
                        } else {
                            if (j < close.length - 1) { continue } else {
                                return false
                            }
                        }
                    }


                }
            }
        }
    }
    if (stack.length == 0) { return true }



}