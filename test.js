 (function(){}).__proto__.str = function() {
    return this.toString().replace(/.*\/\*\n([\s\S]*)\n\*\/.*/m, "$1");
};
var txt = (function(){/*
ipa_keymap = {
            a: [["\u0593", "open back unrounded"],
                ["\u0592", "open-mid schwa"],
                ["\u0594", "open back rounded"],
                ["\u0230", "raised open front unrounded"]],
            b: [["\u0595", "vd bilabial implosive"],
                ["\u0665", "vd bilabial trill"],
                ["\u0946", "vd bilabial fricative"]],
            c: [["\u0596", "open-mid back rounded"],
                ["\u0597", "vl alveolopalatal fricative"],
                ["\u0231", "vl palatal fricative"]],
            d: [["\u0599", "vd alveolar implosive"],
                ["\u0598", "vd retroflex plosive"],
                ["\u0240", "vd dental fricative"],
                ["\u0676", "vd postalveolar affricate"]],
            e: [["\u0601", "schwa"],
                ["\u0600", "close-mid schwa"],
                ["\u0602", "rhotacized schwa"],
                ["\u0603", "open-mid front unrounded"],
                ["\u0604", "open-mid central"],
                ["\u0605", "rhotacized open-mid central"],
                ["\u0606", "open-mid central rounded"]],
            f: [["\u0607", "vd palatal plosive"],
                ["\u0644", "vd palatal implosive"]],
            g: [["\u0609", "vd velar plosive"],
                ["\u0608", "vd velar implosive"],
                ["\u0610", "vd uvular plosive"],
                ["\u0667", "vd uvular implosive"]],
            h: [["\u0614", "vd glottal fricative"],
                ["\u0615", "vl multiple-place fricative"],
                ["\u0295", "vl pharyngeal fricative"],
                ["\u0613", "labial-palatal approximant"],
                ["\u0668", "vl epiglottal fricative"],
                ["\u0688", "aspirated", true],
                ["\u0689", "breathy-voice-aspirated", true]],
            i: [["\u0616", "close central unrounded"],
                ["\u0618", "lax close front unrounded"]],
            j: [["\u0669", "vd palatal fricative"],
                ["\u0690", "palatalized", true]],
            // k: {},
            l: [["\u0621", "vd retroflex lateral"],
                ["\u0620", "vl alveolar lateral fricative"],
                ["\u0619", "velarized vd alveolar lateral"],
                ["\u0622", "vd alveolar lateral fricative"],
                ["\u0671", "vd velar lateral"],
                ["\u0695", "labialized", true]],
            m: [["\u0625", "vd labiodental nasal"],
                ["\u0623", "close back unrounded"],
                ["\u0624", "velar approximant"]],
            n: [["\u0331", "vd velar nasal"],
                ["\u0627", "vd retroflex nasal"],
                ["\u0626", "vd palatal nasal"],
                ["\u0628", "vd uvular nasal"]],
            o: [["\u0248", "front close-mid rounded"],
                ["\u0629", "rounded schwa"],
                ["\u0632", "vl bilabial fricative"],
                ["\u0952", "vl dental fricative"],
                ["\u0339", "front open-mid rounded"],
                ["\u0630", "front open rounded"],
                ["\u0664", "bilabial click"]],
            // p: {},
            // q: {},
            r: [["\u0633", "vd (post)alveolar approximant"],
                ["\u0634", "vd alveolar lateral flap"],
                ["\u0638", "vd alveolar tap"],
                ["\u0635", "vd retroflex approximant"],
                ["\u0640", "vd uvular trill"],
                ["\u0641", "vd uvular fricative"],
                ["\u0637", "vd retroflex flap"],
                ["\u0692", "rhotacized", true]],
            s: [["\u0642", "vl retroflex fricative"],
                ["\u0643", "vl postalveolar fricative"]],
            t: [["\u0648", "vl retroflex plosive"],
                ["\u0679", "vl postalveolar affricate"]],
            u: [["\u0649", "close central rounded"],
                ["\u0650", "lax close back rounded"],
                ["\u0651", "vd labiodental approximant"]],
            v: [["\u11377", "voiced labiodental flap"],
                ["\u0652", "open-mid back unrounded"],
                ["\u0611", "vd velar fricative"],
                ["\u0612", "close-mid back unrounded"],
                ["\u0736", "velarized", true]],
            w: [["\u0653", "vl labial-velar fricative"]],
            x: [["\u0967", "vl uvular fricative"]],
            y: [["\u0654", "vd palatal lateral"],
                ["\u0655", "lax close front rounded"]],
            z: [["\u0657", "vd alveolopalatal fricative"],
                ["\u0656", "vd retroflex fricative"],
                ["\u0658", "vd postalveolar fricative"]],
            // / /?
            191: [["\u0660", "glottal plosive"],
                ["\u0673", "vd epiglottal plosive"],
                ["\u0661", "vd pharyngeal fricative"],
                ["\u0674", "vd epiglottal fricative"],
                ["\u0740", "pharyngealized", true]],
            // \/|
            220: [["\u0448", "dental click"],
                ["\u0449", "alveolar lateral click"],
                ["\u0450", "alveolar click"]],
            // 1/!
            49: [["\u0451", "retroflex click"]],
            // ,
            188: [["\u0716", "secondary stress", true]],
            // ;/:
            186: [["\u0720", "length mark", true]],
            // -
            189: [["\u0734", "rhotacized", true],
                ["\u0820", "velarized or pharyngealized", true],
                ["\u0860", "tie bar below", true],
                ["\u0865", "tie bar above", true]],
            // '
            222: [["\u0712", "(primary) stress mark", true],
                ["\u0700", "ejective", true],
                ["\u0805", "voiceless", true],
                ["\u0778", "voiceless", true],
                ["\u0716", "secondary stress", true],
                ["\u0720", "length mark", true],
                ["\u0721", "half-length", true],
                ["\u0692", "rhotacized", true],
                ["\u0688", "aspirated", true],
                ["\u0689", "breathy-voice-aspirated", true],
                ["\u0690", "palatalized", true],
                ["\u0695", "labialized", true],
                ["\u0736", "velarized", true],
                ["\u0740", "pharyngealized", true],
                ["\u0734", "rhotacized", true],
                ["\u0804", "breathy voiced", true],
                ["\u0810", "dental", true],
                ["\u0812", "voiced", true],
                ["\u0816", "creaky voiced", true],
                ["\u0826", "apical", true],
                ["\u0828", "linguolabial", true],
                ["\u0827", "laminal", true],
                ["\u0794", "not audibly released", true],
                ["\u0825", "more rounded", true],
                ["\u0771", "nasalized", true],
                ["\u0796", "less rounded", true],
                ["\u0799", "advanced", true],
                ["\u0800", "retracted", true],
                ["\u0776", "centralized", true],
                ["\u0820", "velarized or pharyngealized", true],
                ["\u0829", "mid-centralized", true],
                ["\u0797", "raised", true],
                ["\u0809", "syllabic", true],
                ["\u0798", "lowered", true],
                ["\u0815", "non-syllabic", true],
                ["\u0792", "avanced tongue root", true],
                ["\u0793", "retracted tongue root", true],
                ["\u0774", "extra-short", true],
                ["\u0779", "extra high tone", true],
                ["\u0769", "high tone", true],
                ["\u0772", "mid tone", true],
                ["\u0768", "low tone", true],
                ["\u0783", "extra low tone", true],
                ["\u0860", "tie bar below", true],
                ["\u0865", "tie bar above", true],
                ["\u8595", "downstep", true],
                ["\u8593", "upstep", true],
                ["\u8599", "global rise", true],
                ["\u8600", "global fall", true]]
        };
*/}).str();
console.log(txt.replace(/\\u(\d+)/g, function(_,d) {
    console.log('repl', d);
    var h = Number(d).toString(16);
    while(h.length < 4) { h = "0" + h; }
    return "\\u" + h;
}));
    