input.onButtonPressed(Button.A, function () {
    x += 1
    if (led.point(x, y)) {
        if (led.pointBrightness(x - 1, y) == 50) {
            led.unplot(x - 1, y)
        }
        if (led.pointBrightness(x, y) == 255 || led.pointBrightness(x, y) == 175) {
            x += 1
            if (led.pointBrightness(x, y) == 255 || led.pointBrightness(x, y) == 175) {
                x += 1
                if (led.pointBrightness(x, y) == 255 || led.pointBrightness(x, y) == 175) {
                    x += 1
                    led.plotBrightness(x, y, 50)
                }
                led.plotBrightness(x, y, 50)
            }
            led.plotBrightness(x, y, 50)
        }
    } else {
        led.plotBrightness(x, y, 50)
        if (led.pointBrightness(x - 1, y) == 50) {
            led.unplot(x - 1, y)
        }
    }
})
function vyhral1 () {
    basic.showString("VYHRAL HRAC CISLO 1!")
}
input.onButtonPressed(Button.AB, function () {
    if (hrac) {
        led.plotBrightness(x, y, 255)
    } else {
        led.plotBrightness(x, y, 175)
    }
    x = 0
    y = 0
    led.plotBrightness(0, 0, 50)
    hrac = !(hrac)
})
input.onButtonPressed(Button.B, function () {
    y += 1
    if (led.point(x, y)) {
        if (led.pointBrightness(x, y - 1) == 50) {
            led.unplot(x, y - 1)
        }
        if (led.pointBrightness(x, y) == 255 || led.pointBrightness(x, y) == 175) {
            y += 1
            if (led.pointBrightness(x, y) == 255 || led.pointBrightness(x, y) == 175) {
                y += 1
                if (led.pointBrightness(x, y) == 255 || led.pointBrightness(x, y) == 175) {
                    y += 1
                    led.plotBrightness(x, y, 50)
                }
                led.plotBrightness(x, y, 50)
            }
            led.plotBrightness(x, y, 50)
        }
    } else {
        led.plotBrightness(x, y, 50)
        if (led.pointBrightness(x, y - 1) == 50) {
            led.unplot(x, y - 1)
        }
    }
})
function vyhral2 () {
    basic.showString("VYHRAL HRAC CISLO 2!")
}
let y = 0
let x = 0
let hrac = false
hrac = true
led.plotBrightness(0, 0, 50)
x = 0
y = 0
if (x > 4) {
    x = 4
}
if (y > 4) {
    y = 4
}
basic.forever(function () {
    if (x == 5) {
        x = 0
        if (led.pointBrightness(x, y) == 255 || led.pointBrightness(x, y) == 175) {
            x += 1
            if (led.pointBrightness(x, y) == 255 || led.pointBrightness(x, y) == 175) {
                x += 1
                if (led.pointBrightness(x, y) == 255 || led.pointBrightness(x, y) == 175) {
                    x += 1
                    if (led.pointBrightness(x, y) == 255 || led.pointBrightness(x, y) == 175) {
                        x += 1
                        led.plotBrightness(x, y, 50)
                    }
                    led.plotBrightness(x, y, 50)
                }
                led.plotBrightness(x, y, 50)
            }
            led.plotBrightness(x, y, 50)
        }
        led.plotBrightness(x, y, 50)
    } else if (y == 5) {
        y = 0
        if (led.pointBrightness(x, y) == 255 || led.pointBrightness(x, y) == 175) {
            y += 1
            if (led.pointBrightness(x, y) == 255 || led.pointBrightness(x, y) == 175) {
                y += 1
                if (led.pointBrightness(x, y) == 255 || led.pointBrightness(x, y) == 175) {
                    y += 1
                    if (led.pointBrightness(x, y) == 255 || led.pointBrightness(x, y) == 175) {
                        y += 1
                        led.plotBrightness(x, y, 50)
                    }
                    led.plotBrightness(x, y, 50)
                }
                led.plotBrightness(x, y, 50)
            }
            led.plotBrightness(x, y, 50)
        }
        led.plotBrightness(x, y, 50)
    }
    for (let _index = 0; _index <= 4; _index++) {
        for (let _indey = 0; _indey <= 4; _indey++) {
            if (led.pointBrightness(_index, _indey - 1) == 255 && led.pointBrightness(_index, _indey) == 255 && led.pointBrightness(_index, _indey + 1) == 255) {
                vyhral1()
            } else if (led.pointBrightness(_index - 1, _indey) == 255 && led.pointBrightness(_index, _indey) == 255 && led.pointBrightness(_index + 1, _indey) == 255) {
                vyhral1()
            } else if (led.pointBrightness(_index - 1, _indey - 1) == 255 && led.pointBrightness(_index, _indey) == 255 && led.pointBrightness(_index + 1, _indey + 1) == 255) {
                vyhral1()
            } else if (led.pointBrightness(_index - 1, _indey + 1) == 255 && led.pointBrightness(_index, _indey) == 255 && led.pointBrightness(_index + 1, _indey - 1) == 255) {
                vyhral1()
            }
            if (led.pointBrightness(_index, _indey - 1) == 175 && led.pointBrightness(_index, _indey) == 175 && led.pointBrightness(_index, _indey + 1) == 175) {
                vyhral2()
            } else if (led.pointBrightness(_index - 1, _indey) == 175 && led.pointBrightness(_index, _indey) == 175 && led.pointBrightness(_index + 1, _indey) == 175) {
                vyhral2()
            } else if (led.pointBrightness(_index - 1, _indey - 1) == 175 && led.pointBrightness(_index, _indey) == 175 && led.pointBrightness(_index + 1, _indey + 1) == 175) {
                vyhral2()
            } else if (led.pointBrightness(_index - 1, _indey + 1) == 175 && led.pointBrightness(_index, _indey) == 175 && led.pointBrightness(_index + 1, _indey - 1) == 175) {
                vyhral2()
            }
        }
    }
})
