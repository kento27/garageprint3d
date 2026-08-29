const formulario = document.getElementById("formulario");
if (formulario) {
    formulario.addEventListener("submit", async function(event) {

        event.preventDefault();

        alert(
            "⏳ Estamos enviando tu mensaje.\n\n" +
            "Dependiendo de la carga del servidor, el proceso puede tardar hasta 1 minuto.\n" +
            "No cierres esta página ni pulses varias veces el botón."
        );

        const boton = document.getElementById("prova");
        boton.disabled = true;
        
        let nombre = document.getElementById('nombre').value;
        let email = document.getElementById('email').value;
        let telefono = document.getElementById('tel').value;
        let mensaje = document.getElementById('mensaje').value;
        
        console.log(nombre, email, telefono, mensaje);
        
        const res = await fetch("https://garageprint3d.onrender.com/enviar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nombre,
                email,
                telefono,
                mensaje
            })
        });
    
        let texto = await res.text();
        console.log(texto);

        if (res.ok) {
            alert("Mensaje enviado correctamente");
            formulario.reset();
        } else {
            alert("Error al enviar el mensaje");
        }

        boton.disabled = false;
    });
}


// Idiomas index.html
const traducciones = {
    es: {
        // Navbar
        inicio: "Inicio",
        blog: "Blog",
        empresa: "Empresa",
        nosotros: "Sobre nosotros",
        contactanos: "Contactanos",

        // Portada
        h1Portada: "Impresión 3D Personalizada",
        pPortada: "Diseña y pide tu pieza personalizada con calidad profesional.<br>(Web en construcción, disculpa las molestias)",
        btnTecnico: "Técnico",

        // Contador
        contadorMiniTitulo: "VISITAS",
        h2Contador: "Gracias por visitar Garage Print 3D",
        pContador: "Cada visita nos ayuda a seguir creciendo y creando nuevos proyectos de impresión 3D personalizados.",

        // Servicios
        h2Servicios: "Servicios",
        pServicios: "Te ofrecemos la mejor atencion al cliente y servicio.<br>Nos adaptamos a tu comodidad.",
        h3Calidad: "Calidad",
        pCalidad: "Maquinaria de primer nivel y experiencia técnica en ABS, ASA, TPU y PETG.",
        h3Economico: "Económico",
        pEconomico: "Nos ajustamos al máximo para ofrecer la mejor calidad-precio.",
        h3Impresion3D: "Impresión 3D",
        pImpresion3D: "Imprimimos el archivo que nos facilites a precio por hora de impresión sin mas",
        h3Creatividad: "Creatividad",
        pCreatividad: "Damos vida a tus ideas y ofrecemos soluciones creativas",
        h3Diseño: "Diseño",
        pDiseño: "Desarrollamos soluciones con un diseñador especializado",
        h3Mercha: "Mercha",
        pMercha: "Diseñamos y fabricamos llaveros, imanes, tarjetas, marcos, figuras y personalizados",

        // Sobre nosotros
        h2Nosotros: "¿Porque Garage Print 3D?",
        pNosotros: "GaragePrint3D es una empresa familiar nacida de la pasión por la tecnología, la creatividad y la impresión 3D, convirtiendo lo que empezó como un simple hobby en un proyecto profesional con el objetivo de ofrecer productos personalizados y de alta calidad. Gracias a la dedicación y al cuidado por cada detalle, creamos todo tipo de piezas adaptadas a las necesidades de cada cliente, combinando innovación, originalidad y un trato cercano y personalizado.",
        pNosotros2: "Nos especializamos en la fabricación de figuras inspiradas en anime, videojuegos y cultura popular, además de piezas funcionales, llaveros personalizados, tarjetas de presentación y muchos otros diseños únicos realizados mediante impresión 3D.",
        btnNosotrosConocenos: "Conocenos",

        // Contactanos
        h2Contactanos: "Tu elección más óptima y económica",
        liContactanos1: "Trato personalizado",
        liContactanos2: "Precios ajustados",
        liContactanos3: "Implicación en proyectos",
        liContactanos4: "Pasión por el 3D",
        pContactanos: "Contactanos y te ayudaremos en tus necesidades<br>Todos los pedidos se abonaran mediante: efectivo, PayPal o Bizum",
        h3Contactanos: "Contactanos",
        nombre: "Nombre",
        email: "Email",
        tel: "Teléfono",
        mensaje: "Mensaje",
        btnEnviar: "Enviar",

        // Footer
        pFooter1: "Impresiones 3D i personalizaciones",
        pFooter2: "Servicio profesional y de calidad",
        aFooterInicio: "Inicio",
        aFooterBlog: "Blog",
        aFooterNosotros: "Sobre Nosotros",
        aFooterContactanos: "Contactanos",

        // -- Blog --
        h1Blog: "Blog",
        h2Recuerda: "Recuerda",
        pRecuerda: "Nos mueve la pasión por la impresión 3D y es ahora cuando nos disponemos a monetizar parte de nuestro hobby. En este apartado lo mezclamos todo: lo personal y lo comercial. Aquí solo verás proyectos pasados, presentes y futuros de toda índole y condición, un chowseu del 3D.",

        // Posts
        pTeseracto: "¿Recuerdas el teseracto? Nuestro último proyecto de escritorio.",
        pCopaFutbol2026: "Hemos hecho la Copa del Mundo de fútbol para que, cuando llegara el momento, pudiéramos alzarla con orgullo. ¡Y así ha sido!",
        pDJ: "Nos propusieron un proyecto muy chulo para una tabla de mezclas.",
        pLlaverosImanes: "Representación de los tipos de Merchandaising que mas hacemos.",
        pVortex: "Nos propusieron un proyecto muy interesante, hacer una coche para Steam Reacing y nos cnvertimos en uno de los patrocinadores de la escuderia Vorttex. <br>Un placer trabajar con vosotros.",
        pCalavera: "Lapiceros de escritorio de todo tipo y personalizado explicanos tu idea.",
        pLlaveroBarça: "Llavero del Barça",
        pTrofeoEscalabirres: "Trofeos que te diseñamos y/o te los imprimimos, estos fueron renombrados en las fiestas.",
        pMandalorian: "Figuras de The Mandalorian i Grogu Figura para pintar, dinos tu super héroe o personaje preferido, seguro que disfrutaras pintándolo.",
        pTerminator: "Un cliente nos pidió una modificación que acabo siendo un proyecto muyyyy chulo, sensor proximidad, led a batería para colgar donde se quiera y meses de autonomía.",
        pMarcoPredator: "Litografias y cuadros de todo tipo y tamaño, color o para pintar como se quiera.",
        pBetyBoop: "Figuras de todo tipo y tamaño, dinos que quieres y seguro lo encontraremos, no los diseñamos pero sabemos quien lo hace muy bien. <br>En este caso la Betty Boop ",
        pGuitarrista: "Guitarrista",
        pGohan: "Figura de Gohan Bestia",
        pNoviaCadaver: "Figura terminada de la Novia cadaver pintada",
        pNaruto: "Figura de Naruto por piezas",
        pNarutoVideo: "Figura de Naruto terminada",

        // -- Sobre nosotros --
        // Sobre nosotros
        h1Nosotros: "Sobre nosotros",

        // Content
        queEsNosotros: "Que és GaragePrint3D?",
        pNosotros: "GaragePrint3D es una empresa familiar nacida de la pasión por la tecnología y la creatividad, cuyo origen se encuentra en un simple hobby que, con el tiempo, ha evolucionado hacia un proyecto con aspiraciones profesionales. Lo que comenzó como un interés personal por la impresión 3D se ha transformado en una iniciativa emprendedora que busca consolidarse como una fuente de ingresos estable y sostenible.",
        pNosotros2: "El núcleo de GaragePrint3D está formado por un equipo cercano y comprometido, donde cada miembro aporta dedicación y entusiasmo. Este carácter familiar no solo define la forma de trabajar, sino también el trato con los clientes, ofreciendo un servicio cercano, flexible y personalizado. La empresa se distingue por cuidar cada detalle en sus creaciones, asegurando calidad y satisfacción en cada encargo.",
        pNosotros3: "En cuanto a su actividad, GaragePrint3D se especializa en la fabricación de todo tipo de objetos mediante tecnología de impresión 3D. Su catálogo es amplio y versátil: desde figuras inspiradas en anime, videojuegos y cultura popular, hasta piezas funcionales, llaveros personalizados o incluso tarjetas de presentación únicas y originales. Esta diversidad permite adaptarse a diferentes necesidades, ya sean decorativas, prácticas o promocionales.",

        // -- Contactanos --
        h1Contactanos: "Contactanos"
    },
    ca: {
        // Navbar
        inicio: "Inici",
        blog: "Blog",
        empresa: "Empresa",
        nosotros: "Sobre nosaltres",
        contactanos: "Contacta'ns",

        // Portada
        h1Portada: "Impressió 3D Personalitzada",
        pPortada: "Dissenya i demana la teva peça personalitzada amb qualitat professional.<br>(Web en construcció, disculpa les molèsties)",
        btnTecnico: "Tècnic",

        // Contador
        contadorMiniTitulo: "VISITES",
        h2Contador: "Gràcies per visitar Garage Print 3D",
        pContador: "Cada visita ens ajuda a continuar creixent i creant nous projectes d'impressió 3D personalitzats.",

        // Servicios
        h2Servicios: "Serveis",
        pServicios: "T'oferim la millor atenció al client i servei.<br>Ens adaptem a la teva comoditat.",
        h3Calidad: "Qualitat",
        pCalidad: "Maquinària de primer nivell i experiència tècnica en ABS, ASA, TPU i PETG.",
        h3Economico: "Econòmic",
        pEconomico: "Ens ajustem al màxim per oferir la millor qualitat-preu.",
        h3Impresion3D: "Impressió 3D",
        pImpresion3D: "Imprimim l'arxiu que ens facilitis a preu per hora d'impressió i res més",
        h3Creatividad: "Creativitat",
        pCreatividad: "Donem vida a les teves idees i oferim solucions creatives",
        h3Diseño: "Disseny",
        pDiseño: "Desenvolupem solucions amb un dissenyador especialitzat",
        h3Mercha: "Merxa",
        pMercha: "Dissenyem i fabriquem clauers, imants, targetes, marcs, figures i personalitzats",

        // Sobre nosotros
        h2Nosotros: "Per què Garage Print 3D?",
        pNosotros: "GaragePrint3D és una empresa familiar nascuda de la passió per la tecnologia, la creativitat i la impressió 3D, convertint el que va començar com un simple hobby en un projecte professional amb l'objectiu d'oferir productes personalitzats i d'alta qualitat. Gràcies a la dedicació i a la cura per cada detall, creem tota mena de peces adaptades a les necessitats de cada client, combinant innovació, originalitat i un tracte proper i personalitzat.",
        pNosotros2: "Ens especialitzem en la fabricació de figures inspirades en anime, videojocs i cultura popular, a més de peces funcionals, clauers personalitzats, targetes de presentació i molts altres dissenys únics realitzats mitjançant impressió 3D.",
        btnNosotrosConocenos: "Coneix-nos",

        // Contactanos
        h2Contactanos: "La teva elecció més òptima i econòmica",
        liContactanos1: "Tracte personalitzat",
        liContactanos2: "Preus ajustats",
        liContactanos3: "Implicació en projectes",
        liContactanos4: "Passió pel 3D",
        pContactanos: "Contacta'ns i t'ajudarem amb les teves necessitats<br>Totes les comandes s'abonaran mitjançant: efectiu, PayPal o Bizum",
        h3Contactanos: "Contacta'ns",
        nombre: "Nom",
        email: "Email",
        tel: "Telèfon",
        mensaje: "Missatge",
        btnEnviar: "Enviar",

        // Footer
        pFooter1: "Impressions 3D i personalitzacions",
        pFooter2: "Servei professional i de qualitat",
        aFooterInicio: "Inici",
        aFooterBlog: "Blog",
        aFooterNosotros: "Sobre Nosaltres",
        aFooterContactanos: "Contacta'ns",

        // -- Blog --
        h1Blog: "Blog",
        h2Recuerda: "Recorda",
        pRecuerda: "Ens mou la passió per la impressió 3D i és ara quan ens disposem a monetitzar part del nostre hobby. En aquest apartat ho barregem tot: el personal i el comercial. Aquí només veuràs projectes passats, presents i futurs de tota mena i condició, un chowseu del 3D.",

        // Posts
        pTeseracto: "Recordes el tesseracte? El nostre últim projecte d'escriptori.",
        pCopaFutbol2026: "Hem fet la Copa del Món de futbol perquè, quan arribés el moment, la poguéssim alçar amb orgull. I així ha estat!",
        pDJ: "Ens van proposar un projecte molt xulo per a una taula de mescles.",
        pLlaverosImanes: "Representació dels tipus de marxandatge que més fem.",
        pVortex: "Ens van proposar un projecte molt interessant, fer un cotxe per a Steam Reacing i ens vam convertir en un dels patrocinadors de l'escuderia Vorttex. <br>Un plaer treballar amb vosaltres.",
        pCalavera: "Portallapis d'escriptori de tota mena i personalitzat, explica'ns la teva idea.",
        pLlaveroBarça: "Clauer del Barça",
        pTrofeoEscalabirres: "Trofeus que et dissenyem i/o t'imprimim. Aquests van ser reanomenats durant les festes.",
        pMandalorian: "Figures de The Mandalorian i Grogu. Figura per pintar. Digues-nos quin és el teu superheroi o personatge preferit, segur que gaudiràs pintant-lo.",
        pTerminator: "Un client ens va demanar una modificació que va acabar sent un projecte moooolt xulo: sensor de proximitat, llum LED amb bateria per penjar on es vulgui i mesos d'autonomia.",
        pMarcoPredator: "Litografies i quadres de tota mena i mida, en color o per pintar com es vulgui.",
        pBetyBoop: "Figures de tota mena i mida. Digues-nos què vols i segur que ho trobarem. No les dissenyem nosaltres, però sabem qui ho fa molt bé. <br>En aquest cas, la Betty Boop.",
        pGuitarrista: "Guitarrista",
        pGohan: "Figura de Gohan Bèstia",
        pNoviaCadaver: "Figura acabada de la Núvia Cadàver pintada",
        pNaruto: "Figura de Naruto per peces",
        pNarutoVideo: "Figura de Naruto acabada",

        // -- Sobre nosotros --
        h1Nosotros: "Sobre nosaltres",

        // Content
        queEsNosotros: "Què és GaragePrint3D?",
        pNosotros: "GaragePrint3D és una empresa familiar nascuda de la passió per la tecnologia i la creativitat, l'origen de la qual es troba en un simple hobby que, amb el temps, ha evolucionat cap a un projecte amb aspiracions professionals. El que va començar com un interès personal per la impressió 3D s'ha transformat en una iniciativa emprenedora que busca consolidar-se com una font d'ingressos estable i sostenible.",
        pNosotros2: "El nucli de GaragePrint3D està format per un equip proper i compromès, on cada membre aporta dedicació i entusiasme. Aquest caràcter familiar no només defineix la manera de treballar, sinó també el tracte amb els clients, oferint un servei proper, flexible i personalitzat. L'empresa es distingeix per cuidar cada detall en les seves creacions, assegurant qualitat i satisfacció en cada encàrrec.",
        pNosotros3: "Pel que fa a la seva activitat, GaragePrint3D s'especialitza en la fabricació de tota mena d'objectes mitjançant tecnologia d'impressió 3D. El seu catàleg és ampli i versàtil: des de figures inspirades en anime, videojocs i cultura popular, fins a peces funcionals, clauers personalitzats o fins i tot targetes de presentació úniques i originals. Aquesta diversitat permet adaptar-se a diferents necessitats, ja siguin decoratives, pràctiques o promocionals.",

        // -- Contactanos --
        h1Contactanos: "Contacta'ns"
    }
};

function cambioIdioma(Idioma){

  localStorage.setItem("lenguaje", Idioma);
  document.documentElement.lang = Idioma;

  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.getAttribute("data-translate");
    el.innerHTML = traducciones[Idioma][key];
  });

  document.querySelectorAll("[data-placeholder]").forEach(el => {
  const key = el.getAttribute("data-placeholder");
  el.placeholder = traducciones[Idioma][key];
});

}

// si vuelven a la pagina, cargar el idioma guardado de como lo dejo
const cargarIdioma = localStorage.getItem("lenguaje") || "es";

cambioIdioma(cargarIdioma);