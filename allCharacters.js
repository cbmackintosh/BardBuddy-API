const allCharacters = [
  {
      charid: "1apparition-mac",
      charname: "First Apparition",
      abbrev: "First Apparition",
      works: "macbeth",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "1citizen",
      charname: "First Citizen",
      abbrev: "First Citizen",
      works: "romeojuliet",
      descrip: "",
      speechcount: 3
  },
  {
      charid: "1conspirator",
      charname: "First Conspirator",
      abbrev: "First Conspirator",
      works: "coriolanus",
      descrip: "",
      speechcount: 3
  },
  {
      charid: "1gentleman-oth",
      charname: "First Gentleman",
      abbrev: "First Gentleman",
      works: "othello",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "1goth",
      charname: "First Goth",
      abbrev: "First Goth",
      works: "titus",
      descrip: "",
      speechcount: 4
  },
  {
      charid: "1murderer",
      charname: "First Murderer",
      abbrev: "First Murderer",
      works: "macbeth",
      descrip: "",
      speechcount: 21
  },
  {
      charid: "1musician-oth",
      charname: "First Musician",
      abbrev: "First Musician",
      works: "othello",
      descrip: "",
      speechcount: 5
  },
  {
      charid: "1musician-rj",
      charname: "First Musician",
      abbrev: "First Musician",
      works: "romeojuliet",
      descrip: "",
      speechcount: 10
  },
  {
      charid: "1officer-oth",
      charname: "First Officer",
      abbrev: "First Officer",
      works: "othello",
      descrip: "",
      speechcount: 3
  },
  {
      charid: "1player-ham",
      charname: "First Player",
      abbrev: "1Play",
      works: "hamlet",
      descrip: "",
      speechcount: 8
  },
  {
      charid: "1senator-cor",
      charname: "First Senator",
      abbrev: "First Senator",
      works: "coriolanus",
      descrip: "",
      speechcount: 33
  },
  {
      charid: "1senator-oth",
      charname: "First Senator",
      abbrev: "First Senator",
      works: "othello",
      descrip: "A senator of Venice",
      speechcount: 8
  },
  {
      charid: "1servant-rj",
      charname: "First Servant",
      abbrev: "First Servant",
      works: "romeojuliet",
      descrip: "",
      speechcount: 4
  },
  {
      charid: "1servingman",
      charname: "First Serving-Man",
      abbrev: "First Serving-Man",
      works: "henry6p1",
      descrip: "",
      speechcount: 5
  },
  {
      charid: "1soldier",
      charname: "First Soldier",
      abbrev: "First Soldier",
      works: "coriolanus",
      descrip: "",
      speechcount: 8
  },
  {
      charid: "1watchman-ma",
      charname: "First Watchman",
      abbrev: "First Watchman",
      works: "muchado",
      descrip: "",
      speechcount: 6
  },
  {
      charid: "1watchman-rj",
      charname: "First Watchman",
      abbrev: "First Watchman",
      works: "romeojuliet",
      descrip: "",
      speechcount: 6
  },
  {
      charid: "1witch-mac",
      charname: "First Witch",
      abbrev: "First Witch",
      works: "macbeth",
      descrip: "",
      speechcount: 23
  },
  {
      charid: "2apparition-mac",
      charname: "Second Apparition",
      abbrev: "Second Apparition",
      works: "macbeth",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "2conspirator",
      charname: "Second Conspirator",
      abbrev: "Second Conspirator",
      works: "coriolanus",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "2gentleman-oth",
      charname: "Second Gentleman",
      abbrev: "Second Gentleman",
      works: "othello",
      descrip: "",
      speechcount: 5
  },
  {
      charid: "2goth",
      charname: "Second Goth",
      abbrev: "Second Goth",
      works: "titus",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "2murderer",
      charname: "Second Murderer",
      abbrev: "Second Murderer",
      works: "macbeth",
      descrip: "",
      speechcount: 6
  },
  {
      charid: "2musician-rj",
      charname: "Second Musician",
      abbrev: "Second Musician",
      works: "romeojuliet",
      descrip: "",
      speechcount: 3
  },
  {
      charid: "2patrician",
      charname: "Second Patrician",
      abbrev: "Second Patrician",
      works: "coriolanus",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "2senator-cor",
      charname: "Second Senator",
      abbrev: "Second Senator",
      works: "coriolanus",
      descrip: "",
      speechcount: 10
  },
  {
      charid: "2senator-oth",
      charname: "Second Senator",
      abbrev: "Second Senator",
      works: "othello",
      descrip: "A senator of Venice",
      speechcount: 1
  },
  {
      charid: "2servant-rj",
      charname: "Second Servant",
      abbrev: "Second Servant",
      works: "romeojuliet",
      descrip: "",
      speechcount: 6
  },
  {
      charid: "2servingman",
      charname: "Second Serving-Man",
      abbrev: "Second Serving-Man",
      works: "henry6p1",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "2soldier",
      charname: "Second Soldier",
      abbrev: "Second Soldier",
      works: "coriolanus",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "2watchman-ma",
      charname: "Second Watchman",
      abbrev: "Second Watchman",
      works: "muchado",
      descrip: "",
      speechcount: 5
  },
  {
      charid: "2watchman-rj",
      charname: "Second Watchman",
      abbrev: "Second Watchman",
      works: "romeojuliet",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "2witch-mac",
      charname: "Second Witch",
      abbrev: "Second Witch",
      works: "macbeth",
      descrip: "",
      speechcount: 15
  },
  {
      charid: "3apparition-mac",
      charname: "Third Apparition",
      abbrev: "Third Apparition",
      works: "macbeth",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "3conspirator",
      charname: "Third Conspirator",
      abbrev: "Third Conspirator",
      works: "coriolanus",
      descrip: "",
      speechcount: 3
  },
  {
      charid: "3gentleman-oth",
      charname: "Third Gentleman",
      abbrev: "Third Gentleman",
      works: "othello",
      descrip: "",
      speechcount: 4
  },
  {
      charid: "3goth",
      charname: "Third Goth",
      abbrev: "Third Goth",
      works: "titus",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "3murderer",
      charname: "Third Murderer",
      abbrev: "Third Murderer",
      works: "macbeth",
      descrip: "",
      speechcount: 6
  },
  {
      charid: "3musician-rj",
      charname: "Third Musician",
      abbrev: "Third Musician",
      works: "romeojuliet",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "3servingman",
      charname: "Third Serving-Man",
      abbrev: "Third Serving-Man",
      works: "henry6p1",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "3watchman-rj",
      charname: "Third Watchman",
      abbrev: "Third Watchman",
      works: "romeojuliet",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "3witch-mac",
      charname: "Third Witch",
      abbrev: "Third Witch",
      works: "macbeth",
      descrip: "",
      speechcount: 13
  },
  {
      charid: "4gentleman-oth",
      charname: "Fourth Gentleman",
      abbrev: "Fourth Gentleman",
      works: "othello",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "Aaron",
      charname: "Aaron",
      abbrev: "AARON",
      works: "titus",
      descrip: "a Moor, beloved by Tamora",
      speechcount: 57
  },
  {
      charid: "Abbot",
      charname: "Abbot",
      abbrev: "Abbot",
      works: "richard2",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "Abergavenny",
      charname: "Lord Abergavenny",
      abbrev: "ABERGAVENNY",
      works: "henry8",
      descrip: "",
      speechcount: 5
  },
  {
      charid: "Abhorson",
      charname: "Abhorson",
      abbrev: "ABHORSON",
      works: "measure",
      descrip: "an executioner",
      speechcount: 13
  },
  {
      charid: "abraham-rj",
      charname: "Abraham",
      abbrev: "ABRAHAM",
      works: "romeojuliet",
      descrip: "Servant to Montague",
      speechcount: 5
  },
  {
      charid: "Achilles",
      charname: "Achilles",
      abbrev: "ACHILLES",
      works: "troilus",
      descrip: "a Greek prince",
      speechcount: 74
  },
  {
      charid: "adam-ayli",
      charname: "Adam",
      abbrev: "ADAM",
      works: "asyoulikeit",
      descrip: "servant to Oliver",
      speechcount: 10
  },
  {
      charid: "ADRIANA",
      charname: "Adriana",
      abbrev: "ADRIANA",
      works: "comedyerrors",
      descrip: "wife to Antipholus of Ephesus",
      speechcount: 79
  },
  {
      charid: "Adrian-tem",
      charname: "Adrian",
      abbrev: "ADRIAN",
      works: "tempest",
      descrip: "a lord",
      speechcount: 9
  },
  {
      charid: "aedile",
      charname: "Aedile",
      abbrev: "Aedile",
      works: "coriolanus",
      descrip: "",
      speechcount: 10
  },
  {
      charid: "AEGEON",
      charname: "Aegeon",
      abbrev: "AEGEON",
      works: "comedyerrors",
      descrip: "a merchant of Syracuse",
      speechcount: 17
  },
  {
      charid: "AEMILIA",
      charname: "Aemilia",
      abbrev: "AEMILIA",
      works: "comedyerrors",
      descrip: "wife to Aegeon, an abbess at Ephesus",
      speechcount: 16
  },
  {
      charid: "Aemilius",
      charname: "Aemilius",
      abbrev: "AEMILIUS",
      works: "titus",
      descrip: "a noble Roman",
      speechcount: 5
  },
  {
      charid: "Aeneas",
      charname: "Aeneas",
      abbrev: "AENEAS",
      works: "troilus",
      descrip: "one of the Trojan commanders",
      speechcount: 44
  },
  {
      charid: "Agamemnon",
      charname: "Agamemnon",
      abbrev: "AGAMEMNON",
      works: "troilus",
      descrip: "the Greek general",
      speechcount: 52
  },
  {
      charid: "Agrippa",
      charname: "Agrippa",
      abbrev: "AGRIPPA",
      works: "antonycleo",
      descrip: "friend to Caesar",
      speechcount: 28
  },
  {
      charid: "aguecheek",
      charname: "Sir Andrew Aguecheek",
      abbrev: "SIR ANDREW",
      works: "12night",
      descrip: "",
      speechcount: 88
  },
  {
      charid: "Ajax",
      charname: "Ajax",
      abbrev: "AJAX",
      works: "troilus",
      descrip: "a Greek prince",
      speechcount: 55
  },
  {
      charid: "Alarbus",
      charname: "Alarbus",
      abbrev: "ALARBUS",
      works: "titus",
      descrip: "son to Tamora",
      speechcount: 0
  },
  {
      charid: "Alcibiades",
      charname: "Alcibiades",
      abbrev: "ALCIBIADES",
      works: "timonathens",
      descrip: "an Athenian captain",
      speechcount: 39
  },
  {
      charid: "Alexander",
      charname: "Alexander",
      abbrev: "ALEXANDER",
      works: "troilus",
      descrip: "servant to Cressida",
      speechcount: 8
  },
  {
      charid: "AlexanderIden",
      charname: "Alexander Iden",
      abbrev: "IDEN",
      works: "henry6p2",
      descrip: "a Kentish gentleman",
      speechcount: 9
  },
  {
      charid: "Alexas",
      charname: "Alexas",
      abbrev: "ALEXAS",
      works: "antonycleo",
      descrip: "attendant on Cleopatra",
      speechcount: 15
  },
  {
      charid: "Alice",
      charname: "Alice",
      abbrev: "ALICE",
      works: "henry5",
      descrip: "a lady attending on Princess Katherine",
      speechcount: 22
  },
  {
      charid: "All-ac",
      charname: "All",
      abbrev: "All",
      works: "antonycleo",
      descrip: "",
      speechcount: 9
  },
  {
      charid: "all-aw",
      charname: "All",
      abbrev: "All",
      works: "allswell",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "allcitizens",
      charname: "All Citizens",
      abbrev: "All Citizens",
      works: "coriolanus",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "AllConspirators",
      charname: "All Conspirators",
      abbrev: "All Conspirators",
      works: "coriolanus",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "all-cor",
      charname: "All",
      abbrev: "All",
      works: "coriolanus",
      descrip: "",
      speechcount: 16
  },
  {
      charid: "All-cym",
      charname: "All",
      abbrev: "All",
      works: "cymbeline",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "AllGoths",
      charname: "All the Goths",
      abbrev: "All the Goths",
      works: "titus",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "All-h5",
      charname: "All",
      abbrev: "All",
      works: "henry5",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "All-h61",
      charname: "All",
      abbrev: "All",
      works: "henry6p1",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "All-h62",
      charname: "All",
      abbrev: "All",
      works: "henry6p2",
      descrip: "",
      speechcount: 12
  },
  {
      charid: "All-h63",
      charname: "All",
      abbrev: "All",
      works: "henry6p3",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "All-h8",
      charname: "All",
      abbrev: "All",
      works: "henry8",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "all-ham",
      charname: "All",
      abbrev: "All",
      works: "hamlet",
      descrip: "",
      speechcount: 6
  },
  {
      charid: "All-jc",
      charname: "All",
      abbrev: "All",
      works: "juliuscaesar",
      descrip: "",
      speechcount: 9
  },
  {
      charid: "all-kr2",
      charname: "All",
      abbrev: "All",
      works: "richard2",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "AllLadies",
      charname: "All Ladies",
      abbrev: "All Ladies",
      works: "timonathens",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "AllLords",
      charname: "All Lords",
      abbrev: "All Lords",
      works: "coriolanus",
      descrip: "",
      speechcount: 3
  },
  {
      charid: "AllLords-tim",
      charname: "All Lords",
      abbrev: "All Lords",
      works: "timonathens",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "all-mac",
      charname: "All",
      abbrev: "ALL",
      works: "macbeth",
      descrip: "",
      speechcount: 13
  },
  {
      charid: "All-mnd",
      charname: "All",
      abbrev: "All",
      works: "midsummer",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "all-mv",
      charname: "All",
      abbrev: "All",
      works: "merchantvenice",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "all-mww",
      charname: "All",
      abbrev: "All",
      works: "merrywives",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "all-oth",
      charname: "All",
      abbrev: "All",
      works: "othello",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "AllPeople",
      charname: "All The People",
      abbrev: "All The People",
      works: "coriolanus",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "All-per",
      charname: "All",
      abbrev: "All",
      works: "pericles",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "All-r3",
      charname: "All",
      abbrev: "All",
      works: "richard3",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "AllServants-tim",
      charname: "All Servants",
      abbrev: "All Servants",
      works: "timonathens",
      descrip: "",
      speechcount: 7
  },
  {
      charid: "All-ta",
      charname: "All",
      abbrev: "All",
      works: "titus",
      descrip: "",
      speechcount: 3
  },
  {
      charid: "All-tc",
      charname: "All",
      abbrev: "All",
      works: "troilus",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "All-tim",
      charname: "All",
      abbrev: "All",
      works: "timonathens",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "all-ts",
      charname: "All",
      abbrev: "ALL",
      works: "tamingshrew",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "Alonso",
      charname: "Alonso",
      abbrev: "ALONSO",
      works: "tempest",
      descrip: "king of Naples",
      speechcount: 40
  },
  {
      charid: "ambassador",
      charname: "Ambassador",
      abbrev: "Ambassador",
      works: "hamlet",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "amiens",
      charname: "Amiens",
      abbrev: "AMIENS",
      works: "asyoulikeit",
      descrip: "lord attending on the banished Duke",
      speechcount: 10
  },
  {
      charid: "Andromache",
      charname: "Andromache",
      abbrev: "ANDROMACHE",
      works: "troilus",
      descrip: "wife to Hector",
      speechcount: 6
  },
  {
      charid: "ANGELO",
      charname: "Angelo",
      abbrev: "ANGELO",
      works: "comedyerrors",
      descrip: "a goldsmith",
      speechcount: 31
  },
  {
      charid: "Angelo-m4m",
      charname: "Angelo",
      abbrev: "ANGELO",
      works: "measure",
      descrip: "deputy",
      speechcount: 83
  },
  {
      charid: "angus",
      charname: "Angus",
      abbrev: "ANGUS",
      works: "macbeth",
      descrip: "Nobleman of Scotland",
      speechcount: 4
  },
  {
      charid: "AnneBullen",
      charname: "Anne Bullen",
      abbrev: "QUEEN ANNE",
      works: "henry8",
      descrip: "Katharine's maid of honor, afterwards Queen",
      speechcount: 18
  },
  {
      charid: "annepage",
      charname: "Anne Page",
      abbrev: "ANNE PAGE",
      works: "merrywives",
      descrip: "Mistress Page's daughter",
      speechcount: 19
  },
  {
      charid: "Another",
      charname: "Another",
      abbrev: "ANOTHER",
      works: "richard3",
      descrip: "Another",
      speechcount: 1
  },
  {
      charid: "Antenor",
      charname: "Antenor",
      abbrev: "ANTENOR",
      works: "troilus",
      descrip: "one of the Trojan commanders",
      speechcount: 0
  },
  {
      charid: "Antigonus",
      charname: "Antigonus",
      abbrev: "ANTIGONUS",
      works: "winterstale",
      descrip: "a lord of Sicilia",
      speechcount: 19
  },
  {
      charid: "Antiochus",
      charname: "Antiochus",
      abbrev: "ANTIOCHUS",
      works: "pericles",
      descrip: "king of Antioch",
      speechcount: 12
  },
  {
      charid: "AntiochusDaughter",
      charname: "Daughter of Antiochus",
      abbrev: "Daughter",
      works: "pericles",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "ANTIPHOLUSEPHESUS",
      charname: "Antipholus of Ephesus",
      abbrev: "ANTIPHOLUS OF EPHESUS",
      works: "comedyerrors",
      descrip: "twin brother of Antipholus of Syracuse, son to Aegeon and Aemilia",
      speechcount: 76
  },
  {
      charid: "ANTIPHOLUSSYRACUSE",
      charname: "Antipholus of Syracuse",
      abbrev: "ANTIPHOLUS OF SYRACUSE",
      works: "comedyerrors",
      descrip: "twin brother of Antipholus of Ephesus, son to Aegeon and Aemelia",
      speechcount: 103
  },
  {
      charid: "antonio",
      charname: "Antonio",
      abbrev: "ANTONIO",
      works: "muchado",
      descrip: "Leonato's brother",
      speechcount: 23
  },
  {
      charid: "ANTONIO-12",
      charname: "Antonio",
      abbrev: "ANTONIO",
      works: "12night",
      descrip: "a sea captain, friend to Sebastain",
      speechcount: 26
  },
  {
      charid: "Antonio-mv",
      charname: "Antonio",
      abbrev: "ANTONIO",
      works: "merchantvenice",
      descrip: "a merchant of Venice",
      speechcount: 47
  },
  {
      charid: "Antonio-tem",
      charname: "Antonio",
      abbrev: "ANTONIO",
      works: "tempest",
      descrip: "the King's brother, the usurping Duke of Milan",
      speechcount: 57
  },
  {
      charid: "Antonio-tg",
      charname: "Antonio",
      abbrev: "ANTONIO",
      works: "twogents",
      descrip: "father to Proteus",
      speechcount: 11
  },
  {
      charid: "antony",
      charname: "Antony",
      abbrev: "ANTONY",
      works: "juliuscaesar,antonycleo",
      descrip: "(Marcus Antonius)",
      speechcount: 253
  },
  {
      charid: "Apemantus",
      charname: "Apemantus",
      abbrev: "APEMANTUS",
      works: "timonathens",
      descrip: "a churlish philosopher",
      speechcount: 100
  },
  {
      charid: "apothecary",
      charname: "Apothecary",
      abbrev: "Apothecary",
      works: "romeojuliet",
      descrip: "",
      speechcount: 4
  },
  {
      charid: "Archidamus",
      charname: "Archidamus",
      abbrev: "ARCHIDAMUS",
      works: "winterstale",
      descrip: "a lord of Bohemia",
      speechcount: 7
  },
  {
      charid: "Ariel",
      charname: "Ariel",
      abbrev: "ARIEL",
      works: "tempest",
      descrip: "an airy spirit",
      speechcount: 45
  },
  {
      charid: "Artemidorus",
      charname: "Artemidorus",
      abbrev: "ARTEMIDORUS",
      works: "juliuscaesar",
      descrip: "of Cnidos, a teacher of rhetoric.",
      speechcount: 4
  },
  {
      charid: "Arthur",
      charname: "Arthur",
      abbrev: "ARTHUR",
      works: "kingjohn",
      descrip: "Duke of Bretagne, nephew to the king",
      speechcount: 23
  },
  {
      charid: "Arviragus",
      charname: "Arviragus",
      abbrev: "ARVIRAGUS",
      works: "cymbeline",
      descrip: "son to Cymbeline, disguised under the name of Cadwal, supposed son to Morgan",
      speechcount: 46
  },
  {
      charid: "Attandants-ac",
      charname: "Attendants",
      abbrev: "Attendants",
      works: "antonycleo",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "Attendant-ac",
      charname: "Attendant",
      abbrev: "Attendant",
      works: "antonycleo",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "Attendant-cym",
      charname: "Attendant",
      abbrev: "Attendant",
      works: "cymbeline",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "attendant-mac",
      charname: "Attendant",
      abbrev: "ATTENDANT",
      works: "macbeth",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "audrey",
      charname: "Audrey",
      abbrev: "AUDREY",
      works: "asyoulikeit",
      descrip: "a country wench",
      speechcount: 12
  },
  {
      charid: "Aumerle",
      charname: "Duke of Aumerle",
      abbrev: "DUKE OF AUMERLE",
      works: "richard2",
      descrip: "son of the Duke of York",
      speechcount: 38
  },
  {
      charid: "Autolycus",
      charname: "Autolycus",
      abbrev: "AUTOLYCUS",
      works: "winterstale",
      descrip: "a rogue",
      speechcount: 67
  },
  {
      charid: "Bagot",
      charname: "Bagot",
      abbrev: "BAGOT",
      works: "richard2",
      descrip: "servant to King Richard II",
      speechcount: 6
  },
  {
      charid: "balthasar",
      charname: "Balthasar",
      abbrev: "BALTHASAR",
      works: "romeojuliet",
      descrip: "Servant to Romeo",
      speechcount: 12
  },
  {
      charid: "balthasar-ma",
      charname: "Balthasar",
      abbrev: "BALTHASAR",
      works: "muchado",
      descrip: "Attendant on Don Pedro",
      speechcount: 11
  },
  {
      charid: "Balthasar-mv",
      charname: "Balthasar",
      abbrev: "BALTHASAR",
      works: "merchantvenice",
      descrip: "servant to Portia",
      speechcount: 1
  },
  {
      charid: "BALTHAZAR",
      charname: "Balthazar",
      abbrev: "BALTHAZAR",
      works: "comedyerrors",
      descrip: "a merchant",
      speechcount: 5
  },
  {
      charid: "Banditti",
      charname: "Banditti",
      abbrev: "Banditti",
      works: "timonathens",
      descrip: "",
      speechcount: 4
  },
  {
      charid: "banquo",
      charname: "Banquo",
      abbrev: "BANQUO",
      works: "macbeth",
      descrip: "General of the King's army",
      speechcount: 33
  },
  {
      charid: "baptista",
      charname: "Baptista Minola",
      abbrev: "BAPTISTA",
      works: "tamingshrew",
      descrip: "a gentleman of Padua",
      speechcount: 68
  },
  {
      charid: "bardolph",
      charname: "Lord Bardolph",
      abbrev: "LORD BARDOLPH",
      works: "henry4p1,henry4p2",
      descrip: "",
      speechcount: 35
  },
  {
      charid: "bardolphlesser",
      charname: "Bardolph",
      abbrev: "BARDOLPH",
      works: "henry4p2,henry5",
      descrip: "",
      speechcount: 46
  },
  {
      charid: "bardolph-mww",
      charname: "Bardolph",
      abbrev: "BARDOLPH",
      works: "merrywives",
      descrip: "sharper attending on Falstaff",
      speechcount: 14
  },
  {
      charid: "Barnardine",
      charname: "Barnardine",
      abbrev: "BARNARDINE",
      works: "measure",
      descrip: "a dissolute prisoner",
      speechcount: 7
  },
  {
      charid: "Bassanio",
      charname: "Bassanio",
      abbrev: "BASSANIO",
      works: "merchantvenice",
      descrip: "Antonio's friend, suitor likewise to Portia",
      speechcount: 73
  },
  {
      charid: "Basset",
      charname: "Basset",
      abbrev: "BASSET",
      works: "henry6p1",
      descrip: "of the Red Rose, or Lancaster, faction",
      speechcount: 7
  },
  {
      charid: "Bassianus",
      charname: "Bassianus",
      abbrev: "BASSIANUS",
      works: "titus",
      descrip: "brother to Saturninus; in love with Lavinia",
      speechcount: 14
  },
  {
      charid: "BastardOrleans",
      charname: "Bastard of Orleans",
      abbrev: "BASTARD OF ORLEANS",
      works: "henry6p1",
      descrip: "",
      speechcount: 12
  },
  {
      charid: "Bates",
      charname: "Bates",
      abbrev: "BATES",
      works: "henry5",
      descrip: "soldier in King Henry's army",
      speechcount: 7
  },
  {
      charid: "Bawd",
      charname: "Bawd",
      abbrev: "Bawd",
      works: "pericles",
      descrip: "",
      speechcount: 43
  },
  {
      charid: "Beadle",
      charname: "Beadle",
      abbrev: "Beadle",
      works: "henry6p2",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "beadle1",
      charname: "First Beadle",
      abbrev: "FIRST BEADLE",
      works: "henry4p2",
      descrip: "",
      speechcount: 4
  },
  {
      charid: "beadle2",
      charname: "Second Beadle",
      abbrev: "SECOND BEADLE",
      works: "henry4p2",
      descrip: "",
      speechcount: 0
  },
  {
      charid: "beatrice",
      charname: "Beatrice",
      abbrev: "BEATRICE",
      works: "muchado",
      descrip: "Niece to Leonato",
      speechcount: 106
  },
  {
      charid: "bedford",
      charname: "Duke of Bedford",
      abbrev: "BEDFORD",
      works: "henry5,henry6p1",
      descrip: "brother to Henry IV, uncle to Henry V",
      speechcount: 24
  },
  {
      charid: "Belarius",
      charname: "Belarius",
      abbrev: "BELARIUS",
      works: "cymbeline",
      descrip: "a banished lord, disguised under the name of Morgan",
      speechcount: 58
  },
  {
      charid: "belch",
      charname: "Sir Toby Belch",
      abbrev: "SIR TOBY BELCH",
      works: "12night",
      descrip: "uncle to Olivia",
      speechcount: 152
  },
  {
      charid: "benedick",
      charname: "Benedick",
      abbrev: "BENEDICK",
      works: "muchado",
      descrip: "A young lord of Padua",
      speechcount: 134
  },
  {
      charid: "benvolio",
      charname: "Benvolio",
      abbrev: "BENVOLIO",
      works: "romeojuliet",
      descrip: "Nephew to Montague, and friend to Romeo",
      speechcount: 64
  },
  {
      charid: "Berkeley",
      charname: "Berkeley",
      abbrev: "BERKELEY",
      works: "richard3",
      descrip: "a gentleman attending on Lady Anne",
      speechcount: 0
  },
  {
      charid: "bernardo",
      charname: "Bernardo",
      abbrev: "Ber",
      works: "hamlet",
      descrip: "sentinel",
      speechcount: 19
  },
  {
      charid: "BERTRAM",
      charname: "Bertram",
      abbrev: "BERTRAM",
      works: "allswell",
      descrip: "Count of Rousillon",
      speechcount: 102
  },
  {
      charid: "Bevis",
      charname: "George Bevis",
      abbrev: "BEVIS",
      works: "henry6p2",
      descrip: "a follower of Cade",
      speechcount: 9
  },
  {
      charid: "bianca",
      charname: "Bianca",
      abbrev: "BIANCA",
      works: "tamingshrew",
      descrip: "",
      speechcount: 29
  },
  {
      charid: "bianca-oth",
      charname: "Bianca",
      abbrev: "BIANCA",
      works: "othello",
      descrip: "Mistress to Cassio",
      speechcount: 15
  },
  {
      charid: "Bigot",
      charname: "Lord Bigot",
      abbrev: "BIGOT",
      works: "kingjohn",
      descrip: "",
      speechcount: 6
  },
  {
      charid: "biondello",
      charname: "Biondello",
      abbrev: "BIONDELLO",
      works: "tamingshrew",
      descrip: "",
      speechcount: 39
  },
  {
      charid: "Biron",
      charname: "Biron",
      abbrev: "BIRON",
      works: "loveslabours",
      descrip: "lord attending on the king",
      speechcount: 159
  },
  {
      charid: "BishopCarlisle",
      charname: "Bishop of Carlisle",
      abbrev: "BISHOP OF CARLISLE",
      works: "richard2",
      descrip: "",
      speechcount: 6
  },
  {
      charid: "BishopLincoln",
      charname: "Bishop Lincoln",
      abbrev: "LINCOLN",
      works: "henry8",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "Blanch",
      charname: "Blanch",
      abbrev: "BLANCH",
      works: "kingjohn",
      descrip: "of Spain, niece to King John",
      speechcount: 9
  },
  {
      charid: "blunt",
      charname: "Blunt",
      abbrev: "BLUNT",
      works: "henry4p1,henry4p2",
      descrip: "",
      speechcount: 11
  },
  {
      charid: "Blunt-r3",
      charname: "Blunt",
      abbrev: "Blunt",
      works: "richard3",
      descrip: "",
      speechcount: 3
  },
  {
      charid: "Boatswain",
      charname: "Boatswain",
      abbrev: "Boatswain",
      works: "tempest",
      descrip: "",
      speechcount: 12
  },
  {
      charid: "Bolingbroke-h62",
      charname: "Bolingbroke",
      abbrev: "BOLINGBROKE",
      works: "henry6p2",
      descrip: "a conjurer",
      speechcount: 7
  },
  {
      charid: "Bona",
      charname: "Bona",
      abbrev: "BONA",
      works: "henry6p3",
      descrip: "sister to the French Queen",
      speechcount: 4
  },
  {
      charid: "borachio",
      charname: "Borachio",
      abbrev: "BORACHIO",
      works: "muchado",
      descrip: "Follower of Don Juan",
      speechcount: 38
  },
  {
      charid: "both-aw",
      charname: "Both",
      abbrev: "Both",
      works: "allswell",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "bothcitizens",
      charname: "Both Citizens",
      abbrev: "Both Citizens",
      works: "coriolanus",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "both-cor",
      charname: "Both",
      abbrev: "Both",
      works: "coriolanus",
      descrip: "",
      speechcount: 3
  },
  {
      charid: "Both-h62",
      charname: "Both",
      abbrev: "Both",
      works: "henry6p2",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "Both-h8",
      charname: "Both",
      abbrev: "Both",
      works: "henry8",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "Both-per",
      charname: "Both",
      abbrev: "Both",
      works: "pericles",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "Both-r3",
      charname: "Both",
      abbrev: "Both",
      works: "richard3",
      descrip: "",
      speechcount: 3
  },
  {
      charid: "Both-tim",
      charname: "Both",
      abbrev: "Both",
      works: "timonathens",
      descrip: "",
      speechcount: 7
  },
  {
      charid: "bothtribunes",
      charname: "Both Tribunes",
      abbrev: "Both Tribunes",
      works: "coriolanus",
      descrip: "",
      speechcount: 4
  },
  {
      charid: "Bottom",
      charname: "Bottom",
      abbrev: "BOTTOM",
      works: "midsummer",
      descrip: "a weaver",
      speechcount: 59
  },
  {
      charid: "Boult",
      charname: "Boult",
      abbrev: "BOULT",
      works: "pericles",
      descrip: "Pandar's servant",
      speechcount: 38
  },
  {
      charid: "Bourbon",
      charname: "Duke of Bourbon",
      abbrev: "BOURBON",
      works: "henry5",
      descrip: "",
      speechcount: 4
  },
  {
      charid: "Boyet",
      charname: "Boyet",
      abbrev: "BOYET",
      works: "loveslabours",
      descrip: "lord attending on the princess of France",
      speechcount: 80
  },
  {
      charid: "boy-h5",
      charname: "Boy",
      abbrev: "Boy",
      works: "henry5",
      descrip: "",
      speechcount: 16
  },
  {
      charid: "Boy-h61",
      charname: "Boy",
      abbrev: "Boy",
      works: "henry6p1",
      descrip: "son of the Master-Gunner",
      speechcount: 2
  },
  {
      charid: "boy-ma",
      charname: "Boy",
      abbrev: "Boy",
      works: "muchado",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "Boy-r3",
      charname: "Boy",
      abbrev: "Boy",
      works: "richard3",
      descrip: "a young son of Clarence",
      speechcount: 7
  },
  {
      charid: "Boy-tc",
      charname: "Boy",
      abbrev: "Boy",
      works: "troilus",
      descrip: "servant to Troilus",
      speechcount: 3
  },
  {
      charid: "brabantio",
      charname: "Brabantio",
      abbrev: "BRABANTIO",
      works: "othello",
      descrip: "A senator of Venice",
      speechcount: 30
  },
  {
      charid: "Brandon-h8",
      charname: "Brandon",
      abbrev: "BRANDON",
      works: "henry8",
      descrip: "",
      speechcount: 6
  },
  {
      charid: "brothers-h4p2",
      charname: "Brothers",
      abbrev: "BROTHERS",
      works: "henry4p2",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "Brutus",
      charname: "Brutus",
      abbrev: "BRUTUS",
      works: "juliuscaesar",
      descrip: "(Marcus Brutus)",
      speechcount: 194
  },
  {
      charid: "bullcalf",
      charname: "Peter Bullcalf",
      abbrev: "BULLCALF",
      works: "henry4p2",
      descrip: "country soldier",
      speechcount: 5
  },
  {
      charid: "Bushy",
      charname: "Bushy",
      abbrev: "BUSHY",
      works: "richard2",
      descrip: "servant to King Richard II",
      speechcount: 13
  },
  {
      charid: "caithness",
      charname: "Caithness",
      abbrev: "CAITHNESS",
      works: "macbeth",
      descrip: "Nobleman of Scotland",
      speechcount: 3
  },
  {
      charid: "Caius",
      charname: "Caius",
      abbrev: "CAIUS",
      works: "titus",
      descrip: "kinsman to Titus",
      speechcount: 0
  },
  {
      charid: "CaiusLucius",
      charname: "Caius Lucius",
      abbrev: "CAIUS LUCIUS",
      works: "cymbeline",
      descrip: "general of the Roman forces",
      speechcount: 25
  },
  {
      charid: "Calchas",
      charname: "Calchas",
      abbrev: "CALCHAS",
      works: "troilus",
      descrip: "a Trojan priest, taking part with the Greeks",
      speechcount: 4
  },
  {
      charid: "Caliban",
      charname: "Caliban",
      abbrev: "CALIBAN",
      works: "tempest",
      descrip: "a savage and deformed slave",
      speechcount: 50
  },
  {
      charid: "Calpurnia",
      charname: "Calpurnia",
      abbrev: "CALPURNIA",
      works: "juliuscaesar",
      descrip: "wife to Caesar",
      speechcount: 6
  },
  {
      charid: "cambridge",
      charname: "Earl of Cambridge",
      abbrev: "CAMBRIDGE",
      works: "henry5",
      descrip: "",
      speechcount: 5
  },
  {
      charid: "Camillo",
      charname: "Camillo",
      abbrev: "CAMILLO",
      works: "winterstale",
      descrip: "a lord of Sicilia",
      speechcount: 72
  },
  {
      charid: "Campeius",
      charname: "Cardinal Campeius",
      abbrev: "CARDINAL CAMPEIUS",
      works: "henry8",
      descrip: "",
      speechcount: 14
  },
  {
      charid: "Canidius",
      charname: "Canidius",
      abbrev: "CANIDIUS",
      works: "antonycleo",
      descrip: "lieutenant-general to Antony",
      speechcount: 10
  },
  {
      charid: "canterbury",
      charname: "Archbishop of Canterbury",
      abbrev: "CANTERBURY",
      works: "henry5",
      descrip: "",
      speechcount: 18
  },
  {
      charid: "Caphis",
      charname: "Caphis",
      abbrev: "CAPHIS",
      works: "timonathens",
      descrip: "servant to Timon's creditors",
      speechcount: 14
  },
  {
      charid: "Captain-ac",
      charname: "Captain",
      abbrev: "Captain",
      works: "antonycleo",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "Captain-h61",
      charname: "Captain",
      abbrev: "Captain",
      works: "henry6p1",
      descrip: "",
      speechcount: 5
  },
  {
      charid: "Captain-h62",
      charname: "Captain",
      abbrev: "Captain",
      works: "henry6p2",
      descrip: "",
      speechcount: 11
  },
  {
      charid: "captain-kl",
      charname: "Captain",
      abbrev: "Capt",
      works: "kinglear",
      descrip: "",
      speechcount: 5
  },
  {
      charid: "Captain-kr2",
      charname: "Captain",
      abbrev: "Captain",
      works: "richard2",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "captain-ta",
      charname: "Captain",
      abbrev: "Captain",
      works: "titus",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "Capucius",
      charname: "Capucius",
      abbrev: "CAPUCIUS",
      works: "henry8",
      descrip: "Ambassador from the Emperor Charles V",
      speechcount: 5
  },
  {
      charid: "capulet",
      charname: "Capulet",
      abbrev: "CAPULET",
      works: "romeojuliet",
      descrip: "Head of the house of Capulet",
      speechcount: 51
  },
  {
      charid: "capulet2",
      charname: "Second Capulet",
      abbrev: "Second Capulet",
      works: "romeojuliet",
      descrip: "An old man, cousin to Capulet",
      speechcount: 2
  },
  {
      charid: "CardinalBourchier",
      charname: "Cardinal Bourchier",
      abbrev: "CARDINAL",
      works: "richard3",
      descrip: "archbishop of Canterbury",
      speechcount: 2
  },
  {
      charid: "CardinalPandulph",
      charname: "Cardinal Pandulph",
      abbrev: "CARDINAL PANDULPH",
      works: "kingjohn",
      descrip: "the Pope's legate",
      speechcount: 23
  },
  {
      charid: "Carrier",
      charname: "Carrier",
      abbrev: "Carrier",
      works: "henry4p1",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "Casca",
      charname: "Casca",
      abbrev: "CASCA",
      works: "juliuscaesar",
      descrip: "a conspirator against Caesar",
      speechcount: 39
  },
  {
      charid: "Cassandra",
      charname: "Cassandra",
      abbrev: "CASSANDRA",
      works: "troilus",
      descrip: "daughter to Priam, a prophetess",
      speechcount: 13
  },
  {
      charid: "cassio",
      charname: "Cassio",
      abbrev: "CASSIO",
      works: "othello",
      descrip: "Othello's lieutenant",
      speechcount: 110
  },
  {
      charid: "Cassius",
      charname: "Cassius",
      abbrev: "CASSIUS",
      works: "juliuscaesar",
      descrip: "a conspirator against Caesar",
      speechcount: 140
  },
  {
      charid: "Cato",
      charname: "Young Cato",
      abbrev: "CATO",
      works: "juliuscaesar",
      descrip: "friend to Brutus",
      speechcount: 3
  },
  {
      charid: "celia",
      charname: "Celia",
      abbrev: "CELIA",
      works: "asyoulikeit",
      descrip: "daughter to Frederick",
      speechcount: 108
  },
  {
      charid: "Ceres",
      charname: "Ceres",
      abbrev: "CERES",
      works: "tempest",
      descrip: "presented by spirits",
      speechcount: 4
  },
  {
      charid: "Cerimon",
      charname: "Cerimon",
      abbrev: "CERIMON",
      works: "pericles",
      descrip: "a lord of Ephesus",
      speechcount: 23
  },
  {
      charid: "Chamberlain",
      charname: "Chamberlain",
      abbrev: "Chamberlain",
      works: "henry4p1",
      descrip: "",
      speechcount: 6
  },
  {
      charid: "charles-ayli",
      charname: "Charles",
      abbrev: "CHARLES",
      works: "asyoulikeit",
      descrip: "wrestler to Frederick",
      speechcount: 8
  },
  {
      charid: "Charles-h61",
      charname: "Charles, King of France",
      abbrev: "CHARLES",
      works: "henry6p1",
      descrip: "king of France",
      speechcount: 41
  },
  {
      charid: "Charmian",
      charname: "Charmian",
      abbrev: "CHARMIAN",
      works: "antonycleo",
      descrip: "attendant on Cleopatra",
      speechcount: 63
  },
  {
      charid: "Chatillon",
      charname: "Chatillon",
      abbrev: "CHATILLON",
      works: "kingjohn",
      descrip: "ambassador from France to King John",
      speechcount: 5
  },
  {
      charid: "chiefjustice",
      charname: "Lord Chief Justice",
      abbrev: "CHIEF JUSTICE",
      works: "henry4p2",
      descrip: "",
      speechcount: 56
  },
  {
      charid: "Children-r3",
      charname: "Children",
      abbrev: "Children",
      works: "richard3",
      descrip: "",
      speechcount: 3
  },
  {
      charid: "Chiron",
      charname: "Chiron",
      abbrev: "CHIRON",
      works: "titus",
      descrip: "son to Tamora",
      speechcount: 30
  },
  {
      charid: "Chorus-h5",
      charname: "Chorus",
      abbrev: "Chorus",
      works: "henry5",
      descrip: "",
      speechcount: 6
  },
  {
      charid: "Chorus-h8",
      charname: "Chorus",
      abbrev: "Chorus",
      works: "henry8",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "chorus-rj",
      charname: "Chorus",
      abbrev: "Chorus",
      works: "romeojuliet",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "Chorus-tc",
      charname: "Chorus",
      abbrev: "Chorus",
      works: "troilus",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "ChristopherUrswick",
      charname: "Christopher Urswick",
      abbrev: "CHRISTOPHER",
      works: "richard3",
      descrip: "a priest",
      speechcount: 2
  },
  {
      charid: "cicero",
      charname: "Cicero",
      abbrev: "Ciceronis",
      works: "juliuscaesar",
      descrip: "Senator",
      speechcount: 4
  },
  {
      charid: "Cinna",
      charname: "Cinna",
      abbrev: "CINNA",
      works: "juliuscaesar",
      descrip: "a conspirator against Caesar",
      speechcount: 11
  },
  {
      charid: "CinnaPoet",
      charname: "Cinna the Poet",
      abbrev: "CINNA THE POET",
      works: "juliuscaesar",
      descrip: "",
      speechcount: 8
  },
  {
      charid: "citizen",
      charname: "Citizen",
      abbrev: "Citizen",
      works: "coriolanus",
      descrip: "",
      speechcount: 3
  },
  {
      charid: "citizens",
      charname: "Citizens",
      abbrev: "Citizens",
      works: "coriolanus",
      descrip: "",
      speechcount: 17
  },
  {
      charid: "Citizens-jc",
      charname: "Citizens",
      abbrev: "Citizens",
      works: "juliuscaesar",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "Citizens-r3",
      charname: "Citizens",
      abbrev: "Citizens",
      works: "richard3",
      descrip: "",
      speechcount: 0
  },
  {
      charid: "claudio",
      charname: "Claudio",
      abbrev: "CLAUDIO",
      works: "muchado",
      descrip: "A young lord of Florence",
      speechcount: 125
  },
  {
      charid: "Claudio-m4m",
      charname: "Claudio",
      abbrev: "CLAUDIO",
      works: "measure",
      descrip: "a young gentleman",
      speechcount: 35
  },
  {
      charid: "claudius",
      charname: "Claudius",
      abbrev: "King",
      works: "hamlet",
      descrip: "King of Denmark",
      speechcount: 102
  },
  {
      charid: "Claudius-jc",
      charname: "Claudius",
      abbrev: "CLAUDIUS",
      works: "juliuscaesar",
      descrip: "servant to Brutus",
      speechcount: 2
  },
  {
      charid: "Cleomenes",
      charname: "Cleomenes",
      abbrev: "CLEOMENES",
      works: "winterstale",
      descrip: "a lord of Sicilia",
      speechcount: 7
  },
  {
      charid: "Cleon",
      charname: "Cleon",
      abbrev: "CLEON",
      works: "pericles",
      descrip: "governor of Tarsus",
      speechcount: 19
  },
  {
      charid: "Cleopatra",
      charname: "Cleopatra",
      abbrev: "CLEOPATRA",
      works: "antonycleo",
      descrip: "queen of Egypt",
      speechcount: 204
  },
  {
      charid: "ClerkChatham",
      charname: "Clerk of Chatham",
      abbrev: "Clerk",
      works: "henry6p2",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "Clerk-mv",
      charname: "Clerk",
      abbrev: "Clerk",
      works: "merchantvenice",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "Clitus",
      charname: "Clitus",
      abbrev: "CLITUS",
      works: "juliuscaesar",
      descrip: "servant to Brutus",
      speechcount: 8
  },
  {
      charid: "Cloten",
      charname: "Cloten",
      abbrev: "CLOTEN",
      works: "cymbeline",
      descrip: "son to the Queen by a former husband",
      speechcount: 77
  },
  {
      charid: "clown1-ham",
      charname: "First Clown",
      abbrev: "Clown",
      works: "hamlet",
      descrip: "",
      speechcount: 34
  },
  {
      charid: "clown2-ham",
      charname: "Second Clown",
      abbrev: "Other",
      works: "hamlet",
      descrip: "",
      speechcount: 12
  },
  {
      charid: "Clown-ac",
      charname: "Clown",
      abbrev: "Clown",
      works: "antonycleo",
      descrip: "",
      speechcount: 8
  },
  {
      charid: "Clown-aw",
      charname: "Clown",
      abbrev: "Clown",
      works: "allswell",
      descrip: "servant to the Countess",
      speechcount: 58
  },
  {
      charid: "clown-oth",
      charname: "Clown",
      abbrev: "Clown",
      works: "othello",
      descrip: "Servant to Othello",
      speechcount: 14
  },
  {
      charid: "clown-ta",
      charname: "Clown",
      abbrev: "Clown",
      works: "titus",
      descrip: "",
      speechcount: 12
  },
  {
      charid: "Clown-wt",
      charname: "Clown",
      abbrev: "Clown",
      works: "winterstale",
      descrip: "son of the old Shepherd",
      speechcount: 64
  },
  {
      charid: "Cobweb",
      charname: "Cobweb",
      abbrev: "COBWEB",
      works: "midsummer",
      descrip: "a fairy",
      speechcount: 4
  },
  {
      charid: "colville",
      charname: "Sir John Colville",
      abbrev: "COLVILLE",
      works: "henry4p2",
      descrip: "",
      speechcount: 5
  },
  {
      charid: "cominius",
      charname: "Cominius",
      abbrev: "COMINIUS",
      works: "coriolanus",
      descrip: "general against the Volscians",
      speechcount: 67
  },
  {
      charid: "Commons",
      charname: "Commons",
      abbrev: "Commons",
      works: "henry6p2",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "conrade",
      charname: "Conrade",
      abbrev: "CONRADE",
      works: "muchado",
      descrip: "Follower of Don Juan",
      speechcount: 23
  },
  {
      charid: "Constable",
      charname: "Constable of France",
      abbrev: "Constable",
      works: "henry5",
      descrip: "",
      speechcount: 40
  },
  {
      charid: "Constance",
      charname: "Constance",
      abbrev: "CONSTANCE",
      works: "kingjohn",
      descrip: "mother to Arthur",
      speechcount: 36
  },
  {
      charid: "cordelia",
      charname: "Cordelia",
      abbrev: "Cor",
      works: "kinglear",
      descrip: "daughter to Lear",
      speechcount: 31
  },
  {
      charid: "corin",
      charname: "Corin",
      abbrev: "CORIN",
      works: "asyoulikeit",
      descrip: "shepherd",
      speechcount: 24
  },
  {
      charid: "coriolanus",
      charname: "Coriolanus",
      abbrev: "CORIOLANUS",
      works: "coriolanus",
      descrip: "previously Caius Marcius Coriolanus",
      speechcount: 189
  },
  {
      charid: "cornelius",
      charname: "Cornelius",
      abbrev: "Cor",
      works: "hamlet",
      descrip: "courtier",
      speechcount: 1
  },
  {
      charid: "Cornelius-cym",
      charname: "Cornelius",
      abbrev: "CORNELIUS",
      works: "cymbeline",
      descrip: "a physician",
      speechcount: 13
  },
  {
      charid: "Costard",
      charname: "Costard",
      abbrev: "COSTARD",
      works: "loveslabours",
      descrip: "a clown",
      speechcount: 83
  },
  {
      charid: "CountessAuvergne",
      charname: "Countess of Auvergne",
      abbrev: "COUNTESS OF AUVERGNE",
      works: "henry6p1",
      descrip: "",
      speechcount: 13
  },
  {
      charid: "Countess-aw",
      charname: "Countess",
      abbrev: "COUNTESS",
      works: "allswell",
      descrip: "mother to Bertram",
      speechcount: 87
  },
  {
      charid: "Court",
      charname: "Court",
      abbrev: "COURT",
      works: "henry5",
      descrip: "soldier in King Henry's army",
      speechcount: 1
  },
  {
      charid: "Courtezan",
      charname: "Courtezan",
      abbrev: "Courtezan",
      works: "comedyerrors",
      descrip: "",
      speechcount: 11
  },
  {
      charid: "Cranmer",
      charname: "Archbishop Cranmer",
      abbrev: "CRANMER",
      works: "henry8",
      descrip: "Archbishop of Canterbury",
      speechcount: 21
  },
  {
      charid: "Cressida",
      charname: "Cressida",
      abbrev: "CRESSIDA",
      works: "troilus",
      descrip: "daughter to Calchas",
      speechcount: 152
  },
  {
      charid: "Crier-h8",
      charname: "Crier",
      abbrev: "Crier",
      works: "henry8",
      descrip: "",
      speechcount: 3
  },
  {
      charid: "Cromwell",
      charname: "Cromwell",
      abbrev: "CROMWELL",
      works: "henry8",
      descrip: "servant to Wolsey",
      speechcount: 21
  },
  {
      charid: "Cupid",
      charname: "Cupid",
      abbrev: "Cupid",
      works: "timonathens",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "curan",
      charname: "Curan",
      abbrev: "Cur",
      works: "kinglear",
      descrip: "a courtier",
      speechcount: 4
  },
  {
      charid: "CURIO",
      charname: "Curio",
      abbrev: "CURIO",
      works: "12night",
      descrip: "gentleman attending on the Duke",
      speechcount: 4
  },
  {
      charid: "curtis",
      charname: "Curtis",
      abbrev: "CURTIS",
      works: "tamingshrew",
      descrip: "",
      speechcount: 20
  },
  {
      charid: "cymbeline",
      charname: "Cymbeline",
      abbrev: "CYMBELINE",
      works: "cymbeline",
      descrip: "king of Britain",
      speechcount: 81
  },
  {
      charid: "dancer",
      charname: "Dancer",
      abbrev: "Dancer",
      works: "henry4p2",
      descrip: "speaks the Epilogue",
      speechcount: 1
  },
  {
      charid: "Dardanius",
      charname: "Dardanius",
      abbrev: "DARDANIUS",
      works: "juliuscaesar",
      descrip: "servant to Brutus",
      speechcount: 3
  },
  {
      charid: "dauphin",
      charname: "Lewis the Dauphin",
      abbrev: "DAUPHIN",
      works: "henry5",
      descrip: "",
      speechcount: 31
  },
  {
      charid: "davy",
      charname: "Davy",
      abbrev: "DAVY",
      works: "henry4p2",
      descrip: "servant to Shallow",
      speechcount: 14
  },
  {
      charid: "Decius Brutus",
      charname: "Decius Brutus",
      abbrev: "DECIUS BRUTUS",
      works: "juliuscaesar",
      descrip: "a conspirator against Caesar",
      speechcount: 12
  },
  {
      charid: "Deiphobus",
      charname: "Deiphobus",
      abbrev: "DEIPHOBUS",
      works: "troilus",
      descrip: "son of Priam, king of Troy",
      speechcount: 2
  },
  {
      charid: "Demetrius",
      charname: "Demetrius",
      abbrev: "Demetrius",
      works: "titus",
      descrip: "son to Tamora",
      speechcount: 39
  },
  {
      charid: "Demetrius-ac",
      charname: "Demetrius",
      abbrev: "DEMETRIUS",
      works: "antonycleo",
      descrip: "friend to Antony",
      speechcount: 2
  },
  {
      charid: "Demetrius-mnd",
      charname: "Demetrius",
      abbrev: "DEMETRIUS",
      works: "midsummer",
      descrip: "in love with Hermia",
      speechcount: 48
  },
  {
      charid: "dennis",
      charname: "Dennis",
      abbrev: "DENNIS",
      works: "asyoulikeit",
      descrip: "shepherd",
      speechcount: 2
  },
  {
      charid: "Denny",
      charname: "Sir Anthony Denny",
      abbrev: "DENNY",
      works: "henry8",
      descrip: "",
      speechcount: 3
  },
  {
      charid: "Dercetas",
      charname: "Dercetas",
      abbrev: "DERCETAS",
      works: "antonycleo",
      descrip: "friend to Antony",
      speechcount: 5
  },
  {
      charid: "desdemona",
      charname: "Desdemona",
      abbrev: "DESDEMONA",
      works: "othello",
      descrip: "Daughter to Brabantio and wife to Othello",
      speechcount: 165
  },
  {
      charid: "DIANA",
      charname: "Diana",
      abbrev: "DIANA",
      works: "allswell",
      descrip: "daughter to the Widow",
      speechcount: 44
  },
  {
      charid: "Diana-per",
      charname: "Diana",
      abbrev: "DIANA",
      works: "pericles",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "DickButcher",
      charname: "Dick the Butcher",
      abbrev: "DICK",
      works: "henry6p2",
      descrip: "a follower of Cade",
      speechcount: 24
  },
  {
      charid: "Diomedes",
      charname: "Diomedes",
      abbrev: "DIOMEDES",
      works: "antonycleo",
      descrip: "attendant on Cleopatra",
      speechcount: 7
  },
  {
      charid: "Diomedes-tc",
      charname: "Diomedes",
      abbrev: "DIOMEDES",
      works: "troilus",
      descrip: "a Greek prince",
      speechcount: 54
  },
  {
      charid: "Dion",
      charname: "Dion",
      abbrev: "DION",
      works: "winterstale",
      descrip: "a lord of Sicilia",
      speechcount: 4
  },
  {
      charid: "Dionyza",
      charname: "Dionyza",
      abbrev: "DIONYZA",
      works: "pericles",
      descrip: "wife to Cleon",
      speechcount: 19
  },
  {
      charid: "DocButts",
      charname: "Doctor Butts",
      abbrev: "DOCTOR BUTTS",
      works: "henry8",
      descrip: "physician to the King",
      speechcount: 4
  },
  {
      charid: "doctorcaius",
      charname: "Doctor Caius",
      abbrev: "DOCTOR CAIUS",
      works: "merrywives",
      descrip: "a French physician",
      speechcount: 49
  },
  {
      charid: "doctor-kl",
      charname: "Doctor",
      abbrev: "Doct",
      works: "kinglear",
      descrip: "",
      speechcount: 8
  },
  {
      charid: "doctor-mac",
      charname: "Doctor",
      abbrev: "Doctor",
      works: "macbeth",
      descrip: "",
      speechcount: 20
  },
  {
      charid: "dogberry",
      charname: "Dogberry",
      abbrev: "DOGBERRY",
      works: "muchado",
      descrip: "A constable",
      speechcount: 52
  },
  {
      charid: "Dolabella",
      charname: "Dolabella",
      abbrev: "DOLABELLA",
      works: "antonycleo",
      descrip: "friend to Caesar",
      speechcount: 23
  },
  {
      charid: "DomitiusEnobarus",
      charname: "Domitius Enobarus",
      abbrev: "DOMITIUS ENOBARBUS",
      works: "antonycleo",
      descrip: "friend to Antony",
      speechcount: 113
  },
  {
      charid: "DonAdriano",
      charname: "Don Adriano de Armado",
      abbrev: "DON ADRIANO DE ARMADO",
      works: "loveslabours",
      descrip: "a fantastical Spaniard",
      speechcount: 102
  },
  {
      charid: "donalbain",
      charname: "Donalbain",
      abbrev: "DONALBAIN",
      works: "macbeth",
      descrip: "Son of Duncan",
      speechcount: 3
  },
  {
      charid: "donjohn",
      charname: "Don John",
      abbrev: "DON JOHN",
      works: "muchado",
      descrip: "The prince's bastard brother",
      speechcount: 40
  },
  {
      charid: "donpedro",
      charname: "Don Pedro",
      abbrev: "DON PEDRO",
      works: "muchado",
      descrip: "Prince of Arragon",
      speechcount: 135
  },
  {
      charid: "Dorcas",
      charname: "Dorcas",
      abbrev: "DORCAS",
      works: "winterstale",
      descrip: "a shepherdess",
      speechcount: 11
  },
  {
      charid: "drawer2",
      charname: "Second Drawer",
      abbrev: "SECOND DRAWER",
      works: "henry4p2",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "drawer3",
      charname: "Third Drawer",
      abbrev: "THIRD DRAWER",
      works: "henry4p2",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "DROMIOEPHESUS",
      charname: "Dromio of Ephesus",
      abbrev: "DROMIO OF EPHESUS",
      works: "comedyerrors",
      descrip: "twin brother to Dromio of Syracuse, and attendant on the two Antipholuses",
      speechcount: 63
  },
  {
      charid: "DROMIOSYRACUSE",
      charname: "Dromio of Syracuse",
      abbrev: "DROMIO OF SYRACUSE",
      works: "comedyerrors",
      descrip: "twin brother to Dromio of Ephesus, and attendant on the two Antipholuses",
      speechcount: 99
  },
  {
      charid: "DuchessGloucester",
      charname: "Duchess of Gloucester",
      abbrev: "DUCHESS",
      works: "richard2",
      descrip: "",
      speechcount: 4
  },
  {
      charid: "DuchessYork",
      charname: "Duchess of York",
      abbrev: "DUCHESS OF YORK",
      works: "richard2",
      descrip: "",
      speechcount: 28
  },
  {
      charid: "DuchessYork-r3",
      charname: "Duchess of York",
      abbrev: "DUCHESS of YORK",
      works: "richard3",
      descrip: "mother to King Edward IV",
      speechcount: 43
  },
  {
      charid: "Duke",
      charname: "Duke",
      abbrev: "DUKE",
      works: "merchantvenice",
      descrip: "of Venice",
      speechcount: 18
  },
  {
      charid: "dukealbany",
      charname: "Duke of Albany",
      abbrev: "Alb",
      works: "kinglear",
      descrip: "",
      speechcount: 58
  },
  {
      charid: "DukeAlencon",
      charname: "Duke of Alencon",
      abbrev: "ALENCON",
      works: "henry6p1",
      descrip: "",
      speechcount: 18
  },
  {
      charid: "duke-ayli",
      charname: "Duke",
      abbrev: "DUKE SENIOR",
      works: "asyoulikeit",
      descrip: "living in exile",
      speechcount: 32
  },
  {
      charid: "DukeBuckingham",
      charname: "Duke of Buckingham",
      abbrev: "BUCKINGHAM",
      works: "henry8",
      descrip: "",
      speechcount: 26
  },
  {
      charid: "DukeBuckingham-h6",
      charname: "Duke of Buckingham",
      abbrev: "BUCKINGHAM",
      works: "henry6p2,richard3",
      descrip: "",
      speechcount: 115
  },
  {
      charid: "dukeburgundy",
      charname: "Duke of Burgundy",
      abbrev: "Bur",
      works: "kinglear",
      descrip: "",
      speechcount: 5
  },
  {
      charid: "dukeburgundy-h5",
      charname: "Duke of Burgundy",
      abbrev: "BURGUNDY",
      works: "henry5,henry6p1",
      descrip: "",
      speechcount: 25
  },
  {
      charid: "dukecornwall",
      charname: "Duke of Cornwall",
      abbrev: "Corn",
      works: "kinglear",
      descrip: "",
      speechcount: 53
  },
  {
      charid: "dukeflorence",
      charname: "Duke of Florence",
      abbrev: "DUKE",
      works: "allswell",
      descrip: "",
      speechcount: 6
  },
  {
      charid: "dukemilan",
      charname: "Duke of Milan",
      abbrev: "DUKE",
      works: "twogents",
      descrip: "father to Silvia",
      speechcount: 48
  },
  {
      charid: "DukeNorfolk",
      charname: "Duke of Norfolk",
      abbrev: "NORFOLK",
      works: "henry8",
      descrip: "",
      speechcount: 48
  },
  {
      charid: "DukeNorfolk-h63",
      charname: "Duke of Norfolk",
      abbrev: "NORFOLK",
      works: "henry6p3,richard3",
      descrip: "",
      speechcount: 11
  },
  {
      charid: "DukeSuffolk",
      charname: "Duke of Suffolk",
      abbrev: "SUFFOLK",
      works: "henry8",
      descrip: "",
      speechcount: 30
  },
  {
      charid: "DukeSurrey",
      charname: "Duke of Surrey",
      abbrev: "DUKE OF SURREY",
      works: "richard2",
      descrip: "",
      speechcount: 3
  },
  {
      charid: "dukevenice",
      charname: "Duke of Venice",
      abbrev: "DUKE OF VENICE",
      works: "othello",
      descrip: "",
      speechcount: 25
  },
  {
      charid: "Dull",
      charname: "Dull",
      abbrev: "DULL",
      works: "loveslabours",
      descrip: "a constable",
      speechcount: 15
  },
  {
      charid: "Dumain",
      charname: "Dumain",
      abbrev: "DUMAIN",
      works: "loveslabours",
      descrip: "lord attending on the king",
      speechcount: 54
  },
  {
      charid: "duncan",
      charname: "Duncan",
      abbrev: "DUNCAN",
      works: "macbeth",
      descrip: "King of Scotland",
      speechcount: 18
  },
  {
      charid: "EarlDouglas",
      charname: "Earl of Douglas",
      abbrev: "Earl of Douglas",
      works: "henry4p1",
      descrip: "",
      speechcount: 19
  },
  {
      charid: "earlkent",
      charname: "Earl of Kent",
      abbrev: "Kent",
      works: "kinglear",
      descrip: "",
      speechcount: 127
  },
  {
      charid: "earlnorth",
      charname: "Earl of Northumberland",
      abbrev: "NORTHUMBERLAND",
      works: "richard2,henry4p1,henry4p2",
      descrip: "",
      speechcount: 66
  },
  {
      charid: "EarlNorthumberland",
      charname: "Earl of Northumberland",
      abbrev: "NORTHUMBERLAND",
      works: "henry6p3",
      descrip: "",
      speechcount: 15
  },
  {
      charid: "EarlOxford",
      charname: "Earl Oxford",
      abbrev: "OXFORD",
      works: "henry6p3,richard3",
      descrip: "",
      speechcount: 14
  },
  {
      charid: "EarlRichmond",
      charname: "Henry, Earl of Richmond",
      abbrev: "HENRY OF RICHMOND",
      works: "henry6p3",
      descrip: "a youth",
      speechcount: 0
  },
  {
      charid: "EarlSuffolk",
      charname: "Earl of Suffolk",
      abbrev: "SUFFOLK",
      works: "henry6p1,henry6p2",
      descrip: "",
      speechcount: 108
  },
  {
      charid: "EarlSurrey",
      charname: "Earl of Surrey",
      abbrev: "SURREY",
      works: "henry8",
      descrip: "",
      speechcount: 24
  },
  {
      charid: "EarlSurrey-r3",
      charname: "Earl of Surrey",
      abbrev: "SURREY",
      works: "richard3",
      descrip: "son of the Duke of Norfolk",
      speechcount: 1
  },
  {
      charid: "EarlWestmoreland-h63",
      charname: "Earl of Westmoreland",
      abbrev: "WESTMORELAND",
      works: "henry6p3",
      descrip: "",
      speechcount: 6
  },
  {
      charid: "edgar",
      charname: "Edgar",
      abbrev: "Edg",
      works: "kinglear",
      descrip: "son of Glouchester",
      speechcount: 98
  },
  {
      charid: "EdmondRutland",
      charname: "Edmond, Earl of Rutland",
      abbrev: "RUTLAND",
      works: "henry6p3",
      descrip: "",
      speechcount: 7
  },
  {
      charid: "edmund",
      charname: "Edmund",
      abbrev: "Edm",
      works: "kinglear",
      descrip: "bastard son to Glouchester",
      speechcount: 79
  },
  {
      charid: "EdmundLangley",
      charname: "Edmund of Langley",
      abbrev: "DUKE OF YORK",
      works: "richard2",
      descrip: "duke of York, uncle to the king",
      speechcount: 54
  },
  {
      charid: "EdmundMortimer",
      charname: "Edmund Mortimer",
      abbrev: "MORTIMER",
      works: "henry6p1,henry6p3",
      descrip: "Earl of March",
      speechcount: 9
  },
  {
      charid: "EdwardPlantagenet",
      charname: "King Edward IV (Plantagenet)",
      abbrev: "EDWARD",
      works: "henry6p2,henry6p3,richard3",
      descrip: "",
      speechcount: 144
  },
  {
      charid: "Egeus",
      charname: "Egeus",
      abbrev: "EGEUS",
      works: "midsummer",
      descrip: "father to Hermia",
      speechcount: 7
  },
  {
      charid: "Eglamour",
      charname: "Eglamour",
      abbrev: "EGLAMOUR",
      works: "twogents",
      descrip: "agent for Silvia in her escape",
      speechcount: 8
  },
  {
      charid: "Egyptian",
      charname: "Egyptian",
      abbrev: "Egyptian",
      works: "antonycleo",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "Elbow",
      charname: "Elbow",
      abbrev: "ELBOW",
      works: "measure",
      descrip: "a simple constable",
      speechcount: 28
  },
  {
      charid: "Eleanor",
      charname: "Eleanor",
      abbrev: "DUCHESS",
      works: "henry6p2",
      descrip: "duchess of Gloucester",
      speechcount: 21
  },
  {
      charid: "ely",
      charname: "Bishop of Ely",
      abbrev: "ELY",
      works: "henry5",
      descrip: "",
      speechcount: 12
  },
  {
      charid: "emilia",
      charname: "Emilia",
      abbrev: "EMILIA",
      works: "othello",
      descrip: "Wife to Iago",
      speechcount: 103
  },
  {
      charid: "Emilia-wt",
      charname: "Emilia",
      abbrev: "EMILIA",
      works: "winterstale",
      descrip: "a lady attending on Hermione",
      speechcount: 4
  },
  {
      charid: "EnglishHerald",
      charname: "English Herald",
      abbrev: "English Herald",
      works: "kingjohn",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "Eros",
      charname: "Eros",
      abbrev: "EROS",
      works: "antonycleo",
      descrip: "friend to Antony",
      speechcount: 27
  },
  {
      charid: "erpingham",
      charname: "Sir Thomas Erpingham",
      abbrev: "ERPINGHAM",
      works: "henry5",
      descrip: "",
      speechcount: 5
  },
  {
      charid: "escalus",
      charname: "Prince Escalus",
      abbrev: "PRINCE",
      works: "romeojuliet",
      descrip: "Prince of Verona",
      speechcount: 16
  },
  {
      charid: "Escalus-m4m",
      charname: "Escalus",
      abbrev: "ESCALUS",
      works: "measure",
      descrip: "Escalus",
      speechcount: 78
  },
  {
      charid: "Escanes",
      charname: "Escanes",
      abbrev: "ESCANES",
      works: "pericles",
      descrip: "a lord of Tyre",
      speechcount: 2
  },
  {
      charid: "Essex",
      charname: "Essex",
      abbrev: "ESSEX",
      works: "kingjohn",
      descrip: "earl of Essex",
      speechcount: 1
  },
  {
      charid: "Euphronius",
      charname: "Euphronius",
      abbrev: "EUPHRONIUS",
      works: "antonycleo",
      descrip: "an ambassador from Antony to Caesar",
      speechcount: 5
  },
  {
      charid: "exeter",
      charname: "Duke of Exeter",
      abbrev: "EXETER",
      works: "henry5,henry6p1,henry6p3",
      descrip: "uncle to Henry IV, great-uncle to Henry V",
      speechcount: 46
  },
  {
      charid: "Exton",
      charname: "Sir Pierce of Exton",
      abbrev: "EXTON",
      works: "richard2",
      descrip: "",
      speechcount: 6
  },
  {
      charid: "FABIAN-12",
      charname: "Fabian",
      abbrev: "FABIAN",
      works: "12night",
      descrip: "servant to Olivia",
      speechcount: 51
  },
  {
      charid: "Fairy",
      charname: "Fairy",
      abbrev: "Fairy",
      works: "midsummer",
      descrip: "",
      speechcount: 4
  },
  {
      charid: "falstaff",
      charname: "Falstaff",
      abbrev: "FALSTAFF",
      works: "henry4p1,henry4p2,henry5,merrywives",
      descrip: "Sir John Falstaff",
      speechcount: 471
  },
  {
      charid: "fang",
      charname: "Fang",
      abbrev: "FANG",
      works: "henry4p2",
      descrip: "a Sheriff's officer",
      speechcount: 7
  },
  {
      charid: "Father",
      charname: "Father",
      abbrev: "Father",
      works: "henry6p3",
      descrip: "who has killed his son",
      speechcount: 4
  },
  {
      charid: "Faulconbridge",
      charname: "Faulconbridge",
      abbrev: "ROBERT",
      works: "kingjohn",
      descrip: "son of Sir Robert Faulconbridge",
      speechcount: 4
  },
  {
      charid: "feeble",
      charname: "Francis Feeble",
      abbrev: "FEEBLE",
      works: "henry4p2",
      descrip: "country soldier",
      speechcount: 7
  },
  {
      charid: "fenton",
      charname: "Fenton",
      abbrev: "FENTON",
      works: "merrywives",
      descrip: "a gentleman",
      speechcount: 20
  },
  {
      charid: "Ferdinand",
      charname: "Ferdinand",
      abbrev: "FERDINAND",
      works: "loveslabours",
      descrip: "king of Navarre",
      speechcount: 117
  },
  {
      charid: "Ferdinand-tem",
      charname: "Ferdinand",
      abbrev: "FERDINAND",
      works: "tempest",
      descrip: "son to the King of Naples",
      speechcount: 31
  },
  {
      charid: "FESTE",
      charname: "Feste",
      abbrev: "Clown",
      works: "12night",
      descrip: "a clown, servant to Olivia",
      speechcount: 104
  },
  {
      charid: "FifthCitizen",
      charname: "Fifth Citizen",
      abbrev: "Fifth Citizen",
      works: "coriolanus",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "FirstAmbassador-h5",
      charname: "First Ambassador",
      abbrev: "First Ambassador",
      works: "henry5",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "FirstAttendant",
      charname: "First Attendant",
      abbrev: "First Attendant",
      works: "antonycleo",
      descrip: "",
      speechcount: 3
  },
  {
      charid: "FirstBandit",
      charname: "First Bandit",
      abbrev: "First Bandit",
      works: "timonathens",
      descrip: "",
      speechcount: 5
  },
  {
      charid: "FirstBrother",
      charname: "First Brother",
      abbrev: "First Brother",
      works: "cymbeline",
      descrip: "an apparition",
      speechcount: 2
  },
  {
      charid: "FirstCaptain-cym",
      charname: "First British Captain",
      abbrev: "First Captain",
      works: "cymbeline",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "FirstCarrier",
      charname: "First Carrier",
      abbrev: "First Carrier",
      works: "henry4p1",
      descrip: "",
      speechcount: 8
  },
  {
      charid: "FirstCitizen",
      charname: "First Citizen",
      abbrev: "First Citizen",
      works: "coriolanus",
      descrip: "",
      speechcount: 33
  },
  {
      charid: "FirstCitizen-h62",
      charname: "First Citizen",
      abbrev: "First Citizen",
      works: "henry6p2",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "FirstCitizen-jc",
      charname: "First Citizen",
      abbrev: "First Citizen",
      works: "juliuscaesar",
      descrip: "",
      speechcount: 18
  },
  {
      charid: "FirstCitizen-kjo",
      charname: "First Citizen",
      abbrev: "First Citizen",
      works: "kingjohn",
      descrip: "",
      speechcount: 10
  },
  {
      charid: "FirstCitizen-r3",
      charname: "First Citizen",
      abbrev: "First Citizen",
      works: "richard3",
      descrip: "",
      speechcount: 7
  },
  {
      charid: "FirstCommoner",
      charname: "First Commoner",
      abbrev: "First Commoner",
      works: "juliuscaesar",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "FirstExecutioner",
      charname: "First Executioner",
      abbrev: "First Executioner",
      works: "kingjohn",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "FirstFish",
      charname: "First Fisherman",
      abbrev: "First Fisherman",
      works: "pericles",
      descrip: "",
      speechcount: 15
  },
  {
      charid: "FirstGaoler",
      charname: "First Gaoler",
      abbrev: "First Gaoler",
      works: "cymbeline",
      descrip: "",
      speechcount: 9
  },
  {
      charid: "FirstGaoler-h61",
      charname: "First Gaoler",
      abbrev: "First Gaoler",
      works: "henry6p1",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "FirstGentleman",
      charname: "First Gentleman",
      abbrev: "First Gentleman",
      works: "measure",
      descrip: "",
      speechcount: 12
  },
  {
      charid: "FirstGentleman-aw",
      charname: "First Gentleman",
      abbrev: "First Gentleman",
      works: "allswell",
      descrip: "",
      speechcount: 7
  },
  {
      charid: "FirstGentleman-cym",
      charname: "First Gentleman",
      abbrev: "First Gentleman",
      works: "cymbeline",
      descrip: "a gentleman of Cymbeline's court",
      speechcount: 10
  },
  {
      charid: "FirstGentleman-h62",
      charname: "First Gentleman",
      abbrev: "First Gentleman",
      works: "henry6p2",
      descrip: "",
      speechcount: 4
  },
  {
      charid: "FirstGentleman-h8",
      charname: "First Gentleman",
      abbrev: "First Gentleman",
      works: "henry8",
      descrip: "",
      speechcount: 34
  },
  {
      charid: "FirstGentleman-wt",
      charname: "First Gentleman",
      abbrev: "First Gentleman",
      works: "winterstale",
      descrip: "",
      speechcount: 6
  },
  {
      charid: "FirstGent-per",
      charname: "First Gentleman",
      abbrev: "First Gentleman",
      works: "pericles",
      descrip: "",
      speechcount: 10
  },
  {
      charid: "FirstGuard",
      charname: "First Guard",
      abbrev: "First Guard",
      works: "antonycleo",
      descrip: "",
      speechcount: 11
  },
  {
      charid: "FirstHerald-kr2",
      charname: "First Herald",
      abbrev: "First Herald",
      works: "richard2",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "FirstKeeper",
      charname: "First Keeper",
      abbrev: "First Keeper",
      works: "henry6p3",
      descrip: "",
      speechcount: 7
  },
  {
      charid: "FirstKnight-per",
      charname: "First Knight",
      abbrev: "First Knight",
      works: "pericles",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "FirstLady",
      charname: "First Lady",
      abbrev: "First Lady",
      works: "timonathens",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "FirstLady-cym",
      charname: "First Lady",
      abbrev: "First Lady",
      works: "cymbeline",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "FirstLady-wt",
      charname: "First Lady",
      abbrev: "First Lady",
      works: "winterstale",
      descrip: "",
      speechcount: 4
  },
  {
      charid: "FirstLord",
      charname: "First Lord",
      abbrev: "First Lord",
      works: "coriolanus",
      descrip: "",
      speechcount: 4
  },
  {
      charid: "FirstLord-aw",
      charname: "First Lord",
      abbrev: "First Lord",
      works: "allswell",
      descrip: "",
      speechcount: 48
  },
  {
      charid: "firstlord-ayli",
      charname: "First Lord",
      abbrev: "FIRST LORD",
      works: "asyoulikeit",
      descrip: "",
      speechcount: 6
  },
  {
      charid: "FirstLord-cym",
      charname: "First Lord",
      abbrev: "First Lord",
      works: "cymbeline",
      descrip: "a lord of Cymbeline's court",
      speechcount: 15
  },
  {
      charid: "FirstLord-lll",
      charname: "First Lord",
      abbrev: "First Lord",
      works: "loveslabours",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "FirstLord-per",
      charname: "First Lord",
      abbrev: "First Lord",
      works: "pericles",
      descrip: "",
      speechcount: 9
  },
  {
      charid: "FirstLord-tim",
      charname: "First Lord",
      abbrev: "First Lord",
      works: "timonathens",
      descrip: "",
      speechcount: 28
  },
  {
      charid: "FirstLord-wt",
      charname: "First Lord",
      abbrev: "First Lord",
      works: "winterstale",
      descrip: "",
      speechcount: 14
  },
  {
      charid: "FirstMerchant",
      charname: "First Merchant",
      abbrev: "First Merchant",
      works: "comedyerrors",
      descrip: "friend to Antipholus of Syracuse",
      speechcount: 3
  },
  {
      charid: "FirstMessenger-h63",
      charname: "First Messenger",
      abbrev: "First Messenger",
      works: "henry6p3",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "FirstMurderer-h62",
      charname: "First Murderer",
      abbrev: "First Murderer",
      works: "henry6p2",
      descrip: "",
      speechcount: 4
  },
  {
      charid: "FirstMurderer-r3",
      charname: "First Murderer",
      abbrev: "First Murderer",
      works: "richard3",
      descrip: "",
      speechcount: 33
  },
  {
      charid: "FirstNeighbour-h62",
      charname: "First Neighbour",
      abbrev: "First Neighbour",
      works: "henry6p2",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "FirstOfficer-12",
      charname: "First Officer",
      abbrev: "First Officer",
      works: "12night",
      descrip: "",
      speechcount: 5
  },
  {
      charid: "FirstOfficer-ac",
      charname: "First Officer",
      abbrev: "First Officer",
      works: "antonycleo",
      descrip: "",
      speechcount: 0
  },
  {
      charid: "FirstOfficer-cor",
      charname: "First Officer",
      abbrev: "First Officer",
      works: "coriolanus",
      descrip: "",
      speechcount: 4
  },
  {
      charid: "FirstOutlaw",
      charname: "First Outlaw",
      abbrev: "First Outlaw",
      works: "twogents",
      descrip: "",
      speechcount: 11
  },
  {
      charid: "FirstPetitioner-h62",
      charname: "First Petitioner",
      abbrev: "First Petitioner",
      works: "henry6p2",
      descrip: "",
      speechcount: 3
  },
  {
      charid: "FirstPirate",
      charname: "First Pirate",
      abbrev: "First Pirate",
      works: "pericles",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "FirstPrentice",
      charname: "First 'Prentice",
      abbrev: "First 'Prentice",
      works: "henry6p2",
      descrip: "",
      speechcount: 0
  },
  {
      charid: "FirstRoman",
      charname: "First Roman",
      abbrev: "First Roman",
      works: "coriolanus",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "FirstSailor-per",
      charname: "First Sailor",
      abbrev: "First Sailor",
      works: "pericles",
      descrip: "",
      speechcount: 4
  },
  {
      charid: "FirstSecretary",
      charname: "First Secretary",
      abbrev: "First Secretary",
      works: "henry8",
      descrip: "to Wolsey",
      speechcount: 2
  },
  {
      charid: "FirstSenator",
      charname: "First Senator",
      abbrev: "First Senator",
      works: "timonathens",
      descrip: "",
      speechcount: 27
  },
  {
      charid: "FirstSenator-cym",
      charname: "First Senator",
      abbrev: "First Senator",
      works: "cymbeline",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "FirstSentinel",
      charname: "First Sentinel",
      abbrev: "First Sentinel",
      works: "henry6p1",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "FirstServant-ac",
      charname: "First Servant",
      abbrev: "First Servant",
      works: "antonycleo",
      descrip: "",
      speechcount: 4
  },
  {
      charid: "FirstServant-mww",
      charname: "First Servant",
      abbrev: "First Servant",
      works: "merrywives",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "FirstServant-per",
      charname: "First Servant",
      abbrev: "First Servant",
      works: "pericles",
      descrip: "",
      speechcount: 3
  },
  {
      charid: "FirstServant-tim",
      charname: "First Servant",
      abbrev: "First Servant",
      works: "timonathens",
      descrip: "",
      speechcount: 7
  },
  {
      charid: "FirstServant-wt",
      charname: "First Servant",
      abbrev: "First Servant",
      works: "winterstale",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "FirstServiceman",
      charname: "First Serviceman",
      abbrev: "First Serviceman",
      works: "coriolanus",
      descrip: "",
      speechcount: 0
  },
  {
      charid: "FirstServingman",
      charname: "First Servingman",
      abbrev: "First Servingman",
      works: "coriolanus",
      descrip: "",
      speechcount: 19
  },
  {
      charid: "FirstSoldier-ac",
      charname: "First Soldier",
      abbrev: "First Soldier",
      works: "antonycleo",
      descrip: "",
      speechcount: 14
  },
  {
      charid: "FirstSoldier-aw",
      charname: "First Soldier",
      abbrev: "First Soldier",
      works: "allswell",
      descrip: "",
      speechcount: 37
  },
  {
      charid: "FirstSoldier-h61",
      charname: "First Soldier",
      abbrev: "First Soldier",
      works: "henry6p1",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "FirstSoldier-jc",
      charname: "First Soldier",
      abbrev: "First Soldier",
      works: "juliuscaesar",
      descrip: "",
      speechcount: 4
  },
  {
      charid: "FirstStranger",
      charname: "First Stranger",
      abbrev: "First Stranger",
      works: "timonathens",
      descrip: "",
      speechcount: 4
  },
  {
      charid: "FirstTraveller",
      charname: "First Traveller",
      abbrev: "First Traveller",
      works: "henry4p1",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "FirstTribune",
      charname: "First Tribune",
      abbrev: "First Tribune",
      works: "cymbeline",
      descrip: "",
      speechcount: 3
  },
  {
      charid: "FirstWarder",
      charname: "First Warder",
      abbrev: "First Warder",
      works: "henry6p1",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "FirstWatchman-h63",
      charname: "First Watchman",
      abbrev: "First Watchman",
      works: "henry6p3",
      descrip: "",
      speechcount: 5
  },
  {
      charid: "Flaminius-tim",
      charname: "Flaminius",
      abbrev: "Flaminius",
      works: "timonathens",
      descrip: "",
      speechcount: 10
  },
  {
      charid: "Flavius",
      charname: "Flavius",
      abbrev: "FLAVIUS",
      works: "timonathens",
      descrip: "steward to Timon",
      speechcount: 41
  },
  {
      charid: "Flavius-jc",
      charname: "Flavius",
      abbrev: "FLAVIUS",
      works: "juliuscaesar",
      descrip: "a tribune",
      speechcount: 5
  },
  {
      charid: "fleance",
      charname: "Fleance",
      abbrev: "FLEANCE",
      works: "macbeth",
      descrip: "Son to Banquo",
      speechcount: 2
  },
  {
      charid: "Florizel",
      charname: "Florizel",
      abbrev: "FLORIZEL",
      works: "winterstale",
      descrip: "prince of Bohemia",
      speechcount: 45
  },
  {
      charid: "fluellen",
      charname: "Fluellen",
      abbrev: "FLUELLEN",
      works: "henry5",
      descrip: "",
      speechcount: 68
  },
  {
      charid: "Flute",
      charname: "Flute",
      abbrev: "FLUTE",
      works: "midsummer",
      descrip: "a bellows-mender",
      speechcount: 18
  },
  {
      charid: "fool-kl",
      charname: "Fool",
      abbrev: "Fool",
      works: "kinglear",
      descrip: "",
      speechcount: 58
  },
  {
      charid: "Fool-tim",
      charname: "Fool",
      abbrev: "Fool",
      works: "timonathens",
      descrip: "",
      speechcount: 9
  },
  {
      charid: "ford",
      charname: "Ford",
      abbrev: "FORD",
      works: "merrywives",
      descrip: "a gentleman dwelling at Windsor",
      speechcount: 99
  },
  {
      charid: "Forester",
      charname: "Forester",
      abbrev: "Forester",
      works: "loveslabours",
      descrip: "",
      speechcount: 4
  },
  {
      charid: "fortinbras",
      charname: "Fortinbras",
      abbrev: "Fort",
      works: "hamlet",
      descrip: "Prince of Norway",
      speechcount: 6
  },
  {
      charid: "FourthCitizen",
      charname: "Fourth Citizen",
      abbrev: "Fourth Citizen",
      works: "coriolanus",
      descrip: "",
      speechcount: 3
  },
  {
      charid: "FourthCitizen-jc",
      charname: "Fourth Citizen",
      abbrev: "Fourth Citizen",
      works: "juliuscaesar",
      descrip: "",
      speechcount: 16
  },
  {
      charid: "FourthLord",
      charname: "Fourth Lord",
      abbrev: "Fourth Lord",
      works: "timonathens",
      descrip: "",
      speechcount: 3
  },
  {
      charid: "FourthLord-aw",
      charname: "Fourth Lord",
      abbrev: "Fourth Lord",
      works: "allswell",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "FourthMessenger",
      charname: "Fourth Messenger",
      abbrev: "Fourth Messenger",
      works: "richard3",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "FourthSoldier-ac",
      charname: "Fourth Soldier",
      abbrev: "Fourth Soldier",
      works: "antonycleo",
      descrip: "",
      speechcount: 3
  },
  {
      charid: "Francisca",
      charname: "Francisca",
      abbrev: "FRANCISCA",
      works: "measure",
      descrip: "a nun",
      speechcount: 2
  },
  {
      charid: "francisco",
      charname: "Francisco",
      abbrev: "Fran",
      works: "hamlet",
      descrip: "a soldier",
      speechcount: 8
  },
  {
      charid: "Francisco-tem",
      charname: "Francisco",
      abbrev: "FRANCISCO",
      works: "tempest",
      descrip: "a lord",
      speechcount: 2
  },
  {
      charid: "francis-h4p2",
      charname: "Francis",
      abbrev: "FRANCIS",
      works: "henry4p1,henry4p2",
      descrip: "a drawer",
      speechcount: 18
  },
  {
      charid: "frederick",
      charname: "Frederick",
      abbrev: "FREDERICK",
      works: "asyoulikeit",
      descrip: "the Duke's brother, and usurper of his dominions",
      speechcount: 20
  },
  {
      charid: "FrenchHerald",
      charname: "French Herald",
      abbrev: "French Herald",
      works: "kingjohn",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "frenchking",
      charname: "King of France",
      abbrev: "FRENCH KING",
      works: "henry5",
      descrip: "Charles VI",
      speechcount: 19
  },
  {
      charid: "Frenchman",
      charname: "Frenchman",
      abbrev: "Frenchman",
      works: "cymbeline",
      descrip: "friend to Philario",
      speechcount: 7
  },
  {
      charid: "FrenchSoldier",
      charname: "French Soldier",
      abbrev: "French Soldier",
      works: "henry5",
      descrip: "",
      speechcount: 10
  },
  {
      charid: "friarfrancis",
      charname: "Friar Francis",
      abbrev: "FRIAR FRANCIS",
      works: "muchado",
      descrip: "",
      speechcount: 16
  },
  {
      charid: "friarjohn",
      charname: "Friar John",
      abbrev: "FRIAR JOHN",
      works: "romeojuliet",
      descrip: "Franciscan friar",
      speechcount: 4
  },
  {
      charid: "friarlaurence",
      charname: "Friar Laurence",
      abbrev: "FRIAR LAURENCE",
      works: "romeojuliet",
      descrip: "Franciscan friar",
      speechcount: 55
  },
  {
      charid: "FriarPeter",
      charname: "Friar Peter",
      abbrev: "FRIAR PETER",
      works: "measure",
      descrip: "",
      speechcount: 7
  },
  {
      charid: "FriarThomas",
      charname: "Friar Thomas",
      abbrev: "FRIAR THOMAS",
      works: "measure",
      descrip: "",
      speechcount: 3
  },
  {
      charid: "Froth",
      charname: "Froth",
      abbrev: "FROTH",
      works: "measure",
      descrip: "a foolish gentleman",
      speechcount: 8
  },
  {
      charid: "gadshill",
      charname: "Gadshill",
      abbrev: "Gadshill",
      works: "henry4p1",
      descrip: "",
      speechcount: 17
  },
  {
      charid: "Gallus",
      charname: "Gallus",
      abbrev: "GALLUS",
      works: "antonycleo",
      descrip: "friend to Caesar",
      speechcount: 1
  },
  {
      charid: "Gaoler",
      charname: "Gaoler",
      abbrev: "Gaoler",
      works: "comedyerrors",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "Gaoler-wt",
      charname: "Gaoler",
      abbrev: "Gaoler",
      works: "winterstale",
      descrip: "",
      speechcount: 6
  },
  {
      charid: "Gardener",
      charname: "Gardener",
      abbrev: "Gardener",
      works: "richard2",
      descrip: "",
      speechcount: 6
  },
  {
      charid: "Gardiner",
      charname: "Gardiner",
      abbrev: "GARDINER",
      works: "henry8",
      descrip: "bishop of Winchester",
      speechcount: 22
  },
  {
      charid: "Garter",
      charname: "Garter",
      abbrev: "Garter",
      works: "henry8",
      descrip: "King-at-Arms",
      speechcount: 1
  },
  {
      charid: "garterhost",
      charname: "Host",
      abbrev: "Host",
      works: "merrywives",
      descrip: "host of the Garter Inn",
      speechcount: 46
  },
  {
      charid: "General-h61",
      charname: "General",
      abbrev: "General",
      works: "henry6p1",
      descrip: "of the French forces in Bordeaux",
      speechcount: 1
  },
  {
      charid: "Gentleman-aw",
      charname: "Gentleman",
      abbrev: "Gentleman",
      works: "allswell",
      descrip: "",
      speechcount: 9
  },
  {
      charid: "Gentleman-h8",
      charname: "Gentleman",
      abbrev: "Gentleman",
      works: "henry8",
      descrip: "",
      speechcount: 3
  },
  {
      charid: "gentleman-kl",
      charname: "Gentleman",
      abbrev: "Gent",
      works: "kinglear",
      descrip: "",
      speechcount: 41
  },
  {
      charid: "gentleman-oth",
      charname: "Gentleman",
      abbrev: "Gentleman",
      works: "othello",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "Gentleman-r3",
      charname: "Gentleman",
      abbrev: "Gentleman",
      works: "richard3",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "Gentleman-wt",
      charname: "Gentleman",
      abbrev: "Gentleman",
      works: "winterstale",
      descrip: "",
      speechcount: 5
  },
  {
      charid: "Gentlemen-r3",
      charname: "Gentlemen",
      abbrev: "GENTLEMEN",
      works: "richard3",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "gentlewoman-cor",
      charname: "Gentlewoman",
      abbrev: "Gentlewoman",
      works: "coriolanus",
      descrip: "attending on Virgilia",
      speechcount: 1
  },
  {
      charid: "gentlewoman-mac",
      charname: "Gentlewoman",
      abbrev: "Gentlewoman",
      works: "macbeth",
      descrip: "",
      speechcount: 11
  },
  {
      charid: "gents-ham",
      charname: "Gentlemen",
      abbrev: "Gentlemen",
      works: "hamlet",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "GeorgePlantagenet",
      charname: "George Plantagenet (Duke of Clarence)",
      abbrev: "GEORGE",
      works: "henry6p3,richard3",
      descrip: "",
      speechcount: 72
  },
  {
      charid: "gertrude",
      charname: "Gertrude",
      abbrev: "Queen",
      works: "hamlet",
      descrip: "Queen of Denmark and mother to Hamlet",
      speechcount: 70
  },
  {
      charid: "Girl-r3",
      charname: "Girl",
      abbrev: "Girl",
      works: "richard3",
      descrip: "",
      speechcount: 3
  },
  {
      charid: "glendower",
      charname: "Glendower",
      abbrev: "GLENDOWER",
      works: "henry4p1",
      descrip: "",
      speechcount: 23
  },
  {
      charid: "Gloucester-h5",
      charname: "Duke of Gloucester",
      abbrev: "GLOUCESTER",
      works: "henry5,henry6p1,henry6p2,richard3",
      descrip: "brother to the King",
      speechcount: 285
  },
  {
      charid: "gloucester-kl",
      charname: "Earl of Gloucester",
      abbrev: "Glou",
      works: "kinglear",
      descrip: "",
      speechcount: 118
  },
  {
      charid: "goneril",
      charname: "Goneril",
      abbrev: "Gon",
      works: "kinglear",
      descrip: "daughter to Lear",
      speechcount: 53
  },
  {
      charid: "Gonzalo",
      charname: "Gonzalo",
      abbrev: "GONZALO",
      works: "tempest",
      descrip: "an honest old counsellor",
      speechcount: 52
  },
  {
      charid: "GovHarfleur",
      charname: "Governor of Harfleur",
      abbrev: "GOVERNOR",
      works: "henry5",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "gower",
      charname: "Gower",
      abbrev: "GOWER",
      works: "henry4p2,henry5",
      descrip: "",
      speechcount: 31
  },
  {
      charid: "Gower-per",
      charname: "Gower",
      abbrev: "GOWER",
      works: "pericles",
      descrip: "as chorus",
      speechcount: 8
  },
  {
      charid: "Grandpre",
      charname: "Grandpre",
      abbrev: "GRANDPRE",
      works: "henry5",
      descrip: "French lord",
      speechcount: 1
  },
  {
      charid: "gratiano",
      charname: "Gratiano",
      abbrev: "GRATIANO",
      works: "othello",
      descrip: "Brother to Brabantio",
      speechcount: 20
  },
  {
      charid: "Gratiano-mv",
      charname: "Gratiano",
      abbrev: "GRATIANO",
      works: "merchantvenice",
      descrip: "friend to Antonio and Bassiano",
      speechcount: 48
  },
  {
      charid: "Green",
      charname: "Green",
      abbrev: "GREEN",
      works: "richard2",
      descrip: "servant to King Richard II",
      speechcount: 10
  },
  {
      charid: "gregory",
      charname: "Gregory",
      abbrev: "GREGORY",
      works: "romeojuliet",
      descrip: "Servant to Capulet",
      speechcount: 16
  },
  {
      charid: "gremio",
      charname: "Gremio",
      abbrev: "GREMIO",
      works: "tamingshrew",
      descrip: "",
      speechcount: 58
  },
  {
      charid: "grey",
      charname: "Sir Thomas Grey",
      abbrev: "GREY",
      works: "henry5",
      descrip: "",
      speechcount: 5
  },
  {
      charid: "Griffith",
      charname: "Griffith",
      abbrev: "GRIFFITH",
      works: "henry8",
      descrip: "gentleman-usher to Queen Katherine",
      speechcount: 13
  },
  {
      charid: "Groom",
      charname: "Groom",
      abbrev: "Groom",
      works: "richard2",
      descrip: "",
      speechcount: 4
  },
  {
      charid: "groom1",
      charname: "First Groom",
      abbrev: "FIRST GROOM",
      works: "henry4p2",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "groom2",
      charname: "Second Groom",
      abbrev: "SECOND GROOM",
      works: "henry4p2",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "groom3",
      charname: "Third Groom",
      abbrev: "THIRD GROOM",
      works: "henry4p2",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "grumio",
      charname: "Grumio",
      abbrev: "GRUMIO",
      works: "tamingshrew",
      descrip: "Petruchio's man",
      speechcount: 63
  },
  {
      charid: "Guard",
      charname: "Guard",
      abbrev: "Guard",
      works: "antonycleo",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "Guiderius",
      charname: "Guiderius",
      abbrev: "GUIDERIUS",
      works: "cymbeline",
      descrip: "son to Cymbeline, disguised under the name of Polydote, supposed son to Morgan",
      speechcount: 62
  },
  {
      charid: "guildenstern",
      charname: "Guildenstern",
      abbrev: "Guil",
      works: "hamlet",
      descrip: "courtier",
      speechcount: 29
  },
  {
      charid: "Guildford",
      charname: "Sir Henry Guildford",
      abbrev: "GUILDFORD",
      works: "henry8",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "Gurney",
      charname: "James Gurney",
      abbrev: "GURNEY",
      works: "kingjohn",
      descrip: "servant to Lady Faulconbridge",
      speechcount: 1
  },
  {
      charid: "haberdasher",
      charname: "Haberdasher",
      abbrev: "HABERDASHER",
      works: "tamingshrew",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "hamgent",
      charname: "Gentleman",
      abbrev: "Gent",
      works: "hamlet",
      descrip: "courtier",
      speechcount: 2
  },
  {
      charid: "hamghost",
      charname: "Father's Ghost",
      abbrev: "Ghost",
      works: "hamlet",
      descrip: "Ghost of Hamlet's Father",
      speechcount: 15
  },
  {
      charid: "hamlet",
      charname: "Hamlet",
      abbrev: "Ham",
      works: "hamlet",
      descrip: "son of the former king and nephew to the present king",
      speechcount: 358
  },
  {
      charid: "hampriest",
      charname: "Priest",
      abbrev: "Priest",
      works: "hamlet",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "harcourt",
      charname: "Harcourt",
      abbrev: "HARCOURT",
      works: "henry4p2",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "hastings",
      charname: "Lord Hastings",
      abbrev: "HASTINGS",
      works: "henry4p2",
      descrip: "",
      speechcount: 17
  },
  {
      charid: "hecate",
      charname: "Hecate",
      abbrev: "HECATE",
      works: "macbeth",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "Hector",
      charname: "Hector",
      abbrev: "HECTOR",
      works: "troilus",
      descrip: "son of Priam, king of Troy",
      speechcount: 57
  },
  {
      charid: "Helen",
      charname: "Helen",
      abbrev: "HELEN",
      works: "troilus",
      descrip: "wife to Menelaus",
      speechcount: 17
  },
  {
      charid: "HELENA",
      charname: "Helena",
      abbrev: "HELENA",
      works: "allswell",
      descrip: "a gentlewoman protected by the Countess",
      speechcount: 109
  },
  {
      charid: "Helena-mnd",
      charname: "Helena",
      abbrev: "HELENA",
      works: "midsummer",
      descrip: "in love with Demetrius",
      speechcount: 36
  },
  {
      charid: "Helen-cym",
      charname: "Helen",
      abbrev: "HELEN",
      works: "cymbeline",
      descrip: "a lady attending on Cymbeline",
      speechcount: 0
  },
  {
      charid: "Helenus",
      charname: "Helenus",
      abbrev: "HELENUS",
      works: "troilus",
      descrip: "son of Priam, king of Troy",
      speechcount: 1
  },
  {
      charid: "Helicanus",
      charname: "Helicanus",
      abbrev: "HELICANUS",
      works: "pericles",
      descrip: "a lord of Tyre",
      speechcount: 37
  },
  {
      charid: "henry4",
      charname: "Henry IV",
      abbrev: "KING HENRY IV",
      works: "richard2,henry4p1,henry4p2",
      descrip: "King of England",
      speechcount: 154
  },
  {
      charid: "henry5",
      charname: "Henry V",
      abbrev: "HENRY5",
      works: "henry4p1,henry4p2,henry5",
      descrip: "Prince, King of England",
      speechcount: 377
  },
  {
      charid: "Henry6",
      charname: "Henry VI",
      abbrev: "KING HENRY VI",
      works: "henry6p1,henry6p2,henry6p3,richard3",
      descrip: "",
      speechcount: 183
  },
  {
      charid: "Henry7",
      charname: "Richmond (Henry VII)",
      abbrev: "King Henry VII",
      works: "richard3",
      descrip: "Earl of Richmond, later Henry VII",
      speechcount: 14
  },
  {
      charid: "Henry8",
      charname: "Henry VIII",
      abbrev: "KING HENRY VIII",
      works: "henry8",
      descrip: "",
      speechcount: 81
  },
  {
      charid: "HenryBeaufort",
      charname: "Winchester",
      abbrev: "BISHOP OF WINCHESTER",
      works: "henry6p1,henry6p2",
      descrip: "Henry Beaufort, great-uncle to Henry V, bishop of Winchster, and later cardinal",
      speechcount: 58
  },
  {
      charid: "herald-cor",
      charname: "Herald",
      abbrev: "Herald",
      works: "coriolanus",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "herald-h5",
      charname: "Herald",
      abbrev: "Herald",
      works: "henry5",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "Herald-h62",
      charname: "Herald",
      abbrev: "Herald",
      works: "henry6p2",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "herald-kl",
      charname: "Herald",
      abbrev: "Her",
      works: "kinglear",
      descrip: "",
      speechcount: 4
  },
  {
      charid: "herald-oth",
      charname: "Herald",
      abbrev: "Herald",
      works: "othello",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "Hermia",
      charname: "Hermia",
      abbrev: "HERMIA",
      works: "midsummer",
      descrip: "daughter to Egeus, in love with Lysander",
      speechcount: 48
  },
  {
      charid: "Hermione",
      charname: "Hermione",
      abbrev: "HERMIONE",
      works: "winterstale",
      descrip: "queen to Leontes",
      speechcount: 35
  },
  {
      charid: "hero",
      charname: "Hero",
      abbrev: "HERO",
      works: "muchado",
      descrip: "Daughter to Leonato",
      speechcount: 44
  },
  {
      charid: "Hippolyta",
      charname: "Hippolyta",
      abbrev: "HIPPOLYTA",
      works: "midsummer",
      descrip: "queen of the Amazons, betrothed to Theseus",
      speechcount: 14
  },
  {
      charid: "Holofernes",
      charname: "Holofernes",
      abbrev: "HOLOFERNES",
      works: "loveslabours",
      descrip: "a schoolmaster",
      speechcount: 54
  },
  {
      charid: "horatio",
      charname: "Horatio",
      abbrev: "Hor",
      works: "hamlet",
      descrip: "friend to Hamlet",
      speechcount: 109
  },
  {
      charid: "hortensio",
      charname: "Hortensio",
      abbrev: "HORTENSIO",
      works: "tamingshrew",
      descrip: "",
      speechcount: 70
  },
  {
      charid: "Hortensius",
      charname: "Hortensius",
      abbrev: "HORTENSIUS",
      works: "timonathens",
      descrip: "",
      speechcount: 6
  },
  {
      charid: "Host",
      charname: "Host",
      abbrev: "Host",
      works: "twogents",
      descrip: "where Julia lodges",
      speechcount: 16
  },
  {
      charid: "hostess-ts",
      charname: "Hostess",
      abbrev: "HOSTESS",
      works: "tamingshrew",
      descrip: "",
      speechcount: 3
  },
  {
      charid: "hotspur",
      charname: "Hotspur (Henry Percy)",
      abbrev: "HOTSPUR",
      works: "richard2,henry4p1",
      descrip: "",
      speechcount: 114
  },
  {
      charid: "Hubert",
      charname: "Hubert de Burgh",
      abbrev: "HUBERT",
      works: "kingjohn",
      descrip: "",
      speechcount: 52
  },
  {
      charid: "Huntsman",
      charname: "Huntsman",
      abbrev: "Huntsman",
      works: "henry6p3",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "huntsman1",
      charname: "First Huntsman",
      abbrev: "FIRST HUNTSMAN",
      works: "tamingshrew",
      descrip: "",
      speechcount: 4
  },
  {
      charid: "huntsman2",
      charname: "Second Huntsman",
      abbrev: "SECOND HUNTSMAN",
      works: "tamingshrew",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "hymen",
      charname: "Hymen",
      abbrev: "HYMEN",
      works: "asyoulikeit",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "Iachimo",
      charname: "Iachimo",
      abbrev: "IACHIMO",
      works: "cymbeline",
      descrip: "friend to Philario, an Italian.",
      speechcount: 77
  },
  {
      charid: "iago",
      charname: "Iago",
      abbrev: "IAGO",
      works: "othello",
      descrip: "Othello's ancient (?)",
      speechcount: 272
  },
  {
      charid: "Imogen",
      charname: "Imogen",
      abbrev: "IMOGEN",
      works: "cymbeline",
      descrip: "daughter to Cymbeline by a former queen",
      speechcount: 118
  },
  {
      charid: "Iras",
      charname: "Iras",
      abbrev: "IRAS",
      works: "antonycleo",
      descrip: "attendant on Cleopatra",
      speechcount: 18
  },
  {
      charid: "Iris",
      charname: "Iris",
      abbrev: "IRIS",
      works: "tempest",
      descrip: "presented by spirits",
      speechcount: 4
  },
  {
      charid: "Isabel",
      charname: "Queen Isabel",
      abbrev: "QUEEN ISABEL",
      works: "henry5",
      descrip: "",
      speechcount: 5
  },
  {
      charid: "Isabella-m4m",
      charname: "Isabella",
      abbrev: "ISABELLA",
      works: "measure",
      descrip: "sister to Claudio",
      speechcount: 129
  },
  {
      charid: "JackCade",
      charname: "Jack Cade",
      abbrev: "CADE",
      works: "henry6p2",
      descrip: "a rebel",
      speechcount: 61
  },
  {
      charid: "Jamy",
      charname: "Jamy",
      abbrev: "JAMY",
      works: "henry5",
      descrip: "",
      speechcount: 4
  },
  {
      charid: "Jaquenetta",
      charname: "Jaquenetta",
      abbrev: "JAQUENETTA",
      works: "loveslabours",
      descrip: "a country wench",
      speechcount: 13
  },
  {
      charid: "jaques1",
      charname: "Jaques (lord)",
      abbrev: "JAQUES",
      works: "asyoulikeit",
      descrip: "the Duke's brother, and usurper of his dominions",
      speechcount: 57
  },
  {
      charid: "jaques2",
      charname: "Jaques (son)",
      abbrev: "JAQUES DE BOYS",
      works: "asyoulikeit",
      descrip: "the Duke's brother, and usurper of his dominions",
      speechcount: 2
  },
  {
      charid: "Jessica",
      charname: "Jessica",
      abbrev: "JESSICA",
      works: "merchantvenice",
      descrip: "daughter to Shylock",
      speechcount: 26
  },
  {
      charid: "Jeweller",
      charname: "Jeweller",
      abbrev: "Jeweller",
      works: "timonathens",
      descrip: "",
      speechcount: 4
  },
  {
      charid: "JoanPucelle",
      charname: "Joan la Pucelle",
      abbrev: "JOAN LA PUCELLE",
      works: "henry6p1",
      descrip: "commonly called Joan of Arc",
      speechcount: 46
  },
  {
      charid: "JohnGaunt",
      charname: "John of Gaunt",
      abbrev: "JOHN OF GAUNT",
      works: "richard2",
      descrip: "duke of Lancaster, uncle to the king",
      speechcount: 28
  },
  {
      charid: "JohnHolland",
      charname: "John Holland",
      abbrev: "HOLLAND",
      works: "henry6p2",
      descrip: "a follower of Cade",
      speechcount: 10
  },
  {
      charid: "JohnHume",
      charname: "Father John Hume",
      abbrev: "HUME",
      works: "henry6p2",
      descrip: "a priest",
      speechcount: 6
  },
  {
      charid: "JohnMorton",
      charname: "John Morton",
      abbrev: "BISHOP OF ELY",
      works: "richard3",
      descrip: "bishop of Ely",
      speechcount: 6
  },
  {
      charid: "JohnSouthwell",
      charname: "Father John Southwell",
      abbrev: "JOHN SOUTHWELL",
      works: "henry6p2",
      descrip: "a priest",
      speechcount: 0
  },
  {
      charid: "joseph-ts",
      charname: "Joseph",
      abbrev: "JOSEPH",
      works: "tamingshrew",
      descrip: "a servingman",
      speechcount: 1
  },
  {
      charid: "Jourdain",
      charname: "Margaret Jourdain",
      abbrev: "MARGARET JOURDAIN",
      works: "henry6p2",
      descrip: "a witch",
      speechcount: 1
  },
  {
      charid: "Julia-tg",
      charname: "Julia",
      abbrev: "JULIA",
      works: "twogents",
      descrip: "beloved of Proteus",
      speechcount: 107
  },
  {
      charid: "juliet",
      charname: "Juliet",
      abbrev: "JULIET",
      works: "romeojuliet",
      descrip: "Daughter to Capulet",
      speechcount: 118
  },
  {
      charid: "Juliet-m4m",
      charname: "Juliet",
      abbrev: "JULIET",
      works: "measure",
      descrip: "beloved of Claudio",
      speechcount: 7
  },
  {
      charid: "juliuscaesar",
      charname: "Caesar",
      abbrev: "CAESAR",
      works: "juliuscaesar",
      descrip: "(Julius Caesar)",
      speechcount: 42
  },
  {
      charid: "juniusbrutus",
      charname: "Junius Brutus",
      abbrev: "BRUTUS",
      works: "coriolanus",
      descrip: "tribune of the people",
      speechcount: 91
  },
  {
      charid: "Juno",
      charname: "Juno",
      abbrev: "JUNO",
      works: "tempest",
      descrip: "presented by spirits",
      speechcount: 2
  },
  {
      charid: "Jupiter",
      charname: "Jupiter",
      abbrev: "Jupiter",
      works: "cymbeline",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "Justice",
      charname: "Justice",
      abbrev: "Justice",
      works: "measure",
      descrip: "",
      speechcount: 3
  },
  {
      charid: "Katharine-h5",
      charname: "Katharine",
      abbrev: "KATHARINE",
      works: "henry5",
      descrip: "daughter to Charles and Isabel",
      speechcount: 33
  },
  {
      charid: "Katharine-iii",
      charname: "Katharine",
      abbrev: "KATHARINE",
      works: "loveslabours",
      descrip: "lady attending on the princess",
      speechcount: 25
  },
  {
      charid: "katherina",
      charname: "Katherina",
      abbrev: "KATHERINA",
      works: "tamingshrew",
      descrip: "the shrew",
      speechcount: 82
  },
  {
      charid: "Keeper",
      charname: "Keeper",
      abbrev: "Keeper",
      works: "richard2",
      descrip: "",
      speechcount: 4
  },
  {
      charid: "Keeper-h8",
      charname: "Keeper",
      abbrev: "Keeper",
      works: "henry8",
      descrip: "",
      speechcount: 5
  },
  {
      charid: "kingfrance-aw",
      charname: "King of France",
      abbrev: "KING",
      works: "allswell",
      descrip: "",
      speechcount: 87
  },
  {
      charid: "kingfrance-kl",
      charname: "King of France",
      abbrev: "France",
      works: "kinglear",
      descrip: "",
      speechcount: 5
  },
  {
      charid: "kingjohn",
      charname: "King John",
      abbrev: "KING JOHN",
      works: "kingjohn",
      descrip: "king of England",
      speechcount: 95
  },
  {
      charid: "KingPhilip",
      charname: "King Phillip",
      abbrev: "KING PHILIP",
      works: "kingjohn",
      descrip: "king of France",
      speechcount: 43
  },
  {
      charid: "knight-kl",
      charname: "Knight",
      abbrev: "Knight",
      works: "kinglear",
      descrip: "",
      speechcount: 5
  },
  {
      charid: "Knights",
      charname: "Knights",
      abbrev: "Knights",
      works: "pericles",
      descrip: "",
      speechcount: 3
  },
  {
      charid: "LadyAnne",
      charname: "Lady Anne",
      abbrev: "LADY ANNE",
      works: "richard3",
      descrip: "widow of Edward Prince of Wales, son to King Henry VI; afterwards married to Richard III",
      speechcount: 51
  },
  {
      charid: "ladycapulet",
      charname: "Lady Capulet",
      abbrev: "LADY CAPULET",
      works: "romeojuliet",
      descrip: "Wife to Capulet",
      speechcount: 45
  },
  {
      charid: "Lady-cym",
      charname: "Lady",
      abbrev: "Lady",
      works: "cymbeline",
      descrip: "",
      speechcount: 8
  },
  {
      charid: "LadyFaulconbridge",
      charname: "Lady Faulconbridge",
      abbrev: "LADY FAULCONBRIDGE",
      works: "kingjohn",
      descrip: "wife to Sir Robert Faulconbridge",
      speechcount: 5
  },
  {
      charid: "Lady-kr2",
      charname: "Lady",
      abbrev: "Lady",
      works: "richard2",
      descrip: "attending on the Queen",
      speechcount: 6
  },
  {
      charid: "ladymacbeth",
      charname: "Lady Macbeth",
      abbrev: "LADY MACBETH",
      works: "macbeth",
      descrip: "",
      speechcount: 59
  },
  {
      charid: "ladymacduff",
      charname: "Lady Macduff",
      abbrev: "LADY MACDUFF",
      works: "macbeth",
      descrip: "",
      speechcount: 19
  },
  {
      charid: "ladymontague",
      charname: "Lady Montague",
      abbrev: "LADY MONTAGUE",
      works: "romeojuliet",
      descrip: "Wife to Montague",
      speechcount: 2
  },
  {
      charid: "ladynorth",
      charname: "Lady Northumberland",
      abbrev: "LADY NORTHUMBERLAND",
      works: "henry4p2",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "ladypercy",
      charname: "Lady Percy",
      abbrev: "LADY PERCY",
      works: "henry4p1,henry4p2",
      descrip: "",
      speechcount: 18
  },
  {
      charid: "laertes",
      charname: "Laertes",
      abbrev: "Laer",
      works: "hamlet",
      descrip: "son to Polonius",
      speechcount: 62
  },
  {
      charid: "LAFEU",
      charname: "Lafeu",
      abbrev: "LAFEU",
      works: "allswell",
      descrip: "an old lord",
      speechcount: 97
  },
  {
      charid: "lartius",
      charname: "Titus Lartius",
      abbrev: "TITUS",
      works: "coriolanus",
      descrip: "general against the Volscians",
      speechcount: 23
  },
  {
      charid: "Launce",
      charname: "Launce",
      abbrev: "LAUNCE",
      works: "twogents",
      descrip: "the like to Proteus",
      speechcount: 68
  },
  {
      charid: "Launcelot",
      charname: "Launcelot Gobbo",
      abbrev: "LAUNCELOT",
      works: "merchantvenice",
      descrip: "the clown, servant to Shylock",
      speechcount: 44
  },
  {
      charid: "Lavinia",
      charname: "Lavinia",
      abbrev: "LAVINIA",
      works: "titus",
      descrip: "",
      speechcount: 15
  },
  {
      charid: "Lawyer",
      charname: "Lawyer",
      abbrev: "Lawyer",
      works: "henry6p1",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "lear",
      charname: "Lear",
      abbrev: "Lear",
      works: "kinglear",
      descrip: "King of Britain",
      speechcount: 188
  },
  {
      charid: "lebeau",
      charname: "Le Beau",
      abbrev: "LE BEAU",
      works: "asyoulikeit",
      descrip: "a courtier attending upon Frederick",
      speechcount: 14
  },
  {
      charid: "legate",
      charname: "Legate",
      abbrev: "Legate",
      works: "henry6p1",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "lennox",
      charname: "Lennox",
      abbrev: "LENNOX",
      works: "macbeth",
      descrip: "Nobleman of Scotland",
      speechcount: 21
  },
  {
      charid: "Leonardo",
      charname: "Leonardo",
      abbrev: "LEONARDO",
      works: "merchantvenice",
      descrip: "servant to Bassiano",
      speechcount: 2
  },
  {
      charid: "leonato",
      charname: "Leonato",
      abbrev: "LEONATO",
      works: "muchado",
      descrip: "Governor of Messina",
      speechcount: 120
  },
  {
      charid: "Leonatus",
      charname: "Sicilius Leonatus",
      abbrev: "Sicilius Leonatus",
      works: "cymbeline",
      descrip: "an apparition",
      speechcount: 7
  },
  {
      charid: "Leonine",
      charname: "Leonine",
      abbrev: "LEONINE",
      works: "pericles",
      descrip: "servant to Dionyza",
      speechcount: 12
  },
  {
      charid: "Leontes",
      charname: "Leontes",
      abbrev: "LEONTES",
      works: "winterstale",
      descrip: "king of Sicilia",
      speechcount: 125
  },
  {
      charid: "lepidus",
      charname: "Lepidus",
      abbrev: "LEPIDUS",
      works: "juliuscaesar,antonycleo",
      descrip: "(Marcus Antonius Lepidus)",
      speechcount: 33
  },
  {
      charid: "Lewis",
      charname: "Lewis",
      abbrev: "LEWIS",
      works: "kingjohn",
      descrip: "the Dauphin",
      speechcount: 29
  },
  {
      charid: "Lewis11",
      charname: "King Lewis XI",
      abbrev: "KING LEWIS XI",
      works: "henry6p3",
      descrip: "king of France",
      speechcount: 21
  },
  {
      charid: "lieutenant",
      charname: "Lieutenant",
      abbrev: "LIEUTENANT",
      works: "coriolanus",
      descrip: "to Aufidius",
      speechcount: 4
  },
  {
      charid: "Lieutenant-h62",
      charname: "Lieutenant",
      abbrev: "Lieutenant",
      works: "henry6p3",
      descrip: "of the Tower",
      speechcount: 1
  },
  {
      charid: "Ligarius",
      charname: "Ligarius",
      abbrev: "LIGARIUS",
      works: "juliuscaesar",
      descrip: "a conspirator against Caesar",
      speechcount: 5
  },
  {
      charid: "lodovico",
      charname: "Lodovico",
      abbrev: "LODOVICO",
      works: "othello",
      descrip: "Kinsman to Brabantio",
      speechcount: 33
  },
  {
      charid: "Longaville",
      charname: "Longaville",
      abbrev: "LONGAVILLE",
      works: "loveslabours",
      descrip: "lord attending on the king",
      speechcount: 40
  },
  {
      charid: "lord-ayli",
      charname: "Lord",
      abbrev: "LORD",
      works: "asyoulikeit",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "LordBerkeley",
      charname: "Lord Berkeley",
      abbrev: "LORD BERKELEY",
      works: "richard2",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "LordChamberlain",
      charname: "Lord Chamberlain",
      abbrev: "Chamberlain",
      works: "henry8",
      descrip: "",
      speechcount: 38
  },
  {
      charid: "LordChancellor",
      charname: "Lord Chancellor",
      abbrev: "Chancellor",
      works: "henry8",
      descrip: "",
      speechcount: 7
  },
  {
      charid: "LordClifford",
      charname: "Lord Clifford",
      abbrev: "CLIFFORD",
      works: "henry6p2,henry6p3",
      descrip: "",
      speechcount: 52
  },
  {
      charid: "Lord-cym",
      charname: "Lord",
      abbrev: "Lord",
      works: "cymbeline",
      descrip: "",
      speechcount: 6
  },
  {
      charid: "LordFitzwater",
      charname: "Lord Fitzwater",
      abbrev: "LORD FITZWATER",
      works: "richard2",
      descrip: "",
      speechcount: 6
  },
  {
      charid: "LordGrey",
      charname: "Lord Grey",
      abbrev: "GREY",
      works: "richard3",
      descrip: "son of Queen Elizabeth",
      speechcount: 6
  },
  {
      charid: "lord-ham",
      charname: "Lord",
      abbrev: "Lord",
      works: "hamlet",
      descrip: "",
      speechcount: 3
  },
  {
      charid: "LordHastings-63",
      charname: "Lord Hastings",
      abbrev: "HASTINGS",
      works: "henry6p3,richard3",
      descrip: "",
      speechcount: 56
  },
  {
      charid: "Lord-kr2",
      charname: "Lord",
      abbrev: "Lord",
      works: "richard2",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "LordLovel",
      charname: "Lord Lovel",
      abbrev: "LOVEL",
      works: "richard3",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "lord-ma",
      charname: "Lord",
      abbrev: "Lord",
      works: "muchado",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "lord-mac",
      charname: "Lord",
      abbrev: "Lord",
      works: "macbeth",
      descrip: "",
      speechcount: 3
  },
  {
      charid: "LordMarshal",
      charname: "Lord Marshal",
      abbrev: "LORD MARSHAL",
      works: "richard2",
      descrip: "",
      speechcount: 10
  },
  {
      charid: "Lord-per",
      charname: "Lord",
      abbrev: "Lord",
      works: "pericles",
      descrip: "",
      speechcount: 4
  },
  {
      charid: "LordRivers",
      charname: "Lord (Earl) Rivers",
      abbrev: "RIVERS",
      works: "henry6p3,richard3",
      descrip: "brother to Lady Gray (Queen Elizabeth)",
      speechcount: 29
  },
  {
      charid: "LordSands",
      charname: "Lord Sands",
      abbrev: "SANDS",
      works: "henry8",
      descrip: "",
      speechcount: 17
  },
  {
      charid: "LordSay",
      charname: "Lord Say",
      abbrev: "SAY",
      works: "henry6p2",
      descrip: "",
      speechcount: 13
  },
  {
      charid: "LordScales",
      charname: "Lord Scales",
      abbrev: "SCALES",
      works: "henry6p2",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "lordscroop",
      charname: "Lord Scroop",
      abbrev: "SCROOP",
      works: "henry5",
      descrip: "",
      speechcount: 5
  },
  {
      charid: "Lords-cym",
      charname: "Lords",
      abbrev: "Lords",
      works: "cymbeline",
      descrip: "",
      speechcount: 0
  },
  {
      charid: "lords-mac",
      charname: "Lords",
      abbrev: "Lords",
      works: "macbeth",
      descrip: "",
      speechcount: 3
  },
  {
      charid: "Lords-r3",
      charname: "Lords",
      abbrev: "LORDS",
      works: "richard3",
      descrip: "",
      speechcount: 3
  },
  {
      charid: "LordStafford",
      charname: "Lord Stafford",
      abbrev: "STAFFORD",
      works: "henry6p3",
      descrip: "",
      speechcount: 0
  },
  {
      charid: "Lords-wt",
      charname: "Lords",
      abbrev: "Lords",
      works: "winterstale",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "lord-ts",
      charname: "Lord",
      abbrev: "LORD",
      works: "tamingshrew",
      descrip: "",
      speechcount: 17
  },
  {
      charid: "LordWilloughby",
      charname: "Lord Willoughby",
      abbrev: "LORD WILLOUGHBY",
      works: "richard2",
      descrip: "",
      speechcount: 8
  },
  {
      charid: "Lord-wt",
      charname: "Lord",
      abbrev: "Lord",
      works: "winterstale",
      descrip: "",
      speechcount: 4
  },
  {
      charid: "Lorenzo",
      charname: "Lorenzo",
      abbrev: "LORENZO",
      works: "merchantvenice",
      descrip: "in love with Jessica",
      speechcount: 47
  },
  {
      charid: "Lovell",
      charname: "Sir Thomas Lovell",
      abbrev: "LOVELL",
      works: "henry8",
      descrip: "",
      speechcount: 21
  },
  {
      charid: "LUCE",
      charname: "Luce",
      abbrev: "LUCE",
      works: "comedyerrors",
      descrip: "servant to Adriana",
      speechcount: 7
  },
  {
      charid: "lucentio",
      charname: "Lucentio",
      abbrev: "LUCENTIO",
      works: "tamingshrew",
      descrip: "son to Vincentio, in love with Bianca",
      speechcount: 61
  },
  {
      charid: "Lucetta",
      charname: "Lucetta",
      abbrev: "LUCETTA",
      works: "twogents",
      descrip: "waiting-woman to Julia",
      speechcount: 48
  },
  {
      charid: "LUCIANA",
      charname: "Luciana",
      abbrev: "LUCIANA",
      works: "comedyerrors",
      descrip: "sister to Adriana",
      speechcount: 43
  },
  {
      charid: "lucianus",
      charname: "Lucianus",
      abbrev: "Luc",
      works: "hamlet",
      descrip: "",
      speechcount: 0
  },
  {
      charid: "Lucilius",
      charname: "Lucilius",
      abbrev: "LUCILIUS",
      works: "timonathens",
      descrip: "servant to Timon",
      speechcount: 13
  },
  {
      charid: "Lucilius-jc",
      charname: "Lucilius",
      abbrev: "LUCILIUS",
      works: "juliuscaesar",
      descrip: "friend to Brutus",
      speechcount: 10
  },
  {
      charid: "LuciliusServant",
      charname: "Lucilius' Servant",
      abbrev: "Lucilius' Servant",
      works: "timonathens",
      descrip: "",
      speechcount: 0
  },
  {
      charid: "Lucio",
      charname: "Lucio",
      abbrev: "LUCIO",
      works: "measure",
      descrip: "a fantastic",
      speechcount: 111
  },
  {
      charid: "Lucius",
      charname: "Lucius",
      abbrev: "LUCIUS",
      works: "titus",
      descrip: "son to Titus Andronicus",
      speechcount: 51
  },
  {
      charid: "Lucius-jc",
      charname: "Lucius",
      abbrev: "LUCIUS",
      works: "juliuscaesar",
      descrip: "servant to Brutus",
      speechcount: 24
  },
  {
      charid: "Lucius-tim",
      charname: "Lucius",
      abbrev: "LUCIUS",
      works: "timonathens",
      descrip: "flattering lord",
      speechcount: 0
  },
  {
      charid: "Lucullus",
      charname: "Lucullus",
      abbrev: "LUCULLUS",
      works: "timonathens",
      descrip: "flattering lord",
      speechcount: 6
  },
  {
      charid: "Lychorida",
      charname: "Lychorida",
      abbrev: "LYCHORIDA",
      works: "pericles",
      descrip: "nurse to Marina",
      speechcount: 4
  },
  {
      charid: "Lymoges",
      charname: "Lymoges",
      abbrev: "AUSTRIA",
      works: "kingjohn",
      descrip: "duke of Austria",
      speechcount: 16
  },
  {
      charid: "Lysander",
      charname: "Lysander",
      abbrev: "LYSANDER",
      works: "midsummer",
      descrip: "in love with Hermia",
      speechcount: 50
  },
  {
      charid: "Lysimachus",
      charname: "Lysimachus",
      abbrev: "LYSIMACHUS",
      works: "pericles",
      descrip: "governor of Mytilene",
      speechcount: 40
  },
  {
      charid: "macbeth",
      charname: "Macbeth",
      abbrev: "MACBETH",
      works: "macbeth",
      descrip: "General of the King's army",
      speechcount: 146
  },
  {
      charid: "macduff",
      charname: "Macduff",
      abbrev: "MACDUFF",
      works: "macbeth",
      descrip: "Nobleman of Scotland",
      speechcount: 59
  },
  {
      charid: "macmorris",
      charname: "Macmorris",
      abbrev: "MACMORRIS",
      works: "henry5",
      descrip: "",
      speechcount: 4
  },
  {
      charid: "malcolm",
      charname: "Malcolm",
      abbrev: "MALCOLM",
      works: "macbeth",
      descrip: "Son of Duncan",
      speechcount: 40
  },
  {
      charid: "MALVOLIO",
      charname: "Malvolio",
      abbrev: "MALVOLIO",
      works: "12night",
      descrip: "steward to Olivia",
      speechcount: 87
  },
  {
      charid: "Mamillius",
      charname: "Mamillius",
      abbrev: "MAMILLIUS",
      works: "winterstale",
      descrip: "young prince of Sicilia",
      speechcount: 13
  },
  {
      charid: "Man-h8",
      charname: "Man",
      abbrev: "Man",
      works: "henry8",
      descrip: "the Porter's man",
      speechcount: 6
  },
  {
      charid: "marcellus",
      charname: "Marcellus",
      abbrev: "Mar",
      works: "hamlet",
      descrip: "Officer",
      speechcount: 37
  },
  {
      charid: "MarcusAndronicus",
      charname: "Marcus Andronicus",
      abbrev: "MARCUS ANDRONICUS",
      works: "titus",
      descrip: "tribune of the people, and brother to Titus",
      speechcount: 63
  },
  {
      charid: "Mardian",
      charname: "Mardian",
      abbrev: "MARDIAN",
      works: "antonycleo",
      descrip: "a eunuch, attendant on Cleopatra",
      speechcount: 7
  },
  {
      charid: "Margarelon",
      charname: "Margarelon",
      abbrev: "MARGARELON",
      works: "troilus",
      descrip: "a bastard son of Priam",
      speechcount: 3
  },
  {
      charid: "margaret",
      charname: "Margaret",
      abbrev: "MARGARET",
      works: "muchado",
      descrip: "Gentlewoman attending on Hero",
      speechcount: 26
  },
  {
      charid: "Margaret-h61",
      charname: "Queen Margaret",
      abbrev: "Margaret",
      works: "henry6p1,henry6p2,henry6p3,richard3",
      descrip: "daughter to Reignier, afterwards married to King Henry VI",
      speechcount: 169
  },
  {
      charid: "MargaretPlantagenet",
      charname: "Margaret Plantagenet",
      abbrev: "MARGARET PLANTAGENET",
      works: "richard3",
      descrip: "a young daughter of Clarence",
      speechcount: 0
  },
  {
      charid: "MARIA",
      charname: "Maria",
      abbrev: "MARIA",
      works: "12night",
      descrip: "Olivia's woman",
      speechcount: 59
  },
  {
      charid: "Maria-lll",
      charname: "Maria",
      abbrev: "MARIA",
      works: "loveslabours",
      descrip: "lady attending on the princess",
      speechcount: 22
  },
  {
      charid: "MARIANA",
      charname: "Mariana",
      abbrev: "MARIANA",
      works: "allswell",
      descrip: "neighbor and friend to the widow",
      speechcount: 5
  },
  {
      charid: "Mariana-m4m",
      charname: "Mariana",
      abbrev: "MARIANA",
      works: "measure",
      descrip: "",
      speechcount: 24
  },
  {
      charid: "Marina",
      charname: "Marina",
      abbrev: "MARINA",
      works: "pericles",
      descrip: "daughter to Pericles and Thaisa",
      speechcount: 63
  },
  {
      charid: "Mariners",
      charname: "Mariners",
      abbrev: "Mariners",
      works: "tempest",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "Mariner-wt",
      charname: "Mariner",
      abbrev: "Mariner",
      works: "winterstale",
      descrip: "",
      speechcount: 3
  },
  {
      charid: "MarquessMontague",
      charname: "Marquess of Montague",
      abbrev: "MONTAGUE",
      works: "henry6p3",
      descrip: "",
      speechcount: 15
  },
  {
      charid: "MarquisDorset",
      charname: "Marquis of Dorset",
      abbrev: "DORSET",
      works: "richard3",
      descrip: "son of Queen Elizabeth",
      speechcount: 10
  },
  {
      charid: "Marshal",
      charname: "Marshal",
      abbrev: "Marshal",
      works: "pericles",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "martext",
      charname: "Sir Oliver Martext",
      abbrev: "MARTEXT",
      works: "asyoulikeit",
      descrip: "a vicar",
      speechcount: 3
  },
  {
      charid: "Martius",
      charname: "Martius",
      abbrev: "MARTIUS",
      works: "titus",
      descrip: "son to Titus Andronicus",
      speechcount: 10
  },
  {
      charid: "Marullus",
      charname: "Marullus",
      abbrev: "MARULLUS",
      works: "juliuscaesar",
      descrip: "a tribune",
      speechcount: 6
  },
  {
      charid: "Master",
      charname: "Master",
      abbrev: "Master",
      works: "henry6p2",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "Master-Gunner",
      charname: "Master-Gunner",
      abbrev: "Master-Gunner",
      works: "henry6p1",
      descrip: "of Orleans",
      speechcount: 2
  },
  {
      charid: "MasterShip",
      charname: "Master",
      abbrev: "Master",
      works: "tempest",
      descrip: "master of a ship",
      speechcount: 2
  },
  {
      charid: "MatthewGoffe",
      charname: "Matthew Goffe",
      abbrev: "MATTHEW GOFFE",
      works: "henry6p2",
      descrip: "",
      speechcount: 0
  },
  {
      charid: "MayorAlbans",
      charname: "Mayor of Saint Alban's",
      abbrev: "Mayor",
      works: "henry6p2",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "MayorLondon",
      charname: "Lord Mayor of London",
      abbrev: "Mayor",
      works: "henry6p1,richard3",
      descrip: "",
      speechcount: 14
  },
  {
      charid: "MayorYork",
      charname: "Mayor of York",
      abbrev: "Mayor",
      works: "henry6p3",
      descrip: "",
      speechcount: 3
  },
  {
      charid: "Mecaenas",
      charname: "Mecaenas",
      abbrev: "MECAENAS",
      works: "antonycleo",
      descrip: "friend to Caesar",
      speechcount: 16
  },
  {
      charid: "Melun",
      charname: "Melun",
      abbrev: "MELUN",
      works: "kingjohn",
      descrip: "a French Lord",
      speechcount: 3
  },
  {
      charid: "Menas",
      charname: "Menas",
      abbrev: "MENAS",
      works: "antonycleo",
      descrip: "friend to Caesar",
      speechcount: 35
  },
  {
      charid: "Menecrates",
      charname: "Menecrates",
      abbrev: "MENECRATES",
      works: "antonycleo",
      descrip: "friend to Pompey",
      speechcount: 2
  },
  {
      charid: "Menelaus",
      charname: "Menelaus",
      abbrev: "MENELAUS",
      works: "troilus",
      descrip: "Agamemnon's brother",
      speechcount: 11
  },
  {
      charid: "menenius",
      charname: "Menenius Agrippa",
      abbrev: "MENENIUS",
      works: "coriolanus",
      descrip: "friend to Coriolanus",
      speechcount: 162
  },
  {
      charid: "menteith",
      charname: "Menteith",
      abbrev: "MENTEITH",
      works: "macbeth",
      descrip: "Nobleman of Scotland",
      speechcount: 5
  },
  {
      charid: "Mercade",
      charname: "Mercade",
      abbrev: "MERCADE",
      works: "loveslabours",
      descrip: "lord attending on the princess of France",
      speechcount: 3
  },
  {
      charid: "Merchant",
      charname: "Merchant",
      abbrev: "Merchant",
      works: "timonathens",
      descrip: "",
      speechcount: 8
  },
  {
      charid: "mercutio",
      charname: "Mercutio",
      abbrev: "MERCUTIO",
      works: "romeojuliet",
      descrip: "Kinsman to Escalus the prince, and friend to Romeo",
      speechcount: 62
  },
  {
      charid: "Messala",
      charname: "Messala",
      abbrev: "MESSALA",
      works: "juliuscaesar",
      descrip: "friend to Brutus",
      speechcount: 20
  },
  {
      charid: "Messenger-ac",
      charname: "Messenger",
      abbrev: "Messenger",
      works: "antonycleo",
      descrip: "",
      speechcount: 42
  },
  {
      charid: "Messenger-cor",
      charname: "Messenger",
      abbrev: "Messenger",
      works: "coriolanus",
      descrip: "",
      speechcount: 12
  },
  {
      charid: "Messenger-cym",
      charname: "Messenger",
      abbrev: "Messenger",
      works: "cymbeline",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "Messenger-h41",
      charname: "Messenger",
      abbrev: "Messenger",
      works: "henry4p1",
      descrip: "",
      speechcount: 6
  },
  {
      charid: "messenger-h4p2",
      charname: "Messenger",
      abbrev: "MESSENGER",
      works: "henry4p2",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "Messenger-h5",
      charname: "Messenger",
      abbrev: "Messenger",
      works: "henry5",
      descrip: "",
      speechcount: 4
  },
  {
      charid: "Messenger-h61",
      charname: "Messenger",
      abbrev: "Messenger",
      works: "henry6p1",
      descrip: "",
      speechcount: 14
  },
  {
      charid: "Messenger-h62",
      charname: "Messenger",
      abbrev: "Messenger",
      works: "henry6p2",
      descrip: "",
      speechcount: 5
  },
  {
      charid: "Messenger-h63",
      charname: "Messenger",
      abbrev: "Messenger",
      works: "henry6p3",
      descrip: "",
      speechcount: 6
  },
  {
      charid: "Messenger-h8",
      charname: "Messenger",
      abbrev: "Messenger",
      works: "henry8",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "messenger-ham",
      charname: "Messenger",
      abbrev: "Mess",
      works: "hamlet",
      descrip: "",
      speechcount: 3
  },
  {
      charid: "Messenger-jc",
      charname: "Messenger",
      abbrev: "Messenger",
      works: "juliuscaesar",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "Messenger-kjo",
      charname: "Messenger",
      abbrev: "Messenger",
      works: "kingjohn",
      descrip: "",
      speechcount: 9
  },
  {
      charid: "messenger-kl",
      charname: "Messenger",
      abbrev: "Mess",
      works: "kinglear",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "Messenger-m4m",
      charname: "Messenger",
      abbrev: "Messenger",
      works: "measure",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "messenger-ma",
      charname: "Messenger",
      abbrev: "Messenger",
      works: "muchado",
      descrip: "",
      speechcount: 17
  },
  {
      charid: "messenger-mac",
      charname: "Messenger",
      abbrev: "Messenger",
      works: "macbeth",
      descrip: "",
      speechcount: 6
  },
  {
      charid: "messenger-oth",
      charname: "Messenger",
      abbrev: "Messenger",
      works: "othello",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "Messenger-per",
      charname: "Messenger",
      abbrev: "Messenger",
      works: "pericles",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "Messenger-r3",
      charname: "Messenger",
      abbrev: "Messenger",
      works: "richard3",
      descrip: "",
      speechcount: 13
  },
  {
      charid: "Messenger-ta",
      charname: "Messenger",
      abbrev: "Messenger",
      works: "titus",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "Messenger-tim",
      charname: "Messenger",
      abbrev: "Messenger",
      works: "timonathens",
      descrip: "",
      speechcount: 6
  },
  {
      charid: "messenger-ts",
      charname: "Messenger",
      abbrev: "MESSENGER",
      works: "tamingshrew",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "MetellusCimber",
      charname: "Metellus Cimber",
      abbrev: "Metellus Cimber",
      works: "juliuscaesar",
      descrip: "a conspirator against Caesar",
      speechcount: 5
  },
  {
      charid: "Michael",
      charname: "Michael",
      abbrev: "MICHAEL",
      works: "henry6p2",
      descrip: "a follower of Cade",
      speechcount: 3
  },
  {
      charid: "Miranda",
      charname: "Miranda",
      abbrev: "MIRANDA",
      works: "tempest",
      descrip: "daughter to Prospero",
      speechcount: 49
  },
  {
      charid: "mistressford",
      charname: "Mistress Ford",
      abbrev: "MISTRESS FORD",
      works: "merrywives",
      descrip: "",
      speechcount: 85
  },
  {
      charid: "MistressOverdone",
      charname: "Mistress Overdone",
      abbrev: "MISTRESS OVERDONE",
      works: "measure",
      descrip: "a bawd",
      speechcount: 15
  },
  {
      charid: "mistresspage",
      charname: "Mistress Page",
      abbrev: "MISTRESS PAGE",
      works: "merrywives",
      descrip: "",
      speechcount: 101
  },
  {
      charid: "montague",
      charname: "Montague",
      abbrev: "MONTAGUE",
      works: "romeojuliet",
      descrip: "Head of the house of Montague",
      speechcount: 10
  },
  {
      charid: "montano",
      charname: "Montano",
      abbrev: "MONTANO",
      works: "othello",
      descrip: "Othello's predecessor in the government of Cyprus",
      speechcount: 24
  },
  {
      charid: "Montjoy",
      charname: "Montjoy",
      abbrev: "MONTJOY",
      works: "henry5",
      descrip: "a French herald",
      speechcount: 11
  },
  {
      charid: "Mopsa",
      charname: "Mopsa",
      abbrev: "MOPSA",
      works: "winterstale",
      descrip: "a shepherdess",
      speechcount: 13
  },
  {
      charid: "mortimer",
      charname: "Mortimer",
      abbrev: "MORTIMER",
      works: "henry4p1",
      descrip: "Earl of March",
      speechcount: 13
  },
  {
      charid: "morton",
      charname: "Morton",
      abbrev: "MORTON",
      works: "henry4p2",
      descrip: "retainer of Northumberland",
      speechcount: 6
  },
  {
      charid: "Moth",
      charname: "Moth",
      abbrev: "MOTH",
      works: "loveslabours",
      descrip: "page to Armado",
      speechcount: 78
  },
  {
      charid: "Mother",
      charname: "Mother",
      abbrev: "Mother",
      works: "cymbeline",
      descrip: "an apparition",
      speechcount: 3
  },
  {
      charid: "Moth-mnd",
      charname: "Moth",
      abbrev: "MOTH",
      works: "midsummer",
      descrip: "a fairy",
      speechcount: 2
  },
  {
      charid: "mouldy",
      charname: "Ralph Mouldy",
      abbrev: "MOULDY",
      works: "henry4p2",
      descrip: "country soldier",
      speechcount: 5
  },
  {
      charid: "mowbray",
      charname: "Lord Mowbray",
      abbrev: "MOWBRAY",
      works: "henry4p2",
      descrip: "",
      speechcount: 18
  },
  {
      charid: "Mustardseed",
      charname: "Mustardseed",
      abbrev: "MUSTARDSEED",
      works: "midsummer",
      descrip: "a fairy",
      speechcount: 5
  },
  {
      charid: "Mutius",
      charname: "Mutius",
      abbrev: "MUTIUS",
      works: "titus",
      descrip: "son to Titus Andronicus",
      speechcount: 3
  },
  {
      charid: "Myrmidons",
      charname: "Myrmidons",
      abbrev: "MYRMIDONS",
      works: "troilus",
      descrip: "soldiers of Achilles in the Trojan war",
      speechcount: 1
  },
  {
      charid: "nathaniel-ts",
      charname: "Nathaniel",
      abbrev: "NATHANIEL",
      works: "tamingshrew",
      descrip: "a servingman",
      speechcount: 4
  },
  {
      charid: "Nerissa",
      charname: "Nerissa",
      abbrev: "NERISSA",
      works: "merchantvenice",
      descrip: "Portia's maid-in-waiting",
      speechcount: 36
  },
  {
      charid: "Nestor",
      charname: "Nestor",
      abbrev: "NESTOR",
      works: "troilus",
      descrip: "a Greek prince",
      speechcount: 38
  },
  {
      charid: "nicholas-ts",
      charname: "Nicholas",
      abbrev: "NICHOLAS",
      works: "tamingshrew",
      descrip: "a servingman",
      speechcount: 1
  },
  {
      charid: "Nobleman-h63",
      charname: "Nobleman",
      abbrev: "Nobleman",
      works: "henry6p3",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "norcapt",
      charname: "Norwegian Captain",
      abbrev: "Capt",
      works: "hamlet",
      descrip: "",
      speechcount: 7
  },
  {
      charid: "nurse-rj",
      charname: "Nurse",
      abbrev: "Nurse",
      works: "romeojuliet",
      descrip: "Nurse to Juliet",
      speechcount: 90
  },
  {
      charid: "Nurse-ta",
      charname: "Nurse",
      abbrev: "Nurse",
      works: "titus",
      descrip: "",
      speechcount: 10
  },
  {
      charid: "nym",
      charname: "Nym",
      abbrev: "NYM",
      works: "henry5,merrywives",
      descrip: "sharper attending on Falstaff",
      speechcount: 33
  },
  {
      charid: "Nymphs",
      charname: "Nymphs",
      abbrev: "Nymphs",
      works: "tempest",
      descrip: "presented by spirits",
      speechcount: 0
  },
  {
      charid: "Oberon",
      charname: "Oberon",
      abbrev: "OBERON",
      works: "midsummer",
      descrip: "king of the fairies",
      speechcount: 29
  },
  {
      charid: "Octavia",
      charname: "Octavia",
      abbrev: "OCTAVIA",
      works: "antonycleo",
      descrip: "sister to Caesar and wife to Antony",
      speechcount: 13
  },
  {
      charid: "octavius",
      charname: "Octavius",
      abbrev: "OCTAVIUS",
      works: "juliuscaesar,antonycleo",
      descrip: "(Octavius Caesar)",
      speechcount: 117
  },
  {
      charid: "Officer-ce",
      charname: "Officer",
      abbrev: "Officer",
      works: "comedyerrors",
      descrip: "",
      speechcount: 11
  },
  {
      charid: "Officer-cor",
      charname: "Officer",
      abbrev: "Officer",
      works: "coriolanus",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "Officer-h61",
      charname: "Officer",
      abbrev: "Officer",
      works: "henry6p1",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "Officer-wt",
      charname: "Officer",
      abbrev: "Officer",
      works: "winterstale",
      descrip: "",
      speechcount: 5
  },
  {
      charid: "OldAthenian",
      charname: "Old Athenian",
      abbrev: "Old Athenian",
      works: "timonathens",
      descrip: "",
      speechcount: 10
  },
  {
      charid: "OldGobbo",
      charname: "Old Gobbo",
      abbrev: "GOBBO",
      works: "merchantvenice",
      descrip: "father to Launcelot",
      speechcount: 19
  },
  {
      charid: "OldLady-h8",
      charname: "Old Lady",
      abbrev: "Old Lady",
      works: "henry8",
      descrip: "friend to Anne Bullen",
      speechcount: 14
  },
  {
      charid: "oldman-kl",
      charname: "Old Man",
      abbrev: "Old Man",
      works: "kinglear",
      descrip: "tenant to Glouchester",
      speechcount: 9
  },
  {
      charid: "oldman-mac",
      charname: "Old Man",
      abbrev: "Old Man",
      works: "macbeth",
      descrip: "",
      speechcount: 4
  },
  {
      charid: "OldShepherd",
      charname: "Old Shepherd",
      abbrev: "Shepherd",
      works: "winterstale",
      descrip: "reputed father of Perdita",
      speechcount: 42
  },
  {
      charid: "oliver",
      charname: "Oliver",
      abbrev: "OLIVER",
      works: "asyoulikeit",
      descrip: "son of Sir Rowland de Boys",
      speechcount: 37
  },
  {
      charid: "OLIVIA",
      charname: "Olivia",
      abbrev: "OLIVIA",
      works: "12night",
      descrip: "",
      speechcount: 118
  },
  {
      charid: "ophelia",
      charname: "Ophelia",
      abbrev: "Oph",
      works: "hamlet",
      descrip: "daughter to Polonius",
      speechcount: 58
  },
  {
      charid: "orlando",
      charname: "Orlando",
      abbrev: "ORLANDO",
      works: "asyoulikeit",
      descrip: "son of Sir Rowland de Boys",
      speechcount: 120
  },
  {
      charid: "orleans",
      charname: "Duke of Orleans",
      abbrev: "ORLEANS",
      works: "henry5",
      descrip: "",
      speechcount: 29
  },
  {
      charid: "ORSINO",
      charname: "Orsino",
      abbrev: "DUKE ORSINO",
      works: "12night",
      descrip: "Duke of Illyria",
      speechcount: 59
  },
  {
      charid: "osric",
      charname: "Osric",
      abbrev: "Osr",
      works: "hamlet",
      descrip: "courtier",
      speechcount: 25
  },
  {
      charid: "Ostler",
      charname: "Ostler",
      abbrev: "Ostler",
      works: "henry4p1",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "oswald",
      charname: "Oswald",
      abbrev: "Osw",
      works: "kinglear",
      descrip: "steward to Goneril",
      speechcount: 38
  },
  {
      charid: "othello",
      charname: "Othello",
      abbrev: "OTHELLO",
      works: "othello",
      descrip: "A noble Moor in the service of the Ventian state",
      speechcount: 274
  },
  {
      charid: "Outlaws",
      charname: "Outlaws",
      abbrev: "Outlaws",
      works: "twogents",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "page1-ayli",
      charname: "First Page",
      abbrev: "FIRST PAGE",
      works: "asyoulikeit",
      descrip: "",
      speechcount: 3
  },
  {
      charid: "page2-ayli",
      charname: "Second Page",
      abbrev: "SECOND PAGE",
      works: "asyoulikeit",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "Page-aw",
      charname: "Page",
      abbrev: "Page",
      works: "allswell",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "page-h4p2",
      charname: "Page",
      abbrev: "PAGE",
      works: "henry4p2",
      descrip: "to Falstaff",
      speechcount: 17
  },
  {
      charid: "Page-h8",
      charname: "Page",
      abbrev: "Boy",
      works: "henry8",
      descrip: "a page to Gardiner",
      speechcount: 1
  },
  {
      charid: "page-mww",
      charname: "Page",
      abbrev: "PAGE",
      works: "merrywives",
      descrip: "a gentleman dwelling at Windsor",
      speechcount: 75
  },
  {
      charid: "Page-r3",
      charname: "Page",
      abbrev: "Page",
      works: "richard3",
      descrip: "",
      speechcount: 3
  },
  {
      charid: "page-rj",
      charname: "Page",
      abbrev: "PAGE",
      works: "romeojuliet",
      descrip: "Page to Paris",
      speechcount: 4
  },
  {
      charid: "Page-tim",
      charname: "Page",
      abbrev: "Page",
      works: "timonathens",
      descrip: "",
      speechcount: 4
  },
  {
      charid: "page-ts",
      charname: "Page",
      abbrev: "PAGE",
      works: "tamingshrew",
      descrip: "",
      speechcount: 8
  },
  {
      charid: "Painter",
      charname: "Painter",
      abbrev: "Painter",
      works: "timonathens",
      descrip: "",
      speechcount: 30
  },
  {
      charid: "Pandar",
      charname: "Pandar",
      abbrev: "Pandar",
      works: "pericles",
      descrip: "",
      speechcount: 10
  },
  {
      charid: "Pandarus",
      charname: "Pandarus",
      abbrev: "PANDARUS",
      works: "troilus",
      descrip: "uncle to Cressida",
      speechcount: 153
  },
  {
      charid: "Panthino",
      charname: "Panthino",
      abbrev: "PANTHINO",
      works: "twogents",
      descrip: "servant to Antonio",
      speechcount: 14
  },
  {
      charid: "paris",
      charname: "Paris",
      abbrev: "PARIS",
      works: "romeojuliet",
      descrip: "A young nobleman, kinsman to Escalus the prince",
      speechcount: 23
  },
  {
      charid: "Paris-tc",
      charname: "Paris",
      abbrev: "PARIS",
      works: "troilus",
      descrip: "son of Priam, king of Troy",
      speechcount: 27
  },
  {
      charid: "PAROLLES",
      charname: "Parolles",
      abbrev: "PAROLLES",
      works: "allswell",
      descrip: "a follower of Bertram",
      speechcount: 141
  },
  {
      charid: "Patience",
      charname: "Patience",
      abbrev: "PATIENCE",
      works: "henry8",
      descrip: "woman to Queen Katharine",
      speechcount: 3
  },
  {
      charid: "patrician",
      charname: "Patrician",
      abbrev: "A Patrician",
      works: "coriolanus",
      descrip: "",
      speechcount: 3
  },
  {
      charid: "Patroclus",
      charname: "Patroclus",
      abbrev: "PATROCLUS",
      works: "troilus",
      descrip: "a Greek prince",
      speechcount: 37
  },
  {
      charid: "Paulina",
      charname: "Paulina",
      abbrev: "PAULINA",
      works: "winterstale",
      descrip: "wife to Antigonus",
      speechcount: 59
  },
  {
      charid: "Peaseblossom",
      charname: "Peaseblossom",
      abbrev: "PEASEBLOSSOM",
      works: "midsummer",
      descrip: "a fairy",
      speechcount: 4
  },
  {
      charid: "pedant",
      charname: "Pedant",
      abbrev: "PEDANT",
      works: "tamingshrew",
      descrip: "",
      speechcount: 20
  },
  {
      charid: "Pembroke",
      charname: "Pembroke",
      abbrev: "PEMBROKE",
      works: "kingjohn",
      descrip: "earl of Pembroke",
      speechcount: 20
  },
  {
      charid: "Pembroke-h63",
      charname: "Earl of Pembroke",
      abbrev: "PEMBROKE",
      works: "henry6p3",
      descrip: "",
      speechcount: 0
  },
  {
      charid: "Perdita",
      charname: "Perdita",
      abbrev: "PERDITA",
      works: "winterstale",
      descrip: "daughter to Leontes and Hermione",
      speechcount: 25
  },
  {
      charid: "Pericles",
      charname: "Pericles",
      abbrev: "PERICLES",
      works: "pericles",
      descrip: "prince of Tyre",
      speechcount: 121
  },
  {
      charid: "Peter-h62",
      charname: "Peter",
      abbrev: "PETER",
      works: "henry6p2",
      descrip: "Thomas Horner's man",
      speechcount: 9
  },
  {
      charid: "PeterPomfret",
      charname: "Peter of Pomfret",
      abbrev: "PETER",
      works: "kingjohn",
      descrip: "a prophet",
      speechcount: 1
  },
  {
      charid: "peter-rj",
      charname: "Peter",
      abbrev: "PETER",
      works: "romeojuliet",
      descrip: "Servant to Julet's nurse",
      speechcount: 13
  },
  {
      charid: "peter-ts",
      charname: "Peter",
      abbrev: "PETER",
      works: "tamingshrew",
      descrip: "a servingman",
      speechcount: 2
  },
  {
      charid: "peto",
      charname: "Peto",
      abbrev: "PETO",
      works: "henry4p1,henry4p2",
      descrip: "",
      speechcount: 8
  },
  {
      charid: "petruchio",
      charname: "Petruchio",
      abbrev: "PETRUCHIO",
      works: "tamingshrew",
      descrip: "a gentleman of Verona, a suitor to Katherina",
      speechcount: 158
  },
  {
      charid: "phebe",
      charname: "Phebe",
      abbrev: "PHEBE",
      works: "asyoulikeit",
      descrip: "a shepherdess",
      speechcount: 23
  },
  {
      charid: "Philario",
      charname: "Philario",
      abbrev: "PHILARIO",
      works: "cymbeline",
      descrip: "friend to Posthumus, an Italian.",
      speechcount: 14
  },
  {
      charid: "Philemon",
      charname: "Philemon",
      abbrev: "PHILEMON",
      works: "pericles",
      descrip: "servant to Cerimon",
      speechcount: 1
  },
  {
      charid: "PhilipBastard",
      charname: "Philip the Bastard",
      abbrev: "BASTARD",
      works: "kingjohn",
      descrip: "illegitimate son of Sir Robert Faulconbridge",
      speechcount: 89
  },
  {
      charid: "philip-ts",
      charname: "Philip",
      abbrev: "PHILIP",
      works: "tamingshrew",
      descrip: "a servingman",
      speechcount: 1
  },
  {
      charid: "Philo",
      charname: "Philo",
      abbrev: "PHILO",
      works: "antonycleo",
      descrip: "friend to Antony",
      speechcount: 2
  },
  {
      charid: "Philostrate",
      charname: "Philostrate",
      abbrev: "PHILOSTRATE",
      works: "midsummer",
      descrip: "master of the revels to Theseus",
      speechcount: 6
  },
  {
      charid: "Philotus",
      charname: "Philotus",
      abbrev: "PHILOTUS",
      works: "timonathens",
      descrip: "servant to Timon's creditors",
      speechcount: 6
  },
  {
      charid: "Phrynia",
      charname: "Phrynia",
      abbrev: "PHRYNIA",
      works: "timonathens",
      descrip: "mistress to Alcibiades",
      speechcount: 4
  },
  {
      charid: "PINCH",
      charname: "Pinch",
      abbrev: "PINCH",
      works: "comedyerrors",
      descrip: "a schoolmaster",
      speechcount: 6
  },
  {
      charid: "Pindarus",
      charname: "Pindarus",
      abbrev: "PINDARUS",
      works: "juliuscaesar",
      descrip: "servant to Cassius",
      speechcount: 5
  },
  {
      charid: "Pisanio",
      charname: "Pisanio",
      abbrev: "PISANIO",
      works: "cymbeline",
      descrip: "servant to Posthumus",
      speechcount: 58
  },
  {
      charid: "pistol",
      charname: "Pistol",
      abbrev: "PISTOL",
      works: "henry4p2,henry5,merrywives",
      descrip: "",
      speechcount: 122
  },
  {
      charid: "PlayerKing",
      charname: "Player King",
      abbrev: "PlayerKing",
      works: "hamlet",
      descrip: "",
      speechcount: 4
  },
  {
      charid: "PlayerQueen",
      charname: "Player Queen",
      abbrev: "PlayerQueen",
      works: "hamlet",
      descrip: "",
      speechcount: 4
  },
  {
      charid: "players-ts",
      charname: "Players",
      abbrev: "PLAYERS",
      works: "tamingshrew",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "player-ts",
      charname: "Player",
      abbrev: "PLAYER",
      works: "tamingshrew",
      descrip: "",
      speechcount: 3
  },
  {
      charid: "Poet-jc",
      charname: "Poet",
      abbrev: "Poet",
      works: "juliuscaesar",
      descrip: "",
      speechcount: 3
  },
  {
      charid: "Poet-tim",
      charname: "Poet",
      abbrev: "Poet",
      works: "timonathens",
      descrip: "",
      speechcount: 30
  },
  {
      charid: "poins",
      charname: "Edward Poins",
      abbrev: "POINS",
      works: "henry4p1,henry4p2",
      descrip: "",
      speechcount: 64
  },
  {
      charid: "Polixenes",
      charname: "Polixenes",
      abbrev: "POLIXENES",
      works: "winterstale",
      descrip: "king of Bohemia",
      speechcount: 57
  },
  {
      charid: "polonius",
      charname: "Polonius",
      abbrev: "Pol",
      works: "hamlet",
      descrip: "Lord Chamberlain",
      speechcount: 86
  },
  {
      charid: "Pompey",
      charname: "Pompey",
      abbrev: "POMPEY",
      works: "antonycleo",
      descrip: "(Sextus Pompeius)",
      speechcount: 41
  },
  {
      charid: "Pompey-m4m",
      charname: "Pompey",
      abbrev: "POMPEY",
      works: "measure",
      descrip: "servant to Mistress Overdone",
      speechcount: 60
  },
  {
      charid: "Popilius",
      charname: "Popilius",
      abbrev: "POPILIUS",
      works: "juliuscaesar",
      descrip: "(Popilius Lena)",
      speechcount: 2
  },
  {
      charid: "porter",
      charname: "Porter",
      abbrev: "PORTER",
      works: "henry4p2",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "Porter-h61",
      charname: "Porter",
      abbrev: "Porter",
      works: "henry6p1",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "Porter-h8",
      charname: "Porter",
      abbrev: "Porter",
      works: "henry8",
      descrip: "door-keeper of the Council-chamber",
      speechcount: 10
  },
  {
      charid: "porter-mac",
      charname: "Porter",
      abbrev: "Porter",
      works: "macbeth",
      descrip: "",
      speechcount: 4
  },
  {
      charid: "Portia",
      charname: "Portia",
      abbrev: "PORTIA",
      works: "juliuscaesar",
      descrip: "wife to Brutus",
      speechcount: 16
  },
  {
      charid: "Portia-mv",
      charname: "Portia",
      abbrev: "PORTIA",
      works: "merchantvenice",
      descrip: "a rich heiress",
      speechcount: 117
  },
  {
      charid: "Post-h62",
      charname: "Post",
      abbrev: "Post",
      works: "henry6p2",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "Post-h63",
      charname: "Post",
      abbrev: "Post",
      works: "henry6p3",
      descrip: "",
      speechcount: 9
  },
  {
      charid: "PosthumusLeonatus",
      charname: "Posthumus Leonatus",
      abbrev: "POSTHUMUS LEONATUS",
      works: "cymbeline",
      descrip: "a gentleman, husband to Imogen",
      speechcount: 77
  },
  {
      charid: "Priam",
      charname: "Priam",
      abbrev: "PRIAM",
      works: "troilus",
      descrip: "king of Troy",
      speechcount: 6
  },
  {
      charid: "Priest-12",
      charname: "Priest",
      abbrev: "Priest",
      works: "12night",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "Priest-r3",
      charname: "Priest",
      abbrev: "Priest",
      works: "richard3",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "PrinceArragon",
      charname: "Prince of Arragon",
      abbrev: "ARRAGON",
      works: "merchantvenice",
      descrip: "suitor to Portia",
      speechcount: 4
  },
  {
      charid: "PrinceEdward",
      charname: "Prince Edward",
      abbrev: "PRINCE EDWARD",
      works: "henry6p3,richard3",
      descrip: "",
      speechcount: 35
  },
  {
      charid: "PrinceHenry",
      charname: "Prince Henry",
      abbrev: "PRINCE HENRY",
      works: "kingjohn",
      descrip: "son to King John",
      speechcount: 8
  },
  {
      charid: "princehumphrey",
      charname: "Prince Humphrey",
      abbrev: "PRINCE HUMPHREY",
      works: "henry4p2",
      descrip: "of Goucester",
      speechcount: 11
  },
  {
      charid: "princejohn",
      charname: "Prince John",
      abbrev: "LANCASTER",
      works: "henry4p1,henry4p2",
      descrip: "of Lancaster",
      speechcount: 31
  },
  {
      charid: "PrinceMorocco",
      charname: "Prince of Morocco",
      abbrev: "MOROCCO",
      works: "merchantvenice",
      descrip: "suitor to Portia",
      speechcount: 7
  },
  {
      charid: "Princes-r3",
      charname: "Princes",
      abbrev: "Princes",
      works: "richard3",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "PrincessFrance",
      charname: "Princess of France",
      abbrev: "PRINCESS",
      works: "loveslabours",
      descrip: "",
      speechcount: 102
  },
  {
      charid: "Proculeius",
      charname: "Proculeius",
      abbrev: "PROCULEIUS",
      works: "antonycleo",
      descrip: "friend to Caesar",
      speechcount: 10
  },
  {
      charid: "Prospero",
      charname: "Prospero",
      abbrev: "PROSPERO",
      works: "tempest",
      descrip: "the rightful Duke of Milan",
      speechcount: 115
  },
  {
      charid: "Proteus",
      charname: "Proteus",
      abbrev: "PROTEUS",
      works: "twogents",
      descrip: "a gentleman",
      speechcount: 147
  },
  {
      charid: "Provost",
      charname: "Provost",
      abbrev: "Provost",
      works: "measure",
      descrip: "",
      speechcount: 65
  },
  {
      charid: "Publius",
      charname: "Publius",
      abbrev: "PUBLIUS",
      works: "titus",
      descrip: "son to Marcus the Tribune",
      speechcount: 5
  },
  {
      charid: "publius-jc",
      charname: "Publius",
      abbrev: "PUBLIUS",
      works: "juliuscaesar",
      descrip: "Senator",
      speechcount: 2
  },
  {
      charid: "Puck",
      charname: "Puck",
      abbrev: "PUCK",
      works: "midsummer",
      descrip: "or Robin Goodfellow",
      speechcount: 33
  },
  {
      charid: "Pursuivant",
      charname: "Pursuivant",
      abbrev: "Pursuivant",
      works: "richard3",
      descrip: "",
      speechcount: 3
  },
  {
      charid: "Queen-cym",
      charname: "Queen",
      abbrev: "QUEEN",
      works: "cymbeline",
      descrip: "wife to Cymbeline",
      speechcount: 27
  },
  {
      charid: "QueenElinor",
      charname: "Queen Elinor",
      abbrev: "QUEEN ELINOR",
      works: "kingjohn",
      descrip: "mother to King John",
      speechcount: 22
  },
  {
      charid: "QueenElizabeth",
      charname: "Queen Elizabeth",
      abbrev: "QUEEN ELIZABETH",
      works: "henry6p3,richard3",
      descrip: "starts as Lady Grey, marries Edward IV",
      speechcount: 129
  },
  {
      charid: "QueenKatharine",
      charname: "Queen Katharine",
      abbrev: "QUEEN KATHARINE",
      works: "henry8",
      descrip: "wife to King Henry, afterwards divorced",
      speechcount: 50
  },
  {
      charid: "Queen-kr2",
      charname: "Queen",
      abbrev: "QUEEN",
      works: "richard2",
      descrip: "",
      speechcount: 25
  },
  {
      charid: "quickly",
      charname: "Hostess Quickly",
      abbrev: "HOSTESS",
      works: "henry4p1,henry4p2,henry5,merrywives",
      descrip: "hostess of a tavern in Eastcheap",
      speechcount: 158
  },
  {
      charid: "Quince",
      charname: "Quince",
      abbrev: "QUINCE",
      works: "midsummer",
      descrip: "a carpenter",
      speechcount: 40
  },
  {
      charid: "Quintus",
      charname: "Quintus",
      abbrev: "QUINTUS",
      works: "titus",
      descrip: "son to Titus Andronicus",
      speechcount: 11
  },
  {
      charid: "Rambures",
      charname: "Rambures",
      abbrev: "RAMBURES",
      works: "henry5",
      descrip: "French lord",
      speechcount: 5
  },
  {
      charid: "Reapers",
      charname: "Reapers",
      abbrev: "Reapers",
      works: "tempest",
      descrip: "presented by spirits",
      speechcount: 0
  },
  {
      charid: "regan",
      charname: "Regan",
      abbrev: "Reg",
      works: "kinglear",
      descrip: "daughter to Lear",
      speechcount: 73
  },
  {
      charid: "Reignier",
      charname: "Reignier",
      abbrev: "REIGNIER",
      works: "henry6p1",
      descrip: "duke of Anjou, and titular king of Naples",
      speechcount: 24
  },
  {
      charid: "reynaldo",
      charname: "Reynaldo",
      abbrev: "Rey",
      works: "hamlet",
      descrip: "servant to Polonius",
      speechcount: 13
  },
  {
      charid: "Richard2",
      charname: "King Richard II",
      abbrev: "KING RICHARD II",
      works: "richard2",
      descrip: "king of England",
      speechcount: 98
  },
  {
      charid: "Richard3",
      charname: "Richard III",
      abbrev: "RICHARD3",
      works: "henry6p3,richard3",
      descrip: "son of Richard Plantagenet, duke of York; was duke of Gloucester before enthronement",
      speechcount: 246
  },
  {
      charid: "RichardPlantagenet",
      charname: "Richard Plantagenet (Duke of Gloucester)",
      abbrev: "PLANTAGENET",
      works: "henry6p1,henry6p2,henry6p3,richard3",
      descrip: "becomes duke of York in Henry VI, Part",
      speechcount: 172
  },
  {
      charid: "RichardPlantagenet2",
      charname: "Richard Plantagenet the Younger",
      abbrev: "RICHARD",
      works: "henry6p2",
      descrip: "",
      speechcount: 6
  },
  {
      charid: "robin",
      charname: "Robin",
      abbrev: "ROBIN",
      works: "merrywives",
      descrip: "page to Falstaff",
      speechcount: 6
  },
  {
      charid: "roderigo",
      charname: "Roderigo",
      abbrev: "RODERIGO",
      works: "othello",
      descrip: "A Venetian gentleman",
      speechcount: 59
  },
  {
      charid: "RomanCaptain",
      charname: "Roman Captain",
      abbrev: "Captain",
      works: "cymbeline",
      descrip: "",
      speechcount: 4
  },
  {
      charid: "Roman-cor",
      charname: "Roman",
      abbrev: "Roman",
      works: "coriolanus",
      descrip: "",
      speechcount: 10
  },
  {
      charid: "romeo",
      charname: "Romeo",
      abbrev: "ROMEO",
      works: "romeojuliet",
      descrip: "Son to Montague",
      speechcount: 163
  },
  {
      charid: "rosalind",
      charname: "Rosalind",
      abbrev: "ROSALIND",
      works: "asyoulikeit",
      descrip: "daughter to the banished Duke",
      speechcount: 201
  },
  {
      charid: "Rosaline-lll",
      charname: "Rosaline",
      abbrev: "ROSALINE",
      works: "loveslabours",
      descrip: "lady attending on the princess",
      speechcount: 75
  },
  {
      charid: "rosencrantz",
      charname: "Rosencrantz",
      abbrev: "Ros",
      works: "hamlet",
      descrip: "courtier",
      speechcount: 48
  },
  {
      charid: "ross",
      charname: "Ross",
      abbrev: "ROSS",
      works: "macbeth",
      descrip: "Nobleman of Scotland",
      speechcount: 39
  },
  {
      charid: "Ross-kr2",
      charname: "Lord Ross",
      abbrev: "LORD ROSS",
      works: "richard2",
      descrip: "",
      speechcount: 11
  },
  {
      charid: "rugby",
      charname: "Rugby",
      abbrev: "RUGBY",
      works: "merrywives",
      descrip: "servant to Doctor Caius",
      speechcount: 9
  },
  {
      charid: "rumour",
      charname: "Rumour",
      abbrev: "RUMOUR",
      works: "henry4p2",
      descrip: "the Presenter",
      speechcount: 1
  },
  {
      charid: "sailor-ham",
      charname: "Sailor",
      abbrev: "Sailor",
      works: "hamlet",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "sailor-oth",
      charname: "Sailor",
      abbrev: "Sailor",
      works: "othello",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "Salanio",
      charname: "Salanio",
      abbrev: "SALANIO",
      works: "merchantvenice",
      descrip: "friend to Antonio and Bassiano",
      speechcount: 18
  },
  {
      charid: "Salarino",
      charname: "Salarino",
      abbrev: "SALARINO",
      works: "merchantvenice",
      descrip: "friend to Antonio and Bassiano",
      speechcount: 27
  },
  {
      charid: "Salerio",
      charname: "Salerio",
      abbrev: "SALERIO",
      works: "merchantvenice",
      descrip: "friend to Antonio and Bassiano",
      speechcount: 6
  },
  {
      charid: "salisbury",
      charname: "Earl of Salisbury",
      abbrev: "SALISBURY",
      works: "henry5,henry6p1,henry6p2",
      descrip: "",
      speechcount: 23
  },
  {
      charid: "Salisbury-kj",
      charname: "Salisbury",
      abbrev: "SALISBURY",
      works: "kingjohn",
      descrip: "earl of Salisbury",
      speechcount: 36
  },
  {
      charid: "Salisbury-kr2",
      charname: "Earl of Salisbury",
      abbrev: "EARL OF SALISBURY",
      works: "richard2",
      descrip: "",
      speechcount: 3
  },
  {
      charid: "sampson",
      charname: "Sampson",
      abbrev: "SAMPSON",
      works: "romeojuliet",
      descrip: "Servant to Capulet",
      speechcount: 20
  },
  {
      charid: "Saturninus",
      charname: "Saturninus",
      abbrev: "SATURNINUS",
      works: "titus",
      descrip: "son to the late Emperor of Rome, and afterwards\\n\tdeclared Emperor",
      speechcount: 49
  },
  {
      charid: "Scarus",
      charname: "Scarus",
      abbrev: "SCARUS",
      works: "antonycleo",
      descrip: "friend to Antony",
      speechcount: 12
  },
  {
      charid: "Scout-h61",
      charname: "Scout",
      abbrev: "Scout",
      works: "henry6p1",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "Scribe-h8",
      charname: "Scribe",
      abbrev: "Scribe",
      works: "henry8",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "Scrivener",
      charname: "Scrivener",
      abbrev: "Scrivener",
      works: "richard3",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "scroop",
      charname: "Archbishop Scroop",
      abbrev: "ARCHBISHOP",
      works: "henry4p1,henry4p2",
      descrip: "Archbishop of York",
      speechcount: 30
  },
  {
      charid: "SeaCaptain",
      charname: "Captain",
      abbrev: "Captain",
      works: "12night",
      descrip: "friend to Viola",
      speechcount: 10
  },
  {
      charid: "SEBASTIAN",
      charname: "Sebastian",
      abbrev: "SEBASTIAN",
      works: "12night",
      descrip: "brother to Viola",
      speechcount: 31
  },
  {
      charid: "Sebastian-tem",
      charname: "Sebastian",
      abbrev: "SEBASTIAN",
      works: "tempest",
      descrip: "the King's brother",
      speechcount: 67
  },
  {
      charid: "SecondAttendant",
      charname: "Second Attendant",
      abbrev: "Second Attendant",
      works: "antonycleo",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "SecondBandit",
      charname: "Second Bandit",
      abbrev: "Second Bandit",
      works: "timonathens",
      descrip: "",
      speechcount: 4
  },
  {
      charid: "SecondBrother",
      charname: "Second Brother",
      abbrev: "Second Brother",
      works: "cymbeline",
      descrip: "an apparition",
      speechcount: 2
  },
  {
      charid: "SecondCaptain-cym",
      charname: "Second British Captain",
      abbrev: "Second Captain",
      works: "cymbeline",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "SecondCarrier",
      charname: "Second Carrier",
      abbrev: "Second Carrier",
      works: "henry4p1",
      descrip: "",
      speechcount: 6
  },
  {
      charid: "SecondCitizen",
      charname: "Second Citizen",
      abbrev: "Second Citizen",
      works: "coriolanus",
      descrip: "",
      speechcount: 18
  },
  {
      charid: "SecondCitizen-jc",
      charname: "Second Citizen",
      abbrev: "Second Citizen",
      works: "juliuscaesar",
      descrip: "",
      speechcount: 18
  },
  {
      charid: "SecondCitizen-r3",
      charname: "Second Citizen",
      abbrev: "Second Citizen",
      works: "richard3",
      descrip: "",
      speechcount: 6
  },
  {
      charid: "SecondCommoner",
      charname: "Second Commoner",
      abbrev: "Second Commoner",
      works: "juliuscaesar",
      descrip: "",
      speechcount: 6
  },
  {
      charid: "SecondFish",
      charname: "Second Fisherman",
      abbrev: "Second Fisherman",
      works: "pericles",
      descrip: "",
      speechcount: 12
  },
  {
      charid: "SecondGaoler",
      charname: "Second Gaoler",
      abbrev: "Second Gaoler",
      works: "cymbeline",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "SecondGentleman",
      charname: "Second Gentleman",
      abbrev: "Second Gentleman",
      works: "measure",
      descrip: "",
      speechcount: 9
  },
  {
      charid: "SecondGentleman-aw",
      charname: "Second Gentleman",
      abbrev: "Second Gentleman",
      works: "allswell",
      descrip: "",
      speechcount: 5
  },
  {
      charid: "SecondGentleman-cym",
      charname: "Second Gentleman",
      abbrev: "Second Gentleman",
      works: "cymbeline",
      descrip: "a gentleman of Cymbeline's court",
      speechcount: 9
  },
  {
      charid: "SecondGentleman-h62",
      charname: "Second Gentleman",
      abbrev: "Second Gentleman",
      works: "henry6p2",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "SecondGentleman-h8",
      charname: "Second Gentleman",
      abbrev: "Second Gentleman",
      works: "henry8",
      descrip: "",
      speechcount: 37
  },
  {
      charid: "SecondGentleman-wt",
      charname: "Second Gentleman",
      abbrev: "Second Gentleman",
      works: "winterstale",
      descrip: "",
      speechcount: 4
  },
  {
      charid: "SecondGent-per",
      charname: "Second Gentleman",
      abbrev: "Second Gentleman",
      works: "pericles",
      descrip: "",
      speechcount: 10
  },
  {
      charid: "SecondGuard",
      charname: "Second Guard",
      abbrev: "Second Guard",
      works: "antonycleo",
      descrip: "",
      speechcount: 4
  },
  {
      charid: "SecondHerald-kr2",
      charname: "Second Herald",
      abbrev: "Second Herald",
      works: "richard2",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "SecondKeeper",
      charname: "Second Keeper",
      abbrev: "Second Keeper",
      works: "henry6p3",
      descrip: "",
      speechcount: 9
  },
  {
      charid: "SecondKnight-per",
      charname: "Second Knight",
      abbrev: "Second Knight",
      works: "pericles",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "SecondLady-wt",
      charname: "Second Lady",
      abbrev: "Second Lady",
      works: "winterstale",
      descrip: "",
      speechcount: 3
  },
  {
      charid: "SecondLord",
      charname: "Second Lord",
      abbrev: "Second Lord",
      works: "coriolanus",
      descrip: "",
      speechcount: 3
  },
  {
      charid: "SecondLord-aw",
      charname: "Second Lord",
      abbrev: "Second Lord",
      works: "allswell",
      descrip: "",
      speechcount: 57
  },
  {
      charid: "secondlord-ayli",
      charname: "Second Lord",
      abbrev: "SECOND LORD",
      works: "asyoulikeit",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "SecondLord-cym",
      charname: "Second Lord",
      abbrev: "Second Lord",
      works: "cymbeline",
      descrip: "a lord of Cymbeline's court",
      speechcount: 20
  },
  {
      charid: "SecondLord-per",
      charname: "Second Lord",
      abbrev: "Second Lord",
      works: "pericles",
      descrip: "",
      speechcount: 4
  },
  {
      charid: "SecondLord-tim",
      charname: "Second Lord",
      abbrev: "Second Lord",
      works: "timonathens",
      descrip: "",
      speechcount: 29
  },
  {
      charid: "SecondMerchant",
      charname: "Second Merchant",
      abbrev: "Second Merchant",
      works: "comedyerrors",
      descrip: "indebted to Angelo",
      speechcount: 13
  },
  {
      charid: "SecondMessenger",
      charname: "Second Messenger",
      abbrev: "Second Messenger",
      works: "richard3",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "SecondMessenger-ac",
      charname: "Second Messenger",
      abbrev: "Second Messenger",
      works: "antonycleo",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "SecondMessenger-cor",
      charname: "Second Messenger",
      abbrev: "Second Messenger",
      works: "coriolanus",
      descrip: "",
      speechcount: 5
  },
  {
      charid: "SecondMessenger-h63",
      charname: "Second Messenger",
      abbrev: "Second Messenger",
      works: "henry6p3",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "SecondMurderer-h62",
      charname: "Second Murderer",
      abbrev: "Second Murderer",
      works: "henry6p2",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "SecondMurderer-r3",
      charname: "Second Murderer",
      abbrev: "Second Murderer",
      works: "richard3",
      descrip: "",
      speechcount: 30
  },
  {
      charid: "SecondNeighbour-h62",
      charname: "Second Neighbour",
      abbrev: "Second Neighbour",
      works: "henry6p2",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "SecondOfficer-12",
      charname: "Second Officer",
      abbrev: "Second Officer",
      works: "12night",
      descrip: "",
      speechcount: 3
  },
  {
      charid: "SecondOfficer-ac",
      charname: "Second Officer",
      abbrev: "Second Officer",
      works: "antonycleo",
      descrip: "",
      speechcount: 0
  },
  {
      charid: "SecondOfficer-cor",
      charname: "Second Officer",
      abbrev: "Second Officer",
      works: "coriolanus",
      descrip: "",
      speechcount: 3
  },
  {
      charid: "SecondOutlaw",
      charname: "Second Outlaw",
      abbrev: "Second Outlaw",
      works: "twogents",
      descrip: "",
      speechcount: 10
  },
  {
      charid: "SecondPetitioner-h62",
      charname: "Second Petitioner",
      abbrev: "Second Petitioner",
      works: "henry6p2",
      descrip: "",
      speechcount: 3
  },
  {
      charid: "SecondPirate",
      charname: "Second Pirate",
      abbrev: "Second Pirate",
      works: "pericles",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "SecondPrentice",
      charname: "Second 'Prentice",
      abbrev: "Second 'Prentice",
      works: "henry6p2",
      descrip: "",
      speechcount: 0
  },
  {
      charid: "SecondRoman",
      charname: "Second Roman",
      abbrev: "Second Roman",
      works: "coriolanus",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "SecondSailor-per",
      charname: "Second Sailor",
      abbrev: "Second Sailor",
      works: "pericles",
      descrip: "",
      speechcount: 4
  },
  {
      charid: "SecondSecretary",
      charname: "Second Secretary",
      abbrev: "Second Secretary",
      works: "henry8",
      descrip: "to Wolsey",
      speechcount: 0
  },
  {
      charid: "SecondSenator-cym",
      charname: "Second Senator",
      abbrev: "Second Senator",
      works: "cymbeline",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "SecondSenator-tim",
      charname: "Second Senator",
      abbrev: "Second Senator",
      works: "timonathens",
      descrip: "",
      speechcount: 14
  },
  {
      charid: "SecondSentinel",
      charname: "Second Sentinel",
      abbrev: "Second Sentinel",
      works: "henry6p1",
      descrip: "",
      speechcount: 0
  },
  {
      charid: "SecondServant-ac",
      charname: "Second Servant",
      abbrev: "Second Servant",
      works: "antonycleo",
      descrip: "",
      speechcount: 3
  },
  {
      charid: "SecondServant-mww",
      charname: "Second Servant",
      abbrev: "Second Servant",
      works: "merrywives",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "SecondServant-tim",
      charname: "Second Servant",
      abbrev: "Second Servant",
      works: "timonathens",
      descrip: "",
      speechcount: 5
  },
  {
      charid: "SecondServant-wt",
      charname: "Second Servant",
      abbrev: "Second Servant",
      works: "winterstale",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "SecondServiceman",
      charname: "Second Serviceman",
      abbrev: "Second Serviceman",
      works: "coriolanus",
      descrip: "",
      speechcount: 0
  },
  {
      charid: "SecondServingman",
      charname: "Second Servingman",
      abbrev: "Second Servingman",
      works: "coriolanus",
      descrip: "",
      speechcount: 19
  },
  {
      charid: "SecondSoldier-ac",
      charname: "Second Soldier",
      abbrev: "Second Soldier",
      works: "antonycleo",
      descrip: "",
      speechcount: 11
  },
  {
      charid: "SecondSoldier-aw",
      charname: "Second Soldier",
      abbrev: "Second Soldier",
      works: "allswell",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "SecondSoldier-jc",
      charname: "Second Soldier",
      abbrev: "Second Soldier",
      works: "juliuscaesar",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "SecondStranger",
      charname: "Second Stranger",
      abbrev: "Second Stranger",
      works: "timonathens",
      descrip: "",
      speechcount: 3
  },
  {
      charid: "SecondWarder",
      charname: "Second Warder",
      abbrev: "Second Warder",
      works: "henry6p1",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "SecondWatchman-h63",
      charname: "Second Watchman",
      abbrev: "Second Watchman",
      works: "henry6p3",
      descrip: "",
      speechcount: 5
  },
  {
      charid: "Seleucus",
      charname: "Seleucus",
      abbrev: "SELEUCUS",
      works: "antonycleo",
      descrip: "attendant on Cleopatra",
      speechcount: 3
  },
  {
      charid: "Sempronius",
      charname: "Sempronius",
      abbrev: "SEMPRONIUS",
      works: "titus",
      descrip: "kinsman to Titus",
      speechcount: 0
  },
  {
      charid: "Sempronius-tim",
      charname: "Sempronius",
      abbrev: "SEMPRONIUS",
      works: "timonathens",
      descrip: "flattering lord",
      speechcount: 2
  },
  {
      charid: "Senator-tim",
      charname: "Senator",
      abbrev: "Senator",
      works: "timonathens",
      descrip: "",
      speechcount: 4
  },
  {
      charid: "Sentinels",
      charname: "Sentinels",
      abbrev: "Sentinels",
      works: "henry6p1",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "Sergeant-h61",
      charname: "Sergeant",
      abbrev: "Sergeant",
      works: "henry6p1",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "Sergeant-h8",
      charname: "Sergeant",
      abbrev: "Sergeant",
      works: "henry8",
      descrip: "a sergeant-at-arms",
      speechcount: 1
  },
  {
      charid: "sergeant-mac",
      charname: "Sergeant",
      abbrev: "Sergeant",
      works: "macbeth",
      descrip: "",
      speechcount: 3
  },
  {
      charid: "Servant",
      charname: "Servant",
      abbrev: "Servant",
      works: "troilus",
      descrip: "servant to Diomedes",
      speechcount: 15
  },
  {
      charid: "Servant-12",
      charname: "Servant",
      abbrev: "Servant",
      works: "12night",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "servant1-kl",
      charname: "Servant 1",
      abbrev: "Serv1",
      works: "kinglear",
      descrip: "",
      speechcount: 4
  },
  {
      charid: "servant1-ts",
      charname: "First Servant",
      abbrev: "FIRST SERVANT",
      works: "tamingshrew",
      descrip: "",
      speechcount: 6
  },
  {
      charid: "servant2-kl",
      charname: "Servant 2",
      abbrev: "Serv2",
      works: "kinglear",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "servant2-ts",
      charname: "Second Servant",
      abbrev: "SECOND SERVANT",
      works: "tamingshrew",
      descrip: "",
      speechcount: 4
  },
  {
      charid: "servant3-kl",
      charname: "Servant 3",
      abbrev: "Serv3",
      works: "kinglear",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "servant3-ts",
      charname: "Third Servant",
      abbrev: "THIRD SERVANT",
      works: "tamingshrew",
      descrip: "",
      speechcount: 4
  },
  {
      charid: "Servant-aw",
      charname: "Servant",
      abbrev: "Servant",
      works: "allswell",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "Servant-ce",
      charname: "Servant",
      abbrev: "Servant",
      works: "comedyerrors",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "Servant-h41",
      charname: "Servant",
      abbrev: "Servant",
      works: "henry4p1",
      descrip: "",
      speechcount: 3
  },
  {
      charid: "servant-h4p2",
      charname: "Servant",
      abbrev: "SERVANT",
      works: "henry4p2",
      descrip: "",
      speechcount: 7
  },
  {
      charid: "Servant-h61",
      charname: "Servant",
      abbrev: "Servant",
      works: "henry6p1",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "Servant-h62",
      charname: "Servant",
      abbrev: "Servant",
      works: "henry6p2",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "Servant-h8",
      charname: "Servant",
      abbrev: "Servant",
      works: "henry8",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "servant-ham",
      charname: "Servant",
      abbrev: "Servant",
      works: "hamlet",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "Servant-jc",
      charname: "Servant",
      abbrev: "Servant",
      works: "juliuscaesar",
      descrip: "",
      speechcount: 11
  },
  {
      charid: "Servant-kr2",
      charname: "Servant",
      abbrev: "Servant",
      works: "richard2",
      descrip: "",
      speechcount: 8
  },
  {
      charid: "Servant-m4m",
      charname: "Servant",
      abbrev: "Servant",
      works: "measure",
      descrip: "",
      speechcount: 3
  },
  {
      charid: "servant-mac",
      charname: "Servant",
      abbrev: "Servant",
      works: "macbeth",
      descrip: "",
      speechcount: 5
  },
  {
      charid: "Servant-mv",
      charname: "Servant",
      abbrev: "Servant",
      works: "merchantvenice",
      descrip: "",
      speechcount: 4
  },
  {
      charid: "servant-mww",
      charname: "Servant",
      abbrev: "Servant",
      works: "merrywives",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "Servant-per",
      charname: "Servant",
      abbrev: "Servant",
      works: "pericles",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "servant-rj",
      charname: "Servant",
      abbrev: "Servant",
      works: "romeojuliet",
      descrip: "",
      speechcount: 10
  },
  {
      charid: "Servants-h62",
      charname: "Servants",
      abbrev: "Servants",
      works: "henry6p2",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "servants-ts",
      charname: "Servants",
      abbrev: "ALL SERVANTS",
      works: "tamingshrew",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "Servant-tim",
      charname: "Servant",
      abbrev: "Servant",
      works: "timonathens",
      descrip: "",
      speechcount: 9
  },
  {
      charid: "servant-ts",
      charname: "Servant",
      abbrev: "SERVANT",
      works: "tamingshrew",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "Servant-wt",
      charname: "Servant",
      abbrev: "Servant",
      works: "winterstale",
      descrip: "",
      speechcount: 10
  },
  {
      charid: "Servilius",
      charname: "Servilius",
      abbrev: "SERVILIUS",
      works: "timonathens",
      descrip: "servant to Timon",
      speechcount: 8
  },
  {
      charid: "servingmen",
      charname: "Serving-Men",
      abbrev: "Serving-Men",
      works: "henry6p1",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "SeventhCitizen",
      charname: "Seventh Citizen",
      abbrev: "Seventh Citizen",
      works: "coriolanus",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "SeveralCitizens",
      charname: "Several Citizens",
      abbrev: "Several Citizens",
      works: "juliuscaesar",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "sexton-ma",
      charname: "Sexton",
      abbrev: "Sexton",
      works: "muchado",
      descrip: "",
      speechcount: 7
  },
  {
      charid: "seyton",
      charname: "Seyton",
      abbrev: "SEYTON",
      works: "macbeth",
      descrip: "An officer attending on Macduff",
      speechcount: 5
  },
  {
      charid: "shadow",
      charname: "Simon Shadow",
      abbrev: "SHADOW",
      works: "henry4p2",
      descrip: "country soldier",
      speechcount: 2
  },
  {
      charid: "Shakespeare",
      charname: "Shakespeare",
      abbrev: "Shakespeare",
      works: "phoenixturtle,loverscomplaint,sonnets,rapelucrece,passionatepilgrim,venusadonis",
      descrip: "the voice of Shakespeare's poetry",
      speechcount: 733
  },
  {
      charid: "shallow",
      charname: "Robert Shallow",
      abbrev: "SHALLOW",
      works: "henry4p2,merrywives",
      descrip: "country Justice",
      speechcount: 136
  },
  {
      charid: "Shepherd-h61",
      charname: "Shepherd",
      abbrev: "Shepherd",
      works: "henry6p1",
      descrip: "father to Joan of Arc",
      speechcount: 4
  },
  {
      charid: "sheriff-h41",
      charname: "Sheriff",
      abbrev: "Sheriff",
      works: "henry4p1",
      descrip: "",
      speechcount: 5
  },
  {
      charid: "Sheriff-h62",
      charname: "Sheriff",
      abbrev: "Sheriff",
      works: "henry6p2",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "SheriffWiltshire",
      charname: "Sheriff of Wiltshire",
      abbrev: "Sheriff",
      works: "richard3",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "Shylock",
      charname: "Shylock",
      abbrev: "SHYLOCK",
      works: "merchantvenice",
      descrip: "a rich Jew",
      speechcount: 79
  },
  {
      charid: "sicinius",
      charname: "Sicinius Velutus",
      abbrev: "SICINIUS",
      works: "coriolanus",
      descrip: "tribune of the people",
      speechcount: 117
  },
  {
      charid: "silence",
      charname: "Silence",
      abbrev: "SILENCE",
      works: "henry4p2",
      descrip: "country Justice",
      speechcount: 22
  },
  {
      charid: "Silius",
      charname: "Silius",
      abbrev: "SILIUS",
      works: "antonycleo",
      descrip: "an officer in Ventidius's army",
      speechcount: 3
  },
  {
      charid: "Silvia",
      charname: "Silvia",
      abbrev: "SILVIA",
      works: "twogents",
      descrip: "beloved of Valentine",
      speechcount: 58
  },
  {
      charid: "silvius",
      charname: "Silvius",
      abbrev: "SILVIUS",
      works: "asyoulikeit",
      descrip: "daughter to the banished Duke",
      speechcount: 24
  },
  {
      charid: "Simonides",
      charname: "Simonides",
      abbrev: "SIMONIDES",
      works: "pericles",
      descrip: "king of Pentapolis",
      speechcount: 42
  },
  {
      charid: "Simpcox",
      charname: "Simpcox",
      abbrev: "SIMPCOX",
      works: "henry6p2",
      descrip: "an imposter",
      speechcount: 18
  },
  {
      charid: "simple",
      charname: "Simple",
      abbrev: "SIMPLE",
      works: "merrywives",
      descrip: "servant to Slender",
      speechcount: 25
  },
  {
      charid: "sirhugh",
      charname: "Sir Hugh Evans",
      abbrev: "SIR HUGH EVANS",
      works: "merrywives",
      descrip: "a Welsh parson",
      speechcount: 87
  },
  {
      charid: "SirHughMortimer",
      charname: "Sir Hugh Mortimer",
      abbrev: "HUGH MORTIMER",
      works: "henry6p3",
      descrip: "uncle to the Duke of York",
      speechcount: 0
  },
  {
      charid: "SirHumphrey",
      charname: "Sir Humphrey Stafford",
      abbrev: "SIR HUMPHREY",
      works: "henry6p2",
      descrip: "brother to William Stafford",
      speechcount: 6
  },
  {
      charid: "SirJamesBlount",
      charname: "Sir James Blount",
      abbrev: "Blount",
      works: "richard3",
      descrip: "",
      speechcount: 0
  },
  {
      charid: "SirJamesTyrrel",
      charname: "Sir James Tyrrel",
      abbrev: "TYRREL",
      works: "richard3",
      descrip: "",
      speechcount: 10
  },
  {
      charid: "SirJohnFastolfe",
      charname: "Sir John Fastolfe",
      abbrev: "FASTOLFE",
      works: "henry6p1",
      descrip: "",
      speechcount: 3
  },
  {
      charid: "SirJohnMontgomery",
      charname: "Sir John Montgomery",
      abbrev: "MONTGOMERY",
      works: "henry6p3",
      descrip: "",
      speechcount: 0
  },
  {
      charid: "SirJohnMortimer",
      charname: "Sir John Mortimer",
      abbrev: "JOHN MORTIMER",
      works: "henry6p3",
      descrip: "uncle to the Duke of York",
      speechcount: 1
  },
  {
      charid: "SirJohnSomerville",
      charname: "Sir John Somerville",
      abbrev: "SOMERVILLE",
      works: "henry6p3",
      descrip: "",
      speechcount: 0
  },
  {
      charid: "SirJohnStanley",
      charname: "Sir John Stanley",
      abbrev: "STANLEY",
      works: "henry6p2",
      descrip: "",
      speechcount: 4
  },
  {
      charid: "sirmichael",
      charname: "Sir Michael",
      abbrev: "SIR MICHAEL",
      works: "henry4p1",
      descrip: "a friend to the Archbishop of York",
      speechcount: 4
  },
  {
      charid: "SirNathaniel",
      charname: "Sir Nathaniel",
      abbrev: "SIR NATHANIEL",
      works: "loveslabours",
      descrip: "a curate",
      speechcount: 19
  },
  {
      charid: "SirRichardRatcliff",
      charname: "Sir Richard Ratcliff",
      abbrev: "RATCLIFF",
      works: "richard3",
      descrip: "",
      speechcount: 18
  },
  {
      charid: "SirRobertBrakenbury",
      charname: "Sir Robert Brakenbury",
      abbrev: "BRAKENBURY",
      works: "richard3",
      descrip: "",
      speechcount: 16
  },
  {
      charid: "SirScroop",
      charname: "Sir Stephen Scroop",
      abbrev: "SIR STEPHEN SCROOP",
      works: "richard2",
      descrip: "",
      speechcount: 6
  },
  {
      charid: "SirThomasGargrave",
      charname: "Sir Thomas Gargrave",
      abbrev: "GARGRAVE",
      works: "henry6p1",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "SirThomasVaughan",
      charname: "Sir Thomas Vaughan",
      abbrev: "VAUGHAN",
      works: "richard3",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "SirWalterHerbert",
      charname: "Sir Walter Herbert",
      abbrev: "HERBERT",
      works: "richard3",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "SirWilliamCatesby",
      charname: "Sir William Catesby",
      abbrev: "CATESBY",
      works: "richard3",
      descrip: "",
      speechcount: 31
  },
  {
      charid: "SirWilliamGlansdale",
      charname: "Sir  William Glansdale",
      abbrev: "GLANSDALE",
      works: "henry6p1",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "SirWilliamLucy",
      charname: "Sir William Lucy",
      abbrev: "LUCY",
      works: "henry6p1",
      descrip: "",
      speechcount: 14
  },
  {
      charid: "SirWilliamStanley",
      charname: "Sir William Stanley",
      abbrev: "STANLEY",
      works: "henry6p3,richard3",
      descrip: "called also Earl of Derby",
      speechcount: 32
  },
  {
      charid: "siward",
      charname: "Siward",
      abbrev: "SIWARD",
      works: "macbeth",
      descrip: "Earl of Northumberland, general of English forces",
      speechcount: 11
  },
  {
      charid: "SixthCitizen",
      charname: "Sixth Citizen",
      abbrev: "Sixth Citizen",
      works: "coriolanus",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "slender",
      charname: "Slender",
      abbrev: "SLENDER",
      works: "merrywives",
      descrip: "cousin to Shallow",
      speechcount: 56
  },
  {
      charid: "sly",
      charname: "Christopher Sly",
      abbrev: "SLY",
      works: "tamingshrew",
      descrip: "a tinker",
      speechcount: 24
  },
  {
      charid: "SmithWeaver",
      charname: "Smith the Weaver",
      abbrev: "SMITH",
      works: "henry6p2",
      descrip: "a follower of Cade",
      speechcount: 9
  },
  {
      charid: "snare",
      charname: "Snare",
      abbrev: "SNARE",
      works: "henry4p2",
      descrip: "a Sheriff's officer",
      speechcount: 2
  },
  {
      charid: "Snout",
      charname: "Snout",
      abbrev: "SNOUT",
      works: "midsummer",
      descrip: "a tinker",
      speechcount: 9
  },
  {
      charid: "Snug",
      charname: "Snug",
      abbrev: "SNUG",
      works: "midsummer",
      descrip: "a joiner",
      speechcount: 4
  },
  {
      charid: "Soldier-ac",
      charname: "Soldier",
      abbrev: "Soldier",
      works: "antonycleo",
      descrip: "",
      speechcount: 13
  },
  {
      charid: "Soldier-h61",
      charname: "Soldier",
      abbrev: "Soldier",
      works: "henry6p1",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "Soldier-h62",
      charname: "Soldier",
      abbrev: "Soldier",
      works: "henry6p2",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "Soldier-h63",
      charname: "Soldier",
      abbrev: "Soldier",
      works: "henry6p3",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "soldiers-mac",
      charname: "Soldiers",
      abbrev: "Soldiers",
      works: "macbeth",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "Soldier-tim",
      charname: "Soldier",
      abbrev: "Soldier",
      works: "timonathens",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "SOLINUS",
      charname: "Solinus",
      abbrev: "DUKE SOLINUS",
      works: "comedyerrors",
      descrip: "Duke of Ephesus",
      speechcount: 22
  },
  {
      charid: "SomeOthers",
      charname: "Some Others",
      abbrev: "Some Others",
      works: "timonathens",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "Somerset",
      charname: "Duke/Earl of Somerset",
      abbrev: "SOMERSET",
      works: "henry6p1,henry6p2,henry6p3",
      descrip: "John Beaufort",
      speechcount: 52
  },
  {
      charid: "SomeSpeak",
      charname: "Some Speak",
      abbrev: "Some Speak",
      works: "timonathens",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "Son-h63",
      charname: "Son",
      abbrev: "Son",
      works: "henry6p3",
      descrip: "who has killed his father",
      speechcount: 4
  },
  {
      charid: "son-mac",
      charname: "Son",
      abbrev: "Son",
      works: "macbeth",
      descrip: "Macduff's son",
      speechcount: 14
  },
  {
      charid: "Soothsayer",
      charname: "Soothsayer",
      abbrev: "Soothsayer",
      works: "juliuscaesar",
      descrip: "",
      speechcount: 9
  },
  {
      charid: "Soothsayer-ac",
      charname: "Soothsayer",
      abbrev: "Soothsayer",
      works: "antonycleo",
      descrip: "",
      speechcount: 14
  },
  {
      charid: "Soothsayer-cym",
      charname: "Soothsayer",
      abbrev: "Soothsayer",
      works: "cymbeline",
      descrip: "",
      speechcount: 5
  },
  {
      charid: "Speed",
      charname: "Speed",
      abbrev: "SPEED",
      works: "twogents",
      descrip: "a clownish servant to Valentine",
      speechcount: 117
  },
  {
      charid: "Spirit",
      charname: "Spirit",
      abbrev: "Spirit",
      works: "henry6p2",
      descrip: "",
      speechcount: 5
  },
  {
      charid: "Starveling",
      charname: "Starveling",
      abbrev: "STARVELING",
      works: "midsummer",
      descrip: "a tailor",
      speechcount: 7
  },
  {
      charid: "Stephano",
      charname: "Stephano",
      abbrev: "STEPHANO",
      works: "merchantvenice",
      descrip: "servant to Portia",
      speechcount: 3
  },
  {
      charid: "Stephano-tem",
      charname: "Stephano",
      abbrev: "STEPHANO",
      works: "tempest",
      descrip: "a drunken butler",
      speechcount: 60
  },
  {
      charid: "Steward-aw",
      charname: "Steward",
      abbrev: "Steward",
      works: "allswell",
      descrip: "servant to the Countess",
      speechcount: 6
  },
  {
      charid: "Strato",
      charname: "Strato",
      abbrev: "STRATO",
      works: "juliuscaesar",
      descrip: "servant to Brutus",
      speechcount: 4
  },
  {
      charid: "Surveyor",
      charname: "Surveyor",
      abbrev: "Surveyor",
      works: "henry8",
      descrip: "to the Duke of Buckingham",
      speechcount: 9
  },
  {
      charid: "tailor",
      charname: "Tailor",
      abbrev: "TAILOR",
      works: "tamingshrew",
      descrip: "",
      speechcount: 12
  },
  {
      charid: "Talbot",
      charname: "Lord Talbot/Earl of Shrewsbury",
      abbrev: "JOHN TALBOT",
      works: "henry6p1",
      descrip: "",
      speechcount: 59
  },
  {
      charid: "Tamora",
      charname: "Tamora",
      abbrev: "TAMORA",
      works: "titus",
      descrip: "",
      speechcount: 49
  },
  {
      charid: "Taurus",
      charname: "Taurus",
      abbrev: "TAURUS",
      works: "antonycleo",
      descrip: "lieutenant-general to Caesar",
      speechcount: 1
  },
  {
      charid: "tearsheet",
      charname: "Doll Tearsheet",
      abbrev: "DOLL",
      works: "henry4p2",
      descrip: "",
      speechcount: 31
  },
  {
      charid: "Thaisa",
      charname: "Thaisa",
      abbrev: "THAISA",
      works: "pericles",
      descrip: "daughter to Simonides",
      speechcount: 32
  },
  {
      charid: "Thaliard",
      charname: "Thaliard",
      abbrev: "THALIARD",
      works: "pericles",
      descrip: "a lord of Antioch",
      speechcount: 8
  },
  {
      charid: "Thersites",
      charname: "Thersites",
      abbrev: "THERSITES",
      works: "troilus",
      descrip: "a deformed and scurrilous Greek",
      speechcount: 90
  },
  {
      charid: "Theseus",
      charname: "Theseus",
      abbrev: "THESEUS",
      works: "midsummer",
      descrip: "Duke of Athens",
      speechcount: 48
  },
  {
      charid: "thieves",
      charname: "Thieves",
      abbrev: "Thieves",
      works: "henry4p1",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "ThirdBandit",
      charname: "Third Bandit",
      abbrev: "Third Bandit",
      works: "timonathens",
      descrip: "",
      speechcount: 3
  },
  {
      charid: "ThirdCitizen",
      charname: "Third Citizen",
      abbrev: "Third Citizen",
      works: "coriolanus",
      descrip: "",
      speechcount: 13
  },
  {
      charid: "ThirdCitizen-jc",
      charname: "Third Citizen",
      abbrev: "Third Citizen",
      works: "juliuscaesar",
      descrip: "",
      speechcount: 16
  },
  {
      charid: "ThirdCitizen-r3",
      charname: "Third Citizen",
      abbrev: "Third Citizen",
      works: "richard3",
      descrip: "",
      speechcount: 9
  },
  {
      charid: "ThirdFish",
      charname: "Third Fisherman",
      abbrev: "Third Fisherman",
      works: "pericles",
      descrip: "",
      speechcount: 6
  },
  {
      charid: "ThirdGentleman-h8",
      charname: "Third Gentleman",
      abbrev: "Third Gentleman",
      works: "henry8",
      descrip: "",
      speechcount: 10
  },
  {
      charid: "ThirdGentleman-wt",
      charname: "Third Gentleman",
      abbrev: "Third Gentleman",
      works: "winterstale",
      descrip: "",
      speechcount: 6
  },
  {
      charid: "ThirdGuard",
      charname: "Third Guard",
      abbrev: "Third Guard",
      works: "antonycleo",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "ThirdKnight-per",
      charname: "Third Knight",
      abbrev: "Third Knight",
      works: "pericles",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "ThirdLord",
      charname: "Third Lord",
      abbrev: "Third Lord",
      works: "coriolanus",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "ThirdLord-aw",
      charname: "Third Lord",
      abbrev: "Third Lord",
      works: "allswell",
      descrip: "",
      speechcount: 0
  },
  {
      charid: "ThirdLord-per",
      charname: "Third Lord",
      abbrev: "Third Lord",
      works: "pericles",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "ThirdLord-tim",
      charname: "Third Lord",
      abbrev: "Third Lord",
      works: "timonathens",
      descrip: "",
      speechcount: 11
  },
  {
      charid: "ThirdMessenger",
      charname: "Third Messenger",
      abbrev: "Third Messenger",
      works: "richard3",
      descrip: "",
      speechcount: 3
  },
  {
      charid: "ThirdNeighbour-h62",
      charname: "Third Neighbour",
      abbrev: "Third Neighbour",
      works: "henry6p2",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "ThirdOfficer-ac",
      charname: "Third Officer",
      abbrev: "Third Officer",
      works: "antonycleo",
      descrip: "",
      speechcount: 0
  },
  {
      charid: "ThirdOutlaw",
      charname: "Third Outlaw",
      abbrev: "Third Outlaw",
      works: "twogents",
      descrip: "",
      speechcount: 8
  },
  {
      charid: "ThirdPirate",
      charname: "Third Pirate",
      abbrev: "Third Pirate",
      works: "pericles",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "ThirdRoman",
      charname: "Third Roman",
      abbrev: "Third Roman",
      works: "coriolanus",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "ThirdSenator",
      charname: "Third Senator",
      abbrev: "Third Senator",
      works: "timonathens",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "ThirdServant-tim",
      charname: "Third Servant",
      abbrev: "Third Servant",
      works: "timonathens",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "ThirdServiceman",
      charname: "Third Serviceman",
      abbrev: "Third Serviceman",
      works: "coriolanus",
      descrip: "",
      speechcount: 0
  },
  {
      charid: "ThirdServingman",
      charname: "Third Servingman",
      abbrev: "Third Servingman",
      works: "coriolanus",
      descrip: "",
      speechcount: 20
  },
  {
      charid: "ThirdSoldier-ac",
      charname: "Third Soldier",
      abbrev: "Third Soldier",
      works: "antonycleo",
      descrip: "",
      speechcount: 10
  },
  {
      charid: "ThirdSoldier-jc",
      charname: "Third Soldier",
      abbrev: "Third Soldier",
      works: "juliuscaesar",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "ThirdStranger",
      charname: "Third Stranger",
      abbrev: "Third Stranger",
      works: "timonathens",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "ThirdWatchman-h63",
      charname: "Third Watchman",
      abbrev: "Third Watchman",
      works: "henry6p3",
      descrip: "",
      speechcount: 3
  },
  {
      charid: "ThMowbray",
      charname: "Thomas Mowbray",
      abbrev: "THOMAS MOWBRAY",
      works: "richard2",
      descrip: "Duke of Norfolk",
      speechcount: 13
  },
  {
      charid: "thomas-h4p2",
      charname: "Prince Thomas",
      abbrev: "CLARENCE",
      works: "henry4p2",
      descrip: "Duke of Clarence",
      speechcount: 13
  },
  {
      charid: "ThomasHorner",
      charname: "Thomas Horner",
      abbrev: "HORNER",
      works: "henry6p2",
      descrip: "an armourer",
      speechcount: 6
  },
  {
      charid: "ThomasRotherham",
      charname: "Thomas Rotherham",
      abbrev: "ARCHBISHOP OF YORK",
      works: "richard3",
      descrip: "archbishop of York",
      speechcount: 5
  },
  {
      charid: "Thurio",
      charname: "Thurio",
      abbrev: "THURIO",
      works: "twogents",
      descrip: "a foolish rival to Valentine",
      speechcount: 36
  },
  {
      charid: "Thyreus",
      charname: "Thyreus",
      abbrev: "THYREUS",
      works: "antonycleo",
      descrip: "friend to Caesar",
      speechcount: 12
  },
  {
      charid: "Timandra",
      charname: "Timandra",
      abbrev: "TIMANDRA",
      works: "timonathens",
      descrip: "mistress to Alcibiades",
      speechcount: 3
  },
  {
      charid: "Time",
      charname: "Time",
      abbrev: "Time",
      works: "winterstale",
      descrip: "as the chorus",
      speechcount: 1
  },
  {
      charid: "Timon",
      charname: "Timon",
      abbrev: "TIMON",
      works: "timonathens",
      descrip: "",
      speechcount: 210
  },
  {
      charid: "Tintinius",
      charname: "Tintinius",
      abbrev: "Tintinius",
      works: "juliuscaesar",
      descrip: "friend to Brutus",
      speechcount: 10
  },
  {
      charid: "Titania",
      charname: "Titania",
      abbrev: "TITANIA",
      works: "midsummer",
      descrip: "queen of the fairies",
      speechcount: 23
  },
  {
      charid: "TitusAndronicus",
      charname: "Titus Andronicus",
      abbrev: "TITUS ANDRONICUS",
      works: "titus",
      descrip: "a noble Roman, general against the Goths.",
      speechcount: 117
  },
  {
      charid: "Titus-tim",
      charname: "Titus",
      abbrev: "TITUS",
      works: "timonathens",
      descrip: "servant to Timon's creditors",
      speechcount: 12
  },
  {
      charid: "touchstone",
      charname: "Touchstone",
      abbrev: "TOUCHSTONE",
      works: "asyoulikeit",
      descrip: "the court jester",
      speechcount: 74
  },
  {
      charid: "Townsman-h62",
      charname: "Townsman",
      abbrev: "Townsman",
      works: "henry6p2",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "tranio",
      charname: "Tranio",
      abbrev: "TRANIO",
      works: "tamingshrew",
      descrip: "",
      speechcount: 90
  },
  {
      charid: "Travellers",
      charname: "Travellers",
      abbrev: "Travellers",
      works: "henry4p1",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "travers",
      charname: "Travers",
      abbrev: "TRAVERS",
      works: "henry4p2",
      descrip: "retainer of Northumberland",
      speechcount: 1
  },
  {
      charid: "Trebonius",
      charname: "Trebonius",
      abbrev: "TREBONIUS",
      works: "juliuscaesar",
      descrip: "a conspirator against Caesar",
      speechcount: 4
  },
  {
      charid: "Tressel",
      charname: "Tressel",
      abbrev: "TRESSEL",
      works: "richard3",
      descrip: "a gentleman attending on Lady Anne",
      speechcount: 0
  },
  {
      charid: "Tribunes-ta",
      charname: "Tribunes",
      abbrev: "Tribunes",
      works: "titus",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "Trinculo",
      charname: "Trinculo",
      abbrev: "TRINCULO",
      works: "tempest",
      descrip: "a jester",
      speechcount: 39
  },
  {
      charid: "Troilus",
      charname: "Troilus",
      abbrev: "TROILUS",
      works: "troilus",
      descrip: "son of Priam, king of Troy",
      speechcount: 131
  },
  {
      charid: "Tubal",
      charname: "Tubal",
      abbrev: "TUBAL",
      works: "merchantvenice",
      descrip: "a Jew, his friend",
      speechcount: 8
  },
  {
      charid: "tullus",
      charname: "Tullus Aufidius",
      abbrev: "AUFIDIUS",
      works: "coriolanus",
      descrip: "general of the Vulscians",
      speechcount: 45
  },
  {
      charid: "TutorRutland",
      charname: "Tutor of Rutland",
      abbrev: "Tutor",
      works: "henry6p3",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "tybalt",
      charname: "Tybalt",
      abbrev: "TYBALT",
      works: "romeojuliet",
      descrip: "Nephew to Lady Capulet",
      speechcount: 17
  },
  {
      charid: "TyrianSailor",
      charname: "Tyrian Sailor",
      abbrev: "Tyrian Sailor",
      works: "pericles",
      descrip: "",
      speechcount: 3
  },
  {
      charid: "Ulysses",
      charname: "Ulysses",
      abbrev: "ULYSSES",
      works: "troilus",
      descrip: "a Greek prince",
      speechcount: 80
  },
  {
      charid: "ursula",
      charname: "Ursula",
      abbrev: "URSULA",
      works: "muchado",
      descrip: "Gentlewoman attending on Hero",
      speechcount: 19
  },
  {
      charid: "Valentine",
      charname: "Valentine",
      abbrev: "VALENTINE",
      works: "titus",
      descrip: "kinsman to Titus",
      speechcount: 0
  },
  {
      charid: "VALENTINE-12",
      charname: "Valentine",
      abbrev: "VALENTINE",
      works: "12night",
      descrip: "gentleman attending on the Duke",
      speechcount: 3
  },
  {
      charid: "Valentine-tg",
      charname: "Valentine",
      abbrev: "VALENTINE",
      works: "twogents",
      descrip: "a gentleman",
      speechcount: 149
  },
  {
      charid: "valeria",
      charname: "Valeria",
      abbrev: "VALERIA",
      works: "coriolanus",
      descrip: "friend to Virgilia",
      speechcount: 14
  },
  {
      charid: "Varrius",
      charname: "Varrius",
      abbrev: "VARRIUS",
      works: "antonycleo",
      descrip: "friend to Pompey",
      speechcount: 1
  },
  {
      charid: "Varrius-m4m",
      charname: "Varrius",
      abbrev: "VARRIUS",
      works: "measure",
      descrip: "",
      speechcount: 0
  },
  {
      charid: "Varro",
      charname: "Varro",
      abbrev: "VARRO",
      works: "juliuscaesar",
      descrip: "servant to Brutus",
      speechcount: 6
  },
  {
      charid: "VarroFirst",
      charname: "Varro's First Servant",
      abbrev: "Varro's First Servant",
      works: "timonathens",
      descrip: "",
      speechcount: 0
  },
  {
      charid: "VarroSecond",
      charname: "Varro's Second Servant",
      abbrev: "Varro's Second Servant",
      works: "timonathens",
      descrip: "",
      speechcount: 0
  },
  {
      charid: "Vaux",
      charname: "Sir Nicholas Vaux",
      abbrev: "VAUX",
      works: "henry8",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "Vaux-h62",
      charname: "Vaux",
      abbrev: "VAUX",
      works: "henry6p2",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "Ventidius",
      charname: "Ventidius",
      abbrev: "VENTIDIUS",
      works: "timonathens",
      descrip: "one of Timon's false friends",
      speechcount: 2
  },
  {
      charid: "Ventidius-ac",
      charname: "Ventidius",
      abbrev: "VENTIDIUS",
      works: "antonycleo",
      descrip: "friend to Antony",
      speechcount: 4
  },
  {
      charid: "verges",
      charname: "Verges",
      abbrev: "VERGES",
      works: "muchado",
      descrip: "A headborough",
      speechcount: 18
  },
  {
      charid: "Vernon",
      charname: "Vernon",
      abbrev: "VERNON",
      works: "henry4p1,henry6p1",
      descrip: "of the White Rose, or York, faction",
      speechcount: 26
  },
  {
      charid: "vincentio",
      charname: "Vincentio",
      abbrev: "VINCENTIO",
      works: "tamingshrew",
      descrip: "a merchant of Pisa",
      speechcount: 23
  },
  {
      charid: "Vincentio-m4m",
      charname: "Vincentio",
      abbrev: "DUKE VINCENTIO",
      works: "measure",
      descrip: "the Duke",
      speechcount: 194
  },
  {
      charid: "Vintner",
      charname: "Vintner",
      abbrev: "Vintner",
      works: "henry4p1",
      descrip: "",
      speechcount: 1
  },
  {
      charid: "VIOLA",
      charname: "Viola",
      abbrev: "VIOLA",
      works: "12night",
      descrip: "",
      speechcount: 121
  },
  {
      charid: "VIOLENTA",
      charname: "Violenta",
      abbrev: "VIOLENTA",
      works: "allswell",
      descrip: "neighbor and friend to the widow",
      speechcount: 0
  },
  {
      charid: "virgilia",
      charname: "Virgilia",
      abbrev: "VIRGILIA",
      works: "coriolanus",
      descrip: "wife to Coriolanus",
      speechcount: 26
  },
  {
      charid: "Volsce",
      charname: "Volsce",
      abbrev: "Volsce",
      works: "coriolanus",
      descrip: "",
      speechcount: 9
  },
  {
      charid: "voltemand",
      charname: "Voltemand",
      abbrev: "Volt",
      works: "hamlet",
      descrip: "courtier",
      speechcount: 1
  },
  {
      charid: "volumnia",
      charname: "Volumnia",
      abbrev: "VOLUMNIA",
      works: "coriolanus",
      descrip: "mother to Coriolanus",
      speechcount: 57
  },
  {
      charid: "Volumnius",
      charname: "Volumnius",
      abbrev: "VOLUMNIUS",
      works: "juliuscaesar",
      descrip: "friend to Brutus",
      speechcount: 3
  },
  {
      charid: "WalterWhitmore",
      charname: "Walter Whitmore",
      abbrev: "WHITMORE",
      works: "henry6p2",
      descrip: "",
      speechcount: 8
  },
  {
      charid: "wart",
      charname: "Thomas Wart",
      abbrev: "WART",
      works: "henry4p2",
      descrip: "country soldier",
      speechcount: 2
  },
  {
      charid: "warwick",
      charname: "Earl of Warwick",
      abbrev: "WARWICK",
      works: "henry4p2,henry5,henry6p1,henry6p2,henry6p3",
      descrip: "",
      speechcount: 182
  },
  {
      charid: "Watch-h61",
      charname: "Watch",
      abbrev: "Watch",
      works: "henry6p1",
      descrip: "",
      speechcount: 2
  },
  {
      charid: "watchman-ma",
      charname: "Watchman",
      abbrev: "Watchman",
      works: "muchado",
      descrip: "",
      speechcount: 10
  },
  {
      charid: "westmoreland",
      charname: "Earl of Westmoreland",
      abbrev: "WESTMORELAND",
      works: "henry4p1,henry4p2,henry5,henry6p3",
      descrip: "",
      speechcount: 39
  },
  {
      charid: "widow",
      charname: "Widow",
      abbrev: "WIDOW",
      works: "tamingshrew",
      descrip: "",
      speechcount: 8
  },
  {
      charid: "WidowFlorence",
      charname: "Widow",
      abbrev: "Widow",
      works: "allswell",
      descrip: "an old widow of Florence",
      speechcount: 21
  },
  {
      charid: "WifeSimpcox",
      charname: "Simpcox's Wife",
      abbrev: "Wife",
      works: "henry6p2",
      descrip: "",
      speechcount: 7
  },
  {
      charid: "william-ayli",
      charname: "William",
      abbrev: "WILLIAM",
      works: "asyoulikeit",
      descrip: "a country fellow, in love with Audrey",
      speechcount: 11
  },
  {
      charid: "Williams",
      charname: "Williams",
      abbrev: "WILLIAMS",
      works: "henry5",
      descrip: "soldier in King Henry's army",
      speechcount: 28
  },
  {
      charid: "wmpage",
      charname: "William Page",
      abbrev: "WILLIAM PAGE",
      works: "merrywives",
      descrip: "a boy, son to Page",
      speechcount: 11
  },
  {
      charid: "WmStafford",
      charname: "William Stafford",
      abbrev: "WILLIAM STAFFORD",
      works: "henry6p2",
      descrip: "brother to Sir Humphrey Stafford",
      speechcount: 5
  },
  {
      charid: "Wolsey",
      charname: "Cardinal Wolsey",
      abbrev: "CARDINAL WOLSEY",
      works: "henry8",
      descrip: "",
      speechcount: 79
  },
  {
      charid: "Woodvile",
      charname: "Woodvile",
      abbrev: "WOODVILE",
      works: "henry6p1",
      descrip: "lieutenant of the Tower",
      speechcount: 2
  },
  {
      charid: "worcester",
      charname: "Earl of Worcester",
      abbrev: "EARL OF WORCESTER",
      works: "henry4p1",
      descrip: "",
      speechcount: 35
  },
  {
      charid: "xxx",
      charname: "(stage directions)",
      abbrev: "xxx",
      works: "asyoulikeit",
      descrip: "",
      speechcount: 126
  },
  {
      charid: "york",
      charname: "Duke of York",
      abbrev: "YORK",
      works: "henry5",
      descrip: "cousin to the king",
      speechcount: 1
  },
  {
      charid: "YoungClifford",
      charname: "Young Clifford",
      abbrev: "YOUNG CLIFFORD",
      works: "henry6p2",
      descrip: "",
      speechcount: 4
  },
  {
      charid: "YoungCoriolanus",
      charname: "Young Coriolanus",
      abbrev: "Young CORIOLANUS",
      works: "coriolanus",
      descrip: "son to Coriolanus",
      speechcount: 1
  },
  {
      charid: "YoungLucius",
      charname: "Young Lucius",
      abbrev: "Young LUCIUS",
      works: "titus",
      descrip: "son to Lucius",
      speechcount: 11
  },
  {
      charid: "youngsiward",
      charname: "Young Siward",
      abbrev: "YOUNG SIWARD",
      works: "macbeth",
      descrip: "Siward's son",
      speechcount: 4
  },
  {
      charid: "JohnTalbot",
      charname: "John Talbot",
      abbrev: null,
      works: "henry6p1",
      descrip: "Lord Talbot's son",
      speechcount: 11
  }
]

module.exports = allCharacters;