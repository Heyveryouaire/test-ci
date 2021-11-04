const assert = require("assert")

const calc = require("../index")

describe("Test add", () => {
    it("Should return 10", () => {
        assert.equal(calc.add(3,6), 10)
    })
})