import React from "react";

import '../Styles/Container.css'

function Container(props){
    return  <div className="container">{props.children}</div>
}

export default Container