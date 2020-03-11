import React from 'react'
import { IMenuProps, IMenuState, IMenuItem, IMenuStyleProps, IMenuStyles } from './Menu.types'
import { classNamesFunction, AnimationClassNames, styled } from 'office-ui-fabric-react'
import { MenuItem } from './MenuItem'
import { getStyles } from './Menu.styles'

const getClassNames = classNamesFunction<IMenuStyleProps, IMenuStyles>()

class MenuComponent extends React.Component<IMenuProps, IMenuState> {
  constructor(props: IMenuProps) {
    super(props)
    this.state = { isCollapsed: !!this.props.isCollapsed }
  }
  private _itemHasChildren(item: IMenuItem) {
    return item.items && item.items.length > 0
  }

  private _onItemClickHandle(item: IMenuItem) {
    if (this._itemHasChildren(item)) {
      item.isExpanded = !item.isExpanded
      this.setState({})
    }
  }

  private _renderItem(item: IMenuItem, nestingLevel: number) {
    const { styles, theme } = this.props
    const { isCollapsed } = this.state

    const rightIconName =
      !isCollapsed && this._itemHasChildren(item) ? (item.isExpanded ? 'ChevronUp' : 'ChevronDown') : undefined
    const classNames = getClassNames(styles, { nestingLevel: nestingLevel, theme })
    return (
      <MenuItem
        id={item.key}
        content={item.title}
        href={item.url}
        target={item.target}
        leftIconName={item.icon}
        rightIconName={rightIconName}
        role='menu'
        rootClassName={classNames.menuItemRoot}
        textClassName={classNames.menuItemTitle}
        iconClassName={classNames.menuItemIcon}
        barClassName={classNames.menuItemBarMarker}
        onClick={this._onItemClickHandle.bind(this, item)}
      />
    )
  }

  private _renderItems(items: IMenuItem[], nestingLevel: number) {
    if (items.length === 0) {
      return null
    }
    const { isCollapsed } = this.state

    return (
      <ul role='menu'>
        {items.map(item => (
          <li role='listitem' key={item.key} title={item.title}>
            {this._renderItem(item, nestingLevel)}
            {!isCollapsed && item.isExpanded && this._renderItems(item.items || [], nestingLevel + 1)}
          </li>
        ))}
      </ul>
    )
  }

  private _renderGroup(group: IMenuItem, groupIndex: number) {
    const { styles, theme } = this.props
    const hasGroupName = !!group.groupName
    const classNames = getClassNames(styles!, { hasGroupName, theme: theme! })
    return (
      <div key={groupIndex}>
        {/* <div className={classNames.menuGroupSeparatorRoot}>
          <div className={classNames.menuGroupSeparatorHrLine}>
            {group.groupName ? (
              <span className={classNames.menuGroupSeparatorHeaderGroupName}>{group.groupName}</span>
            ) : null}
          </div>
        </div> */}
        {this._renderItems(group.items || [], 0)}
      </div>
    )
  }

  render() {
    const { styles, theme, data } = this.props
    const { isCollapsed } = this.state
    const classNames = getClassNames(styles!, { theme: theme!, isCollapsed })

    if (!data || data.length === 0) {
      return null
    }
    return <div className={classNames.root}>{data.map((group, index) => this._renderGroup(group, index))}</div>
  }
}

export const Menu = styled<IMenuProps, IMenuStyleProps, IMenuStyles>(MenuComponent, getStyles)
