import { __decorate } from 'tslib';
import { Injectable, NgModule } from '@angular/core';
import { fromEvent } from 'rxjs';
import { Howler, Howl } from 'howler';

import * as ɵngcc0 from '@angular/core';
let SoundsService = class SoundsService {
    constructor() {
        this.howler = Howler;
    }
    set volume(value) {
        this.howler.volume(value);
    }
    get volume() {
        return this.howler.volume();
    }
    mute(value = true) {
        this.howler.mute(value);
    }
    howl(options) {
        return new Howl(options);
    }
    play(src) {
        const sound = new Howl({
            src: [src],
            autoplay: true
        });
        return fromEvent(sound, 'end');
    }
};
SoundsService.ɵfac = function SoundsService_Factory(t) { return new (t || SoundsService)(); };
SoundsService.ɵprov = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjectable({ token: SoundsService, factory: function (t) { return SoundsService.ɵfac(t); } });

let NgxSoundsModule = class NgxSoundsModule {
};
NgxSoundsModule.ɵfac = function NgxSoundsModule_Factory(t) { return new (t || NgxSoundsModule)(); };
NgxSoundsModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: NgxSoundsModule });
NgxSoundsModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ providers: [SoundsService] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(SoundsService, [{
        type: Injectable
    }], function () { return []; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgxSoundsModule, [{
        type: NgModule,
        args: [{
                providers: [SoundsService]
            }]
    }], null, null); })();

/*
 * Public API Surface of ngx-sounds
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxSoundsModule, SoundsService };

//# sourceMappingURL=ngx-sounds.js.map