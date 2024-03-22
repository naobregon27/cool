import React from "react";
import QRCode from "react-qr-code"

function Qr() {
    return (
        <div>
            <QRCode value="https://chipper-muffin-0ff3c7.netlify.app/" />
            <br />
            <a href="https://chipper-muffin-0ff3c7.netlify.app/">
            <button>Ir al sitio web</button>
            </a>
        </div>
    )
}

export default Qr