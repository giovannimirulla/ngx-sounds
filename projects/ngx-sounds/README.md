# ngx-sounds

Angular [howler.js](https://howlerjs.com/) wrapper service.

[Demo](https://d3v0ps.github.io/ngx-sounds)

## Getting Started

### 1. Install packages
```sh
npm i howler ngx-sounds
```

### 2. Import Module
```typescript
import { NgxSoundsModule } from 'ngx-sounds';

@NgModule({
  declarations: [AppComponent],
  imports: [
    NgxSoundsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

### 3. Include the service

```ts

import { SoundsService } from 'ngx-sounds';

export class AppComponent {

  constructor(
    private sounds: SoundsService
  ){}

  ngOnInit() {
    // Shortcut methods
    this.sounds.play('assets/my-sound.mp3')
      .subscribe(
        () => console.log('sound played!')
      );

    this.sounds.volume(0.5)

    this.sounds.mute();

    // Static accessor
    this.sounds.howler;

    // Howl factory
    const howl = this.sounds.howl({
      src: ['assets/my-sound.mp3']
    });

    howl.play();
  }

}

```
