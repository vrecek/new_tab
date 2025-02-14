import { IoIosSearch } from "react-icons/io"
import Icon from "../common/Icon"
import SearchInput from "./SearchInput"
import { ISearchbar } from "../../interfaces/interfaces"


const Searchbar = ({ engine }: ISearchbar) => {
    return (
        <section className="searchbar">

            <Icon 
                icon={ <IoIosSearch /> }
                cname="search-icon"
            />

            <SearchInput engine={engine} />

        </section>
    ) 
}


export default Searchbar