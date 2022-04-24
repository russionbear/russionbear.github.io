import {
    INIT_MARKDOW,
    INIT_SIDEBAR,
    INIT_EDIT,
    INIT_BOOKS,
    INIT_NOTES,
    TYPE_MARKDOWN_SIZE,
    TYPE_EDIT_FUNC_GETVALUE,
    TYPE_EDIT_VALUE,
    TYPE_SIDEBAR_NOW,
    TYPE_BOOKS_NOW_SWAP,
    TYPE_EDIT_SOURCE_SHOW,
    MarkdownSize,
    EditValue,
    SideBar,
    Books,
    Notes,
    TYPE_BOOKS_UPDATE,
    TYPE_NOTES_NOW_SWAP,
    TYPE_NOTES_UPDATE,
    TYPE_EDIT_SOURCE_UPDATE,
    TYPE_MARKDOWN_SHOW_TYPE,
    TYPE_EDIT_MODIFIED,
    INIT_GITHUB,
    TYPE_GH_GETDATA,
    TYPE_GH_STATE

} from './actions'

import { combineReducers } from 'redux'



function markdownSize(
    state = INIT_MARKDOW,
    action: MarkdownSize) {
        
    function handleRlt(enter: typeof state ): typeof state {
        return {...enter,
            markdownHeight: (enter.h - (enter.fullscreen?0:enter.top)) ,
            editWidth: enter.editShow? Math.trunc((window.innerWidth - ((enter.fullscreen?0:enter.left_side) + (!enter.fullscreen&&enter.showSidebar?enter.left:0))) / (enter.viewShow?2:1)) + 'px' : '0px',
            viewWidth: enter.viewShow? Math.trunc((window.innerWidth - ((enter.fullscreen?0:enter.left_side) + (!enter.fullscreen&&enter.showSidebar?enter.left:0))) / (enter.editShow?2:1)) + 'px' : '0px',
            canvasWidth: window.innerWidth - state.left_side
        }
    }
    switch (action.type) {
        case TYPE_MARKDOWN_SIZE:
            // console.log('winsize', window.innerWidth, state.left_side, state.left)
            // let args1= Math.trunc((window.innerWidth - ((state.fullscreen?0:state.left_side) + (!state.fullscreen&&state.showSidebar?state.left:0))))
            // console.log('args', action.h, action.w)
            return Object.assign({}, state, {
                h: action.h,
                w: action.w,
                markdownHeight: (action.h - (state.fullscreen?0:state.top)) ,
                editWidth: state.editShow? Math.trunc((action.w - ((state.fullscreen?0:state.left_side) + (!state.fullscreen&&state.showSidebar?state.left:0))) / (state.viewShow?2:1)) + 'px' : '0px',
                viewWidth: state.viewShow? Math.trunc((action.w - ((state.fullscreen?0:state.left_side) + (!state.fullscreen&&state.showSidebar?state.left:0))) / (state.editShow?2:1)) + 'px' : '0px',
                canvasWidth: window.innerWidth - state.left_side
            })
        case TYPE_MARKDOWN_SHOW_TYPE:
            let rlt = {...state, ...action}
            rlt =  {...rlt,
                markdownHeight: (rlt.h - (rlt.fullscreen?0:rlt.top)) ,
                editWidth: rlt.editShow? Math.trunc((window.innerWidth - ((rlt.fullscreen?0:rlt.left_side) + (!rlt.fullscreen&&rlt.showSidebar?rlt.left:0))) / (rlt.viewShow?2:1)) + 'px' : '0px',
                viewWidth: rlt.viewShow? Math.trunc((window.innerWidth - ((rlt.fullscreen?0:rlt.left_side) + (!rlt.fullscreen&&rlt.showSidebar?rlt.left:0))) / (rlt.editShow?2:1)) + 'px' : '0px',
            }
            console.log('rlt', rlt)
            return rlt
        default:
            return state
    }
}

function editValue(
    state = INIT_EDIT,
    action: EditValue)
    : EditValue {
    switch (action.type) {
        case TYPE_EDIT_VALUE:
            return Object.assign({}, state, {
                value: action.value
            })
        case TYPE_EDIT_FUNC_GETVALUE:
            return Object.assign({}, state, {
                getValueFunc: action.getValueFunc
            })
        case TYPE_EDIT_SOURCE_UPDATE:
            let rlt = ['\n']
            for(let i of action.source){
                rlt.push(`[${i.title}]: ${i.type==='outer url'?i.url:i.gitUrl} (${i.title})`)
            }
            // console.log('quote', rlt.join('\n'))
            return Object.assign({}, state, {
                source: action.source,
                quoteValue: rlt.join('\n')
            })
        case TYPE_EDIT_SOURCE_SHOW:
            return Object.assign({}, state, {
                showSource: action.showSource
            })
        case TYPE_EDIT_MODIFIED:
            return Object.assign({}, state, {
                modified: action.modified
            })
        default:
            return state
    }
}

function sidebar(
    state = INIT_SIDEBAR,
    action: SideBar) {
    switch (action.type) {
        case TYPE_SIDEBAR_NOW:
            return Object.assign({}, state, {
                nowValue: action.value
            })
        // case TYPE_SIDEBAR_DOUBLE:
        //     return Object.assign({}, state, {
        //         doubleClick: action.doubleClick
        //     })
        default:
            return state
    }
}

function books(
    state = INIT_BOOKS,
    action: Books) {
    switch (action.type) {
        case TYPE_BOOKS_NOW_SWAP:
            return Object.assign({}, state, {
                nowBook: action.nowBook
            })
        case TYPE_BOOKS_UPDATE:
            return Object.assign({}, state, {
                books: action.books
            })

        default:
            return state
    }
}

function notes(
    state = INIT_NOTES,
    action: Notes) {
    switch (action.type) {
        case TYPE_NOTES_NOW_SWAP:
            return Object.assign({}, state, {
                nowNote: action.nowNote
            })

        case TYPE_NOTES_UPDATE:
            return Object.assign({}, state, {
                notes: action.notes
            })
        default:
            return state
    }
}

function github(state = INIT_GITHUB, action: {[key: string]: any}): typeof INIT_GITHUB{
    switch (action.type) {
        case TYPE_GH_GETDATA:
            return Object.assign({}, state, {
                data: action.data
            })
        case TYPE_GH_STATE:
            return Object.assign({}, state, {
                ...action
            })
        default:
            return state
    }
}


const mainReducer = combineReducers({
    markdownSize,
    editValue,
    sidebar,
    books,
    notes,
    github,
})

export default mainReducer
