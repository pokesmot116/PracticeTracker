// =============================================================================
// PRACTICE CURRICULUM
// Kept separate from index.html on purpose — add, edit, or remove drills here
// without touching any app logic. Each entry needs: cat, name, desc, and an
// optional bpm (use null when a suggested tempo doesn't make sense for it).
// The category tabs in the app are generated automatically from whatever
// `cat` values appear below, in the order they first show up — so a new
// category is just a new `cat` string, nothing else to wire up.
// =============================================================================
export const DRILLS = [
  // ---- Warm-Up ------------------------------------------------------------
  { cat:"Warm-Up", name:"Spider exercise", desc:"Chromatic 1-2-3-4 finger pattern climbing across all six strings with strict alternate picking. Classic hands-and-ears wake-up.", bpm:70 },
  { cat:"Warm-Up", name:"Pentatonic groups of 3", desc:"Play the pentatonic scale in ascending or descending groups of three, stepping back one note between each group.", bpm:75 },
  { cat:"Warm-Up", name:"Pentatonic groups of 4", desc:"Same idea in groups of four, stepping back two notes between groups — a common building block for faster lines.", bpm:75 },
  { cat:"Warm-Up", name:"Pentatonic enclosures", desc:"Approach a scale tone from a half-step above and below before landing on it, ascending and descending through the shape.", bpm:null },
  { cat:"Warm-Up", name:"Every-other-note pentatonic", desc:"Play the 1st & 3rd notes, then 2nd & 4th, skipping through the scale mostly in 4ths. Roll one finger between each pair without letting them ring together.", bpm:null },

  // ---- CAGED System ---------------------------------------------------------
  { cat:"CAGED System", name:"CAGED shape mapping", desc:"Play a single root note through all five CAGED chord shapes up the neck — C, A, G, E, D in order — to see where it lives everywhere.", bpm:null },
  { cat:"CAGED System", name:"EDA shape simplification", desc:"Reduce the five CAGED shapes to the three that actually get used: E, D/C, and A/G. Play a major chord through all three and feel the shared tones at each seam.", bpm:null },
  { cat:"CAGED System", name:"CAGED arpeggio connector", desc:"Arpeggiate one CAGED shape, slide into the next shape up the neck, and arpeggiate that one — no gaps, no repeated shapes.", bpm:70 },
  { cat:"CAGED System", name:"CAGED double-stops", desc:"Break an EDA chord shape into 2-note pairs — first on adjacent strings, then on strings with one skipped — without fretting the whole shape underneath.", bpm:null },
  { cat:"CAGED System", name:"CAGED → pentatonic overlay", desc:"Play a practical CAGED chord shape, then improvise using the pentatonic box that overlays it — the direct bridge between the two systems.", bpm:null },
  { cat:"CAGED System", name:"One key, five CAGED shapes", desc:"Pick a key and move through all five CAGED positions ascending the neck, playing the chord then a short lick from that position.", bpm:74 },
  { cat:"CAGED System", name:"Minor EDA shapes", desc:"Same simplification for minor chords: E minor, D minor/C minor, and A minor shapes only. Move between all three for one minor chord.", bpm:null },
  { cat:"CAGED System", name:"Minor CAGED → pentatonic overlay", desc:"Same pairing as the major version, but minor: play a minor EDA shape, then solo with the minor pentatonic box that lines up with it.", bpm:null },

  // ---- Pentatonic & Scales --------------------------------------------------
  { cat:"Pentatonic & Scales", name:"Landmark shapes 1 & 4", desc:"Memorize where Shape 1 (root on the low E string) and Shape 4 (root on the A string) sit for a key — these two landmarks let you jump anywhere on the neck.", bpm:82 },
  { cat:"Pentatonic & Scales", name:"Diagonal extension — Shape 1", desc:"From Shape 1's lowest note on the low E string, move back two frets and slide into the extension box. Connects Shape 1 up and down the neck.", bpm:76 },
  { cat:"Pentatonic & Scales", name:"Diagonal extension — Shape 4", desc:"Same idea starting from Shape 4: move back two frets from its lowest note and slide into the extension, crossing three strings before the shift.", bpm:76 },
  { cat:"Pentatonic & Scales", name:"Five shapes, one key", desc:"Cycle through all five pentatonic shapes on a single string set without stopping.", bpm:80 },
  { cat:"Pentatonic & Scales", name:"Major/minor swap", desc:"Same shape, same root — toggle between major and minor pentatonic and listen for the difference.", bpm:78 },
  { cat:"Pentatonic & Scales", name:"Blues note add", desc:"Add the one extra blue note into Shape 1 or Shape 4 — use it as a passing tone for a bluesier flavor, in both the major and minor pentatonic.", bpm:null },

  // ---- Improvisation ----------------------------------------------------
  { cat:"Improvisation", name:"Solo over I–IV–V", desc:"Loop a I–IV–V backing track on the Spark Go and solo, prioritizing phrasing over speed.", bpm:null },
  { cat:"Improvisation", name:"Call and response", desc:"Play a two-bar lick, then answer it — treat it like a conversation, not a scale run.", bpm:null },
  { cat:"Improvisation", name:"One-string solo", desc:"Improvise using only the high E string. Forces melodic thinking over shape memory.", bpm:null },
  { cat:"Improvisation", name:"Target the chord tones", desc:"Improvise through a progression, landing deliberately on the 3rd or 7th at each chord change.", bpm:null },
  { cat:"Improvisation", name:"Common short phrases", desc:"Drill the classic 3- and 4-note pentatonic hammer-on/pull-off and note-skipping licks until they come out on autopilot.", bpm:null },
  { cat:"Improvisation", name:"String bending targets", desc:"Bend the ring-finger note on the G string (Shape 1) and on the B string (Shape 4) — the two most reliable, most-used bending notes in the pentatonic box.", bpm:null },
  { cat:"Improvisation", name:"Looper solo", desc:"Record a chord progression as a loop, then solo over it using the Shape 1/4 landmarks and their diagonal extensions — a full-neck soloing test.", bpm:null },

  // ---- Repertoire -----------------------------------------------------------
  { cat:"Repertoire", name:"Autumn Leaves — head", desc:"Play the melody clean and in time, then try comping through the changes once through.", bpm:null },
  { cat:"Repertoire", name:"Autumn Leaves — ii–V–I", desc:"Isolate the ii–V–I movements in the tune and get comfortable moving between them.", bpm:null },
  { cat:"Repertoire", name:"Mayer-style groove", desc:"Palm-muted rhythm pocket, then layer in a clean lead line over the top.", bpm:null },
  { cat:"Repertoire", name:"Neo-soul voicings", desc:"Work through 9th/11th/13th chord voicings with smooth voice leading between changes.", bpm:null },

  // ---- Neo-Soul (Soejima) ---------------------------------------------------
  { cat:"Neo-Soul (Soejima)", name:"Chord-to-line blur", desc:"Play a chord, then peel off one note at a time into a short single-note line that resolves back into the next chord — chords and lines blurring into one continuous idea instead of two separate moves.", bpm:null },
  { cat:"Neo-Soul (Soejima)", name:"Arpeggio-over-pentatonic overlay", desc:"Over a jazz-standard progression (Autumn Leaves works well), alternate between comping the full chord and outlining it with a quick arpeggio lick before the next change — the bridge from scale-thinking to chord-tone phrasing.", bpm:null },
  { cat:"Neo-Soul (Soejima)", name:"Behind-the-beat phrasing", desc:"Loop a slow, laid-back backing track and deliberately let every phrase land a hair behind the click instead of right on it. Compare a pass played dead on the beat to one played behind it.", bpm:70 },
  { cat:"Neo-Soul (Soejima)", name:"Space and restraint", desc:"Play a two-bar phrase, then rest a full two bars before answering it — no filling the gap. The discipline to leave space is the exercise, not the notes.", bpm:null },
  { cat:"Neo-Soul (Soejima)", name:"Vocal bend and fade", desc:"Pick one note. Bend up, add vibrato, release, and let it decay — shape it like a sung note swelling and fading, with nothing picked after the initial attack.", bpm:null },
  { cat:"Neo-Soul (Soejima)", name:"Tone-roll comparison", desc:"Roll the tone knob back to around 5-6 on the P-90s and play a slow melodic passage, then repeat it with the tone wide open. Listen for how much the rolled-back tone smooths out the attack.", bpm:null },
  { cat:"Neo-Soul (Soejima)", name:"Compressed vs. dry dynamics", desc:"Play a chord passage with the compressor engaged (light ratio), then switch it off and play the same passage. Notice the difference in touch dynamics and sustain, and adjust picking-hand attack to compensate for each.", bpm:null },
  { cat:"Neo-Soul (Soejima)", name:"Extended voicing voice-leading", desc:"Re-voice a jazz standard's changes using maj7/m7/dominant 9 shapes instead of basic triads, keeping the voice leading as smooth as possible between chords.", bpm:null },
  { cat:"Neo-Soul (Soejima)", name:"Transcribe a Soejima lick", desc:"Pick 4-8 bars from one of his covers (\"Feel Like Makin' Love\" is a good start) and work it out entirely by ear — phrasing and dynamics included, not just the notes.", bpm:null },

  // ---- Technique --------------------------------------------------------
  { cat:"Technique", name:"Alternate picking ladder", desc:"Metronome on, start slow and clean, add 4 bpm each clean pass through.", bpm:70 },
  { cat:"Technique", name:"String skipping", desc:"Clean jumps across non-adjacent strings without brushing the ones in between.", bpm:72 },
  { cat:"Technique", name:"Legato run", desc:"Hammer-ons and pull-offs through a full pentatonic shape — no picking hand at all.", bpm:75 },
  { cat:"Technique", name:"Strat setup check", desc:"Quick weekly check-in: action, intonation, string freshness on the Squier.", bpm:null },

  // ---- Ear Training -------------------------------------------------------
  { cat:"Ear training", name:"Sing then play", desc:"Sing a short phrase from memory, then find it on the fretboard by ear.", bpm:null },
  { cat:"Ear training", name:"Transcribe 4 bars", desc:"Pick four bars from a favorite track and work it out entirely by ear.", bpm:null },
];
