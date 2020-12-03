// vim:set sw=2 ts=2 sts=2 expandtab:
const replace = [
  {
    "name": "Darmanin",
    "replaceWith": "L'Idiocrate de l'Intérieur"
  },
  {
    "name": "Bruno Le Maire|Bruno Lemaire",
    "replaceWith": "Iznogoud"
  },
  {
    "name": "Jean Castex",
    "replaceWith": "Croque-Mémés"
  },
  {
    "name": "Macron|Emmanuel Macron",
    "replaceWith": "Idiocrate Ier"
  },
  {
    "name": "Barbara Pompili",
    "replaceWith": "Barbara 'Pump it up'"
  },
  {
    "name": "Jean-Michel Blanquer",
    "replaceWith": "Jean-Mi sans Ami"
  },
  {
    "name": "Marlène Schiappa",
    "replaceWith": "L'Écervelée"
  },
  {
    "name": "Élisabeth Borne|Elisabeth Borne",
    "replaceWith": "Madame Bornée"
  },
  {
    "name": "Éric Dupond-Moretti",
    "replaceWith": "L'Acquittator"
  },
  {
    "name": "Gabriel Attal",
    "replaceWith": "Gabi-Gamin",
  },
  {
    "name": "Jean-Yves Le Drian|Jean Yves Le Drian|Jean-Yves le Drian",
    "replaceWith": "Doudou Jean-Yves"
  },
  {
    "name": "Agnès Pannier-Runacher",
    "replaceWith": "Agnès Panner-Runachier"
  },
  {
    "name": "Cédric O|Cedric O",
    "replaceWith": "Cédric Samsung"
  },
  {
    "name": "Florence Parly",
    "replaceWith": "Florence pardi !"
  },
  {
    "name": "Roselyne Bachelot",
    "replaceWith": "La Visiteuse"
  },
  {
    "name": "Olivier Véran",
    "replaceWith": "Le Ministre de la Pénurie"
  },
    {
    "name": "d'Olivier Véran",
    "replaceWith": "du Ministre de la Pénurie"
  },
  {
    "name": "Frédérique Vidal|Frederique Vidal",
    "replaceWith": "Véridique Fidal"
  },
  {
    "name": "Amélie de Montchalin|Amélie De Montchalin",
    "replaceWith": "Homélie de Montchalin"
  },
  {
    "name": "Franck Riester",
    "replaceWith": "Franck l'Outilleur"
  },
  {
    "name": "Emmanuelle Wargon",
    "replaceWith": "Fleur de Béton"
  },
  {
    "name": "Jean-Baptiste Djebbari",
    "replaceWith": "JB le Djeb"
  },
  {
    "name": "Olivier Dussopt",
    "replaceWith": "Olivier Pussodt"
  },
  {
    "name": "Geneviève Darrieussecq",
    "replaceWith": "Geneviève Darrieu Demi-Sec"
  },
  {
    "name": "Sébastien Lecornu",
    "replaceWith": "Sébastien Lunicorn"
  },
  {
    "name": "le ministre",
    "replaceWith": "l'idiocrate"
  },
  {
    "name": "Ministre",
    "replaceWith": "Idiocrate"
  },
  {
    "name": "Nicolas Sarkozy",
    "replaceWith": "P'tit Coq"
  },
  {
    "name": "Marine Le Pen",
    "replaceWith": "Marine Le Pen de Mort"
  },
  {
    "name": "Christian Estrosi",
    "replaceWith": "Christian Estropie"
  },
    {
    "name": "Mélenchon",
    "replaceWith": "Méronchon"
  },
  {
    "name": "Castaner",
    "replaceWith": "Castagnettes"
  },
  {
    "name": "Éric Zemmour|Eric Zemmour",
    "replaceWith": "Éricorinne Zemmour"
  },
];
/* For copy/paste
  {
    "name": "",
    "replaceWith": ""
  },
*/

// Create array of regexps with all above elements
const rExps = []
replace.forEach((element) => {
  rExps.push([new RegExp(element["name"], "g"), element["replaceWith"]])
})

var textNode;
let walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);

// Replace in title
rExps.forEach(function (rExp) {
  document.title = document.title.replace(rExp[0], rExp[1]);
});

// Replace in body
while (textNode = walk.nextNode()) {
  rExps.forEach(function (rExp) {
    textNode.nodeValue = textNode.nodeValue.replace(rExp[0], rExp[1]);
  });
}
