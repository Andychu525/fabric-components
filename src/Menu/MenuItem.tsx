import React from 'react'
import { Icon } from 'office-ui-fabric-react/lib/Icon'
import { IStyle, mergeStyles } from 'office-ui-fabric-react/lib/Styling'
import { IMenuItemProps } from './Menu.types'

export const MenuItem: React.FunctionComponent<IMenuItemProps> = (props: IMenuItemProps) => {
  const {
    onClick,
    content,
    rightIconName,
    leftIconName,
    rootClassName,
    barClassName,
    iconClassName,
    textClassName
  } = props

  const computedTextWidth: IStyle = { width: '100%' }
  if (!rightIconName && !leftIconName) {
    computedTextWidth.width = 'calc(100% - 48px)'
  } else if (!leftIconName) {
    computedTextWidth.width = 'calc(100% - 48px)'
  } else if (!rightIconName) {
    computedTextWidth.width = 'calc(100% - 96px)'
  } else {
    computedTextWidth.width = 'calc(100% - 96px)'
  }

  return (
    <a onClick={onClick}>
      <div className={rootClassName}>
        <hr className={barClassName} />
        {leftIconName ? <Icon iconName={leftIconName} className={iconClassName} /> : null}
        {content ? <div className={mergeStyles(textClassName, computedTextWidth)}>{content}</div> : null}
        {rightIconName ? <Icon iconName={rightIconName} className={iconClassName} /> : null}
      </div>
    </a>
  )
}
