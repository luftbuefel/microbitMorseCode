let formattedReceivedString = ""
let receivedMessage = ""
let letter = ""
let dividingCharacter = ""
let finalMessage = ""
let message = ""
let receivedString = ""
input.onButtonPressed(Button.A, () => {
    message = "" + message + "*"
})
input.onGesture(Gesture.ScreenDown, () => {
    message = "" + message + dividingCharacter
})
input.onButtonPressed(Button.B, () => {
    message = "" + message + "-"
})
function decodeMessage()  {
    finalMessage = ""
    for (let index = 0; index <= formattedReceivedString.length; index++) {
        if (formattedReceivedString.charAt(index) != dividingCharacter) {
            letter = "" + letter + formattedReceivedString.charAt(index)
        } else {
            lookUpLetter()
        }
    }
}
input.onButtonPressed(Button.AB, () => {
    if (message != "") {
        radio.sendString(message)
        basic.showIcon(IconNames.Diamond)
        basic.showIcon(IconNames.SmallDiamond)
        basic.showIcon(IconNames.Diamond)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        message = ""
    }
})
function reset()  {
    finalMessage = ""
    letter = ""
    receivedString = ""
    formattedReceivedString = ""
}
function lookUpLetter()  {
    if (letter == "*-") {
        finalMessage = "" + finalMessage + "a"
    }
    if (letter == "-***") {
        finalMessage = "" + finalMessage + "b"
    }
    if (letter == "-*-*") {
        finalMessage = "" + finalMessage + "c"
    }
    if (letter == "-**") {
        finalMessage = "" + finalMessage + "d"
    }
    if (letter == "*") {
        finalMessage = "" + finalMessage + "e"
    }
    if (letter == "**-*") {
        finalMessage = "" + finalMessage + "f"
    }
    if (letter == "--*") {
        finalMessage = "" + finalMessage + "g"
    }
    if (letter == "****") {
        finalMessage = "" + finalMessage + "h"
    }
    if (letter == "**") {
        finalMessage = "" + finalMessage + "i"
    }
    if (letter == "*---") {
        finalMessage = "" + finalMessage + "j"
    }
    if (letter == "-*-") {
        finalMessage = "" + finalMessage + "k"
    }
    if (letter == "*-**") {
        finalMessage = "" + finalMessage + "l"
    }
    if (letter == "--") {
        finalMessage = "" + finalMessage + "m"
    }
    if (letter == "-*") {
        finalMessage = "" + finalMessage + "n"
    }
    if (letter == "---") {
        finalMessage = "" + finalMessage + "o"
    }
    if (letter == "*--*") {
        finalMessage = "" + finalMessage + "p"
    }
    if (letter == "--*-") {
        finalMessage = "" + finalMessage + "q"
    }
    if (letter == "*-*") {
        finalMessage = "" + finalMessage + "r"
    }
    if (letter == "***") {
        finalMessage = "" + finalMessage + "s"
    }
    if (letter == "-") {
        finalMessage = "" + finalMessage + "t"
    }
    if (letter == "**-") {
        finalMessage = "" + finalMessage + "u"
    }
    if (letter == "***-") {
        finalMessage = "" + finalMessage + "v"
    }
    if (letter == "*--") {
        finalMessage = "" + finalMessage + "w"
    }
    if (letter == "-**-") {
        finalMessage = "" + finalMessage + "x"
    }
    if (letter == "-*--") {
        finalMessage = "" + finalMessage + "y"
    }
    if (letter == "--**") {
        finalMessage = "" + finalMessage + "z"
    }
    if (letter == "-----") {
        finalMessage = "" + finalMessage + "0"
    }
    if (letter == "*----") {
        finalMessage = "" + finalMessage + "1"
    }
    if (letter == "**---") {
        finalMessage = "" + finalMessage + "2"
    }
    if (letter == "***--") {
        finalMessage = "" + finalMessage + "3"
    }
    if (letter == "****-") {
        finalMessage = "" + finalMessage + "4"
    }
    if (letter == "*****") {
        finalMessage = "" + finalMessage + "5"
    }
    if (letter == "-****") {
        finalMessage = "" + finalMessage + "6"
    }
    if (letter == "--***") {
        finalMessage = "" + finalMessage + "7"
    }
    if (letter == "---**") {
        finalMessage = "" + finalMessage + "8"
    }
    if (letter == "----*") {
        finalMessage = "" + finalMessage + "9"
    }
    letter = ""
}
radio.onDataPacketReceived( ({ receivedString }) =>  {
    finalMessage = ""
    if (receivedString.charAt(receivedString.length) != dividingCharacter) {
        formattedReceivedString = "" + receivedString + "/"
    } else {
        formattedReceivedString = receivedString
    }
    decodeMessage()
    basic.showString(finalMessage)
    reset()
})
dividingCharacter = "/"
receivedMessage = ""
receivedString = ""
formattedReceivedString = ""
radio.setGroup(1)
radio.setTransmitPower(7)
