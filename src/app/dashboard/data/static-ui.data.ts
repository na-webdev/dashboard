import { NavigationGroupI, UserDataI } from '@dashboard/interfaces';

export const staticUiUserData: UserDataI = {
  username: 'Nurmatov Abdurahim',
  email: 'abdurahim.nurmatov@gmail.com',
  notifications: ['', ''],
  userSettingsNotification: true,
  imageUrl:
    'https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
};

export const userList = [
  {
    imageUrl:
      'https://images.pexels.com/photos/936019/pexels-photo-936019.jpeg?auto=compress&cs=tinysrgb&w=600',
    hasBadge: true,
  },
  {
    imageUrl:
      'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=600',
    hasBadge: false,
  },
  {
    imageUrl:
      'https://images.pexels.com/photos/3468827/pexels-photo-3468827.jpeg?auto=compress&cs=tinysrgb&w=600',
    hasBadge: true,
  },
  {
    imageUrl:
      'https://images.pexels.com/photos/943235/pexels-photo-943235.jpeg?auto=compress&cs=tinysrgb&w=600',
    hasBadge: false,
  },
  {
    imageUrl:
      'https://images.pexels.com/photos/5543385/pexels-photo-5543385.jpeg?auto=compress&cs=tinysrgb&w=600',
    hasBadge: false,
  },
];

export const staticUiNavigationGroups: NavigationGroupI[] = [
  {
    name: 'dashboards',
    definition: 'Unique dashboard design',
    navLinks: [
      { title: 'project', icon: 'dashboard', link: 'project' },
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
      { title: 'contacts', icon: 'group', link: 'contacts' },
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

export const headerButtonIcons = [
  'view_sidebar',
  'search',
  'zoom_out_map',
  'bookmark_border',
  'folder_open',
];
