

function bracetest(str){
    var open = {
        '(':')',
        '{':'}',
        '[':']'
    }
    var closed = {
        '}': true,
        ']': true,
        ')': true
    }
    var stack =[];

    for(var i =0;i<=length(str);i++){

        var char = str[i];
        if (open[char]){
            stack.push(char);
        }
        else if (closed[char]){
            if (open[stack.pop()] !== char) return false;
        }
    }
}