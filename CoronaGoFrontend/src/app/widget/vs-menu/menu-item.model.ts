export class MenuItem {
  displayName: string;
  path?: string;
  useIconFrom?: string;
  icon?: string;
  iconColor?: string;
  separator?: boolean;
  subMenus?: MenuItem[];
  link?: string;
  id?: number;
  menu?: number[];
  order?: number;
  isCollapsed?: boolean;
  isActive?: boolean;
}
