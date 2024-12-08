import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from "../../../shared/components/side-menu/side-menu.component";
import { MbdevSideMenuComponent, TitleColor } from 'mbdev-side-menu';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [RouterOutlet, SideMenuComponent, MbdevSideMenuComponent],
  templateUrl: './admin-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AdminLayoutComponent {

    isAuthenticated = signal(false);
    TitleColor = signal(TitleColor.blue)

    onLogin() {
      this.isAuthenticated.set(true);
    }

    onLogout() {
      this.isAuthenticated.set(false);
    }

 }