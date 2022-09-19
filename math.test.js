const {divide,multiply,subtract,sum} = require("./math");

describe("Math", () => {
    it("should sum 2 + 2 to be 4", () => {
        const result = sum (2, 2);
        expect(result).toBe(4);
    });
    
    it("should multiply 2 * 3 to be 6 ", () => {
        const result = multiply (2, 3);
        expect(result).toBe(6);
    });
    
    it("should divide 10 / 2 to be 5 ", () => {
        const result = divide (10, 2);
        expect(result).toBe(5);
    });
    
    it("should subtract 5 - 3 to be 2 ", () => {
        const result = subtract (5, 3);
        expect(result).toBe(2);
    });
});

test("Array", () => {
    let days = ["Monday", "Tuesday", "Wednesday"];
    expect(days).toContain("Tuesday");
    expect(days).not.toContain("Friday");
});

