import React from 'react'

import { INavLinkGroup, Nav } from 'office-ui-fabric-react/lib/Nav'
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons'

initializeIcons()
export default { title: 'Navigation' }

const groups: INavLinkGroup[] = [
  {
    links: [
      {
        name: 'Home',
        url: '#',
        expandAriaLabel: 'Expand Home section',
        collapseAriaLabel: 'Collapse Home section',
        links: [
          {
            name: 'Activity',
            url: 'http://msn.com',
            key: 'key1',
            target: '_blank'
          },
          {
            name: 'MSN',
            url: 'http://msn.com',
            disabled: true,
            key: 'key2',
            target: '_blank'
          }
        ],
        isExpanded: true
      },
      {
        name: 'Documents',
        url: 'http://example.com',
        key: 'key3',
        isExpanded: true,
        target: '_blank'
      },
      {
        name: 'Pages',
        url: 'http://msn.com',
        key: 'key4',
        target: '_blank'
      },
      {
        name: 'Notebook',
        url: 'http://msn.com',
        key: 'key5',
        disabled: true
      },
      {
        name: 'Communication and Media',
        url: 'http://msn.com',
        key: 'key6',
        target: '_blank'
      },
      {
        name: 'News',
        url: 'http://cnn.com',
        icon: 'News',
        key: 'key7',
        target: '_blank'
      }
    ]
  }
]

export const NavLinkExam = () => (
  <Nav
    selectedKey='key3'
    ariaLabel='Nav basic example'
    styles={{
      root: {
        width: 208,
        height: 350,
        boxSizing: 'border-box',
        border: '1px solid #eee',
        overflowY: 'auto'
      }
    }}
    groups={groups}
  />
)
