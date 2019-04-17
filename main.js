import {init,append,parallel} from './beatnik.js'
import {list,map} from './es_liszt.js'
import {album_list} from './catalog.js'
import {pic_box} from './elemental.js'
const cont = document.getElementById('cont')

const state = init(list())

map(({cover})=>append(cont)(pic_box(cover)))(album_list())
