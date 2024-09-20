import { type Product, productsApi } from "..";

interface GetProductsOptions {
    filterKey?: string
}

const sleep = (ms: number = 2): Promise<boolean> => {
    return new Promise( resolve =>{ 
        setTimeout(() => {
            resolve(true);
        }, ms*1000);
    });
}
export const getProducts = async( { filterKey}:GetProductsOptions):Promise<Product[]> => {
    sleep(5);
    const filterUrl = ( filterKey ) ? `category=${filterKey}` : "";
    
    const { data } = await productsApi.get<Product[]>(`/products?${filterUrl}`);
 
    return data;
}

export const getProductById = async(  id:number ):Promise<Product> => {
    sleep(5);
    
    const { data } = await productsApi.get<Product>(`/products/${id}`);
 
    return data;
}
export interface ProductLike {
    title:       string;
    price:       number;
    description: string;
    category:    string;
    image:       string;
}

export const createProduct = async( product : ProductLike)=>{
    await sleep(5);
    // throw new Error('Error creating product');
    const { data } = await productsApi.post<Product>('/products', product);
    return data;
}