import React, { useState } from "react";

function CardMusicaContainer(props) {



    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            paddingTop: "150px",
        }}>

            {props.children}

            
          
        </div>



    )
}

export default CardMusicaContainer;
