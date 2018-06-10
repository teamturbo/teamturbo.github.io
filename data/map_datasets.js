/*

Datenobjekt für Nightlife Innbruck JSON Beispiel

    {
        titel : "",
        info : "",
        metadaten : "",
        attribute1 : "",
        attribute2 : "",
        lat : "",
        lng : "";
    },

    Version lang
        {
        titel : "",
        adresse : "",
        link : "",
        telnr : "",
        email : "",
        opens : "",
        image : "",
        lat : "",
        lng : "";
    },

*/
//--------------- BREAKFAST ------------------------------
const nightlife_bf_ibkDaten = [{
        titel: "BreakfastClub",
        adresse: "Maria-Theresien-Straße 49",
        link: "https://www.breakfast-club.at/",
        telnr: "+43 512 307959",
        email: "kontakt@breakfast-club.at",
        opens: `Essenszeiten:
        um 7:30 kommen wir für EUCH, 
        ab 7:45 bewirten wir EUCH, 
        ab 8:00 kochen wir für EUCH, 
        bis 15:00 kochen wir für EUCH, 
        bis 15:30 bewirten wir EUCH, 
        ab 16:00 brauchen WIR Pause`,
        image: "https://www.breakfast-club.at/mediathek/homepage/logo.png",
        lat: 47.2638761,
        lng: 11.3949641,
    },  
    {
        titel: "Bare Foot Coffee",
        adresse: "Egger-Lienz-Straße 118",
        link: "https://www.barefootcoffee.at/",
        telnr: "+43 512 319193",
        email: "office@barefootcoffee.at",
        opens: `Mo. – Sa. 7:30 – 2:00 Uhr, 
        So & Feiertage: 9:00 – 13:00 Uhr (Brunch Boulevard) und ab 13:00 Uhr durchgehend`,
        image: "https://media-cdn.tripadvisor.com/media/photo-s/08/2d/20/d9/barefoot-coffee-bar-soulkitche.jpg",
        lat: 47.2555365,
        lng: 11.3801291,
    },
    {
        titel: "LUDWIG Das Burger Restaurant",
        adresse: "Museumstraße 3",
        link: "http://www.ludwig-burger.at/innsbruck/burger.html",
        telnr: "+43 512 319 222",
        email: "book@ludwig-burger.at",
        opens: `Mo – Sa   09:00 – 22:00 Uhr, 
        Küche bis 21:30 Uhr`,
        image: "http://www.ludwig-burger.at/files/Uploads/Logo/ludwig-logo.png",
        lat: 47.2673859,
        lng: 11.3954018,
    },
    {
        titel: "Immerland",
        adresse: "Leopoldstraße 27",
        link: "http://www.immerimmerland.at/",
        telnr: "...",
        email: "alice@immerimmerland.at",
        opens: `Di. – Fr. 08.00 – 17.00 Uhr,
        Sa. & So. 09.00 – 14.00 Uhr, 
        (Montag Ruhetag)`,
        image: "http://www.immerimmerland.at/wp-content/uploads/2016/05/logo_b.png",
        lat: 47.2595167,
        lng: 11.3969316,
    },
    {
        titel: "BÄCKEREI-CAFÉ Ruetz",
        adresse: "Hauptbahnhof - Südtiroler Platz 3-5",
        link: "https://www.ruetz.at/baeckereien/standorte/hauptbahnhof_innsbruck_tirol",
        telnr: "0512 587742",
        email: "baecker@ruetz.at",
        opens: `MO - SA:	5:30 - 20 Uhr, 
        Sonn- und Feiertage:	5:30 - 20 Uhr`,
        image: "http://www.citycenter-woergl.at/assets/images/shop/logo_11.jpg",
        lat: 47.2637959,
        lng: 11.4006587,
    },
    {
        titel: "Munding",
        adresse: "Kiebachgasse 16",
        link: "http://www.munding.at/",
        telnr: "+43 512 584118",
        email: "mail@munding.at",
        opens: `täglich von 8.00 - 20.00 Uhr`,
        image: "https://www.herold.at/FS/picture/5/6/9/6423965.jpg",
        lat: 47.2671485,
        lng: 11.3926838,
    },
    {
        titel: "Londons Taste - The Cafe",
        adresse: "Innrain 67",
        link: "http://thecafe.londonstaste.com/",
        telnr: "+43 660 4320768",
        email: "thecafe@londonstaste.com",
        opens: `Montag - Freitag 07.30h bis 19.30h, 
        Samstag 08.00h bis 14.30h, 
        Sonn- und Feiertags geschlossen`,
        image: "http://thecafe.londonstaste.com/wp-content/uploads/2017/04/cropped-LTTC_JPG.jpg",
        lat: 47.2606384,
        lng: 11.3828293,
    },
    {
        titel: "Adlers Hotel",
        adresse: "Brunecker Str. 1",
        link: "https://www.adlers-innsbruck.com/en/restaurantbar/breakfast-and-brunch.html",
        telnr: "+43 512 563100",
        email: "OFFICE@DERADLER.COM",
        opens: `Monday - Saturday
        07:00 - 11:00 am, 
        Each Sunday 11:30 am -  02:30 pm`,
        image: "http://www.karriere-im-hotel.at/files/images/karriereimhotel/hotellogos/adlers-hotel-logo.png",
        lat: 47.266148,
        lng: 11.401491,
    },
];

//--------------- PRESHOPS ------------------------------
const nightlife_shops_ibkDaten = [{
        titel: "JET Stop & Shop",
        adresse: "Griesauweg 20",
        link: "https://www.jet-tankstellen.at/de/tankstellen/details.php",
        telnr: "+43  512 397729",
        email: "austria@jet-tankstellen.at",
        opens: "Öffnungszeiten: täglich 06:00 - 23:00 Uhr",
        image: "images/jet.jpg",
        lat: 47.264516,
        lng: 11.4375579,
    },
    {
        titel: "Spar Express Kranebitten",
        adresse: "Kranebitter Allee 14",
        link: "https://www.spar.at/standorte/spar-express-innsbruck-6020-kranebitter-allee-14",
        telnr: "+43 512 283735",
        email: "shell50288@shellstationen.at",
        opens: "Öffnungszeiten: täglich 06:00 - 23:59 Uhr",
        image: "images/expresskranebitten.png",
        lat: 47.26485388,
        lng: 11.36891631,
    },
    {
        titel: "Spar Express DEZ",
        adresse: "Amraserseestr. 56",
        link: "https://www.spar.at/standorte/spar-express-innsbruck-6020-amraserseestr-56",
        telnr: "+43  512 346137",
        email: "eh20597@sparmarkt.at",
        opens: "Öffnungszeiten: täglich 00:00 - 23:59 Uhr",
        image: "images/expressdez.jpg",
        lat: 47.26316209,
        lng: 11.42949113,
    },
    {
        titel: "Klinik Spar",
        adresse: "Anichstraße 35",
        link: "https://www.jet-tankstellen.at/de/tankstellen/details.php",
        telnr: "+43  512 581930",
        email: "-",
        opens: "Öffnungszeiten: Mo-Fr 07:00 - 19:00 Uhr  Sa 08:00 - 18:00 Uhr   So 08:00 - 17:00 Uhr ",
        image: "images/klinik.jpg",
        lat: 47.26247672,
        lng: 11.38683818,
    },
    {
        titel: "MPreis Bahnhof",
        adresse: "Südtiroler Platz 7",
        link: "http://www.bahnhofcenter-innsbruck.at/einkaufen-taeglicher-bedarf/mpreis/",
        telnr: "+43 5 0321 928068",
        email: "austria@jet-tankstellen.at",
        opens: "Öffnungszeiten: täglich 06:00 - 21:00 Uhr",
        image: "images/bahnhof.jpg",
        lat: 47.26349266,
        lng: 11.40050086,
    },
];

//--------------- BARS ------------------------------
const nightlife_bars_ibkDaten = [{
        titel: "John Montagu",
        adresse: "Höttinger Gasse 7",
        link: "https://www.facebook.com/Johnmontaguibk/",
        telnr: "+43 699 17296655",
        email: "joshua@johnmontagu.biz",
        opens: `Mo-Sa: 17:30 - 02:00 Uhr, 
                So: geschlossen`,
        image: "images/JM.jpg",
        lat: 47.2689176,
        lng: 11.3889535,
    },
    {
        titel: "Cafe Bar Jolly",
        adresse: "Müllerstraße 21",
        link: "https://jolly-bar.at/",
        telnr: "+43 512 575190",
        email: "jollypost@jolly-bar.at",
        opens: `täglich ab 17:00 Uhr`,
        image: "images/Jolly.jpg",
        lat: 47.2611646,
        lng: 11.3917745,       
    },
    {
        titel: "Cafe Bar Moustache",
        adresse: "Herzog-Otto-Straße 8",
        link: "https://www.facebook.com/Johnmontaguibk/",
        telnr: "+43 680 2163908",
        email: "info@cafe-moustache.at",
        opens: `Mo: geschlossen
                Di-Sa: 11:00 - 02:00 Uhr,
                So: 10:00 - 02:00 Uhr`,
        image: "images/Moustache.jpg",
        lat: 47.2693244,
        lng: 11.3924491,        
    },
    {
        titel: "Treibhaus",
        adresse: "Angerzellgasse 8",
        link: "https://www.treibhaus.at/",
        telnr: "+43 512 572000",
        email: "office@treibhaus.at",
        opens: `Mo-Sa: 10:00 - 01:00 Uhr, 
                So: 16:00- 01:00`,
        image: "images/Th.jpg",
        lat: 47.2675726,
        lng: 11.3953586,
    },
    {
        titel: "Zappa Music Bar",
        adresse: "Rechengasse 5",
        link: "www.zappa.at",
        telnr: "+43 512 581057",
        email: "office@zappa.at",
        opens: `täglich 18:00 - 02:00`,
        image: "images/zappa.png",
        lat: 47.262087,
        lng: 11.383046,
    },
    {
        titel: "Limerick Bill's Irish Pub",
        adresse: "Maria-Theresien-Straße 9",
        link: "https://m.facebook.com/Limerick-Bills-Irish-PUB-158817617488144/",
        telnr: "+43 512 58201114",
        email: " - ",
        opens: `täglich 16:00 - 06:00`,
        image: "images/irish.jpg",
        lat: 47.266511,
        lng: 11.393693,
        },            
];

//--------------- CLUBS ------------------------------
const nightlife_clubs_ibkDaten= [{
        titel: "Abyss",
        adresse: "Amraser-See-Str. 5",
        link: "http://www.abyssbar.com/",
        telnr: "+43 512 890143",
        email: "info@abyssbar.com",
        opens: `Mi-Do: 19:30 - 03:00 Uhr,
                Fr-Sa: 19:30 - 06:00 Uhr`,
        image: "images/abyss.jpg",
        lat: 47.261363,
        lng: 11.422251,
    },
    {
        titel: "Cubique",
        adresse: "Karmelitergasse 21",
        link: "https://www.facebook.com/clubcubique/",
        telnr: "+43 512 890143",
        email: " - ",
        opens: `Fr-Sa: 23:00 - 06:00 Uhr`,
        image: "images/cubique.jpg",
        lat: 47.2578698,
        lng: 11.4003268,
    },
    {
        titel: "Project",
        adresse: "Ing-Etzel-Straße 23",
        link: "http://bar.project-innsbruck.at/",
        telnr: " - ",
        email: "contact@project-innsbruck.at",
        opens: `Mi: 23:00 - 05:00 Uhr,
                Fr-Sa: 23:00 - 06:00 Uhr`,
        image: "images/project.jpg",
        lat: 47.2684046,
        lng: 11.4020554,
    },
    {
        titel: "Tante Emma Club",
        adresse: "Ing-Etzel-Straße 17",
        link: "https://www.facebook.com/TanteEmmaClub",
        telnr: "+43 810 001503",
        email: " - ",
        opens: `Fr: 24:00 - 8:00 Uhr,
                Sa: 24:00 - 09:00 Uhr`,
        image: "images/emma.jpg",
        lat: 47.2675406,
        lng: 11.4018499,
    },
    {
        titel: "Dachsbau",
        adresse: "Herzog-Otto-Straße 8",
        link: "https://www.facebook.com/1dachsbau/",
        telnr: " - ",
        email: "garderobe@hohesleben.at",
        opens: `Di: 23:00 - 06:00 Uhr,
                Fr - Sa: 23:00 - 07:00 Uhr`,
        image: "images/dachs.jpg",
        lat: 47.2691799,
        lng: 11.3918952,
    }, 
    {
        titel: "felix",
        adresse: "Brunecker Str. 3",
        link: "http://www.felix-innsbruck.at/",
        telnr: " - ",
        email: "hallo@felix-innsbruck.at",
        opens: `Mo: 20:00 - 04:00 Uhr,
                Do: 18:00 - 04:00 Uhr,
                Fr - Sa: 20:00 - 05:00 Uhr`,
        image: "images/felix.png",
        lat: 47.265871,
        lng: 11.398979,
    },

];

//--------------- LATENIGHT SNACKS ------------------------------
const nightlife_latesnack_ibkDaten = [{
    titel: "Kaiser Stube",
    adresse: "Museumstrasse 31",
    link: "http://kaiserstube.com/",
    telnr: "+43 512 589889",
    email: "office@kaiserstube.com",
    opens: "Öffnungszeiten: täglich 19:00 - 04:00 Uhr",
    image: "images/kaiserstube.jpg",
    lat: 47.2666195,
    lng: 11.4009508,
},
{
    titel: "Chili Kebab",
    adresse: "Angerzellgasse 10",
    link: "www.chili-kebap.com",
    telnr: "+43 512 263163",
    email: "info@chili-kebap.com",
    opens: "Öffnungszeiten: täglich 10:00 - 04:00 Uhr",
    image:"images/chili.jpg",
    lat: 47.26761905,
    lng: 11.39616007,
},
{
    titel: "Toskana Innsbruck",
    adresse: "Viaduktbogen 12",
    link: "https://www.toskana-innsbruck.at/",
    telnr: "+43 512 570742 ",
    email: "-",
    opens: "Öffnungszeiten: täglich 18:00 - 02:00 Uhr",
    image: "images/toskana.jpg",
    lat: 47.26710317,
    lng: 11.40147901,
},
{
    titel: "Jedermann`s",
    adresse: "Museumstraße 9",
    link: "http://www.jedermanns.at/",
    telnr: "+43 699 12903692 ",
    email: "@jedermanns.at",
    opens: "Öffnungszeiten: Mo-Do 10:30 - 22:00 Uhr  Fr-Sa 10:30 - 06:00 Uhr  So 15:00 - 22:00 Uhr",
    image: "images/jedermanns.jpg",
    lat: 47.2673363,
    lng: 11.3956699,
},
{
    titel: "Siedepunkt",
    adresse: "Maria Theresien Straße (neben Annasäule)",
    link: "http://siedepunkt.gusti.at/",
    telnr: "+43 664 3652344",
    email: "office@siedepunkt.at",
    opens: "Öffnungszeiten: täglich 18:30 - 02:00 Uhr",
    image: "images/siedepunkt.jpg",
    lat: 47.26620839,
    lng: 11.39424089,
},
{
    titel: "Mc Donalds",
    adresse: "Herzog Friedrich Straße 35",
    link: "https://www.mcdonalds.at/6020-herzog-friedrich-strasse-35",
    telnr: "+43 512 562807 ",
    email: "at-store0072@restaurant.at.mcd.com ",
    opens: "Öffnungszeiten: So-Do 08:00 - 00:00 Uhr  Fr-Sa 08:00 - 01:00 Uhr",
    image: "images/mci.jpg",
    lat: 47.26752071,
    lng: 11.39369162,
},
{
    titel: "Inndrinks Lieferservice",
    adresse: "Vor deine Tür",
    link: "https://www.inndrinks.at/",
    telnr: "+43 664 5477199 ",
    email: "info@inndrinks.at",
    opens: "Öffnungszeiten: Mo-Do 20:00 - 02:00 Uhr  Fr-Sa 20:00 - 03:00 Uhr  So 18:00 - 00:00 Uhr",
    image: "images/inndrinks.jpg",
    lat: 47.2544515,
    lng: 11.3893146,
},
];