const QUESTIONS = [
  {
    text: "argue",
    answers: ["kelishmoq", "bahslashmoq", "urmoq", "muloyim"],
    rightIndex: 1,
  },
  {
    text: "crowd",
    answers: ["ariq", "jamiyat", "olamon", "yiglash"],
    rightIndex: 2,
  },
  {
    text: "depend",
    answers: ["tegishli bo'lmoq", "kerak", "sarflamoq", "yubormoq"],
    rightIndex: 0,
  },
  {
    text: "communicate",
    answers: ["jamiyat", "sotmoq", "hayriya", "suhbat qurmoq"],
    rightIndex: 3,
  },
  {
    text: "dish",
    answers: ["yuvmoq", "idish", "tishlamoq", "ot"],
    rightIndex: 1,
  },
  {
    text: "empty",
    answers: ["qorong'u", "bo'sh", "yo'lak", "tovon"],
    rightIndex: 1,
  },
  {
    text: "exact",
    answers: ["aniq", "tug'ri", "rostanmi", "hayajon"],
    rightIndex: 0,
  },
  {
    text: "fresh",
    answers: ["limon", "havo", "qorong'u", "yangi"],
    rightIndex: 3,
  },
  {
    text: "gather",
    answers: ["gajmir", "hafa", "yig'moq", "tarqatmoq"],
    rightIndex: 2,
  },
  {
    text: "indicate",
    answers: ["kursatish", "tanlash", "aniqlash", "yurak urushi"],
    rightIndex: 0,
  },
  {
    text: "item",
    answers: ["tanlash", "narsa", "jamadon", "krushka"],
    rightIndex: 1,
  },
  {
    text: "offer",
    answers: ["chaqirmoq", "hayrlshmoq", "oldiga bormoq", "taklif qilmoq"],
    rightIndex: 3,
  },
  {
    text: "price",
    answers: ["narx", "anjom", "qimmat", "taqdirlash"],
    rightIndex: 0,
  },
  {
    text: "product",
    answers: ["mishka", "klavitura", "mahsulot", "mushuk ovqati"],
    rightIndex: 2,
  },
  {
    text: "property",
    answers: ["ustun jixat", "oqsuyak", "mol-mulk", "davlat"],
    rightIndex: 2,
  },
  {
    text: "purchase",
    answers: ["burun", "burch", "sotib olmoq", "maqsad"],
    rightIndex: 2,
  },
  {
    text: "recommend",
    answers: ["yaxshi", "aqlli", "yomonlash", "tavsiya bermoq"],
    rightIndex: 3,
  },
  {
    text: "select",
    answers: ["javon", "savat", "dars", "tanlamoq"],
    rightIndex: 3,
  },
  {
    text: "tool",
    answers: ["uzoq", "anjom", "ilmiq", "juda sovuq"],
    rightIndex: 1,
  },
  {
    text: "treat",
    answers: ["munosabatda bulmoq", "hayrlashmoq", "salomlashmoq", "ketmoq"],
    rightIndex: 0,
  },

  // unit 18 end

  // unit 19 start

  {
    text: "alive",
    answers: ["Tinch", "hayot", "sog", "Jannat"],
    rightIndex: 1,
  },
  {
    text: "bother",
    answers: ["aka", "harakat qilmoq", "mamnun", "band"],
    rightIndex: 1,
  },
  {
    text: "bone",
    answers: ["begona", "askar", "qushiqchi", "suyak"],
    rightIndex: 3,
  },
  {
    text: "captain",
    answers: ["qisqacha", "dumgaza", "kepka", "kapitan"],
    rightIndex: 3,
  },
  {
    text: "conclusion",
    answers: ["bebaho", "mashxur", "nihoya", "boshlanishi"],
    rightIndex: 2,
  },
  {
    text: "doubt",
    answers: ["qarama qarshi", "shubha", "advokat", "uxshash"],
    rightIndex: 1,
  },
  {
    text: "explore",
    answers: ["tadqiq etmoq", "kash qilmoq", "nihoyat", "tugamoq"],
    rightIndex: 0,
  },
  {
    text: "foreign",
    answers: ["kasalik", "shunga", "nisbatan", "chet"],
    rightIndex: 3,
  },
  {
    text: "glad",
    answers: ["maysa", "yumshoq", "hursand", "shisha"],
    rightIndex: 2,
  },
  {
    text: "however",
    answers: ["tugri", "barcha", "kecha", "ammo"],
    rightIndex: 3,
  },
  {
    text: "injustice",
    answers: ["adolatsizlik", "achhiq", "sok", "adolat bilan"],
    rightIndex: 0,
  },
  {
    text: "international",
    answers: ["telekomunikatsiya", "xalqaro", "qisman", "dunyo"],
    rightIndex: 1,
  },
  {
    text: "lawyer",
    answers: ["utinchi", "huquqshunos", "advokat", "xirurg"],
    rightIndex: 1,
  },
  {
    text: "mention",
    answers: ["tadqiqot", "tola", "eslamoq", "tasdiqlamoq"],
    rightIndex: 3,
  },
  {
    text: "policy",
    answers: ["yer", "kucha", "qonun", "osmon"],
    rightIndex: 2,
  },
  {
    text: "social",
    answers: ["soch", "makaron", "burun", "ijtimoiy"],
    rightIndex: 3,
  },
  {
    text: "speech",
    answers: ["nutq", "boshqalar", "gugurt", "ispaniya"],
    rightIndex: 0,
  },
  {
    text: "staff",
    answers: ["tasdiqlamoq", "jamoa", "kubog", "yutuq"],
    rightIndex: 1,
  },
  {
    text: "toward",
    answers: ["qushni", "askar", "tomon", "hizmat"],
    rightIndex: 2,
  },
  {
    text: "wood",
    answers: ["yoqimtoy", "qo'rqinchli", "yog'och", "shamol"],
    rightIndex: 2,
  },

  // unit 19 end

  // unit 20 start

  {
    text: "achieve",
    answers: ["", "erishmoq", "", ""],
    rightIndex: 1,
  },
  {
    text: "advise",
    answers: ["maslahat bermoq", "", "", ""],
    rightIndex: 0,
  },
  {
    text: "already",
    answers: ["", "", "", "allaqachon"],
    rightIndex: 3,
  },
  {
    text: "basic",
    answers: ["", "", "oddiy", ""],
    rightIndex: 2,
  },
  {
    text: "bit",
    answers: ["parcha", "", "", ""],
    rightIndex: 0,
  },
  {
    text: "consider",
    answers: ["haqida uylamoq", "", "", ""],
    rightIndex: 0,
  },
  {
    text: "destroy",
    answers: ["", "vayron qilmoq", "", ""],
    rightIndex: 1,
  },
  {
    text: "enteration",
    answers: ["", "hursan qilmoq", "", ""],
    rightIndex: 1,
  },
  {
    text: "extra",
    answers: ["", "", "", "qushimcha"],
    rightIndex: 3,
  },
  {
    text: "goal",
    answers: ["", "", "", "maqsad"],
    rightIndex: 3,
  },
  {
    text: "lie",
    answers: ["aldamoq", "", "", ""],
    rightIndex: 0,
  },
  {
    text: "meat",
    answers: ["", "", "gosht", ""],
    rightIndex: 2,
  },
  {
    text: "opinion",
    answers: ["", "fikr", "", ""],
    rightIndex: 1,
  },
  {
    text: "real",
    answers: ["", "", "", "haqiqiy"],
    rightIndex: 3,
  },
  {
    text: "reflect",
    answers: ["", "", "", "aks etmoq"],
    rightIndex: 3,
  },
  {
    text: "regard",
    answers: ["", "", "deb hisoblamoq", ""],
    rightIndex: 2,
  },
  {
    text: "serve",
    answers: ["", "", "", "xizmat kursatmoq"],
    rightIndex: 3,
  },
  {
    text: "vegetable",
    answers: ["sabzavot", "", "", ""],
    rightIndex: 0,
  },
  {
    text: "war",
    answers: ["urush", "", "", ""],
    rightIndex: 0,
  },
  {
    text: "worth",
    answers: ["", "arziydigan", "", ""],
    rightIndex: 1,
  },

  // unit 20 end

  // unit 21 start

  {
    text: "appear",
    answers: ["", "", "", "deb tuyilmoq"],
    rightIndex: 3,
  },
  {
    text: "base",
    answers: ["oddiy", "", "", ""],
    rightIndex: 0,
  },
  {
    text: "brain",
    answers: ["", "miya", "", ""],
    rightIndex: 1,
  },
  {
    text: "career",
    answers: ["", "", "", "ish faoliyati"],
    rightIndex: 3,
  },
  {
    text: "clerk",
    answers: ["do'kon yordamchisi", "", "", ""],
    rightIndex: 0,
  },
  {
    text: "effort",
    answers: ["harakat", "", "", ""],
    rightIndex: 0,
  },
  {
    text: "enter",
    answers: ["", "", "kirmoq", ""],
    rightIndex: 2,
  },
  {
    text: "excellent",
    answers: ["", "", "", "a'lo"],
    rightIndex: 3,
  },
  {
    text: "hero",
    answers: ["", "", "", "qahramon"],
    rightIndex: 3,
  },
  {
    text: "hurry",
    answers: ["", "", "shoshilmoq", ""],
    rightIndex: 2,
  },
  {
    text: "inform",
    answers: ["", "", "habar bermoq", ""],
    rightIndex: 2,
  },
  {
    text: "later",
    answers: ["", "", "kenroq", ""],
    rightIndex: 2,
  },
  {
    text: "leave",
    answers: ["", "ketmoq", "", ""],
    rightIndex: 1,
  },
  {
    text: "locate",
    answers: ["topmoq", "", "", ""],
    rightIndex: 0,
  },
  {
    text: "nurse",
    answers: ["", "hamshira", "", ""],
    rightIndex: 1,
  },
  {
    text: "operation",
    answers: ["", "operatsiya", "", ""],
    rightIndex: 1,
  },
  {
    text: "pain",
    answers: ["", "", "", "og'riq"],
    rightIndex: 3,
  },
  {
    text: "refuse",
    answers: ["", "", "rad etmoq", ""],
    rightIndex: 2,
  },
  {
    text: "though",
    answers: ["ga qaramasdan", "", "", ""],
    rightIndex: 0,
  },
  {
    text: "various",
    answers: ["", "turli-tuman", "", ""],
    rightIndex: 1,
  },

  // unit 21 end

  // unit 22 start

  {
    text: "actual",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "amaze",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "charge",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "comfort",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "contact",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "customer",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "deliver",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "earn",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "gate",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "include",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "manage",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "mystery",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "occur",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "oposite",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "plate",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "receive",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "reward",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "set",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "steal",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "thief",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },

  // unit 22 end

  // unit 23 start

  {
    text: "advance",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "athlete",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "avarage",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "behavior",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "behind",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "course",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "lower",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "match",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "member",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "mental",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "passanger",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "personality",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "poem",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "pole",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "remove",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "safety",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "shoot",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "sound",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "swim",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "web",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },

  // unit 23 end

  // unit 24 start

  {
    text: "block",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "cheer",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "complex",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "ciritic",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "event",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "exercise",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "fit",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "friendship",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "guide",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "lack",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "passage",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "perform",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "pressure",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "probably",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "public",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "strike",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "support",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "task",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "term",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "unite",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },

  // unit 24 end

  // unit 25 start

  {
    text: "assosiate",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "environment",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "factory",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "featury",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "instance",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "involve",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "medicine",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "mix",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "organize",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "period",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "populate",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "produce",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "range",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "recognize",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "regular",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "sign",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "tip",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "tradition",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "trash",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "wide",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },

  // unit 25 end

  // unit 26 start

  {
    text: "advise",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "along",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "attention",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "attract",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "climb",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "drop",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "final",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "further",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "imply",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "maintain",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "neither",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "otherwise",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "pysical",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "prove",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "react",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "ride",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "situated",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "society",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "standard",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },

  {
    text: "suggest ",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },

  // unit 26 end
  // unit 27 start

  {
    text: "actualy",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "bite",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "coast",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "deal",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "desert",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "earthquake",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "effective",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "examine",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "false",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "gift",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "hunger",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "imagine",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "journey",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "puzzle",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "quite",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "rather",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "spesific",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "tour",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "trip",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "value",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },

  // unit 28 end

  // unit 28 start

  {
    text: "band",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "barely",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "boring",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "cancel",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "driway",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "garbage",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "instrument",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "list",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "magic",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "message",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "notice",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "own",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "predict",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "professor",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "rush",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "schedule",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "share",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "strage",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "storm",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "within",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },

  // unit 28 end

  // unit 29 start

  {
    text: "advertise",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "assign",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "audience ",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "breakfast",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "competition ",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "cool",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "gain",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "importance",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "knowledge",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "major",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "mean",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "prefer",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "president",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "progress",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "respect",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "rich",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "skill",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "somehow",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "strength",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "vote",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },

  // unit 29 end

  // unit 30 start

  {
    text: "above",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "ahead",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "amount",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "belief",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "center",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "common",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "cost",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "demonstrate",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "different",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "evidence",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "honesty",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "indiom",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "independent",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "inside",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "master",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "memory",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "proper",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "scan",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "section",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },
  {
    text: "surface",
    answers: ["", "", "", ""],
    rightIndex: 1,
  },

  // unit 30 end
];

const MONEY_NODES = document.querySelectorAll(".money");
const START_GAME_BUTTONS = document.querySelectorAll(".start-game");
const RESET_GAME_BUTTONS = document.querySelectorAll(".reset-game");
const SCREEN_NODES = document.querySelectorAll(".screen");
const ANSWER_NODES = document.querySelectorAll(".answer");
const SCREEN_SOUND = new Audio("ure.mp3");
const PRIZE_FOR_RIGHT_ANSWER = 1;
const HIGHLIGHT_TIMEOUT_MS = 1000;

const POP_UP = document.querySelector(".modal__pop-up");
const POP_UP_TEXT = document.querySelector(".mesage");
const LOGO = document.querySelector(".logo");

let activeQuestionIndex = 0;
let money = 0;

START_GAME_BUTTONS.forEach((button, index) =>
  button.addEventListener("click", () => {
    // switch (index) {
    //   case 1:
    //     activeQuestionIndex = 20;
    //     break;
    //   case 2:
    //     activeQuestionIndex = 40;
    //     break;
    //   case 3:
    //     activeQuestionIndex = 60;
    //     break;
    //   case 4:
    //     activeQuestionIndex = 80;
    //     break;
    //   case 5:
    //     activeQuestionIndex = 100;
    //     break;
    //   case 6:
    //     activeQuestionIndex = 120;
    //     break;
    //   case 7:
    //     activeQuestionIndex = 140;
    //     break;
    //   case 8:
    //     activeQuestionIndex = 160;
    //     break;
    //   case 9:
    //     activeQuestionIndex = 180;
    //     break;
    //   case 10:
    //     activeQuestionIndex = 200;
    //     break;
    //   case 11:
    //     activeQuestionIndex = 220;
    //     break;
    //   case 12:
    //     activeQuestionIndex = 240;
    //     break;
    // }
    SCREEN_SOUND.play();

    if (index) {
      activeQuestionIndex = index * 20;
    }

    updateMoneyDisplay(0);
    setActiveQuestion(activeQuestionIndex);
    showScreen(1);
  })
);

RESET_GAME_BUTTONS.forEach((btns) => {
  btns.addEventListener("click", () => {
    showScreen(0);
  });
});

function updateMoneyDisplay(newMoney) {
  money = newMoney;

  MONEY_NODES.forEach((moneyNode) => (moneyNode.textContent = money));
}

function setActiveQuestion(index) {
  activeQuestionIndex = index;

  const QUESTION_NODE = document.querySelector(".question");
  const activeQuestion = QUESTIONS[index];

  QUESTION_NODE.textContent = activeQuestion.text;

  activeQuestion.isChecking = false;

  setupAnswers(activeQuestion);
}

function showScreen(index) {
  SCREEN_NODES.forEach((screen, i) => {
    screen.classList.toggle("visible", i === index);
  });
}

function setupAnswers(question) {
  ANSWER_NODES.forEach((answerNode, index) => {
    const letters = ["A", "B", "C", "D"];

    answerNode.textContent = `${letters[index]}. ${question.answers[index]}`;

    answerNode.addEventListener("click", () =>
      handleAnswerClick(answerNode, question)
    );
  });
}

async function handleAnswerClick(answerNode, question) {
  if (question.isChecking) {
    return;
  }

  question.isChecking = true;

  await highlightAnswer(answerNode, "active", HIGHLIGHT_TIMEOUT_MS);

  const rightAnswerNode = ANSWER_NODES[question.rightIndex];

  const isRightAnswer = answerNode.textContent === rightAnswerNode.textContent;

  await highlightAnswer(rightAnswerNode, "right", HIGHLIGHT_TIMEOUT_MS);

  if (!isRightAnswer) {
    gameOver("lose");
    SCREEN_SOUND.pause();
    return;
  }

  const isLastQuestion = activeQuestionIndex === QUESTIONS.length - 1;

  if (isLastQuestion) {
    gameOver("win");
    SCREEN_SOUND.pause();
  } else {
    setActiveQuestion(activeQuestionIndex + 1);
  }

  updateMoneyDisplay(money + PRIZE_FOR_RIGHT_ANSWER);

  if (money === 20) {
    showScreen(3);
  }
}

async function highlightAnswer(answerNode, type, timeoutMs) {
  answerNode.classList.add(type);

  if (timeoutMs) {
    await timeout(timeoutMs);
  }

  clearClassnamesFromQuestionNode(answerNode);
}

function gameOver(status) {
  if (status === "win") {
    showScreen(3);
    restartGame(3000);
  }

  if (status === "lose") {
    updateMoneyDisplay(0);
    showScreen(2);
    restartGame(3000);
  }
}

function clearClassnamesFromQuestionNode(answerNode) {
  ["active", "right", "wrong"].forEach((className) =>
    answerNode.classList.remove(className)
  );
}

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function restartGame(time) {
  setTimeout(() => {
    location.reload();
  }, time);
}

function popUp() {
  POP_UP_TEXT.addEventListener("click", () => {
    POP_UP.classList.toggle("none");
  });
  POP_UP.addEventListener('click', () => {
    POP_UP.classList.add('none')
  })
}

popUp();

