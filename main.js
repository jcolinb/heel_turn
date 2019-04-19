import {init,append,parallel,series,put,empty} from './beatnik.js'
import {list,map,filter} from './es_liszt.js'
import {album_list} from './catalog.js'
import {pic_box,add_class,text_box} from './elemental.js'
import {album} from './views.js'

const cont = document.getElementById('cont')
const overlay = document.getElementById('overlay')

const listener = (host) => (cover,band,title) => (el) => {
  el.addEventListener('click',()=> {
    append(add_class('shown')(empty(host)))(album(cover,band,title))
  })
  return el
}

const state = init(list)

map(({cover,band,title}) => append(cont)(listener(overlay)(cover,band,title)(pic_box(cover))))(album_list())
