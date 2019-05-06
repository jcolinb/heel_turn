import {append,series,put} from './beatnik.js'
import {container,pic_box,lor_ip,text_box,add_class} from './elemental.js'
import {reduce} from './es_liszt.js'

const closer = (host) => {
  const x = add_class('x')(text_box('X'))
  x.addEventListener('click',()=>host.className = 'hidden')
  return x
}

const cart_button = (fn) => (obj) => {
  const button = document.createElement('button')
  button.textContent= 'add to cart'
  button.addEventListener('click',()=>fn(obj))
  return button
}

export const cart = (host) => (basket) => {
  const total = (ls) => text_box(`total: $${reduce((a,{price})=>a+price,0)(basket())}`)
  const add_item = (p,{band,title,price,cover}) => append(p)(
    series
    (lor_ip)
    (put(pic_box(cover)))
    (put(series
         (lor_ip)
         (put(text_box(band)))
         (put(text_box(title)))
         ()('band-title')
        ))
    (put(text_box(`total: $${price}`)))
    ()('cart-item'))
  
  append(host)(put(closer(host))(put(total(basket()))(reduce(add_item,container('cart-frame'))(basket()))))
}

export const album = (host) => (add_to_cart) => ({cover,band,title,info,price}) => series
(container)
(put(pic_box(cover)))
(put(series
     (lor_ip)
     (put(series
          (lor_ip)
          (put(text_box(band)))
          (put(text_box(title)))
          ()('band-title')
         ))
     (put(cart_button(add_to_cart)({band,title,price,cover})))
     ()('info')))
(put(closer(host)))
()('album-frame')

