//Voy a almacenar los strings de idiomas en objetos
var languageEn = {
    title: "Translation Toggle",
    subtitle: "Click on your preferred language",
    
}
var languageEs = {
    title: "Toggle de traduccion",
    subtitle: "Haga click en su idioma deseado",
}

var languageFr = {
    title: "Bouton de traduction",
    subtitle: "Cliquez sur votre langue préférée",
}

var languageBr = {
    title: "Botão de tradução",
    subtitle: "Clique no seu idioma preferido",
}

//Declaro y asigno valor a cada bandera (switch) para facilitar las operaciones futuras
let english = document.getElementById('enSwitch');
let spanish = document.getElementById('esSwitch');
let french = document.getElementById('frSwitch');
let portuguese = document.getElementById('brSwitch');

//agrego los escuchadores de eventos

portuguese.addEventListener('click', function() { //si hago click sobre portuguese...
    document.getElementById('title').innerText = languageBr.title; //cambio el titulo utilizando 
    document.getElementById('subtitle').innerText = languageBr.subtitle; //cambio el subtitulo
})

french.addEventListener('click', function() {
    document.getElementById('title').innerText = languageFr.title;
    document.getElementById('subtitle').innerText = languageFr.subtitle;
})

spanish.addEventListener('click', function() {
    document.getElementById('title').innerText = languageEs.title;
    document.getElementById('subtitle').innerText = languageEs.subtitle;
});

english.addEventListener('click', function() {
    document.getElementById('title').innerText = languageEn.title;
    document.getElementById('subtitle').innerText = languageEn.subtitle;
});

