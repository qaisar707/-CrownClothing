import React from 'react'
import {withRouter} from 'react-router-dom'
import './menu-items.styles.scss'


const MenuItems=({title ,imageUrl,id,size,history, match,linkUrl})=>{
    return(
    <div className={`${size} menuItems`} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
    
              
              <div style={{ backgroundImage: `url(${imageUrl})`}}
               className=" background-image"  />
              
                <div  className="content">
                    <h1 className="title">{title.toUpperCase()}</h1>
                    <span className="subtitle">Shop now</span>
                </div>
            </div>
    );

}
export default withRouter(MenuItems);