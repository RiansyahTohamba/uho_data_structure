// Dari inisiasi stack dengan jumlah maksimal elemen 10, cobalah implementasikan operasi push.

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
}
