import { useState } from "react";
import { createContext } from "react";



export const SearchContext = createContext();


export default function SearchContextProvider({children}){
   
    const [Search , setSearch] = useState(false);
    const toggleSearch = (x)=>{
        setSearch(x)
    }
    
   return(
    <SearchContext.Provider value={{Search,toggleSearch}}>
        {children}
    </SearchContext.Provider>
   )
}