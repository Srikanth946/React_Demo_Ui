import { useState } from "react";
import Child from "./Child";


const Parent = () => {

    const parentDataInParent = 10;
    // let childDataInParent; // state 
    let [childDataInParent, abc] = useState(0);

    const getChildData = (num) => {
        console.log(num); // 15
        // childDataInParent = num;
        abc(num);
    }

    return (

        <div className="container">
            <p>Parent Component</p>
            <p> Parent data in parent component: {parentDataInParent}</p>
            <p> Child data in parent component: {childDataInParent}</p>
            <Child passDataToChild={parentDataInParent}
                fun={getChildData}
            />
        </div>

    );
}
export default Parent;