import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { fromEvent } from 'rxjs';
import { Howl, Howler } from 'howler';
var SoundsService = /** @class */ (function () {
    function SoundsService() {
        this.howler = Howler;
    }
    Object.defineProperty(SoundsService.prototype, "volume", {
        get: function () {
            return this.howler.volume();
        },
        set: function (value) {
            this.howler.volume(value);
        },
        enumerable: true,
        configurable: true
    });
    SoundsService.prototype.mute = function (value) {
        if (value === void 0) { value = true; }
        this.howler.mute(value);
    };
    SoundsService.prototype.howl = function (options) {
        return new Howl(options);
    };
    SoundsService.prototype.play = function (src) {
        var sound = new Howl({
            src: [src],
            autoplay: true
        });
        return fromEvent(sound, 'end');
    };
    SoundsService = __decorate([
        Injectable()
    ], SoundsService);
    return SoundsService;
}());
export { SoundsService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXNvdW5kcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXNvdW5kcy8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtc291bmRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUd0QztJQUFBO1FBRUUsV0FBTSxHQUFHLE1BQU0sQ0FBQztJQTBCbEIsQ0FBQztJQXhCQyxzQkFBSSxpQ0FBTTthQUlWO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzlCLENBQUM7YUFORCxVQUFXLEtBQWE7WUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7SUFNRCw0QkFBSSxHQUFKLFVBQUssS0FBWTtRQUFaLHNCQUFBLEVBQUEsWUFBWTtRQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCw0QkFBSSxHQUFKLFVBQUssT0FBd0I7UUFDM0IsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsNEJBQUksR0FBSixVQUFLLEdBQVc7UUFDZCxJQUFNLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQztZQUNyQixHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFDVixRQUFRLEVBQUUsSUFBSTtTQUNmLENBQUMsQ0FBQztRQUVILE9BQU8sU0FBUyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBM0JVLGFBQWE7UUFEekIsVUFBVSxFQUFFO09BQ0EsYUFBYSxDQTRCekI7SUFBRCxvQkFBQztDQUFBLEFBNUJELElBNEJDO1NBNUJZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEhvd2wsIEhvd2xlciB9IGZyb20gJ2hvd2xlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTb3VuZHNTZXJ2aWNlIHtcblxuICBob3dsZXIgPSBIb3dsZXI7XG5cbiAgc2V0IHZvbHVtZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5ob3dsZXIudm9sdW1lKHZhbHVlKTtcbiAgfVxuXG4gIGdldCB2b2x1bWUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5ob3dsZXIudm9sdW1lKCk7XG4gIH1cblxuICBtdXRlKHZhbHVlID0gdHJ1ZSkge1xuICAgIHRoaXMuaG93bGVyLm11dGUodmFsdWUpO1xuICB9XG5cbiAgaG93bChvcHRpb25zOiBJSG93bFByb3BlcnRpZXMpIHtcbiAgICByZXR1cm4gbmV3IEhvd2wob3B0aW9ucyk7XG4gIH1cblxuICBwbGF5KHNyYzogc3RyaW5nKSB7XG4gICAgY29uc3Qgc291bmQgPSBuZXcgSG93bCh7XG4gICAgICBzcmM6IFtzcmNdLFxuICAgICAgYXV0b3BsYXk6IHRydWVcbiAgICB9KTtcblxuICAgIHJldHVybiBmcm9tRXZlbnQoc291bmQsICdlbmQnKTtcbiAgfVxufVxuIl19