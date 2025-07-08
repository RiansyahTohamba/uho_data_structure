const Stack = require('./stack')

function IsValidParentheses(s) {
    //beginanswer
    if (s.length % 2 != 0 || s.length == 0) {
        return false
    }

    var parenthesesMap = {
        "(": ")",
        "[": "]",
        "{": "}",
    }

    var stack = new Stack()

    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) in parenthesesMap) {
            stack.push(parenthesesMap[s.charAt(i)])
            continue
        }

        if (stack.data.length == 0) {
            return false
        }

        let poppedValue = stack.pop()
        if (poppedValue != s.charAt(i)) {
            return false
        }
    }

    return stack.data.length == 0
    //endanswer
}

module.exports = {
    IsValidParentheses
}