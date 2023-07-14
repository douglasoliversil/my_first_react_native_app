import { useCallback, useState } from "react";

export const useApp = () => {
    const [name, setName] = useState(`test`);

    const handleChangeName = useCallback(() => {
        setName("jose");
    }, []);

    return {
        name,
        handleChangeName
    }
}