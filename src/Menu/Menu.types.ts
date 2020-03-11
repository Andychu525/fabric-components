import { IStyle, ITheme } from 'office-ui-fabric-react/lib/Styling'
import { IIconProps, IStyleFunctionOrObject } from 'office-ui-fabric-react'

export interface IMenuItem {
  title?: string
  url?: string
  target?: string
  key?: string
  items?: IMenuItem[]
  icon?: string
  iconClassName?: string
  iconProps?: IIconProps
  isExpanded?: boolean
  groupName?: string
}

export interface IMenuStyles {
  /**
   *  menu style
   */
  root: IStyle
  menuGroupSeparatorRoot: IStyle
  menuGroupSeparatorHrLine: IStyle
  menuGroupSeparatorHeaderGroupName: IStyle
  /**
   *  item  style
   */
  menuItemRoot: IStyle
  menuItemTitle: IStyle
  menuItemIcon: IStyle
  menuItemBarMarker: IStyle
}

export interface IMenuStyleProps {
  theme?: ITheme
  isCollapsed?: boolean
  nestingLevel?: number
  isSelected?: boolean
  isChildSelected?: boolean
  hasChildren?: boolean
  hasGroupName?: boolean
}

export interface IMenuState {
  isCollapsed: boolean
}

export interface IMenuProps {
  theme?: ITheme
  isCollapsed?: boolean
  styles?: IStyleFunctionOrObject<IMenuStyleProps, IMenuStyles>
  data: IMenuItem[]
  onNavCollapsedCallback?(isCollapsed: boolean): void
}

export interface IMenuItemProps extends React.AllHTMLAttributes<HTMLAnchorElement> {
  /**
   * CSS class for the menu link container
   */
  rootClassName?: string

  /**
   * Icon name for the icon shown on the left side of the menu link
   */
  leftIconName?: string

  /**
   * Icon name for the icon shown on the right side of the menu link
   */
  rightIconName?: string

  /**
   * CSS class for the text part of the menu link
   */
  textClassName?: string

  /**
   * CSS class for the icon part of the menu link
   */
  iconClassName?: string

  /**
   * CSS class for the bar marker part of the menu link
   */
  barClassName?: string

  /**
   * Style to apply border on keyboard focus
   */
  focusedStyle?: string
}
