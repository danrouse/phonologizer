(function() {
    
    var index = {
        segments: {
			'\u0070': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': -1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': 1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'tense': 0 },
			'\u0062': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': -1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': 1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'tense': 0 },
			'\u0074': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': -1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': 1, 'distributed': -1, 'strident': -1, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'tense': 0 },
			'\u0064': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': -1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': 1, 'distributed': -1, 'strident': -1, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'tense': 0 },
			'\u0288': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': -1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': -1, 'distributed': -1, 'strident': -1, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'tense': 0 },
			'\u0256': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': -1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': -1, 'distributed': -1, 'strident': -1, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'tense': 0 },
			'\u006D': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': 1, 'continuant': -1, 'delayed release': 0, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': 1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': 1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'tense': 0 },
			'\u0278': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': 1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': 1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'tense': 0 },
			'\u03B2': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': 1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': 1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'tense': 0 },
			'\u0076': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': 1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': 1, 'round': -1, 'labiodental': 1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'tense': 0 },
			'\u03B8': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': 1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': 1, 'distributed': 1, 'strident': -1, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'tense': 0 },
			'\u00F0': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': 1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': 1, 'distributed': 1, 'strident': -1, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'tense': 0 },
			'\u0073': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': 1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': 1, 'distributed': -1, 'strident': 1, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'tense': 0 },
			'\u007A': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': 1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': 1, 'distributed': -1, 'strident': 1, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'tense': 0 },
			'\u0283': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': 1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': -1, 'distributed': 1, 'strident': 1, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'tense': 0 },
			'\u0292': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': 1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': -1, 'distributed': 1, 'strident': 1, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'tense': 0 },
			'\u0282': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': 1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': -1, 'distributed': -1, 'strident': 1, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'tense': 0 },
			'\u026C': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': 1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': 1, 'distributed': -1, 'strident': -1, 'lateral': 1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'tense': 0 },
			'\u026E': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': 1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': 1, 'distributed': -1, 'strident': -1, 'lateral': 1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'tense': 0 },
			'\u0258': { 'syllabic': 1, 'stress': -1, 'long': -1, 'consonantal': -1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': -1, 'low': -1, 'front': -1, 'tense': 1 },
			'\u025E': { 'syllabic': 1, 'stress': -1, 'long': -1, 'consonantal': -1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': 1, 'round': 1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': -1, 'low': -1, 'front': -1, 'tense': -1 },
			'\u026B': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': 1, 'distributed': -1, 'strident': -1, 'lateral': 1, 'dorsal': 1, 'high': -1, 'low': -1, 'front': -1, 'tense': 0 },
			'\u0274': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': 1, 'continuant': -1, 'delayed release': 0, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': 1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': -1, 'low': -1, 'front': -1, 'tense': 0 },
			'\u0280': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': 1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': -1, 'low': -1, 'front': -1, 'tense': 0 },
			'\u0272': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': 1, 'continuant': -1, 'delayed release': 0, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': 1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': -1, 'distributed': 1, 'strident': -1, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': 1, 'tense': 0 },
			'\u028E': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': -1, 'distributed': 1, 'strident': -1, 'lateral': 1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': 1, 'tense': 0 },
			'\u014B': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': 1, 'continuant': -1, 'delayed release': 0, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': 1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': 0, 'tense': 0 },
			'\u029F': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': 1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': 0, 'tense': 0 },
			'\u0273': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': 1, 'continuant': -1, 'delayed release': 0, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': 1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': -1, 'distributed': -1, 'strident': -1, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'tense': 0 },
			'\u0299': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': 1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': 1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'tense': 0 },
			'\u026D': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': -1, 'distributed': -1, 'strident': -1, 'lateral': 1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'tense': 0 },
			'\u027A': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': 1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': 1, 'distributed': -1, 'strident': -1, 'lateral': 1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'tense': 0 },
			'\u027B': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': -1, 'distributed': -1, 'strident': -1, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'tense': 0 },
			'\u027D': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': 1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': -1, 'distributed': -1, 'strident': -1, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'tense': 0 },
			'\u0072': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': 1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': 1, 'distributed': -1, 'strident': -1, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'tense': 0 },
			'\u006E': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': 1, 'continuant': -1, 'delayed release': 0, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': 1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': 1, 'distributed': -1, 'strident': -1, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'tense': 0 },
			'\u006C': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': 1, 'distributed': -1, 'strident': -1, 'lateral': 1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'tense': 0 },
			'\u027E': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': 1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': 1, 'distributed': -1, 'strident': -1, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'tense': 0 },
			'\u0271': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': 1, 'continuant': -1, 'delayed release': 0, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': 1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': 1, 'round': -1, 'labiodental': 1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'tense': 0 },
			'\u0294': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': -1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': 1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'tense': 0 },
			'\u006B\u031F\u0361\u0078\u031F': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': 1, 'tense': 0 },
			'\u0261\u031F\u0361\u0263\u031F': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': 1, 'tense': 0 },
			'\u0127': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': 1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': -1, 'low': 1, 'front': -1, 'tense': 0 },
			'\u0295': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': 1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': -1, 'low': 1, 'front': -1, 'tense': 0 },
			'\u0281': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': 1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': -1, 'low': -1, 'front': -1, 'tense': 0 },
			'\u0071': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': -1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': -1, 'low': -1, 'front': -1, 'tense': 0 },
			'\u03C7': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': 1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': -1, 'low': -1, 'front': -1, 'tense': 0 },
			'\u0262': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': -1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': -1, 'low': -1, 'front': -1, 'tense': 0 },
			'\u0255': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': 1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': 1, 'distributed': 1, 'strident': 1, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': 1, 'tense': 0 },
			'\u025F': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': -1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': -1, 'distributed': 1, 'strident': -1, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': 1, 'tense': 0 },
			'\u029D': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': 1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': -1, 'distributed': 1, 'strident': -1, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': 1, 'tense': 0 },
			'\u0063': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': -1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': -1, 'distributed': 1, 'strident': -1, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': 1, 'tense': 0 },
			'\u00E7': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': 1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': -1, 'distributed': 1, 'strident': -1, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': 1, 'tense': 0 },
			'\u0064\u0361\u0291': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': 1, 'distributed': 1, 'strident': 1, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': 1, 'tense': 0 },
			'\u0074\u0361\u0255': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': 1, 'distributed': 1, 'strident': 1, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': 1, 'tense': 0 },
			'\u0263': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': 1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': 0, 'tense': 0 },
			'\u0078': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': 1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': 0, 'tense': 0 },
			'\u006B': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': -1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': 0, 'tense': 0 },
			'\u0261': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': -1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': 0, 'tense': 0 },
			'\u0291': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': 1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': 1, 'distributed': 1, 'strident': 1, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': 1, 'tense': 0 },
			'\u0290': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': 1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': -1, 'distributed': -1, 'strident': 1, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'tense': 0 },
			'\u0066': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': 1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': 1, 'round': -1, 'labiodental': 1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'tense': 0 },
			'\u0064\u0361\u0292': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': -1, 'distributed': 1, 'strident': 1, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'tense': 0 },
			'\u0064\u0361\u007A': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': 1, 'distributed': -1, 'strident': 1, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'tense': 0 },
			'\u0064\u0361\u026E': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': 1, 'distributed': -1, 'strident': -1, 'lateral': 1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'tense': 0 },
			'\u0064\u0320\u0361\u026E\u0320': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': -1, 'distributed': 1, 'strident': -1, 'lateral': 1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'tense': 0 },
			'\u0074\u0361\u0283': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': -1, 'distributed': 1, 'strident': 1, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'tense': 0 },
			'\u0074\u0361\u026C\u0332': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': -1, 'distributed': 1, 'strident': -1, 'lateral': 1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'tense': 0 },
			'\u0074\u0361\u0073': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': 1, 'distributed': -1, 'strident': 1, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'tense': 0 },
			'\u0074\u0361\u026C': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': 1, 'distributed': -1, 'strident': -1, 'lateral': 1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'tense': 0 },
			'\u0074\u032A\u0361\u0073\u032A': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': 1, 'distributed': 1, 'strident': 1, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'tense': 0 },
			'\u0074\u032A\u0361\u026C\u032A': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': 1, 'distributed': 1, 'strident': -1, 'lateral': 1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'tense': 0 },
			'\u0064\u032A\u0361\u007A\u032A': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': 1, 'distributed': 1, 'strident': 1, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'tense': 0 },
			'\u0064\u032A\u0361\u026E\u032A': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': 1, 'distributed': 1, 'strident': -1, 'lateral': 1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'tense': 0 },
			'\u0288\u0361\u0282': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': -1, 'distributed': -1, 'strident': 1, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'tense': 0 },
			'\u0256\u0361\u0290': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': -1, 'distributed': -1, 'strident': 1, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'tense': 0 },
			'\u0070\u0361\u0066': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': 1, 'round': -1, 'labiodental': 1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'tense': 0 },
			'\u0062\u0361\u0076': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': 1, 'round': -1, 'labiodental': 1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'tense': 0 },
			'\u0070\u0361\u0278': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': 1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'tense': 0 },
			'\u0062\u0361\u03B2': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': 1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'tense': 0 },
			'\u0074\u032A\u0361\u03B8': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': 1, 'distributed': 1, 'strident': -1, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'tense': 0 },
			'\u0064\u032A\u0361\u00F0': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': 1, 'distributed': 1, 'strident': -1, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'tense': 0 },
			'\u0063\u0361\u00E7': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': -1, 'distributed': 1, 'strident': -1, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': 1, 'tense': 0 },
			'\u025F\u0361\u029D': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': -1, 'distributed': 1, 'strident': -1, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': 1, 'tense': 0 },
			'\u006B\u0361\u0078': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': 0, 'tense': 0 },
			'\u006B\u0320\u0361\u0078\u0320': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': -1, 'tense': 0 },
			'\u0261\u0361\u0263': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': 0, 'tense': 0 },
			'\u0261\u0320\u0361\u0263\u0320': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': -1, 'tense': 0 },
			'\u0071\u0361\u03C7': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': -1, 'low': -1, 'front': -1, 'tense': 0 },
			'\u0262\u0361\u0281': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': -1, 'low': -1, 'front': -1, 'tense': 0 },
			'\u0267': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': 1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': -1, 'distributed': 1, 'strident': 1, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': 0, 'tense': 0 },
			'\u006B\u0361\u0070': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': -1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': 1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': 0, 'tense': 0 },
			'\u0261\u0361\u0062': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': -1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': 1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': 0, 'tense': 0 },
			'\u0070\u0361\u0074': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': -1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': -1, 'constr gl': -1, 'labial': 1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': 1, 'distributed': -1, 'strident': 1, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'tense': 0 },
			'\u0062\u0361\u0064': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': 1, 'sonorant': -1, 'continuant': -1, 'delayed release': -1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': 1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': 1, 'distributed': -1, 'strident': 1, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'tense': 0 },
			'\u0270': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': -1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': 0, 'tense': 1 },
			'\u0270\u0320': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': -1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': -1, 'tense': 1 },
			'\u0077': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': -1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': 1, 'round': 1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': -1, 'tense': 1 },
			'\u0265': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': -1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': 1, 'round': 1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': 1, 'tense': 1 },
			'\u006A': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': -1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': 1, 'tense': 1 },
			'\u0279': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': -1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': 1, 'anterior': -1, 'distributed': 1, 'strident': -1, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'tense': 0 },
			'\u028B': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': -1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': 1, 'round': -1, 'labiodental': 1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'tense': 0 },
			'\u028D': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': -1, 'sonorant': -1, 'continuant': 1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': 1, 'constr gl': -1, 'labial': 1, 'round': 1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': -1, 'tense': 1 },
			'\u0266': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': -1, 'sonorant': -1, 'continuant': 1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': 1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'tense': 0 },
			'\u0068': { 'syllabic': -1, 'stress': -1, 'long': -1, 'consonantal': -1, 'sonorant': -1, 'continuant': 1, 'delayed release': 1, 'approximant': -1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': -1, 'spread gl': 1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': -1, 'high': 0, 'low': 0, 'front': 0, 'tense': 0 },
			'\u0069': { 'syllabic': 1, 'stress': -1, 'long': -1, 'consonantal': -1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': 1, 'tense': 1 },
			'\u0079': { 'syllabic': 1, 'stress': -1, 'long': -1, 'consonantal': -1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': 1, 'round': 1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': 1, 'tense': 1 },
			'\u0268': { 'syllabic': 1, 'stress': -1, 'long': -1, 'consonantal': -1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': -1, 'tense': 1 },
			'\u0289': { 'syllabic': 1, 'stress': -1, 'long': -1, 'consonantal': -1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': 1, 'round': 1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': -1, 'tense': 1 },
			'\u026F': { 'syllabic': 1, 'stress': -1, 'long': -1, 'consonantal': -1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': -1, 'tense': 1 },
			'\u0075': { 'syllabic': 1, 'stress': -1, 'long': -1, 'consonantal': -1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': 1, 'round': 1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': -1, 'tense': 1 },
			'\u026A': { 'syllabic': 1, 'stress': -1, 'long': -1, 'consonantal': -1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': 1, 'tense': -1 },
			'\u028F': { 'syllabic': 1, 'stress': -1, 'long': -1, 'consonantal': -1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': 1, 'round': 1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': 1, 'tense': -1 },
			'\u028A': { 'syllabic': 1, 'stress': -1, 'long': -1, 'consonantal': -1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': 1, 'round': 1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': 1, 'low': -1, 'front': -1, 'tense': -1 },
			'\u0065': { 'syllabic': 1, 'stress': -1, 'long': -1, 'consonantal': -1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': -1, 'low': -1, 'front': 1, 'tense': 1 },
			'\u00F8': { 'syllabic': 1, 'stress': -1, 'long': -1, 'consonantal': -1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': 1, 'round': 1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': -1, 'low': -1, 'front': 1, 'tense': 1 },
			'\u0275': { 'syllabic': 1, 'stress': -1, 'long': -1, 'consonantal': -1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': 1, 'round': 1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': -1, 'low': -1, 'front': -1, 'tense': 1 },
			'\u0264': { 'syllabic': 1, 'stress': -1, 'long': -1, 'consonantal': -1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': -1, 'low': -1, 'front': -1, 'tense': 1 },
			'\u006F': { 'syllabic': 1, 'stress': -1, 'long': -1, 'consonantal': -1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': 1, 'round': 1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': -1, 'low': -1, 'front': -1, 'tense': 1 },
			'\u0259': { 'syllabic': 1, 'stress': -1, 'long': -1, 'consonantal': -1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': -1, 'low': -1, 'front': -1, 'tense': -1 },
			'\u025B': { 'syllabic': 1, 'stress': -1, 'long': -1, 'consonantal': -1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': -1, 'low': -1, 'front': 1, 'tense': -1 },
			'\u0153': { 'syllabic': 1, 'stress': -1, 'long': -1, 'consonantal': -1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': 1, 'round': 1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': -1, 'low': -1, 'front': 1, 'tense': -1 },
			'\u028C': { 'syllabic': 1, 'stress': -1, 'long': -1, 'consonantal': -1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': -1, 'low': -1, 'front': -1, 'tense': -1 },
			'\u0254': { 'syllabic': 1, 'stress': -1, 'long': -1, 'consonantal': -1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': 1, 'round': 1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': -1, 'low': -1, 'front': -1, 'tense': -1 },
			'\u04D5': { 'syllabic': 1, 'stress': -1, 'long': -1, 'consonantal': -1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': -1, 'low': 1, 'front': 1, 'tense': 0 },
			'\u0061': { 'syllabic': 1, 'stress': -1, 'long': -1, 'consonantal': -1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': -1, 'low': 1, 'front': -1, 'tense': 0 },
			'\u0276': { 'syllabic': 1, 'stress': -1, 'long': -1, 'consonantal': -1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': 1, 'round': 1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': -1, 'low': 1, 'front': 1, 'tense': 0 },
			'\u0251': { 'syllabic': 1, 'stress': -1, 'long': -1, 'consonantal': -1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': -1, 'round': -1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': -1, 'low': 1, 'front': -1, 'tense': 0 },
			'\u0252': { 'syllabic': 1, 'stress': -1, 'long': -1, 'consonantal': -1, 'sonorant': 1, 'continuant': 1, 'delayed release': 0, 'approximant': 1, 'tap': -1, 'trill': -1, 'nasal': -1, 'voice': 1, 'spread gl': -1, 'constr gl': -1, 'labial': 1, 'round': 1, 'labiodental': -1, 'coronal': -1, 'anterior': 0, 'distributed': 0, 'strident': 0, 'lateral': -1, 'dorsal': 1, 'high': -1, 'low': 1, 'front': -1, 'tense': 0 },
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
            voi: 'voice', v: 'voice',
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
            tns: 'tense', ten: 'tense'
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
			'\u0329':	[{syllabic: 1}, {syllabic: -1}],
			'\u0330':	[{'spread gl': -1, 'constr gl': 1}, {voice: 1, 'spread gl': -1, 'constr gl': -1}],
			'\u0325':	[{voice: -1}, {sonorant: 1, voice: 1}],
			'\u0324':	[{'spread gl': 1, 'constr gl': -1}, {voice: 1, 'spread gl': -1, 'constr gl': -1}],
			'\u0320':	[{anterior: -1, distributed: 1}, {consonantal: 1, coronal: 1, anterior: 1, distributed: -1}],
			'\u032A':	[{anterior: 1, distributed: 1}, {consonantal: 1, coronal: 1, anterior: 1, distributed: -1}],
			'\u031F':	[{front: 1, back: -1}, {consonantal: 1, coronal: -1, dorsal: 1, high: 1, low: -1}],
			'\u0320':	[{front: -1, back: 1}, {consonantal: 1, dorsal: 1, high: 1, low: -1}],
			'\u02C8':	[{stress: 1}, {stress: -1}],
			'\u02D0':	[{long: 1}, {long: -1}],
			'\u02B0':	[{'spread gl': 1, 'constr gl': -1}, {consonantal: 1, voice: -1, 'spread gl': -1, 'constr gl': -1}],
			'\u02B2':	[{dorsal: 1, high: 1, low: -1, front: 1, back: -1}, {consonantal: 1}],
			'\u02B7':	[{labial: 1, round: 1}, {consonantal: 1, round: -1}],
			'\u02E0':	[{dorsal: 1, high: 1, low: -1, front: -1, back: 1}, {consonantal: 1, dorsal: -1}],
			'\u02E4':	[{dorsal: 1, high: -1, low: 1, front: -1, back: 1}, {consonantal: 1, dorsal: -1}],
			'\u0303':	[{nasal: 1}, {sonorant: 1, nasal: -1}],
			'\u02DE':	[{coronal: 1, anterior: 1, distributed: 1, strident: -1}, {syllabic: 1, consonantal: -1, sonorant: 1, tap: -1, trill: -1, coronal: -1, dorsal: 1}],
			'\u02BC':	[{'spread gl': -1, 'constr gl': 1}, {consonantal: 1, sonorant: -1, tap: -1, trill: -1, nasal: -1, voice: -1, 'spread gl': -1, 'constr gl': -1}]
        }
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