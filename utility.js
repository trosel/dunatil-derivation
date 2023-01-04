function isVowel(x) { 
    return ("aeiouAEIOU".indexOf(x) != -1); 
}

function getDerivatives(word, meaning) {

    var derivatives = [
        {
        "infinitive": word,
        "formula": "[root]",
        "derivative": word,
        "derivative type": "noun",
        "explanation": "the / a " + word,
        "example": "dom"
        },
        {
        "infinitive": word,
        "formula": "[root] + ik" ,
        "derivative": word + "ik",
        "derivative type": "adjective",
        "explanation": meaning + "-like / " + meaning + "-ish / related to " + meaning,
        "example": "domik"
        },
        {
        "infinitive": word,
        "formula": "[root] + it" ,
        "derivative": word + "it",
        "derivative type": "noun",
        "explanation": meaning + "-ness / " + meaning "-ity / the quality or essence of " + meaning,
        "example": "domit"
        },
        {
        "infinitive": word,
        "formula": "[root] + if" ,
        "derivative": word + "if",
        "derivative type": "noun",
        "explanation": "an act of making " + meaning,
        "example": "falif"
        },
        {
        "infinitive": word,
        "formula": "[root] + o" ,
        "derivative": word + "o",
        "derivative type": "adverb",
        "explanation": "to act according to " + meaning,
        "example": "noco"
        },
        {
        "infinitive": word,
        "formula": "[root] + oen" ,
        "derivative": word + "oen",
        "derivative type": "verb",
        "explanation": "to do " + meaning + " / to do as " + meaning + " / to enact " + meaning,
        "example": "tiloen"
        },
        {
        "infinitive": word,
        "formula": "[root] + ed + oen" ,
        "derivative": word + "edoen",
        "derivative type": "verb",
        "explanation": "to do " + meaning + " / to do as " + meaning + " / to enact " + meaning + " in the past",
        "example": "tiledoen"
        },
        {
        "infinitive": word,
        "formula": "[root] + ev + oen" ,
        "derivative": word + "evoen",
        "derivative type": "verb",
        "explanation": "to do " + meaning + " / to do as " + meaning + " / to enact " + meaning + " in the future",
        "example": "tilevoen"
        },
        {
        "infinitive": word,
        "formula": "[root] + oel" ,
        "derivative": word + "oel",
        "derivative type": "adjective (participle)",
        "explanation": "tending to do " + meaning + " / tending to do as " + meaning + " / tending to enact " + meaning,
        "example": "tiloel"
        },
        {
        "infinitive": word,
        "formula": "[root] + ed + oel" ,
        "derivative": word + "edoel",
        "derivative type": "adjective (participle)",
        "explanation": "tended to do " + meaning + " / tended to do as " + meaning + " / tended to enact " + meaning,
        "example": "tiloel"
        },
        {
        "infinitive": word,
        "formula": "[root] + ev + oel" ,
        "derivative": word + "evoel",
        "derivative type": "adjective (participle)",
        "explanation": "intending to do " + meaning + " / intending to do as " + meaning + " / intending to enact " + meaning,
        "example": "tiloel"
        },
        {
        "infinitive": word,
        "formula": "be + [root] + oen" ,
        "derivative": "be" + word + "oen",
        "derivative type": "verb",
        "explanation": "to be the obect of " + meaning + " / to be " + meaning + "ed",
        "example": "beloefoen"
        },
        {
        "infinitive": word,
        "formula": "[root] + ik + it" ,
        "derivative": word + "ikit",
        "derivative type": "noun",
        "explanation": meaning + "ishness / the essense of being like a " + word,
        "example": "domikit"
        },
        {
        "infinitive": word,
        "formula": "[root] + it + ik" ,
        "derivative": word + "itik",
        "derivative type": "adjective",
        "explanation": "relating to " + meaning + "ness",
        "example": "politik"
        },
        {
        "infinitive": word,
        "formula": "[root] + ik + if" ,
        "derivative": word + "ikif",
        "derivative type": "noun",
        "explanation": "an act of making " + meaning + "ish",
        "example": "domikif"
        }
    ]

    return derivatives
}
