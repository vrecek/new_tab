import { OptionsSetter, Setter, SliderDirections } from "@/interfaces/interfaces"
import { MouseEvent } from "react"
import { set_background_fn } from "./SetFunctions"


const update_images = (container_nr: number, bgs: string[]): void => {
    const sl: Element[]          = [...document.querySelector('section.slider-main-container div.slider-moving')!.children],
          ch: HTMLImageElement[] = [...sl[container_nr].children] as HTMLImageElement[] 

    if (ch[0].src)
        return

    const img: number = container_nr * 6

    for (let i = 0; i < 6; i++)
        ch[i].src = bgs[img+i]
}


const determine_arrows = (nr: number, bgs: string[]): void => {
    const container: Element   = document.querySelector('section.slider-main-container') as Element,
          [l,_,r]:   Element[] = [...container.children],
          max:       number    = ~~((bgs.length-1) / 6)

    if (nr === 0)
        l.classList.add('off')
    else if (nr >= max)
        r.classList.add('off')
}


const change_slide = (e: MouseEvent, dir: SliderDirections, slide_nr: number, bgs: string[], setter: Setter<number>): void => {
    const nr:      number    = dir === 'left' ? slide_nr-1 : slide_nr+1,
          max:     number    = ~~((bgs.length-1) / 6),
          [l,_,r]: Element[] = [...e.currentTarget.parentElement!.children]


    if (nr < 0 || nr > max)
        return

    const box: HTMLElement = document.querySelector('section.slider-main-container div.slider-moving') as HTMLElement

    box.style.translate = `-${nr * 100}% 0`
    l.className = r.className = 'direction-arrow'

    if (nr === 0)
        l.classList.add('off')
    else if (nr >= max)
        r.classList.add('off')

    animate_arrow(e.currentTarget as HTMLElement)
    update_images(nr, bgs)
    setter(nr)
}


const animate_arrow = (arrow: HTMLElement): void => {
    arrow.style.scale = '.8'

    setTimeout(() => arrow.style.scale = '1', 150)
}


const slider_init = (bgs: string[], bg: string, setter: OptionsSetter): void => {
    const container:   HTMLElement   = document.querySelector('section.slider-main-container div.slider-moving') as HTMLElement,
          images:      HTMLElement[] = [],
          imgs_parent: HTMLElement[] = [],
          imgs_length: number        = bgs.length

    let current_nr: number = -1


    for (let i = 0; i < imgs_length; i++)
    {
        const cont_nr: number           = Math.floor((i) / 6) ,
              img:     HTMLImageElement = document.createElement('img')


        if (!imgs_parent[cont_nr])
        {
            const img_container = document.createElement("section")

            img_container.className = 'slider-inner-container'

            imgs_parent.push(img_container)
            container.appendChild(img_container)
        }

        img.alt     = `bg${i}`
        img.loading = 'lazy'

        if (bg === bgs[i])
        {
            img.className = 'border'
            current_nr    = ~~(i / 6)
        }
        
        images.push(img)
        imgs_parent[cont_nr].appendChild(img)
    }

    for (let i = 0; i < imgs_length; i++)
    {
        images[i].addEventListener('click', () => {
            for (const x of images) 
                x.className = ''

            images[i].className = 'border'

            set_background_fn(setter, bgs[i])
        })
    }

    container.style.translate = `-${current_nr * 100}% 0`
}


export {
    update_images,
    slider_init,
    change_slide,
    determine_arrows
}