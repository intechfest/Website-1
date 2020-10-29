// API
// SRC : https://covid19.mathdro.id/api/countries/ID/
// covid indonesia

fetch('https://covid19.mathdro.id/api/countries/ID/')
.then(response => response.json())
.then(data =>{
    console.log(data)
    let date = new Date(data.lastUpdate);

    let today = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    var day = date.getDay();
    var daylist = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];  
    
    document.querySelector('.last-updated').innerHTML = (`Pembaharuan terakhir : ${daylist[day]}, ${today}/${month}/${year}`);
    document.querySelector('.counter').setAttribute('data-target', data.confirmed.value);
    document.querySelector('.counter2').setAttribute('data-target', data.deaths.value); 
    document.querySelector('.counter3').setAttribute('data-target', data.recovered.value);
});



function scrollAppearText(){
    let description = document.querySelector('.description');  
    let descriptionPosition = description.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 4; 
    
    if (descriptionPosition < screenPosition){
        description.classList.add('description-appear');
    }
}
    window.addEventListener('scroll', scrollAppearText); 

    function scrollAppear(){
        let description = document.querySelector('.description1');  
        let descriptionPosition = description.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 4; 
        
        if (descriptionPosition < screenPosition){
            description.classList.add('description1-appear');
        }
    }
        window.addEventListener('scroll', scrollAppear); 



function scrollevent(){
    let counter = document.querySelector('.counter');
    let counterPosition = counter.getBoundingClientRect().top; 
    let screenPosition = window.innerHeight / 1.1; 
    
    if (counterPosition < screenPosition){
        counter.classList.add('counter-appear'); 
            if(counter.classList.contains('counter-appear')){
                const counters = document.querySelectorAll('.counter'); 
                const speed = 200; 

                counters.forEach(counter => {
                const updateCount = () => { 
                const target = +counter.getAttribute('data-target');
                const count  = +counter.innerText; 

                const inc = parseInt(target/speed) ; 
               

                    if (count < target ){
                        counter.innerText = count + inc; 
                        setTimeout(updateCount, 50);
                    } else {
                        counter.innerText = target;  
                    }
                }
                updateCount(); 
                });
            }
    }
}
    window.addEventListener('scroll', scrollevent)


    function scrollevent2(){
        let counter = document.querySelector('.counter2');
        let counterPosition = counter.getBoundingClientRect().top; 
        let screenPosition = window.innerHeight / 1.1; 
        
        if (counterPosition < screenPosition){
            counter.classList.add('counter-appear2'); 
                if(counter.classList.contains('counter-appear2')){
                    const counters = document.querySelectorAll('.counter2'); 
                    const speed = 200; 

                    counters.forEach(counter => {
                    const updateCount = () => { 
                    const target = +counter.getAttribute('data-target');
                    const count  = +counter.innerText; 

                    const inc = parseInt(target/speed) ; 
                    

                        if (count < target ){
                            counter.innerText = count + inc; 
                            setTimeout(updateCount, 50);
                        } else {
                            counter.innerText = target;  
                        }
                    }
                    updateCount(); 
                    });
                }
        }
    }
            window.addEventListener('scroll', scrollevent2);

        function scrollevent3(){
            let counter = document.querySelector('.counter3');
            let counterPosition = counter.getBoundingClientRect().top; 
            let screenPosition = window.innerHeight / 1.1; 
            
            if (counterPosition < screenPosition){
                counter.classList.add('counter-appear3'); 
                    if(counter.classList.contains('counter-appear3')){
                        const counters = document.querySelectorAll('.counter3'); 
                        const speed = 200; 
        
                        counters.forEach(counter => {
                        const updateCount = () => { 
                        const target = +counter.getAttribute('data-target');
                        const count  = +counter.innerText; 
        
                        const inc = parseInt(target/speed) ; 
                        
        
                            if (count < target ){
                                counter.innerText = count + inc; 
                                setTimeout(updateCount, 50);
                            } else {
                                counter.innerText = target;  
                            }
                        }
                        updateCount(); 
                        });
                    }
            }
        }
            window.addEventListener('scroll', scrollevent3);

