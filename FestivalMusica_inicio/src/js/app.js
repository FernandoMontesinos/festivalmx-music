document.addEventListener('DOMContentLoaded', function() {
    scrollNav();

    navegacionFija();
});

function navegacionFija(){
    
    const barra = document.querySelector('.header');

    // Registrar el Intersection Observers
    const observer = new IntersectionObserver( function(entries) {
        if(entries[0].isIntersecting) {
            barra.classList.remove('fijo');
        } else{
            barra.classList.add('fijo');
        }
    })
    // Elemento a observar
    observer.observe(document.querySelector('.sobre-festival'));
}

function scrollNav () {
    const enlaces = document.querySelectorAll('.navegacion-principal a');

    enlaces.forEach( function(enlace) {        // Cuando se tiene varios elementos en la variable no se le puede asignar un evento, lo recomendable es ponerle un forEach para que itere en cada uno
        enlace.addEventListener('click', function(e) {
            e.preventDefault();
            const seccion = document.querySelector(e.target.attributes.href.value)
        
            seccion.scrollIntoView({
                behavior: 'smooth'
            });
        });
    })

}