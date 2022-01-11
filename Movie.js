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
var Movie = /** @class */ (function () {
    function Movie(title, length) {
        this.length = length;
        this.title = title;
    }
    Movie.prototype.getTitle = function () {
        return this.title;
    };
    Movie.prototype.play = function () {
        console.log(this.title + " can " + "Play " + this.length);
    };
    return Movie;
}());
var ActionAdventureMovie = /** @class */ (function (_super) {
    __extends(ActionAdventureMovie, _super);
    function ActionAdventureMovie(title, length, effect) {
        var _this = _super.call(this, title, length) || this;
        _this.effect = effect;
        return _this;
    }
    ActionAdventureMovie.prototype.play = function () {
        console.log(_super.prototype.getTitle.call(this) + " has length of " + this.length + " and effect of " + this.effect);
    };
    return ActionAdventureMovie;
}(Movie));
var movie = new ActionAdventureMovie('Ocean seven', 120, 'Bomb');
movie.play();
