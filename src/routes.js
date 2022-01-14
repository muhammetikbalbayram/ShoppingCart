import Homepage from "@/components/Homepage";
import ShoppingCart from "@/components/ShoppingCart";
import Favorites from "@/components/Favorites";
import Product from "@/components/Product";
import CreateProduct from "@/components/CreateProduct";


export const routes = [
    {
        path : '',
        component : Homepage
    },
    {
        path : '/shoppingcart',
        component: ShoppingCart
    },
    {
        path : '/favorites',
        component: Favorites
    },
    {
        path : '/product/:id',
        component: Product
    },
    {
        path: '/create',
        component: CreateProduct
    }
]

