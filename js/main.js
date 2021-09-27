window.addEventListener ('load', () => {

    // Exercício 1
    let verMais = document.querySelector('#more');
    let post = document.querySelector('.card');
    let conteudo = document.querySelector ('main');

    verMais.addEventListener('click', () => {

        // clonando a estrutura
        let inserir = post.cloneNode(true);
        // duplicando a estrutura (fazendo aparecer embaixo)
        conteudo.insertBefore(inserir, verMais);
    });

    //Exercício 2
    toggleCoracao = (elemento) => {
        let coracao = elemento;
        console.log(coracao.src);
        if (coracao.src.includes('img/icons/heart.svg')){
            coracao.src = 'img/red-heart.png';
           
            coracao.nextElementSibling.innerHTML = '2 likes'
        } else {
            coracao.src = 'img/icons/heart.svg';
           
            coracao.nextElementSibling.innerHTML = '1 like'
        }
    };

     //  toggleHeart = (elemento) => {
    //     let heart = elemento;
    //     console.log(heart.src);
    //     if (heart.src.includes('/img/icons/heart.svg')) {
    //         heart.src = 'img/red-heart.png';
    
    //         //exercicio 4
    //         heart.nextElementSibling.innerHTML = '1 like'
    //     } else {
    //         heart.src = '/img/icons/heart.svg'
    
    //         //exercicio 4
    //         heart.nextElementSibling.innerText = '0 like'
    //     }
    // };

    // Exercício 3
    let sombra = document.querySelector('.busca');
    
    sombra.addEventListener('mouseover', () => {

        sombra.style.boxShadow = '0px 1px 3px black';
    });

    sombra.addEventListener('mouseout', () => {
        sombra.style.boxShadow = 'none';
    });

    // Exercício 4
    let btnVerMais = document.querySelector('#more');

    btnVerMais.addEventListener('mouseover', () => {
        btnVerMais.style.cursor = 'pointer';
    })

})


    