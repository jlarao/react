import { memo } from "react";

export const Small = memo(({ value }) => {

    
    console.log('Small Render');
    return (
        <small>{ value }</small>
    )
})