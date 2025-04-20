import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteHeaderComponent } from "./Components/site-header/site-header.component";
import { SiteFooterComponent } from "./Components/site-footer/site-footer.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SiteHeaderComponent, SiteFooterComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Store.angular';
}
