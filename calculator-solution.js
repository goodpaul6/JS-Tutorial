function calculate(str) {
    var pos = 0;
    var tokens = str.split(' ');
    var stack = [];
    var vars = {};

    for(var i = 0; i < tokens.length; ++i) {
        var token = tokens[i];

        if(token == "+") {
            var b = stack.pop();
            var a = stack.pop();

            stack.push(a + b);
        } else if(token == "-") {            
            var b = stack.pop();
            var a = stack.pop();

            stack.push(a - b);
        } else if(token == "*") {
            var b = stack.pop();
            var a = stack.pop();

            stack.push(a * b);
        } else if(token == "/") {            
            var b = stack.pop();
            var a = stack.pop();

            stack.push(a / b);
        } else if(token.charAt(0) == '=') {
            var name = token.substr(1, token.length);
            vars[name] = stack.pop();
        } else {
            var num = Number.parseFloat(token);
            if(!isNaN(num)) {
                stack.push(num);
            } else {
                if(token in vars) {
                    stack.push(vars[token]);
                }
            }
        }
    }

    if(stack.length > 0) {
        return stack[stack.length - 1];
    }

    return 0;
}

$(document).ready(function() {
    $("#submit").click(function(e) {
        var str = $("#str").val();
        $("#result").text("Result: " + calculate(str).toString());        
    });
});