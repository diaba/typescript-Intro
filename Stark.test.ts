import rewire from "rewire"
const Stark = rewire("./Stark")
const printName = Stark.__get__("printName")
// @ponicode
describe("printName", () => {
    test("0", () => {
        let result: any = printName('stark')
        expect(result).toBe('start')
    })
})
