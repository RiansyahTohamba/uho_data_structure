module.exports = class TextEditor {
    constructor() {
        //beginanswer
        this.undoStack = []
        this.redoStack = []
        //endanswer
    }

    write(c) {
        //beginanswer
        this.redoStack.data = []
        this.undoStack.push(c)
        //endanswer
    }

    read() {
        //beginanswer
        let tempStack = []
        var output = ""
        while (this.undoStack.length > 0) {
            let c = this.undoStack.pop()
            tempStack.push(c)
        }

        while (tempStack.length > 0) {
            let c = tempStack.pop()
            output += c
            this.undoStack.push(c)
        }

        return output
        //endanswer
    }

    undo() {
        //beginanswer
        if (this.undoStack.length > 0) {
            let c = this.undoStack.pop()
            this.redoStack.push(c)
        }
        //endanswer
    }
    
    redo() {
        //beginanswer
        if (this.redoStack.length > 0) {
            let c = this.redoStack.pop()
            this.undoStack.push(c)
        }
        //endanswer
    }
}
