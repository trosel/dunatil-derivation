function isVowel(x) { 
    return ("aeiouAEIOU".indexOf(x) != -1); 
}

function getDerivatives(infinitive) {

    var derivatives = [
        {
        "infinitive": infinitive,
        "formula": "[root]",
        "derivative": "li " + perfectTheme + "e",
        "derivative type": "noun",
        "explanation": "the / a " + infinitive,
        "example": "dom = the / a house"
        },
        {
        "infinitive": infinitive,
        "form used": "perfect theme",
        "formula": "perfect theme + ion" ,
        "derivative": perfectTheme + "ion",
        "derivative type": "adjective",
        "explanation": "[root]-like / [root]-ish / related to [root]",
        "example": "colaboration"
        },
        {
        "infinitive": infinitive,
        "form used": "perfect theme",
        "formula": "perfect theme + or" ,
        "derivative": perfectTheme + "or",
        "derivative type": "noun",
        "explanation": "acting person, thing or factor",
        "example": "administrator"
        },
        {
        "infinitive": infinitive,
        "form used": "perfect theme",
        "formula": "perfect theme + ori" ,
        "derivative": perfectTheme + "ori",
        "derivative type": "adjective",
        "explanation": "destined toward, should act as (adjective of -or)",
        "example": "administratori"
        },
        {
        "infinitive": infinitive,
        "form used": "perfect theme",
        "formula": "perfect theme + iv" ,
        "derivative": perfectTheme + "iv",
        "derivative type": "adjective",
        "explanation": "acting as such, capable of",
        "example": "administrativ"
        },
        {
        "infinitive": infinitive,
        "form used": "perfect theme",
        "formula": "perfect theme + ura" ,
        "derivative": perfectTheme + "ura",
        "derivative type": "noun",
        "explanation": "concrete action or its result",
        "example": "scritura"
        },
        {
        "infinitive": infinitive,
        "form used": "verbal root",
        "formula": "verbal root + age" ,
        "derivative": verbalRoot + "age",
        "derivative type": "noun",
        "explanation": "activity, mainly industrial or professional, also its result, location or time, also its expenses",
        "example": "viage, espionage, portage"
        },
        {
        "infinitive": infinitive,
        "form used": "verbal root",
        "formula": "verbal root + achar" ,
        "derivative": verbalRoot + "achar",
        "derivative type": "verb",
        "explanation": "verb with negative, pejorative meaning",
        "example": "plorachar"
        },
        {
        "infinitive": infinitive,
        "form used": "verbal root",
        "formula": "verbal root + era" ,
        "derivative": verbalRoot + "era",
        "derivative type": "",
        "explanation": "",
        "example": ""
        },
        {
        "infinitive": infinitive,
        "form used": "verbal root",
        "formula": "verbal root + ard" ,
        "derivative": verbalRoot + "ard",
        "derivative type": "noun",
        "explanation": "people with a bad quality",
        "example": "mentard"
        },
        {
        "infinitive": infinitive,
        "form used": "verbal root",
        "formula": "verbal root + on" ,
        "derivative": verbalRoot + "on",
        "derivative type": "noun",
        "explanation": "person characterized by an internal or natural quality",
        "example": "novon"
        },
        {
        "infinitive": infinitive,
        "form used": "verbal root",
        "formula": "verbal root + ore" ,
        "derivative": verbalRoot + "ore",
        "derivative type": "noun",
        "explanation": "status or measurable quality",
        "example": "calore"
        },
        {
        "infinitive": infinitive,
        "form used": "verbal root",
        "formula": "verbal root + uore" ,
        "derivative": verbalRoot + "uore",
        "derivative type": "noun",
        "explanation": "location or utensil",
        "example": "reservuore"
        },
        {
        "infinitive": infinitive,
        "form used": "verbal root",
        "formula": "verbal root + aci" ,
        "derivative": verbalRoot + "aci",
        "derivative type": "adjective",
        "explanation": "tending towards something",
        "example": "tending towards something"
        },
        {
        "infinitive": infinitive,
        "form used": "verbal root",
        "formula": "verbal root + isar" ,
        "derivative": verbalRoot + "isar",
        "derivative type": "verb",
        "explanation": "act in a manner / as",
        "example": "terrorisar"
        },
        {
        "infinitive": infinitive,
        "form used": "verbal root",
        "formula": "verbal root + ificar" ,
        "derivative": verbalRoot + "ificar",
        "derivative type": "verb",
        "explanation": "act in a manner. also forms adjectives:: pacific, magnific, specific",
        "example": "verificar"
        },
        {
        "infinitive": infinitive,
        "form used": "verbal root",
        "formula": "verbal root + ear" ,
        "derivative": verbalRoot + "ear",
        "derivative type": "verb",
        "explanation": "dynamic state of coming and going",
        "example": "flammear"
        }
    ]

    return derivatives
}
