import { Component } from '@angular/core';

@Component({
    standalone: true,
    imports: [],
    selector: 'app-home',
    templateUrl: 'home.component.html'
})

export class HomeComponent {
    currentDate = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}