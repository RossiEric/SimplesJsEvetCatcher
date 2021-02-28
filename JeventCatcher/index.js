var JeventCatcher = (function () {
    
    function ready(fn) {
        if (document.readyState != 'loading') {
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    }
    
    //exec init on ready
    ready(Init);

    function Init() {
        GaListner();
    }
    
    function GaListner() {
    
        console.log('ready');

        //document.querySelectorAll('*').forEach(item => {
        document.querySelectorAll('.GaListener').forEach(item => {
            item.addEventListener('click', e => {
                console.log(e);
    
                console.log('send', 'event', {
                    eventCategory: e.currentTarget.localName,
                    eventAction: e.type,
                    eventLabel: SetEventLabel(e.target)
                    //transport: 'beacon' //para url externas
                    //nonInteraction: true
                });
    
            });
    
            item.addEventListener('submit', e => {
                console.log(e);
            });
    
            //beforeprint
            //change
            //dblclick
            //ended
            //scroll //wheel
            //touchstart
    
    
    
        });
    }

    function SetEventLabel(target) {
        if (target.id != null) {
            return target.id;
        }else if (target.name != null) {
            return target.name;
        }else if (target.value != null) {
            return target.value;
        }
    }

    return {
        Init:Init
    };
}());


