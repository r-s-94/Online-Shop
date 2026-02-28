import apple from "./assets/apple picture.jpg";
import apple2 from "./assets/apple picture2.jpg";
import pear from "./assets/pear picture.jpg";
import pear2 from "./assets/pear picture2.jpg";
import pear3 from "./assets/pear picture3.jpg";
import grape from "./assets/grape picture.jpg";
import grape2 from "./assets/grape picture2.jpg";
import grape3 from "./assets/grape picture3.jpg";
import samsungPhone from "./assets/Samsung Phone Picture.jpg";
import samsungPhone2 from "./assets/Samsung Phone Picture2.jpg";
import samsungPhone3 from "./assets/Samsung Phone Picture3.jpg";
import samsungPhone4 from "./assets/Samsung Phone Picture4.jpg";
import samsungPhone5 from "./assets/Samsung Phone Picture5.jpg";
import iPhone from "./assets/IPhone Picture.jpg";
import iPhone2 from "./assets/IPhone Picture2.jpg";
import iPhone3 from "./assets/IPhone Picture3.jpg";
import iPhone4 from "./assets/IPhone Picture4.jpg";
import iPhone5 from "./assets/IPhone Picture5.jpg";
import iPad from "./assets/iPad Picture.jpg";
import iPad2 from "./assets/iPad Picture2.jpg";
import iPad3 from "./assets/iPad Picture3.jpg";
import iPad4 from "./assets/iPad Picture4.jpg";
import iPad5 from "./assets/iPad Picture5.jpg";
import Notebook from "./assets/Windows Notebook Picture.jpg";
import Notebook2 from "./assets/Windows Notebook Picture2.jpg";
import Notebook3 from "./assets/Windows Notebook Picture3.jpg";
import Notebook4 from "./assets/Windows Notebook Picture4.jpg";
import Notebook5 from "./assets/Windows Notebook Picture5.jpg";
import MacBook from "./assets/Macbook Picture.jpg";
import MacBook2 from "./assets/Macbook Picture2.jpg";
import MacBook3 from "./assets/Macbook Picture3.jpg";
import MacBook4 from "./assets/Macbook Picture4.jpg";
import MacBook5 from "./assets/Macbook Picture5.jpg";
import GalaxyWatch from "./assets/Galaxy Watch Picture.jpg";
import GalaxyWatch2 from "./assets/Galaxy Watch Picture2.jpg";
import GalaxyWatch3 from "./assets/Galaxy Watch Picture3.jpg";
import GalaxyWatch4 from "./assets/Galaxy Watch Picture4.jpg";
import iWatch from "./assets/IWatch Picture.jpg";
import iWatch2 from "./assets/IWatch Picture2.jpg";
import GalaxyBuds from "./assets/Galaxy Buds Piture.jpg";
import GalaxyBuds2 from "./assets/Galaxy Buds Piture2.jpg";
import GalaxyBuds3 from "./assets/Galaxy Buds Piture3.jpg";
import AirPods from "./assets/AirPods Picture.jpg";
import AirPods2 from "./assets/AirPods Picture2.jpg";
import AirPods3 from "./assets/AirPods Picture3.jpg";
import AirPods4 from "./assets/AirPods Picture4.jpg";
import Mustang from "./assets/Mustang Picture.jpg";
import Mustang2 from "./assets/Mustang Picture2.jpg";
import Mustang3 from "./assets/Mustang Picture3.jpg";
import Mustang4 from "./assets/Mustang Picture4.jpg";
import Audi from "./assets/Audi RS 7 Picture.jpg";
import Audi2 from "./assets/Audi RS 7 Picture2.jpg";
import Audi3 from "./assets/Audi RS 7 Picture3.jpg";
import Audi4 from "./assets/Audi RS 7 Picture4.jpg";
import AMG from "./assets/AMG Picture.jpg";
import AMG2 from "./assets/AMG Picture2.jpg";
import AMG3 from "./assets/AMG Picture3.jpg";
import AMG4 from "./assets/AMG Picture4.jpg";
import AMG5 from "./assets/AMG Picture5.jpg";
import BMW5er from "./assets/BMW Picture.jpg";
import BMW5er2 from "./assets/BMW Picture2.jpg";
import BMW5er3 from "./assets/BMW Picture3.jpg";
import BMW5er4 from "./assets/BMW Picture4.jpg";
import BMW5er5 from "./assets/BMW Picture5.jpg";
import WeightBench from "./assets/Weight bench Picture.jpg";
import WeightBench2 from "./assets/Weight bench Picture2.jpg";
import Treadmill from "./assets/Treadmill Picture.jpg";
import Treadmill2 from "./assets/Treadmill Picture2.jpg";

export interface Article {
  id: number;
  category: string;
  name: string;
  imgArray: string[];
  newPrice: number;
  oldPrice: number;
  discount: boolean;
  discountrate: number;
  description: description;
  itemStockTotal: number;
  quantity: number;
  declination: string;
  //lines: number;
}

interface description {
  general: string;
  short: string;
  detail: DetailObject[];
}

interface DetailObject {
  key: string;
  value: string | number;
}

export const articles: Article[] = [
  {
    id: 1,
    category: "electronic",
    name: "Samsung Galaxy S25 Ultra",
    imgArray: [
      samsungPhone,
      samsungPhone2,
      samsungPhone3,
      samsungPhone4,
      samsungPhone5,
    ],
    newPrice: 799.99,
    oldPrice: 889.99,
    discount: true,
    discountrate: 0.1,
    description: {
      general: `Galaxy S25 Ultra 5G mit Snapdragon-Prozessor, 8 GB RAM, 256 GB Speicher und 6,9-Zoll OLED-Display mit 120 Hz.
            Professionelles Quad-Kamerasystem (200 MP, Ultraweitwinkel, Teleobjektiv) mit 8K-Video, optischem Zoom und KI-Funktionen.
            Dual-SIM, eSIM, Gesichtserkennung und Fingerabdrucksensor für Sicherheit und maximalen Komfort.`,
      short:
        "Samsung Galaxy S25 Ultra - 12 GB RAM, 256 GB Speicher, 200-MP-Kamera, Titanium Black.",
      detail: [
        //{ key: "Marke", value: "Samsung" },
        { key: "Betriebssystem", value: "Android 15" },
        { key: "Prozessor", value: "Snapdragon 8 Elite for Galaxy (SM8750)" },
        { key: "RAM", value: "8 GB" },
        { key: "Speicherkapazität", value: "256 GB" },
        { key: "Auflösung", value: "17.42 cm / 6.9 Zoll, 1440 x 3200 Pixel" },
      ],
    },
    itemStockTotal: 25,
    quantity: 0,
    declination: "Das",
    //lines: 2,
  },
  {
    id: 2,
    category: "electronic",
    name: "Apple iPhone 16 Pro",
    imgArray: [iPhone, iPhone2, iPhone3, iPhone4, iPhone5],
    newPrice: 899.99,
    oldPrice: 979.99,
    discount: true,
    discountrate: 0.08,
    description: {
      general: `Apple iPhone 16 Pro, 8 GB RAM, 5G, mit A19 Pro Chip, leistungsstarker Batterie, Dual-SIM.
            Hochauflösende Hauptkamera, Ultraweitwinkel und Teleobjektiv, 12-MP-Frontkamera.
            6,5 Zoll OLED-Display, 120 Hz Bildwiederholrate, Amways-In-Display und Kratzfestes Glas.
            eSIM-kompatibel, unterstützt AirPods und nachhaltiges GoGreen-Material.`,
      short:
        "Apple iPhone 16 128 GB, 5G, Kamerasteuerung, A18 Chip, Boost für Batterie. Funktioniert mit AirPods.",
      detail: [
        //{ key: "Marke", value: "Apple" },
        { key: "Betriebssystem", value: "iOS" },
        {
          key: "Prozessor",
          value: "A19 Pro Chip 6‑Core CPU mit 2 Performance-Kernen",
        },
        { key: "RAM", value: "8 GB" },
        { key: "Speicherkapazität", value: "256 GB" },
        { key: "Auflösung", value: "16.6 cm / 6.5 Zoll, 1440 x 3200 Pixel" },
      ],
    },
    itemStockTotal: 25,
    quantity: 0,
    declination: "Das",
    //lines: 3,
  },
  {
    id: 3,
    category: "electronic",
    name: "Apple iPad Pro 13",
    imgArray: [iPad, iPad2, iPad3, iPad4, iPad5],
    newPrice: 999.99,
    oldPrice: 1099.99,
    discount: true,
    discountrate: 0.08,
    description: {
      general: `Apple iPad Pro 13" (13 Zoll) mit OLED Ultra Retina XDR Display und Pro Motion.
            Apple A19 Pro Chip, 8 GB RAM, 256 GB Speicher für schnelle Performance.
            Dual-Kamerasystem mit LiDAR-Scanner, 4K Video und Face ID.
            Unterstützt AirPlay 2, Bluetooth 6.0, USB-C/Thunderbolt und Siri.
            Robustes Gehäuse, IP42-Schutz und recycelten Materialien.`,
      short:
        "Apple 13 iPad Pro M5, 256 GB, Ultra Retina XDR Display, 12 MP Front- und Rückkamera, ganztägige Batterielaufzeit.",
      detail: [
        //{ key: "Marke", value: "Apple" },
        { key: "Betriebssystem", value: "iOS" },
        {
          key: "Prozessor",
          value: "A19 Pro Chip 6‑Core CPU mit 2 Performance-Kernen",
        },
        { key: "RAM", value: "8 GB" },
        { key: "Speicherkapazität", value: "256 GB" },
        { key: "Auflösung", value: "33.02 cm / 13 Zoll, 2.752 x 2.064 Pixel" },
      ],
    },
    itemStockTotal: 25,
    quantity: 0,
    declination: "Das",
    //lines: 3,
  },
  {
    id: 4,
    category: "electronic",
    name: "Windows Notebook",
    imgArray: [Notebook, Notebook2, Notebook3, Notebook4, Notebook5],
    newPrice: 599,
    oldPrice: 669,
    discount: true,
    discountrate: 0.1,
    description: {
      general: `Microsoft Alpha 5 Co-Pilot, 16 Zoll OLED-Display, Intel Core i7, 16 GB RAM, 512 GB SSD.
            Schnelles Business-Notebook für Office, Schule und unterwegs. Full-HD-Display, integrierte Webcam,
            Fingerabdrucksensor, Windows 11 Home. Langlebiger Akku, vielseitige Anschlussmöglichkeiten inklusive USB-C,
            HDMI und Wi-Fi 6.`,
      short:
        "Microsoft Alpha 5 Co-Pilot i7-13620H 16 Zoll OLED, 16 GB, 500 GB SSD, Windows 11 Home.",
      detail: [
        //{ key: "Marke", value: "Microsoft" },
        { key: "Betriebssystem", value: "Windows 11 Home" },
        {
          key: "Prozessor",
          value:
            "Intel® Core™ i7-13620H Prozessor 24 MB Cache, bis zu 4,90 GHz",
        },
        { key: "RAM", value: "16 GB" },
        { key: "Speicherkapazität", value: "512 GB SSD" },
        { key: "Auflösung", value: "40.6 cm / 16 Zoll, 1.920 x 1.200 Pixel" },
      ],
    },
    itemStockTotal: 25,
    quantity: 0,
    declination: "Das",
    //lines: 2,
  },
  {
    id: 5,
    category: "electronic",
    name: "Apple MacBook Air",
    imgArray: [MacBook, MacBook2, MacBook3, MacBook4, MacBook5],
    newPrice: 1099,
    oldPrice: 1199,
    discount: true,
    discountrate: 0.08,
    description: {
      general: `Apple MacBook Air 15,3 Zoll mit Liquid Retina Display (2880 × 1864)
            und leistungsstarkem M4 Chip. 16 GB RAM und 512 GB SSD sorgen
            für schnelle Performance im Alltag und Beruf. 10-Core GPU, Touch ID und
            beleuchtete Tastatur bieten Komfort und Sicherheit. Thunderbolt 4, Wi-Fi 6E, Bluetooth 5.3 sowie macOS und
            Sequoia runden das Gesamtpaket ab.`,
      short:
        "Apple MacBook Air 13,6 Zoll mit M4 Chip, 16 GB RAM, 512 GB SSD. Leistungsstark, leicht und ideal für mobiles Arbeiten.",
      detail: [
        //{ key: "Marke", value: "Apple" },
        { key: "Betriebssystem", value: "macOS" },
        {
          key: "Prozessor",
          value:
            "Apple M4 Chip (10 Core CPU mit 4 Performance-Kernen und 6 Effizienz-Kernen)",
        },
        { key: "RAM", value: "16 GB" },
        { key: "Speicherkapazität", value: "512 GB SSD" },
        {
          key: "Auflösung",
          value: "34.46 cm / 13.6 Zoll, 2.560 x 1.664 Pixel",
        },
      ],
    },
    itemStockTotal: 25,
    quantity: 0,
    declination: "Das",
    //lines: 3,
  },
  {
    id: 6,
    category: "electronic",
    name: "Galaxy Watch",
    imgArray: [GalaxyWatch, GalaxyWatch2, GalaxyWatch3, GalaxyWatch4],
    newPrice: 169.99,
    oldPrice: 189.99,
    discount: true,
    discountrate: 0.1,
    description: {
      general: `Samsung Galaxy Watch7 BT 40 mm mit Aluminiumgehäuse und schlankem Design.
            Leistungsstarker, energieeffizienter Prozessor im Alltag. Schlafanalyse,
            Herzfrequenzmessung und Energy Score unterstützen dein Wohlbefinden. GPS sowie Fitness-Coaching begleiten Training
            und Laufziele. Bluetooth für die Verbindung mit deinem Smartphone.`,
      short:
        "Samsung Galaxy Watch7 BT, 40 mm Smartwatch, Aluminiumgehäuse und sportlichem Nitrilkautschuk-Armband in Cream.",
      detail: [
        //{ key: "Marke", value: "Samsung" },
        { key: "Betriebssystem", value: "Wear OS" },
        {
          key: "Prozessor",
          value: "Exynos W1000 Prozessor Penta-Core-Chip 5 Kerne",
        },
        { key: "RAM", value: "2 GB" },
        { key: "Speicherkapazität", value: "16 GB" },
        {
          key: "Auflösung",
          value: "3.33 cm / 1.3 Zoll, 432 x 432 Pixel",
        },
      ],
    },
    itemStockTotal: 15,
    quantity: 0,
    declination: "Die",
    //lines: 3,
  },
  {
    id: 7,
    category: "electronic",
    name: "Apple iWatch",
    imgArray: [iWatch, iWatch2],
    newPrice: 269.99,
    oldPrice: 299.99,
    discount: true,
    discountrate: 0.08,
    description: {
      general: `Apple Watch Series 11 GPS 46 mm (2025) – elegantes Aluminiumgehäuse, Always-In-Retina-OLED-Display,
            bis zu 24 Stunden Batterielaufzeit. Kompatible mit iOS für einfache Synchronisation.
            Integrierte Herzfrequenzmessung und Multisport-Tracking sorgen für optimiertes Training.
            Sportliches Design und clevere Funktionen für den Alltag.`,
      short:
        "Apple Watch Series 11 GPS 46, 2025, Smartwatch Aluminiumgehäuse, Fluorelastomer, 160–210 mm, Diamantschwarz.",
      detail: [
        //{ key: "Marke", value: "Apple" },
        { key: "Betriebssystem", value: "watchOS" },
        {
          key: "Prozessor",
          value:
            "S-Serie SiPs (System in Package) 64-Bit Dual-Core-Prozessoren",
        },
        { key: "RAM", value: "2 GB" },
        { key: "Speicherkapazität", value: "32 GB" },
        {
          key: "Auflösung",
          value: "4.6 cm / 1.92 Zoll, 416 x 496 Pixel",
        },
      ],
    },
    itemStockTotal: 15,
    quantity: 0,
    declination: "Die",
    //lines: 3,
  },
  {
    id: 8,
    category: "electronic",
    name: "Galaxy Buds",
    imgArray: [GalaxyBuds, GalaxyBuds2, GalaxyBuds3],
    newPrice: 74.99,
    oldPrice: 84.99,
    discount: true,
    discountrate: 0.1,
    description: {
      general: `Samsung Galaxy Buds 3 In-Ear Bluetooth-Kopfhörer mit klarer Klangqualität,
            tiefen Bässen und detailreichen Höhen dank Dual-Lautsprecher-Technologie.
            Steuerung bequem per Gesten direkt am Ohr. Sicherer und komfortabler Sitz,
            lange Batterielaufzeit bis zu 8 Stunden, ideal für Musik, Anrufe und unterwegs.`,
      short:
        "Samsung Galaxy Buds 3-In-Ear Bluetooth-Kopfhörer mit klarer Klangqualität, bis zu 8 Stunden Batterielaufzeit und bequemer, sichere Passform.",
      detail: [
        //{ key: "Marke", value: "Samsung" },
        { key: "Betriebsdauer", value: "6-8 Std" },
        {
          key: "min und maximale Leistung",
          value: "2.5 bis 4.5 Watt",
        },
        { key: "Bluetooth-Version", value: "5.4" },
        { key: "Batterie-/ Akkutyp", value: "Li-Ion" },
      ],
    },
    itemStockTotal: 15,
    quantity: 0,
    declination: "Die",
    //lines: 3,
  },
  {
    id: 9,
    category: "electronic",
    name: "Apple AirPods",
    imgArray: [AirPods, AirPods2, AirPods3, AirPods4],
    newPrice: 99.99,
    oldPrice: 109.99,
    discount: true,
    discountrate: 0.08,
    description: {
      general: `Apple AirPods 4-In-Ear Bluetooth-Kopfhörer mit H2-Chip für klare Anrufe, Stimmisolation und
            freihändig Siri-Steuerung. Personalisiertes 3D-Audio mit
            dynamischem Headtracking sorgt für immersiven Klang. IP54-zertifiziert
            gegen Staub, Schweiß und Wasser. USB‑C-Ladung, bis zu 30 Stunden Wiedergabe
            mit Ladecase und jederzeit über die „Wo ist?“ App ortbar.`,
      short:
        "Apple AirPods 4, In-Ear Bluetooth-Kopfhörer mit klarer Klangqualität, bequemem Sitz und langer Batterielaufzeit.",
      detail: [
        //{ key: "Marke", value: "Apple" },
        { key: "Betriebsdauer", value: "7 bis 10 Std" },
        {
          key: "min und maximale Leistung",
          value: "2.5 bis 4.5 Watt",
        },
        { key: "Bluetooth-Version", value: "5.3" },
        { key: "Batterie-/ Akkutyp", value: "Li-Ion" },
      ],
    },
    itemStockTotal: 15,
    quantity: 0,
    declination: "Die",
    //lines: 3,
  },
  {
    id: 10,
    category: "car",
    name: "Ford Mustang",
    imgArray: [Mustang, Mustang2, Mustang3, Mustang4],
    newPrice: 59999,
    oldPrice: 66999,
    discount: false,
    discountrate: 0,
    description: {
      general: `Der Ford Mustang 5,0-Liter V8 liefert 453 PS und 540 Nm, beschleunigt in nur 4,4 Sekunden auf 100 km/h.
            Sportfahrwerk, Sperrdifferenzial, starke Bremsen und wählbare Exhaust-Sound sorgen für perfekte Kurvenlage
            und dynamisches Fahrerlebnis. Die Soft-Touch-Verkleidung und das abgeflachte Rennsport-Lenkrad 
            bieten den maximalen Komfort und volle Kontrolle.`,
      short:
        "Sportfahrwerk, Zentralverriegelung mit Funkfernbedienung, Apple CarPlay, Alarmanlage. Ledersitze und Klimaautomatik für hohen Komfort.",
      detail: [
        { key: "Kilometerstand", value: "33.600 km" },
        { key: "Leistung", value: "331 kW (450 PS), 5,0 l V8" },
        {
          key: "Kraftstoffart",
          value: "Benzin",
        },
        { key: "Getriebe", value: "Automatik" },
        { key: "Erstzulassung", value: "03/2023" },
        { key: "Fahrzeughalter", value: "1" },
      ],
    },
    itemStockTotal: 10,
    quantity: 0,
    declination: "Der",
    //lines: 3,
  },
  {
    id: 11,
    category: "car",
    name: "Audi RS 7",
    imgArray: [Audi, Audi2, Audi3, Audi4],
    newPrice: 149999,
    oldPrice: 163999,
    discount: false,
    discountrate: 0,
    description: {
      general: `Der Audi RS 7 4,0 TFSI V8 liefert 630 PS und beschleunigt in nur 3,6 Sekunden von 0 auf 100 km/h.
            Mit dem Quattro-Antrieb und dem adaptiven Sportfahrwerk wird jede Fahrt zu einem dynamischen und aufregenden Erlebnis.
            Maximalen Komfort und Luxus mit Matrix-LED-Scheinwerfer, Soft-Close-Türen, Panoramaglasdach
            und modernen Assistenzsystemen.`,
      short:
        "Audi RS 7 Essential 4,0 TFSI, Matrix, VMax305, Pano, HuD, quattro Keramik, Soft-Close, 630PS.",
      detail: [
        { key: "Kilometerstand", value: "25.990 km" },
        { key: "Leistung", value: "463 kW (630 PS), 4,0 l V8" },
        {
          key: "Kraftstoffart",
          value: "Benzin",
        },
        { key: "Getriebe", value: "Automatik" },
        { key: "Erstzulassung", value: "08/2024" },
        { key: "Fahrzeughalter", value: "1" },
      ],
    },
    itemStockTotal: 10,
    quantity: 0,
    declination: "Der",
    //lines: 2,
  },
  {
    id: 12,
    category: "car",
    name: "Mercedes AMG",
    imgArray: [AMG, AMG2, AMG3, AMG4, AMG5],
    newPrice: 129999,
    oldPrice: 142999,
    discount: false,
    discountrate: 0,
    description: {
      general: `Der Mercedes-AMG holt seine Leistung aus einem 4,0 l V8-Motor und
            beschleunigt mit seinen 421 PS in nur 4,3 Sekunden auf 100 km/h. Dank AMG Performance
            4MATIC+ Allradantrieb und aktive Aerodynamik, bietet der AMG höchste Traktion. Panoramadach, Ambientebeleuchtung,
            Kombiinstrument und elektrische Sitze bringen maximalen Fahrspaß.`,
      short:
        "Sportpaket, volldigitales Kombiinstrument, Soundsystem, Panoramadach, Ambientebeleutung, Elektrische Sitze, 360° Kamera.",
      detail: [
        { key: "Kilometerstand", value: "16.622 km" },
        { key: "Leistung", value: "310 kW (421 PS), 4,0 l V8" },
        {
          key: "Kraftstoffart",
          value: "Benzin",
        },
        { key: "Getriebe", value: "Automatik" },
        { key: "Erstzulassung", value: "03/2025" },
        { key: "Fahrzeughalter", value: "1" },
      ],
    },
    itemStockTotal: 10,
    quantity: 0,
    declination: "Der",
    //lines: 3,
  },
  {
    id: 13,
    category: "car",
    name: "BMW 5er",
    imgArray: [BMW5er, BMW5er2, BMW5er3, BMW5er4, BMW5er5],
    newPrice: 75999,
    oldPrice: 83999,
    discount: false,
    discountrate: 0,
    description: {
      general: `Der BMW 5er mit seinen starken 3,0 l 6R leistet 286 PS und erreicht in 7,5 Sekunden 100 km/h.
            Der intelligente BMW xDrive verteilt die Kraft stufenlos auf beide Achsen und sorgt so für optimale Traktion.
            Neueste Hightech-Features wie die Interaction Bar, das HiFi-Soundsystem und
            das Video-Entertainment-System machen jede Fahrt zu einem puren Erlebnis.`,
      short:
        "BWM 5er 3,0 l 286 PS, Sportsitze, Leder-Multifunktionslenkrad, Ambientebeleuchtung, Panoramadach, Soundsystem.",
      detail: [
        { key: "Kilometerstand", value: "17.450 km" },
        { key: "Leistung", value: "223 kW (286 PS), 3,0 l 6R" },
        {
          key: "Kraftstoffart",
          value: "Diesel",
        },
        { key: "Getriebe", value: "Automatik" },
        { key: "Erstzulassung", value: "08/2023" },
        { key: "Fahrzeughalter", value: "1" },
      ],
    },
    itemStockTotal: 10,
    quantity: 0,
    declination: "Der",
    //lines: 3,
  },
  {
    id: 14,
    category: "fruit",
    name: "Apfel",
    newPrice: 0.6,
    oldPrice: 0.8,
    discount: false,
    discountrate: 0,
    imgArray: [apple, apple2],
    description: {
      general: `Frisch geernteter Apfel aus heimischer Region mit seinem knackigem saftigen Fruchtfleisch und intensiven Aroma.
            Mit ca. 50–55 kcal/100 g ist er ein gesunder kalorienarmer Snack, reich an Vitamin C, Kalium und Ballaststoffen wie Pektin.
            Die meiste Energie und Vitamine stecken in der Schale. Egal ob pur, als Zutat fürs Dessert, Kuchen oder Smoothies:
            Diese Äpfel verbinden Geschmack, Qualität und Regionalität.`,
      short: "Frischer, knackiger, roter Apfel aus der Region.",
      detail: [
        { key: "Herkunft", value: "Regional" },
        { key: "Gewicht", value: "ca. 150 g pro Stück" },
        { key: "Vitamine", value: "Vitamin C, B, E, A" },
        { key: "Kalorien", value: "ca. 50-55 kcal/100g" },
      ],
    },
    itemStockTotal: 25,
    quantity: 0,
    declination: "Der",
    //lines: 1,
  },
  {
    id: 15,
    category: "fruit",
    name: "Birne",
    imgArray: [pear, pear2, pear3],
    newPrice: 1,
    oldPrice: 1.11,
    discount: false,
    discountrate: 0,
    description: {
      general: `Die Birne ist eine süß-saftige Frucht aus der heimischen Gegend, die im Spätsommer und Herbst geerntet wird.
            Mit ihrem typischen birnenförmigen Fruchtfleisch Grün, Gelb oder Braun überzeugt sie mit ihrem Aroma.
            Sie ist reich an Vitaminen (A, C, E), Kalium und Ballaststoffe. Mann kann sie pur essen oder als Zutat 
            in einem Gericht verwenden.`,
      short: "Saftig-weiche, frische Birnen aus der heimischen Gegend.",
      detail: [
        { key: "Herkunft", value: "Regional" },
        { key: "Gewicht", value: "ca. 150 g pro Stück" },
        { key: "Vitamine", value: "Vitamin C, B, E, A" },
        { key: "Kalorien", value: "ca. 57 kcal/100g" },
      ],
    },
    itemStockTotal: 25,
    quantity: 0,
    declination: "Die",
    //lines: 2,
  },
  {
    id: 16,
    category: "fruit",
    name: "Weintrauben",
    imgArray: [grape, grape2, grape3],
    newPrice: 2,
    oldPrice: 2.22,
    discount: false,
    discountrate: 0,
    description: {
      general: `Weintrauben sind süße, meist runde Beeren, aus heimischen Anbau, die an verholzenden Kletterpflanzen wachsen.
            Sie variieren in Farben wie hellgrün über violett bis schwarz und sind reich an Vitaminen wie B1, B6, C, K, sowie
            Mineralstoffen, Kalzium, Eisen und damit ein gesunder, kalorienarmer Snack. Tafeltrauben sind pur,
            als Saft oder Wein ein Hochgenuss.`,
      short: "Frische, saftige grüne Weintrauben aus heimischen Anbau.",
      detail: [
        { key: "Herkunft", value: "Regional" },
        { key: "Gewicht", value: "ca. 150 g pro Stück" },
        { key: "Vitamine", value: "Vitamin K, B, C, E" },
        { key: "Kalorien", value: "ca. 67 kcal/100g" },
      ],
    },
    itemStockTotal: 25,
    quantity: 0,
    declination: "Die",
    //lines: 2,
  },
  {
    id: 17,
    category: "fitness",
    name: "Multi Hantelbank",
    imgArray: [WeightBench, WeightBench2],
    newPrice: 500,
    oldPrice: 555,
    discount: true,
    discountrate: 0.1,
    description: {
      general: `Die multifunktionale Trainingsbank besteht aus robustem Stahl und verfügt über gepolsterte Sitz- und
            Rückenlehnen für komfortables Training. Dank ihrer stabilen Konstruktion lassen sich zusätzliche Zubehörteile einfach
            montieren, sodass ein abwechslungsreiches Ganzkörpertraining möglich ist.`,
      short:
        "Multifunktionale Trainingsbank, Verstellbar, Klappbar mit Beincurler für Kniebeuge, Bankdrücken, Rumpfbeuge.",
      detail: [
        { key: "Produktqualität", value: "Home" },
        { key: "Produktabmessungen", value: "160T x 120B x 121H cm" },
        { key: "Artikelgewicht", value: "21 Kg" },
        { key: "Material", value: "robuster Stahl" },
      ],
    },
    itemStockTotal: 10,
    quantity: 0,
    declination: "Die",
    //lines: 3,
  },
  {
    id: 18,
    category: "fitness",
    name: "Laufband",
    imgArray: [Treadmill, Treadmill2],
    newPrice: 500,
    oldPrice: 555,
    discount: true,
    discountrate: 0.1,
    description: {
      general: `Das Sportstech sTread Pro/Lite Laufband für zu Hause aus stabilen, leichtem Aluminium.
            Es verfügt über eine große Lauffläche, ist klappbar und lässt sich per App steuer.
            Geschwindigkeit und Steigung bis 16 % sind individuell einstellbar und ermöglichen abwechslungsreiches Training.
            Für die nötige Leistung sorgen die 7 PS starken Motoren.`,
      short:
        "Sportstech sTread Pro/Lite Laufband für zu Hause, klappbar, Treadmill bis 20 km/h, 16 % Steigung, Laufband 150 kg max.",
      detail: [
        { key: "Produktqualität", value: "Home" },
        { key: "Produktabmessungen", value: "163T x 87,5B x 139,5H cm" },
        { key: "Artikelgewicht", value: "82,9 Kg" },
        { key: "Material", value: "robustes Aluminium" },
      ],
    },
    itemStockTotal: 10,
    quantity: 0,
    declination: "Das",
    //lines: 3,
  },
];
