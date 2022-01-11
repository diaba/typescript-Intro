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
var Building = /** @class */ (function () {
    function Building(type, squareFeet) {
        this.squareFeet = squareFeet;
        this.type = type;
    }
    Building.prototype.addTenant = function () {
        console.log("Add tenant");
    };
    return Building;
}());
var ApartmentBuilding = /** @class */ (function (_super) {
    __extends(ApartmentBuilding, _super);
    function ApartmentBuilding(type, squareFeet, apartmentNumber) {
        var _this = _super.call(this, type, squareFeet) || this;
        _this.apartmentNumber = apartmentNumber;
        return _this;
    }
    ApartmentBuilding.prototype.addTenant = function () {
        _super.prototype.addTenant.call(this);
    };
    ApartmentBuilding.prototype.getApartmentNumber = function () {
        console.log("The apartment number is ".concat(this.apartmentNumber));
    };
    ApartmentBuilding.prototype.getSquareFeet = function () {
        console.log("The square feet is ".concat(this.squareFeet));
    };
    return ApartmentBuilding;
}(Building));
var OfficeBuilding = /** @class */ (function (_super) {
    __extends(OfficeBuilding, _super);
    function OfficeBuilding(type, squareFeet, officeNumber) {
        var _this = _super.call(this, type, squareFeet) || this;
        _this.officeNumber = officeNumber;
        return _this;
    }
    OfficeBuilding.prototype.addTenant = function () {
        _super.prototype.addTenant.call(this);
    };
    OfficeBuilding.prototype.getOfficeNumber = function () {
        console.log("The office number is ".concat(this.officeNumber));
    };
    OfficeBuilding.prototype.getSquareFeet = function () {
        console.log("The square feet is ".concat(this.squareFeet));
    };
    return OfficeBuilding;
}(Building));
