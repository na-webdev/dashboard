import { Component } from '@angular/core';
import { UserDataI } from '@dashboard/interfaces/user-data.interface';
import { NavigationGroupI } from '@dashboard/interfaces/navigation-group.interface';

@Component({
  selector: 'app-left-sidenav',
  templateUrl: './left-sidenav.component.html',
  styleUrls: ['./left-sidenav.component.scss'],
})
export class LeftSidenavComponent {
  userData: UserDataI = {
    username: 'Nurmatov Abdurahim',
    email: 'abdurahim.nurmatov@gmail.com',
    notifications: ['', ''],
    userSettingsNotification: true,
    imageUrl:
      'https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  };

  navigationGroups: NavigationGroupI[] = [
    {
      name: 'dashboards',
      definition: 'Unique dashboard design',
      navLinks: [
        { title: 'dashboard', icon: 'dashboard', link: 'main' },
        { title: 'analytics', icon: 'bar_chart', link: 'analytics' },
        { title: 'finance', icon: 'monetization_on', link: 'finance' },
        { title: 'crypto', icon: 'currency_bitcoin', link: 'crypto' },
      ],
    },
    {
      name: 'applications',
      definition: 'Custom made application designs',
      navLinks: [
        { title: 'academy', icon: 'local_library', link: 'academy' },
        { title: 'chat', icon: 'chat', link: 'chat' },
        { title: 'contacts', icon: 'group', link: 'finance' },
        {
          title: 'e-commerce',
          icon: 'payment',
          link: 'e-commerce',
          nestedLinks: [],
        },
        { title: 'file manager', icon: 'file_open', link: 'file-manager' },
        { title: 'help center', icon: 'help', link: 'help-center' },
        { title: 'mail box', icon: 'mail', link: 'mail-box' },
        { title: 'notes', icon: 'notes', link: 'notes' },
        { title: 'scrumboard', icon: 'space_dashboard', link: 'scrum-board' },
        { title: 'tasks', icon: 'task', link: 'tasks' },
      ],
    },
  ];
}
