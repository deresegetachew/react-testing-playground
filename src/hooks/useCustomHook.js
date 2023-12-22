
export const useCustomHook = () => {

    const handleClick = () => {
       console.log("useCustomHook handleClick")
    };

    return {
        handleClick,
    };
};

