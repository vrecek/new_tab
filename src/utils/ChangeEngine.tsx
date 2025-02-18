const changeEngine = (e: React.MouseEvent, set_fn: ()=>void): void => {
    const clicked: Element          = e.currentTarget!,
          rest:    Element[]        = [...clicked.parentElement!.children],
          input:   HTMLInputElement = document.querySelector('input.searchquery-input') as HTMLInputElement


    for (const x of rest) 
        x.classList.remove('active')

    clicked.classList.add('active')
    input.focus()

    set_fn()
}   


export default changeEngine