/**
 * B2B Product Catalog & Specification Data
 * Structured for bulk buyers, school admins, procurement heads, and distributors.
 */

export const products = [
  {
    id: "long-size-note",
    title: "Long Size Note",
    shortDescription: "Standard long format notebook for school and college coursework.",
    image: "",
    badge: "Popular",
    specs: {
      gsm: "56 – 70",
      cover: "Soft / Hard",
      pages: "80 – 320"
    },
    suitableFor: [
      "High Schools & Higher Secondary",
      "Colleges & Universities",
      "Coaching Institutes",
      "Wholesale Distributors"
    ],
    productTypes: [
      "Single Line Ruled Long Book",
      "Unruled Plain Long Book",
      "Soft Bound Center Stitched",
      "Hard Bound Stiff Board"
    ],
    features: [
      "Standard 297 x 210 mm size",
      "Smudge-free high opacity paper",
      "Durable laminated front & back covers"
    ]
  },
  {
    id: "king-size-note",
    title: "King Size Note",
    shortDescription: "Spacious large-format notebook for detailed lectures and assignments.",
    image: "",
    badge: "",
    specs: {
      gsm: "56 – 70",
      cover: "Soft / Hard",
      pages: "120 – 360"
    },
    suitableFor: [
      "Engineering & Medical Colleges",
      "Senior School Students",
      "Competitive Exam Aspirants",
      "Educational Bookstores"
    ],
    productTypes: [
      "King Size Ruled Notebook",
      "King Size Unruled / Plain",
      "Hard Bound Case Stitched",
      "Multi-Subject Divider Sections"
    ],
    features: [
      "Extended page dimensions for comprehensive notes",
      "Strong spine binding preventing loose leaves",
      "Ink-friendly smooth writing paper"
    ]
  },
  {
    id: "drawing-note",
    title: "Drawing Note",
    shortDescription: "Heavyweight cartridge paper drawing book for art, sketches, and geometry.",
    image: "",
    badge: "",
    specs: {
      gsm: "100 – 140",
      cover: "Soft / Board",
      pages: "36 – 72"
    },
    suitableFor: [
      "Primary & Secondary Schools",
      "Fine Arts & Design Academies",
      "Architecture Students",
      "School Stationery Kits"
    ],
    productTypes: [
      "A4 Drawing Book",
      "A3 Large Artist Pad",
      "Spiral Bound Sketch Book",
      "Stapled Softcover Drawing Note"
    ],
    features: [
      "High GSM heavy cartridge paper",
      "Suitable for pencils, crayons, watercolors & markers",
      "Rigid backing board for outdoor sketching"
    ]
  },
  {
    id: "handwriting-note",
    title: "Handwriting Note",
    shortDescription: "Specialized ruling (4-line / 2-line) for handwriting practice and cursive writing.",
    image: "",
    badge: "",
    specs: {
      gsm: "56 – 70",
      cover: "Soft Cover",
      pages: "64 – 120"
    },
    suitableFor: [
      "Kindergarten & Primary Schools",
      "Language Training Centres",
      "Montessori Classrooms",
      "Educational Trust Procurement"
    ],
    productTypes: [
      "Four-Line with Red/Blue Guide Ruling",
      "Two-Line Language Practice Note",
      "Square / Grid Math Notebook (5mm / 10mm)",
      "Three-Line Cursive Guide Note"
    ],
    features: [
      "Calibrated line height for guided penmanship",
      "Bright white paper without ink bleed",
      "Child-safe rounded corner options"
    ]
  },
  {
    id: "practical-note-special-binding",
    title: "Practical Note (Special Binding)",
    shortDescription: "Laboratory record book with alternate blank/ruled pages and special thread-stitched binding.",
    image: "",
    badge: "Lab Grade",
    specs: {
      gsm: "60 – 80",
      cover: "Hard Bound",
      pages: "96 – 192"
    },
    suitableFor: [
      "Physics, Chemistry & Biology Labs",
      "Polytechnic & ITI Institutes",
      "Undergraduate Degree Colleges",
      "Science Academies"
    ],
    productTypes: [
      "Physics Practical Notebook",
      "Chemistry Practical Record",
      "Biology / Botany Log Sheet Book",
      "Computer Science Project Record"
    ],
    features: [
      "Alternate ruled writing & blank observation pages",
      "Special reinforced thread stitching for 180° lay-flat use",
      "Water-resistant gloss/matte laminated hardboard"
    ]
  },
  {
    id: "practical-note-calico-binding",
    title: "Practical Note (Calico Binding)",
    shortDescription: "Heavy-duty practical note with reinforced cloth calico spine for rigorous laboratory use.",
    image: "",
    badge: "",
    specs: {
      gsm: "60 – 80",
      cover: "Calico Bound",
      pages: "96 – 240"
    },
    suitableFor: [
      "University & Engineering Laboratories",
      "Government Medical Colleges",
      "Research & Testing Labs",
      "Annual Academic Supply"
    ],
    productTypes: [
      "Full Calico Spine Practical Register",
      "Half Calico Marble Bound Record",
      "Hardbound Laboratory Folio",
      "Numbered Sheet Examination Record"
    ],
    features: [
      "Traditional woven calico cloth reinforced spine",
      "Maximum tear resistance under daily laboratory handling",
      "Archival quality paper resistant to moisture & chemicals"
    ]
  },
  {
    id: "diary",
    title: "School Diary",
    shortDescription: "Customized annual institutional, school student, and corporate executive diaries.",
    image: "",
    badge: "",
    specs: {
      gsm: "70 – 90",
      cover: "Hard / PU",
      pages: "160 – 365"
    },
    suitableFor: [
      "Schools (Student Almanac & Diary)",
      "Colleges & University Staff",
      "Corporate Executive Gifting",
      "Annual Administrative Planners"
    ],
    productTypes: [
      "School Student Almanac & Calendar Diary",
      "Corporate Executive Hardbound Diary",
      "PU Leatherette Debossed Planner",
      "Wiro Bound Desktop Organizer"
    ],
    features: [
      "Custom pre-printed school rules & vision pages",
      "Gold / Silver foil crest embossing options",
      "Ribbon bookmark and elastic band enclosure"
    ]
  },
  {
    id: "attendance-register",
    title: "Attendance Register",
    shortDescription: "Archival-quality printed employee & student roll-call register with cloth-bound spine.",
    image: "",
    badge: "Archival",
    specs: {
      gsm: "60 – 80",
      cover: "Hard / Calico",
      pages: "60 – 200"
    },
    suitableFor: [
      "School Classrooms & Attendance Recording",
      "Offices & Industrial Mill Roll Call",
      "Administrative Staff Tracking",
      "Government Departments & Hospitals"
    ],
    productTypes: [
      "Monthly Student Attendance Register",
      "Daily Employee Muster Roll Book",
      "Staff Time In / Out Register",
      "Custom Column Formatted Register"
    ],
    features: [
      "Pre-printed formal dates, days & roll number columns",
      "Heavy duty millboard covers with cloth back spine",
      "Acid-free ledger paper preventing ink yellowing"
    ]
  },
  {
    id: "composition-note",
    title: "Composition Note",
    shortDescription: "Classic hardbound composition notebook with smooth ruled pages for daily schoolwork.",
    image: "",
    badge: "Standard",
    specs: {
      gsm: "56 – 70",
      cover: "Hard / Board",
      pages: "80 – 200"
    },
    suitableFor: [
      "Primary & Middle Schools",
      "CBSE / ICSE Curriculum",
      "Daily Homework",
      "School Bookstores"
    ],
    productTypes: [
      "Narrow Ruled Composition Book",
      "Wide Ruled Composition Book",
      "Graph Ruled Composition Book"
    ],
    features: [
      "Sturdy sewn binding with tape spine",
      "Standard printed schedule table inside",
      "Durable marble board cover"
    ]
  },
  {
    id: "meeting-notes",
    title: "Meeting Notes",
    shortDescription: "Structured format notepads for corporate meetings, agenda tracking, and action items.",
    image: "",
    badge: "Corporate",
    specs: {
      gsm: "70 – 90",
      cover: "Soft / PU",
      pages: "80 – 160"
    },
    suitableFor: [
      "Corporate Offices",
      "Executive Boardrooms",
      "Management Teams",
      "Consulting Firms"
    ],
    productTypes: [
      "Action Item Layout Pads",
      "Two-Column Cornell Notes",
      "Spiral Wire-O Meeting Folio"
    ],
    features: [
      "Pre-printed Date, Attendee & Action item fields",
      "Micro-perforated easy tear-out sheets",
      "Premium fountain pen-friendly paper"
    ]
  },
  {
    id: "observation-note",
    title: "Observation Note",
    shortDescription: "Science lab observation notebooks with alternating blank and ruled pages for experiments.",
    image: "",
    badge: "Academic",
    specs: {
      gsm: "60 – 80",
      cover: "Soft Cover",
      pages: "64 – 120"
    },
    suitableFor: [
      "School Science Labs",
      "College Practical Classes",
      "Field Research Projects",
      "Coaching Institutes"
    ],
    productTypes: [
      "Physics Observation Note",
      "Chemistry Observation Note",
      "Biology Field Note"
    ],
    features: [
      "Alternate 1 side ruled & 1 side plain",
      "Stapled & center-stitched binding",
      "High opacity paper resistant to ink bleed"
    ]
  },
  {
    id: "subject-notebooks",
    title: "Subject Notebooks",
    shortDescription: "Multi-subject notebooks with color-coded divider tabs for organizing multiple classes.",
    image: "",
    badge: "Multi-Subject",
    specs: {
      gsm: "60 – 80",
      cover: "Poly / Board",
      pages: "180 – 360"
    },
    suitableFor: [
      "College & University Students",
      "High School Students",
      "Competitive Exam Aspirants",
      "Academic Bookstores"
    ],
    productTypes: [
      "3-Subject Spiral Notebook",
      "5-Subject Divider Book",
      "6-Subject Academic Long Book"
    ],
    features: [
      "Color-coded movable polypropylene dividers",
      "Twin wiro binding for 360° rotation",
      "Durable water-resistant poly covers"
    ]
  },
  {
    id: "exam-papers",
    title: "Exam Papers",
    shortDescription: "Official examination answer booklets, main sheets, and additional continuation sheets.",
    image: "",
    badge: "Institutional",
    specs: {
      gsm: "54 – 60",
      cover: "Thread Sewn",
      pages: "8 – 32"
    },
    suitableFor: [
      "Universities & Autonomous Colleges",
      "School Examination Boards",
      "Competitive Exam Testing Centres",
      "Public Service Commissions"
    ],
    productTypes: [
      "16-Page Thread-Sewn Answer Booklet",
      "24-Page Barcoded Answer Book",
      "4-Page Additional Sheet Bundles",
      "OMR-Ready Main Sheets"
    ],
    features: [
      "Tamper-evident thread stitching",
      "Custom university crest & barcode header",
      "Numbered pages with security watermarks"
    ]
  },
  {
    id: "letter-pads",
    title: "Letter Pads",
    shortDescription: "Top-glued executive writing letter pads with custom institution or company letterhead.",
    image: "",
    badge: "Executive",
    specs: {
      gsm: "70 – 90",
      cover: "Top Glued",
      pages: "50 – 100"
    },
    suitableFor: [
      "Corporate Headquarters",
      "Legal Firms & Advocates",
      "Medical Clinics & Hospitals",
      "Educational Administration"
    ],
    productTypes: [
      "A4 Executive Letter Pad",
      "A5 Prescription & Desk Pad",
      "Watermarked Bond Paper Pad"
    ],
    features: [
      "Clean tear easy-peel top glued head",
      "Rigid chipboard backing support",
      "High-bright executive white or natural shade"
    ]
  },
  {
    id: "conference-note-pads",
    title: "Conference Notepads",
    shortDescription: "Compact, branded writing pads designed for seminars, hotel conferences, and corporate events.",
    image: "",
    badge: "Events",
    specs: {
      gsm: "60 – 80",
      cover: "Soft / Board",
      pages: "20 – 50"
    },
    suitableFor: [
      "Hotels & Convention Centres",
      "Annual Corporate Summits",
      "Training Seminars & Workshops",
      "Event Management Companies"
    ],
    productTypes: [
      "A5 Top-Perforated Conference Pad",
      "Pocket Reporter Notepad",
      "Custom Logo Printed Seminar Kit Pad"
    ],
    features: [
      "Compact 20/40 sheet event-friendly pagination",
      "Custom sponsor & event branding printed header",
      "Bulk packaged in shrink-wrapped bundles"
    ]
  }
];

export const customSpecifications = [
  {
    spec: "Size",
    options: "A4, A5, B5, Standard Long Book (297x210 mm), Standard Small Book (190x155 mm), Pocket Size, or Custom Specified Dimensions",
    editableNote: "Configurable per institutional requirement"
  },
  {
    spec: "Page Counts",
    options: "64, 96, 120, 144, 160, 192, 240, 320, 400 pages or custom requested pagination",
    editableNote: "Flexible based on curriculum or record needs"
  },
  {
    spec: "Paper Quality (GSM)",
    options: "54 GSM, 58 GSM, 60 GSM, 70 GSM, 80 GSM maplitho, high-bright white, or executive cream paper",
    editableNote: "Ink-friendly and smudge resistant"
  },
  {
    spec: "Ruling Formats",
    options: "Single Line, Two Line, Four Line with red/blue guide, Square Grid (5mm/10mm), Unruled/Plain, Practical (one side blank, one side ruled), Graph format",
    editableNote: "Custom line spacing & ruling patterns supported"
  },
  {
    spec: "Cover & Finishing",
    options: "Gloss / Matte Laminated Art Board (250–350 GSM), Grey Board Hardcover, Cloth Spine, Soft Craft, PU Leatherette",
    editableNote: "Full CMYK printing with water-resistant lamination"
  },
  {
    spec: "Printing Options",
    options: "Single color, multi-color offset, pre-printed institutional rules, campus maps, pledge & calendar pages",
    editableNote: "High precision automated web/sheet offset"
  },
  {
    spec: "Binding Methods",
    options: "Center Wire Stitched (Saddle), Section Sewn Hardbound, Perfect Bound, Wiro / Double Spiral Bound, Top Glued Pad",
    editableNote: "Built for heavy daily usage"
  },
  {
    spec: "Branding & Customization",
    options: "School crest / corporate logo, foil stamping (gold/silver), blind debossing, spot UV, custom bookmarks, elastic bands",
    editableNote: "Precise corporate identity reproduction"
  },
  {
    spec: "Packaging & Bundling",
    options: "Poly-wrapped 6/10 pack bundles, heavy corrugated master export cartons, palletized shrink-wrap for logistics",
    editableNote: "Damage-free transit across India"
  },
  {
    spec: "Minimum Order Quantity (MOQ)",
    options: "Optimized for bulk institutional, distributor, and wholesale orders (Inquire for specific batch minimums)",
    editableNote: "Scalable production runs"
  }
];
