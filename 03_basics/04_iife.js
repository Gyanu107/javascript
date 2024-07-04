// Immediately Invoked Function Expression (IIFE)

(function code() {
    // named IIFE
    console.log(`DB Connected`)
})();


( (name) => {
    console.log(`DB connected again ${name}!`);
}) ('Hulk')
