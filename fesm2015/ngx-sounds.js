import { __decorate } from 'tslib';
import { Injectable, NgModule } from '@angular/core';
import { fromEvent } from 'rxjs';
import { Howler, Howl } from 'howler';

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
SoundsService = __decorate([
    Injectable()
], SoundsService);

let NgxSoundsModule = class NgxSoundsModule {
};
NgxSoundsModule = __decorate([
    NgModule({
        providers: [SoundsService]
    })
], NgxSoundsModule);

/*
 * Public API Surface of ngx-sounds
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxSoundsModule, SoundsService };
//# sourceMappingURL=ngx-sounds.js.map
