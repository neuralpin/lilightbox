/*
    Custom Img Lightbox Vanilla JS - GPL-3.0
    @neuralpin - http://neuralpin.com/frontend/lightbox
*/
/* -- Ventana para lightbox y modal dialogs -- */
class liwindow {
    constructor(html) {
        /* Creamos el contenedor principal del lightbox */
        this.container = document.createElement('div');
        this.container.setAttribute('class', 'liwindow-container liwindow-hide');
        this.container.addEventListener('click', this.hide);
        document.body.appendChild(this.container);

        /* Añadimos el html proporcionado */
        if (html != null) this.setContent(html);
    }

    /* Metodo para abrir lightbox */
    show = () => {
        this.container.classList.remove('liwindow-hide');
        document.body.style.overflow = 'hidden';
    }

    /* Metodo para cerrar lightbox */
    hide = () => {
        this.container.classList.add('liwindow-hide');
        document.body.style.overflow = 'auto';
    }

    /* Metodo para agregar contenido al lightbox */
    setContent = cont => this.container.innerHTML = cont;
}
/* -- Image Lightbox -- */
class lilightbox {
    constructor(sel) {
        document.querySelectorAll(sel).forEach(t => {
            t.addEventListener("click", e => {

                e.preventDefault();

                const cont = `
                    <div class="lilightbox">
                        <button type="button" class="lilightbox-close">×</button>
                        <img src="${t.rel}">
                    </div>
                `;

                const liw = new liwindow(cont);

                liw.container.querySelector('.lilightbox').addEventListener('click', e => {
                    e.stopPropagation();
                });

                liw.container.querySelector('.lilightbox-close').addEventListener('click', liw.hide);

                liw.show();

            });
        });
    }
}