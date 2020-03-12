import { NeutralColors } from '@uifabric/fluent-theme'
import { IMenuStyles, IMenuStyleProps } from './Menu.types'

/**
 *  root constant
 */
const menuWidth = 280
const menuCollapsedWidth = 48
const menuBackgroundColor = NeutralColors.gray40
const menuTextColor = NeutralColors.black
const menuFontSize = 14
const menuBorder = '1px solid #EEE'

/**
 *  group constant
 */
const menuGroupSeparatorItemHeight = 40
const menuGroupSeparatorWithGroupNameHeight = 70

/**
 *  item constant
 */
const menuItemHeight = 48
const menuItemIndentSize = 50
const menuItemHoverColor = NeutralColors.gray60
const MenuItemSelectColor = NeutralColors.gray60
const shortenedIconWidth = 32

export const getStyles = (props: IMenuStyleProps): IMenuStyles => {
  const { isCollapsed, nestingLevel = 0, hasChildren, isChildSelected, isSelected, hasGroupName } = props
  return {
    root: {
      width: isCollapsed ? menuCollapsedWidth : menuWidth,
      transition: 'width 0.2s',
      // transitionTimingFunction: 'cubic-bezier(0.7,0.1,0.1,0.7)',
      backgroundColor: menuBackgroundColor,
      borderRight: menuBorder,
      color: menuTextColor,
      userSelect: 'none',
      selectors: {
        ul: {
          listStyleType: 'none',
          padding: 0,
          margin: 0,
          fontSize: menuFontSize,
          selectors: {
            'li:hover >div': {
              display: 'block'
            }
          }
        },
        a: {
          color: `${menuTextColor} !important`,
          outline: 'none'
        }
      }
    },
    menuItemRoot: {
      height: menuItemHeight,
      lineHeight: menuItemHeight,
      cursor: 'pointer',
      paddingLeft: nestingLevel * menuItemIndentSize || 'inherit',
      selectors: {
        // a: {
        //   color: `${menuTextColor} !important`,
        //   outline: 'none'
        // },
        ':hover': {
          backgroundColor: menuItemHoverColor
        },
        ':active': {
          backgroundColor: MenuItemSelectColor
        }
      }
    },
    menuItemBarMarker: {
      marginLeft: nestingLevel && !hasChildren ? '-10px' : '6px',
      marginRight: nestingLevel && !hasChildren ? '8px' : '0px',
      marginTop: nestingLevel ? '15px' : '12px',
      width: '2px',
      height: nestingLevel ? '18px' : '24px',
      backgroundColor: '#0078D4',
      display: isSelected || isChildSelected ? 'inline-block' : 'none',
      borderWidth: 0
    },
    menuItemTitle: {
      width: '100%',
      marginLeft: isSelected || isChildSelected ? 8 : 0,
      display: isCollapsed ? 'none' : 'inline-block',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      verticalAlign: 'top',
      whiteSpace: 'nowrap'
    },
    menuItemIcon: {
      width: isSelected || isChildSelected ? shortenedIconWidth : menuCollapsedWidth,
      fontSize: '16px',
      textAlign: 'center',
      verticalAlign: 'top'
    },
    menuGroupSeparatorRoot: {
      width: '100%',
      height: hasGroupName ? menuGroupSeparatorWithGroupNameHeight : menuGroupSeparatorItemHeight,
      textAlign: 'center'
    },
    menuGroupSeparatorHrLine: {
      position: 'relative',
      height: '20px',
      borderBottom: menuBorder
    },
    menuGroupSeparatorHeaderGroupName: {
      position: 'absolute',
      marginTop: '40px',
      left: '16px',
      fontWeight: 'bold'
    }
  }
}
