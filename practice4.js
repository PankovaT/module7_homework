//задание №4

function Electrodevice(name) {
    this.name = name,
    this.activation = function (connect) {
        if (connect === "on") {
            console.log(`Device is connected in socket`)
        } else {
            console.log(`Device is not connected in socket`)
        }
    },
    this.getEnSave = function (specified) {
        if (specified === "yes") {
            console.log(`The power saving mode is provided`)
        } else {
            console.log(`The power saving mode is not provided`)
        }
    }
};

Electrodevice.prototype.getPower = function (power) {
    console.log(`Power is ${power} wt`)
};

function ExtraElectrodevice(name) {
    this.name = name,
    this.maker = "LG",
    this.color = function (colour) {
        if (colour == "yellow") {
            console.log(`This is yellow`)
        } else {
            console.log(`This is not yellow`)
        }
    }
};

ExtraElectrodevice.prototype = new Electrodevice();

const lamp = new ExtraElectrodevice("lamp");
const comp = new ExtraElectrodevice("computer");

comp.getPower(500);
comp.activation("off");
comp.getEnSave("no");
comp.color ("yellow");
lamp.getPower(100);
lamp.activation("on");
lamp.getEnSave("yes");
lamp.color ("red");
