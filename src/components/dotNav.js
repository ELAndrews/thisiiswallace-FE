import React, { useEffect } from "react";
import { DotContainer, NoDot } from "./styling/dotNavStyling";
import EachDot from "./dot";


export default function DotNav(props) {

    return (
        <DotContainer>
            <ul>
                {
                    !props.field ?
                        <NoDot></NoDot> :
                        props.fields.map((curr, index) => {
                            return (
                                <EachDot key={index} curr={curr} id={curr} />
                            )
                        })
                }
            </ul>
        </DotContainer>
    )
}
