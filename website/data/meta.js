// Hand-curated metadata: collection blurbs, sutta blurbs, and the
// chapter (vagga / saṁyutta / nipāta) tables used to group collection pages.
// Suttas without a blurb here simply show no description line.

window.COLLECTION_META = {
  "Majjhima Nikāya": {
    blurb: "The Middle-Length Discourses — substantial teachings rich in narrative, dialogue, and meditation instruction.",
  },
  "Saṁyutta Nikāya": {
    blurb: "The Connected Discourses — thousands of short suttas grouped by theme, from causation to the factors of the path.",
  },
  "Aṅguttara Nikāya": {
    blurb: "The Numerical Discourses — practical teachings arranged by number, from the Ones up to the Elevens.",
  },
  "Khuddakapāṭha": {
    blurb: "The Short Passages — a pocket anthology of nine essential texts, traditionally a novice's first book of recitation.",
  },
  "Udāna": {
    blurb: "The Inspired Utterances — eighty occasions on which the Buddha breathed out a verse of joy or insight.",
  },
  "Itivuttaka": {
    blurb: "The “Thus It Was Said” collection — 112 short discourses preserved through the laywoman Khujjuttarā's memory.",
  },
};

window.SUTTA_BLURBS = {
  "MN 21": "Even if bandits were sawing off your limbs, a mind of hate would not be following the teaching — the Canon's most uncompromising lesson in patience.",
  "SN 12.2": "A precise, term-by-term definition of each of the twelve links of dependent origination.",
  "SN 12.3": "The wrong way and the right way: the chain of arising read as the road into suffering, and its cessation as the road out.",
  "SN 12.4": "Before his awakening, the Buddha Vipassī traces aging and death back through the chain of conditions — the discovery that opens the path.",
  "AN 10.60": "Ten healing perceptions, from impermanence to breath awareness, sent to the gravely ill monk Girimānanda — who recovers on hearing them.",
  "AN 10.61": "Ignorance has no first beginning, yet it has nutriment — a chain of conditions that can be starved link by link until knowledge and liberation are fed instead.",
  "AN 10.62": "Craving too has its chain of nutriment — and a counter-chain, beginning with good company, that feeds liberation.",
  "Sn 2.4 / Kp 5": "Asked by a radiant deva what the highest blessing is, the Buddha answers with a ladder of blessings ending in the unshakeable mind.",
  "Kp 9": "The loving-kindness chant: boundless goodwill toward all beings, as a mother protects her only child.",
  "Ud 1.1": "In the first watch of the night of awakening, the Buddha contemplates dependent origination in forward order.",
  "Ud 1.1, 1.2, 1.3": "The night of awakening entire: dependent origination contemplated forward, backward, and both ways through the three watches.",
  "Ud 8.4": "A terse utterance on nibbāna: for one without support and inclination there is no coming, no going — the end of suffering.",
  "Ud 8.5": "The Buddha's last meal at Cunda's house, illness borne with full awareness, and the words that free Cunda of all remorse.",
  "Ud 8.7": "At a fork in the road the attendant Nāgasamāla insists on his own way — and learns the cost of leaving the one who knows the path.",
  "Ud 8.9": "Dabba Mallaputta rises into the air and attains final nibbāna in a blaze that leaves neither ash nor soot.",
  "Iti 2": "Abandon one thing — anger — and the Buddha himself stands guarantor for your non-returning.",
  "Iti 7": "The “All” — the senses and their objects — must be fully understood through direct knowledge before suffering can end.",
  "Iti 14": "No covering compares to ignorance, the single hindrance under which beings wander on for so long.",
  "Iti 15": "No fetter compares to craving, the cord that keeps beings bound to wandering through existence.",
  "Iti 22": "Do not fear merit, says the Buddha — recalling seven years of loving-kindness and the long ages of happiness that followed.",
  "Iti 24": "The bones one person leaves behind in a single aeon of rebirths would stand higher than a mountain — seeing this, turn away.",
};

// chapterFor(abbr, ref) -> group label for a collection page, or null for
// collections too small to need grouping (e.g. Khuddakapāṭha).
window.chapterFor = (function () {
  const MN_VAGGAS = [
    "Mūlapariyāyavagga — The Root of All Things",
    "Sīhanādavagga — Lion's Roars",
    "Opammavagga — Similes",
    "Mahāyamakavagga — The Great Pairs",
    "Cūḷayamakavagga — The Shorter Pairs",
    "Gahapativagga — Householders",
    "Bhikkhuvagga — Monks",
    "Paribbājakavagga — Wanderers",
    "Rājavagga — Kings",
    "Brāhmaṇavagga — Brahmins",
    "Devadahavagga — At Devadaha",
    "Anupadavagga — One by One",
    "Suññatavagga — Emptiness",
    "Vibhaṅgavagga — Analysis",
    "Saḷāyatanavagga — The Sixfold Base",
  ];
  const SN_SAMYUTTAS = {
    1: "Devatāsaṁyutta — Deities", 2: "Devaputtasaṁyutta — Young Devas",
    3: "Kosalasaṁyutta — King Pasenadi of Kosala", 4: "Mārasaṁyutta — Māra",
    5: "Bhikkhunīsaṁyutta — Nuns", 6: "Brahmasaṁyutta — Brahmās",
    7: "Brāhmaṇasaṁyutta — Brahmins", 8: "Vaṅgīsasaṁyutta — Vaṅgīsa the Poet",
    9: "Vanasaṁyutta — The Forest", 10: "Yakkhasaṁyutta — Spirits",
    11: "Sakkasaṁyutta — Sakka", 12: "Nidānasaṁyutta — Causation",
    13: "Abhisamayasaṁyutta — Breakthrough", 14: "Dhātusaṁyutta — Elements",
    15: "Anamataggasaṁyutta — The Beginningless Round", 16: "Kassapasaṁyutta — Kassapa",
    17: "Lābhasakkārasaṁyutta — Gain and Honour", 18: "Rāhulasaṁyutta — Rāhula",
    19: "Lakkhaṇasaṁyutta — Lakkhaṇa", 20: "Opammasaṁyutta — Similes",
    21: "Bhikkhusaṁyutta — Monks", 22: "Khandhasaṁyutta — The Aggregates",
    23: "Rādhasaṁyutta — Rādha", 24: "Diṭṭhisaṁyutta — Views",
    25: "Okkantasaṁyutta — Entering", 26: "Uppādasaṁyutta — Arising",
    27: "Kilesasaṁyutta — Defilements", 28: "Sāriputtasaṁyutta — Sāriputta",
    29: "Nāgasaṁyutta — Dragons", 30: "Supaṇṇasaṁyutta — Phoenixes",
    31: "Gandhabbakāyasaṁyutta — Fairies", 32: "Valāhakasaṁyutta — Cloud Devas",
    33: "Vacchagottasaṁyutta — Vacchagotta", 34: "Jhānasaṁyutta — Absorption",
    35: "Saḷāyatanasaṁyutta — The Six Sense Bases", 36: "Vedanāsaṁyutta — Sensation",
    37: "Mātugāmasaṁyutta — Women", 38: "Jambukhādakasaṁyutta — Jambukhādaka",
    39: "Sāmaṇḍakasaṁyutta — Sāmaṇḍaka", 40: "Moggallānasaṁyutta — Moggallāna",
    41: "Cittasaṁyutta — Citta the Householder", 42: "Gāmaṇisaṁyutta — Headmen",
    43: "Asaṅkhatasaṁyutta — The Unconditioned", 44: "Abyākatasaṁyutta — The Undeclared",
    45: "Maggasaṁyutta — The Path", 46: "Bojjhaṅgasaṁyutta — Factors of Awakening",
    47: "Satipaṭṭhānasaṁyutta — Establishings of Awareness", 48: "Indriyasaṁyutta — Faculties",
    49: "Sammappadhānasaṁyutta — Right Efforts", 50: "Balasaṁyutta — Powers",
    51: "Iddhipādasaṁyutta — Bases of Success", 52: "Anuruddhasaṁyutta — Anuruddha",
    53: "Jhānasaṁyutta — Absorptions", 54: "Ānāpānasaṁyutta — Breath Awareness",
    55: "Sotāpattisaṁyutta — Stream-Entry", 56: "Saccasaṁyutta — The Truths",
  };
  const AN_NIPATAS = {
    1: "Ekakanipāta — The Ones", 2: "Dukanipāta — The Twos",
    3: "Tikanipāta — The Threes", 4: "Catukkanipāta — The Fours",
    5: "Pañcakanipāta — The Fives", 6: "Chakkanipāta — The Sixes",
    7: "Sattakanipāta — The Sevens", 8: "Aṭṭhakanipāta — The Eights",
    9: "Navakanipāta — The Nines", 10: "Dasakanipāta — The Tens",
    11: "Ekādasakanipāta — The Elevens",
  };
  const UD_VAGGAS = {
    1: "Bodhivagga — Awakening", 2: "Mucalindavagga — Mucalinda",
    3: "Nandavagga — Nanda", 4: "Meghiyavagga — Meghiya",
    5: "Soṇavagga — Soṇa", 6: "Jaccandhavagga — Born Blind",
    7: "Cūḷavagga — The Minor Chapter", 8: "Pāṭaligāmiyavagga — At Pāṭaligāma",
  };
  const ITI_NIPATAS = [
    [1, 27, "Ekakanipāta — The Ones"],
    [28, 49, "Dukanipāta — The Twos"],
    [50, 99, "Tikanipāta — The Threes"],
    [100, 112, "Catukkanipāta — The Fours"],
  ];

  return function (abbr, ref) {
    const m = ref.match(/(\d+)/);
    if (!m) return null;
    const n = parseInt(m[1], 10);
    switch (abbr) {
      case "MN": {
        const v = Math.ceil(n / 10);
        const lo = (v - 1) * 10 + 1;
        const name = MN_VAGGAS[v - 1] || "Vagga " + v;
        return `${name} · MN ${lo}–${lo + 9}`;
      }
      case "SN": return SN_SAMYUTTAS[n] || "Saṁyutta " + n;
      case "AN": return AN_NIPATAS[n] || "Nipāta " + n;
      case "Ud": return UD_VAGGAS[n] || "Vagga " + n;
      case "Iti": {
        const hit = ITI_NIPATAS.find(([lo, hi]) => n >= lo && n <= hi);
        return hit ? hit[2] : null;
      }
      default: return null; // Kp and anything unknown: flat list
    }
  };
})();
