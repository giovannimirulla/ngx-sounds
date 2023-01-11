import * as ɵngcc0 from '@angular/core';
import { Howl } from 'howler';
export declare class SoundsService {
    howler: HowlerGlobal;
    set volume(value: number);
    get volume(): number;
    mute(value?: boolean): void;
    howl(options: any): Howl;
    play(src:string, autoplay?:boolean, loop?:boolean): import("rxjs").Observable<unknown>;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<SoundsService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDeclaration<SoundsService>;
}

//# sourceMappingURL=ngx-sounds.service.d.ts.map