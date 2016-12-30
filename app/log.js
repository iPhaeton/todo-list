export default function (mod, str) {
    if (typeof str === "string") {
        console.log (`[${mod.i.split(/[\/\\]/).slice(-2).join("/")}] ${str}`);
    } else {
        console.log (`[${mod.i.split(/[\/\\]/).slice(-2).join("/")}]:`);
        console.log (str);
    }
};