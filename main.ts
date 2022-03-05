input.onButtonPressed(Button.A, function () {
    music.setBuiltInSpeakerEnabled(false)
    basic.showIcon(IconNames.Happy)
    music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Once)
})
input.onPinPressed(TouchPin.P2, function () {
    music.setBuiltInSpeakerEnabled(false)
    basic.showLeds(`
        # # # # #
        . . . # .
        . . # . .
        . # . . .
        # # # # #
        `)
    music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
})
input.onButtonPressed(Button.B, function () {
    music.setBuiltInSpeakerEnabled(false)
    basic.showIcon(IconNames.Happy)
    music.stopAllSounds()
})
input.onPinPressed(TouchPin.P1, function () {
    music.setBuiltInSpeakerEnabled(false)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Once)
})
