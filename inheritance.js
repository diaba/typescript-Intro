// create class person
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.dance = function () {
        console.log("".concat(this.name, " is dancing ...."));
    };
    return Person;
}());
var brad = new Person("Brad");
brad.dance();
// inheritance by adding behavior of the person like funny
var FunnyPerson = /** @class */ (function (_super) {
    __extends(FunnyPerson, _super);
    function FunnyPerson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FunnyPerson.prototype.dance = function () {
        _super.prototype.dance.call(this);
        console.log('Funny!');
    };
    return FunnyPerson;
}(Person));
var kevin = new FunnyPerson("Kevin Heart");
kevin.dance();