import React from "react";

function SayHello(props){
    return (
        <div>
            <p>안녕</p>
            {props.children}
            <span>메롱</span>
        </div>
    );
}

// const SayHello = () => {
//     return (
//         <div>
//             <p>안녕</p>
//             <span>메롱</span>
//         </div>
//     );
// }

export default SayHello;