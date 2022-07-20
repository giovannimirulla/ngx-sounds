import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { fromEvent } from 'rxjs';
import { Howl, Howler } from 'howler';
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
export { SoundsService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXNvdW5kcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXNvdW5kcy8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtc291bmRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUd0QyxJQUFhLGFBQWEsR0FBMUIsTUFBYSxhQUFhO0lBQTFCO1FBRUUsV0FBTSxHQUFHLE1BQU0sQ0FBQztJQTBCbEIsQ0FBQztJQXhCQyxJQUFJLE1BQU0sQ0FBQyxLQUFhO1FBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSTtRQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCxJQUFJLENBQUMsT0FBd0I7UUFDM0IsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsSUFBSSxDQUFDLEdBQVc7UUFDZCxNQUFNLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQztZQUNyQixHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFDVixRQUFRLEVBQUUsSUFBSTtTQUNmLENBQUMsQ0FBQztRQUVILE9BQU8sU0FBUyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0NBQ0YsQ0FBQTtBQTVCWSxhQUFhO0lBRHpCLFVBQVUsRUFBRTtHQUNBLGFBQWEsQ0E0QnpCO1NBNUJZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEhvd2wsIEhvd2xlciB9IGZyb20gJ2hvd2xlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTb3VuZHNTZXJ2aWNlIHtcblxuICBob3dsZXIgPSBIb3dsZXI7XG5cbiAgc2V0IHZvbHVtZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5ob3dsZXIudm9sdW1lKHZhbHVlKTtcbiAgfVxuXG4gIGdldCB2b2x1bWUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5ob3dsZXIudm9sdW1lKCk7XG4gIH1cblxuICBtdXRlKHZhbHVlID0gdHJ1ZSkge1xuICAgIHRoaXMuaG93bGVyLm11dGUodmFsdWUpO1xuICB9XG5cbiAgaG93bChvcHRpb25zOiBJSG93bFByb3BlcnRpZXMpIHtcbiAgICByZXR1cm4gbmV3IEhvd2wob3B0aW9ucyk7XG4gIH1cblxuICBwbGF5KHNyYzogc3RyaW5nKSB7XG4gICAgY29uc3Qgc291bmQgPSBuZXcgSG93bCh7XG4gICAgICBzcmM6IFtzcmNdLFxuICAgICAgYXV0b3BsYXk6IHRydWVcbiAgICB9KTtcblxuICAgIHJldHVybiBmcm9tRXZlbnQoc291bmQsICdlbmQnKTtcbiAgfVxufVxuIl19