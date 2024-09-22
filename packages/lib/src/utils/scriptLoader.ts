export function loadScript(src: string, isAsync: {async:boolean}, defer: {defer:boolean}) {
    return new Promise((resolve, reject) => {
        if(typeof isAsync === "undefined") {
            isAsync = {async: true};
        }
        if(typeof defer === "undefined"){
            defer = {defer: true};
        }
      const script = document.createElement('script');
      script.src = src;
      script.async = isAsync.async;
      script.defer = defer.defer;
      script.onload = () => resolve(script);
      script.onerror = () => reject(new Error(`Script load error for ${src}`));
      document.head.append(script);
    });
  }