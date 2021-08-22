const test = hello_world("welcome");
console.log(test + " [test]");

function hello_world(foo = "ipsum") {
  const bar = document.querySelector("." + foo);
  return foo + ": " + bar.dataset.hello;
}

const loremIpsum = (dolor) => {
  dolor = dolor || "dolor";
  let test = "123456";
  let val = document.querySelector("[data-" + dolor + "]").dataset.dolor;
  return `<p>Result [${test}]: ${test * val}</p>`;
};

const myDiv = document.querySelector("#mine");
myDiv.innerHTML = loremIpsum();
myDiv.style.backgroundColor = "cyan";
myDiv.addEventListener("click", () => {
  myDiv.querySelector("p").style.color = "red";
});

let abc = { x: "1", y: "2", z: "3" };
const x = abc.x;
const y = abc.y;
console.log(x == 1 && y >= 2 ? "yeah" : "boo");
