$(document).ready(function(){

    //LOCATION DATA
    
    var locations = [{
    //The Nook on Piedmont Park
    //Location Details
    name: "The Nook",
    address: "1144 Piedmont Ave NE, Atlanta, GA 30309",
    webURL: "https://thenookatlanta.com/",
    phone: "(404) 745-9222",
    mapURL: "https://goo.gl/maps/Bca67LR8s9Tr2xBi9",
    mapEmbed: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.0177661455186!2d-84.3807195847919!3d33.78603938067918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f50446cd79336b%3A0x703bf201e11237f8!2sThe%20Nook%20on%20Piedmont%20Park!5e0!3m2!1sen!2sus!4v1567789892184!5m2!1sen!2sus`,
    //Location -- American (Traditional)
    event: false,
    bar: true,
    restaurant: true,
    club: false,
    marketplace: false,
    iceCreamParlor: false,
    movieTheater: false,
    Winery: false,
    hotelResort: false,
    //Food
    american: true,
    thai: false,
    persian: false,
    seafood: false,
    mexican: false,
    hawaiin: false,
    sushi: false,
    korean: false,
    italian: false,
    latinAmerican: false,
    french: false,
    iceCream: false,
    asianFusion: false,
    vegan: false,
    //Price
    $: false,
    $$: true,
    $$$: false,
    $$$$: false,
    //Crowd
    alternativeHipsters: true,
    workers: true,
    families: true,
    students: true,
    olderCrowd: true,
    //General Features
    delivery: false,
    takeout: true,
    reservations: true,
    credit: true,
    outdoorSeating: true,
    groups: true,
    waiterService: true,
    TV: true,
    veganOptions: true,
    triviaNight: true,
    //Drinks
    fullBar: true,
    happyHour: true,
    //Meals Served
    breakfast: true,
    brunch: true,
    lunch: true,
    dinner: true,
    dessert: true,
    lateNight: false,
    //Parking
    street: false,
    garage: false,
    valet: true,
    privateLot: true},
    
    {//Beetlecat -- Seafood Restaurant
    //Location Detials
    name: `Beetlecat`,
    Address: `299 North Highland Avenue Northeast, Atlanta, GA 30307`,
    Website: `http://www.beetlecatatl.com/`,
    Phone: `(678) 732-0360`,
    mapURL: `https://goo.gl/maps/HiYowMpvJ2sQ1fVb9`,
    mapEmbed: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.93608798446!2d-84.36095294925848!3d33.762317380590915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5040159d58749%3A0x9e07701e7534c80e!2s299%20North%20Highland%20Avenue%20Northeast%2C%20Atlanta%2C%20GA%2030307!5e0!3m2!1sen!2sus!4v1567790051151!5m2!1sen!2sus`,
    //Location
    event: false, 
    bar: true, 
    restaurant: true, 
    club: false, 
    marketplace: false, 
    iceCreamParlor: false, 
    movieTheater: false, 
    Winery: false, 
    hotelResort: false,
    //Food Type:
    american: false, 
    thai: false, 
    persian: false, 
    seafood: true, 
    mexican: false, 
    hawaiin: false, 
    sushi: false, 
    korean: false, 
    italian: false, 
    latinAmerican: false, 
    french: false, 
    iceCream: false, 
    asianFusion: false, 
    vegan: false,
    //Price
    $: false,
    $$: true,
    $$$: false,
    $$$$: false,
    //Crowd
    alternativeHipsters: true,
    workers: true,
    families: true,
    students: true,
    olderCrowd: true,
    //General Features
    delivery: false,
    takeout: true,
    reservations: true,
    credit: true,
    outdoorSeating: true,
    groups: true,
    waiterService: true,
    TV: false,
    veganOptions: true,
    triviaNight: false,
    //Drinks
    fullBar: true,
    happyHour: true,
    //Meals Served
    breakfast: false,
    brunch: true,
    lunch: false,
    dinner: true,
    dessert: true,
    lateNight: false,
    //Parking
    street: true,
    garage: false,
    valet: false,
    privateLot: false},
    
    {//Serpas True Food (mardi gras)
    //Location Details
    name: `Serpas`,
    address: `659 Auburn Ave NE #501, Atlanta, GA 30312`,
    website: `http://www.serpasrestaurant.com/`,
    phone: `(404) 688-0040`,
    mapURL: `https://goo.gl/maps/YemB9iHisGDniSza7`,
    mapEmbed: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.1783988239963!2d-84.36854364925863!3d33.75605558059264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f503f7dc7e3583%3A0x2198f950e0e8a074!2s659%20Auburn%20Ave%20NE%20%23501%2C%20Atlanta%2C%20GA%2030312!5e0!3m2!1sen!2sus!4v1567791080150!5m2!1sen!2sus`,
    //Location
    event: false, 
    bar: true, 
    restaurant: true, 
    club: false, 
    marketplace: false, 
    iceCreamParlor: false, 
    movieTheater: false, 
    Winery: false, 
    hotelResort: false,
    //Food Type:
    american: true, 
    thai: false, 
    persian: false, 
    seafood: false, 
    mexican: false, 
    hawaiin: false, 
    sushi: false, 
    korean: false, 
    italian: false, 
    latinAmerican: false, 
    french: false, 
    iceCream: false, 
    asianFusion: false, 
    vegan: false,
    //Price
    $: false,
    $$: true,
    $$$: false,
    $$$$: false,
    //Crowd
    alternativeHipsters: false,
    workers: true,
    families: true,
    students: false,
    olderCrowd: true,
    //General Features
    delivery: false,
    takeout: true,
    reservations: true,
    credit: true,
    outdoorSeating: false,
    groups: true,
    waiterService: true,
    TV: false,
    veganOptions: true,
    triviaNight: false,
    //Drinks
    fullBar: true,
    happyHour: false,
    //Meals Served
    breakfast: false,
    brunch: true,
    lunch: false,
    dinner: true,
    dessert: true,
    lateNight: false,
    //Parking
    street: false,
    garage: false,
    valet: true,
    privateLot: false},
    
    {//Candytopia -- Candy Museum
    //Location Details
    name: `Candytopia`,
    address: `3535 Peachtree Rd NE Suite 100, Atlanta, GA 30326`,
    website: `http://www.candytopia.com/`,
    mapURL: `https://goo.gl/maps/ygQ8YF93wXzkxrzq5`,
    mapEmbed:`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.47527681347!2d-84.36182094925606!3d33.85164028056627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f50f56aaca29cb%3A0x9dbd7d8e8436249e!2s3535%20Peachtree%20Rd%20NE%20%23100%2C%20Atlanta%2C%20GA%2030326!5e0!3m2!1sen!2sus!4v1567792082723!5m2!1sen!2sus`,
    //Location
    event: true, 
    bar: true, 
    restaurant: false, 
    club: false, 
    marketplace: false, 
    iceCreamParlor: false, 
    movieTheater: false, 
    Winery: false, 
    hotelResort: false,
    //Food Type:
    american: false, 
    thai: false, 
    persian: false, 
    seafood: false, 
    mexican: false, 
    hawaiin: false, 
    sushi: false, 
    korean: false, 
    italian: false, 
    latinAmerican: false, 
    french: false, 
    iceCream: false, 
    asianFusion: false, 
    vegan: false,
    //Price
    $: false,
    $$: true,
    $$$: false,
    $$$$: false,
    //Crowd
    alternativeHipsters: true,
    workers: true,
    families: true,
    students: true,
    olderCrowd: false,
    //General Features
    delivery: false,
    takeout: false,
    reservations: true,
    credit: true,
    outdoorSeating: false,
    groups: true,
    waiterService: false,
    TV: false,
    veganOptions: false,
    triviaNight: false,
    //Drinks
    fullBar: false,
    happyHour: false,
    //Meals Served
    breakfast: false,
    brunch: false,
    lunch: false,
    dinner: false,
    dessert: false,
    lateNight: false,
    //Parking
    street: true,
    garage: true,
    valet: false,
    privateLot: false},
    
    {//Argosy -- New American Restaurant
    //Location Details
    name: `Argosy`,
    address: `470 Flat Shoals Ave SE, Atlanta, GA 30316`,
    website: `http://argosy-east.com/`,
    phone: `(404) 577-0407`,
    mapURL: `https://goo.gl/maps/pkzqDdVBuKPMxFEF7`,
    mapEmbed:`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.749041397762!2d-84.34847044925905!3d33.74130498059675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5015b0abfb8d5%3A0x4de173a1e0ce3c52!2s470%20Flat%20Shoals%20Ave%20SE%2C%20Atlanta%2C%20GA%2030316!5e0!3m2!1sen!2sus!4v1567792439889!5m2!1sen!2sus`,
    //Location
    event: false, 
    bar: true, 
    restaurant: true, 
    club: false, 
    marketplace: false, 
    iceCreamParlor: false, 
    movieTheater: false, 
    winery: false, 
    hotelResort: false,
    //Food Type:
    american: true, 
    thai: false, 
    persian: false, 
    seafood: false, 
    mexican: false, 
    hawaiin: false, 
    sushi: false, 
    korean: false, 
    italian: false, 
    latinAmerican: false, 
    french: false, 
    iceCream: false, 
    asianFusion: false, 
    vegan: false,
    //Price
    $: false,
    $$: true,
    $$$: false,
    $$$$: false,
    //Crowd
    alternativeHipsters: true,
    workers: true,
    families: true,
    students: true,
    olderCrowd: true,
    //General Features
    delivery: false,
    takeout:  true,
    reservations: true,
    credit: true,
    outdoorSeating: true,
    groups: true,
    waiterService: true,
    TV: false,
    veganOptions: true,
    triviaNight: true,
    //Drinks
    fullBar: true,
    happyHour:true,
    //Meals Served
    breakfast: false,
    brunch: true,
    lunch: false,
    dinner: true,
    dessert: false,
    lateNight: true,
    //Parking
    street: true,
    garage: false,
    valet: false,
    privateLot: false},
    
    
    {//Banshee -- American Restaurant
    //Location Details
    name: `Banshee`,
    address: `1271 Glenwood Ave SE, Atlanta, GA 30316`,
    website: `https://www.banshee-atl.com/`,
    phone: `(470) 428-2034`,
    mapURL: `https://goo.gl/maps/RkTVCCPXUGmoBLny8`,
    mapEmbed: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.800993588396!2d-84.3481212492591!3d33.739961780597135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5015b802348e9%3A0x3b8aa311e62b6c95!2s1271%20Glenwood%20Ave%20SE%2C%20Atlanta%2C%20GA%2030316!5e0!3m2!1sen!2sus!4v1567793588054!5m2!1sen!2sus`,
    //Location
    event: false, 
    bar: true, 
    restaurant: true, 
    club: false, 
    marketplace: false, 
    iceCreamParlor: false, 
    movieTheater: false, 
    winery: false, 
    hotelResort: false,
    //Food Type:
    american: true, 
    thai: false, 
    persian: false, 
    seafood: false, 
    mexican: false, 
    hawaiin: false, 
    sushi: false, 
    korean: false, 
    italian: false, 
    latinAmerican: false, 
    french: false, 
    iceCream: false, 
    asianFusion: false, 
    vegan: false,
    //Price
    $: false,
    $$: true,
    $$$: false,
    $$$$: false,
    //Crowd
    alternativeHipsters: true,
    workers: true,
    families: true,
    students: true,
    olderCrowd: true,
    //General Features
    delivery: false,
    takeout:  true,
    reservations: true,
    credit: true,
    outdoorSeating: false,
    groups: true,
    waiterService: true,
    TV: false,
    veganOptions: true,
    triviaNight: true,
    //Drinks
    fullBar: true,
    happyHour:true,
    //Meals Served
    breakfast: false,
    brunch:  false,
    lunch: false,
    dinner: true,
    dessert: true,
    lateNight: true,
    //Parking
    street: true,
    garage: false,
    valet: false,
    privateLot: false},
    
    {
    //Thai 5 in Little 5 Points - Thai Restaurant
    //Location Details
    name: `Thai5`,
    website: `https://www.thai5atlanta.com/`,
    address: `1148 Euclid Ave NE #1939, Atlanta, GA 30307`,
    phone: `(404) 521-3555`,
    mapURL: `https://goo.gl/maps/J2gLrvvCvBYe3saCA`,
    mapEmbed: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.829353857268!2d-84.35210624925838!3d33.765075280590274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f506a8df5edf21%3A0xafef832ac9daf5db!2s1148%20Euclid%20Ave%20NE%20%231939%2C%20Atlanta%2C%20GA%2030307!5e0!3m2!1sen!2sus!4v1567794312339!5m2!1sen!2sus`,
    //Location
    event: false, 
    bar: true, 
    restaurant: true, 
    club: false, 
    marketplace: false, 
    iceCreamParlor: false, 
    movieTheater: false, 
    winery: false, 
    hotelResort: false,
    //Food Type:
    american: false,
    thai: true,  
    persian: false, 
    seafood: false, 
    mexican: false, 
    hawaiin: false, 
    sushi: false, 
    korean: false, 
    italian: false, 
    latinAmerican: false, 
    french: false, 
    iceCream: false, 
    asianFusion: false, 
    vegan: false,
    //Price
    $: false,
    $$: true,
    $$$: false,
    $$$$: false,
    //Crowd
    alternativeHipsters: true,
    workers: true,
    families: true,
    students: true,
    olderCrowd: false,
    //General Features
    delivery: true,
    takeout:  true,
    reservations: true,
    credit: true,
    outdoorSeating:  false,
    groups: true,
    waiterService:  true,
    TV: false,
    veganOptions:  true,
    triviaNight: false,
    //Drinks
    fullBar: true,
    happyHour:true,
    //Meals Served
    breakfast: false,
    brunch:  false,
    lunch: true,
    dinner: true,
    dessert: true,
    lateNight: false,
    //Parking
    street: true,
    garage: false,
    valet: false,
    privateLot: false},
    
    //The Porter Beer Bar -- Bar
    //Location Details
    {name: `The Porter Beer Bar`,
    address: `1156 Euclid Ave NE, Atlanta, GA 30307`,
    website: `http://www.theporterbeerbar.com/`,
    phone: `(404) 223-0393`,
    mapURL: `https://goo.gl/maps/bAetDWoMrSHg32jbA`,
    mapEmbed: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.8258744871946!2d-84.3518701492584!3d33.765165180590195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f506a8d913904d%3A0x6dbb384d474211bf!2s1156%20Euclid%20Ave%20NE%2C%20Atlanta%2C%20GA%2030307!5e0!3m2!1sen!2sus!4v1567794943295!5m2!1sen!2sus`,
    //Location
    event: false, 
    bar: true,
    restaurant: false, 
    club: false, 
    marketplace: false, 
    iceCreamParlor: false, 
    movieTheater: false, 
    winery: false, 
    hotelResort: false,
    //Food Type:
    american: true,
    thai: false, 
    persian: false, 
    seafood: false, 
    mexican: false, 
    hawaiin: false, 
    sushi: false, 
    korean: false, 
    italian: false, 
    latinAmerican: false, 
    french: false, 
    iceCream: false, 
    asianFusion: false, 
    vegan: false,
    //Price
    $: false,
    $$: true,
    $$$: false,
    $$$$: false,
    //Crowd
    alternativeHipsters: true,
    workers: true,
    families: true,
    students: true,
    olderCrowd: false,
    //General Features
    delivery: false,
    takeout: false,
    reservations:  false,
    credit: true,
    outdoorSeating: false,
    groups: true,
    waiterService: false,
    TV: false,
    veganOptions: true,
    triviaNight: false,
    //Drinks
    fullBar: true,
    happyHour:true,
    //Meals Served
    breakfast: false,
    brunch:  false,
    lunch: true,
    dinner: true,
    dessert: false,
    lateNight: true,
    //Parking
    street: true,
    garage: false,
    valet: false,
    privateLot: false},
    
    
    //Front Page News Patio Bar & Grill -- American Restaurant
    //Location Details
    {name: `Front Page News Patio Bar & Grill`,
    address: `351 Moreland Ave NE, Atlanta, GA 30307`,
    Website: `https://www.frontpagenews.com/`,
    phone: `(404) 475-7777`,
    mapURL: `https://goo.gl/maps/Rg5z9TQzaPx4mLSe7`,
    mapEmbed: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.874433989524!2d-84.35089434925841!3d33.76391048059057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f506aecb9bf521%3A0xc86a507eb2632f57!2s351%20Moreland%20Ave%20NE%2C%20Atlanta%2C%20GA%2030307!5e0!3m2!1sen!2sus!4v1567795224457!5m2!1sen!2sus`,
    //Location
    event: false, 
    bar: false, 
    restaurant: true,
    club: false, 
    marketplace: false, 
    iceCreamParlor: false, 
    movieTheater: false, 
    winery: false, 
    hotelResort: false,
    //Food Type:
    american: true,
    thai: false, 
    persian: false, 
    seafood: false, 
    mexican: false, 
    hawaiin: false, 
    sushi: false, 
    korean: false, 
    italian: false, 
    latinAmerican: false, 
    french: false, 
    iceCream: false, 
    asianFusion: false, 
    vegan: false,
    //Price
    $: false,
    $$: true,
    $$$: false,
    $$$$: false,
    //Crowd
    alternativeHipsters: true,
    workers: true,
    families: true,
    students: true,
    olderCrowd: true,
    //General Features
    Delivery: true,
    takeout: true,
    reservations: false,
    credit: true,
    outdoorSeating: false,
    groups: true,
    waiterService: true,
    TV: true,
    veganOptions:  true,
    triviaNight: false,
    //Drinks
    fullBar: true,
    happyHour:true,
    //Meals Served
    breakfast: false,
    brunch:  false,
    lunch: true,
    dinner: true,
    dessert: true,
    lateNight: false,
    //Parking
    street: true,
    garage: false,
    valet: false,
    privateLot: false},
    
    
    //Bon Ton -- Seafood Restaurant
    //Location Details
    {name: `Bon Ton`,
    address: `674 Myrtle St NE, Atlanta, GA 30308`,
    website: `http://bontonatl.com/`,
    phone: `(404) 996-6177`,
    mapURL: `https://goo.gl/maps/eoPzCMJLzgbgUq6p7`,
    mapEmbed: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.5230219011514!2d-84.38260274925818!3d33.772989480588066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5046c276f7a0b%3A0x5d7e01e7d1c789a1!2s674%20Myrtle%20St%20NE%2C%20Atlanta%2C%20GA%2030308!5e0!3m2!1sen!2sus!4v1567795523166!5m2!1sen!2sus`,
    //Location
    event: false, 
    bar: false,
    restaurant: true, 
    club: false, 
    marketplace: false, 
    iceCreamParlor: false, 
    movieTheater: false, 
    winery: false, 
    hotelResort: false,
    //Food Type:
    american: false, 
    thai: false, 
    persian: false, 
    seafood:  true,
    mexican: false, 
    hawaiin: false, 
    sushi: false, 
    korean: false, 
    italian: false, 
    latinAmerican: false, 
    french: false, 
    iceCream: false, 
    asianFusion: false, 
    vegan: false,
    //Price
    $: false,
    $$: true,
    $$$: false,
    $$$$: false,
    //Crowd
    alternativeHipsters: true,
    workers: true,
    families: true,
    students: true,
    olderCrowd: false,
    //General Features
    Delivery: false,
    takeout: true,
    reservations: true,
    credit: true,
    outdoorSeating: false,
    groups: true,
    waiterService: true,
    TV: false,
    veganOptions:  true,
    triviaNight: false,
    //Drinks
    fullBar: true,
    happyHour:true,
    //Meals Served
    breakfast: false,
    brunch:  false,
    lunch: true,
    dinner: true,
    dessert: true,
    lateNight: false,
    //Parking
    street: true,
    garage: false,
    valet: false,
    privateLot: true},
    
    
    //Tongue and Groove -- Night Club
    //Location Details
    {name: `Tongue and Groove`,
    website: `http://www.tandgonline.com/`,
    address: `565 Main St NE, Atlanta, GA 30324`,
    phone: `(404) 261-2325`,
    mapURL: `https://goo.gl/maps/KWjYNXDo869osc9e8`,
    mapEmbed: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.6144848509134!2d-84.37084454925682!3d33.82226048057427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f505c247f3d2dd%3A0xff2c59706ddfbea0!2s565%20Main%20St%20NE%2C%20Atlanta%2C%20GA%2030324!5e0!3m2!1sen!2sus!4v1567796410207!5m2!1sen!2sus`,
    //Location
    event: false, 
    bar: false, 
    restaurant: false, 
    club: true,
    marketplace: false, 
    iceCreamParlor: false, 
    movieTheater: false, 
    winery: false, 
    hotelResort: false,
    //Food Type:
    american: true,
    thai: false, 
    persian: false, 
    seafood:  false, 
    mexican: false, 
    hawaiin: false, 
    sushi: false, 
    korean: false, 
    italian: false, 
    latinAmerican: false, 
    french: false, 
    iceCream: false, 
    asianFusion: false, 
    vegan: false,
    //Price
    $: false,
    $$: true,
    $$$: false,
    $$$$: false,
    //Crowd
    alternativeHipsters: true,
    workers: true,
    families: false,
    students: true,
    olderCrowd: false,
    //General Features
    Delivery: false,
    takeout: false,
    reservations: true,
    credit: true,
    outdoorSeating: false,
    groups: true,
    waiterService: true,
    TV: false,
    veganOptions:  true,
    triviaNight: false,
    //Drinks
    fullBar: true,
    happyHour:true,
    //Meals Served
    breakfast: false,
    brunch:  false,
    lunch: true,
    dinner: true,
    dessert: true,
    lateNight: false,
    //Parking
    street: false,
    garage: true,
    valet: true,
    privateLot: false},
    
    
    //Rumi's Kitchen - Persian Restaurant
    //Location Details
    {name: `Rumi’s Kitchen`,
    Address: `6112 Roswell Rd, Atlanta, GA 30328`,
    website: `http://www.rumiskitchen.com/`,
    Phone: `(404) 477-2100`,
    mapURL: `https://goo.gl/maps/hu82xNSXjDpmkGLA8`,
    mapEmbed: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.742186522212!2d-84.38198484925418!3d33.92203438054653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f50e96d90136af%3A0x69b96a7a5172cb07!2s6112%20Roswell%20Rd%2C%20Sandy%20Springs%2C%20GA%2030328!5e0!3m2!1sen!2sus!4v1567796815484!5m2!1sen!2sus`,
    //Location
    event: false, 
    bar: false, 
    restaurant: true, 
    club: false, 
    marketplace: false, 
    iceCreamParlor: false, 
    movieTheater: false, 
    winery: false, 
    hotelResort: false,
    //Food Type:
    American: false, 
    thai: false, 
    persian:  true,
    seafood:  false, 
    mexican: false, 
    hawaiin: false, 
    sushi: false, 
    korean: false, 
    italian: false, 
    latinAmerican: false, 
    french: false, 
    iceCream: false, 
    asianFusion: false, 
    vegan: false,
    //Price
    $: false,
    $$: false,
    $$$: true,
    $$$$: false,
    //Crowd
    alternativeHipsters: true,
    workers: true,
    families: true,
    students: true,
    olderCrowd: true,
    //General Features
    Delivery: true,
    takeout: true,
    reservations: true,
    credit: true,
    outdoorSeating: false,
    groups: true,
    waiterService: true,
    TV: false,
    veganOptions:  true,
    triviaNight: false,
    //Drinks
    fullBar: true,
    happyHour: true,
    //Meals Served
    breakfast: false,
    brunch:  false,
    lunch: true,
    dinner: true,
    dessert: true,
    lateNight: false,
    //Parking
    street: false,
    garage: false,
    valet: true,
    privateLot: false},
    
    
    //Hampton and Hudson -- Restaurant | Bar
    //Location Details
    {name: `Hampton and Hudson`,
    address: `299 North Highland Avenue Northeast, Atlanta, GA 30307`,
    website: `hhttp://www.hamptonandhudson.com/`,
    phone: `(404) 948-2123`,
    mapURL: `https://goo.gl/maps/HiYowMpvJ2sQ1fVb9`,
    mapEmbed: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.93608798446!2d-84.36095294925848!3d33.762317380590915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5040159d58749%3A0x9e07701e7534c80e!2s299%20North%20Highland%20Avenue%20Northeast%2C%20Atlanta%2C%20GA%2030307!5e0!3m2!1sen!2sus!4v1567797700470!5m2!1sen!2sus`,
    //Location
    event: false, 
    bar: true, 
    Restaurant: true, 
    club: false, 
    marketplace: false, 
    iceCreamParlor: false, 
    movieTheater: false, 
    winery: false, 
    hotelResort: false,
    //Food Type:
    american: true, 
    thai: false, 
    persian: false, 
    seafood: false, 
    mexican: false, 
    hawaiin: false, 
    sushi: false, 
    korean: false, 
    italian: false, 
    latinAmerican: false, 
    french: false, 
    iceCream: false, 
    asianFusion: false, 
    vegan: false,
    //Price
    $: false,
    $$: true,
    $$$: false,
    $$$$: false,
    //Crowd
    alternativeHipsters: true,
    workers: true,
    families: true,
    students: true,
    olderCrowd: true,
    //General Features
    Delivery: false,
    takeout: false,
    reservations: true,
    credit: true,
    outdoorSeating:  true,
    groups: true,
    waiterService: true,
    TV: false,
    veganOptions:  true,
    triviaNight:  true,
    //Drinks
    fullBar: true,
    happyHour: true,
    //Meals Served
    breakfast: false,
    brunch:  false,
    lunch: true,
    dinner: true,
    dessert: true,
    lateNight: true,
    //Parking
    street: true,
    garage: false,
    valet: false,
    privateLot: false},
    
    
    //Zocalo -- gay bar
    //Location Details
    {name: `Zocalo`,
    Address: `187 10th St NE, Atlanta, GA 30309`,
    Website: `https://www.eatzocalo.com/`,
    Phone: `(404) 249-7576`,
    mapURL: `https://goo.gl/maps/ajSCU31eDx3E5KKG8`,
    mapEmbed: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.191875244399!2d-84.38323428510316!3d33.781542939394754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f50442192bce2f%3A0x88b99f8640f42a76!2s187%2010th%20St%20NE%2C%20Atlanta%2C%20GA%2030309!5e0!3m2!1sen!2sus!4v1568596589838!5m2!1sen!2sus`,
    //Location
    event: false, 
    bar: true, 
    Restaurant: true, 
    club: false, 
    marketplace: false, 
    iceCreamParlor: false, 
    movieTheater: false, 
    winery: false, 
    hotelResort: false,
    //Food Type:
    american: false, 
    thai: false, 
    persian: false, 
    seafood: false, 
    mexican: true, 
    hawaiin: false, 
    sushi: false, 
    korean: false, 
    italian: false, 
    latinAmerican: false, 
    french: false, 
    iceCream: false, 
    asianFusion: false, 
    vegan: false,
    //Price
    $: false,
    $$: true,
    $$$: false,
    $$$$: false,
    //Crowd
    alternativeHipsters: true,
    workers: true,
    families: true,
    students: true,
    olderCrowd: false,
    //General Features
    Delivery: false,
    takeout: false,
    reservations: true,
    credit: true,
    outdoorSeating:  true,
    groups: true,
    waiterService: true,
    TV: false,
    veganOptions:  true,
    triviaNight:  false,
    //Drinks
    fullBar: true,
    happyHour: true,
    //Meals Served
    breakfast: false,
    brunch:  false,
    lunch: true,
    dinner: true,
    dessert: true,
    lateNight: false,
    //Parking
    street: true,
    garage: false,
    valet: false,
    privateLot: false},
    
    
    //Diesel (Game of Thrones Bar Crawl) -- Bar
    //Location Details
    {name: `Diesel`,
    address: `870 North Highland Avenue Northeast, Atlanta, GA 30306`,
    website: `http://www.dieselatlanta.com/`,
    phone: `(404) 815-1820`,
    mapURL: `https://goo.gl/maps/AmKNh1wBSCFmfvGx6`,
    mapEmbed: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.3168270624647!2d-84.35531044925803!3d33.77831568058654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f506a017a9e18f%3A0xecbc4d983425c19f!2s870%20North%20Highland%20Avenue%20Northeast%2C%20Atlanta%2C%20GA%2030306!5e0!3m2!1sen!2sus!4v1567799282186!5m2!1sen!2sus`,
    //Location
    event: false, 
    bar: true, 
    Restaurant: false, 
    club: false, 
    marketplace: false, 
    iceCreamParlor: false, 
    movieTheater: false, 
    winery: false, 
    hotelResort: false,
    //Food Type:
    american: true, 
    thai: false, 
    persian: false, 
    seafood: false, 
    mexican: false, 
    hawaiin: false, 
    sushi: false, 
    korean: false, 
    italian: false, 
    latinAmerican: false, 
    french: false, 
    iceCream: false, 
    asianFusion: false, 
    vegan: false,
    //Price
    $: true,
    $$: false,
    $$$: false,
    $$$$: false,
    //Crowd
    alternativeHipsters: true,
    workers: false,
    families: false,
    students: true,
    olderCrowd: false,
    //General Features
    Delivery: false,
    takeout: false,
    reservations: false,
    credit: true,
    outdoorSeating: true,
    groups: true,
    waiterService: true,
    TV: false,
    veganOptions: true,
    triviaNight: false,
    //Drinks
    fullBar: true,
    happyHour: true,
    //Meals Served
    breakfast: false,
    brunch: true,
    lunch: false,
    dinner: true,
    dessert: false,
    lateNight: true,
    //Parking
    street: true,
    garage: false,
    valet: false,
    privateLot: true},
    
    //Limerick Junction Pub -- Bar
    //Location Details
    {name: `Limerick Junction Pub`,
    address: `822 North Highland Avenue Northeast, Atlanta, GA 30306`,
    website: `http://www.limerickjunction.com/`,
    phone: `(404) 874-7147`,
    mapURL: `https://goo.gl/maps/CKaDDtCfY6J8NvES6`,
    mapEmbed: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.36639045995!2d-84.35489964925803!3d33.77703548058689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f506a05cd13803%3A0xb185b0d9fc01579d!2s822%20North%20Highland%20Avenue%20Northeast%2C%20Atlanta%2C%20GA%2030306!5e0!3m2!1sen!2sus!4v1567799926084!5m2!1sen!2sus`,
    //Location
    event: false, 
    bar: true, 
    Restaurant: false, 
    club: false, 
    marketplace: false, 
    iceCreamParlor: false, 
    movieTheater: false, 
    winery: false, 
    hotelResort: false,
    //Food Type:
    american: true, 
    thai: false, 
    persian: false, 
    seafood: false, 
    mexican: false, 
    hawaiin: false, 
    sushi: false, 
    korean: false, 
    italian: false, 
    latinAmerican: false, 
    french: false, 
    iceCream: false, 
    asianFusion: false, 
    vegan: false,
    //Price
    $:  true,
    $$: false,
    $$$: false,
    $$$$: false,
    //Crowd
    alternativeHipsters: true,
    workers: false,
    families: false,
    students: true,
    olderCrowd: false,
    //General Features
    Delivery: false,
    takeout: false,
    reservations: false,
    credit: true,
    outdoorSeating:  true,
    groups: true,
    waiterService: true,
    TV: false,
    veganOptions:  true,
    triviaNight:  false,
     //Drinks
    fullBar: true,
    happyHour: true,
    //Meals Served
    breakfast: false,
    brunch:  true,
    lunch: false,
    dinner: true,
    dessert: true,
    lateNight: true,
    //Parking
    street: true,
    garage: false,
    valet: false,
    privateLot:  false},
    
    //Dark Horse Tavern -- American Restaurant
    //Location Details
    {name: `Dark Horse Tavern`,
    Address: `816 North Highland Avenue Northeast, Atlanta, GA 30306`,
    Phone: `(404) 873-3607`,
    Website: `http://www.darkhorseatlanta.com/`,
    mapURL: `https://goo.gl/maps/K9i89Pfr9ZPQTNFh7`,
    mapEmbed: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.3756238891615!2d-84.35480284925805!3d33.77679698058703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f506a05db093b5%3A0xa2b55f2973552e7d!2sDark%20Horse%20Tavern!5e0!3m2!1sen!2sus!4v1567800232863!5m2!1sen!2sus`,
    //Location
    event: false, 
    bar: false, 
    restaurant: true,
    club: false, 
    marketplace: false, 
    iceCreamParlor: false, 
    movieTheater: false, 
    winery: false, 
    hotelResort: false,
    //Food Type:
    american: true,
    thai: false, 
    persian: false, 
    seafood: false, 
    mexican: false, 
    hawaiin: false, 
    sushi: false, 
    korean: false, 
    italian: false, 
    latinAmerican: false, 
    french: false, 
    iceCream: false, 
    asianFusion: false, 
    vegan: false,
    //Price
    $: false,
    $$: true,
    $$$: false,
    $$$$: false,
    //Crowd
    alternativeHipsters: true,
    workers: true,
    families: true,
    students: true,
    olderCrowd: true,
    //General Features
    Delivery: true,
    takeout: true,
    reservations: true,
    credit: true,
    outdoorSeating:  false,
    groups: true,
    waiterService: true,
    TV: true,
    veganOptions:  true,
    triviaNight:  false,
     //Drinks
    fullBar: true,
    happyHour: true,
    //Meals Served
    breakfast: false,
    brunch:  false,
    lunch: false,
    dinner: true,
    dessert: false,
    lateNight: true,
    //Parking
    street: true,
    garage: false,
    valet: false,
    privateLot:  false},
    
    
    //Tiki Iniki -- Hawaiin Restaurant
    //Location Details
    {name: `Tiki Iniki`,
    Address: `1044 Greenwood Ave NE, Atlanta, GA 30306`,
    Website: `http://tikiinikiatl.com/`,
    Phone: `(833) 285-8454`,
    mapURL: `https://goo.gl/maps/TBf3Hq1DovDAx32x8`,
    mapEmbed:  `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.374156610119!2d-84.35526934925807!3d33.77683488058705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f506a066e49b91%3A0xb26f2541df5b2782!2s1044%20Greenwood%20Ave%20NE%2C%20Atlanta%2C%20GA%2030306!5e0!3m2!1sen!2sus!4v1567800427588!5m2!1sen!2sus`,
    
    //Location
    event: false, 
    bar: false, 
    restaurant: true,
    club: false, 
    marketplace: false, 
    iceCreamParlor: false, 
    movieTheater: false, 
    winery: false, 
    hotelResort: false,
    //Food Type:
    american: false, 
    thai: false, 
    persian: false, 
    seafood: false, 
    mexican: false, 
    hawaiin: true,
    sushi: false, 
    korean: false, 
    italian: false, 
    latinAmerican: false, 
    french: false, 
    iceCream: false, 
    asianFusion: false, 
    vegan: false,
    //Price
    $: false,
    $$: true,
    $$$: false,
    $$$$: false,
    //Crowd
    alternativeHipsters: true,
    workers: true,
    families: true,
    students: true,
    olderCrowd: false,
    //General Features
    Delivery: false,
    takeout: false,
    reservations: true,
    credit: true,
    outdoorSeating:  false,
    groups: true,
    waiterService: true,
    TV: true,
    veganOptions:  true,
    triviaNight:  false,
     //Drinks
    fullBar: true,
    happyHour: true,
    //Meals Served
    breakfast: false,
    brunch:  true,
    lunch: false,
    dinner: true,
    dessert: false,
    lateNight: true,
    //Parking
    street: true,
    garage: false,
    valet: false,
    privateLot:  true},
    
    
    
    //Neighbor’s Pub -- pub
    //Location Details
    {name: `Neighbor’s Pub`,
    Address: `752 North Highland Avenue Northeast, Atlanta, GA 30306`,
    Phone: `(404) 872-5440`,
    Website: `http://www.neighborsatlanta.com/`,
    mapURL: `https://goo.gl/maps/GSn6Uz2XrVw61jYB9`,
    mapEmbed: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.443492669619!2d-84.35510504925813!3d33.775043880587354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f506a09555c861%3A0xaa60f8ed1c4c2339!2s752%20North%20Highland%20Avenue%20Northeast%2C%20Atlanta%2C%20GA%2030306!5e0!3m2!1sen!2sus!4v1567801128123!5m2!1sen!2sus`,
    //Location
    event: false, 
    bar: true, 
    Restaurant: false, 
    club: false, 
    marketplace: false, 
    iceCreamParlor: false, 
    movieTheater: false, 
    winery: false, 
    hotelResort: false,
    //Food Type:
    american: true, 
    thai: false, 
    persian: false, 
    seafood: false, 
    mexican: false, 
    hawaiin: false, 
    sushi: false, 
    korean: false, 
    italian: false, 
    latinAmerican: false, 
    french: false, 
    iceCream: false, 
    asianFusion: false, 
    vegan: false,
    //Price
    $:  true,
    $$: false,
    $$$: false,
    $$$$: false,
    //Crowd
    alternativeHipsters: true,
    workers: false,
    families: false,
    students: true,
    olderCrowd: false,
    //General Features
    Delivery: true,
    takeout: true,
    reservations: false,
    credit: true,
    outdoorSeating:  false,
    groups: true,
    waiterService: true,
    TV: true,
    veganOptions:  true,
    triviaNight:  false,
     //Drinks
    fullBar: true,
    happyHour: true,
    //Meals Served
    breakfast: false,
    brunch:  false,
    lunch: true,
    dinner: true,
    dessert: true,
    lateNight: true,
    //Parking
    street: true,
    garage: false,
    valet: false,
    privateLot:  false},
    
    //O-Ku - Sushi restaurant
    //Location Details
    {name: `O-Ku`,
    address: `Westside Ironworks, 1085 Howell Mill Rd NW A3, Atlanta, GA 30318`,
    website: `http://www.o-kusushiatl.com/`,
    phone: `(404) 500-2383`,
    mapURL: `https://goo.gl/maps/FQ9xGajfg55pCbB38`,
    mapEmbed: `"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.075711318311!2d-84.41342524925784!3d33.784542980584895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f504ec7d57d8f5%3A0x17763d8beed8b05d!2sO-Ku!5e0!3m2!1sen!2sus!4v1567801532518!5m2!1sen!2sus`,
    //Location
    event: false, 
    bar: false, 
    restaurant: true, 
    club: false, 
    marketplace: false, 
    iceCreamParlor: false, 
    movieTheater: false, 
    winery: false, 
    hotelResort: false,
    //Food Type:
    american: false,
    thai: false, 
    persian: false, 
    seafood: false, 
    mexican: false, 
    hawaiin: false, 
    sushi: true,
    korean: false, 
    italian: false, 
    latinAmerican: false, 
    french: false, 
    iceCream: false, 
    asianFusion: false, 
    vegan: false,
    //Price
    $:  false,
    $$: false,
    $$$: true,
    $$$$: false,
    //Crowd
    alternativeHipsters: true,
    workers: true,
    families: true,
    students: true,
    olderCrowd: true,
    //General Features
    Delivery: false,
    takeout: false,
    reservations: true,
    credit: true,
    outdoorSeating:  false,
    groups: true,
    waiterService: true,
    TV: false,
    veganOptions:  true,
    triviaNight:  false,
     //Drinks
    fullBar: true,
    happyHour: true,
    //Meals Served
    breakfast: false,
    brunch:  false,
    lunch: false,
    dinner: true,
    dessert: false,
    lateNight: true,
    //Parking
    street: true,
    garage: false,
    valet: false,
    privateLot:  false},
    
    
    
    //Bartaco - Taco Restaurant
    //Location Details
    {name: `Bartaco`,
    address: `3802 Roswell Rd NE, Atlanta, GA 30342`,
    Website: `https://bartaco.com/location/atlanta-west-midtown/?utm_source=yext&utm_medium=localsearch&utm_campaign=landing-page&utm_content=west-midtown`,
    Phone: `(678) 871-8226`,
    mapURL: `https://goo.gl/maps/ZzbGCSCPbkq97zTD9`,
    mapEmbed: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.2133279172103!2d-84.38360664925588!3d33.85839268056427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f50f6f5ff3f4f9%3A0x40f5c1841162e686!2s3802%20Roswell%20Rd%20NE%2C%20Atlanta%2C%20GA%2030342!5e0!3m2!1sen!2sus!4v1567982421133!5m2!1sen!2sus`,
    //Location
    event: false, 
    bar: false, 
    restaurant: true, 
    club: false, 
    marketplace: false, 
    iceCreamParlor: false, 
    movieTheater: false, 
    winery: false, 
    hotelResort: false,
    //Food Type:
    american: false,
    thai: false, 
    persian: false, 
    seafood: false, 
    mexican: true, 
    hawaiin: false, 
    sushi: false,
    korean: false, 
    italian: false, 
    latinAmerican: false, 
    french: false, 
    iceCream: false, 
    asianFusion: false, 
    vegan: false,
    //Price
    $:  false,
    $$: true,
    $$$: false,
    $$$$: false,
    //Crowd
    alternativeHipsters: true,
    workers: true,
    families: true,
    students: true,
    olderCrowd: true,
    //General Features
    Delivery: false,
    takeout: false,
    reservations: true,
    credit: true,
    outdoorSeating: true,
    groups: true,
    waiterService: true,
    TV: false,
    veganOptions:  true,
    triviaNight:  false,
     //Drinks
    fullBar: true,
    happyHour: true,
    //Meals Served
    breakfast: false,
    brunch:  false,
    lunch: true,
    dinner: true,
    dessert: false,
    lateNight: false,
    //Parking
    street: true,
    garage: false,
    valet: true,
    privateLot:  false},
    
    
    //No Mas Cantina --Mexican Restaurant
    //Location Details
    {name: `No Mas Cantina`,
    address: `180 Walker St SW ste b, Atlanta, GA 30313`,
    website: `https://www.nomascantina.com/`,
    phone: `(404) 574-5678`,
    mapURL: `https://goo.gl/maps/1GewGniCJD4buyoB9`,
    mapEmbed: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.420468869473!2d-84.40316794925882!3d33.74979898059455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f503798e4e0fc9%3A0xc0719e2a54344313!2s180%20Walker%20St%20SW%20ste%20b%2C%20Atlanta%2C%20GA%2030313!5e0!3m2!1sen!2sus!4v1567982824694!5m2!1sen!2sus`,
    //Location
    event: false, 
    bar: false, 
    restaurant: true, 
    club: false, 
    marketplace: false, 
    iceCreamParlor: false, 
    movieTheater: false, 
    winery: false, 
    hotelResort: false,
    //Food Type:
    american: false,
    thai: false, 
    persian: false, 
    seafood: false, 
    mexican: true, 
    hawaiin: false, 
    sushi: false,
    korean: false, 
    italian: false, 
    latinAmerican: false, 
    french: false, 
    iceCream: false, 
    asianFusion: false, 
    vegan: false,
    //Price
    $:  false,
    $$: true,
    $$$: false,
    $$$$: false,
    //Crowd
    alternativeHipsters: true,
    workers: true,
    families: true,
    students: true,
    olderCrowd: true,
    //General Features
    Delivery: true,
    takeout: true,
    reservations: true,
    credit: true,
    outdoorSeating: false,
    groups: true,
    waiterService: true,
    TV: true,
    veganOptions:  true,
    triviaNight:  false,
     //Drinks
    fullBar: true,
    happyHour: true,
    //Meals Served
    breakfast: true,
    brunch:  false,
    lunch: true,
    dinner: true,
    dessert: true,
    lateNight: false,
    //Parking
    street: true,
    garage: false,
    valet: true,
    privateLot:  false},
    
    
    //Krogg Street Market -- Market in Atlanta
    //Location Details
    
    {name: `Krogg Street Market`,  
    address: `99 Krog St NE, Atlanta, GA 30307`,
    website: `http://www.krogstreetmarket.com/`,
    phone: ``,
    mapURL: `https://goo.gl/maps/gHbnXyWqnVVB6Fzu9`,
    mapEmbed: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.150488931353!2d-84.3661746492586!3d33.75677688059273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f503f80f6572b3%3A0x21c1447688703507!2s99%20Krog%20St%20NE%2C%20Atlanta%2C%20GA%2030307!5e0!3m2!1sen!2sus!4v1567985125122!5m2!1sen!2sus`,
    //Location
    event: false, 
    bar: true, 
    restaurant: true, 
    club: false, 
    marketplace: true, 
    iceCreamParlor: true,  
    movieTheater: false, 
    winery: false, 
    hotelResort: false,
    //Food Type:
    american: true, 
    thai: false, 
    persian: false, 
    seafood: true, 
    mexican: true, 
    hawaiin: false, 
    sushi: true, 
    korean: false, 
    italian: false, 
    latinAmerican: false, 
    french: false, 
    iceCream: true, 
    asianFusion: false, 
    vegan: true, 
    //Price
    $:  false,
    $$: true,
    $$$: false,
    $$$$: false,
    //Crowd
    alternativeHipsters: true,
    workers: true,
    families: true,
    students: true,
    olderCrowd: true,
    //General Features
    Delivery: false,
    Takeout: false,
    reservations: false,
    credit: true,
    outdoorSeating: true,
    groups: true,
    waiterService: true,
    TV: false,
    veganOptions:  true,
    triviaNight:  false,
     //Drinks
    fullBar: true,
    happyHour: true,
    //Meals Served
    breakfast: true,
    brunch:  false,
    lunch: true,
    dinner: true,
    dessert: true,
    lateNight: false,
    //Parking
    street: true,
    garage: false,
    valet: true,
    privateLot:  true},
    
    
    //A Mano -- Italian Restaurant
    //Location Details
    
    {name: `A Mano`, 
    Address: `587 Ralph McGill Blvd NE, Atlanta, GA 30312`,
    website: `http://amanoatl.com/`,
    phone: `(404) 549-7727`,
    mapURL: `https://goo.gl/maps/GS4pyGt9vdc9h7zs5`,
    mapEmbed: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.8847711102912!2d-84.37030214925846!3d33.76364338059063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5040ece4b95d9%3A0xe39d9727f48c9fd9!2s587%20Ralph%20McGill%20Blvd%20NE%2C%20Atlanta%2C%20GA%2030312!5e0!3m2!1sen!2sus!4v1567986096342!5m2!1sen!2sus`,
    //Location
    event: false, 
    bar: false, 
    restaurant: true, 
    club: false, 
    marketplace: false, 
    iceCreamParlor: false, 
    movieTheater: false, 
    winery: false, 
    hotelResort: false,
    //Food Type:
    american: false,
    thai: false, 
    persian: false, 
    seafood: false, 
    mexican: false,  
    hawaiin: false, 
    sushi: false,
    korean: false, 
    italian: true, 
    latinAmerican: false, 
    french: false, 
    iceCream: false, 
    asianFusion: false, 
    vegan: false,
    //Price
    $:  false,
    $$: true,
    $$$: false,
    $$$$: false,
    //Crowd
    alternativeHipsters: true,
    workers: true,
    families: true,
    students: true,
    olderCrowd: true,
    //General Features
    Delivery: false,
    Takeout: false,
    reservations: true,
    credit: true,
    outdoorSeating: false,
    groups: true,
    waiterService: true,
    TV: false,
    veganOptions:  true,
    triviaNight:  false,
     //Drinks
    fullBar: true,
    happyHour: true,
    //Meals Served
    breakfast: false,
    brunch:  false,
    lunch: false,
    dinner: true,
    dessert: true,
    lateNight: false,
    //Parking
    street: true,
    garage: false,
    valet: false,
    privateLot:  true},
    
    
    //Publico Kitchen & Tap --Latin American Restaurant
    //Location Details
    
    {name: `Publico`,
    address: `1104 Crescent Ave NE, Atlanta, GA 30309`,
    website: `http://www.publicotapandkitchenatl.com/`,
    phone: `(678) 973-0070`,
    mapURL: `https://goo.gl/maps/FG3uqDVg5Hhp6fWq5`,
    mapEmbed: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.065008438138!2d-84.38682974925788!3d33.78481938058479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f504434068d16f%3A0xd43aa35bcef57541!2s1104%20Crescent%20Ave%20NE%2C%20Atlanta%2C%20GA%2030309!5e0!3m2!1sen!2sus!4v1567987082515!5m2!1sen!2sus`,
    //Location
    event: false, 
    bar: false, 
    restaurant: true, 
    club: false, 
    marketplace: false, 
    iceCreamParlor: false, 
    movieTheater: false, 
    winery: false, 
    hotelResort: false,
    //Food Type:
    american: false,
    thai: false, 
    persian: false, 
    seafood: false, 
    mexican: false,  
    hawaiin: false, 
    sushi: false,
    korean: false, 
    italian: false,  
    latinAmerican: true, 
    french: false, 
    iceCream: false, 
    asianFusion: false, 
    vegan: false,
    //Price
    $: false,
    $$: true,
    $$$: false,
    $$$$: false,
    //Crowd
    alternativeHipsters: true,
    workers: true,
    families: true,
    students: true,
    olderCrowd: true,
    //General Features
    Delivery: false,
    Takeout: false,
    reservations: false,
    credit: true,
    outdoorSeating: true,
    groups: true,
    waiterService: true,
    TV: true,
    veganOptions: true,
    triviaNight: false,
     //Drinks
    fullBar: true,
    happyHour: true,
    //Meals Served
    breakfast: false,
    brunch:  false,
    lunch: true,
    dinner: true,
    dessert: true,
    lateNight: false,
    //Parking
    street: true,
    garage: false,
    valet: false,
    privateLot:  false},
    
    
    //Blake’s On the Park -- Bar
    //Location Details
    
    {name: `/Blake’s On the Park`,
    address:  `227 10th St NE, Atlanta, GA 30309`,
    website: `http://blakesontheparkatlanta.com/`,
    phone: `(404) 892-5786`,
    mapURL: `https://goo.gl/maps/g9wB9kx3fJMHWA2k8`,
    mapEmbed: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.1945143008265!2d-84.38214904925793!3d33.78147478058563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f50441f26bcbeb%3A0x299bf8b5ccd3d539!2s227%2010th%20St%20NE%2C%20Atlanta%2C%20GA%2030309!5e0!3m2!1sen!2sus!4v1567987422522!5m2!1sen!2sus`,
    //Location
    event: false, 
    bar: true,  
    restaurant: false,
    club: false, 
    marketplace: false, 
    iceCreamParlor: false, 
    movieTheater: false, 
    winery: false, 
    hotelResort: false,
    //Food Type:
    american: true, 
    thai: false, 
    persian: false, 
    seafood: false, 
    mexican: false,  
    hawaiin: false, 
    sushi: false,
    korean: false, 
    italian: false,  
    latinAmerican: false,
    french: false, 
    iceCream: false, 
    asianFusion: false, 
    vegan: false,
    //Price
    $:  true, 
    $$: false,
    $$$: false,
    $$$$: false,
    //Crowd
    alternativeHipsters: true,
    workers: false,
    families: false,
    students: true,
    olderCrowd: false,
    //General Features
    delivery: false,
    takeout: false,
    reservations: false,
    credit: true,
    outdoorSeating: false,
    groups: true,
    waiterService: false,
    TV: true,
    veganOptions:  true,
    triviaNight:  false,
     //Drinks
    fullBar: true,
    happyHour: true,
    //Meals Served
    breakfast: false,
    brunch:  false,
    lunch: true,
    dinner: true,
    dessert: true,
    lateNight: true,
    //Parking
    street: true,
    garage: false,
    valet: false,
    privateLot:  false},
    
    
    
    //Ponce City Market --Market in Atlanta
    //Location Details
    
    {name: `Ponce City Market`, 
    address: `675 Ponce de Leon Ave., NE, Atlanta, GA`,
    website: `https://poncecitymarket.com/`,
    phone: `(404) 900-7900`,
    mapURL: `https://goo.gl/maps/YxsB5Co8v8f4FdqTA`,
    mapEmbed: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.5382157420377!2d-84.3677353492582!3d33.77259698058824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f50410912c7be9%3A0x275114353ab5ce34!2s675%20Ponce%20De%20Leon%20Ave%20NE%2C%20Atlanta%2C%20GA%2030308!5e0!3m2!1sen!2sus!4v1567988392372!5m2!1sen!2sus`,
    //Location
    event: false, 
    bar: true, 
    restaurant: true, 
    club: false, 
    marketplace: true, 
    iceCreamParlor: false, 
    movieTheater: false, 
    winery: false, 
    hotelResort: false,
    //Food Type:
    american: true, 
    thai: false, 
    persian: false, 
    seafood: true, 
    mexican: true, 
    hawaiin: false, 
    sushi: true, 
    korean: false, 
    italian: true, 
    latinAmerican: true, 
    french: false, 
    iceCream: true,  
    asianFusion: false, 
    vegan: true, 
    //Price
    $:  false,
    $$: true,
    $$$: false,
    $$$$: false,
    //Crowd
    alternativeHipsters: true,
    workers: true,
    families: true,
    students: true,
    olderCrowd: true,
    //General Features
    Delivery: false,
    Takeout: false,
    reservations: false,
    credit: true,
    outdoorSeating: true,
    groups: true,
    waiterService: true,
    TV: false,
    veganOptions:  true,
    triviaNight:  false,
     //Drinks
    fullBar: true,
    happyHour: true,
    //Meals Served
    breakfast: true,
    brunch:  true,
    lunch: true,
    dinner: true,
    dessert: true,
    lateNight: false,
    //Parking
    street: true,
    garage: true,
    valet: true,
    privateLot:  true},
    
    
    
    //Bistro Niko -- French Restaurant
    //Location Detials
    
    {name: `Bistro Niko`,
    Address: `3344 Peachtree Rd, Atlanta, GA 30326`,
    website: `http://www.buckheadrestaurants.com/bistro-niko`,
    phone: `(404) 261-6456`,
    mapURL: `https://goo.gl/maps/nxh9YqvGvRxuNk7Y7`,
    mapEmbed: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.65116764354!2d-84.37090874925622!3d33.847105580567224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f50f589863adbf%3A0x8a4c17e9a2a48009!2s3344%20Peachtree%20Rd%2C%20Atlanta%2C%20GA%2030305!5e0!3m2!1sen!2sus!4v1567989045808!5m2!1sen!2sus`,
    //Location
    event: false, 
    bar: false,  
    restaurant: true, 
    club: false, 
    marketplace: false, 
    iceCreamParlor: false, 
    movieTheater: false, 
    winery: false, 
    hotelResort: false,
    //Food Type:
    american: false, 
    thai: false, 
    persian: false, 
    seafood: false, 
    mexican: false,  
    hawaiin: false, 
    sushi: false,
    korean: false, 
    italian: false,  
    latinAmerican: false,
    French: true,
    iceCream: false, 
    asianFusion: false, 
    vegan: false,
    //Price
    $:  false, 
    $$: false,
    $$$: true,
    $$$$: false,
    //Crowd
    alternativeHipsters: true,
    workers: true,
    families: true,
    students: true,
    olderCrowd: true,
    //General Features
    delivery: true,
    takeout: true,
    reservations: true,
    credit: true,
    outdoorSeating: false,
    groups: true,
    waiterService: true,
    TV: false,
    veganOptions:  true,
    triviaNight:  false,
     //Drinks
    fullBar: true,
    happyHour: false,
    //Meals Served
    breakfast: false,
    brunch:  true,
    lunch: true,
    dinner: true,
    dessert: true,
    lateNight: false,
    //Parking
    street: true,
    garage: true,
    valet: true,
    privateLot:  false},
    
    
    //Gaja -- Korean Restaurant
    //Location Details
    
    {name: `Gaja`, 
    address: `491 Flat Shoals Ave SE A, Atlanta, GA 30316`,
    website: `http://www.gajaeav.com/`,
    phone: `(404) 835-2126`,
    mapURL: `https://goo.gl/maps/4G74ARJY21FSjFWz7`,
    mapEmbed: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.778139026362!2d-84.348516549259!3d33.740552680597105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5015b7805eb0d%3A0xe81777fbf0bd34c1!2sGaja%20Korean%20Bar!5e0!3m2!1sen!2sus!4v1567989151064!5m2!1sen!2sus`,
    //Location
    event: false, 
    bar: false,  
    restaurant: true, 
    club: false, 
    marketplace: false, 
    iceCreamParlor: false, 
    movieTheater: false, 
    winery: false, 
    hotelResort: false,
    //Food Type:
    american: false, 
    thai: false, 
    persian: false, 
    seafood: false, 
    mexican: false,  
    hawaiin: false, 
    sushi: false,
    korean: true, 
    italian: false,  
    latinAmerican: false,
    French: false, 
    iceCream: false, 
    asianFusion: false, 
    vegan: false,
    //Price
    $:  false, 
    $$: true,
    $$$: false, 
    $$$$: false,
    //Crowd
    alternativeHipsters: true,
    workers: true,
    families: true,
    students: true,
    olderCrowd: true,
    //General Features
    delivery: false,
    takeout: true,
    reservations: false,
    credit: true,
    outdoorSeating: false,
    groups: true,
    waiterService: true,
    TV: false,
    veganOptions:  true,
    triviaNight:  false,
     //Drinks
    fullBar: true,
    happyHour: true,
    //Meals Served
    breakfast: false,
    brunch:  false,
    lunch: false,
    dinner: true,
    dessert: false,
    lateNight: true,
    //Parking
    street: true,
    garage: false,
    valet: false,
    privateLot: true},
    
    
    //Jenny’s Ice Cream -- Ice Cream Shop
    //Location Details
    
    {name: `Jenny’s Ice Cream`,
    address: `99 Krog St NE, Atlanta, GA 30307`,
    Website: `http://www.jenis.com/`,
    phone: `(470) 891-8105`,
    mapURL: `https://goo.gl/maps/gHbnXyWqnVVB6Fzu9`,
    mapEmbed: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.150488931353!2d-84.3661746492586!3d33.75677688059273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f503f80f6572b3%3A0x21c1447688703507!2s99%20Krog%20St%20NE%2C%20Atlanta%2C%20GA%2030307!5e0!3m2!1sen!2sus!4v1567990520124!5m2!1sen!2sus`,
    //Location
    event: false, 
    bar: false,  
    restaurant: false, 
    club: false, 
    marketplace: false, 
    iceCreamParlor: true,  
    movieTheater: false, 
    winery: false, 
    hotelResort: false,
    //Food Type:
    american: false, 
    thai: false, 
    persian: false, 
    seafood: false, 
    mexican: false,  
    hawaiin: false, 
    sushi: false,
    korean: false,  
    italian: false,  
    latinAmerican: false,
    French: false, 
    iceCream: true, 
    asianFusion: false, 
    vegan: false,
    //Price
    $: false, 
    $$: true,
    $$$: false, 
    $$$$: false,
    //Crowd
    alternativeHipsters: true,
    workers: true,
    families: true,
    students: true,
    olderCrowd: true,
    //General Features
    delivery: false,
    takeout: true,
    reservations: false,
    credit: true,
    outdoorSeating: true,
    groups: true,
    waiterService: false,
    TV: false,
    veganOptions:  true,
    triviaNight:  false,
     //Drinks
    fullBar: false,
    happyHour: false,
    //Meals Served
    breakfast: false,
    brunch:  false,
    lunch: false,
    dinner: false,
    dessert: true,
    lateNight: false,
    //Parking
    street: true,
    garage: false,
    valet: false,
    privateLot: true},
    
    
    //Little Trouble --Bar
    //Location Details
    
    {name: `Little Trouble`,
    address: `1170 Howell Mill Rd NW Suite P-10C, Atlanta, GA 30318`,
    Website: `http://www.little-trouble.com/`,
    phone: `(404) 500-4737`,
    mapURL: `https://goo.gl/maps/fdAvqarFJ9nHDvrt7`,
    mapEmbed: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.0257199971893!2d-84.41435404925784!3d33.78583398058447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f504ec0bc24547%3A0x1a4fb4ecf7876a85!2s1170%20Howell%20Mill%20Rd%20NW%20Suite%20P-10C%2C%20Atlanta%2C%20GA%2030318!5e0!3m2!1sen!2sus!4v1567990970580!5m2!1sen!2sus`,
    //Location
    event: false, 
    bar: true,
    restaurant: false, 
    club: false, 
    marketplace: false, 
    iceCreamParlor: false,
    movieTheater: false, 
    winery: false, 
    hotelResort: false,
    //Food Type:
    american: false, 
    thai: false, 
    persian: false, 
    seafood: false, 
    mexican: false,  
    hawaiin: false, 
    sushi: false,
    korean: false,  
    italian: false,  
    latinAmerican: false,
    French: false, 
    iceCream: false,
    asianFusion: true,
    vegan: false,
    //Price
    $:  false, 
    $$: true,
    $$$: false, 
    $$$$: false,
    //Crowd
    alternativeHipsters: true,
    workers: true,
    families: true,
    students: true,
    olderCrowd: true,
    //General Features
    delivery: false,
    takeout: false,
    reservations: false,
    credit: true,
    outdoorSeating: false,
    groups: true,
    waiterService: true,
    TV: true,
    veganOptions: true,
    triviaNight: false,
     //Drinks
    fullBar: true,
    happyHour: true,
    //Meals Served
    breakfast: false,
    brunch:  false,
    lunch: false,
    dinner: true,
    dessert: false,
    lateNight: true,
    //Parking
    street: true,
    garage: true,
    valet: false,
    privateLot: false},
    
    
    //Chateau Elan Winery & Resort -- 4-star hotel, winery
    //Location Details
    
    {name: `Chateau Elan Winery & Resort`,
    address: `100 Rue Charlemagne Dr, Braselton, GA 30517`,
    Website: `http://www.chateauelan.com/`,
    phone: `(678) 425-0900`,
    mapURL: ``,
    mapEmbed: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.782629937518!2d-83.82080804924935!3d34.1007085804975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5eec5abba5e69%3A0x61decee232f7296e!2s100%20Rue%20Charlemagne%20Dr%2C%20Braselton%2C%20GA%2030517!5e0!3m2!1sen!2sus!4v1567991577942!5m2!1sen!2sus`,
    //Location
    event: false, 
    bar: true,
    restaurant: true,
    club: false, 
    marketplace: false, 
    iceCreamParlor: false,
    movieTheater: false, 
    Winery: true,
    hotelResort: true,
    //Food Type:
    american: true, 
    thai: false, 
    persian: false, 
    seafood: false, 
    mexican: false,  
    hawaiin: false, 
    sushi: false,
    korean: false,  
    italian: false,  
    latinAmerican: false,
    French: true,
    iceCream: false,
    asianFusion: false, 
    vegan: false,
    //Price
    $:  false, 
    $$: false, 
    $$$: true, 
    $$$$: false,
    //Crowd
    alternativeHipsters: false, 
    workers: true,
    families: true,
    students: true,
    olderCrowd: true,
    //General Features
    delivery: false,
    takeout: false,
    reservations: true,
    credit: true,
    outdoorSeating: true,
    groups: true,
    waiterService: true,
    TV: true,
    veganOptions: true,
    triviaNight: false,
     //Drinks
    fullBar: true,
    happyHour: false,
    //Meals Served
    breakfast: true,
    brunch:  true,
    lunch: true,
    dinner: true,
    dessert: true,
    lateNight: true,
    //Parking
    street: false,
    garage: false,
    valet: false,
    privateLot: true},
    
    
    //CineBistro -- Movie Theater
    //Location Details
    
    {name: `CineBistro`,
    address: `1004 Town Blvd, Atlanta, GA 30319`,
    Website: `https://cinebistro.com/brookhaven/`,
    phone: `(404) 333-0740`,
    mapURL: `https://goo.gl/maps/EJEZPnuUcnQskxzK9`,
    mapEmbed: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.7085264300836!2d-84.33971904925554!3d33.87140188056064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f508c139269b4f%3A0x898af0ac3543875e!2s1004%20Town%20Blvd%2C%20Atlanta%2C%20GA%2030319!5e0!3m2!1sen!2sus!4v1567991910213!5m2!1sen!2sus`,
    //Location
    event: false, 
    bar: true,
    restaurant: false, 
    club: false, 
    marketplace: false, 
    iceCreamParlor: false,
    movieTheater: true, 
    winery: false, 
    hotelResort: false,
    //Food Type:
    american: true,
    thai: false, 
    persian: false, 
    seafood: false, 
    mexican: false,  
    hawaiin: false, 
    sushi: false,
    korean: false,  
    italian: false,  
    latinAmerican: false,
    French: false, 
    iceCream: false,
    asianFusion: false,
    vegan: false,
    //Price
    $:  false, 
    $$: true,
    $$$: false, 
    $$$$: false,
    //Crowd
    alternativeHipsters: true,
    workers: true,
    families: true,
    students: true,
    olderCrowd: true,
    //General Features
    delivery: false,
    takeout: false,
    reservations: false,
    credit: true,
    outdoorSeating: true,
    groups: true,
    waiterService: true,
    TV: true,
    veganOptions: true,
    triviaNight: false,
     //Drinks
    fullBar: true,
    happyHour: false,
    //Meals Served
    breakfast: false,
    brunch:  false,
    lunch: true,
    dinner: true,
    dessert: true,
    lateNight: false,
    //Parking
    street: false,
    garage: true,
    valet: true,
    privateLot: true},
    
    
    
    //Strange Taco Bar --Mexican Restaurant
    //Location Details
    
    {name: `Strange Taco Bar`,
    address: `225 W Crogan St, Lawrenceville, GA 30046`,
    website: `http://www.strangetacobar.com/`,
    phone: `(678) 869-5220`,
    mapURL: `https://goo.gl/maps/HYGFA4M4cFiR6Gqi7`,
    mapEmbed: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.4205880543004!2d-83.99222364925326!3d33.95602768053716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5bef1575af751%3A0x95371015a6de2ae0!2s225%20W%20Crogan%20St%2C%20Lawrenceville%2C%20GA%2030046!5e0!3m2!1sen!2sus!4v1567992166052!5m2!1sen!2sus`,
    //Location
    event: false, 
    bar: false, 
    restaurant: true,
    club: false, 
    marketplace: false, 
    iceCreamParlor: false,
    movieTheater: false, 
    winery: false, 
    hotelResort: false,
    //Food Type:
    american: false, 
    thai: false, 
    persian: false, 
    seafood: false, 
    mexican: true, 
    hawaiin: false, 
    sushi: false,
    korean: false,  
    italian: false,  
    latinAmerican: false,
    French: false, 
    iceCream: false,
    asianFusion: false, 
    vegan: false,
    //Price
    $:  true,
    $$: false, 
    $$$: false, 
    $$$$: false,
    //Crowd
    alternativeHipsters: true,
    workers: true,
    families: true,
    students: true,
    olderCrowd: true,
    //General Features
    delivery: false,
    takeout: true,
    reservations: false,
    credit: true,
    outdoorSeating: true,
    groups: true,
    waiterService: false,
    TV: false,
    veganOptions: true,
    triviaNight: false,
     //Drinks
    fullBar: false,
    happyHour: true,
    //Meals Served
    breakfast: false,
    brunch:  false,
    lunch: true,
    dinner: true,
    dessert: false,
    lateNight: false,
    //Parking
    street: true,
    garage: false,
    valet: false,
    privateLot: false},
    
    
    //Slutty Vegan -- Vegan Restaurant
    //Location Details
    
    {name: `Slutty Vegan`, 
    address: `1542 Ralph David Abernathy Blvd SW, Atlanta, GA 30310`,
    website: `http://sluttyveganatl.com/`,
    phone: `(678) 732-3525`,
    mapURL: `https://goo.gl/maps/azkQQxMFBHWxXBXn7`,
    mapEmbed: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.672885133324!2d-84.44019604925897!3d33.74327388059644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5034b4dee96c7%3A0x2d1aae433c75d5f1!2s1542%20Ralph%20David%20Abernathy%20Blvd%20SW%2C%20Atlanta%2C%20GA%2030310!5e0!3m2!1sen!2sus!4v1567992406461!5m2!1sen!2sus`, 
    //Location
    event: false, 
    bar: false, 
    restaurant: true,
    club: false, 
    marketplace: false, 
    iceCreamParlor: false,
    movieTheater: false, 
    winery: false, 
    hotelResort: false,
    //Food Type:
    american: false, 
    thai: false, 
    persian: false, 
    seafood: false, 
    mexican: false,
    hawaiin: false, 
    sushi: false,
    korean: false,  
    italian: false,  
    latinAmerican: false,
    French: false, 
    iceCream: false,
    asianFusion: false, 
    vegan: true, 
    //Price
    $: false,
    $$: true, 
    $$$: false, 
    $$$$: false,
    //Crowd
    alternativeHipsters: true,
    workers: false,
    families: true,
    students: true,
    olderCrowd: false,
    //General Features
    delivery: false,
    takeout: true,
    reservations: false,
    credit: true,
    outdoorSeating: false,
    groups: true,
    waiterService: false,
    TV: false,
    veganOptions:  true,
    triviaNight:  false,
     //Drinks
    fullBar: false,
    happyHour: false,
    //Meals Served
    breakfast: false,
    brunch:  false,
    lunch: true,
    dinner: true,
    dessert: false,
    lateNight: false,
    //Parking
    street: true,
    garage: false,
    valet: false,
    privateLot: false},
    
    
    //Lake Lanier Islands -- Reservoir | Hotel Resort
    //Location Details
    
    {name: `Lake Lanier Islands`,
    address: `7000 Lanier Islands Pkwy Buford, GA 30518`,
    Website: `https://www.lanierislands.com/`,
    phone: `(770) 945-8787`,
    mapURL: `https://goo.gl/maps/AWp5ukQWaRSToZ3L7`,
    mapEmbed: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3300.7659780785348!2d-84.02186934924732!3d34.177900480476566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f591f9033f611b%3A0x7b358f5d8432c25f!2s7000%20Lanier%20Islands%20Pkwy%2C%20Buford%2C%20GA%2030518!5e0!3m2!1sen!2sus!4v1567993028582!5m2!1sen!2sus`,
    //Location
    event: false, 
    bar: false, 
    restaurant: true,
    club: false, 
    marketplace: false, 
    iceCreamParlor: false,
    movieTheater: false, 
    winery: false, 
    hotelResort: true,
    //Food Type:
    american: true,
    thai: false, 
    persian: false, 
    seafood: false, 
    mexican: false,
    hawaiin: false, 
    sushi: false,
    korean: false,  
    italian: false,  
    latinAmerican: false,
    French: false, 
    iceCream: false,
    asianFusion: false, 
    vegan: true, 
    //Price
    $: false,
    $$: true, 
    $$$: false, 
    $$$$: false,
    //Crowd
    alternativeHipsters: true,
    workers: true,
    families: true,
    students: true,
    olderCrowd: false,
    //General Features
    delivery: false,
    takeout: false,
    reservations: true,
    credit: true,
    outdoorSeating: true,
    groups: true,
    waiterService: true,
    TV: true,
    veganOptions:  true,
    triviaNight:  false,
     //Drinks
    fullBar:  true,
    happyHour: false,
    //Meals Served
    breakfast:  true,
    brunch:   true,
    lunch: true,
    dinner: true,
    dessert: false,
    lateNight:  true,
    //Parking
    street: false,
    garage: false,
    valet: false,
    privateLot:  true},
    
    
    //29 Rooms -- Museum Exhibit
    //Location Details
    
    {name: `29 Rooms`, 
    address: `1235 Chattahoochee Ave NW, Atlanta, GA`,
    Website: ``,
    Phone: ``,
    mapURL: `https://goo.gl/maps/TGmGZbg22578oar5A`,
    mapEmbed: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.362957178813!2d-84.43078484925738!3d33.802945380579736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f504d79116b7fb%3A0x8f199a40c6fd94fb!2s1235%20Chattahoochee%20Ave%20NW%2C%20Atlanta%2C%20GA%2030318!5e0!3m2!1sen!2sus!4v1567993442279!5m2!1sen!2sus`,
    //Location
    event: true, 
    bar: false, 
    restaurant: false, 
    club: false, 
    marketplace: false, 
    iceCreamParlor: false,
    movieTheater: false, 
    winery: false, 
    hotelResort: false,
    //Food Type:
    american: true, 
    thai: false, 
    persian: false, 
    seafood: false, 
    mexican: false,
    hawaiin: false, 
    sushi: false,
    korean: false,  
    italian: false,  
    latinAmerican: false,
    French: false, 
    iceCream: false,
    asianFusion: false, 
    vegan: false, 
    //Price
    $: false,
    $$: true, 
    $$$: false, 
    $$$$: false,
    //Crowd
    alternativeHipsters: true,
    workers: false,
    families: true,
    students: true,
    olderCrowd: false,
    //General Features
    delivery: false,
    takeout: false,
    reservations: false,
    credit: true,
    outdoorSeating: false,
    groups: true,
    waiterService: false,
    TV: false,
    veganOptions:  false,
    triviaNight:  false,
     //Drinks
    fullBar: true,
    happyHour: false,
    //Meals Served
    breakfast: false,
    brunch:  false,
    lunch: false,
    dinner: false,
    dessert: false,
    lateNight: false,
    //Parking
    street: false,
    garage: false,
    valet: false,
    privateLot: true},
    
    
    //Bocado -- American Restaurant
    //Location Details
    
    {name:  `Bocado`,
    address: `887 Howell Mill Rd NW, Atlanta, GA 30318`,
    website: `http://bocadoatlanta.com/`,
    phone: `(404) 815-1399`,
    mapURL: `https://goo.gl/maps/gqtEc4xTK6yEUAG3A`,
    mapEmbed: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.276941301491!2d-84.41193954925798!3d33.77934588058637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5049303f35ca7%3A0x97647291777355b4!2s887%20Howell%20Mill%20Rd%20NW%2C%20Atlanta%2C%20GA%2030318!5e0!3m2!1sen!2sus!4v1567998373526!5m2!1sen!2sus`,
    //Location
    event: false, 
    bar: false, 
    restaurant: true,  
    club: false, 
    marketplace: false, 
    iceCreamParlor: false,
    movieTheater: false, 
    winery: false, 
    hotelResort: false,
    //Food Type:
    american: true, 
    thai: false, 
    persian: false, 
    seafood: false, 
    mexican: false,
    hawaiin: false, 
    sushi: false,
    korean: false,  
    italian: false,  
    latinAmerican: false,
    French: false, 
    iceCream: false,
    asianFusion: false, 
    vegan: false, 
    //Price
    $: false,
    $$: true, 
    $$$: false, 
    $$$$: false,
    //Crowd
    alternativeHipsters: true,
    workers: true,
    families: true,
    students: true,
    olderCrowd: true,
    //General Features
    delivery: true,
    takeout: true,
    reservations: true,
    credit: true,
    outdoorSeating: false,
    groups: true,
    waiterService: true,
    TV: false,
    veganOptions:  true,
    triviaNight:  false,
     //Drinks
    fullBar: true,
    happyHour: false,
    //Meals Served
    breakfast: false,
    brunch:  false,
    lunch: true,
    dinner: true,
    dessert: true,
    lateNight: false,
    //Parking
    street: false,
    garage: false,
    valet: true,
    privateLot: true},
    ]
   
    
    
    //SEARCH FUNCTIONALITY
    
    //Read users chosen search criteria
    $("#form-search").click(function(event) {
        event.preventDefault();
    
    //Page transitions and appearance
	$(".results-location").empty();
	$(".search-nav").slideUp();
	$("#location-main").removeClass("hide");
    $(".form").addClass("hide");
    $('.results-location').append('<div class="results-location-list"></div>')
    
        //Declare variable containing search filters
        var searchFilters = ['alternativeHipsters', 'workers', 'families', 'students', 'olderCrowd', '$', '$$', '$$$', '$$$$', 'event', 'bar', 'restaurant', 'club', 'marketplace', 'iceCreamParlor', 'movieTheater', 'winery', 'hotelResort', 'american', 'thai', 'persian', 'seafood', 'mexican', 'hawaiin', 'sushi', 'korean', 'italian', 'latinAmerican', 'french', 'iceCream', 'asianFusion', 'vegan', 'delivery', 'takeout', 'reservations', 'credit','outdoorSeating', 'groups','waiterService','TV','veganOptions','triviaNight','breakfast','brunch','lunch','dinner','dessert','dinner','lateNight','street','garage','valet','privateLot' ];
        
    
        // Declare user selection variable
        var userSelection = searchFilters.filter(function(searchFilter) {
            return $(`input[id="${searchFilter}"]`).prop('checked');
        })
        
    
        // Filter results based on user input
        var locationResults = locations.filter(function(locations) {
            return userSelection.every(function(selection) {
                return locations[selection]
            })
        })
    
    
        //Clear/reset checkboxes after search & filter button is pressed
        $( 'input[type="checkbox"]' ).prop('checked', false);
            var locationReultsString = JSON.stringify(locationResults);
            localStorage.setItem('selections',locationReultsString);
    

          
    })

    var newLocations = JSON.parse(localStorage.getItem('selections'));
    //Loop through search results
    newLocations.forEach(function(element) {
        console.log(element);
        //Get key value of name, address, website, phone and map
        var locationName = element.name;
        var locationAddress = element.address;
        var locationWebsite = element.webURL;
        var locationPhone = element.phone;
        var locationMapEmbed = element.mapEmbed;


        // Declare variable locationListing which contains a div with ID result-item
        var locationListing = $(" <div> ").attr("id", "result-item");
        

        //Append individual location details #result-item div
        locationListing.append("<h3>" + locationName + "</h3>" + locationAddress + "<br><a href='#' class='read-more'>Read More</a>");


        //Populate results location with search results
        $(".results-location-list").append(locationListing);
        $(".results-location-list").css({"overflow": "auto", "height":"480px"});


        //Load Chosen location into main page
        locationListing.click(function() {

        //Hide search landing page and show individual listing
        $(".individual-details").removeClass("hide");

        //Fill in location contact details
        $(".info-name").text(locationName);
        $(".address-holder").text(locationAddress);
        $(".website-holder").html(`<a target='_blank' onMouseOver="this.style.color='rgb(35,31,32)"' style='text-decoration: none; color: white' href='" + locationWebsite + "'>Visit Website</a>`);
        $(".phone-holder").text(locationPhone);
        $(".map").html(`<iframe src='" + locationMapEmbed + "' frameborder='0' style='border:0' allowfullscreen></iframe>`);

        // Empty existing location qualities in details section
        $(".crowd-text").empty();
        $(".drinks-text").empty();
        $(".food-info").empty();
        $(".price-text").empty();
        $(".parking-text").empty();
        $(".entertainment-text").empty();

        //Append location qualities
        // Location Crowd
        if (newLocations[key]["alternativeHipsters"] === true) {
            $(".crowd-text").append(` <li>Alternative & hipster crowd</li>`);
        }
        if (newLocations[key]["workers"] === true) {
            $(".crowd-text").append(" <li>Workers</li>");
        }
        if (newLocations[key]["families"] === true) {
            $(".crowd-text").append(" <li>Families</li>");
        }
        if (newLocations[key]["students"] === true) {
            $(".crowd-text").append(" <li>Students</li>");
        }
        if (newLocations[key]["olderCrowd"] === true) {
            $(".crowd-text").append(" <li>Older crowd</li>");
        }
        // Location Drinks
        if (newLocations[key]["fullBar"] === true) {
            $(".drinks-text").append(" <li>Full Bar</li>");
        }
        if (newLocations[key]["happyHour"] === true) {
            $(".drinks-text").append(" <li>Good for Happy Hour</li>");
        }
        // Food
        if (newLocations[key]["american"] === true) {
            $(".food-info").append(" <li>American</li>");
        }
        if (newLocations[key]["thai"] === true) {
            $(".food-info").append(" <li>Thai</li>");
        }
        if (newLocations[key]["persian"] === true) {
            $(".food-info").append(" <li>Persian</li>");
        }
        if (newLocations[key]["seafood"] === true) {
            $(".food-info").append(" <li>Seafood</li>");
        }
        if (newLocations[key]["mexican"] === true) {
            $(".food-info").append(" <li>Mexican</li>");
        }
        if (newLocations[key]["hawaiin"] === true) {
            $(".food-info").append(" <li>Hawaiin</li>");
        }
        if (newLocations[key]["sushi"] === true) {
            $(".food-info").append(" <li>Sushi</li>");
        }
        if (newLocations[key]["korean"] === true) {
            $(".food-info").append(" <li>Korean</li>");
        }
        if (newLocations[key]["italian"] === true) {
            $(".food-info").append(" <li>Italian</li>");
                }
        if (newLocations[key]["latinAmerican"] === true) {
            $(".food-info").append(" <li>Latin American</li>");
                }
        if (newLocations[key]["french"] === true) {
            $(".food-info").append(" <li>French</li>");
        }
        if (newLocations[key]["iceCream"] === true) {
            $(".food-info").append(" <li>Ice Cream</li>");
                }
        if (newLocations[key]["asianFusion"] === true) {
            $(".food-info").append(" <li>Asian Fusion</li>");
                }
        if (newLocations[key]["vegan"] === true) {
            $(".food-info").append(" <li>Vegan</li>");
                }
        //Price
        if (newLocations[key]["$"] === true) {
            $(".price-text").append(" <li>$</li>");
                }
        if (newLocations[key]["$$"] === true) {
            $(".price-text").append(" <li>$$</li>");
                }
        if (newLocations[key]["$$$"] === true) {
            $(".price-text").append(" <li>$$$</li>");
                }
        if (newLocations[key]["$$$$"] === true) {
            $(".price-text").append(" <li>$$$$</li>");
                }
        //Parking
        if (newLocations[key]["street"] === true) {
            $(".parking-text").append(" <li>Street</li>");
                }
        if (newLocations[key]["garage"] === true) {
            $(".parking-text").append(" <li>Garage</li>");
                }
        if (newLocations[key]["valet"] === true) {
            $(".parking-text").append(" <li>Valet</li>");
                }
        if (newLocations[key]["privateLot"] === true) {
            $(".parking-text").append(" <li>Private Lot</li>");
                }
        //Meals
        if (newLocations[key]["breakfast"] === true) {
            $(".meals-text").append(" <li>Breakfast</li>");
                }
        if (newLocations[key]["brunch"] === true) {
            $(".meals-text").append(" <li>Brunch</li>");
                }
        if (newLocations[key]["lunch"] === true) {
            $(".meals-text").append(" <li>Lunch</li>");
                }
        if (newLocations[key]["dinner"] === true) {
            $(".meals-text").append(" <li>Dinner</li>");
                }
        if (newLocations[key]["dessert"] === true) {
            $(".meals-text").append(" <li>Dessert</li>");
                }
        if (newLocations[key]["lateNight"] === true) {
            $(".meals-text").append(" <li>Late Night</li>");
            }
        // Entertainment / General Info
        if (newLocations[key]["delivery"] === true) {
            $(".entertainment-text").append(" <li>Delivery</li>");
        }
        if (newLocations[key]["takeout"] === true) {
            $(".entertainment-text").append(" <li>Takeout</li>");
        }
        if (newLocations[key]["reservations"] === true) {
            $(".entertainment-text").append(" <li>Takes Reservations</li>");
        }
        if (newLocations[key]["credit"] === true) {
            $(".entertainment-text").append(" <li>Accepts Credit Cards</li>");
        }
        if (newLocations[key]["outdoorSeating"] === true) {
            $(".entertainment-text").append(" <li>Outdoor Seating</li>");
        }
        if (newLocations[key]["groups"] === true) {
            $(".entertainment-text").append(" <li>Good for groups</li>");
        }
        if (newLocations[key]["waiterService"] === true) {
            $(".entertainment-text").append(" <li>Has Waiter Service</li>");
        }
        if (newLocations[key]["TV"] === true) {
            $(".entertainment-text").append(" <li>Has TV</li>");
        }
        if (newLocations[key]["veganOptions"] === true) {
            $(".entertainment-text").append(" <li>Has vegan options</li>");
        }
        if (newLocations[key]["triviaNight"] === true) {
            $(".entertainment-text").append(" <li>Has Trivia Night</li>");
            }
            
        })
    });

    $("#search-again").click(function(event) {
        event.preventDefault();
    
    //Page transitions and appearance
	$(".results-location").empty();
	$(".search-nav").slideDown();
	$("#location-main").addClass("hide");
    $(".form").removeClass("hide");
});

  
})