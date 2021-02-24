


function ready(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

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
                eventLabel: e.target.innerText,
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

//exec init on ready
ready(Init);