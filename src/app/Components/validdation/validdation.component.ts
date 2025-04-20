import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-validdation',
  imports: [],
  templateUrl: './validdation.component.html',
  styleUrl: './validdation.component.css'
})
export class ValiddationComponent {
@Input()
model:AbstractControl|null=null;
}
