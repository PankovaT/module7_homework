//задание №5

class Electrodevice {
    constructor(name) {
        this.name = name;
    }
    getActivation = function (connect) {
        if (connect === "on") {
            console.log(`Device is connected in socket`)
        } else {
            console.log(`Device is not connected in socket`)
        }
    };
    getEnSave = function (specified) {
        if (specified === "yes") {
            console.log(`The power saving mode is provided`)
        } else {
            console.log(`The power saving mode is not provided`)
        }
    };
    getPower = function (power) {
        console.log(`Power is ${power} wt`)
    };
};

class ExtraElectrodevice extends Electrodevice {
    constructor() {
        super(name);
        this.maker = "LG";
    };
    getColor = function (colour) {
        if (colour == "yellow") {
            console.log(`This is yellow`)
        } else {
            console.log(`This is not yellow`)
        }
    };
}

const lamp = new ExtraElectrodevice("lamp", "red");
const comp = new ExtraElectrodevice("computer", "yellow");

comp.getPower(500);
comp.getActivation("off");
comp.getEnSave("no");
comp.getColor("yellow");
lamp.getPower(100);
lamp.getActivation("on");
lamp.getEnSave("yes");
lamp.getColor("red");