//@prepros-prepend ipa_ime.js

(function($) {
    
    var index = {
		geometry: {
			laryngeal: ['spread gl', 'constr gl', 'voice'],
			supralaryngeal: ['nasal', 'continuant', 'lateral', 'strident', 'approximant', 'place'],
			place: ['labial', 'labiodental', 'coronal', 'dorsal', 'radical'],
			labial: ['distributed', 'round'],
		},
		
        segments: {
            '\u0070': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': -1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': 1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'back': 0, 'tense': 0 },
            '\u0062': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': -1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': 1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'back': 0, 'tense': 0 },
            '\u006D': { 'syllabic': -1, 'consonantal': 1, 'sonorant': 1, 'continuant': -1, 'delayed release': 0, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': 1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': 1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'back': 0, 'tense': 0 },
            '\u0278': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': 1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': 1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'back': 0, 'tense': 0 },
            '\u03B2': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': 1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': 1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'back': 0, 'tense': 0 },
            '\u0299': { 'syllabic': -1, 'consonantal': 1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': 1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': 1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'back': 0, 'tense': 0 },
            '\u0271': { 'syllabic': -1, 'consonantal': 1, 'sonorant': 1, 'continuant': -1, 'delayed release': 0, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': 1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': 1, 'round': -1, 'labiodental': 1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'back': 0, 'tense': 0 },
            '\u0066': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': 1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': 1, 'round': -1, 'labiodental': 1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'back': 0, 'tense': 0 },
            '\u0076': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': 1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': 1, 'round': -1, 'labiodental': 1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'back': 0, 'tense': 0 },
            '\u028B': { 'syllabic': -1, 'consonantal': -1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': 1, 'round': -1, 'labiodental': 1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'back': 0, 'tense': 0 },
            '\u006E': { 'syllabic': -1, 'consonantal': 1, 'sonorant': 1, 'continuant': -1, 'delayed release': 0, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': 1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': 1, 'distributed': -1, 'strident': -1, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'back': 0, 'tense': 0 },
            '\u0074': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': -1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': 1, 'distributed': -1, 'strident': -1, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'back': 0, 'tense': 0 },
            '\u0064': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': -1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': 1, 'distributed': -1, 'strident': -1, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'back': 0, 'tense': 0 },
            '\u03B8': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': 1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': 1, 'distributed': 1, 'strident': -1, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'back': 0, 'tense': 0 },
            '\u00F0': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': 1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': 1, 'distributed': 1, 'strident': -1, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'back': 0, 'tense': 0 },
            '\u0073': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': 1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': 1, 'distributed': -1, 'strident': 1, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'back': 0, 'tense': 0 },
            '\u007A': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': 1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': 1, 'distributed': -1, 'strident': 1, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'back': 0, 'tense': 0 },
            '\u0283': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': 1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': -1, 'distributed': 1, 'strident': 1, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'back': 0, 'tense': 0 },
            '\u0292': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': 1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': -1, 'distributed': 1, 'strident': 1, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'back': 0, 'tense': 0 },
            '\u0279': { 'syllabic': -1, 'consonantal': -1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': -1, 'distributed': 1, 'strident': -1, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'back': 0, 'tense': 0 },
            '\u0072': { 'syllabic': -1, 'consonantal': 1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': 1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': 1, 'distributed': -1, 'strident': -1, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'back': 0, 'tense': 0 },
            '\u027E': { 'syllabic': -1, 'consonantal': 1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': 1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': 1, 'distributed': -1, 'strident': -1, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'back': 0, 'tense': 0 },
            '\u026C': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': 1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': 1, 'distributed': -1, 'strident': -1, 'lateral': 1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'back': 0, 'tense': 0 },
            '\u026E': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': 1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': 1, 'distributed': -1, 'strident': -1, 'lateral': 1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'back': 0, 'tense': 0 },
            '\u006C': { 'syllabic': -1, 'consonantal': 1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': 1, 'distributed': -1, 'strident': -1, 'lateral': 1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'back': 0, 'tense': 0 },
            '\u026B': { 'syllabic': -1, 'consonantal': 1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': 1, 'distributed': -1, 'strident': -1, 'lateral': 1, 'dorsal': 1, 'high': -1, 'low': -1, 'front': -1, 'back': 1, 'tense': 0 },
            '\u027A': { 'syllabic': -1, 'consonantal': 1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': 1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': 1, 'distributed': -1, 'strident': -1, 'lateral': 1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'back': 0, 'tense': 0 },
            '\u0273': { 'syllabic': -1, 'consonantal': 1, 'sonorant': 1, 'continuant': -1, 'delayed release': 0, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': 1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': -1, 'distributed': -1, 'strident': -1, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'back': 0, 'tense': 0 },
            '\u0288': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': -1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': -1, 'distributed': -1, 'strident': -1, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'back': 0, 'tense': 0 },
            '\u0256': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': -1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': -1, 'distributed': -1, 'strident': -1, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'back': 0, 'tense': 0 },
            '\u0282': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': 1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': -1, 'distributed': -1, 'strident': 1, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'back': 0, 'tense': 0 },
            '\u0290': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': 1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': -1, 'distributed': -1, 'strident': 1, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'back': 0, 'tense': 0 },
            '\u0255': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': 1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': 1, 'distributed': 1, 'strident': 1, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': 1, 'back': -1, 'tense': 0 },
            '\u0291': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': 1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': 1, 'distributed': 1, 'strident': 1, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': 1, 'back': -1, 'tense': 0 },
            '\u027B': { 'syllabic': -1, 'consonantal': 1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': -1, 'distributed': -1, 'strident': -1, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'back': 0, 'tense': 0 },
            '\u027D': { 'syllabic': -1, 'consonantal': 1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': 1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': -1, 'distributed': -1, 'strident': -1, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'back': 0, 'tense': 0 },
            '\u026D': { 'syllabic': -1, 'consonantal': 1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': -1, 'distributed': -1, 'strident': -1, 'lateral': 1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'back': 0, 'tense': 0 },
            '\u0272': { 'syllabic': -1, 'consonantal': 1, 'sonorant': 1, 'continuant': -1, 'delayed release': 0, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': 1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': -1, 'distributed': 1, 'strident': -1, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': 1, 'back': -1, 'tense': 0 },
            '\u0063': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': -1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': -1, 'distributed': 1, 'strident': -1, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': 1, 'back': -1, 'tense': 0 },
            '\u025F': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': -1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': -1, 'distributed': 1, 'strident': -1, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': 1, 'back': -1, 'tense': 0 },
            '\u00E7': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': 1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': -1, 'distributed': 1, 'strident': -1, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': 1, 'back': -1, 'tense': 0 },
            '\u029D': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': 1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': -1, 'distributed': 1, 'strident': -1, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': 1, 'back': -1, 'tense': 0 },
            '\u006A': { 'syllabic': -1, 'consonantal': -1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': 1, 'back': -1, 'tense': 1 },
            '\u028E': { 'syllabic': -1, 'consonantal': 1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': -1, 'distributed': 1, 'strident': -1, 'lateral': 1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': 1, 'back': -1, 'tense': 0 },
            '\u014B': { 'syllabic': -1, 'consonantal': 1, 'sonorant': 1, 'continuant': -1, 'delayed release': 0, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': 1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': 0, 'back': 0, 'tense': 0 },
            '\u006B': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': -1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': 0, 'back': 0, 'tense': 0 },
            '\u0261': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': -1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': 0, 'back': 0, 'tense': 0 },
            '\u0078': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': 1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': 0, 'back': 0, 'tense': 0 },
            '\u0263': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': 1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': 0, 'back': 0, 'tense': 0 },
            '\u0270': { 'syllabic': -1, 'consonantal': -1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': 0, 'back': 0, 'tense': 1 },
            '\u029F': { 'syllabic': -1, 'consonantal': 1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': 1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': 0, 'back': 0, 'tense': 0 },
            '\u0274': { 'syllabic': -1, 'consonantal': 1, 'sonorant': 1, 'continuant': -1, 'delayed release': 0, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': 1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': -1, 'low': -1, 'front': -1, 'back': 1, 'tense': 0 },
            '\u0071': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': -1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': -1, 'low': -1, 'front': -1, 'back': 1, 'tense': 0 },
            '\u0262': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': -1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': -1, 'low': -1, 'front': -1, 'back': 1, 'tense': 0 },
            '\u03C7': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': 1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': -1, 'low': -1, 'front': -1, 'back': 1, 'tense': 0 },
            '\u0281': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': 1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': -1, 'low': -1, 'front': -1, 'back': 1, 'tense': 0 },
            '\u0280': { 'syllabic': -1, 'consonantal': 1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': 1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': -1, 'low': -1, 'front': -1, 'back': 1, 'tense': 0 },
            '\u0127': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': 1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': -1, 'low': 1, 'front': -1, 'back': 1, 'tense': 0 },
            '\u0295': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': 1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': -1, 'low': 1, 'front': -1, 'back': 1, 'tense': 0 },
            '\u0294': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': -1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': 1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'back': 0, 'tense': 0 },
            '\u0068': { 'syllabic': -1, 'consonantal': -1, 'sonorant': -1, 'continuant': 1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': 1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'back': 0, 'tense': 0 },
            '\u0266': { 'syllabic': -1, 'consonantal': -1, 'sonorant': -1, 'continuant': 1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': 1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'back': 0, 'tense': 0 },
            '\u006B\u031F\u0361\u0078\u031F': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': 1, 'back': -1, 'tense': 0 },
            '\u0261\u031F\u0361\u0263\u031F': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': 1, 'back': -1, 'tense': 0 },
            '\u0064\u0361\u0291': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': 1, 'distributed': 1, 'strident': 1, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': 1, 'back': -1, 'tense': 0 },
            '\u0074\u0361\u0255': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': 1, 'distributed': 1, 'strident': 1, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': 1, 'back': -1, 'tense': 0 },
            '\u0064\u0361\u0292': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': -1, 'distributed': 1, 'strident': 1, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'back': 0, 'tense': 0 },
            '\u0064\u0361\u007A': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': 1, 'distributed': -1, 'strident': 1, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'back': 0, 'tense': 0 },
            '\u0064\u0361\u026E': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': 1, 'distributed': -1, 'strident': -1, 'lateral': 1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'back': 0, 'tense': 0 },
            '\u0064\u0320\u0361\u026E\u0320': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': -1, 'distributed': 1, 'strident': -1, 'lateral': 1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'back': 0, 'tense': 0 },
            '\u0074\u0361\u0283': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': -1, 'distributed': 1, 'strident': 1, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'back': 0, 'tense': 0 },
            '\u0074\u0361\u026C\u0332': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': -1, 'distributed': 1, 'strident': -1, 'lateral': 1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'back': 0, 'tense': 0 },
            '\u0074\u0361\u0073': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': 1, 'distributed': -1, 'strident': 1, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'back': 0, 'tense': 0 },
            '\u0074\u0361\u026C': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': 1, 'distributed': -1, 'strident': -1, 'lateral': 1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'back': 0, 'tense': 0 },
            '\u0074\u032A\u0361\u0073\u032A': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': 1, 'distributed': 1, 'strident': 1, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'back': 0, 'tense': 0 },
            '\u0074\u032A\u0361\u026C\u032A': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': 1, 'distributed': 1, 'strident': -1, 'lateral': 1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'back': 0, 'tense': 0 },
            '\u0064\u032A\u0361\u007A\u032A': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': 1, 'distributed': 1, 'strident': 1, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'back': 0, 'tense': 0 },
            '\u0064\u032A\u0361\u026E\u032A': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': 1, 'distributed': 1, 'strident': -1, 'lateral': 1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'back': 0, 'tense': 0 },
            '\u0288\u0361\u0282': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': -1, 'distributed': -1, 'strident': 1, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'back': 0, 'tense': 0 },
            '\u0256\u0361\u0290': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': -1, 'distributed': -1, 'strident': 1, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'back': 0, 'tense': 0 },
            '\u0070\u0361\u0066': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': 1, 'round': -1, 'labiodental': 1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'back': 0, 'tense': 0 },
            '\u0062\u0361\u0076': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': 1, 'round': -1, 'labiodental': 1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'back': 0, 'tense': 0 },
            '\u0070\u0361\u0278': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': 1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'back': 0, 'tense': 0 },
            '\u0062\u0361\u03B2': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': 1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'back': 0, 'tense': 0 },
            '\u0074\u032A\u0361\u03B8': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': 1, 'distributed': 1, 'strident': -1, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'back': 0, 'tense': 0 },
            '\u0064\u032A\u0361\u00F0': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': 1, 'distributed': 1, 'strident': -1, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'back': 0, 'tense': 0 },
            '\u0063\u0361\u00E7': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': -1, 'distributed': 1, 'strident': -1, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': 1, 'back': -1, 'tense': 0 },
            '\u025F\u0361\u029D': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': -1, 'distributed': 1, 'strident': -1, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': 1, 'back': -1, 'tense': 0 },
            '\u006B\u0361\u0078': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': 0, 'back': 0, 'tense': 0 },
            '\u006B\u0320\u0361\u0078\u0320': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': -1, 'back': 1, 'tense': 0 },
            '\u0261\u0361\u0263': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': 0, 'back': 0, 'tense': 0 },
            '\u0261\u0320\u0361\u0263\u0320': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': -1, 'back': 1, 'tense': 0 },
            '\u0071\u0361\u03C7': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': -1, 'low': -1, 'front': -1, 'back': 1, 'tense': 0 },
            '\u0262\u0361\u0281': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': -1, 'low': -1, 'front': -1, 'back': 1, 'tense': 0 },
            '\u0267': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': 1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': -1, 'distributed': 1, 'strident': 1, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': 0, 'back': 0, 'tense': 0 },
            '\u006B\u0361\u0070': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': -1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': 1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': 0, 'back': 0, 'tense': 0 },
            '\u0261\u0361\u0062': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': -1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': 1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': 0, 'back': 0, 'tense': 0 },
            '\u0070\u0361\u0074': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': -1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': 1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': 1, 'distributed': -1, 'strident': 1, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'back': 0, 'tense': 0 },
            '\u0062\u0361\u0064': { 'syllabic': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': -1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': 1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': 1, 'distributed': -1, 'strident': 1, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'back': 0, 'tense': 0 },
            '\u0270\u0320': { 'syllabic': -1, 'consonantal': -1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': -1, 'back': 1, 'tense': 1 },
            '\u0077': { 'syllabic': -1, 'consonantal': -1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': 1, 'round': 1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': -1, 'back': 1, 'tense': 1 },
            '\u0265': { 'syllabic': -1, 'consonantal': -1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': 1, 'round': 1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': 1, 'back': -1, 'tense': 1 },
            '\u028D': { 'syllabic': -1, 'consonantal': -1, 'sonorant': -1, 'continuant': 1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': 1, 'constr gl': -1, 'labial': 1, 'round': 1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': -1, 'back': 1, 'tense': 1 },
            '\u0069': { 'syllabic': 1, 'consonantal': -1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': 1, 'back': -1, 'tense': 1 },
            '\u0079': { 'syllabic': 1, 'consonantal': -1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': 1, 'round': 1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': 1, 'back': -1, 'tense': 1 },
            '\u0268': { 'syllabic': 1, 'consonantal': -1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': -1, 'back': -1, 'tense': 1 },
            '\u0289': { 'syllabic': 1, 'consonantal': -1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': 1, 'round': 1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': -1, 'back': -1, 'tense': 1 },
            '\u026F': { 'syllabic': 1, 'consonantal': -1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': -1, 'back': 1, 'tense': 1 },
            '\u0075': { 'syllabic': 1, 'consonantal': -1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': 1, 'round': 1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': -1, 'back': 1, 'tense': 1 },
            '\u026A': { 'syllabic': 1, 'consonantal': -1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': 1, 'back': -1, 'tense': -1 },
            '\u028F': { 'syllabic': 1, 'consonantal': -1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': 1, 'round': 1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': 1, 'back': -1, 'tense': -1 },
            '\u028A': { 'syllabic': 1, 'consonantal': -1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': 1, 'round': 1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': -1, 'back': 1, 'tense': -1 },
            '\u0065': { 'syllabic': 1, 'consonantal': -1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': -1, 'low': -1, 'front': 1, 'back': -1, 'tense': 1 },
            '\u00F8': { 'syllabic': 1, 'consonantal': -1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': 1, 'round': 1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': -1, 'low': -1, 'front': 1, 'back': -1, 'tense': 1 },
            '\u0258': { 'syllabic': 1, 'consonantal': -1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': -1, 'low': -1, 'front': -1, 'back': -1, 'tense': 1 },
            '\u0275': { 'syllabic': 1, 'consonantal': -1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': 1, 'round': 1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': -1, 'low': -1, 'front': -1, 'back': -1, 'tense': 1 },
            '\u0264': { 'syllabic': 1, 'consonantal': -1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': -1, 'low': -1, 'front': -1, 'back': 1, 'tense': 1 },
            '\u006F': { 'syllabic': 1, 'consonantal': -1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': 1, 'round': 1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': -1, 'low': -1, 'front': -1, 'back': 1, 'tense': 1 },
            '\u0259': { 'syllabic': 1, 'consonantal': -1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': -1, 'low': -1, 'front': -1, 'back': -1, 'tense': -1 },
            '\u025B': { 'syllabic': 1, 'consonantal': -1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': -1, 'low': -1, 'front': 1, 'back': -1, 'tense': -1 },
            '\u0153': { 'syllabic': 1, 'consonantal': -1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': 1, 'round': 1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': -1, 'low': -1, 'front': 1, 'back': -1, 'tense': -1 },
            '\u025E': { 'syllabic': 1, 'consonantal': -1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': 1, 'round': 1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': -1, 'low': -1, 'front': -1, 'back': -1, 'tense': -1 },
            '\u028C': { 'syllabic': 1, 'consonantal': -1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': -1, 'low': -1, 'front': -1, 'back': 1, 'tense': -1 },
            '\u0254': { 'syllabic': 1, 'consonantal': -1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': 1, 'round': 1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': -1, 'low': -1, 'front': -1, 'back': 1, 'tense': -1 },
            '\u04D5': { 'syllabic': 1, 'consonantal': -1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': -1, 'low': 1, 'front': 1, 'back': -1, 'tense': 0 },
            '\u0061': { 'syllabic': 1, 'consonantal': -1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': -1, 'low': 1, 'front': -1, 'back': -1, 'tense': 0 },
            '\u0276': { 'syllabic': 1, 'consonantal': -1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': 1, 'round': 1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': -1, 'low': 1, 'front': 1, 'back': -1, 'tense': 0 },
            '\u0251': { 'syllabic': 1, 'consonantal': -1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': -1, 'low': 1, 'front': -1, 'back': 1, 'tense': 0 },
            '\u0252': { 'syllabic': 1, 'consonantal': -1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': 1, 'round': 1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': -1, 'low': 1, 'front': -1, 'back': 1, 'tense': 0 },
            C: { consonantal: 1 },
            V: { consonantal: -1 }
        },
        
        aliases: {
            syl: 'syllabic', syll: 'syllabic',
            str: 'stress',
            con: 'consonantal', cons: 'consonantal',
            son: 'sonorant', sono: 'sonorant',
            cnt: 'continuant', cont: 'continuant',
            delrel: 'delayed release', dr: 'delayed release',
            app: 'approximant', appr: 'approximant', approx: 'approximant',
            nas: 'nasal', n: 'nasal',
            voi: 'voice', v: 'voice', voiced: 'voice',
            sg: 'spread gl',
            cg: 'constr gl',
            lab: 'labial',
            rou: 'round', rd: 'round',
            ld: 'labiodental', labdent: 'labiodental', labden: 'labiodental',
            cor: 'coronal',
            ant: 'anterior',
            dst: 'distributed', dist: 'distributed', distr: 'distributed',
            str: 'strident', stri: 'strident', strid: 'strident',
            lat: 'lateral',
            dor: 'dorsal', dors: 'dorsal',
            hi: 'high',
            lo: 'low',
            ft: 'front',
            bk: 'back',
            tns: 'tense', ten: 'tense',
			
			lar: 'laryngeal',
			supralar: 'supralaryngeal', suplar: 'supralaryngeal',
        },
        
        implications: [
            [{consonantal: 1},	{tense: 0}],
            [{low: 1},	{tense: 0}],
            [{coronal: -1},	{anterior: 0, distributed: 0, strident: 0}],
            [{consonantal: 1, dorsal: 1, high: 1, low: -1},	{front: 0, back: 0}],
            [{dorsal: -1},	{high: 0, low: 0, front: 0, back: 0, tense: 0}],
            [{labial: -1},	{round: -1, labiodental: -1}],
            [{round: 1},	{labial: 1}],
            [{labiodental: 1},	{labial: 1}],
            [{high: 1},	{low: -1}],
            [{low: 1},	{high: -1}],
            [{'constr gl': 1},	{'spread gl': -1}],
            [{'spread gl': 1},	{'constr gl': -1}],
            [{front: 1},	{back: -1}],
            [{back: 1},	{front: -1}],
            [{'delayed release': -1},	{sonorant: -1}],
            [{sonorant: 1},	{'delayed release': 0}],
            [{'delayed release': -1},	{continuant: -1}]
        ],
        
        diacritics: {
			'\u0329': [{syllabic: 1}, {syllabic: -1}, 'syllabic'],
			'\u0330': [{'spread gl': -1, 'constr gl': 1}, {voice: 1, 'spread gl': -1, 'constr gl': -1}, 'creaky voiced'],
			'\u0325': [{voice: -1}, {sonorant: 1, voice: 1}, 'voiceless'],
			'\u0324': [{'spread gl': 1, 'constr gl': -1}, {voice: 1, 'spread gl': -1, 'constr gl': -1}, 'breathy voiced'],
			'\u0320': [{anterior: -1, distributed: 1}, {consonantal: 1, coronal: 1, anterior: 1, distributed: -1}, 'postalveolar'],
			'\u032A': [{anterior: 1, distributed: 1}, {consonantal: 1, coronal: 1, anterior: 1, distributed: -1}, 'dental'],
			'\u031F': [{front: 1, back: -1}, {consonantal: 1, coronal: -1, dorsal: 1, high: 1, low: -1}, 'fronted velar'],
			'\u0320': [{front: -1, back: 1}, {consonantal: 1, dorsal: 1, high: 1, low: -1}, 'backed velar'],
			'\u02C8': [{stress: 1}, {stress: -1}, 'stressed'],
			'\u02D0': [{long: 1}, {long: -1}, 'long'],
			'\u02B0': [{'spread gl': 1, 'constr gl': -1}, {consonantal: 1, voice: -1, 'spread gl': -1, 'constr gl': -1}, 'aspirated'],
			'\u02B2': [{dorsal: 1, high: 1, low: -1, front: 1, back: -1}, {consonantal: 1}, 'palatalized'],
			'\u02B7': [{labial: 1, round: 1}, {consonantal: 1, round: -1}, 'labialized'],
			'\u02E0': [{dorsal: 1, high: 1, low: -1, front: -1, back: 1}, {consonantal: 1, dorsal: -1}, 'velarized'],
			'\u02E4': [{dorsal: 1, high: -1, low: 1, front: -1, back: 1}, {consonantal: 1, dorsal: -1}, 'pharyngealized'],
			'\u0303': [{nasal: 1}, {sonorant: 1, nasal: -1}, 'nasalized'],
			'\u02DE': [{coronal: 1, anterior: 1, distributed: 1, strident: -1}, {syllabic: 1, consonantal: -1, sonorant: 1, tap: -1, trill: -1, coronal: -1, dorsal: 1}, 'rhotic'],
			'\u02BC': [{'spread gl': -1, 'constr gl': 1}, {consonantal: 1, sonorant: -1, tap: -1, trill: -1, nasal: -1, voice: -1, 'spread gl': -1, 'constr gl': -1}, 'ejective']
        }
    };
    
	// convert a string into a list containing featurebundles
    function string_to_features(str) {
		// match brackets (which contain features like [+foo, -bar]) or anything else
        var matches = str.match(/(\[([^\]]+)\]|.)/g),
            output = [];
        
        for(var i in matches) {
            if(matches[i].length === 1) {
                if(index.segments[matches[i]]) {
					var new_bundle = {};
					for(var feature in index.segments[matches[i]]) {
						new_bundle[feature] = index.segments[matches[i]][feature];
					}
                    output.push(new_bundle);
                } else if(index.diacritics[matches[i]]) {
                    output[output.length - 1] = combine_features(output[output.length - 1], index.diacritics[matches[i]][0]);
                } else {
                    output.push(matches[i]);
                }
            } else {
                var features = {},
                    feature_list = matches[i].slice(1,-1).split(',');
                for(var j in feature_list) {
                    var val_matches = feature_list[j].trim().match(/^(\+|\-|0)?\s?(.+)/);
                    if(index.aliases[val_matches[2]]) {
                        val_matches[2] = index.aliases[val_matches[2]];
                    }
					features[val_matches[2]] = val_matches[1] == '-' ? -1 : val_matches[1] == '+' ? 1 : 0;
                }
                output.push(features);
            }
        }
        
        return output;
    }
    
	// convert a featurebundle into a string. optional 2nd param ignores segments and always uses [+foo,-bar] format.
    function features_to_string(features, ignore_segments) {
        if(typeof features[0] == 'undefined') {
			features = [features];
		}
		
        var output = [];
        
		for(var i in features) {
			if(typeof features[i] == 'string') {
				output[i] = features[i];
				continue;
			}
			
			if(!ignore_segments) {
				var seg = features_to_segment(features[i]);
				if(seg) {
					output[i] = seg;
					continue;
				}
			}
			
        	var temp = [];
			for(var feature in features[i]) {
				temp.push((features[i][feature] === 1 ? '+' : features[i][feature] == -1 ? '-' : '0') + feature);
			}
			output.push('<ul class="features"><li>' + temp.join(',</li><li>') + '</ul>');
		}
		
		return output.join(', ');
    }
	
	function features_to_segment(features, return_multiple_elements) {
        var matches = [], ratings = [];
        
        for(var segment in index.segments) {
            var comp = compare_features(features, index.segments[segment], true);
            if(!comp.diff.length) {
				matches.push(segment);
                ratings.push(0);
			} else if(comp.diff.length === 1) {
				for(var diac in index.diacritics) {
					var diac_applied = combine_features(index.segments[segment], index.diacritics[diac][0]),
						diac_comp = compare_features(features, diac_applied, true);
					if(!diac_comp.diff.length) {
						matches.push(segment + diac);
                        ratings.push(1);
					}
				}
			}
        }
        
        if(return_multiple_elements) {
            return matches;
        } else {
            var lowest_rating, match;
            for(var i in matches) {
                if(typeof lowest_rating == 'undefined' || ratings[i] < lowest_rating) {
                    match = matches[i];
                    lowest_rating = ratings[i];
                }
            }
            return match;
        }
	}
    
    function compare_features(bundle_a, bundle_b, two_way_match) {
		if(!bundle_a || !bundle_b) { return; }
		
        var comp = { same: {}, diff: [] };
        
        for(var feature_a in bundle_a) {
            if((typeof bundle_b[feature_a] == 'undefined' && bundle_a[feature_a] !== 0) ||
               bundle_a[feature_a] !== bundle_b[feature_a]) {
                comp.diff.push(feature_a);
            } else {
                comp.same[feature_a] = bundle_a[feature_a];
            }
        }
        
        if(two_way_match) {
            for(var feature_b in bundle_b) {
                if(((typeof bundle_a[feature_b] == 'undefined' && bundle_b[feature_b] !== 0) ||
                    bundle_b[feature_b] !== bundle_a[feature_b]) &&
                   (comp.diff.indexOf(feature_b) == -1)) {
                    comp.diff.push(feature_b);
                } else if(typeof comp.same[feature_b] == 'undefined') {
                    // this should never happen...?
                    comp.same[feature_b] = bundle_b[feature_b];
                }
            }
        }
        
        return comp;
    }
    
    function combine_features(bundle_a, bundle_b) {
        var output = {};
		// initialize output bundle with bundle_a
		for(var feature_a in bundle_a) {
			output[feature_a] = bundle_a[feature_a];
		}
		// apply bundle_b on top of it
		for(var feature_b in bundle_b) {
			output[feature_b] = bundle_b[feature_b];
		}
        return output;
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
                        (!input[offset] || compare_features(environment[j], input[offset]).diff.length)
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
                        input[offset] = combine_features(input[offset], transform[j]);
                    }
                }
            }
            
            // convert each bundle back to a string if possible
            for(var i in input) {
                var str = features_to_string(input[i]);
                if(str.length > 1) {
                    //console.log('failed to convert to string', input[i]);
                }
                input[i] = features_to_string(input[i]);
            }
            
            return input.join('');
        };
    }
	
	/*
		UI ELEMENTS
	*/
    
    var elems = {
            rules_container: $('.rules_container'),
            features_segments_container: $('.features_segments_container'),
            features_container: $('.features_container'),
            segments_container: $('.segments_container')
        },
        data = [], rules = [];

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
                buttons += '<li><button data-action="rule_up" data-i="' + i + '">&uArr;</button></li>';
            }
            if(i != rules.length - 1) {
                buttons += '<li><button data-action="rule_down" data-i="' + i + '">&dArr;</button></li>';
            }
            cur_row.push('<td class="rule" data-i="' + i + '"><ul class="rule_move_buttons">' + buttons + '</ul>\
                <input class="rule_name ipa" type="text" value="' + rules[i].name + '" placeholder="new rule">\
                <input class="rule_target ipa" type="text" value="' + rules[i].target + '" placeholder="target"><span class="arrow">&rarr;</span><input class="rule_transform ipa" type="text" value="' + rules[i].transform + '" placeholder="transform">\
                \
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
        
        elems.rules_container.html('<h3>Rules</h3><table class="rules">' + new_table.join('') + '</table>');
		
        $('.rules_container .ipa').ipa_ime();
    }
    
    elems.rules_container.bind('change', 'input', function(event) {
        var target = $(event.target),
            i = target.parent().data('i'),
            val = target.val(),
            redraw = false,
            select = false;
        
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
                select = false;
                redraw = true;
            } else if(target.hasClass('rule_target') && rules[i].target != val) {
                rules[i].target = val;
                select = true;
                redraw = true;
            } else if(target.hasClass('rule_transform') && rules[i].transform != val) {
                rules[i].transform = val;
                select = true;
                redraw = true;
            } else if(target.hasClass('rule_environment') && rules[i].environment != val) {
                rules[i].environment = val;
                select = false;
                redraw = true;
            }
            if(redraw && i === rules.length - 1) {
                rules.push(new Rule());
            }
        }
        if(select) {
            set_selection(string_to_features(val)[0]);
        }
        if(redraw) {
            draw_rules_table();
        }
    })
    .bind('click', 'button', function(event) {
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
	})
    .bind('focusin focusout', 'input', function(event) {
        if($(event.target).is('.rule_target, .rule_transform')) {
            var val = event.target.value;
            if(val.length === 1) {
                set_selection(val);
            } else {
                set_selection(string_to_features(event.target.value)[0]);
            }
        }
	});
	
    function draw_feature_list() {
		var features = [],
            rows = ['<td />'];
        
        for(var segment in index.segments) {
			for(var feature in index.segments[segment]) {
				if(features.indexOf(feature) == -1) {
					features.push(feature);
				}
			}
		}
        
		for(var i in features) {
			rows.push('<td data-type="feature">' + features[i] + '</td>');
		}
		
		elems.features_container.html('<h3>Features</h3><table><tr>' + rows.join('</tr><tr>') + '</tr></table>');
    }
    
	function draw_segment_chart() {
		var header = [],
			features = [],
			rows = [];
		
		for(var segment in index.segments) {
			for(var feature in index.segments[segment]) {
				if(features.indexOf(feature) == -1) {
					features.push(feature);
				}
			}
			header.push(segment);
		}
		rows.push('<th data-type="segment">' + header.join('</th><th data-type="segment">') + '</th>');
		
		for(var i in features) {
			var row = '';
			for(var segment in index.segments) {
				//console.log(segment, features[i], index.segments[segment][features[i]], (!index.segments[segment][features[i]] ? 0 : index.segments[segment][i] == -1 ? '-' : '+'));
				row += '<td data-type="value" data-feature="' + features[i] + '" data-segment="' + segment + '">' + (!index.segments[segment][features[i]] ? 0 : index.segments[segment][features[i]] == -1 ? '-' : '+') + '</td>';
			}
			rows.push(row);
		}
		
		elems.segments_container.html('<h3>Segments</h3><table><tr>' + rows.join('</tr><tr>') + '</tr></table>');
	}
	
	elems.features_segments_container.bind('click', function(event) {
        var target = $(event.target);
        if(!target.is('td, th')) { return; }
        
        var elem_type = target.data('type');
        if(elem_type == 'feature') {
            var feature = event.target.innerHTML,
                bundle_a = {}, bundle_b = {};
            
            // select + and - the selected feature
            bundle_a[feature] = 1;
            bundle_b[feature] = -1;
            set_selection([bundle_a, bundle_b]);            
        } else if(elem_type == 'segment') {
            set_selection(event.target.innerHTML);
        } else if(elem_type == 'value') {
            var feature = target.data('feature'),
                segment = target.data('segment'),
                value = event.target.innerHTML;
            set_selection([string_to_features('['+value + feature+']')[0], segment]);
        }
	});
	
	function set_selection(selection) {
        if(typeof selection == 'string' || typeof selection[0] == 'undefined') {
            selection = [selection];
        }
        
        var items = [];
        
        for(var item in selection) {
            //console.log('sel it', selection, item, selection[item]);
            if(index.segments[selection[item]]) {
                // segment selected
                var features = features_to_string(index.segments[selection[item]], true);
                items.push('<h3>Segment: ' + selection[item] + '</h3>' + features);
            } else {
                // query the feature bundle
                var matched_segments = [],
                    html = [];
                for(var segment in index.segments) {
                    var comp = compare_features(selection[item], index.segments[segment]);
                    if(comp.diff.length === 0) {
                        matched_segments.push(segment);
                    }
                }
                html.push('<h3>' + features_to_string(selection[item], true) + '</h3>');
                if(matched_segments.length) {
                    html.push('<ul class="segments"><li>' + matched_segments.join('</li><li>') + '</li></ul>');
                } else {
                    html.push('<p>No segments found</p>');
                }
                items.push(html.join(''));
            }
        }
        
        $('.selection_container').html('<div class="selection">' + items.join('</div><div class="selection">') + '</div>');
	}
    
    // Default data and rules
    data.push('pɛt');
    data.push('bɛd');
    data.push('fɛl');
    data.push('bɹɛd');
    data.push('');
    rules.push(new Rule('t', 'ʔ', '_#', 't glottalization'));
    rules.push(new Rule('[-cont]', '[-v]', '_#', 'final obstruent devoicing'));
    rules.push(new Rule('l', '[+dorsal, +high, -low, -front, +back]', '_#', 'L-velarization'));
    rules.push(new Rule('[+syl,-hi,-lo]', '[+high]', '_', 'mid vowel raising'));
    rules.push(new Rule());
    
    draw_rules_table();
	draw_feature_list();
    draw_segment_chart();
    
})(jQuery);