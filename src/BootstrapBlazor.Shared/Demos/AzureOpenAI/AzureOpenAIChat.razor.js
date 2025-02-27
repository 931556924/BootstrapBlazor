﻿import EventHandler from "../../../BootstrapBlazor/modules/event-handler.js?v=$version"

export function init(id) {
    const el = document.getElementById(id)

    EventHandler.on(el, 'keyup', e => {
        if (e.key === 'Enter' && !e.shiftKey) {
            el.blur()
            document.querySelector('.btn-send').click()
        }
    })
}

export function scroll() {
    const body = document.querySelector('.chat-body')
    if(body.offsetHeight < body.scrollHeight) {
        body.scrollTop = body.scrollHeight
    }
}

export function dispose(id) {
    const el = document.getElementById(id)
    EventHandler.off(el, 'onkeyup')
}
