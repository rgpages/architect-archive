
if(typeof(tritonIdSync) != "object" || typeof(tritonIdSync.load_pixel) != "function") {
    var tritonIdSync = {
        load_pixel: function(src) {
            var img;
            if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)){
                img = new Image();
            } else {
                img = document.createElement('img');
            }
            img.src = src;
            img.width = 0;
            img.height = 0;
            img.className = "triton-pixel";
            document.body.appendChild(img);
        }
    }
}
    
tritonIdSync.load_pixel("https://loadus.exelator.com/load/?g=600&j=0&stn=OMNY_FROMTHENEWSROOMGATEHOUSEMEDIA_P&p=1100&pub=GateHouse+Media");