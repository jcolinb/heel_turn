import {append,series,put} from './beatnik.js'
import {container,pic_box,lor_ip,text_box,add_class} from './elemental.js'

export const album = (cover,band,title) => put(put(text_box(title))(append(lor_ip('info'))(text_box(band))))(put(pic_box(cover))(container('album-frame')))
