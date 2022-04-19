const state = {
  a: "apple",
  b: "banana",
  c: "city",
  d: "dom",
  e: "end",
  f: "forEach",
};
// w3 select option

const reaction = (element) => {
  let altElemet = element === "key" ? "value" : "key";
  let newKey = document.getElementById(element).value;
  document.getElementById(altElemet).value = newKey;
};

const render = (ele, tmp) => {
  ele.innerHTML = tmp;
};

const createDropDown = () => {
  const keyele = document.getElementById("key");
  const valele = document.getElementById("value");
  let keystmp = "";
  let valstmp = "";
  Object.keys(state).forEach((key) => {
    keystmp += `<option value="${key}">${key}</option>`;
    valstmp += `<option value="${key}">${state[key]}</option>`;
  });

  render(keyele, keystmp);
  render(valele, valstmp);
};

createDropDown();

//// Alternative in caase you dont put an event listener inside html

// const state = {
//   a: "apple",
//   b: "banana",
//   c: "city",
//   d: "dom",
//   e: "end",
//   f: "forEach",
// };
// // w3 select option

// const render = (ele, tmp) => {
//   ele.innerHTML = tmp;
// };

// const createDropDown = () => {
//   const keyele = document.getElementById("key");
//   const valele = document.getElementById("value");
//   let keystmp = "";
//   let valstmp = "";
//   Object.keys(state).forEach((key) => {
//     keystmp += `<option value="${key}">${key}</option>`;
//     valstmp += `<option value="${key}">${state[key]}</option>`;
//   });

//   render(keyele, keystmp);
//   render(valele, valstmp);
// };

// const keyele = document.getElementById("key");
// const valele = document.getElementById("value");

// const reaction = (element) => {
//   console.log(element);
//   altElemet = element === "key" ? "value" : "key";
//   newKey = document.getElementById(element).value;
//   document.getElementById(altElemet).value = newKey;
// };

// keyele.addEventListener("change", (e) => {
//   console.log(e);
//   reaction("key");
// });
// valele.addEventListener("change", (e) => {
//   console.log(e);
//   reaction("value");
// });

// createDropDown();
