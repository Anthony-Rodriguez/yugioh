import React from 'react'
import * as AiIcons from 'react-icons/ai'
import * as GiIcons from 'react-icons/gi'
import * as VscIcons from 'react-icons/vsc'

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    className: 'nav-text'
  },
  {
    title: 'Account',
    path: '/account',
    icon: <VscIcons.VscAccount />,
    className: 'nav-text'
  },
  {
    title: 'Cards',
    path: '/cards',
    icon: <GiIcons.GiCardPick />,
    className: 'nav-text'
  },
  {
    title: 'Decks',
    path: '/decks',
    icon: <GiIcons.GiCardDraw />,
    className: 'nav-text'
  },
]
