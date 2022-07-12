import mdm from '../img/mdm.png'
import krypters from'../img/krypters.png'
import maisonEloe from'../img/maisoneloe.png'
import blog from'../img/blog.png'
import store from'../img/store.png'
import portfolio from'../img/portfolio.png'
import travel from'../img/travel.png'

export const projects = [
    {
        id:1,
        name:"Mern Blog",
        picture:blog,
        tech:["React", "NodeJs", "MongoDb"],
        desc:"Interactive blog with user handling , blog posts, comments and some other features, etc...",
        descFR:"Blog Interactif avec gestion des utilisateurs, commentaires, etc...",
        live:"https://locawaveblog.netlify.app/",
        code:"https://github.com/Dolomys/FirstBlog",
        cat: ["All", "Personal"]
    },
    {
        id:2,
        name:"Ecommerce Front- responsive",
        picture:store,
        tech:["React"],
        desc:"Ecommerce WebSite",
        descFR:"Site Ecommerce",
        live:"https://lwstore.netlify.app/",
        code:"https://github.com/Dolomys/LW-Store",
        cat: ["All", "Personal"]
    },
    {
        id:3,
        name:"Portfolio",
        picture:portfolio,
        tech:["React"],
        desc:"This Website",
        descFR:"Site Ecommerce",
        live:"https://alexandre-florent.com/",
        code:"https://github.com/Dolomys/Portfolio",
        cat: ["All", "Personal"]
    },
    {
        id:4,
        name:"Travel App",
        picture:travel,
        tech:["ReactJs", "MongoDB", "Firebase", 'NodeJs', 'Sass'],
        desc:"Travel App, you can see and add your spots to the map and interact with them",
        descFR:"SApplication de voyage, vous pouvez ajouter vos spots à la carte et intéragir avec",
        live:"https://locawwave.netlify.app",
        code:"https://github.com/Dolomys/LocaWave",
        cat: ["All", "Personal"],
    },
    {
        id:5,
        name:"Krypters",
        picture:krypters,
        tech:["PHP", "Javascript", "JQuery", "Wordpress"],
        desc:"Back office User, panier, checkout and plugin crypto",
        descFR:"Back office Utilisateur, panier, checkout et plugin crypto",
        live:"https://krypters.pro/fr/accueil-2/",
        cat: [ "All", "Professional"]
    },
    {
        id:6,
        name:"Maison Eloe",
        picture:maisonEloe,
        tech:["PHP", "Javascript", "JQuery", "Wordpress"],
        desc:"Back Office user",
        descFR:"Back Office utilisateur",
        live:"https://maisoneloe.com/",
        cat: [ "All", "Professional"]
    },
    {
        id:7,
        name:"Maison du Menuisier",
        picture:mdm,
        tech:["PHP", "Javascript", "JQuery", "Wordpress"],
        desc:"Back Office user",
        descFR:"Back Office utilisateur",
        live:"https://maisoneloe.com/",
        cat: [ "All", "Professional"]
    },
]