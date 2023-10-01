import React from "react";
import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox-next";
import {PaletteTree} from "./palette";
import What from "@/components/whatIDo";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/What">
                <What/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;