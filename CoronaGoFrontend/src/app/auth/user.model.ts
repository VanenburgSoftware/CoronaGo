export interface User {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  userRoleIds?: string;
  roles: any;
  menuItems: any;
  menu?: any;
  tab?: any;
}
