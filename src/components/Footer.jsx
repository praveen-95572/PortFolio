import React from 'react'

function Footer(){
    const footer={
        textAlign:"center",
        fontSize: "20px",
        fontWeight:"600",
        color: "dimgray",
        display: "inline-block",
        width: "100%",
        padding:"20px",
    };
   
    return (
        <footer style={footer}>
            <p>Made with ❤️ by Praveen Bisht</p>
        </footer>
    )
}

export default Footer;