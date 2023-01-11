import { __decorate } from 'tslib';
import { Injectable, NgModule } from '@angular/core';
import { fromEvent } from 'rxjs';
import { Howler, Howl } from 'howler';

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
    SoundsService.prototype.play = function (src, autoplay = true, loop = false) {
        var sound = new Howl({
            src: [src],
            autoplay: autoplay, 
            loop: loop
        });
        return fromEvent(sound, 'end');
    };
    SoundsService = __decorate([
        Injectable()
    ], SoundsService);
    return SoundsService;
}());

var NgxSoundsModule = /** @class */ (function () {
    function NgxSoundsModule() {
    }
    NgxSoundsModule = __decorate([
        NgModule({
            providers: [SoundsService]
        })
    ], NgxSoundsModule);
    return NgxSoundsModule;
}());

/*
 * Public API Surface of ngx-sounds
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxSoundsModule, SoundsService };
//# sourceMappingURL=ngx-sounds.js.map
