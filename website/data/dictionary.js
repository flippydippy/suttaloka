// Pāli dictionary for the sutta reader.
// Keyed by headword. Fields:
//   meaning   – short gloss line
//   summary   – one-sentence orientation (optional)
//   gram      – grammar note (optional)
//   breakdown – [[part, explanation], ...] morphological analysis (optional)
//   goenka    – Goenka-tradition context paragraph (optional)
//   forms     – irregular inflected forms that should resolve here (optional)
window.PALI_DICT = {

  /* ──────────────── core doctrinal terms ──────────────── */

  "asaddhammassavana": {
    meaning: "hearing the untrue teaching; listening to false teachings",
    summary: "This is a compound word meaning “hearing the untrue teaching” or “listening to false teachings.”",
    breakdown: [
      ["a-", "A negative prefix meaning “not” or “un-”."],
      ["saddhamma", "The true teaching or the law of nature (derived from sat, meaning “true/real,” + dhamma, meaning “teaching/law”). Thus, asaddhamma refers to false teachings or teachings contrary to the truth."],
      ["savana", "Listening, hearing, or studying. (The double ss in the middle is a phonetic sandhi doubling where dhamma meets savana.)"]
    ],
    goenka: "This refers to listening to, reading, or following teachings that are contrary to the natural law of cause and effect (Dhamma). Specifically, it includes teachings that encourage dogmatic belief, blind faith, or ritualism instead of direct, experiential observation of reality as it is (such as the observation of impermanence, anicca, at the level of bodily sensations)."
  },

  "saddhammassavana": {
    meaning: "hearing the true teaching",
    breakdown: [
      ["saddhamma", "The true teaching (sat, “true/real,” + dhamma, “teaching/law”)."],
      ["savana", "Listening, hearing, or studying."]
    ],
    goenka: "Listening to the true Dhamma — teachings that accord with the law of nature and can be verified through direct experience. In the tradition, hearing the Dhamma properly explained is the nutriment for confidence (saddhā) and a precondition for right practice."
  },

  "dhamma": {
    meaning: "the teaching; the law of nature; phenomenon, mental object",
    gram: "masculine noun (plural dhammā can mean “phenomena” or “mental objects”)",
    breakdown: [
      ["dhamma", "From the root √dhar, “to hold, support.” That which holds or supports — the natural law, and by extension the Buddha's teaching of that law."]
    ],
    goenka: "Dhamma is the law of nature, universal and non-sectarian. One who lives in accordance with it — observing reality as it is, within the framework of the body — lives a life of peace and harmony. As a plural or in compounds it often means “mental contents” or “phenomena,” as in the fourth satipaṭṭhāna, dhammānupassanā.",
    forms: ["dhammaṁ", "dhammā", "dhamme", "dhammesu", "dhammānaṁ", "dhammena"]
  },

  "saddhamma": {
    meaning: "the true teaching; the good law",
    breakdown: [
      ["sat / sad-", "True, real, good (present participle of √as, “to be”)."],
      ["dhamma", "Teaching, law of nature."]
    ],
    goenka: "The true Dhamma: the teaching that describes reality as it actually is, verifiable through direct experience, as opposed to philosophies based on speculation or blind belief."
  },

  "anicca": {
    meaning: "impermanent; impermanence",
    gram: "adjective / neuter noun (aniccaṁ)",
    breakdown: [
      ["a- / an-", "Negative prefix: “not.”"],
      ["nicca", "Permanent, constant, continuous."]
    ],
    goenka: "The first of the three characteristics of existence (ti-lakkhaṇa). In Vipassana as taught by S.N. Goenka, anicca is not a philosophical concept to be accepted on faith but a reality to be experienced directly: every sensation on the body arises and passes away. Continuous awareness of anicca at the level of sensation is the essence of the practice.",
    forms: ["aniccaṁ", "aniccā", "aniccan", "aniccato"]
  },

  "dukkha": {
    meaning: "suffering; unsatisfactoriness; misery",
    gram: "neuter noun / adjective",
    breakdown: [
      ["du(r)-", "Prefix: bad, difficult, painful."],
      ["kha", "Often explained as “axle-hole” or from kha, “empty/space” — a wheel turning on a bad axle: grating, unsatisfactory."]
    ],
    goenka: "The second characteristic of existence and the subject of the Four Noble Truths. Whatever is impermanent and clung to is dukkha. The entire teaching is summarized as: dukkha exists, it has a cause (craving), it can be eradicated, and there is a path for its eradication — the Noble Eightfold Path.",
    forms: ["dukkhaṁ", "dukkhassa", "dukkhā", "dukkhe"]
  },

  "anattā": {
    meaning: "non-self; not-self; without essence",
    gram: "adjective / noun (an + attā)",
    breakdown: [
      ["an-", "Negative prefix: “not.”"],
      ["attā", "Self, soul, ego (Sanskrit ātman)."]
    ],
    goenka: "The third characteristic of existence. As one observes the arising and passing of sensations, the experiential understanding develops that there is no permanent, unchanging “I” behind the flow of mind and matter — only an impersonal process of phenomena arising and passing away.",
    forms: ["anatta", "anattaṁ", "anattāti"]
  },

  "vedanā": {
    meaning: "sensation; feeling (bodily sensation)",
    gram: "feminine noun",
    breakdown: [
      ["√vid / ved", "To know, to experience."],
      ["-anā", "Action noun suffix: “the experiencing.”"]
    ],
    goenka: "Of central importance in this tradition. Vedanā is understood as physical sensation on the body — pleasant, unpleasant, or neutral. It is the crucial link where craving arises (vedanā paccayā taṇhā) and therefore the place where the chain of misery can be broken: by observing sensations with equanimity, one stops generating new saṅkhāras.",
    forms: ["vedanaṁ", "vedanāya", "vedanānaṁ", "vedanāsu"]
  },

  "saññā": {
    meaning: "perception; recognition",
    gram: "feminine noun",
    breakdown: [
      ["saṁ-", "Together, fully."],
      ["√ñā", "To know. Saññā: the part of the mind that recognizes and labels experience."]
    ],
    goenka: "The third aggregate. Saññā recognizes and evaluates whatever consciousness has noted, labelling it “good” or “bad” based on past conditioning. Because distorted perception colours every experience, the practice works to replace it with paññā — seeing things as they really are. In suttas such as AN 10.60 (Girimānanda), saññā also means a contemplation or perception deliberately cultivated, e.g. aniccasaññā.",
    forms: ["saññaṁ", "saññāya", "saññānaṁ", "saññā"]
  },

  "saṅkhāra": {
    meaning: "mental formation; volitional reaction; conditioned phenomenon",
    gram: "masculine noun",
    breakdown: [
      ["saṁ-", "Together."],
      ["√kar", "To do, to make. Literally “putting together,” a formation — both the act of forming (mental volition, reaction) and anything formed (all conditioned things)."]
    ],
    goenka: "A key term with two senses: (1) as the fourth aggregate and the second link of dependent origination, it is the mental reaction or volition — the habit of craving and aversion that conditions future suffering; (2) more broadly, all conditioned phenomena (sabbe saṅkhārā aniccā). In practice, old saṅkhāras rise to the surface as sensations; observed with equanimity, they pass away — the process of purification.",
    forms: ["saṅkhārā", "saṅkhāraṁ", "saṅkhārānaṁ", "saṅkhāresu", "saṅkhārehi"]
  },

  "viññāṇa": {
    meaning: "consciousness; cognition",
    gram: "neuter noun",
    breakdown: [
      ["vi-", "Distinct, apart."],
      ["√ñā", "To know. The part of the mind that simply cognizes — notes that something has occurred at a sense door."]
    ],
    goenka: "The first of the four mental aggregates and the third link of dependent origination. Consciousness arises at each of the six sense doors when a sense organ and its object come in contact; it merely registers, before perception evaluates and sensation arises.",
    forms: ["viññāṇaṁ", "viññāṇassa", "viññāṇan", "viññāṇe"]
  },

  "rūpa": {
    meaning: "material form; body; visible object",
    gram: "neuter noun",
    breakdown: [
      ["rūpa", "From √rūp, “to form.” Matter, the material aggregate; also a visible form as object of the eye."]
    ],
    goenka: "The first aggregate: the physical structure, composed of the four elements (earth, water, fire, air). In the pair nāma-rūpa, it is the material side of the mind-matter phenomenon that the meditator observes arising and passing away.",
    forms: ["rūpaṁ", "rūpā", "rūpe", "rūpassa", "rūpesu"]
  },

  "nāmarūpa": {
    meaning: "mind and matter; mentality-materiality",
    breakdown: [
      ["nāma", "“Name” — the mental aggregates of sensation, perception, volition, contact, attention."],
      ["rūpa", "“Form” — the material phenomenon."]
    ],
    goenka: "The fourth link of dependent origination, conditioned by consciousness. The whole field of personal experience is just this current of mind and matter, arising and passing — there is no “I” apart from it. Vipassana is the direct observation of this mind-matter phenomenon within the framework of the body.",
    forms: ["nāmarūpaṁ", "nāmarūpassa", "nāmarūpe"]
  },

  "taṇhā": {
    meaning: "craving; thirst",
    gram: "feminine noun",
    breakdown: [
      ["taṇhā", "Literally “thirst” (Sanskrit tṛṣṇā). Craving for sense pleasures (kāma-taṇhā), for existence (bhava-taṇhā), and for non-existence (vibhava-taṇhā)."]
    ],
    goenka: "The second Noble Truth — the origin of suffering. Craving arises in reaction to bodily sensation (vedanā paccayā taṇhā): pleasant sensations breed craving, unpleasant ones breed aversion. By learning to observe sensations objectively, without reacting, one cuts craving at its source.",
    forms: ["taṇhaṁ", "taṇhāya", "taṇhā"]
  },

  "avijjā": {
    meaning: "ignorance; not-knowing",
    gram: "feminine noun",
    breakdown: [
      ["a-", "Negative prefix."],
      ["vijjā", "Knowledge, wisdom (from √vid, “to know”)."]
    ],
    goenka: "The first link in the chain of dependent origination and the root of all suffering: ignorance of the Four Noble Truths, of the real nature of mind and matter. It is not mere lack of information but the deep unawareness out of which blind reaction (saṅkhāra) arises. It is dispelled not by intellectual study alone but by vijjā — direct experiential wisdom.",
    forms: ["avijjaṁ", "avijjāya", "avijjānīvaraṇa"]
  },

  "vijjā": {
    meaning: "knowledge; true wisdom",
    breakdown: [
      ["√vid", "To know."],
      ["-jā / -yā", "Feminine noun formation: knowing, science, wisdom."]
    ],
    goenka: "Experiential knowledge of reality as it is — the opposite of avijjā. Coupled with vimutti (liberation) as the culmination of the path: vijjāvimutti."
  },

  "vimutti": {
    meaning: "liberation; release; freedom",
    breakdown: [
      ["vi-", "Apart, away."],
      ["√muc", "To release, free. Vimutti: full release of the mind from craving, aversion and ignorance."]
    ],
    goenka: "Full liberation of the mind, the goal of the path. In AN 10.61–62 the sequence ends with vijjāvimutti — knowledge-and-liberation — nourished by the seven factors of enlightenment, which in turn are nourished by the four establishings of awareness.",
    forms: ["vimuttiṁ", "vimuttiyā", "vijjāvimutti", "vijjāvimuttiṁ", "vijjāvimuttī"]
  },

  "nibbāna": {
    meaning: "nibbāna; extinguishing; the unconditioned",
    gram: "neuter noun (Sanskrit nirvāṇa)",
    breakdown: [
      ["nis- / nib-", "Out, without."],
      ["√vā", "To blow. Literally the “blowing out” or extinguishing of the fires of craving, aversion and ignorance."]
    ],
    goenka: "The ultimate reality beyond mind and matter — unborn, unbecome, unmade, unconditioned (Ud 8.1–8.4). It is not annihilation but the extinguishing of suffering, to be experienced in this very life when all saṅkhāras are eradicated.",
    forms: ["nibbānaṁ", "nibbānassa", "nibbānāya", "parinibbāna", "parinibbānaṁ"]
  },

  "mettā": {
    meaning: "loving-kindness; goodwill",
    gram: "feminine noun",
    breakdown: [
      ["mitta", "Friend. Mettā is the quality of a true friend — unconditional goodwill toward all beings."]
    ],
    goenka: "Selfless love and goodwill for all beings, cultivated in mettā-bhāvanā at the close of Vipassana practice. Real mettā arises naturally from a purified mind: having removed the tensions of craving and aversion through equanimous observation, one shares the resulting peace with all beings.",
    forms: ["mettaṁ", "mettāya", "mettena", "mettacittaṁ"]
  },

  "paññā": {
    meaning: "wisdom; insight",
    gram: "feminine noun",
    breakdown: [
      ["pa-", "Forth, thoroughly."],
      ["√ñā", "To know. Thorough, direct knowing."]
    ],
    goenka: "The third division of the path (after sīla and samādhi). Three kinds are distinguished: wisdom heard from others (sutamayā), intellectual understanding (cintāmayā), and the wisdom that liberates — bhāvanāmayā paññā, arising from direct experience of impermanence at the level of sensations.",
    forms: ["paññāya", "paññaṁ", "paññavā"]
  },

  "sati": {
    meaning: "awareness; mindfulness",
    gram: "feminine noun",
    breakdown: [
      ["√sar", "To remember. Sati: presence of mind, awareness of the present moment."]
    ],
    goenka: "Awareness of the reality of the present moment, in this tradition always anchored to the framework of the body. Sammā-sati, right awareness, is awareness of what is actually occurring within — breath, sensations — not imagination or visualization.",
    forms: ["satiṁ", "satiyā", "satimā", "satova", "sato"]
  },

  "samādhi": {
    meaning: "concentration; collectedness of mind",
    breakdown: [
      ["saṁ-", "Together."],
      ["ā-√dhā", "To place. The placing of the mind evenly on one object: unification of mind."]
    ],
    goenka: "The second division of the path: mastery over the mind. Developed in this tradition through ānāpāna — observing the natural breath — as the foundation for paññā. Right samādhi is concentration with awareness of reality, free of craving and aversion.",
    forms: ["samādhiṁ", "samādhinā", "samādhismiṁ"]
  },

  "sīla": {
    meaning: "morality; virtue; ethical conduct",
    breakdown: [
      ["sīla", "Nature, habit, moral practice — abstaining from actions of body and speech that harm others."]
    ],
    goenka: "The first division of the Noble Eightfold Path and foundation of the practice: right speech, right action, right livelihood. Without sīla the mind is too agitated to develop samādhi, and without samādhi paññā cannot arise.",
    forms: ["sīlaṁ", "sīlena", "sīlesu", "sīlavā"]
  },

  "kamma": {
    meaning: "action; deed (volitional action)",
    gram: "neuter noun (Sanskrit karma)",
    breakdown: [
      ["√kar", "To do, to make. Kamma: action, specifically mental volition expressed in thought, speech, and deed."]
    ],
    goenka: "The real kamma is the mental volition (cetanā) behind every action. Each moment of craving or aversion is a saṅkhāra that bears fruit; the practice of equanimity stops the generation of new kamma and lets old kamma rise and pass away.",
    forms: ["kammaṁ", "kammena", "kammassa", "kammāni"]
  },

  "khandha": {
    meaning: "aggregate; heap; mass",
    breakdown: [
      ["khandha", "Heap, bundle, trunk. The five aggregates: rūpa, vedanā, saññā, saṅkhāra, viññāṇa."]
    ],
    goenka: "What is conventionally called “I” is just these five constantly-changing heaps of phenomena. The phrase pañcupādānakkhandhā — the five aggregates of clinging — itself is suffering (first Noble Truth); clinging to them perpetuates the illusion of self.",
    forms: ["khandhā", "khandhe", "khandhānaṁ", "khandhesu", "dukkhakkhandha", "dukkhakkhandhassa"]
  },

  "upādāna": {
    meaning: "clinging; attachment; grasping",
    breakdown: [
      ["upa-", "Towards, near."],
      ["ā-√dā", "To take. Literally “taking up” — grasping, like a fire seizing fuel."]
    ],
    goenka: "The ninth link of dependent origination: craving intensified into clinging — to sense pleasures, views, rites and rituals, and the doctrine of self. Clinging conditions becoming (bhava), and so the wheel of suffering keeps turning.",
    forms: ["upādānaṁ", "upādānassa", "upādānakkhandha", "upādānakkhandhesu", "pañcupādānakkhandhā"]
  },

  "paṭiccasamuppāda": {
    meaning: "dependent origination; conditioned arising",
    breakdown: [
      ["paṭicca", "Dependent on, conditioned by (gerund of paṭi + √i, “to go back to”)."],
      ["sam-uppāda", "Arising together (saṁ + ud + √pad). The arising of phenomena in dependence on conditions."]
    ],
    goenka: "The chain of cause and effect explained in SN 12: from ignorance arise reactions, consciousness, mind-and-matter, the six senses, contact, sensation, craving, clinging, becoming, birth, and the whole mass of suffering. The chain is broken at the link of vedanā: when sensation is observed with equanimity and understanding of anicca, craving does not arise.",
    forms: ["paṭiccasamuppādaṁ", "paṭiccasamuppādo"]
  },

  "phassa": {
    meaning: "contact; sense impression",
    breakdown: [
      ["√phus", "To touch. The meeting of sense organ, sense object, and consciousness."]
    ],
    goenka: "The sixth link of dependent origination. Wherever there is contact between a sense door and its object, sensation (vedanā) inevitably follows — which is why awareness must be established at the level of sensation.",
    forms: ["phasso", "phassaṁ", "phassena", "phassassa"]
  },

  "bhava": {
    meaning: "becoming; existence",
    breakdown: [
      ["√bhū", "To be, to become. The process of becoming — kamma-driven continuation of existence."]
    ],
    goenka: "The tenth link of dependent origination: clinging conditions the process of becoming, which leads to birth and thus to decay, death, and sorrow. The accumulated saṅkhāras are the fuel of becoming.",
    forms: ["bhavo", "bhavaṁ", "bhavassa", "bhavanirodhā"]
  },

  "jāti": {
    meaning: "birth",
    breakdown: [
      ["√jan", "To be born, produced. Birth, coming into existence, the appearance of the aggregates."]
    ],
    goenka: "The eleventh link of dependent origination. With birth comes the entire mass of suffering — aging, sickness, death, sorrow. The arahant, having eradicated all saṅkhāras, is freed from future birth.",
    forms: ["jātiyā", "jātipi"]
  },

  "jarāmaraṇa": {
    meaning: "aging and death; decay and death",
    breakdown: [
      ["jarā", "Aging, decay, old age."],
      ["maraṇa", "Death (from √mar, “to die”)."]
    ],
    goenka: "The final link of dependent origination, standing for the whole mass of suffering that follows inevitably from birth. Seeing this chain directly, the meditator understands how suffering arises and how it ceases.",
    forms: ["jarāmaraṇaṁ", "jarā", "maraṇaṁ", "maraṇena"]
  },

  "soka": {
    meaning: "sorrow; grief",
    breakdown: [["√suc", "To grieve, to burn. Inner mourning over loss or misfortune."]],
    goenka: "Listed with lamentation, pain, mental distress and despair as what follows birth in the formula of dependent origination — the experiential texture of dukkha.",
    forms: ["sokaparidevadukkhadomanassupāyāsā", "sokā"]
  },

  "parideva": {
    meaning: "lamentation; wailing",
    breakdown: [["pari-", "Around, all about."], ["√div / dev", "To lament. Crying out, audible expression of grief."]],
    forms: ["paridevā", "paridevaṁ"]
  },

  "domanassa": {
    meaning: "mental displeasure; distress; dejection",
    breakdown: [["du(r)-", "Bad."], ["manas", "Mind. Literally “bad-mindedness”: unpleasant mental feeling."]],
    goenka: "Mental suffering, as opposed to bodily pain (dukkha in the narrow sense). In practice both are met the same way: observed objectively as sensations, with the understanding of anicca.",
    forms: ["domanassaṁ", "domanassā"]
  },

  "upāyāsa": {
    meaning: "despair; tribulation",
    breakdown: [["upa + āyāsa", "Trouble, turmoil intensified — utter despair."]],
    forms: ["upāyāsā", "upāyāsāpi"]
  },

  "samudaya": {
    meaning: "arising; origin; origination",
    breakdown: [
      ["saṁ-", "Together."],
      ["udaya", "Rising up (ud + √i, “to go up”). The arising or origin of phenomena."]
    ],
    goenka: "The second Noble Truth is dukkha-samudaya, the arising of suffering. In meditation one directly observes samudaya — phenomena arising — and vaya, their passing away: the experience of udayabbaya.",
    forms: ["samudayo", "samudayaṁ", "samudayā"]
  },

  "nirodha": {
    meaning: "cessation; extinction",
    breakdown: [
      ["ni-", "Down, without."],
      ["√rudh", "To obstruct, hold back. Complete cessation, ending."]
    ],
    goenka: "The third Noble Truth: the complete cessation of suffering through the complete cessation of craving. Each link of dependent origination ceases when its condition ceases — avijjāya tveva asesavirāganirodhā saṅkhāranirodho...",
    forms: ["nirodho", "nirodhaṁ", "nirodhā", "nirodhāya"]
  },

  "magga": {
    meaning: "path; road",
    breakdown: [["magga", "Path, way. In the teaching: the Noble Eightfold Path (ariya aṭṭhaṅgika magga)."]],
    goenka: "The fourth Noble Truth — the path leading to the cessation of suffering: right understanding, thought, speech, action, livelihood, effort, awareness and concentration, grouped into sīla, samādhi, and paññā. Dhamma is a path to be walked, not a belief to be held.",
    forms: ["maggaṁ", "maggena", "maggo", "maggassa"]
  },

  "sacca": {
    meaning: "truth",
    breakdown: [["sat + ya", "“That which is” — reality, truth. The Four Noble Truths are cattāri ariyasaccāni."]],
    goenka: "Truth is to be realized, not merely believed. The Four Noble Truths become real for the meditator only when experienced directly within: suffering, its arising with craving, its cessation, and the path.",
    forms: ["saccaṁ", "saccāni", "ariyasacca", "ariyasaccāni"]
  },

  "mūla": {
    meaning: "root; origin; foundation",
    breakdown: [["mūla", "Root of a tree; figuratively, the root cause. The three unwholesome roots: lobha, dosa, moha."]],
    goenka: "The defilements must be eradicated at the root — the deep, blind reaction to sensation. Surface-level restraint alone leaves the roots intact; Vipassana works at the depth of the mind where the roots lie.",
    forms: ["mūlaṁ", "mūlā", "mūlena", "rukkhamūla", "rukkhamūlagato"]
  },

  "lobha": {
    meaning: "greed; craving",
    breakdown: [["√lubh", "To desire, covet. The first of the three unwholesome roots."]],
    goenka: "One of the three root defilements, manifesting as greed, craving, and attachment. Together with dosa and moha it drives all unwholesome action; the practice gradually weakens and eradicates it.",
    forms: ["lobhaṁ", "lobhena", "lobho"]
  },

  "dosa": {
    meaning: "anger; aversion; ill-will",
    gram: "masculine noun",
    breakdown: [
      ["√dus", "To be spoiled, corrupted. Dosa: the mind's burning against an unwanted object — aversion in all its forms."]
    ],
    goenka: "One of the three root defilements (kilesa), manifesting as aversion, anger, ill-will, or hatred. It represents the entire spectrum of aversion — from mild dislike to intense hatred — arising in response to unpleasant sensations. In Iti 2 the Buddha guarantees non-returning to one who fully abandons it.",
    forms: ["dosaṁ", "dosena", "dosassa", "doso"]
  },

  "moha": {
    meaning: "delusion; ignorance",
    breakdown: [["√muh", "To be confused, deluded. The third unwholesome root: not seeing reality as it is."]],
    goenka: "Delusion or ignorance, the third root defilement — equivalent in depth to avijjā. It is dispelled by direct, repeated observation of the true nature of mind and matter.",
    forms: ["mohaṁ", "mohena", "moho"]
  },

  "rāga": {
    meaning: "passion; lust; attachment",
    breakdown: [["√raj / rañj", "To be coloured, excited. The mind “coloured” by desire."]],
    goenka: "Craving in its aspect of passion and sensual attachment. Virāga — dispassion, the fading away of rāga — is a stage on the way to nibbāna.",
    forms: ["rāgaṁ", "rāgena", "rāgo", "sarāgaṁ"]
  },

  "virāga": {
    meaning: "dispassion; fading away (of craving)",
    breakdown: [
      ["vi-", "Away, without."],
      ["rāga", "Passion, colouring. The fading away of passion."]
    ],
    goenka: "Dispassion: the natural fading of craving as insight matures. The perception of dispassion (virāgasaññā) is one of the ten contemplations taught to Girimānanda (AN 10.60).",
    forms: ["virāgaṁ", "virāgāya", "virāgasaññā", "virāganirodhā", "asesavirāganirodhā"]
  },

  "pahāna": {
    meaning: "abandoning; giving up; eradication",
    breakdown: [
      ["pa-", "Forth, away."],
      ["√hā", "To leave, abandon. The act of letting go, abandoning."]
    ],
    goenka: "Abandoning the defilements — not by suppression, nor by indulgence, but by equanimous observation, which deprives them of fuel so they arise and pass away. Pahānasaññā, the perception of abandoning, is one of the ten perceptions of AN 10.60.",
    forms: ["pahānaṁ", "pahānāya", "pahānasaññā"]
  },

  "pajahati": {
    meaning: "abandons; gives up",
    gram: "verb, 3rd person singular present (pa + √hā)",
    breakdown: [
      ["pa-", "Forth, away."],
      ["√hā", "To leave, abandon."]
    ],
    goenka: "The Buddha's instruction in Iti 1–6: “abandon one thing” — greed, anger, delusion... Abandoning here is total eradication through insight, with the guarantee (pāṭibhoga) of non-returning.",
    forms: ["pajahatha", "pajahanti", "pajaheyyātha", "pahāya", "pajahaṁ", "pahātabba"]
  },

  "anāgāmitā": {
    meaning: "the state of non-returning",
    breakdown: [
      ["an-", "Negative prefix: not."],
      ["āgāmi", "One who comes back (ā + √gam, “to go/come”)."],
      ["-tā", "Abstract suffix: “the state of.”"]
    ],
    goenka: "The third of the four stages of liberation. The non-returner (anāgāmī) has eradicated aversion and sensual craving — the five lower fetters — and will not be reborn in the sensual world.",
    forms: ["anāgāmitāya", "anāgāmī", "anāgāmino"]
  },

  "pāṭibhoga": {
    meaning: "guarantor; surety",
    breakdown: [
      ["paṭi-", "Towards, in return."],
      ["√bhuj", "To enjoy, possess. One who stands as security for another — a guarantor."]
    ],
    goenka: "Used by the Buddha in Iti 1–6 to show his complete confidence in the law of nature: “I am your guarantor” — abandon anger fully and the stage of non-returning certainly follows.",
    forms: ["pāṭibhogo"]
  },

  "vipassanā": {
    meaning: "insight; seeing things as they really are",
    breakdown: [
      ["vi-", "Special, distinct; in a special way."],
      ["√pas / pass", "To see. Seeing in a special way: penetrating insight into the three characteristics."]
    ],
    goenka: "The technique of self-observation taught by the Buddha and revived in this tradition: systematic, equanimous observation of bodily sensations, by which one experiences directly the arising and passing away of mind and matter, and so purifies the mind at its depths.",
    forms: ["vipassanaṁ", "vipassanāya"]
  },

  "vipassin": {
    meaning: "one with insight; clear-seeing",
    breakdown: [
      ["vi + √pas", "To see distinctly."],
      ["-in", "Possessive suffix: “one who has.”"]
    ],
    goenka: "One who sees things as they really are — a Vipassana practitioner, observing the nature of impermanence at the level of bodily sensations. (Vipassī is also the name of a former Buddha, SN 12.4, whose awakening came through investigating dependent origination.)",
    forms: ["vipassino", "vipassī", "vipassissa"]
  },

  "ānāpānassati": {
    meaning: "awareness of respiration; mindfulness of breathing",
    breakdown: [
      ["āna", "In-breath."],
      ["apāna", "Out-breath."],
      ["sati", "Awareness, mindfulness."]
    ],
    goenka: "Awareness of the natural breath, as it comes in, as it goes out — the technique taught for developing samādhi as the foundation for Vipassana. The breath is used as it naturally is, without regulation, since it is the bridge between the conscious and unconscious mind.",
    forms: ["ānāpānassatiṁ", "ānāpānassatiyā"]
  },

  "satipaṭṭhāna": {
    meaning: "establishing of awareness; foundation of mindfulness",
    breakdown: [
      ["sati", "Awareness."],
      ["paṭṭhāna / upaṭṭhāna", "Setting up, establishing close by."]
    ],
    goenka: "The four ways awareness is established: observing body, sensations, mind, and mental contents. In this tradition vedanānupassanā — observation of sensations — is the common thread, since every experience manifests as sensation on the body.",
    forms: ["satipaṭṭhānā", "satipaṭṭhāne", "cattāro satipaṭṭhānā"]
  },

  "bojjhaṅga": {
    meaning: "factor of enlightenment",
    breakdown: [
      ["bodhi", "Awakening, enlightenment (√budh, “to awaken”)."],
      ["aṅga", "Limb, factor."]
    ],
    goenka: "The seven factors of enlightenment: awareness, investigation of Dhamma, effort, rapture, tranquillity, concentration, and equanimity. They mature together as practice deepens, nourished (AN 10.61) by the four satipaṭṭhānas.",
    forms: ["bojjhaṅgā", "bojjhaṅge", "satta bojjhaṅgā", "sambojjhaṅga"]
  },

  "nīvaraṇa": {
    meaning: "hindrance; obstacle",
    breakdown: [
      ["ni + √var", "To obstruct, cover. That which covers the mind and blocks wisdom."]
    ],
    goenka: "The five hindrances — sensual desire, ill-will, sloth, restlessness, and doubt — the five enemies that block progress in meditation. They are fed by unwise attention and starved by sustained awareness.",
    forms: ["nīvaraṇā", "nīvaraṇe", "pañca nīvaraṇā", "avijjānīvaraṇānaṁ"]
  },

  "upekkhā": {
    meaning: "equanimity",
    breakdown: [
      ["upa-", "Near, towards."],
      ["√īkṣ / ikkh", "To look. Looking on evenly — neither grasping nor pushing away."]
    ],
    goenka: "The balanced mind: observing every sensation, pleasant or unpleasant, without craving or aversion, with the understanding of its impermanence. Equanimity at the level of sensation is what stops the generation of new saṅkhāras — the very heart of the practice.",
    forms: ["upekkhaṁ", "upekkhāya", "upekkhako"]
  },

  "arahant": {
    meaning: "arahant; liberated one; worthy one",
    breakdown: [
      ["√arah", "To be worthy. One worthy of homage; traditionally also “one who has destroyed the enemies (ari + hata)” — the defilements."]
    ],
    goenka: "A fully liberated being — the fourth and final stage — who has eradicated all defilements, all saṅkhāras, and will not be reborn. The Itivuttaka opens each discourse: vuttañhetaṁ bhagavatā, vuttamarahatā — “said by the Blessed One, said by the Arahant.”",
    forms: ["arahaṁ", "arahato", "arahatā", "vuttamarahatā", "arahanto"]
  },

  "bhagavant": {
    meaning: "the Blessed One; the Fortunate One",
    breakdown: [
      ["bhaga", "Fortune, blessing."],
      ["-vant", "Possessive suffix: “endowed with.” The one endowed with all blessings — an epithet of the Buddha."]
    ],
    goenka: "The most common epithet of the Buddha in the suttas. In chanting and recitation: namo tassa bhagavato arahato sammāsambuddhassa — homage to the Blessed One, the Worthy One, the fully self-awakened One.",
    forms: ["bhagavā", "bhagavatā", "bhagavato", "bhagavantaṁ", "bhagavati"]
  },

  "buddha": {
    meaning: "the Awakened One",
    breakdown: [
      ["√budh", "To awaken, to know. One who has awakened to the truth by his own efforts."]
    ],
    goenka: "Not a name but a state: one fully awakened to reality, who rediscovered the lost path of Vipassana and taught it out of compassion. Taking refuge in the Buddha means taking refuge in the quality of enlightenment, not in a person.",
    forms: ["buddhaṁ", "buddhassa", "buddho", "buddhānaṁ", "sambuddha", "sammāsambuddhassa"]
  },

  "bhikkhu": {
    meaning: "monk; meditator",
    breakdown: [
      ["√bhikkh", "To beg. One who lives on alms; by extension, anyone devoted to the practice."]
    ],
    goenka: "Literally a monk living on alms, but in the commentarial sense used in this tradition, whoever practises the teaching earnestly — observing reality within — is at that moment a bhikkhu. The vocative bhikkhave, “monks!”, opens countless discourses.",
    forms: ["bhikkhave", "bhikkhuno", "bhikkhū", "bhikkhunā", "bhikkhussa", "bhikkhūnaṁ"]
  },

  "saṅgha": {
    meaning: "the community (of noble ones); assembly",
    breakdown: [
      ["saṁ + √han", "To strike/put together: a group, community. The community of those established in the Dhamma."]
    ],
    goenka: "The third refuge: in its deepest sense, all those who have walked the path and reached one of the stages of liberation. Taking refuge in Saṅgha is taking refuge in the quality of purity, as inspiration for one's own practice.",
    forms: ["saṅghaṁ", "saṅghassa", "saṅghe"]
  },

  "tathāgata": {
    meaning: "the Tathāgata; “thus-gone” (epithet of the Buddha)",
    breakdown: [
      ["tathā", "Thus, in that way."],
      ["gata / āgata", "Gone / come. “One thus gone” or “thus come” — gone the way of all Buddhas, arrived at the truth."]
    ],
    forms: ["tathāgato", "tathāgatassa", "tathāgataṁ", "tathāgatena"]
  },

  "sutta": {
    meaning: "discourse; thread",
    breakdown: [
      ["√siv / sutta", "Literally “thread” (Sanskrit sūtra) — the thread on which the teachings are strung; a discourse of the Buddha."]
    ],
    forms: ["suttaṁ", "suttassa", "suttāni"]
  },

  "kāya": {
    meaning: "body",
    breakdown: [["kāya", "Body; also “collection, group.” The physical body as field of observation."]],
    goenka: "The first establishing of awareness is kāyānupassanā, observation of the body. Truth must be experienced within the framework of the body — the entire field of the practice lies between the top of the head and the tips of the toes.",
    forms: ["kāyaṁ", "kāyena", "kāyassa", "kāye", "kāyā", "kāyasmiṁ", "imameva kāyaṁ"]
  },

  "citta": {
    meaning: "mind; consciousness",
    breakdown: [["√cit", "To think, perceive. The mind, especially in its aspect of knowing and intending."]],
    goenka: "The third establishing of awareness is cittānupassanā — observing the mind as it is: with craving or without, with aversion or without. Mind and matter are observed together, since every mental state manifests with a sensation on the body.",
    forms: ["cittaṁ", "cittena", "cittassa", "citte", "sacittañca"]
  },

  "mano": {
    meaning: "mind (as sense faculty)",
    breakdown: [["manas", "Mind — the sixth sense door, which cognizes mental objects (dhammā)."]],
    goenka: "The mind-door: just as the eye sees forms, the mind “sees” thoughts and mental contents. Mano is counted as the sixth internal sense sphere (āyatana).",
    forms: ["manaṁ", "manasā", "manassa", "manasmiṁ", "mano"]
  },

  "āyatana": {
    meaning: "sense sphere; sense base",
    breakdown: [
      ["ā + √yat / yam", "To stretch, extend. The spheres where experience arises: six internal (eye, ear, nose, tongue, body, mind) and six external (their objects)."]
    ],
    goenka: "The fifth link of dependent origination (saḷāyatana, the sixfold sense sphere). All experience of the world arises at these twelve bases; awareness stationed at the sense doors observes contact and sensation without reacting.",
    forms: ["āyatanaṁ", "āyatanāni", "āyatanesu", "saḷāyatana", "saḷāyatanaṁ", "ajjhattikabāhiresu"]
  },

  "cakkhu": {
    meaning: "eye; vision",
    breakdown: [["cakkhu", "The eye, the faculty of seeing; figuratively, the eye of wisdom (paññācakkhu)."]],
    forms: ["cakkhuṁ", "cakkhunā", "cakkhussa", "cakkhusmiṁ"]
  },

  "sota": {
    meaning: "ear; hearing (also: stream)",
    breakdown: [["sota", "The ear (from √śru, “to hear”); a separate word sota (√sru) means “stream.”"]],
    forms: ["sotaṁ", "sotena", "sotassa"]
  },

  "ghāna": {
    meaning: "nose; smell faculty",
    forms: ["ghānaṁ", "ghānena"]
  },

  "jivhā": {
    meaning: "tongue; taste faculty",
    forms: ["jivhāya", "jivhaṁ"]
  },

  "loka": {
    meaning: "world",
    breakdown: [["√luj / lok", "Traditionally linked to lujjati, “it crumbles”: the world as that which is constantly breaking up."]],
    goenka: "Both the outer world and the inner world of mind and matter. “In this fathom-long body, the world, its arising, its cessation, and the way to its cessation are to be found” — the world is to be understood within.",
    forms: ["lokaṁ", "lokassa", "loke", "lokasmiṁ", "sabbaloke", "sadevake"]
  },

  "satta": {
    meaning: "being; living being (also: seven)",
    breakdown: [["satta", "From sajjati, “attached”: a being is one attached to existence. As a numeral, satta means “seven.”"]],
    forms: ["sattā", "sattānaṁ", "sattesu", "sattehi"]
  },

  "duggati": {
    meaning: "state of misery; bad destination",
    breakdown: [
      ["du(r)-", "Bad."],
      ["gati", "Going, destination (√gam). A woeful state of rebirth."]
    ],
    goenka: "A lower realm of suffering where beings are reborn due to unwholesome actions driven by defilements like anger. Its opposite is sugati, a happy destination.",
    forms: ["duggatiṁ", "duggatiyā"]
  },

  "sugati": {
    meaning: "happy destination; good rebirth",
    breakdown: [["su-", "Good, well."], ["gati", "Going, destination."]],
    forms: ["sugatiṁ", "suggatiṁ"]
  },

  "gati": {
    meaning: "destination; course (of rebirth)",
    breakdown: [["√gam", "To go. Where one's kamma leads."]],
    forms: ["gatiṁ", "gatiyā"]
  },

  "asubha": {
    meaning: "unattractive; impure; not beautiful",
    breakdown: [
      ["a-", "Negative prefix."],
      ["subha", "Beautiful, pleasant, pure."]
    ],
    goenka: "The contemplation of the body's thirty-one/thirty-two parts (asubhasaññā, AN 10.60) counters the deep habit of attachment to the body by examining it part by part, as it actually is.",
    forms: ["asubhaṁ", "asubhasaññā", "asubhānupassī"]
  },

  "ādīnava": {
    meaning: "danger; drawback; disadvantage",
    breakdown: [["ādīnava", "The inherent peril or unsatisfactoriness in conditioned things, especially the body subject to disease and decay."]],
    goenka: "The perception of danger (ādīnavasaññā, AN 10.60): reflecting that this body is the source of much affliction — subject to hundreds of diseases — loosens identification with it.",
    forms: ["ādīnavaṁ", "ādīnavasaññā", "ādīnavo"]
  },

  "samatha": {
    meaning: "tranquillity; calm",
    breakdown: [["√sam", "To be calm, quiet. The stilling of the mind; concentration practice."]],
    goenka: "Calm abiding, developed through one-pointed concentration. Samatha calms the surface of the mind; Vipassana penetrates to its depths to eradicate the defilements. Both serve the path: samatha gives the mind strength, vipassanā gives it purity.",
    forms: ["samathaṁ", "samathena"]
  },

  "jhāna": {
    meaning: "meditative absorption",
    breakdown: [["√jhe / jhāyati", "To meditate, to burn. The deep absorptions attained through concentration."]],
    forms: ["jhānaṁ", "jhānāni", "paṭhamaṁ jhānaṁ"]
  },

  "saraṇa": {
    meaning: "refuge; shelter",
    breakdown: [["√sar", "To go, to protect. That to which one goes for protection."]],
    goenka: "The three refuges — Buddha, Dhamma, Saṅgha — understood not as persons or sects but as qualities: enlightenment, truth, purity. The real refuge is the Dhamma within.",
    forms: ["saraṇaṁ", "saraṇāni"]
  },

  "anussati": {
    meaning: "recollection; repeated awareness",
    breakdown: [["anu-", "Following, repeatedly."], ["sati", "Awareness."]],
    forms: ["anussatiṁ"]
  },

  "yoniso": {
    meaning: "wisely; thoroughly; with proper attention",
    breakdown: [
      ["yoni", "Womb, origin, source."],
      ["-so", "Adverbial suffix: “by way of.” Literally “from the source” — going to the root of things."]
    ],
    goenka: "Yoniso manasikāra, wise attention, is attention directed to reality — to impermanence, to cause and effect — rather than to the surface appearance of things. Unwise attention (ayoniso manasikāra) feeds the hindrances; wise attention starves them.",
    forms: ["yoniso manasikāra", "yonisomanasikāra"]
  },

  "manasikāra": {
    meaning: "attention; bringing to mind",
    breakdown: [
      ["manasi", "In the mind (locative of manas)."],
      ["kāra", "Making, doing. “Making in the mind”: directing attention."]
    ],
    forms: ["manasikāraṁ", "manasikārā", "ayonisomanasikāra", "ayoniso"]
  },

  "saddhā": {
    meaning: "confidence; faith (based on experience)",
    breakdown: [["saṁ + √dhā", "To place together: “to place one's heart upon.” Confidence, trust."]],
    goenka: "Not blind faith but confidence born of understanding and experience — one of the five faculties (indriya). Devotion without practice is empty; saddhā gives inspiration to walk the path oneself.",
    forms: ["saddhaṁ", "saddhāya", "assaddhiya", "assaddhiyaṁ"]
  },

  "viriya": {
    meaning: "effort; energy",
    breakdown: [["vīra", "Hero. Vīriya: heroic energy, persevering effort."]],
    forms: ["viriyaṁ", "vīriya", "vīriyaṁ"]
  },

  "indriya": {
    meaning: "faculty; sense faculty",
    breakdown: [["indra + -iya", "Belonging to Indra (the ruler): a controlling faculty. The five spiritual faculties or the six sense faculties."]],
    goenka: "Indriyasaṁvara, guarding the sense doors, means maintaining awareness and equanimity when objects contact the senses, so that sensation does not turn into craving or aversion.",
    forms: ["indriyāni", "indriyesu", "indriyasaṁvara", "indriyasaṁvaro", "indriyāsaṁvara", "indriyāsaṁvaro"]
  },

  "sampajañña": {
    meaning: "clear comprehension; constant thorough understanding of impermanence",
    breakdown: [
      ["saṁ-", "Fully."],
      ["pa-", "Rightly."],
      ["√ñā", "To know. Knowing fully and rightly, moment to moment."]
    ],
    goenka: "In this tradition, sampajañña is the constant thorough understanding of impermanence — awareness of the arising and passing of sensations in every posture and activity. Sati without sampajañña is incomplete; it is the wisdom aspect of awareness.",
    forms: ["sampajāno", "satisampajañña", "asatāsampajañña", "satova sampajāno"]
  },

  "duccarita": {
    meaning: "bad conduct; misconduct",
    breakdown: [
      ["du(r)-", "Bad."],
      ["carita", "Conduct, behaviour (√car, “to move, act”). Misconduct of body, speech, and mind."]
    ],
    forms: ["duccaritaṁ", "duccaritā", "tīṇi duccaritāni"]
  },

  "sucarita": {
    meaning: "good conduct",
    breakdown: [["su-", "Good."], ["carita", "Conduct."]],
    forms: ["sucaritaṁ", "sucaritā", "tīṇi sucaritāni"]
  },

  "āhāra": {
    meaning: "nutriment; food; sustaining condition",
    breakdown: [["ā + √har", "To bring towards: what is brought in — food, and figuratively whatever feeds and sustains a phenomenon."]],
    goenka: "AN 10.61–62 teach that even ignorance and craving have their nutriment: each unwholesome state is fed by another, down to association with bad people; and the chain of nourishment can be reversed, feeding liberation instead.",
    forms: ["āhāraṁ", "āhāro", "sāhāraṁ", "sāhāro", "anāhāraṁ", "anāhāro"]
  },

  "sappurisa": {
    meaning: "good person; person of integrity",
    breakdown: [
      ["sat / sap-", "True, good."],
      ["purisa", "Person, man."]
    ],
    goenka: "Association with good people (sappurisasaṁseva) is the first nutriment in the sequence leading to liberation (AN 10.61): from it comes hearing the true Dhamma, confidence, wise attention, awareness, sense restraint, good conduct, the satipaṭṭhānas, the enlightenment factors, and knowledge-and-liberation.",
    forms: ["sappurisasaṁseva", "sappurisasaṁsevo", "asappurisasaṁseva", "asappurisasaṁsevo"]
  },

  "kilesa": {
    meaning: "defilement; impurity of mind",
    breakdown: [["√kilis", "To soil, torment. The impurities that defile the mind: craving, aversion, delusion and their derivatives."]],
    goenka: "The mental defilements that cause all suffering. The practice is a process of purification: as old kilesas surface and are observed with equanimity, they lose their strength and pass away.",
    forms: ["kilesā", "kilesānaṁ"]
  },

  "anusaya": {
    meaning: "latent tendency; underlying defilement",
    breakdown: [["anu + √sī", "To lie along: defilements lying dormant at the depth of the mind, ready to erupt."]],
    goenka: "The deepest level of defilement — the sleeping volcanoes of craving and aversion conditioned by every past reaction. Vipassana reaches this depth because anusayas are stirred by, and linked to, bodily sensations.",
    forms: ["anusayā", "anusayaṁ"]
  },

  "māra": {
    meaning: "Māra; death; the forces opposing liberation",
    breakdown: [["√mar", "To die. The personification of death and of all forces within the mind that oppose liberation."]],
    forms: ["māraṁ", "mārassa", "mārena", "maccu", "maccuno"]
  },

  "brahmā": {
    meaning: "Brahmā; supreme deity of the form realms",
    forms: ["brahmuno", "brahmaṁ", "sabrahmake", "brahmacariya", "brahmacariyaṁ"]
  },

  "deva": {
    meaning: "deva; deity; celestial being",
    breakdown: [["√div", "To shine, play. The shining ones — beings of celestial realms; also “sky” and “rain.”"]],
    forms: ["devā", "devānaṁ", "devesu", "devehi", "sadevake", "sadevakassa"]
  },

  "samaṇa": {
    meaning: "recluse; wandering ascetic",
    breakdown: [["√sam", "To strive / to be calm. One who strives in the holy life; a renunciate."]],
    forms: ["samaṇā", "samaṇānaṁ", "samaṇehi", "sassamaṇabrāhmaṇiyā"]
  },

  "brāhmaṇa": {
    meaning: "brahmin; (in the Buddha's usage) one of pure life",
    breakdown: [["brāhmaṇa", "A member of the priestly caste; redefined by the Buddha as one purified of evil, whoever their birth."]],
    forms: ["brāhmaṇā", "brāhmaṇassa", "brāhmaṇānaṁ", "brāhmaṇo"]
  },

  "attha": {
    meaning: "meaning; benefit; goal; matter",
    breakdown: [["attha", "Meaning, purpose, welfare, goal — context decides. Etamatthaṁ: “this matter/meaning.”"]],
    forms: ["atthaṁ", "atthāya", "atthassa", "etamatthaṁ", "atthakusalena"]
  },

  "vuccati": {
    meaning: "is called; is said",
    gram: "verb, passive of √vac (to speak)",
    forms: ["vuccanti", "vuccatānanda"]
  },

  "vutta": {
    meaning: "said; spoken",
    gram: "past participle of √vac (to speak)",
    breakdown: [["√vac", "To speak. Vutta: “what was said.” Opens every Itivuttaka discourse: vuttañhetaṁ bhagavatā — “this was said by the Blessed One.”"]],
    forms: ["vuttaṁ", "vuttañhetaṁ", "vuttamarahatā", "vutto"]
  },

  "suta": {
    meaning: "heard; learned",
    gram: "past participle of √su (to hear)",
    breakdown: [["√su", "To hear. Suta: “what was heard.” Evaṁ me sutaṁ — “thus have I heard” — opens the suttas, the words of Ānanda at the First Council."]],
    forms: ["sutaṁ", "sutanti", "sutavā", "sutvā"]
  },

  "viharati": {
    meaning: "dwells; lives; abides",
    gram: "verb, 3rd person singular (vi + √har)",
    breakdown: [["vi + √har", "To carry on, spend time: to dwell, to abide — used both for residing in a place and abiding in a state of mind."]],
    forms: ["viharanti", "viharataṁ", "vihāsi", "viharāmi", "vihārī", "viharissanti"]
  },

  "hoti": {
    meaning: "is; becomes",
    gram: "verb, 3rd person singular of √bhū (to be)",
    forms: ["honti", "ahosi", "bhavissati", "assa", "siyā", "hotu", "hessati"]
  },

  "upasaṅkamati": {
    meaning: "approaches; goes up to",
    gram: "verb (upa + saṁ + √kam)",
    forms: ["upasaṅkami", "upasaṅkamitvā", "tenupasaṅkami", "tenupasaṅkamatu", "upasaṅkamatu"]
  },

  "nisīdati": {
    meaning: "sits down",
    gram: "verb (ni + √sad)",
    forms: ["nisīdi", "nisinno", "nisinnaṁ"]
  },

  "abhivādeti": {
    meaning: "pays respects; salutes respectfully",
    forms: ["abhivādetvā"]
  },

  "ekamanta": {
    meaning: "to one side",
    breakdown: [["eka", "One."], ["anta", "Side, end. Ekamantaṁ: at a proper, respectful distance to one side."]],
    forms: ["ekamantaṁ"]
  },

  "āyasmant": {
    meaning: "venerable (title for monks)",
    breakdown: [["āyu + -mant", "Endowed with (long) life: “venerable,” a term of respect."]],
    forms: ["āyasmā", "āyasmato", "āyasmantaṁ"]
  },

  "bhante": {
    meaning: "venerable sir; bhante (respectful address)",
    gram: "vocative",
    goenka: "The respectful address used by laypeople and junior monks to elders. Retained untranslated in many of these texts."
  },

  "ābādhika": {
    meaning: "sick; afflicted with illness",
    breakdown: [["ābādha", "Affliction, disease (ā + √bādh, “to oppress”)."], ["-ika", "Adjectival suffix: afflicted by illness."]],
    forms: ["ābādhiko", "ābādho", "ābādhā"]
  },

  "gilāna": {
    meaning: "ill; sick person",
    forms: ["gilāno", "bāḷhagilāno", "gilānassa"]
  },

  "dukkhita": {
    meaning: "suffering; in pain",
    breakdown: [["dukkha + -ita", "Afflicted by dukkha: pained, miserable."]],
    forms: ["dukkhito", "dukkhitā"]
  },

  "anukampā": {
    meaning: "compassion; sympathy",
    breakdown: [["anu + √kamp", "To tremble along with: to be moved by another's suffering — compassion."]],
    forms: ["anukampaṁ", "anukampāya", "anukampaṁ upādāya"]
  },

  "arañña": {
    meaning: "forest; wilderness",
    breakdown: [["arañña", "Remote forest — a favoured place for meditation, away from the bustle of the village."]],
    forms: ["araññagato", "araññe", "araññaṁ"]
  },

  "suññāgāra": {
    meaning: "empty room; empty dwelling",
    breakdown: [
      ["suñña", "Empty (Sanskrit śūnya)."],
      ["agāra", "House, room. A solitary place suitable for meditation."]
    ],
    forms: ["suññāgāragato", "suññāgāraṁ"]
  },

  "paṭisañcikkhati": {
    meaning: "reflects; considers thoroughly",
    gram: "verb (paṭi + saṁ + √cikkh)",
    forms: ["paṭisañcikkhati"]
  },

  "anupassin": {
    meaning: "observing; contemplating",
    breakdown: [
      ["anu-", "Along, repeatedly."],
      ["√pas", "To see."],
      ["-in", "Possessive suffix: “one who keeps observing.”"]
    ],
    goenka: "The -ānupassī of the satipaṭṭhāna formula: dwelling observing body in body, sensations in sensations — direct, sustained, bare observation of reality as it occurs.",
    forms: ["anupassī", "aniccānupassī", "anattānupassī", "asubhānupassī", "kāyānupassī", "vayānupassī"]
  },

  "sabba": {
    meaning: "all; the whole",
    breakdown: [["sabba", "All, every, the entire. Sabbe saṅkhārā aniccā: all conditioned things are impermanent."]],
    goenka: "In Iti 7, “the All” (sabba) means the entire field of experience — the six senses and their objects. One who fully understands the All through direct knowledge (abhiññā) is freed from it.",
    forms: ["sabbaṁ", "sabbe", "sabbesu", "sabbena", "sabbattha", "sabbaso", "sabbattatāya", "sabbaloke"]
  },

  "pariññā": {
    meaning: "full understanding; complete comprehension",
    breakdown: [
      ["pari-", "Completely, all around."],
      ["√ñā", "To know. Knowing completely — through experience, not just intellect."]
    ],
    goenka: "Full understanding develops in stages: knowing the object (ñāta-pariññā), investigating its impermanence (tīraṇa-pariññā), and abandoning attachment to it (pahāna-pariññā). Iti 7: without fully understanding the All, one cannot destroy suffering.",
    forms: ["pariññaṁ", "pariññāya", "aparijānaṁ", "parijānaṁ", "sabbaparinna", "apariññāya"]
  },

  "abhijānāti": {
    meaning: "knows directly; knows by experience",
    gram: "verb (abhi + √ñā)",
    forms: ["abhijānaṁ", "anabhijānaṁ", "abhiññāya", "abhiññā"]
  },

  "saṁyojana": {
    meaning: "fetter; bond",
    breakdown: [
      ["saṁ + √yuj", "To yoke together. The ten fetters that bind beings to the round of rebirth."]
    ],
    goenka: "The fetters binding beings to suffering — from belief in self and doubt, through sensual craving and aversion, to restlessness and ignorance. Each stage of liberation cuts certain fetters; craving (Iti 15) is called the foremost fetter.",
    forms: ["saṁyojanaṁ", "saṁyojanā", "saṁyojanena", "tanhāsaṁyojana", "taṇhāsaṁyojanena"]
  },

  "punabbhava": {
    meaning: "renewed existence; rebirth",
    breakdown: [
      ["puna(r)", "Again."],
      ["bhava", "Becoming, existence. Becoming again: rebirth."]
    ],
    forms: ["punabbhavaṁ", "punabbhavo"]
  },

  "majjhima": {
    meaning: "middle; medium",
    breakdown: [["majjha + -ima", "Middle-most. The majjhimā paṭipadā is the Middle Path between indulgence and self-torture."]],
    forms: ["majjhimā", "majjhimaṁ"]
  },

  "paṭipadā": {
    meaning: "path of practice; way",
    breakdown: [
      ["paṭi + √pad", "To step along: the course one treads, the way of practice."]
    ],
    goenka: "The way of practice — as in dukkhanirodhagāminī paṭipadā, the path leading to the cessation of suffering (SN 12.3). Dhamma is paṭipatti, actual practice, before it is theory.",
    forms: ["paṭipadaṁ", "paṭipadāya", "micchāpaṭipadā", "sammāpaṭipadā", "micchāpaṭipadaṁ", "sammāpaṭipadaṁ"]
  },

  "veneyya": {
    meaning: "(to be) trained, guided",
    forms: []
  },

  "asecanaka": {
    meaning: "delightful in itself; needing nothing added",
    forms: ["asecanakaṁ"]
  },

  /* ──────────────── frequent function words ──────────────── */

  "ca": { meaning: "and; also", gram: "enclitic conjunction — never first in its clause" },
  "vā": { meaning: "or; either", gram: "enclitic disjunction" },
  "pi": { meaning: "also, too, even", gram: "enclitic particle (api)", forms: ["api"] },
  "hi": { meaning: "for, indeed, certainly", gram: "enclitic emphatic/causal particle" },
  "kho": { meaning: "indeed; (mild emphasis, marks topic)", gram: "enclitic particle, very common in prose" },
  "pana": { meaning: "but, however; and now", gram: "enclitic particle of contrast or transition" },
  "eva": { meaning: "just, only, exactly (emphasis)", gram: "emphatic particle", forms: ["yeva", "ñeva", "va"] },
  "evaṁ": { meaning: "thus, so, in this way", gram: "adverb", forms: ["evameva", "evametaṁ"] },
  "iti": {
    meaning: "thus; end-quote marker",
    gram: "quotative particle",
    breakdown: [["iti / ti", "Marks the end of quoted speech or thought — like a closing quotation mark. Often contracted to 'ti and fused to the preceding word (e.g. anāgāmitāyā'ti)."]],
    forms: ["ti", "icceva", "itipi"]
  },
  "atha": { meaning: "then; and then", gram: "adverb; atha kho — “then indeed”, narrative connector", forms: ["atha kho"] },
  "yena": { meaning: "by which; where (yena... tena: where X was, there...)", gram: "instrumental of ya (relative pronoun), used in approach formulas" },
  "tena": { meaning: "by that; therefore; there", gram: "instrumental of ta (that)", forms: ["tenupasaṅkami"] },
  "taṁ": { meaning: "that; him/her/it", gram: "accusative singular of ta (that)", forms: ["tassa", "tasmā", "tasmiṁ", "te", "tesaṁ", "tāya", "tena kho pana samayena"] },
  "ayaṁ": { meaning: "this", gram: "demonstrative pronoun (nom. sg.)", forms: ["imaṁ", "imassa", "imasmiṁ", "iminā", "ime", "imesaṁ", "imesu", "asmiṁ", "ayampi", "imameva", "imāya"] },
  "idaṁ": { meaning: "this (neuter)", gram: "demonstrative pronoun", forms: ["idha", "idampi"] },
  "etaṁ": { meaning: "this, that (near the listener)", gram: "demonstrative pronoun", forms: ["esā", "eso", "etassa", "etesaṁ", "etad", "etadavoca"] },
  "katama": { meaning: "which? what? (of several)", gram: "interrogative adjective", forms: ["katamaṁ", "katamā", "katame", "katamo", "katamañca", "katamā ca"] },
  "kiṁ": { meaning: "what? why?", gram: "interrogative pronoun", forms: ["kena", "kassa", "kasmā", "kissa"] },
  "me": { meaning: "by me, my, to me", gram: "enclitic 1st person pronoun (gen./instr./dat.)" },
  "vo": { meaning: "you, your, to you (plural)", gram: "enclitic 2nd person plural pronoun" },
  "ahaṁ": { meaning: "I", gram: "1st person pronoun", forms: ["mayā", "mayhaṁ", "mama", "amhākaṁ", "mayaṁ"] },
  "tvaṁ": { meaning: "you (singular)", gram: "2nd person pronoun", forms: ["tayā", "tava", "tuyhaṁ", "tumhe", "tumhākaṁ"] },
  "so": { meaning: "he; that one", gram: "nominative singular masculine of ta", forms: ["sā"] },
  "na": { meaning: "not", gram: "negative particle", forms: ["no", "natthi", "nāhaṁ", "nayidaṁ"] },
  "mā": { meaning: "do not (prohibitive)", gram: "prohibitive particle with aorist/imperative" },
  "saṁ": { meaning: "(prefix) together, fully", gram: "prefix" },
  "eka": { meaning: "one; a certain; alone", gram: "numeral/adjective", forms: ["ekaṁ", "ekena", "ekassa", "ekā", "ekadhammaṁ", "ekadhamma", "ekaṁ samayaṁ"] },
  "dve": { meaning: "two", gram: "numeral", forms: ["dvinnaṁ", "duve"] },
  "tayo": { meaning: "three", gram: "numeral", forms: ["tīṇi", "tiṇṇaṁ", "tisso"] },
  "cattāro": { meaning: "four", gram: "numeral", forms: ["cattāri", "catunnaṁ", "catasso"] },
  "pañca": { meaning: "five", gram: "numeral", forms: ["pañcasu", "pañcannaṁ", "pañcahi"] },
  "cha": { meaning: "six", gram: "numeral", forms: ["chasu", "channaṁ", "chahi", "saḷ"] },
  "dasa": { meaning: "ten", gram: "numeral", forms: ["dasahi", "dasannaṁ", "dasasu"] },
  "samaya": { meaning: "time; occasion", gram: "masculine noun; ekaṁ samayaṁ — “at one time”, the opening of most suttas", forms: ["samayaṁ", "samayena", "samaye"] },
  "sādhu": { meaning: "good; well; please (expression of approval or request)", gram: "adjective/adverb/interjection" },
  "ṭhāna": {
    meaning: "place; basis; possibility; condition",
    breakdown: [["√ṭhā", "To stand. A standing place — literal place, or figurative ground/possibility: ṭhānaṁ vijjati, “there is the possibility.”"]],
    forms: ["ṭhānaṁ", "ṭhānaso", "ṭhānā", "ṭhiti"]
  },
  "vijjati": { meaning: "is found; exists", gram: "verb, passive of √vid", forms: ["vijjanti", "saṁvijjati"] },
  "gacchati": { meaning: "goes", gram: "verb, 3rd person singular of √gam", forms: ["gacchanti", "gato", "gatā", "gacchaṁ", "agamāsi", "gantvā", "āgacchati", "punāyanti"] },
  "karoti": { meaning: "does; makes", gram: "verb of √kar", forms: ["karonti", "katvā", "kataṁ", "kareyya", "kayirā", "akāsi", "karaṇīya", "karaṇīyaṁ", "kattabbaṁ"] },
  "passati": { meaning: "sees", gram: "verb of √pas", forms: ["passanti", "passaṁ", "disvā", "diṭṭha", "diṭṭhaṁ", "dakkhati", "passatha"] },
  "jānāti": { meaning: "knows", gram: "verb of √ñā", forms: ["jānanti", "ñatvā", "jānato", "aññāya", "sammadaññāya", "pajānāti", "ñāṇa", "ñāṇaṁ"] },
  "bhāsati": { meaning: "speaks; says", gram: "verb of √bhās", forms: ["bhāsitaṁ", "bhāseyyāsi", "abhāsittha", "bhāsi", "bhāsita"] },
  "avoca": { meaning: "said; spoke", gram: "aorist of √vac", forms: ["etadavoca", "avocuṁ"] },
  "sutvā": { meaning: "having heard", gram: "gerund of √su (to hear)" },
  "labhati": { meaning: "obtains; gets", gram: "verb of √labh", forms: ["labbhati", "laddhā", "labhetha", "paṭilabhati"] },
  "uppajjati": { meaning: "arises; is born", gram: "verb (ud + √pad)", forms: ["uppajjanti", "uppannā", "uppanno", "uppādā", "uppajjittha", "udapādi"] },
  "nibbattati": { meaning: "arises; comes into being", forms: ["nibbatti", "nibbattanti"] },
  "pavattati": { meaning: "proceeds; goes on", forms: ["pavattanti", "pavatta"] },
  "bhavati": { meaning: "becomes; is", gram: "verb of √bhū (= hoti)", forms: ["bhavanti", "bhūta", "bhūtā", "bhavissanti", "sambhavanti", "sambhavo", "sambhavaṁ"] },
  "atthi": { meaning: "there is; exists", gram: "verb of √as", forms: ["santi", "sant", "asati"] },
  "yathā": { meaning: "as; just as", gram: "relative adverb", forms: ["yathābhūtaṁ", "seyyathāpi", "yathayidaṁ", "yathā taṁ"] },
  "tathā": { meaning: "so; in that way", gram: "correlative adverb" },
  "kudācanaṁ": { meaning: "ever; at any time (na kudācanaṁ: never)", gram: "adverb", forms: ["kudācana", "kudācanan"] },
  "puna": { meaning: "again", gram: "adverb", forms: ["puna caparaṁ", "punappunaṁ", "punāyanti"] },
  "paṭhama": { meaning: "first", gram: "ordinal numeral", forms: ["paṭhamaṁ", "paṭhamā", "paṭhamo"] },
  "dutiya": { meaning: "second", gram: "ordinal numeral; closes Iti 2 as a section marker", forms: ["dutiyaṁ", "dutiyā", "dutiyo"] },
  "tatiya": { meaning: "third", gram: "ordinal numeral", forms: ["tatiyaṁ", "tatiyā"] },
  "vagga": { meaning: "chapter; group", forms: ["vaggo", "vaggaṁ"] },
  "uddāna": { meaning: "summary verse (mnemonic list closing a chapter)", forms: ["uddānaṁ"] },

  /* ──────────────── proper nouns & places ──────────────── */

  "ānanda": {
    meaning: "Ānanda (the Buddha's attendant)",
    goenka: "The Buddha's cousin and devoted attendant for twenty-five years, famed for his perfect memory — the reciter of the suttas at the First Council (“thus have I heard”). In AN 10.60 he carries the teaching of the ten perceptions to the sick monk Girimānanda.",
    forms: ["ānando", "ānandassa", "cānanda", "idhānanda", "vuccatānanda"]
  },
  "girimānanda": {
    meaning: "Girimānanda (a monk, gravely ill in AN 10.60)",
    forms: ["girimānando", "girimānandassa", "girimānandaṁ", "girīti"]
  },
  "sāvatthī": {
    meaning: "Sāvatthī (capital of Kosala, where many suttas were taught)",
    forms: ["sāvatthiyaṁ", "sāvatthiṁ"]
  },
  "jetavana": {
    meaning: "Jeta's Grove (monastery park near Sāvatthī)",
    breakdown: [["jeta", "Prince Jeta, former owner of the grove."], ["vana", "Grove, wood."]],
    forms: ["jetavane"]
  },
  "anāthapiṇḍika": {
    meaning: "Anāthapiṇḍika (“feeder of the destitute”, chief lay donor)",
    breakdown: [["anātha", "Without protector; destitute."], ["piṇḍika", "Giver of alms-food. The merchant Sudatta, who bought Jeta's Grove and donated it to the Saṅgha."]],
    forms: ["anāthapiṇḍikassa"]
  },
  "ārāma": {
    meaning: "monastery; park; pleasure-grove",
    forms: ["ārāme", "ārāmaṁ"]
  },
  "sāriputta": {
    meaning: "Sāriputta (chief disciple, foremost in wisdom)",
    forms: ["sāriputto", "sāriputtassa", "sāriputtaṁ"]
  },
  "cunda": {
    meaning: "Cunda the smith (donor of the Buddha's last meal, Ud 8.5)",
    forms: ["cundo", "cundassa", "cundaṁ"]
  },
  "dabba": {
    meaning: "Dabba Mallaputta (arahant monk of Ud 8.9)",
    forms: ["dabbo", "dabbassa", "dabbaṁ"]
  },
  "vesālī": {
    meaning: "Vesālī (capital of the Vajji confederacy)",
    forms: ["vesāliyaṁ"]
  },
  "rājagaha": {
    meaning: "Rājagaha (capital of Magadha)",
    forms: ["rājagahe"]
  },
  "uruvelā": {
    meaning: "Uruvelā (place of the Buddha's awakening, by the Nerañjarā river)",
    forms: ["uruvelāyaṁ"]
  },
  "nerañjarā": {
    meaning: "the Nerañjarā river",
    forms: ["nerañjarāya"]
  },
  "kosambī": {
    meaning: "Kosambī (capital of Vaṁsa)",
    forms: ["kosambiyaṁ"]
  }
};
