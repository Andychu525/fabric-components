import React from 'react'
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs'
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons'
import { IMenuItem } from '../../src/Menu'
import { Menu } from '../../src/Menu/Menu'

initializeIcons()
export default { title: 'Navigation', decorators: [withKnobs] }

const menu: IMenuItem[] = [
  {
    items: [
      {
        title: 'Home - no action supported',
        url: '#',
        isExpanded: true,
        icon: 'Home',
        key: 'key1',
        items: [
          { title: 'Activity', url: '#', key: 'key2' },
          {
            title: 'News - test with long title to show ellipse',
            url: '#',
            key: 'key3',
            items: [
              {
                title: 'Home - no action supported',
                url: '#',
                isExpanded: true,
                icon: 'Home',
                key: 'key100',
                items: [
                  { title: 'Activity', url: '#', key: 'key2' },
                  {
                    title: 'News - test with long title to show ellipse',
                    url: '#',
                    key: 'key101',
                    items: [
                      {
                        title: 'Home - no action supported',
                        url: '#',
                        isExpanded: true,
                        icon: 'Home',
                        key: 'key100',
                        items: [
                          { title: 'Activity', url: '#', key: 'key2' },
                          {
                            title: 'News - test with long title to show ellipse',
                            url: '#',
                            key: 'key101'
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      { title: 'Documents', url: '#', key: 'key4', icon: 'Document' },
      { title: 'Pages', url: '#', key: 'key5', icon: 'Page' },
      {
        title: 'Notebook - test with long title to show ellipse',
        url: '#',
        key: 'key6',
        icon: 'DietPlanNotebook'
      },
      {
        title: 'Test nodes - test nodes',
        url: '#',
        isExpanded: false,
        icon: 'Home',
        key: 'key17',
        items: [
          { title: 'Activity', url: '#', key: 'key18' },
          {
            title: 'News - test with long title to show ellipse',
            url: '#',
            key: 'key19'
          }
        ]
      }
    ]
  }
]

export const MenuExam = () => {
  const isCollapsed = boolean('isCollapsed', true)
  return <Menu data={menu} isCollapsed={isCollapsed} />
}
