function start() {
    const urlParams = new URLSearchParams(window.location.search);
    const value = urlParams.get('value');
    
    switch(value) {
        case '1': { 
            var difficultName = document.getElementById('difficult');
            difficultName.innerHTML = ' Легко '
            break;
        }
        case '2':{ 
            var difficultName = document.getElementById('difficult');
            difficultName.innerHTML = ' Средне '
            break; 
        }
        case '3':{ 
            console.log('start')
            var difficultName = document.getElementById('difficult');
            difficultName.innerHTML = ' Сложно ' 
            break;
        }  
    }
}

document.addEventListener('DOMContentLoaded', start);