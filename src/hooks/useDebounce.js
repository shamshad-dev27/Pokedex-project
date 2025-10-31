function useDebounce(cb,delay=1000){
    let timeid;
    return (...argument) =>{
        clearTimeout(timeid);
        timeid=setTimeout(()=>{
            cb(...argument);
        },delay);
    }
}

export default useDebounce;