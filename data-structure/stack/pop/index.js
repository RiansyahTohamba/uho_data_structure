// Dari inisiasi stack dengan jumlah maksimal elemen 10, cobalah implementasikan operasi pop.

module.exports = class Stack {
    constructor() {
        //beginanswer
        this.data = []
        this.top = -1
        this.size = 10
        //endanswer
    }

    push(elemen) {
        //beginanswer
        if (this.data.length == this.size) {
            throw "stack overflow"
        } else {
            this.top += 1
            return this.data.push(elemen)
        }
        //endanswer
    }

    pop() {
        //beginanswer
        if (this.top == -1) {
            throw "stack underflow"
        } else {
            let poppedValue = this.data.pop()
            this.top -= 1
            return poppedValue
        }
        //endanswer
    }
}
