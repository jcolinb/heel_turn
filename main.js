import {init,append,parallel,series,put,empty} from './beatnik.js'
import {list,map,filter} from './es_liszt.js'
import {album_list} from './catalog.js'
import {pic_box,add_class,text_box} from './elemental.js'
import {album} from './views.js'

const cont = document.getElementById('cont')
const overlay = document.getElementById('overlay')

const log = () => (state) => map(({title})=>console.log(title))(state())

const state = init(list,log)

const add_to_cart = (obj) => state.set(state.get()(obj))

const listener = (host) => (obj) => (el) => {
  el.addEventListener('click',()=> {
    append(add_class('shown')(empty(host)))(album(host)(add_to_cart)(obj))
  })
  return el
}



map((obj) => append(cont)(listener(overlay)(obj)(pic_box(obj.cover))))(album_list())
