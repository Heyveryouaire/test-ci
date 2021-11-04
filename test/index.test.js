const assert = require("assert")

const calc = require("../index")

describe("Test add", () => {
    it("Should return 10", () => {
        assert.equal(calc.add(4,17), 10)
    })
})