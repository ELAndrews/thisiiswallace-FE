import React, { useEffect } from "react";
import { Dot, DotLink, Spot } from "./styling/dotNavStyling";

export default function EachDot(props) {

    return (
        <Dot key={props.index}><DotLink href={`#${props.curr}`} activeClassName="selected" id={`circle-${props.curr}`}><Spot></Spot></DotLink></Dot>
    )
}
