const mockedPeople = [
  {
    id: 1,
    externalId: null,
    folder: null,
    name: null,
    email: null,
    state: null,
  },
  {
    id: 2,
    externalId: 2,
    folder: "Electronics",
    name: "Hewitt Dreghorn",
    email: "hdreghorn1@deliciousdays.com",
    state: true,
  },
  {
    id: 3,
    externalId: 3,
    folder: "Baby",
    name: "Paddy Andrini",
    email: "pandrini2@webs.com",
    state: true,
  },
  {
    id: 4,
    externalId: 4,
    folder: "Clothing",
    name: "Estell Corradeschi",
    email: "ecorradeschi3@wsj.com",
    state: true,
  },
  {
    id: 5,
    externalId: 5,
    folder: "Sports",
    name: "Arni Lorentz",
    email: "alorentz4@discuz.net",
    state: true,
  },
  {
    id: 6,
    externalId: 6,
    folder: "Games",
    name: "Karlis Eager",
    email: "keager5@tinyurl.com",
    state: true,
  },
  {
    id: 7,
    externalId: 7,
    folder: "Tools",
    name: "Willy Riteley",
    email: "writeley6@ask.com",
    state: true,
  },
  {
    id: 8,
    externalId: 8,
    folder: "Baby",
    name: "Hedvige Pantling",
    email: "hpantling7@sun.com",
    state: false,
  },
  {
    id: 9,
    externalId: 9,
    folder: "Shoes",
    name: "Wally Speak",
    email: "wspeak8@istockphoto.com",
    state: true,
  },
  {
    id: 10,
    externalId: 10,
    folder: "Automotive",
    name: "Druci Creus",
    email: "dcreus9@ibm.com",
    state: true,
  },
  {
    id: 11,
    externalId: 11,
    folder: "Games",
    name: "Anson Meriott",
    email: "ameriotta@wordpress.com",
    state: false,
  },
  {
    id: 12,
    externalId: 12,
    folder: "Toys",
    name: "Lishe Greenier",
    email: "lgreenierb@ameblo.jp",
    state: true,
  },
  {
    id: 13,
    externalId: 13,
    folder: "Outdoors",
    name: "Lane Trowbridge",
    email: "ltrowbridgec@virginia.edu",
    state: true,
  },
  {
    id: 14,
    externalId: 14,
    folder: "Health",
    name: "Chaim Tatlowe",
    email: "ctatlowed@nationalgeographic.com",
    state: true,
  },
  {
    id: 15,
    externalId: 15,
    folder: "Outdoors",
    name: "Holli Cutriss",
    email: "hcutrisse@imgur.com",
    state: true,
  },
  {
    id: 16,
    externalId: 16,
    folder: "Beauty",
    name: "Frederigo Shillabear",
    email: "fshillabearf@t.co",
    state: true,
  },
  {
    id: 17,
    externalId: 17,
    folder: "Automotive",
    name: "Ken Heffernan",
    email: "kheffernang@istockphoto.com",
    state: true,
  },
  {
    id: 18,
    externalId: 18,
    folder: "Health",
    name: "Erna Verbrugge",
    email: "everbruggeh@theguardian.com",
    state: false,
  },
  {
    id: 19,
    externalId: 19,
    folder: "Kids",
    name: "Merlina Kubin",
    email: "mkubini@theglobeandmail.com",
    state: true,
  },
  {
    id: 20,
    externalId: 20,
    folder: "Garden",
    name: "Marney Maus",
    email: "mmausj@ox.ac.uk",
    state: false,
  },
  {
    id: 21,
    externalId: 21,
    folder: "Industrial",
    name: "Belia Faircley",
    email: "bfaircleyk@godaddy.com",
    state: false,
  },
  {
    id: 22,
    externalId: 22,
    folder: "Computers",
    name: "Melita Lockyer",
    email: "mlockyerl@slideshare.net",
    state: true,
  },
  {
    id: 23,
    externalId: 23,
    folder: "Home",
    name: "Hurleigh Claye",
    email: "hclayem@go.com",
    state: false,
  },
  {
    id: 24,
    externalId: 24,
    folder: "Electronics",
    name: "Abrahan Palfrey",
    email: "apalfreyn@marketwatch.com",
    state: false,
  },
  {
    id: 25,
    externalId: 25,
    folder: "Home",
    name: "Marv Fassum",
    email: "mfassumo@paypal.com",
    state: false,
  },
  {
    id: 26,
    externalId: 26,
    folder: "Electronics",
    name: "Esta Mewton",
    email: "emewtonp@ox.ac.uk",
    state: false,
  },
  {
    id: 27,
    externalId: 27,
    folder: "Sports",
    name: "Shina Mynard",
    email: "smynardq@mlb.com",
    state: true,
  },
  {
    id: 28,
    externalId: 28,
    folder: "Games",
    name: "Monti Leteurtre",
    email: "mleteurtrer@photobucket.com",
    state: true,
  },
  {
    id: 29,
    externalId: 29,
    folder: "Outdoors",
    name: "Christoph Norster",
    email: "cnorsters@omniture.com",
    state: false,
  },
  {
    id: 30,
    externalId: 30,
    folder: "Movies",
    name: "Randy Edmott",
    email: "redmottt@bluehost.com",
    state: false,
  },
  {
    id: 31,
    externalId: 31,
    folder: "Computers",
    name: "Farra Rosling",
    email: "froslingu@blinklist.com",
    state: true,
  },
  {
    id: 32,
    externalId: 32,
    folder: "Toys",
    name: "Alf Leal",
    email: "alealv@ebay.com",
    state: true,
  },
  {
    id: 33,
    externalId: 33,
    folder: "Games",
    name: "Vladamir Lyttle",
    email: "vlyttlew@com.com",
    state: false,
  },
  {
    id: 34,
    externalId: 34,
    folder: "Home",
    name: "Shaylyn Rubenfeld",
    email: "srubenfeldx@comcast.net",
    state: false,
  },
  {
    id: 35,
    externalId: 35,
    folder: "Games",
    name: "Devondra Melvin",
    email: "dmelviny@reddit.com",
    state: true,
  },
  {
    id: 36,
    externalId: 36,
    folder: "Home",
    name: "Erie Tewelson",
    email: "etewelsonz@globo.com",
    state: true,
  },
  {
    id: 37,
    externalId: 37,
    folder: "Baby",
    name: "Melamie Teulier",
    email: "mteulier10@fotki.com",
    state: false,
  },
  {
    id: 38,
    externalId: 38,
    folder: "Sports",
    name: "Tome Wakely",
    email: "twakely11@51.la",
    state: true,
  },
  {
    id: 39,
    externalId: 39,
    folder: "Health",
    name: "Dinnie Hildred",
    email: "dhildred12@parallels.com",
    state: true,
  },
  {
    id: 40,
    externalId: 40,
    folder: "Shoes",
    name: "Markus Paulsen",
    email: "mpaulsen13@house.gov",
    state: true,
  },
  {
    id: 41,
    externalId: 41,
    folder: "Health",
    name: "Wake Sines",
    email: "wsines14@tinypic.com",
    state: true,
  },
  {
    id: 42,
    externalId: 42,
    folder: "Garden",
    name: "Roselin Hebbard",
    email: "rhebbard15@naver.com",
    state: true,
  },
  {
    id: 43,
    externalId: 43,
    folder: "Games",
    name: "Greggory Kos",
    email: "gkos16@free.fr",
    state: true,
  },
  {
    id: 44,
    externalId: 44,
    folder: "Grocery",
    name: "Bendix Clampe",
    email: "bclampe17@yahoo.co.jp",
    state: true,
  },
  {
    id: 45,
    externalId: 45,
    folder: "Computers",
    name: "Fifine Sallter",
    email: "fsallter18@technorati.com",
    state: true,
  },
  {
    id: 46,
    externalId: 46,
    folder: "Movies",
    name: "Alayne Herrema",
    email: "aherrema19@ovh.net",
    state: false,
  },
  {
    id: 47,
    externalId: 47,
    folder: "Tools",
    name: "Fey Lawrenz",
    email: "flawrenz1a@1688.com",
    state: false,
  },
  {
    id: 48,
    externalId: 48,
    folder: "Outdoors",
    name: "Mariejeanne Bellfield",
    email: "mbellfield1b@printfriendly.com",
    state: true,
  },
  {
    id: 49,
    externalId: 49,
    folder: "Grocery",
    name: "Giorgio Hitzke",
    email: "ghitzke1c@histats.com",
    state: true,
  },
  {
    id: 50,
    externalId: 50,
    folder: "Industrial",
    name: "Christabella Lurcock",
    email: "clurcock1d@indiatimes.com",
    state: true,
  },
  {
    id: 51,
    externalId: 51,
    folder: "Books",
    name: "Casi Riceards",
    email: "criceards1e@fema.gov",
    state: true,
  },
  {
    id: 52,
    externalId: 52,
    folder: "Baby",
    name: "Cherilyn De Coursey",
    email: "cde1f@flavors.me",
    state: false,
  },
  {
    id: 53,
    externalId: 53,
    folder: "Tools",
    name: "Tirrell Nussen",
    email: "tnussen1g@php.net",
    state: false,
  },
  {
    id: 54,
    externalId: 54,
    folder: "Health",
    name: "Ashia Duckit",
    email: "aduckit1h@stumbleupon.com",
    state: true,
  },
  {
    id: 55,
    externalId: 55,
    folder: "Sports",
    name: "Skip Pimlett",
    email: "spimlett1i@cbc.ca",
    state: false,
  },
  {
    id: 56,
    externalId: 56,
    folder: "Garden",
    name: "Leeland De la Eglise",
    email: "lde1j@tuttocitta.it",
    state: false,
  },
  {
    id: 57,
    externalId: 57,
    folder: "Computers",
    name: "Sandro Zoren",
    email: "szoren1k@shutterfly.com",
    state: true,
  },
  {
    id: 58,
    externalId: 58,
    folder: "Toys",
    name: "Raimondo Vossgen",
    email: "rvossgen1l@jimdo.com",
    state: false,
  },
  {
    id: 59,
    externalId: 59,
    folder: "Baby",
    name: "Charita Malmar",
    email: "cmalmar1m@cargocollective.com",
    state: true,
  },
  {
    id: 60,
    externalId: 60,
    folder: "Books",
    name: "Lovell Randell",
    email: "lrandell1n@tinypic.com",
    state: true,
  },
  {
    id: 61,
    externalId: 61,
    folder: "Computers",
    name: "Andrey Shorthill",
    email: "ashorthill1o@xinhuanet.com",
    state: true,
  },
  {
    id: 62,
    externalId: 62,
    folder: "Computers",
    name: "Coral Brushneen",
    email: "cbrushneen1p@flavors.me",
    state: false,
  },
  {
    id: 63,
    externalId: 63,
    folder: "Health",
    name: "Darren Extill",
    email: "dextill1q@twitpic.com",
    state: false,
  },
  {
    id: 64,
    externalId: 64,
    folder: "Clothing",
    name: "Zarla Ridings",
    email: "zridings1r@cnbc.com",
    state: true,
  },
  {
    id: 65,
    externalId: 65,
    folder: "Games",
    name: "Sharline Darragon",
    email: "sdarragon1s@tripod.com",
    state: false,
  },
  {
    id: 66,
    externalId: 66,
    folder: "Shoes",
    name: "Willy Windrum",
    email: "wwindrum1t@lycos.com",
    state: true,
  },
  {
    id: 67,
    externalId: 67,
    folder: "Sports",
    name: "Skye Brahmer",
    email: "sbrahmer1u@netvibes.com",
    state: false,
  },
  {
    id: 68,
    externalId: 68,
    folder: "Grocery",
    name: "Willamina Seton",
    email: "wseton1v@bigcartel.com",
    state: true,
  },
  {
    id: 69,
    externalId: 69,
    folder: "Music",
    name: "Bea Abrahams",
    email: "babrahams1w@github.com",
    state: false,
  },
  {
    id: 70,
    externalId: 70,
    folder: "Automotive",
    name: "Townsend Flockhart",
    email: "tflockhart1x@gravatar.com",
    state: false,
  },
  {
    id: 71,
    externalId: 71,
    folder: "Music",
    name: "Welby Dibben",
    email: "wdibben1y@addtoany.com",
    state: false,
  },
  {
    id: 72,
    externalId: 72,
    folder: "Computers",
    name: "Elton McKendo",
    email: "emckendo1z@usatoday.com",
    state: true,
  },
  {
    id: 73,
    externalId: 73,
    folder: "Outdoors",
    name: "Cinda Gile",
    email: "cgile20@ocn.ne.jp",
    state: true,
  },
  {
    id: 74,
    externalId: 74,
    folder: "Jewelery",
    name: "Vittoria England",
    email: "vengland21@timesonline.co.uk",
    state: false,
  },
  {
    id: 75,
    externalId: 75,
    folder: "Beauty",
    name: "Sadella Huskisson",
    email: "shuskisson22@google.co.uk",
    state: false,
  },
  {
    id: 76,
    externalId: 76,
    folder: "Movies",
    name: "Cornela Ruddock",
    email: "cruddock23@cdc.gov",
    state: true,
  },
  {
    id: 77,
    externalId: 77,
    folder: "Music",
    name: "Noach Loache",
    email: "nloache24@ox.ac.uk",
    state: true,
  },
  {
    id: 78,
    externalId: 78,
    folder: "Clothing",
    name: "Winthrop McNuff",
    email: "wmcnuff25@topsy.com",
    state: false,
  },
  {
    id: 79,
    externalId: 79,
    folder: "Automotive",
    name: "Zenia Petticrew",
    email: "zpetticrew26@redcross.org",
    state: true,
  },
  {
    id: 80,
    externalId: 80,
    folder: "Baby",
    name: "Hesther Mousley",
    email: "hmousley27@arizona.edu",
    state: true,
  },
  {
    id: 81,
    externalId: 81,
    folder: "Movies",
    name: "Pascale Rawles",
    email: "prawles28@state.gov",
    state: false,
  },
  {
    id: 82,
    externalId: 82,
    folder: "Jewelery",
    name: "Dana Bysshe",
    email: "dbysshe29@amazon.de",
    state: true,
  },
  {
    id: 83,
    externalId: 83,
    folder: "Music",
    name: "Pavel Huckin",
    email: "phuckin2a@aol.com",
    state: true,
  },
  {
    id: 84,
    externalId: 84,
    folder: "Outdoors",
    name: "Arleta Keyhoe",
    email: "akeyhoe2b@blogtalkradio.com",
    state: false,
  },
  {
    id: 85,
    externalId: 85,
    folder: "Games",
    name: "Tully McAllester",
    email: "tmcallester2c@house.gov",
    state: true,
  },
  {
    id: 86,
    externalId: 86,
    folder: "Kids",
    name: "Elita Chasmoor",
    email: "echasmoor2d@sfgate.com",
    state: true,
  },
  {
    id: 87,
    externalId: 87,
    folder: "Toys",
    name: "Mirabel Walkingshaw",
    email: "mwalkingshaw2e@hibu.com",
    state: false,
  },
  {
    id: 88,
    externalId: 88,
    folder: "Books",
    name: "Gare Durtnell",
    email: "gdurtnell2f@google.com.au",
    state: false,
  },
  {
    id: 89,
    externalId: 89,
    folder: "Outdoors",
    name: "Dorella Glennon",
    email: "dglennon2g@boston.com",
    state: false,
  },
  {
    id: 90,
    externalId: 90,
    folder: "Automotive",
    name: "Torre Danslow",
    email: "tdanslow2h@cam.ac.uk",
    state: false,
  },
  {
    id: 91,
    externalId: 91,
    folder: "Movies",
    name: "Daffie Revens",
    email: "drevens2i@altervista.org",
    state: true,
  },
  {
    id: 92,
    externalId: 92,
    folder: "Electronics",
    name: "Wye Goad",
    email: "wgoad2j@nyu.edu",
    state: false,
  },
  {
    id: 93,
    externalId: 93,
    folder: "Health",
    name: "Marika Albrooke",
    email: "malbrooke2k@so-net.ne.jp",
    state: true,
  },
  {
    id: 94,
    externalId: 94,
    folder: "Music",
    name: "Kurt Hexter",
    email: "khexter2l@bbc.co.uk",
    state: true,
  },
  {
    id: 95,
    externalId: 95,
    folder: "Sports",
    name: "Rolf Cathery",
    email: "rcathery2m@biglobe.ne.jp",
    state: false,
  },
  {
    id: 96,
    externalId: 96,
    folder: "Home",
    name: "Madelina McGreal",
    email: "mmcgreal2n@newyorker.com",
    state: true,
  },
  {
    id: 97,
    externalId: 97,
    folder: "Music",
    name: "Ruttger Ferriman",
    email: "rferriman2o@ocn.ne.jp",
    state: true,
  },
  {
    id: 98,
    externalId: 98,
    folder: "Automotive",
    name: "Doy Radborne",
    email: "dradborne2p@yandex.ru",
    state: true,
  },
  {
    id: 99,
    externalId: 99,
    folder: "Sports",
    name: "Nancey Chang",
    email: "nchang2q@usnews.com",
    state: true,
  },
  {
    id: 100,
    externalId: 100,
    folder: "Toys",
    name: "Ulrich Bernhard",
    email: "ubernhard2r@unesco.org",
    state: false,
  },
];

export default mockedPeople;
