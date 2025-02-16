export default class Dropdown
{
    private active:       boolean
    private elementList:  HTMLElement | null
    private boxProps:     DD.BoxProps
    private transitionMs: number
    private id:           string


    private returnHeight(list: HTMLElement, display?: DD.DisplayType): DD.ReturnedHeight
    {
        list.style.height  = 'auto'
        list.style.display = display ?? 'block'

        const getValueOfProperty = (property: string): number => {
            return parseFloat(window.getComputedStyle(list, null)
                                .getPropertyValue(property)
                                .split('')
                                .filter(x => /[0-9.]/ig.test(x) )
                                .join('')
                            )
        }
        
        const height: number = getValueOfProperty('height')

        if(!this.boxProps) {
            const marginTop:    number = getValueOfProperty('margin-top'),
                    marginBottom: number = getValueOfProperty('margin-bottom')


            this.boxProps = {
                mTop: marginTop,
                mBottom: marginBottom
            }
        }

        return {
            height, 
            marginTop: this.boxProps.mTop, 
            marginBottom: this.boxProps.mBottom
        }
    }

    private zeroListProperties(list: HTMLElement): void
    {
        list.style.marginTop    = '0'
        list.style.marginBottom = '0'
        list.style.height       = '0'
        list.style.overflow     = 'hidden'
    }

    private calculateListProperties(list: HTMLElement, values: DD.ReturnedHeight): void
    {
        const {marginBottom, marginTop, height} = values

        list.style.marginTop    = `${ marginTop }px`
        list.style.marginBottom = `${ marginBottom }px`
        list.style.height       = `${ height }px`
    }


    public constructor(transitionMs: number, element?: HTMLElement)
    {
        this.id           = Math.random().toString().slice(2)
        this.active       = false
        this.elementList  = element ?? null
        this.boxProps     = null
        this.transitionMs = transitionMs
    }


    /**
        * @info Use height: 0, display: none, overflow: hidden IF THE ELEMENT IS HIDDEN BY DEFAULT 
        * @param display Optional - block or flex
    */
    public expandMenu(display?: DD.DisplayType): void
    {
        if (!this.active || !this.elementList) return

        const VALUES: DD.ReturnedHeight = this.returnHeight(this.elementList, display)
        
        this.elementList.style.transition = '0'
        this.zeroListProperties(this.elementList)
        
        setTimeout(() => {
            this.elementList!.style.transition = `${this.transitionMs}ms`
            this.calculateListProperties(this.elementList!, VALUES)

            setTimeout(() => this.elementList!.style.overflow = 'visible', this.transitionMs)
        }, 5);
    }


    /**
        * @param display Optional - block or flex
    */
    public shrinkMenu(display?: DD.DisplayType): void
    {
        if(this.active || !this.elementList) return

        this.elementList.style.transition = `${this.transitionMs}ms`
        this.elementList.style.overflow   = 'hidden'

        this.calculateListProperties(this.elementList, this.returnHeight(this.elementList, display))

        setTimeout(() => {
            this.zeroListProperties(this.elementList!)

            setTimeout(() => this.elementList!.style.display = 'none', this.transitionMs)
        }, 5)
    }  

    /**
        * @param arrow Rotates passed element (presumably arrow icon to indicate an expanded list)
    */
    public rotateArrow(arrow: HTMLElement): void
    {
        this.active
            ? arrow.style.transform = 'rotate(180deg)'
            : arrow.style.transform = 'rotate(0)'
    }

    public switchActive(): void 
    { 
        this.active = !this.active 
    }

    public setElement(element: HTMLElement): void
    {
        this.elementList = element
    }

    public getElement(): HTMLElement | null
    {
        return this.elementList
    }

    public isActive(): boolean 
    { 
        return this.active 
    }

    public getID(): string 
    {
        return this.id
    }
}


namespace DD {
    export abstract class DropDown {
        public abstract expandMenu(display?: DD.DisplayType): void 
        public abstract shrinkMenu(display?: DD.DisplayType): void
        public abstract rotateArrow(arrow: HTMLElement): void
        public abstract setElement(element: HTMLElement): void
        public abstract getElement(): HTMLElement | null
        public abstract switchActive(): void
        public abstract isActive(): boolean
        public abstract getID(): string
    }

    export type DisplayType = 'block' | 'flex'

    export type ReturnedHeight = {
        height: number
        marginTop: number
        marginBottom: number
    }

    export type BoxProps = {
        mTop: number
        mBottom: number
    } | null
}


export type { DD }