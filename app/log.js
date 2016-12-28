export default function (mod, str) {
  console.log (`[${mod.i.split(/[\/\\]/).slice(-2).join("/")}] ${str}`);
};