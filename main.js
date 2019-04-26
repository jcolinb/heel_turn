import {init,append,parallel,series,put,empty} from './beatnik.js'
import {first,list,map,filter} from './es_liszt.js'
import {album_list} from './catalog.js'
import {pic_box,add_class,text_box} from './elemental.js'
import {album,cart} from './views.js'

const cont = document.getElementById('cont')
const overlay = document.getElementById('overlay')
const cart_button = document.getElementById('cart-button')

const state = init(list)

const add_to_cart = (obj) => state.set(state.get()(obj))

const album_listener = (host) => (obj) => (el) => {
  el.addEventListener('click',() => {
    append(add_class('shown')(empty(host)))(album(host)(add_to_cart)(obj))
  })
  return el
}

cart_button.addEventListener('click',() => {
  first(state.get()()) && append(add_class('shown')(empty(overlay)))(cart(overlay)(state.get()))
})

map((obj) => append(cont)(album_listener(overlay)(obj)(pic_box(obj.cover))))(album_list())

