import { useCallback, useState } from "react";
import { useApp } from "./useApp";

const Test = () => {

    const { handleChangeName } = useApp();

    return <div onClick={handleChangeName}>Test</div>;
}

export default Test;