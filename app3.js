(function() {
    
    var Features = ['syllabic', 'consonantal', 'approximant', 'sonorant', 'voiced', 'spread glottis', 'constricted glottis', 'continuant', 'nasal', 'strident', 'lateral', 'delayed release', 'labial', 'round', 'coronal', 'anterior', 'distributed', 'dorsal', 'high', 'low', 'back', 'tense', 'radical', 'laryngeal', 'reduced'],
        FeatureAliases = {syl: 'syllabic', syll: 'syllabic', con: 'consonantal', cons: 'consonantal', apx: 'approximant', appx: 'approximant', appr: 'approximant', approx: 'approximant', son: 'sonorant', v: 'voiced', voice: 'voiced', sg: 'spread glottis', cg: 'constricted glottis', cnt: 'continuant', con: 'continuant', cont: 'continuant', nas: 'nasal', n: 'nasal', str: 'strident', stri: 'strident', lat: 'lateral', dr: 'delayed release', delrel: 'delayed release', lab: 'labial', rounded: 'round', rd: 'round', rou: 'round', cor: 'coronal', ant: 'anterior', dist: 'distributed', dst: 'distributed', distr: 'distributed', dor: 'dorsal', dors: 'dorsal', hi: 'high', lo: 'low', bk: 'back', ten: 'tense', tns: 'tense', rad: 'radical', lar: 'laryngeal', red: 'reduced'},
        
        Glyphs = {
            'C': [      -1, 1 ], // Consonant
            'V': [      1,  -1], // Vowel
            '\u0070': [	-1,	1,	-1,	-1,	-1,	-1,	-1,	-1,	-1,	-1,	-1,	-1,	1,	0,	-1,	-1,	1,	-1,	-1,	0,	-1,	0,	-1,	-1,	0	], // p
            '\u0062': [	-1,	1,	-1,	-1,	1,	-1,	-1,	-1,	-1,	-1,	-1,	-1,	1,	0,	-1,	-1,	1,	-1,	-1,	0,	-1,	0,	-1,	-1,	0	], // b
            '\u0074': [	-1,	1,	-1,	-1,	-1,	-1,	-1,	-1,	-1,	-1,	-1,	-1,	-1,	0,	1,	1,	-1,	-1,	-1,	0,	-1,	0,	-1,	-1,	0	], // t
            '\u0064': [	-1,	1,	-1,	-1,	1,	-1,	-1,	-1,	-1,	-1,	-1,	-1,	-1,	0,	1,	1,	-1,	-1,	-1,	0,	-1,	0,	-1,	-1,	0	], // d
            '\u006b': [	-1,	1,	-1,	-1,	-1,	-1,	-1,	-1,	-1,	-1,	-1,	-1,	-1,	0,	-1,	-1,	-1,	1,	0,	0,	0,	0,	-1,	-1,	0	], // k
            '\u0067': [	-1,	1,	-1,	-1,	1,	-1,	-1,	-1,	-1,	-1,	-1,	-1,	-1,	0,	-1,	-1,	-1,	1,	0,	0,	0,	0,	-1,	-1,	0	], // g
            '\u0066': [	-1,	1,	-1,	-1,	-1,	-1,	-1,	1,	-1,	-1,	-1,	0,	1,	0,	-1,	-1,	-1,	-1,	0,	0,	0,	0,	-1,	-1,	0	], // f
            '\u0076': [	-1,	1,	-1,	-1,	1,	-1,	-1,	1,	-1,	-1,	-1,	0,	1,	0,	-1,	-1,	-1,	-1,	0,	0,	0,	0,	-1,	-1,	0	], // v
            '\u03b8': [	-1,	1,	-1,	-1,	-1,	-1,	-1,	1,	-1,	-1,	-1,	0,	-1,	0,	1,	1,	-1,	-1,	0,	0,	0,	0,	-1,	-1,	0	], // th
            '\u00f0': [	-1,	1,	-1,	-1,	1,	-1,	-1,	1,	-1,	-1,	-1,	0,	-1,	0,	1,	1,	-1,	-1,	0,	0,	0,	0,	-1,	-1,	0	], // dh
            '\u0073': [	-1,	1,	-1,	-1,	-1,	-1,	-1,	1,	-1,	1,	-1,	0,	-1,	0,	1,	1,	-1,	-1,	0,	0,	0,	0,	-1,	-1,	0	], // s
            '\u007a': [	-1,	1,	-1,	-1,	1,	-1,	-1,	1,	-1,	1,	-1,	0,	-1,	0,	1,	1,	-1,	-1,	0,	0,	0,	0,	-1,	-1,	0	], // z
            '\u0283': [	-1,	1,	-1,	-1,	-1,	-1,	-1,	1,	-1,	1,	-1,	0,	-1,	0,	1,	-1,	1,	-1,	0,	0,	0,	0,	-1,	-1,	0	], // sh
            '\u0292': [	-1,	1,	-1,	-1,	1,	-1,	-1,	1,	-1,	1,	-1,	0,	-1,	0,	1,	-1,	1,	-1,	0,	0,	0,	0,	-1,	-1,	0	], // zh
            '\u02a7': [	-1,	1,	-1,	-1,	-1,	-1,	-1,	-1,	-1,	1,	-1,	1,	-1,	0,	1,	-1,	1,	-1,	0,	0,	0,	0,	-1,	-1,	0	], // tsh
            '\u02a4': [	-1,	1,	-1,	-1,	1,	-1,	-1,	-1,	-1,	1,	-1,	1,	-1,	0,	1,	-1,	1,	-1,	0,	0,	0,	0,	-1,	-1,	0	], // dzh
            '\u006d': [	-1,	1,	-1,	1,	1,	-1,	-1,	-1,	1,	-1,	-1,	0,	1,	0,	-1,	-1,	-1,	-1,	0,	0,	0,	0,	-1,	-1,	0	], // m
            '\u006e': [	-1,	1,	-1,	1,	1,	-1,	-1,	-1,	1,	-1,	-1,	0,	-1,	0,	1,	1,	-1,	-1,	0,	0,	0,	0,	-1,	-1,	0	], // n
            '\u014b': [	-1,	1,	-1,	1,	1,	-1,	-1,	-1,	1,	-1,	-1,	0,	-1,	0,	-1,	-1,	-1,	1,	0,	0,	0,	0,	-1,	-1,	0	], // ng
            '\u006c': [	-1,	1,	-1,	1,	1,	-1,	-1,	-1,	-1,	-1,	1,	0,	-1,	0,	1,	1,	1,	-1,	0,	0,	0,	0,	-1,	-1,	0	], // l
            '\u0072': [	-1,	1,	-1,	1,	1,	-1,	-1,	1,	-1,	-1,	-1,	0,	-1,	0,	1,	1,	-1,	-1,	0,	0,	0,	0,	-1,	-1,	0	], // r
            '\u006a': [	-1,	-1,	-1,	1,	1,	-1,	-1,	1,	-1,	-1,	-1,	0,	-1,	0,	-1,	-1,	-1,	1,	0,	0,	0,	0,	-1,	-1,	0	], // j
            '\u0077': [	-1,	-1,	-1,	1,	1,	-1,	-1,	1,	-1,	-1,	-1,	0,	1,	1,	-1,	-1,	-1,	1,	0,	0,	0,	0,	-1,	-1,	0	], // w
            '\u0068': [	-1,	1,	-1,	-1,	-1,	1,	-1,	1,	-1,	-1,	-1,	0,	-1,	0,	-1,	-1,	-1,	-1,	0,	0,	0,	0,	-1,	1,	0	], // h
            '\u0294': [	-1,	-1,	-1,	-1,	-1,	-1,	1,	-1,	-1,	-1,	-1,	0,	-1,	0,	-1,	-1,	-1,	-1,	0,	0,	0,	0,	-1,	1,	0	], // ?
            // unicode	syl con apx son v   sg  cg  cnt nas str lat dr  LAB rd  COR ant dst DOR hi  lo  bk  tns RAD LAR red
            '\u0069': [ 1,  -1, -1, 1,  1,  -1, -1, 1,  -1, -1, -1, -1, -1, -1, -1, -1, -1, 1,  1,  -1, -1, 1,  -1, -1, -1  ], // i
            '\u026a': [ 1,  -1, -1, 1,  1,  -1, -1, 1,  -1, -1, -1, -1, -1, -1, -1, -1, -1, 1,  1,  -1, -1, -1, -1, -1, -1  ], // I
            '\u0065': [ 1,  -1, -1, 1,  1,  -1, -1, 1,  -1, -1, -1, -1, -1, -1, -1, -1, -1, 1,  -1, -1, -1, 1,  -1, -1, -1  ], // e
            '\u025b': [ 1,  -1, -1, 1,  1,  -1, -1, 1,  -1, -1, -1, -1, -1, -1, -1, -1, -1, 1,  -1, -1, -1, -1, -1, -1, -1  ], // E
            '\u00e6': [ 1,  -1, -1, 1,  1,  -1, -1, 1,  -1, -1, -1, -1, -1, -1, -1, -1, -1, 1,  -1, 1,  -1, -1, -1, -1, -1  ], // ae
            '\u028c': [ 1,  -1, -1, 1,  1,  -1, -1, 1,  -1, -1, -1, -1, -1, -1, -1, -1, -1, 1,  -1, -1, 1,  -1, -1, -1, -1  ], // tense schwa (inv. v)
            '\u0259': [ 1,  -1, -1, 1,  1,  -1, -1, 1,  -1, -1, -1, -1, -1, -1, -1, -1, -1, 1,  -1, -1, 1,  -1, -1, -1, 1   ], // schwa
            '\u0075': [ 1,  -1, -1, 1,  1,  -1, -1, 1,  -1, -1, -1, -1, -1, 1,  -1, -1, -1, 1,  1,  -1, 1,  1,  -1, -1, -1  ], // u
            '\u028a': [ 1,  -1, -1, 1,  1,  -1, -1, 1,  -1, -1, -1, -1, -1, 1,  -1, -1, -1, 1,  1,  -1, 1,  -1, -1, -1, -1  ], // short u
            '\u006f': [ 1,  -1, -1, 1,  1,  -1, -1, 1,  -1, -1, -1, -1, -1, 1,  -1, -1, -1, 1,  -1, -1, 1,  1,  -1, -1, -1  ], // o
            '\u0254': [ 1,  -1, -1, 1,  1,  -1, -1, 1,  -1, -1, -1, -1, -1, 1,  -1, -1, -1, 1,  -1, -1, 1,  -1, -1, -1, -1  ], // open o
            '\u0251': [ 1,  -1, -1, 1,  1,  -1, -1, 1,  -1, -1, -1, -1, -1, -1, -1, -1, -1, 1,  -1, 1,  1,  1,  -1, -1, -1  ]  // a
        },
        Diacritics = {
            '': '[+voiced]',
            '': '[+sg]'
        };
    
    function string_to_features(str) {
        var matches = str.match(/(\[([^\]]+)\]|.)/g),
            output = [];
        
        for(var i in matches) {
            if(matches[i].length === 1) {
                if(Glyphs[matches[i]]) {
                    //console.log('glyph', matches[i]);
                    output.push(Glyphs[matches[i]]);
                } else if(Diacritics[matches[i]]) {
                    output[output.length - 1] = apply_features(output[output.length - 1], string_to_features(Diacritics[matches[i]]));
                } else {
                    //console.log('nothing found for', matches[i]);
                    output.push(matches[i]);
                }
            } else {
                var features = [],
                    feature_list = matches[i].slice(1,-1).split(',');
                for(var j in feature_list) {
                    var val_matches = feature_list[j].trim().match(/^(\+|\-)?\s?(.+)/);
                    if(FeatureAliases[val_matches[2]]) {
                        val_matches[2] = FeatureAliases[val_matches[2]];
                    }
                    if(Features.indexOf(val_matches[2]) != -1) {
                        features[Features.indexOf(val_matches[2])] = val_matches[1] == '-' ? -1 : 1;
                    } else {
                        console.log('Unknown feature ignored:', val_matches[2]);
                    }
                }
                output.push(features);
            }
        }
        
        return output;
    }
    
    function features_to_string(features, show_glyph) {
        if(typeof features == 'string') {
            return features;
        } else if(typeof features[0] == 'number') {
            features = [features];
        }
        
        var output = [];
        for(var i in features) {
            var glyph_found = false,
                inner_output = [];
            if(show_glyph) {
                for(var glyph in Glyphs) {
                    var match_found = true;
                    for(var j in Features) {
                        if(features[i][j] != Glyphs[glyph][j]) {
                            match_found = false;
                            break;
                        }
                    }
                    if(match_found) {
                        output.push(glyph);
                        glyph_found = true;
                        break;
                    }
                }
            }
            if(!glyph_found) {
                for(var j in Features) {
                    if(features[i][j]) {
                        inner_output.push((features[i][j] == -1 ? '-' : '+') + Features[j]);
                    }
                }
                output.push('[' + inner_output.join(', ') + ']');
            }
        }
        return output.join('');
    }
    
    function compare_features(fa, fb) {
        var output = {same: [], diff: []};
        for(var i=0; i<Math.max(fa.length, fb.length); i++) {
            if(fa[i] && fb[i] && fa[i] == fb[i] && fa[i] !== 0) {
                output.same[i] = fa[i];
            } else if((fa[i] && fa[i] !== 0) || (fb[i] && fb[i] !== 0)) {
                output.diff[i] = fa[i] || fb[i];
            }
        }
        return output;
    }
    
    function change_features(fa, fb) {
        var output = [];
        for(var i in Features) {
            if(typeof fb[i] != 'undefined') {
                output[i] = fb[i];
            } else if(typeof fa[i] != 'undefined') {
                output[i] = fa[i];
            } else {
                output[i] = 0;
            }
        }
        return output;
    }
    
    function contains_features(fa, fb) {
        for(var i in fb) {
            if(fa[i] != fb[i]) {
                //console.log('failed at ', i);
                return false;
            }
        }
        return true;
    }
    
    function Rule(target, transform, environment, name) {
        this.target = target || '';
        this.transform = transform || '';
        this.environment = environment || '';
        this.name = name || '';
        
        this.apply_to = function(input_string) {
            if(!(this.target && this.transform && this.environment)) { return input_string; } // noop, rule not set up
            var matches = [],
                target = typeof this.target == 'string' ? string_to_features(this.target) : this.target,
                transform = typeof this.transform == 'string' ? string_to_features(this.transform) : this.transform,
                environment = typeof this.environment == 'string' ? string_to_features(this.environment) : this.environment,
                initial_word_boundary = false;
            
            var input = string_to_features(input_string);
            /*
            for(var i in input) {
                if(typeof input[i] == 'string') {
                    console.log(input, i, 'string');
                    input[i] = string_to_features(input[i])[0];
                } else {
                    console.log(input[i], 'is not a string');
                }
            }
            */
            //console.log('env1', features_to_string(environment));
            //console.log('target', features_to_string(target), target);
            //environment.splice(replacement_index, 1);
            if(environment[0] == '#') {
                environment.shift();
                initial_word_boundary = true;
            }
            var replacement_index = environment.indexOf('_');
            for(var i in target) {
                environment.splice(replacement_index - (i < 1 ? 0 : 1), (i < 1 ? 1 : 0), target[i]);
            }
            
            //console.log(target, transform, environment, replacement_index, input);
            //console.log('env2', features_to_string(environment), environment);
            
            // find the environment
            for(var i in input) {
                var match_found = true;

                for(var j in environment) {
                    var offset = parseInt(i) + parseInt(j); // not sure why one of these is coming in as a string
                    if( parseInt(environment[j]) !== 0 && // values of 0 result in insertion, always match
                        !(environment[j] == '#' && (!input[offset] || input[offset] == ' ')) && // word boundaries
                        (!input[offset] || !contains_features(input[offset], environment[j]))
                    ) {
                        //console.log('breaking at', offset, input[offset], environment[j]);
                        /*
                        console.log('offset exist?', i, j, offset, input[offset]);
                        if(input[offset]) {
                            console.log('doesnt match:', offset, j, features_to_string(input[offset]), features_to_string(environment[j]));
                            console.log('parseint?', parseInt(environment[j]) !== 0 );
                            console.log('#?', !(environment[j] == '#' && (!input[offset] || input[offset] == ' ')));
                        
                            console.log('contains?', contains_features(input[offset], environment[j]));
                        }
                        */
                        match_found = false;
                        break;
                    } else {
                        //console.log('matches:', offset, j, input[offset], environment[j]);
                    }
                }
                if(match_found) {
                    matches.push(parseInt(i));
                }
                if(initial_word_boundary) { break; }
            }
            //console.log('matches', this.name, matches);
            
            // apply the transformation
            for(var i in matches) {
                for(var j = 0; j < transform.length; j++) {
                    var offset = matches[i] + replacement_index + j;
                    if(transform[j] == '0') {
                        input[offset] = '';
                    } else if(target[j] == '0') {
                        input.splice(offset, 0, transform[j]);
                    } else {
                        input[offset] = change_features(input[offset], transform[j]);
                    }
                }
            }
            
            // convert each bundle back to a string if possible
            for(var i in input) {
                var str = features_to_string(input[i], true);
                if(str.length > 1) {
                    console.log(input[i]);
                }
                input[i] = features_to_string(input[i], true);
            }
            
            return input.join('');
        };
    }
    
    var data = [], rules = [],
    data_proto = $('.data.proto').clone(),
    rule_proto = $('.rule.proto').clone();

    function draw_rules_table() {
        var new_table = [],
            cur_row = [];
        // header row
        cur_row.push('<th>Underlying Representation:</th>');
        for(var i in data) {
            cur_row.push('<th data-i="' + i + '"><input class="datum ipa" value=' + data[i] + '></th>');
        }
        //cur_row.push('<th><input class="new_datum ipa" placeholder="..."></th>');
        
        new_table.push('<tr>' + cur_row.join('') + '</tr>');
        
        var last_output = [];
        for(var i in rules) {
            cur_row = [];
            var buttons = '';
            if(i != 0) {
                buttons += '<button data-action="rule_up" data-i="' + i + '">up</button>';
            }
            if(i != rules.length - 1) {
                buttons += '<button data-action="rule_down" data-i="' + i + '">down</button>';
            }
            cur_row.push('<td class="rule" data-i="' + i + '">' + buttons + '\
                <input class="rule_name ipa" type="text" value="' + rules[i].name + '" placeholder="new rule">\
                <input class="rule_target ipa" type="text" value="' + rules[i].target + '" placeholder="target"><span class="arrow">&rarr;</span><input class="rule_transform ipa" type="text" value="' + rules[i].transform + '" placeholder="transform">\
                <hr>\
                <input class="rule_environment ipa" type="text" value="' + rules[i].environment + '" placeholder="environment">\
            </td>');
            
            
            for(var j in data) {
                if(!last_output[j]) { last_output[j] = data[j]; }
                var new_output = rules[i].apply_to(last_output[j]);
                if(new_output == last_output[j]) {
                    cur_row.push('<td>-</td>');
                } else {
                    cur_row.push('<td>' + new_output + '</td>');
                }
                last_output[j] = new_output;
            }
            
            new_table.push('<tr class="' + (i % 2 ? 'odd' : 'even') + '">' + cur_row.join('') + '</td>');
            
        }
        
        cur_row = ['<th>Surface Representation:</th>'];
        for(var i in last_output) {
            cur_row.push('<td>' + last_output[i] + '</td>');
        }
        new_table.push('<tr>' + cur_row.join('') + '</tr>');
        
        $('.rules').html('<table>' + new_table.join('') + '</table>');
        $('.rules .ipa').ipa_ime();
    }
    
    $('.rules').bind('change', 'input', function(event) {
        var target = $(event.target),
            i = target.parent().data('i'),
            val = target.val(),
            redraw = false;
        
        if(target.hasClass('datum')) {
            if(data[i] != val) {
                // create blank datum for new entry if this was new
                if(i === data.length - 1) {
                    data.push('');
                }
                
                // update value
                data[i] = val;
                redraw = true;
            }
        } else {
            if(target.hasClass('rule_name') && rules[i].name != val) {
                rules[i].name = val;
                redraw = true;
            } else if(target.hasClass('rule_target') && rules[i].target != val) {
                rules[i].target = val;
                redraw = true;
            } else if(target.hasClass('rule_transform') && rules[i].transform != val) {
                rules[i].transform = val;
                redraw = true;
            } else if(target.hasClass('rule_environment') && rules[i].environment != val) {
                rules[i].environment = val;
                redraw = true;
            }
            if(redraw && i === rules.length - 1) {
                rules.push(new Rule());
            }
        }
        
        if(redraw) {
            draw_rules_table();
        }
        //console.log(target.parent().data('i'), target.attr('class'));
    });
    $('.rules').bind('click', 'button', function(event) {
        console.log(event);
        if(event.target.nodeName == 'BUTTON') {
            var action = $(event.target).data('action'),
                i = $(event.target).data('i'),
                sel_rule = rules[i];
            if(action == 'rule_up') { 
                rules[i] = rules[i-1];
                rules[i-1] = sel_rule;
            } else if(action == 'rule_down') {
                rules[i] = rules[i+1];
                rules[i+1] = sel_rule;
            }
            draw_rules_table();
        }
    });
    
    //data.push('tɛst');
    data.push('bitiɑso');
    data.push('bɑtiɑso');
    data.push('');
    var foo = new Rule('C', '[-v]', '#_', 'Initial devoicing');
    var dv = new Rule('C', '[+voiced]', 'V_V', 'Intervocalic voicing');
    var empty = new Rule();
    rules.push(foo);
    rules.push(dv);
    rules.push(empty);
    //console.log(foo.apply_to('bitiɑso'));
    
    draw_rules_table();
    
})();