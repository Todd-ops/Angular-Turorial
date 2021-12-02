import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-warningalert',
    template: `
        <p>This is a warning!</p>
    ` ,
    styles: [
      `
        p {
        padding: 20px;
        background-color: lightblue;
        border: 1px solid blue;
        }
      `
    ]
})
export class WarningComponent {

}
