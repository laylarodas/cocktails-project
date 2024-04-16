import { ChangeEvent, useEffect, useMemo, useState, FormEvent } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useAppStore } from '../stores/useAppStore';


export const Header = () => {

    const [searchFilters, setSearchFilters] = useState({
        ingredient: '',
        category: ''
    });
    const {pathname} = useLocation();
    const isHome = useMemo(() => location.pathname === '/', [pathname]);

    const fetchCategories = useAppStore((state) => state.fetchCategories);
    const categories = useAppStore((state) => state.categories);
    const searchRecipes = useAppStore((state) => state.searchRecipes);
    const showNotification = useAppStore((state) => state.showNotification);

    useEffect(() => {
        fetchCategories();
    }, []);

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        setSearchFilters({
            ...searchFilters,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

     
        if(Object.values(searchFilters).includes('')) {
            showNotification({
                text: 'All fields are required',
                error: true
            })
            return;
        }

        //Call the API
        searchRecipes(searchFilters)
    }

    return (
        <header className={ isHome ? " bg-header bg-center  bg-cover" : " bg-slate-900"}>
            <div className="mx-auto container px-14 py-16">
                <div className="flex justify-between items-center">
                    <div>
                        <img src="/logo.svg" alt="logo" className="w-32" />
                    </div>
                    <nav className='flex gap-4'>
                        <NavLink to="/" className={({ isActive }) => isActive ? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold'}>Home</NavLink>
                        <NavLink to="/favourites" className={({ isActive }) => isActive ? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold'}>Favourites</NavLink>
                    </nav>
                </div>
                {isHome && (
                    <form action="" className='md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6' onSubmit={handleSubmit}>
                        <div className='space-y-4'>
                            <label htmlFor="ingredient" className=' block text-white uppercase font-extrabold text-lg'>
                                Ingredients
                            </label>
                            <input type="text" id='ingredient' name='ingredient'
                                className='p-3 w-full rounded-lg focus:outline-none'
                                placeholder='Enter an ingredient. Ej: vodka, tequila, etc.'
                                value={searchFilters.ingredient}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="" className=' block text-white uppercase font-extrabold text-lg'>
                                Category
                            </label>

                            <select name="category" id="category" className='p-3 w-full rounded-lg focus:outline-none'
                                onChange={handleChange}
                                value={searchFilters.category}
                            >
                                <option value="">--- Select ---</option>
                                {categories.drinks.map((category) => (
                                    <option key={category.strCategory} value={category.strCategory}>{category.strCategory}</option>
                                ))}
                            </select>
                        </div>
                        <input type="submit" value='Search Recipes' className='cursor-pointer bg-orange-800 hover:bg-orange-900 text-white font-bold w-full p-2 rounded-lg uppercase'/>
                    </form>
                )}
            </div>
        </header>
    )
}
