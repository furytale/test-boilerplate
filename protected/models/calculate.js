module.exports = function calculate(Request) {
    //here goes the business logic
    //here you get the request data, apply all calculations and return the result
    const data = {foo: Request.query.foo, bar: Request.query.bar};
    return {data: data};
}