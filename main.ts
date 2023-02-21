input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P0, 5)
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P0, 90)
})
basic.showIcon(IconNames.Happy)
