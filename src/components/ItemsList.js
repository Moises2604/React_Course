import React from 'react';
import Item from './Item';

const ItemList = ()=> {
    const items = [1,2,3,4,5,6]
    return(
        <div>
            <h2>LISTADO</h2>
            <ul>
                {
                    items.map(item => <Item/>)
                }
            </ul>
        </div>
    )
}

export default ItemList;