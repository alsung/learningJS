// child scope has access to parent scope
// BUT parent scope does NOT have access to child scope

const first = () => {
    const greet = 'Hi';
    const second = () => {
        const name = "bobby";
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();

// Closures - a function ran. the function executed. its never going to run again
// BUT its going to remember that there are references to those vars
// so the child scope always has access to the parent scope

// Currying
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const multipleBy5 = curriedMultiply(5);

// Compose
const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;
compose(sum, sum)(5);

// avoiding Side Effects, functional purity
var a = 1;
function b() {
    a = 2;
}