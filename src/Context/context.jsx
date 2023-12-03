import { createContext, useState, useEffect } from "react";
import { apiUrl } from '../APIs/api';

export const ShoppingCartContext = createContext();

/* Account */
export const initializeLocalStorage = () => {
    const accountInLocalStorage = localStorage.getItem('account');
    const signOutInLocalStorage = localStorage.getItem('sign-out');
    let parsedAccount;
    let parsedSignOut;

    if (!accountInLocalStorage) {
        localStorage.setItem('account', JSON.stringify({}));
        parsedAccount = {};
    } else {
        parsedAccount = JSON.parse(accountInLocalStorage);
    }

    if (!signOutInLocalStorage) {
        localStorage.setItem('sign-out', JSON.stringify(false));
        parsedSignOut = false;
    } else {
        parsedSignOut = JSON.parse(signOutInLocalStorage);
    }
}

/* Shopping cart */
export const ShoppingCartProvider = ({ children }) => {
    /* My account */
    const [account, setAccount] = useState({});

    /* Sign out */
    const [signOut, setSignOut] = useState(false);

    /* Increase products quantity */
    const [count, setCount] = useState(0);

    /* Add Products */
    const [cartProducts, setCartProducts] = useState([]);

    /* Order */
    const [order, setOrder] = useState([]);

    /* Products array */
    const [items, setItems] = useState(null)
    const [filteredItems, setFilteredItems] = useState(null);

    /* Search Products by title */
    const [searchByTitle, setSearchByTitle] = useState(null);

    /* Get Products by title */
    const [searchByCategory, setSearchByCategory] = useState(null);

    /* Get API */
    useEffect(() => {
        fetch(`${apiUrl}/`).then(response => response.json().then(data => setItems(data)))
    }, []);

    /* Display items by search */
    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()) || item.category.toLowerCase().includes(searchByTitle)
        )
    }
    /* Display items by category */
    const filteredItemsByCategory = (items, searchByCategory) => {
        return items?.filter(item => item.category.toLowerCase() === searchByCategory.toLowerCase());
        //return items?.filter(item => item.category.toLowerCase().includes(searchByCategory.toLowerCase()))
    }

    const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
    if (searchType === 'BY_TITLE') {
        return filteredItemsByTitle(items, searchByTitle)
        }
        if (searchType === 'BY_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory)
        }
        if (searchType === 'BY_TITLE_AND_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }
        if (!searchType) {
            return items
        }
    }
    useEffect(() => {
        if (searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
        if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
        if (!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
        if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
    }, [items, searchByTitle, searchByCategory])

    return (
        <ShoppingCartContext.Provider 
            value={{
                count,
                setCount,
                cartProducts,
                setCartProducts,
                order,
                setOrder,
                items,
                setItems,
                searchByTitle,
                setSearchByTitle,
                filteredItems,
                searchByCategory,
                setSearchByCategory,
                account,
                setAccount,
                signOut,
                setSignOut,
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    );
};