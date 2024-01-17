import { Component, ViewChild, ViewContainerRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { PageServiceService } from './services/page-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatIconModule,
    MatButtonModule, MatToolbarModule, MatSidenavModule,
    MatListModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @ViewChild(MatSidenav) sidenav: MatSidenav;
  page_list = inject(PageServiceService).getPages();
  current_page = this.page_list[0];

  constructor(private viewRef: ViewContainerRef){}

  public onSidenavClick(index: number): void {
    const selected_page = this.page_list.find(x => x.index === index);

    if (selected_page) {
      this.current_page = selected_page;
      this.sidenav.close()
    }
  }
}
