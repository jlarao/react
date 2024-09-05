import { useState } from "react";
import { AddCategory, GifGrid } from "./components";
export const GifExpertApp = () => {
    const [categories, setCategories] =  useState(['Dragon Ball']);
    
    const onAddCategory = ( newCategory) => {
        if (categories.includes(newCategory)) {
            alert('Ya existe esta categoria');
            return;
        }
        setCategories([newCategory, ...categories]);
    }
    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory 
                // onsetCategories={setCategories}
                onNewCategory={onAddCategory}
                />
            
            {
                categories.map(category => (
                    <GifGrid 
                    key={category} 
                    category={category}
                    />
                ))
            }
                
            
        </>
    );
}