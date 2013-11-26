(function() {

    /*
        Phonology is Fun!
    */
    var Features = {},
        FeatureAliases = {
            syl: 'syllabic', syll: 'syllabic', con: 'consonantal', cons: 'consonantal',
            apx: 'approximant', appx: 'approximant', aprx: 'approximant', approx: 'approximant', appr: 'approximant',
            son: 'sonorant', v: 'voiced', voice: 'voiced', sg: 'spread glottis', cg: 'constricted glottis',
            n: 'nasal', nas: 'nasal', str: 'strident', stri: 'strident', cnt: 'continuant', cont: 'continuant',
            lat: 'lateral', dr: 'delayed release', delrel: 'delayed release',
            lab: 'labial', cor: 'coronal', dor: 'dorsal', rad: 'radical', lar: 'laryngeal',
            rd: 'round', ant: 'anterior', dst: 'distributed', dist: 'distributed', distr: 'distributed',
            hi: 'high', lo: 'low', bk: 'back', tns: 'tense', red: 'reduced'
        },
        Diacritics = {},
        Glyphs = { C: new FeatureBundle({consonantal: 1}), V: new FeatureBundle({voiced: 1}) },
        Elements = {
            inputs: document.getElementsByClassName('phono-input'),
            tables: document.getElementsByClassName('phono-table')
        };
    
    function FeatureBundle(feature_values, glyph) {
        this.feature_values = feature_values;
        this.glyph = glyph;
        
        this.merge_with = function(target_bundle) {
            /*
            var new_bundle = new FeatureBundle(this.feature_values, glyph);
            var new_vals = new_bundle.feature_values,
                new_glyph = new_bundle.glyph;
            var old_vals = new_vals;
            console.log('this is t', Glyphs['t'].feature_values.voiced);
            console.log(new_vals);
            console.log('merging', this.glyph, target_bundle.toString());
            for(var feature in target_bundle.feature_values) {
                if(new_vals[feature] != target_bundle.feature_values[feature]) {
                    console.log('features not equal', feature);
                }
                new_vals[feature] = target_bundle.feature_values[feature];
            }
            console.log(this.feature_values);
            console.log(new_vals);
            console.log('this is t', Glyphs['t'].feature_values.voiced);
            console.log(old_vals);
            // recalculate glyph
            var glyph_found = false;
            for(var g in Glyphs) {
                var glyph_bundle = Glyphs[g],
                    match_found = true;
                for(var feature in this.features) {
                    if(!glyph_bundle.features[feature] || this.features[feature] !== glyph_bundle.features[feature]) {
                        match_found = false;
                        break;
                    }
                }
                if(match_found) {
                    new_glyph = g;
                    glyph_found = true;
                    break;
                }
            }
            if(!glyph_found) {
                for(var diac in Diacritics) {
                    var diac_bundle = Diacritics[diac],
                        match_found = true;
                    for(var feature in target_bundle.features) {
                        if(!diac_bundle.features[feature] || target_bundle.features[feature] !== diac_bundle.features[feature]) {
                            match_found = false;
                            break;
                        }
                    }
                    if(match_found) {
                        new_glyph += diac;
                        break;
                    }
                }
            }
            return new FeatureBundle(new_vals, new_glyph);
            */
        };
        
        this.toString = function(use_glyph) {
            var output = [];
            
            if(use_glyph) {
                if(this.glyph) {
                    return this.glyph;
                } else {
                    for(var g in Glyphs) {
                        var match = true;
                        for(var feature in this.feature_values) {
                            if(this.feature_values[feature] !== Glyphs[g].feature_values[feature]) {
                                match = false;
                                break;
                            }
                        }
                        if(match) {
                            return g;
                        }
                    }
                }
            }
            for(var feature in this.feature_values) {
                output.push((this.feature_values[feature] == -1 ? '-' : '+') + feature);
            }
            
            return '[' + output.join(', ') + ']';
        };
        
        this.contains = function(target_bundle) {
            var match = true;
            for(var feature in target_bundle.feature_values) {
                if(!this.feature_values[feature] || this.feature_values[feature] != target_bundle[feature_values]) {
                    match = false;
                    break;
                }
            }
            return match;
        };
    }
    
    function Rule(target, transform, environment) {
        this.target = typeof target == 'string' ? target.parse_features() : target;
        this.transform = typeof transform == 'string' ? transform.parse_features() : transform;
        this.environment = typeof environment == 'string' ? environment.parse_features() : environment;
        
        this.apply_to = function(input_string) {
            var output = '',
                input = input_string.parse_features(),
                target_pos = -1,
                env_target_pos = this.environment.indexOf('_');
            
            // Find the target
            for(var i in input) {
                var match = true;
                for(var j=0; i<this.target.length; i++) {
                    if(input[i+j] && !input[i+j].contains(this.target[i])) {
                        match = false;
                        break;
                    }
                }
                if(match) {
                    target_pos = i;
                    break;
                }
            }
            if(target_pos == -1) {
                console.log('Rule target not found', this.target.toString(), input_string, input);
                return input_string;
            } else {
                console.log('Rule target found at', target_pos);
            }
            
            // Test for the environment
            var env_match = true;
            
            for(var i in this.environment) {
                var offset = i > env_target_pos ? i + target_pos - env_target_pos : i + target_pos + this.target.length;
                if(typeof this.environment[i] == 'string') {
                    if(this.environment[i] == '#') { // Word boundary
                        if(input[offset] && input[offset] != ' ') {
                            env_match = false;
                            break;
                        }
                    }
                } else {
                    if(input[offset] && !input[offset].contains(this.environment[i])) {
                        env_match = false;
                        break;
                    }
                }
            }
            if(!env_match) {
                console.log('Rule environment not found', this.environment.toString(), input_string, input);
            } else {
                console.log('Rule environment confirmed');
            }
            
            // Apply the transformation
            console.log('this is t', Glyphs.t.feature_values.voiced);
            for(var i=0; i<input.length;i++) {
                console.log('input', i, input[i]);
                if(i >= target_pos && i < target_pos + this.target.length) {
                    console.log('within target pos', i, target_pos, this.target.length); 
                    console.log('this is t2', Glyphs.t.feature_values.voiced);
                    if(typeof input[i] != 'string') {
                        console.log('not string, merging', input[i]);
                        //var new_val = input[i].merge_with(this.transform[i - target_pos]).toString(true);
                        var new_features = input[i].feature_values;
                        console.log('new features', new_features);
                        console.log('this is t3', Glyphs.t.feature_values.voiced);
                        for(var j in this.transform[i - target_pos].feature_values) {
                            new_features[j] = this.transform[i - target_pos].feature_values[j];
                            console.log(j);
                        }
                        console.log('new features2', new_features);
                        console.log('this is t4', Glyphs.t.feature_values.voiced);
                        input[i] = (new FeatureBundle(new_features)).toString(true);
                        console.log(input[i], (new FeatureBundle(new_features)).toString(true), new_features, Glyphs.t);
                    }
                }
            }
            return input.join('');
        };
    }
    
    String.prototype.parse_features = function() {
        var matches = this.match(/(\[([^\]]+)\]|.)/g),
            output = [];
        
        for(var i in matches) {
            if(matches[i].length === 1) {
                if(Glyphs[matches[i]]) {
                    output.push(Glyphs[matches[i]]);
                } else if(Diacritics[matches[i]]) {
                    output[output.length - 1].merge_with(Diacritics[matches[i]]);
                } else {
                    output.push(matches[i]);
                }
            } else {
                var features = {},
                    feature_list = matches[i].slice(1,-1).split(',');
                for(var j in feature_list) {
                    var val_matches = feature_list[j].trim().match(/^(\+|\-)?\s?(.+)/);
                    if(FeatureAliases[val_matches[2]]) { val_matches[2] = FeatureAliases[val_matches[2]]; }
                    features[val_matches[2]] = val_matches[1] == '-' ? -1 : 1;
                }
                output.push(new FeatureBundle(features));
            }
        }
        
        return output;        
    };
    
    var sound_index = {
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
    var feature_header = ['syl', 'con', 'apx', 'son', 'v', 'sg', 'cg', 'cnt', 'nas', 'str', 'lat', 'dr', 'LAB', 'rd', 'COR', 'ant', 'dst', 'DOR', 'hi', 'lo', 'bk', 'tns', 'RAD', 'LAR', 'red'];
    for(var sound in sound_index) {
        var feature_matrix = {};
        
        for(var i in feature_header) {
            if(sound_index[sound][i]) {
                feature_matrix[FeatureAliases[feature_header[i].toLowerCase()]] = sound_index[sound][i];
            }
        }
        
        Glyphs[sound] = new FeatureBundle(feature_matrix, sound);
    }
    //document.getElementById('ipa_input').innerHTML = JSONstring.make(Glyphs);
    var devoicing = new Rule("C", "[+v]", "i_i");
    //console.log("[+foo, -bar]baz_".parse_features());
    //console.log(new FeatureBundle({v: 1},'foo'));
    console.log('devoice', devoicing.apply_to('iti'));
    console.log(Glyphs.t);

})();