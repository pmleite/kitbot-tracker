let dif = 0
let last_P = 0
let D = 0
let P = 0
KitiBot.Run(Dir.stop, 0)
basic.pause(3000)
KitiBot.SensorCalibrated()
basic.forever(function () {
    P = KitiBot.readLine() - 2000
    D = P - last_P
    last_P = P
    dif = Math.idiv(P, 15) + Math.idiv(D, 15)
    dif = Math.max(dif, -150)
    dif = Math.min(dif, 150)
    if (dif > 0) {
        KitiBot.MotorRun(Motors.M1, 150)
        KitiBot.MotorRun(Motors.M2, 150 - dif)
    } else {
        KitiBot.MotorRun(Motors.M1, 150 + dif)
        KitiBot.MotorRun(Motors.M2, 150)
    }
})
