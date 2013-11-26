(function () {
    
    var ipa_keymap = {
            a: [["\u0251", "open back unrounded"],
                ["\u0250", "open-mid schwa"],
                ["\u0252", "open back rounded"],
                ["\u00e6", "raised open front unrounded"]],
            b: [["\u0253", "vd bilabial implosive"],
                ["\u0299", "vd bilabial trill"],
                ["\u03b2", "vd bilabial fricative"],
                ["\u1d5d", "rounded coarticulation"],
                ["\u1d47", "labial coarticulation"]],
            c: [["\u0254", "open-mid back rounded"],
                ["\u0255", "vl alveolopalatal fricative"],
                ["\u00e7", "vl palatal fricative"]],
            d: [["\u0257", "vd alveolar implosive"],
                ["\u0256", "vd retroflex plosive"],
                ["\u00f0", "vd dental fricative"],
                ["\u02a4", "vd postalveolar affricate"]],
            e: [["\u0259", "schwa"],
                ["\u0258", "close-mid schwa"],
                ["\u025a", "rhotacized schwa"],
                ["\u025b", "open-mid front unrounded"],
                ["\u025c", "open-mid central"],
                ["\u025d", "rhotacized open-mid central"],
                ["\u025e", "open-mid central rounded"]],
            f: [["\u025f", "vd palatal plosive"],
                ["\u0284", "vd palatal implosive"]],
            g: [["\u0261", "vd velar plosive"],
                ["\u0260", "vd velar implosive"],
                ["\u0262", "vd uvular plosive"],
                ["\u029b", "vd uvular implosive"]],
            h: [["\u0266", "vd glottal fricative"],
                ["\u0267", "vl multiple-place fricative"],
                ["\u0127", "vl pharyngeal fricative"],
                ["\u0265", "labial-palatal approximant"],
                ["\u029c", "vl epiglottal fricative"],
                ["\u02b0", "aspirated", true],
                ["\u02b1", "breathy-voice-aspirated", true]],
            i: [["\u0268", "close central unrounded"],
                ["\u026a", "lax close front unrounded"]],
            j: [["\u029d", "vd palatal fricative"],
                ["\u02b2", "palatalized", true]],
            // k: {},
            l: [["\u026d", "vd retroflex lateral"],
                ["\u026c", "vl alveolar lateral fricative"],
                ["\u026b", "velarized vd alveolar lateral"],
                ["\u026e", "vd alveolar lateral fricative"],
                ["\u029f", "vd velar lateral"],
                ["\u02b7", "labialized", true]],
            m: [["\u0271", "vd labiodental nasal"],
                ["\u026f", "close back unrounded"],
                ["\u0270", "velar approximant"],
                ["\u1d50", "nasal coarticulation", true]],
            n: [["\u014b", "vd velar nasal"],
                ["\u0273", "vd retroflex nasal"],
                ["\u0272", "vd palatal nasal"],
                ["\u0274", "vd uvular nasal"],
                ["\u207f", "nasal coarticulation", true],
                ["\u1d51", "nasal coarticulation", true]],
            o: [["\u00f8", "front close-mid rounded"],
                ["\u0275", "rounded schwa"],
                ["\u0278", "vl bilabial fricative"],
                ["\u03b8", "vl dental fricative"],
                ["\u0153", "front open-mid rounded"],
                ["\u0276", "front open rounded"],
                ["\u0298", "bilabial click"]],
            // p: {},
            // q: {},
            r: [["\u0279", "vd (post)alveolar approximant"],
                ["\u027a", "vd alveolar lateral flap"],
                ["\u027e", "vd alveolar tap"],
                ["\u027b", "vd retroflex approximant"],
                ["\u0280", "vd uvular trill"],
                ["\u0281", "vd uvular fricative"],
                ["\u027d", "vd retroflex flap"],
                ["\u02b4", "rhotacized", true]],
            s: [["\u0282", "vl retroflex fricative"],
                ["\u0283", "vl postalveolar fricative"]],
            t: [["\u0288", "vl retroflex plosive"],
                ["\u02a7", "vl postalveolar affricate"]],
            u: [["\u0289", "close central rounded"],
                ["\u028a", "lax close back rounded"],
                ["\u028b", "vd labiodental approximant"]],
            v: [["\u2c71", "voiced labiodental flap"],
                ["\u028c", "open-mid back unrounded"],
                ["\u0263", "vd velar fricative"],
                ["\u0264", "close-mid back unrounded"],
                ["\u02e0", "velarized", true]],
            w: [["\u028d", "vl labial-velar fricative"],
               ["\u02b7", "labialized", true]],
            x: [["\u03c7", "vl uvular fricative"]],
            y: [["\u028e", "vd palatal lateral"],
                ["\u028f", "lax close front rounded"]],
            z: [["\u0291", "vd alveolopalatal fricative"],
                ["\u0290", "vd retroflex fricative"],
                ["\u0292", "vd postalveolar fricative"]],
            // ?
            191: [["\u0294", "glottal plosive"],
                ["\u02a1", "vd epiglottal plosive"],
                ["\u0295", "vd pharyngeal fricative"],
                ["\u02a2", "vd epiglottal fricative"],
                ["\u02e4", "pharyngealized", true],
                ["\u02c0", "glottalized", true]],
            // ~
            192: [["\u02de", "rhotacized", true],
                 ["\u0303", "nasalized", true],
                 ["\u0334", "velarized or pharyngealized", true],
                 ["\u0330", "creaky voiced", true]],
            // |
            220: [["\u01c0", "dental click"],
                ["\u01c1", "alveolar lateral click"],
                ["\u01c2", "alveolar click"]],
            // 1/!
            //49: [["\u01c3", "retroflex click"]],
            // ,
            188: [["\u02cc", "secondary stress", true]],
            // :
            186: [["\u02d0", "length mark", true]],
            // -
            189: [["\u02de", "rhotacized", true],
                ["\u0334", "velarized or pharyngealized", true],
                ["\u035c", "tie bar below", true],
                ["\u0361", "tie bar above", true],
                ["\u0320", "retracted", true],
                ["\u032a", "dental", true],
                ["\u033a", "apical", true]],
            // .
            190: [["\u02cc", "secondary stress", true],
                ["\u0329", "syllabic", true],
                ["\u0325", "voiceless", true],
                ["\u032c", "voiced", true],
                ["\u0324", "breathy voiced", true],
                ["\u031f", "advanced", true],
                ["\u0320", "retracted", true],
                ["\u0330", "creaky voiced", true],
                ["\u032a", "dental", true],
                ["\u033a", "apical", true],
                ["\u033c", "linguolabial", true],
                ["\u033b", "laminal", true],
                ["\u0339", "more rounded", true],
                ["\u031c", "less rounded", true],
                ["\u031d", "raised", true],
                ["\u031e", "lowered", true],
                ["\u032f", "non-syllabic", true],
                ["\u0318", "avanced tongue root", true],
                ["\u0319", "retracted tongue root", true],
                ["\u035c", "tie bar below", true]],
            // '
            222: [["\u02c8", "primary stress", true],
                ["\u02d1", "half-length", true],
                ["\u02bc", "ejective", true],
                ["\u030a", "voiceless", true],
                ["\u031a", "not audibly released", true],
                ["\u0308", "centralized", true],
                ["\u033d", "mid-centralized", true],
                ["\u0306", "extra-short", true],
                ["\u030b", "extra high tone", true],
                ["\u0301", "high tone", true],
                ["\u0304", "mid tone", true],
                ["\u0300", "low tone", true],
                ["\u030f", "extra low tone", true],
                ["\u2193", "downstep"],
                ["\u2191", "upstep"],
                ["\u2197", "global rise"],
                ["\u2198", "global fall"],
                ["\u0361", "tie bar above", true]]
        }; 
    $.fn.ipa_ime = function() {
        var ime_input = $(this),
            ime_suggest = $('<div class="ime_suggest" />').insertAfter(ime_input);
    
        var ime = {
            selected: 0,
            apply: function(numeric_index) {
                var glyph;
                if(numeric_index) {
                    glyph = $('#ime_button_' + numeric_index).data('char');
                } else {
                    // Select the active glyph
                    glyph = $('.ime_selected').data('char');
                }
                if(glyph) {
                    // get cursor position
                    var val = ime_input.val();
                    var pos = 0;
                    if('selectionStart' in ime_input[0]) {
                        pos = ime_input[0].selectionStart;
                    } else if('selection' in document) {
                        ime_input.focus();
                        var sel = document.selection.createRange();
                        var sel_len = document.selection.createRange().text.length;
                        sel.moveStart('character', -val.length);
                        pos = sel.text.length - sel_len;
                    }
                    
                    var new_val = val.slice(0, pos-1) + glyph;
                    if(val.length > pos) {
                        new_val += val.slice(pos);
                    }
                    ime_input.val(new_val);
                    
                    // reset cursor position
                    if('setSelectionRange' in ime_input[0]) {
                        ime_input.focus();
                        ime_input[0].setSelectionRange(pos, pos);
                    } else if('createTextRange' in ime_input[0]) {
                        var range = ime_input[0].createTextRange();
                        range.collapse(true);
                        range.moveEnd('character', pos);
                        range.moveStart('character', pos);
                        range.select();
                    }
                    
                    ime_suggest.fadeOut(150);
                    return true;
                }
                
                return false;
            },
            down: function() {
                // Move the cursor down if possible
                var next = $('.ime_selected').next();
                if(!next.length) {
                    // go to next column or wrap around
                    this.right();
                    next = $('.ime_selected_col button').first();
                }
                $('.ime_selected').removeClass('ime_selected');
                next.addClass('ime_selected');
            },
            up: function() {
                // Move the cursor up if possible
                var prev = $('.ime_selected').prev();
                if(!prev.length) {
                    // check for previous column and scroll to end of that
                    this.left();
                    prev = $('.ime_selected_col button').last();
                }
                $('.ime_selected').removeClass('ime_selected');
                prev.addClass('ime_selected');
            },
            left: function() {
                // Move the cursor left if possible
                if($('.ime_button_list').length <= 1) { return false; }
                
                var col = $('.ime_selected_col').prev();
                if(!col.length) {
                    col = $('.ime_button_list').last();
                }
                this.changeColumn(col);            
                return true;  
            },
            right: function() {
                // Move the cursor right if possible
                if($('.ime_button_list').length <= 1) { return false; }
                
                var col = $('.ime_selected_col').next();
                if(!col.length) {
                    col = $('.ime_button_list').first();
                }
                this.changeColumn(col);
                return true;  
            },
            
            changeColumn: function(dest_col) {
                // Get the old selection offset
                var selection = parseInt($('.ime_selected').attr('id').slice(11));
                // Remove all old keybindings
                $('.ime_suggest button small').remove();
                $('.ime_suggest button[id]').attr('id', '');
                $('.ime_selected').removeClass('ime_selected');
                $('.ime_selected_col').removeClass('ime_selected_col');
                
                // Add new ones
                var key = 1;
                var buttons = dest_col.children('button');
                buttons.each(function() {
                    $(this).attr('id', 'ime_button_' + key).append('<small>' + key + '</small>');
                    if(key === selection || (selection > buttons.length && key == buttons.length)) {
                        $(this).addClass('ime_selected');
                    }
                    key++;
                });
                dest_col.addClass('ime_selected_col');
            }
        };
        
        ime_input.bind('keydown', function(event) {
            if(event.ctrlKey) { return; }
            var ime_is_visible = $('.ime_suggest:visible').length;
            switch(event.keyCode) {
                case 13: // enter
                    if(ime_is_visible) {
                        ime.apply();
                        event.preventDefault();
                        return;
                    }
                    break;
                case 37: // left arrow
                    if(ime_is_visible) {
                        ime.left();
                        event.preventDefault();
                        return;
                    }
                    break;
                case 39: // right arrow
                    if(ime_is_visible) {
                        if(!ime.right()) {
                            ime.apply();
                        }
                        event.preventDefault();
                        return;
                    }
                    break;
                case 38: // up arrow
                    if(ime_is_visible) {
                        ime.up();
                        event.preventDefault();
                        return;
                    }
                    break;
                case 40: // down arrow
                    if(ime_is_visible) {
                        ime.down();
                        event.preventDefault();
                        return;
                    }
                    break;
                // number keys 1-6 for keyboard selection
                case 49:
                case 50:
                case 51:
                case 52:
                case 53:
                case 54:
                    if($('.ime_suggest:visible').length) {
                        if(ime.apply(event.keyCode - 48)) {
                            event.preventDefault();
                        }
                    }
                    break;
                    
                
                // shift keys for /\`;
                case 186:
                case 191:
                case 192:
                case 220: 
                    if(!event.shiftKey) {
                        return;
                    }
                    break;
            }
            
            // check for numeric matches, then convert to string
            var char_group;
            if(ipa_keymap[event.keyCode] != null) {
                char_group = ipa_keymap[event.keyCode];
            } else if(ipa_keymap[String.fromCharCode(event.keyCode).toLowerCase()] != null) {
                char_group = ipa_keymap[String.fromCharCode(event.keyCode).toLowerCase()];
            } else {
                ime_suggest.fadeOut(150);
                return;
            }
            
            var button_list;
            ime_suggest.html('');
            char_group.forEach(function(char, i) {
                var text = char[0];
                if(char[2]) { // it's a diacritic
                    text = '\u25cc' + text; // use combining circle glyph
                }
                var button = $('<button data-char="' + char[0] + '">' + text + '<em>' + char[1] + '</em></button>');
                if(i === 0) {
                    button.addClass('ime_selected');
                }
                
                if(!(i % 6)) {
                    // create new row every 6 buttons
                    if(button_list) { ime_suggest.append(button_list); }
                    button_list = $('<div class="ime_button_list" />');
                    if(i < 6) {
                        button_list.addClass('ime_selected_col');
                    }
                }
                
                // default key bindings
                if(i < 6) {
                    var key = i + 1;
                    button.append('<small>' + key + '</small>').attr('id', 'ime_button_' + key);
                }
                
                button_list.append(button);
                
            });
            ime_suggest.append(button_list);
            ime_suggest.fadeIn(150);
            
        });
        
        ime_input.bind('click', function() {
            ime_suggest.fadeOut(150);
        });
        ime_input.bind('blur', function() {
            ime_suggest.fadeOut(150);
        });
        
        ime_suggest.bind('mouseover', 'button', function(event) {
            if(event.target.nodeName == 'BUTTON') {
                $('.ime_selected').removeClass('ime_selected');
                $(event.target).addClass('ime_selected');
            }
        });
        ime_suggest.bind('click', 'button', function(event) {
            ime.apply();
        });
    };
    
    $('#ipa_input').ipa_ime();
    /*
	$('#ipa_input').bind('change', function(event) {
		var codes = [];
		for(var i=0;i<this.value.length;i++) {
			codes.push(this.value.charCodeAt(i).toString(16));
		}
		console.log(codes.join(','));
	});
    */
    
    // Phonology object
    
    var Phonology = function() { 
        this.feature_index = [
            // feature, shortname, implications, fallback_diacritics
            ['syllabic', 'syl', { consonantal: -1 }],
            ['consonantal', 'con', { syllabic: -1 }],
            ['approximant', 'apx'],
            ['sonorant', 'son'],
            ['voice', 'v', {}, { 1: '\u032c', '-1': '\u0325' }],
            ['spread glottis', 'SG', { 'constricted glottis': -1 }, { 1: '\u02b0' }],
            ['constricted glottis', 'CG', { 'spread glottis': -1 }],
            ['continuant', 'cont'],
            ['nasal', 'nas', {}, { 1: '\u0303' }],
            ['strident', 'stri'],
            ['lateral', 'lat'],
            ['delayed release', 'DR'],
            ['LABIAL', 'LAB', { CORONAL: -1, DORSAL: -1, RADICAL: -1, LARYNGEAL: -1 }],
            ['round', 'rd', {}, { 1: '\u02b7' }],
            ['CORONAL', 'COR', { LABIAL: -1, DORSAL: -1, RADICAL: -1, LARYNGEAL: -1 }],
            ['anterior', 'ant', { CORONAL: 1 }],
            ['distributed', 'dst', { CORONAL: 1 }],
            ['DORSAL', 'DOR', { LABIAL: -1, CORONAL: -1, RADICAL: -1, LARYNGEAL: -1 }],
            ['high', 'hi', { DORSAL: 1, low: -1 }],
            ['low', 'lo', { DORSAL: 1, high: -1 }],
            ['back', 'bk', { DORSAL: 1 }],
            ['tense', 'tns', { DORSAL: 1 }],
            ['RADICAL', 'RAD', { LABIAL: -1, CORONAL: -1, DORSAL: -1, LARYNGEAL: -1 }],
            ['LARYNGEAL', 'LAR', { LABIAL: -1, CORONAL: -1, DORSAL: -1, RADICAL: -1 }],
            ['reduced', 'red']
        ];
        this.sound_index = {
            // unicode			syl con apx son v   sg  cg  cnt nas str lat dr  LAB rd  COR ant dst DOR hi  lo  bk  tns RAD LAR red
            '\u0070': [			-1,	1,	-1,	-1,	-1,	-1,	-1,	-1,	-1,	-1,	-1,	-1,	1,	0,	-1,	-1,	1,	-1,	-1,	0,	-1,	0,	-1,	-1,	0	], // p
            '\u0062': [			-1,	1,	-1,	-1,	1,	-1,	-1,	-1,	-1,	-1,	-1,	-1,	1,	0,	-1,	-1,	1,	-1,	-1,	0,	-1,	0,	-1,	-1,	0	], // b
            '\u0074': [			-1,	1,	-1,	-1,	-1,	-1,	-1,	-1,	-1,	-1,	-1,	-1,	-1,	0,	1,	1,	-1,	-1,	-1,	0,	-1,	0,	-1,	-1,	0	], // t
            '\u0064': [			-1,	1,	-1,	-1,	1,	-1,	-1,	-1,	-1,	-1,	-1,	-1,	-1,	0,	1,	1,	-1,	-1,	-1,	0,	-1,	0,	-1,	-1,	0	], // d
            '\u006b': [			-1,	1,	-1,	-1,	-1,	-1,	-1,	-1,	-1,	-1,	-1,	-1,	-1,	0,	-1,	-1,	-1,	1,	0,	0,	0,	0,	-1,	-1,	0	], // k
            '\u0067': [			-1,	1,	-1,	-1,	1,	-1,	-1,	-1,	-1,	-1,	-1,	-1,	-1,	0,	-1,	-1,	-1,	1,	0,	0,	0,	0,	-1,	-1,	0	], // g
            '\u0066': [			-1,	1,	-1,	-1,	-1,	-1,	-1,	1,	-1,	-1,	-1,	0,	1,	0,	-1,	-1,	-1,	-1,	0,	0,	0,	0,	-1,	-1,	0	], // f
            '\u0076': [			-1,	1,	-1,	-1,	1,	-1,	-1,	1,	-1,	-1,	-1,	0,	1,	0,	-1,	-1,	-1,	-1,	0,	0,	0,	0,	-1,	-1,	0	], // v
            '\u03b8': [			-1,	1,	-1,	-1,	-1,	-1,	-1,	1,	-1,	-1,	-1,	0,	-1,	0,	1,	1,	-1,	-1,	0,	0,	0,	0,	-1,	-1,	0	], // th
            '\u00f0': [			-1,	1,	-1,	-1,	1,	-1,	-1,	1,	-1,	-1,	-1,	0,	-1,	0,	1,	1,	-1,	-1,	0,	0,	0,	0,	-1,	-1,	0	], // dh
            '\u0073': [			-1,	1,	-1,	-1,	-1,	-1,	-1,	1,	-1,	1,	-1,	0,	-1,	0,	1,	1,	-1,	-1,	0,	0,	0,	0,	-1,	-1,	0	], // s
            '\u007a': [			-1,	1,	-1,	-1,	1,	-1,	-1,	1,	-1,	1,	-1,	0,	-1,	0,	1,	1,	-1,	-1,	0,	0,	0,	0,	-1,	-1,	0	], // z
            '\u0283': [			-1,	1,	-1,	-1,	-1,	-1,	-1,	1,	-1,	1,	-1,	0,	-1,	0,	1,	-1,	1,	-1,	0,	0,	0,	0,	-1,	-1,	0	], // sh
            '\u0292': [			-1,	1,	-1,	-1,	1,	-1,	-1,	1,	-1,	1,	-1,	0,	-1,	0,	1,	-1,	1,	-1,	0,	0,	0,	0,	-1,	-1,	0	], // zh
            '\u02a7': [			-1,	1,	-1,	-1,	-1,	-1,	-1,	-1,	-1,	1,	-1,	1,	-1,	0,	1,	-1,	1,	-1,	0,	0,	0,	0,	-1,	-1,	0	], // tsh
            '\u02a4': [			-1,	1,	-1,	-1,	1,	-1,	-1,	-1,	-1,	1,	-1,	1,	-1,	0,	1,	-1,	1,	-1,	0,	0,	0,	0,	-1,	-1,	0	], // dzh
            '\u006d': [			-1,	1,	-1,	1,	1,	-1,	-1,	-1,	1,	-1,	-1,	0,	1,	0,	-1,	-1,	-1,	-1,	0,	0,	0,	0,	-1,	-1,	0	], // m
            '\u006e': [			-1,	1,	-1,	1,	1,	-1,	-1,	-1,	1,	-1,	-1,	0,	-1,	0,	1,	1,	-1,	-1,	0,	0,	0,	0,	-1,	-1,	0	], // n
            '\u014b': [			-1,	1,	-1,	1,	1,	-1,	-1,	-1,	1,	-1,	-1,	0,	-1,	0,	-1,	-1,	-1,	1,	0,	0,	0,	0,	-1,	-1,	0	], // ng
            '\u006c': [			-1,	1,	-1,	1,	1,	-1,	-1,	-1,	-1,	-1,	1,	0,	-1,	0,	1,	1,	1,	-1,	0,	0,	0,	0,	-1,	-1,	0	], // l
            '\u0072': [			-1,	1,	-1,	1,	1,	-1,	-1,	1,	-1,	-1,	-1,	0,	-1,	0,	1,	1,	-1,	-1,	0,	0,	0,	0,	-1,	-1,	0	], // r
            '\u006a': [			-1,	-1,	-1,	1,	1,	-1,	-1,	1,	-1,	-1,	-1,	0,	-1,	0,	-1,	-1,	-1,	1,	0,	0,	0,	0,	-1,	-1,	0	], // j
            '\u0077': [			-1,	-1,	-1,	1,	1,	-1,	-1,	1,	-1,	-1,	-1,	0,	1,	1,	-1,	-1,	-1,	1,	0,	0,	0,	0,	-1,	-1,	0	], // w
            '\u0068': [			-1,	1,	-1,	-1,	-1,	1,	-1,	1,	-1,	-1,	-1,	0,	-1,	0,	-1,	-1,	-1,	-1,	0,	0,	0,	0,	-1,	1,	0	], // h
            '\u0294': [			-1,	-1,	-1,	-1,	-1,	-1,	1,	-1,	-1,	-1,	-1,	0,	-1,	0,	-1,	-1,	-1,	-1,	0,	0,	0,	0,	-1,	1,	0	], // ?
            // unicode			syl con apx son v   sg  cg  cnt nas str lat dr  LAB rd  COR ant dst DOR hi  lo  bk  tns RAD LAR red
            '\u0069': [         1,  -1, -1, 1,  1,  -1, -1, 1,  -1, -1, -1, -1, -1, -1, -1, -1, -1, 1,  1,  -1, -1, 1,  -1, -1, -1  ], // i
            '\u026a': [         1,  -1, -1, 1,  1,  -1, -1, 1,  -1, -1, -1, -1, -1, -1, -1, -1, -1, 1,  1,  -1, -1, -1, -1, -1, -1  ], // I
            '\u0065': [         1,  -1, -1, 1,  1,  -1, -1, 1,  -1, -1, -1, -1, -1, -1, -1, -1, -1, 1,  -1, -1, -1, 1,  -1, -1, -1  ], // e
            '\u025b': [         1,  -1, -1, 1,  1,  -1, -1, 1,  -1, -1, -1, -1, -1, -1, -1, -1, -1, 1,  -1, -1, -1, -1, -1, -1, -1  ], // E
            '\u00e6': [         1,  -1, -1, 1,  1,  -1, -1, 1,  -1, -1, -1, -1, -1, -1, -1, -1, -1, 1,  -1, 1,  -1, -1, -1, -1, -1  ], // ae
            '\u028c': [         1,  -1, -1, 1,  1,  -1, -1, 1,  -1, -1, -1, -1, -1, -1, -1, -1, -1, 1,  -1, -1, 1,  -1, -1, -1, -1  ], // tense schwa (inv. v)
            '\u0259': [         1,  -1, -1, 1,  1,  -1, -1, 1,  -1, -1, -1, -1, -1, -1, -1, -1, -1, 1,  -1, -1, 1,  -1, -1, -1, 1   ], // schwa
            '\u0075': [         1,  -1, -1, 1,  1,  -1, -1, 1,  -1, -1, -1, -1, -1, 1,  -1, -1, -1, 1,  1,  -1, 1,  1,  -1, -1, -1  ], // u
            '\u028a': [         1,  -1, -1, 1,  1,  -1, -1, 1,  -1, -1, -1, -1, -1, 1,  -1, -1, -1, 1,  1,  -1, 1,  -1, -1, -1, -1  ], // short u
            '\u006f': [         1,  -1, -1, 1,  1,  -1, -1, 1,  -1, -1, -1, -1, -1, 1,  -1, -1, -1, 1,  -1, -1, 1,  1,  -1, -1, -1  ], // o
            '\u0254': [         1,  -1, -1, 1,  1,  -1, -1, 1,  -1, -1, -1, -1, -1, 1,  -1, -1, -1, 1,  -1, -1, 1,  -1, -1, -1, -1  ], // open o
            '\u0251': [         1,  -1, -1, 1,  1,  -1, -1, 1,  -1, -1, -1, -1, -1, -1, -1, -1, -1, 1,  -1, 1,  1,  1,  -1, -1, -1  ]  // a
        };
    
        this.generate_feature_table = function(features, sounds, features_on_x_axis, use_short_forms) {
            var table = $('<table class="features" />'),
                content = '',
                num_features = this.feature_index.length;
            
            // if we're passed sounds as a list of symbols like [p,t,k,...]
            // convert it to a dict from the index like {p:[...],t:[...],...}
            if(typeof sounds[0] != null) {
                var temp_sounds = {},
                    that = this;
                sounds.forEach(function(sound) {
                    temp_sounds[sound] = that.sound_index[sound];
                });
                sounds = temp_sounds;
            }
            
            // similarly, if we're passed a dict of features (from identification) like { feature: val }
            // convert it to a list from the index like [[feature,...],...]
            // features that are not being displayed in the table have their name removed
            // so the matrix still works to calculate things but they won't be rendered later
            if(!features[0]) {
                console.log('is dict');
                console.log(features);
                var temp_features = [];
                this.feature_index.forEach(function(idx_feature) {
                    var feature = idx_feature;
                    if(!features[idx_feature]) {
                        feature[0] = '';
                        num_features--;
                    }
                    temp_features.push(feature);
                });
                features = temp_features;
                console.log(features);
            }
            
            if(features_on_x_axis) {
                // generate feature header
                content += '<tr><th />';
                features.forEach(function(feature) {
                    if(feature[0]) {
                        content += '<th class="feature">' + (use_short_forms ? feature[1] : feature[0]) + '</th>';
                    }
                });
                content += '<th>+</th></tr>';
                
                // generate rows
                for(var symbol in sounds) {
                    content += '<tr><th class="sound">' + symbol + '</th>';
                    features.forEach(function(feature, key) {
                        if(feature[0]) {
                            content += '<td>' + (sounds[symbol][key] === 1 ? '+' : sounds[symbol][key] === -1 ? '-' : '') + '</td>';
                        }
                    });
                    content += '<td /></tr>';
                }
                content += '<tr><th>+<td colspan="' + (num_features + 1) + '" /></tr>';
            } else {
                // sounds on x axis
                // generate sound header
                content += '<tr><th />';
                for(var symbol in sounds) {
                    content += '<th class="sound">' + symbol + '</th>';
                }
                content += '<th>+</th></tr>';
                
                // generate rows
                features.forEach(function(feature, key) {
                    if(feature[0]) {
                        content += '<tr><th class="feature">' + (use_short_forms ? feature[1] : feature[0]) + '</th>';
                        for(var symbol in sounds) {
                            content += '<td>' + (sounds[symbol][key] === 1 ? '+' : sounds[symbol][key] === -1 ? '-' : '') + '</td>';
                        }
                        content += '<td /></tr>';
                    }
                });
                content += '<tr><th>+</th><td colspan="' + (sounds.length + 1) + '" /></tr>';
            }
            
            return table.append(content);
        }
        
        this.features_to_sounds = function(features) {
            // returns the sounds which fit a set of features
            // takes features dict { feature: val, ... }
            var result_sounds = [];
            
            // convert the input features into a target list
            var target_features = [];
            this.feature_index.forEach(function(feature) {
                var target_val = '?';
                for(var target_feature in features) {
                    var feature_lc = target_feature.toLowerCase();
                    if(feature_lc == feature[0].toLowerCase() || feature_lc == feature[1].toLowerCase()) {
                        target_val = features[target_feature];
                    }
                }
                target_features.push(target_val);
            });
            
            for(var symbol in this.sound_index) {
                var match = true;
                for(var i in target_features) {
                    if(this.sound_index[symbol][i] !== target_features[i] && target_features[i] !== '?') {
                        match = false;
                        break;
                    }
                }
                if(match) {
                    result_sounds.push(symbol);
                }
            }
            return result_sounds;
        }
        this.features_to_sound = function(features) { 
            // returns the first result from features_to_sounds()
            return this.features_to_sounds(features)[0];
        }
        
        this.sounds_to_features = function(sounds) {
            // takes a dict of sounds {glyph: [features],...}
            // finds the common features to a group of sounds and returns their natural class
            var feature_matrix = [],
                feature_result = {},
                that = this;
            
            // if we're passed sounds as a list of symbols like [p,t,k,...]
            // convert it to a dict from the index like {p:[...],t:[...],...}
            if(typeof sounds[0] != null) {
                var temp_sounds = {},
                    that = this;
                sounds.forEach(function(sound) {
                    temp_sounds[sound] = that.sound_index[sound];
                });
                sounds = temp_sounds;
            }
            
            for(var sound in sounds) {
                if(!feature_matrix.length) {
                    feature_matrix = sounds[sound];
                } else {
                    sounds[sound].forEach(function(feature_val, key) {
                        if(feature_val != feature_matrix[key]) {
                            //console.log('non match', that.feature_index[key], sound, feature_val, feature_matrix[key]);
                            feature_matrix[key] = '?';
                        }
                    });
                }
            }
            feature_matrix.forEach(function(value, key) {
                if(value != '?') {
                    feature_result[that.feature_index[key]] = value;
                }
            });
            return feature_result;
        }
        
    };
    
    var PHON = new Phonology();
    //$('body').append(PHON.generate_feature_table(PHON.feature_index, PHON.features_to_sounds({coronal: 1}), false, false));
    //console.log(PHON.sounds_to_features(['p','t','k']));
    var sound_set = ['b','d','g','z','r'];
    $('body').append(PHON.generate_feature_table(PHON.sounds_to_features(sound_set), sound_set, false, false));
    
    //console.log(features);
    
    
    return this;
    
})();