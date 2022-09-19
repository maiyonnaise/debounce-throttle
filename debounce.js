let debouncedTimer ;

function debounce(callback, time){
    clearTimeout(debouncedTimer); 
    debouncedTimer = setTimeout(callback, time);
};

let throttlePause;
function throttle(callback, time){
    if (throttlePause){
        return ;
    };
    throttlePause = true;
    setTimeout(()=> {
        callback();
        throttlePause = false;
    }, time);
}

