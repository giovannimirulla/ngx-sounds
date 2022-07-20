import { Injectable } from '@angular/core';
import { fromEvent } from 'rxjs';
import { Howl, Howler } from 'howler';

@Injectable()
export class SoundsService {

  howler = Howler;

  set volume(value: number) {
    this.howler.volume(value);
  }

  get volume(): number {
    return this.howler.volume();
  }

  mute(value = true) {
    this.howler.mute(value);
  }

  howl(options: IHowlProperties) {
    return new Howl(options);
  }

  play(src: string) {
    const sound = new Howl({
      src: [src],
      autoplay: true
    });

    return fromEvent(sound, 'end');
  }
}
