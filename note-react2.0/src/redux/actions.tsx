
import {
  PartitionOutlined,
  BgColorsOutlined
} from '@ant-design/icons';
// import Markdown from '../pages/Markdown/Markdown';


const _markdown_top = 0 // 32
const _markdown_left_side = 45 // sidebar
const _markdown_left = 400 // notelist
const _markdown_toobar_heigth = 32
/*
 * action 类型
 */

export const TYPE_SIDEBAR_NOW = 'TYPE_SIDEBAR_NOW'
export const TYPE_SIDEBAR_DOUBLE = "TYPE_SIDEBAR_DOUBLE"

export const TYPE_MARKDOWN_SIZE = "SET_MARKDOWN_SIZE"
export const TYPE_MARKDOWN_SHOW_TYPE = "TYPE_MARKDOWN_SHOW_TYPE"

export const TYPE_EDIT_VALUE = "TYPE_EDIT_VALUE"
export const TYPE_EDIT_FUNC_GETVALUE = "TYPE_EDIT_VALUE"
export const TYPE_EDIT_SOURCE_UPDATE = 'TYPE_EDIT_SOURCE_UPDATE'
export const TYPE_EDIT_SOURCE_SHOW = "TYPE_EDIT_SOURCE_SHOW"
export const TYPE_EDIT_MODIFIED = "TYPE_EDIT_MODIFIED"

export const TYPE_BOOKMANAGER_BOOKS = "TYPE_BOOKMANAGER_BOOKS"

export const TYPE_BOOKMANAGER_NOWBOOK = 'TYPE_BOOKMANAGER_NOWBOOK'

export const TYPE_BOOKS_UPDATE = "TYPE_BOOKS_UPDATE"
export const TYPE_BOOKS_NOW_SWAP = "TYPE_BOOKS_NOW_SWAP"

export const TYPE_NOTES_UPDATE = "TYPE_NOTES_UPDATE"
export const TYPE_NOTES_NOW_SWAP = "TYPE_NOTES_NOW_SWAP"

export const TYPE_GH_STATE = "TYPE_GH_STATE"
export const TYPE_GH_GETDATA = "TYPE_GH_GETDATA"

/**
 * 初始值
 */



export const INIT_SIDEBAR = {
  type: TYPE_SIDEBAR_NOW,
  nowValue: 'books',
  menus: [
    {
      key: 'books',
      name: 'books',
      icon: <PartitionOutlined />,
      hasListbar: true
    }, {
      key: 'canvas',
      name: 'canvas',
      icon: <BgColorsOutlined />,
      hasListbar: false
    }
  ]
}

export const INIT_MARKDOW = {
  type: TYPE_MARKDOWN_SIZE,
  h: window.innerHeight,
  top: _markdown_top,
  w: window.innerHeight,
  left: _markdown_left,
  left_side: _markdown_left_side,
  toolbarHeight: _markdown_toobar_heigth,

  fullscreen: false,
  showSidebar: true,

  //
  markdownHeight: (window.innerHeight - _markdown_top),
  editWidth: (window.innerWidth - _markdown_left - _markdown_left_side) / 2 + 'px',
  viewWidth: (window.innerWidth - _markdown_left - _markdown_left_side) / 2 + 'px',
  canvasWidth: window.innerWidth - _markdown_left_side,
  editShow: true,
  viewShow: true
}

export const INIT_EDIT: {
  type: string,
  value: string,
  getValueFunc: (str: string) => void,
  source: Array<ItemSource>,
  showSource: boolean,
  quoteValue: string,
  modified: boolean
} = {
  type: TYPE_EDIT_VALUE,
  value: '',
  getValueFunc: (str: string) => { },
  source: [],
  showSource: false,
  quoteValue: '',
  modified: false
}

export const INIT_BOOKS:
  {
    type: string,
    books: Array<ItemBook>,
    nowBook: string
  } = {
  type: '',
  books: [],
  nowBook: ''
}

export const INIT_NOTES:
  {
    type: string,
    notes: Array<ItemNote>,
    nowNote: string
  } = {
  type: '',
  notes: [],
  nowNote: ''
}


// mid
export interface GithubBook extends ItemBook {
  children: { [key: string]: GithubNote }
}


// mid
export interface GithubNote extends ItemBook {
  children: { [key: string]: ItemSource }
}


export const INIT_GITHUB: {
  type: string,
  data: { [key: string]: GithubBook }
} = {
  type: '',
  data: {
    '1111': {
      key: '1111',
      name: '1111',
      dsc: '1111',
      children: {}
    }, 
    '222': {
      key: '222',
      name: '222',
      dsc: '222',
      children: {}
    }, 
    '333': {
      key: '333',
      name: '333',
      dsc: '333',
      children: {}
    }, 
  }
}

/**
 * 接口，规范action
 */

export interface MarkdownSize {
  type: string,
  w: number,
  h: number
}


// mid
export interface ItemSource {
  sourceId: string,
  type: 'music' | 'video' | 'image' | 'outer url' | 'local url',
  size: number,
  title: string,
  url: string,
  gitUrl: string
}

export interface EditValue {
  type: string,
  value: string,
  getValueFunc: (str: string) => void,
  source: Array<ItemSource>,
  showSource: boolean,
  quoteValue: string,
  modified: boolean
}

export interface SideBar {
  type: string,
  value: string,
  doubleClick?: boolean
}

/**
 * 如要修改，还应修改 /src/component/MyList/
 */
export interface ItemNote {
  key: string,
  title: string,
  // time: string,
  createTime: string,
  modifyTime: string,
  tags: Array<string>,
  image: string,
  part: string
}

export interface Notes {
  type: string,
  notes: Array<ItemNote>,
  nowNote: string
}


/**
 * 如要修改，还应修改 /src/modals/BookManager/
 */
export interface ItemBook {
  key: string,
  name: string,
  dsc: string
}

export interface Books {
  type: string,
  books: Array<ItemBook>,
  nowBook: string
}


/*
 * 其它的常量
 */

// export const VisibilityFilters = {
//   SHOW_ALL: 'SHOW_ALL',
//   SHOW_COMPLETED: 'SHOW_COMPLETED',
//   SHOW_ACTIVE: 'SHOW_ACTIVE'
// }

/*
 * action 创建函数
 */


export function setMrakdownSize(w: number, h: number) {
  return {
    type: TYPE_MARKDOWN_SIZE,
    w, h
  }
}

export function setMarkdownShowType(type: {
  fullscreen?: boolean,
  showSidebar?: boolean,
  editShow?: boolean,
  viewShow?: boolean
}) {
  return {
    type: TYPE_MARKDOWN_SHOW_TYPE,
    ...type
  }
}


export function setEditValue(value: string) {
  return {
    type: TYPE_EDIT_VALUE,
    value
  }
}

export function setEditSourceUpdate(newSource: Array<ItemSource>) {
  return {
    type: TYPE_EDIT_SOURCE_UPDATE,
    source: newSource
  }
}

export function setEditValueGetFunc(getValueFunc: (arg: string) => void) {
  return {
    type: TYPE_EDIT_FUNC_GETVALUE,
    getValueFunc
  }
}

export function setEditSourceShow(showSource: boolean) {
  return {
    type: TYPE_EDIT_SOURCE_SHOW,
    showSource
  }
}

export function setEditValueModified(modified: boolean) {
  return {
    type: TYPE_EDIT_MODIFIED,
    modified
  }
}


export function setSidbarNow(value: string) {
  return {
    type: TYPE_SIDEBAR_NOW,
    value
  }
}

export function setSidbarDouble(doubleClick: boolean) {
  return {
    type: TYPE_SIDEBAR_DOUBLE,
    doubleClick
  }
}


export function setBooksUpdate(books: Array<ItemBook>) {
  return {
    type: TYPE_BOOKS_UPDATE,
    books
  }
}

export function setBooksSwapNow(nowBook: string) {
  return {
    type: TYPE_BOOKS_NOW_SWAP,
    nowBook
  }
}

export function setNotesUpdate(notes: Array<ItemNote>) {
  return {
    type: TYPE_NOTES_UPDATE,
    notes
  }
}

export function setNotesSwapNow(nowNote: string) {
  return {
    type: TYPE_NOTES_NOW_SWAP,
    nowNote
  }
}


