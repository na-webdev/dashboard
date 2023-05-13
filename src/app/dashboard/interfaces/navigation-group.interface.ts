export interface NavigationGroupI {
  name: string;
  definition: string;
  navLinks: NavigationLinkI[];
}

interface NavigationLinkI {
  title: string;
  icon: string;
  link: string;
  nestedLinks?: NavigationLinkI[];
}
