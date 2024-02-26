export function Worker(e:any) {
    let delay = e.data;

    let timer = setTimeout(()=>{
        postMessage(null);
        clearTimeout(timer);
    }, delay);
}