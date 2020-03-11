import React from 'react'
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs'
import { classNamesFunction } from 'office-ui-fabric-react'
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons'
import { MenuItem, IMenuItemProps, IMenuStyles, IMenuStyleProps, getStyles } from '../../src/Menu'

initializeIcons()
export default { title: 'Navigation', decorators: [withKnobs] }

export const MenuItemExam = () => {
  // knobs
  const content = text('content', 'Home')
  const leftIconName = text('leftIconName', 'Home')
  const isSelected = boolean('isSelected', false)
  const nestingLevel = number('nestingLevel', 0)
  const isExpanded = boolean('isExpanded', false)
  const hasChildren = boolean('hasChildren', false)

  const rightIconName = hasChildren ? (isExpanded ? 'ChevronUp' : 'ChevronDown') : undefined
  // config
  const getClassNames = classNamesFunction<IMenuStyleProps, IMenuStyles>()
  const stylesProps: IMenuStyleProps = { isSelected, nestingLevel }
  const classNames = getClassNames(getStyles, stylesProps)

  return (
    <MenuItem
      content={content}
      leftIconName={leftIconName}
      rightIconName={rightIconName}
      rootClassName={classNames.menuItemRoot}
      iconClassName={classNames.menuItemIcon}
      textClassName={classNames.menuItemTitle}
      barClassName={classNames.menuItemBarMarker}
    />
  )
}
