const changeEngine = (e: React.MouseEvent, set_fn: ()=>void): void => {
    const clicked: Element   = e.currentTarget!,
          rest:    Element[] = [...clicked.parentElement!.children]


    for (const x of rest) 
        x.classList.remove('active')

    clicked.classList.add('active')
    set_fn()
}   


export default changeEngine