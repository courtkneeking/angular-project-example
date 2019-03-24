"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ColorDirective = /** @class */ (function () {
    function ColorDirective(el) {
        var x = el.nativeElement.style;
        this.getColor(x);
    }
    ColorDirective.prototype.getColor = function (color) {
        var _this = this;
        color.backgroundColor = this.makeRandomColor();
        setTimeout(function () {
            _this.getColor(color);
        }, 2000);
    };
    ColorDirective.prototype.makeRandomColor = function () {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };
    ColorDirective = __decorate([
        core_1.Directive({
            selector: '[background-color]',
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], ColorDirective);
    return ColorDirective;
}());
exports.ColorDirective = ColorDirective;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3IuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29sb3IuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQThEO0FBSTlEO0lBQ0ksd0JBQVksRUFBYztRQUN0QixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUMvQixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxpQ0FBUSxHQUFSLFVBQVMsS0FBSztRQUFkLGlCQUtDO1FBSkcsS0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDL0MsVUFBVSxDQUFDO1lBQ1AsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDYixDQUFDO0lBQ0Qsd0NBQWUsR0FBZjtRQUNJLElBQUksT0FBTyxHQUFHLGtCQUFrQixDQUFDO1FBQ2pDLElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUNoQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3hCLEtBQUssSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNwRDtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFuQlEsY0FBYztRQUgxQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLG9CQUFvQjtTQUNqQyxDQUFDO3lDQUVrQixpQkFBVTtPQURqQixjQUFjLENBb0IxQjtJQUFELHFCQUFDO0NBQUEsQUFwQkQsSUFvQkM7QUFwQlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYgLCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tiYWNrZ3JvdW5kLWNvbG9yXScsXG59KVxuZXhwb3J0IGNsYXNzIENvbG9yRGlyZWN0aXZle1xuICAgIGNvbnN0cnVjdG9yKGVsOiBFbGVtZW50UmVmKSB7XG4gICAgICAgIGxldCB4ID0gZWwubmF0aXZlRWxlbWVudC5zdHlsZTtcbiAgICAgICAgdGhpcy5nZXRDb2xvcih4KTtcbiAgICB9XG5cbiAgICBnZXRDb2xvcihjb2xvcil7XG4gICAgICAgIGNvbG9yLmJhY2tncm91bmRDb2xvciA9IHRoaXMubWFrZVJhbmRvbUNvbG9yKCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5nZXRDb2xvcihjb2xvcik7XG4gICAgICAgIH0sIDIwMDApO1xuICAgIH1cbiAgICBtYWtlUmFuZG9tQ29sb3IoKXtcbiAgICAgICAgdmFyIGxldHRlcnMgPSAnMDEyMzQ1Njc4OUFCQ0RFRic7XG4gICAgICAgIHZhciBjb2xvciA9ICcjJztcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgICAgICAgIGNvbG9yICs9IGxldHRlcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTYpXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29sb3I7XG4gICAgfVxufVxuIl19