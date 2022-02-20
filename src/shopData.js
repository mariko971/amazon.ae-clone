var ID = function () {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return Math.random().toString(36).substring(2, 9);
};

export const shopData = [
  // FASHION
  {
    category: "Fashion",
    data: [
      {
        productID: "fpfchr",
        prodyctName: "Wildhorn Wallet",
        imageUrl:
          "https://images-eu.ssl-images-amazon.com/images/I/816R47XrV1L._AC_UL450_SR450,320_.jpg",
        productDescription:
          "WILDHORN Genuine Leather Hand-Crafted Wallet For Men, Bifold Leather Wallet, Model-WH1173",
        rating: 4.0,
        price: 26.42,
        currency: "AED",
        brand: "Wildhorn",
        gender: "Men",
      },
      {
        productID: "qi9x8",
        prodyctName: "Tommy Hilfiger Wallet",
        imageUrl:
          "https://images-eu.ssl-images-amazon.com/images/I/81vjOpKpMzS._AC_UL450_SR450,320_.jpg",
        productDescription:
          "Tommy Hilfiger Men's Thin Sleek Casual Bifold Wallet with 6 Credit Card Pockets and Removable Id Window",
        rating: 4.5,
        price: 86.24,
        currency: "AED",
        brand: "Tommy Hilfiger",
        gender: "Men",
      },
      {
        productID: "9d3mp",
        prodyctName: "Wildhorn Wallet",
        imageUrl:
          "https://images-eu.ssl-images-amazon.com/images/I/71THAJcBgDL._AC_UL450_SR450,320_.jpg",
        productDescription:
          "WILDHORN Genuine Leather Hand-Crafted Wallet For Men",
        rating: 4.0,
        price: 100.0,
        currency: "AED",
        brand: "Wildhorn",
        gender: "Men",
      },
      {
        productID: "4ze4ua",
        prodyctName: "Swarovski Necklace",
        imageUrl:
          "https://images-eu.ssl-images-amazon.com/images/I/71lUei6ancL._AC_UL450_SR450,320_.jpg",
        productDescription:
          "Swarovski Elements 925 Sterling Silver Pendant Necklace for Women Gift JRosee Jewelry",
        rating: 4.5,
        price: 119.0,
        currency: "AED",
        brand: "Swarovski",
        gender: "Women",
      },
      {
        productID: "g4k1o",
        prodyctName: "Margoun Apple Watch Band",
        imageUrl:
          "https://images-eu.ssl-images-amazon.com/images/I/5174NFvC+WL._AC_UL450_SR450,320_.jpg",
        productDescription:
          "MARGOUN Milanese Loop Strap for Apple Watch Band 41mm 30mm 38mm, Stainless Steel Alloy Replacement Watchband.",
        rating: 3.5,
        price: 69.0,
        currency: "AED",
        brand: "Margoun",
        gender: "Unisex",
      },
      {
        productID: "h60dvr",
        prodyctName: "Einskey Slouchy Beanie",
        imageUrl:
          "https://images-eu.ssl-images-amazon.com/images/I/71DFHWUOJwL._AC_UL450_SR450,320_.jpg",
        productDescription:
          "EINSKEY Slouchy Beanie for Men/Women 2-Pack Baggy Skull Cap Summer Winter Knit Hat",
        rating: 4.0,
        price: 135.73,
        currency: "AED",
        brand: "Einskey",
        gender: "Unisex",
      },
      {
        productID: "ntlbq9",
        prodyctName: "Jack & Jones Polo-Shirt",
        imageUrl:
          "https://images-eu.ssl-images-amazon.com/images/I/41Ft-R32uCL._AC_UL450_SR450,320_.jpg",
        productDescription: "Jack & Jones Men's Black Polo-Shirt",
        rating: 4.0,
        price: 63.55,
        currency: "AED",
        brand: "Jack & Jones",
        gender: "Men",
      },
      {
        productID: "vgf8lc",
        prodyctName: "Skechers Backpack",
        imageUrl:
          "https://m.media-amazon.com/images/I/910CwIXDRXL._AC_UL480_FMwebp_QL65_.jpg",
        productDescription: "Skechers Unisex-adult BACKPACK BACKPACK",
        rating: 3.0,
        price: 63.5,
        currency: "AED",
        brand: "Skechers",
        gender: "Unisex",
      },
      {
        productID: "5x2hur",
        prodyctName: "Skechers Messenger Bag",
        imageUrl:
          "https://m.media-amazon.com/images/I/81Py0mSD+DL._AC_UL480_FMwebp_QL65_.jpg",
        productDescription:
          "Skechers Messenger Bag For Unisex-Adult Black - S359",
        rating: 4.0,
        price: 92.54,
        currency: "AED",
        brand: "Skechers",
        gender: "Unisex",
      },
      {
        productID: "j8rrx",
        prodyctName: "Skechers Messenger Bag",
        imageUrl:
          "https://m.media-amazon.com/images/I/A1jT2nGrByL._AC_UL480_FMwebp_QL65_.jpg",
        productDescription: "Skechers S363-38 Unisex Messenger Bag, Grey",
        rating: 4.0,
        price: 73.64,
        currency: "AED",
        brand: "Skechers",
        gender: "Unisex",
      },
      {
        productID: "nct5p",
        prodyctName: "Skechers Backpack",
        imageUrl:
          "https://m.media-amazon.com/images/I/81KwPQjkkuL._AC_UL480_FMwebp_QL65_.jpg",
        productDescription: "Skechers 2 Compartments Backpack Black",
        rating: 3.5,
        price: 98.82,
        currency: "AED",
        brand: "Skechers",
        gender: "Unisex",
      },
      {
        productID: "i65v3",
        prodyctName: "Swarovski Necklace",
        imageUrl:
          "https://m.media-amazon.com/images/I/71GR7C-d-pL._AC_UL480_FMwebp_QL65_.jpg",
        productDescription:
          "SWAROVSKI Women's Symbolic Jewelry Collection, Rhodium Finish, Multi-Colored Crystals",
        rating: 5.0,
        price: 495.82,
        currency: "AED",
        brand: "Swarovski",
        gender: "Women",
      },
    ],
  },
  // LAPTOPS
  {
    category: "Laptops",
    data: [
      {
        productID: "5xq9k",
        prodyctName: "HP 15 Laptop",
        imageUrl:
          "https://m.media-amazon.com/images/I/81skV7BufjL._AC_UL480_QL65_.jpg",
        productDescription:
          "HP 15 Laptop, 11th Gen Intel Core i5-1135G7 CPU, 8 GB RAM, 256 GB SSD Storage, 15.6” Full HD IPS Display, Windows 10 Home, HP Fast Charge, Lightweight Design (15-dy2021nr, 2020)",
        rating: 4.5,
        price: 2093.0,
        currency: "AED",
        brand: "HP",
        CPU: "Intel Core i5",
        memory: "8 GB",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/81skV7BufjL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/81YWu8ohvbL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/81xWpvGSfNL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/81ikM81zLlS._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/81YTj+qtptL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/81HXtXwgrcL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/81ibie1y5oL._AC_SL1500_.jpg",
          ],
          details: [
            { title: "Series", value: "HP 15 Laptop" },
            { title: "Screen Size", value: "15.6 Inches" },
            { title: "Operating System", value: "Windows 10 Home" },
            { title: "CPU", value: "Intel" },
            { title: "Color", value: "Natural Silver" },
            { title: "Connectivity", value: "Bluetooth, USB,Wi-Fi, HDMI" },
          ],
        },
      },
      {
        productID: "dmgiv",
        prodyctName: "ASUS ZenBook 13",
        imageUrl:
          "https://m.media-amazon.com/images/I/71krHTRvglL._AC_UL480_FMwebp_QL65_.jpg",
        productDescription:
          "ASUS ZenBook 13 OLED UX325EA-OLED001T (Pine Grey)- 11th Gen Intel Core i7 CPU,16GB RAM LPDDR4X, Intel Iris Xe Graphics,1TB SSD, 13.3-inch OLED, Windows 10, Backlit-Eng-Arb-KB",
        rating: 4.5,
        price: 4479.0,
        currency: "AED",
        brand: "ASUS",
        CPU: "Intel Core i7",
        memory: "16 GB",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/71krHTRvglL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/81wzERIc8oL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/81pLhPgTlVL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71QR5-d+iVL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71d0Ra2UWpL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71JWDF4DdpL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71cuIoioh2L._AC_SL1500_.jpg",
          ],
          details: [
            { title: "Series", value: "UX325EA-OLED001T" },
            { title: "Screen Size", value: "13.4 Inches" },
            { title: "Operating System", value: "Windows 10" },
            { title: "CPU", value: "Intel" },
            { title: "Color", value: "Grey" },
            { title: "Connectivity", value: "Bluetooth, USB,Wi-Fi, HDMI" },
          ],
        },
      },
      {
        productID: "5oraqn",
        prodyctName: "Lenovo Thinkbook 15",
        imageUrl:
          "https://m.media-amazon.com/images/I/41dx9Mp9TXL._AC_UL480_FMwebp_QL65_.jpg",
        productDescription:
          "2021 Latest Lenovo Thinkbook 15 Gen 2 11th Gen Core I7-1165G7 Upto 4.7Ghz 15.6 FHD 220NIts Anti Glare Display 8GB 1TB HDD Bluetooth Webcam with ThinkShutter English Keyboard WIN10 PRO Mineral Grey",
        rating: 4.0,
        price: 2590.0,
        currency: "AED",
        brand: "Lenovo",
        CPU: "Intel Core i7",
        memory: "8 GB",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/41dx9Mp9TXL._AC_.jpg",
            "https://m.media-amazon.com/images/I/51QbyyHXtDL._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/51WFq+hdDlL._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/41qfVsjp6VL._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/41IybAKlVPL._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/4115PhUAwVL._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/41Bmy969r6L._AC_SL1000_.jpg",
          ],
          details: [
            { title: "Brand", value: "Lenovo" },
            { title: "Screen Size", value: "15.6 Inches" },
            { title: "Operating System", value: "Windows 10 Pro" },
            { title: "CPU", value: "Intel" },
            { title: "Color", value: "Grey" },
            { title: "Connectivity", value: "Bluetooth, USB,Wi-Fi, HDMI" },
          ],
        },
      },
      {
        productID: "orl3vp",
        prodyctName: "Lenovo IdeaPad 3",
        imageUrl:
          "https://m.media-amazon.com/images/I/61cjgSurDdS._AC_UL480_FMwebp_QL65_.jpg",
        productDescription:
          "Lenovo IdeaPad 3 15 Inch Laptop intel core i3 1005G1 8GB Memory 256GB SSD",
        rating: 4.5,
        price: 1633.0,
        currency: "AED",
        brand: "Lenovo",
        CPU: "Intel Core i3",
        memory: "8 GB",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/61cjgSurDdS._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/6124idiKLWL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/612sgRyvh0S._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61TQCODFsiS._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/51HvJnx2YgS._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/515b7sAiQ2S._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/51T7OJe2pBS._AC_SL1500_.jpg",
          ],
          details: [
            { title: "Brand", value: "Lenovo" },
            { title: "Screen Size", value: "15.6 Inches" },
            { title: "Operating System", value: "Windows 10" },
            { title: "CPU", value: "Intel" },
            { title: "Color", value: "Platinum Grey" },
            { title: "Connectivity", value: "Wi-Fi" },
          ],
        },
      },
      {
        productID: "ur3v33",
        prodyctName: "Acer Aspire 5",
        imageUrl:
          "https://m.media-amazon.com/images/I/41ErRwcJ0OS._AC_UL480_FMwebp_QL65_.jpg",
        productDescription:
          "2021 Acer Aspire 5 Slim Laptop, A515-56-36UT, 15.6 Full HD Display,11th Gen Intel Core i3-1115G4 CPU (Beat i5-8265U), WiFi 6, Amazon Alexa, Windows 10 Home (S Mode) (8GB|256GB SSD)",
        rating: 1.0,
        price: 1922.0,
        currency: "AED",
        brand: "Acer",
        CPU: "Intel Core i3",
        memory: "8 GB",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/41ErRwcJ0OS._AC_.jpg",
            "https://m.media-amazon.com/images/I/714oj6xm41S._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/617BouivBMS._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71+x0ZpVq2S._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61XcwJyIQyS._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/51Byngq5QES._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71oGDOIOVYS._AC_SL1500_.jpg",
          ],
          details: [
            { title: "Series", value: "Acer Aspire" },
            { title: "Brand", value: "Acer" },
            { title: "Screen Size", value: "15.6 Inches" },
            { title: "Operating System", value: "Windows 10 Home" },
            { title: "CPU", value: "Intel" },
            { title: "Color", value: "Silver" },
            { title: "Connectivity", value: "Wi-Fi, USB" },
          ],
        },
      },
      {
        productID: "4dy9d9",
        prodyctName: "HP Envy x360",
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/61s9j%2BxvKxL._AC_UL200_SR200,200_.jpg",
        productDescription:
          "HP ENVY x360 Convertible Laptop i7-1165G7, 16GB RAM, 1TB SSD",
        rating: 4.5,
        price: 3887.0,
        currency: "AED",
        brand: "HP",
        CPU: "Intel Core i7",
        memory: "16 GB",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/61s9j+xvKxL._AC_SL1200_.jpg",
            "https://m.media-amazon.com/images/I/612EHDYOudL._AC_SL1200_.jpg",
            "https://m.media-amazon.com/images/I/61pxpejpdKL._AC_SL1200_.jpg",
            "https://m.media-amazon.com/images/I/61unRjEoHfL._AC_SL1200_.jpg",
            "https://m.media-amazon.com/images/I/51AmbXEFzzL._AC_SL1200_.jpg",
            "https://m.media-amazon.com/images/I/51L4MGOtl7L._AC_SL1200_.jpg",
          ],
          details: [
            { title: "Brand", value: "HP" },
            { title: "Screen Size", value: "15.6 Inches" },
            { title: "Operating System", value: "Windows 10 Home" },
            { title: "CPU", value: "Intel" },
            { title: "Color", value: "Silver" },
            { title: "Connectivity", value: "Wi-Fi, USB" },
          ],
        },
      },
      {
        productID: "7a9mb",
        prodyctName: "Dell Latitude E6430",
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/61HSrzaLbcS._AC_UL200_SR200,200_.jpg",
        productDescription:
          "Dell Latitude E6430 Laptop WEBCAM - HDMI - Intel Core i5 2.6ghz - 8GB DDR3-128GB SSD…",
        rating: 4.0,
        price: 527.0,
        currency: "AED",
        brand: "Dell",
        CPU: "Intel Core i5",
        memory: "8 GB",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/61HSrzaLbcS._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61Uhj2puuYS._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/615RaLtLLTS._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61hyrBklXqS._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61R2AUlNa5S._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/611B6FS5F6S._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/81yJluid-dL._AC_SL1500_.jpg",
          ],
          details: [
            { title: "Brand", value: "Dell" },
            { title: "Screen Size", value: "14 Inches" },
            { title: "Operating System", value: "Windows 10 Pro" },
            { title: "CPU", value: "Intel" },
            { title: "Color", value: "Black" },
            { title: "Connectivity", value: "Wi-Fi" },
          ],
        },
      },
      {
        productID: "plxrw5",
        prodyctName: "Acer Nitro 5 Gaming",
        imageUrl:
          "https://m.media-amazon.com/images/I/71dT+SyIpWL._AC_UL480_FMwebp_QL65_.jpg",
        productDescription:
          "Acer Nitro5 Gaming NB AMD Ryzen5-4600H/8GB DDR4/1TB HDD+256GB SSD/4GB Nvidia GTX1650/15.6 FHD IPS/Win10-WiFi-6+Gaming Headset+Mouse Pad- Arabic&English Keyboard-One year warranty by Acer call 8004711",
        rating: 3.5,
        price: 3199.0,
        currency: "AED",
        brand: "Acer",
        CPU: "AMD Ryzen5",
        memory: "8 GB",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/71dT+SyIpWL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/617HC+cwnJL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71FGQCw3DrL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/711vVizINNL._AC_SL1500_.jpg",
          ],
          details: [
            { title: "Series", value: "Nitro 5" },
            { title: "Brand", value: "Acer" },
            { title: "Screen Size", value: "15.6 Inches" },
            { title: "Operating System", value: "Windows 10 Home" },
            { title: "CPU", value: "AMD Ryzen 5" },
            { title: "Color", value: "Black" },
            {
              title: "Connectivity",
              value: "Bluetooth, Wi-Fi, USB, Ethernet, HDMI",
            },
          ],
        },
      },
      {
        productID: "pc1fd8",
        prodyctName: "ASUS ROG Strix G15",
        imageUrl:
          "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UL480_QL65_.jpg",
        productDescription:
          "ASUS ROG Strix G15 (2021) Gaming Laptop, 15.6” 300Hz IPS Type FHD Display, NVIDIA GeForce RTX 3070, AMD Ryzen R9-5900HX, 32GB DDR4, 1TB PCIe SSD, Per-Key RGB Keyboard, Windows 10, G513QR-AS98",
        rating: 4.5,
        price: 6889.0,
        currency: "AED",
        brand: "ASUS",
        CPU: "AMD Ryzen9",
        memory: "32 GB",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/81lq4pVKgQL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71-0vHmE4LL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71JQGtIpspL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71kCnv4ipaL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71mPejcX1PL._AC_SL1500_.jpg",
          ],
          details: [
            { title: "Series", value: "ROG Strix G15" },
            { title: "Brand", value: "ASUS" },
            { title: "Screen Size", value: "15.6 Inches" },
            { title: "Operating System", value: "Windows 10 Home" },
            { title: "CPU", value: "AMD Ryzen 9" },
            { title: "Color", value: "Eclipse Grey" },
            {
              title: "Connectivity",
              value:
                "Wi-Fi 6(802.11ax)+Bluetooth 5.1 (Dual band) 2*2;(*BT version may change with OS upgrades.) -RangeBoost",
            },
          ],
        },
      },
    ],
  },
  // TABLETS
  {
    category: "Tablets",
    data: [
      {
        productID: "yyeo5b",
        prodyctName: "Apple Ipad 2021",
        imageUrl:
          "https://m.media-amazon.com/images/I/61AMxJG2wcL._AC_UL480_QL65_.jpg",
        productDescription:
          "New 2021 Apple iPad (10.2-inch, Wi-Fi, 64GB) - Space Grey (9th Generation)",
        rating: 4.0,
        price: 1399.0,
        currency: "AED",
        brand: "Apple",
        OS: "IOS",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/61AMxJG2wcL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61Ce1X4co-L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/81UAH+XWVtL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/81ttQFx4P6L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/81g8ZLIB2FL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/818gMGhF8GL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/91pD8Wp1jcL._AC_SL1500_.jpg",
          ],
          details: [
            {
              title: "Model Name",
              value: "10.2-inch iPad Wi‑Fi 64GB - Space Gray",
            },
            { title: "Brand", value: "Apple" },
            { title: "Generation", value: "9th Generation" },
            { title: "Screen Size", value: "10.2 Inches" },
            { title: "Operating System", value: "IpadOS 15" },
          ],
        },
      },
      {
        productID: "xnmyk",
        prodyctName: "Apple Ipad 2021",
        imageUrl:
          "https://m.media-amazon.com/images/I/415c6dx5XrL._AC_UL480_QL65_.jpg",
        productDescription:
          "New 2021 Apple iPad (10.2-inch, Wi-Fi, 64GB) - silver (9th Generation)",
        rating: 4.0,
        price: 1399.0,
        currency: "AED",
        brand: "Apple",
        OS: "IOS",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/61CteWkcEFL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61lbuTaJmVL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/81tLSgg5-9L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/81ttQFx4P6L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/81g8ZLIB2FL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/818gMGhF8GL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/91pD8Wp1jcL._AC_SL1500_.jpg",
          ],
          details: [
            {
              title: "Model Name",
              value: "10.2-inch iPad Wi‑Fi 64GB - Silver",
            },
            { title: "Brand", value: "Apple" },
            { title: "Generation", value: "9th Generation" },
            { title: "Screen Size", value: "10.2 Inches" },
            { title: "Operating System", value: "IpadOS 15" },
          ],
        },
      },
      {
        productID: "6bd31i",
        prodyctName: "Apple Ipad 2021",
        imageUrl:
          "https://m.media-amazon.com/images/I/61AMxJG2wcL._AC_UL480_QL65_.jpg",
        productDescription:
          "New 2021 Apple iPad (10.2-inch, Wi-Fi, 256GB) - Space Grey (9th Generation)",
        rating: 4.0,
        price: 1999.0,
        currency: "AED",
        brand: "Apple",
        OS: "IOS",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/61AMxJG2wcL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61Ce1X4co-L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/81UAH+XWVtL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/81ttQFx4P6L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/81g8ZLIB2FL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/818gMGhF8GL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/91pD8Wp1jcL._AC_SL1500_.jpg",
          ],
          details: [
            {
              title: "Model Name",
              value: "10.2-inch iPad Wi‑Fi 256GB - Space Gray",
            },
            { title: "Brand", value: "Apple" },
            { title: "Generation", value: "9th Generation" },
            { title: "Screen Size", value: "10.2 Inches" },
            { title: "Operating System", value: "IpadOS 15" },
          ],
        },
      },
      {
        productID: "s6c6q",
        prodyctName: "Apple Ipad Air 2020",
        imageUrl:
          "https://m.media-amazon.com/images/I/71AJC-PE5IS._AC_UL480_QL65_.jpg",
        productDescription:
          "2020 Apple iPad Air (10.9-inch, Wi-Fi, 64GB) - Sky Blue (4th Generation)",
        rating: 4.5,
        price: 2179.0,
        currency: "AED",
        brand: "Apple",
        OS: "IOS",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/71AJC-PE5IS._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61-v165t-lS._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71AfQ+XminS._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/81GTk8jCxxS._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71a2anhcVIS._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61Q1z66auHS._AC_SL1500_.jpg",
          ],
          details: [
            { title: "Model Name", value: "MYFQ2AB/A" },
            { title: "Brand", value: "Apple" },
            { title: "Generation", value: "2nd Generation" },
            { title: "Screen Size", value: "10.9 Inches" },
            { title: "Operating System", value: "IOS 14" },
          ],
        },
      },
      {
        productID: "6ly9tp",
        prodyctName: "Lenovo Tab M8",
        imageUrl:
          "https://m.media-amazon.com/images/I/513tmuYpH9L._AC_UL480_FMwebp_QL65_.jpg",
        productDescription:
          "Lenovo Tab M8 HD 2ND GEN (TB-8505F), 8 inch Tablet, MediaTek Helio A22 Processor, 2GB RAM, 16GB Storage, WiFi, Android OS, Iron Grey - [ZA5G0115AE]",
        rating: 4.0,
        price: 399.0,
        currency: "AED",
        brand: "Lenovo",
        OS: "Android",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/513tmuYpH9L._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/41MF4ZG16IL._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/41eBHVjPOIL._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/41GzvzjqttL._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/51H-93ZztQL._AC_SL1000_.jpg",
          ],
          details: [
            { title: "Series", value: "Tab M8 HD (2nd Gen)" },
            { title: "Brand", value: "Lenovo" },
            { title: "Generation", value: "2nd Generation" },
            { title: "Screen Size", value: "8 Inches" },
            { title: "Operating System", value: "Android 9 Pie" },
          ],
        },
      },
      {
        productID: "p58wf9",
        prodyctName: "Lenovo Tab M10",
        imageUrl:
          "https://m.media-amazon.com/images/I/71MDku1iKgL._AC_UL480_FMwebp_QL65_.jpg",
        productDescription:
          "Lenovo Tab M10 (TB-X505X), 10.1 inch Tablet, Qualcomm Snapdragon 429 Processor, 2GB RAM, 32GB Storage, WiFi+4G LTE, Android OS, Slate Black - [ZA4K0026AE]",
        rating: 3.5,
        price: 456.95,
        currency: "AED",
        brand: "Lenovo",
        OS: "Android",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/61zJ-WxlgcL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/51fuDxDsqWL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71l35D8VmrL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61Dd1hvKs-L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61uNu1nmUcL._AC_SL1500_.jpg",
          ],
          details: [
            { title: "Brand", value: "Lenovo" },
            { title: "Color", value: "Slate Black" },
            { title: "Screen Size", value: "10.1 Inches" },
            { title: "Operating System", value: "Android" },
            { title: "Memory storage capacity", value: "32 GB" },
          ],
        },
      },
      {
        productID: "pp5i68",
        prodyctName: "Apple Ipad Pro 2021",
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/81Y5WuARqpS._AC_UL200_SR200,200_.jpg",
        productDescription:
          "2021 Apple iPad Pro (11-inch, Wi-Fi, 128GB) - Space Grey (3rd Generation)",
        rating: 4.5,
        price: 3956.95,
        currency: "AED",
        brand: "Apple",
        OS: "IOS",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/81Y5WuARqpS._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71IBJaDNl0S._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/81G35xZ-d1S._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/816WH7-GCTS._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71kEjkD8YpS._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61D0JLi+q3S._AC_SL1500_.jpg",
          ],
          details: [
            { title: "Model Name", value: "MHQU3AB/A" },
            { title: "Brand", value: "Apple" },
            { title: "Generation", value: "3rd Generation" },
            { title: "Screen Size", value: "11 Inches" },
            { title: "Operating System", value: "IOS 14" },
          ],
        },
      },
      {
        productID: "l29n2g",
        prodyctName: "Apple Ipad Mini 2021",
        imageUrl:
          "https://images-na.ssl-images-amazon.com/images/I/71hM0QvGshL._AC_UL200_SR200,200_.jpg",
        productDescription:
          "New 2021 Apple iPad mini (8.3-inch, Wi-Fi + Cellular, 256GB) - Space Grey (6th Generation)",
        rating: 4.5,
        price: 3329.95,
        currency: "AED",
        brand: "Apple",
        OS: "IOS",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/71hM0QvGshL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61FXI7HjsWL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/916syDIqZ7L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/81jV9N2mcUL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71+ZpWvs1sL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61eATVQihbL._AC_SL1500_.jpg",
          ],
          details: [
            {
              title: "Model Name",
              value: "IPad mini Wi‑Fi + Cellular 256GB - Space Gray",
            },
            { title: "Brand", value: "Apple" },
            { title: "Generation", value: "6th Generation" },
            { title: "Screen Size", value: "8.3 Inches" },
            { title: "Operating System", value: "IPadOS 15" },
          ],
        },
      },
      {
        productID: "sf6gye",
        prodyctName: "Microsoft Surface GO 2",
        imageUrl:
          "https://m.media-amazon.com/images/I/610F-2TJaCL._AC_UL480_FMwebp_QL65_.jpg",
        productDescription:
          "Microsoft Surface GO 2 10 Inch Tablet PC Silver Intel, Windows 10 Home in S Mode, 2020 Model, Device Only, 1901, Core M3 Wifi, 8GB, 128GB SSD",
        rating: 4.5,
        price: 2815.95,
        currency: "AED",
        brand: "Microsoft",
        OS: "Windows",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/610F-2TJaCL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71RGIN8IbjL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61gGmhpI3kL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71t3pxeTJfL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71Ynszuzj9L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71JnXIVVcnL._AC_SL1500_.jpg",
          ],
          details: [
            { title: "Series", value: "1901" },
            { title: "Brand", value: "Microsoft" },
            { title: "Generation", value: "8th Generation" },
            { title: "Screen Size", value: "10.5 Inches" },
            { title: "Operating System", value: "Windows 10 Home" },
          ],
        },
      },
      {
        productID: "2lfrk1",
        prodyctName: "Microsoft Surface GO 2",
        imageUrl:
          "https://m.media-amazon.com/images/I/61JuOxNsHtL._AC_UL480_FMwebp_QL65_.jpg",
        productDescription:
          "Microsoft Surface GO 2 [STV-00005], Tablet-PC, Intel Pentium Gold 4425Y Processor, 4GB RAM, 64GB eMMC, 10.5 inch, Intel UHD Graphics 615, Win10 S Mode, WiFi, Platinum [Middle East Version]",
        rating: 4.5,
        price: 1649,
        currency: "AED",
        brand: "Microsoft",
        OS: "Windows",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/61JuOxNsHtL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/7120020W1CL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61PSTO4AZcL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71tKlwdj5YL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71oW46sgV9L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/41OKWXVx7yL._AC_.jpg",
          ],
          details: [
            { title: "Series", value: "Microsoft Surface Go 2" },
            { title: "Brand", value: "Microsoft" },
            { title: "Screen Size", value: "10.5 Inches" },
            { title: "Operating System", value: "Windows 10 Home" },
            { title: "Memory storage capacity", value: "64 GB" },
          ],
        },
      },
      {
        productID: "t8p4j",
        prodyctName: "Samsung Galaxy Book",
        imageUrl:
          "https://m.media-amazon.com/images/I/71GXjvnIlcL._AC_UL480_FMwebp_QL65_.jpg",
        productDescription:
          "Samsung Galaxy Book 12 Tablet - Intel Core i5-7200U, 12 Inch,128GB, 4GB RAM, 4G LTE, Windows 10 Home, Silver with En Keyboard Black and S Pen",
        rating: 4.0,
        price: 2499,
        currency: "AED",
        brand: "Samsung",
        OS: "Windows",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/71GXjvnIlcL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/714oPj1abwL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71XBQgfo1nL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71d7XQEc1YL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/81XBe3QhdoL._AC_SL1500_.jpg",
          ],
          details: [
            { title: "Brand", value: "Samsung" },
            { title: "Screen Size", value: "12 Inches" },
            { title: "Operating System", value: "Windows" },
            { title: "Memory storage capacity", value: "128 GB" },
            { title: "Color", value: "Black" },
          ],
        },
      },
      {
        productID: "18opm2",
        prodyctName: "Samsung Galaxy Tab A7",
        imageUrl:
          "https://m.media-amazon.com/images/I/81AG6QYrM+S._AC_UL480_QL65_.jpg",
        productDescription:
          "Samsung Galaxy Tab A7 Lite 8.7 Inch LTE Android Tablet 64 GB Grey (UK Version) - Amazon Exclusive",
        rating: 4.0,
        price: 799.99,
        currency: "AED",
        brand: "Samsung",
        OS: "Android",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/81AG6QYrM+S._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/81ZKNdyNELS._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/418SRdcye2S._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61WtbMN6ayS._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/81xywdJ5fZS._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/8172n06NaTS._AC_SL1500_.jpg",
          ],
          details: [
            { title: "Series", value: "Galaxy Tab A7 Lite 64GB Grey LTE" },
            { title: "Brand", value: "Samsung" },
            { title: "Screen Size", value: "8.7 Inches" },
            { title: "Operating System", value: "Android" },
            { title: "Memory storage capacity", value: "64 GB" },
          ],
        },
      },
    ],
  },
  // MOBILE PHONES
  {
    category: "Mobile Phones",
    data: [
      {
        productID: ID(),
        productName: "iPhone 13 Pro Max",
        imageUrl:
          "https://m.media-amazon.com/images/I/61i8Vjb17SL._AC_UL480_QL65_.jpg",
        productDescription:
          "New Apple iPhone 13 Pro Max with FaceTime (256GB) - Sierra Blue",
        rating: 4.5,
        price: 5099.75,
        currency: "AED",
        brand: "Apple",
        storage: "256 GB",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/61i8Vjb17SL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71zwao302EL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/81DzfVDR-lL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/7161nwSVX9L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/812rT8Q7qHL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61H1IxON5HL._AC_SL1500_.jpg",
          ],
          details: [
            { title: "Series", value: "IPhone 13 Pro Max 256GB Sierra Blue" },
            { title: "Brand", value: "Apple" },
            { title: "Form Factor", value: "Slider" },
            { title: "Memory storage capacity", value: "256 GB" },
          ],
        },
      },
      {
        productID: ID(),
        productName: "iPhone 12 Pro Max",
        imageUrl:
          "https://m.media-amazon.com/images/I/71MHTD3uL4L._AC_UL480_QL65_.jpg",
        productDescription:
          "Apple iPhone 12 Pro Max with FaceTime (256GB) - Pacific Blue",
        rating: 4.5,
        price: 4399.13,
        currency: "AED",
        brand: "Apple",
        storage: "256 GB",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/71MHTD3uL4L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/81sSyXuZBqL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/81RZc5OK9YL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/81L7XxVZtHL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/81xaMP9TqPL._AC_SL1500_.jpg",
          ],
          details: [
            { title: "Model Name", value: "MGDF3AA/A" },
            { title: "Brand", value: "Apple" },
            { title: "Form Factor", value: "Bar" },
            { title: "Memory storage capacity", value: "256 GB" },
          ],
        },
      },
      {
        productID: ID(),
        productName: "Samsung Galaxy Note20",
        imageUrl:
          "https://m.media-amazon.com/images/I/51jomkh3CFS._AC_UL480_QL65_.jpg",
        productDescription:
          "Samsung Galaxy Note20 Ultra Dual SIM 256 GB 12GB RAM 5G (UAE Version) - Mystic Black - 1 year local brand warranty",
        rating: 4.0,
        price: 3099.0,
        currency: "AED",
        brand: "Samsung",
        storage: "256 GB",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/51jomkh3CFS._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/51hiCDVOIKS._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/51y74zRzy8S._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/51bfroWLzCS._AC_SL1000_.jpg",
          ],
          details: [
            { title: "Model Name", value: "Galaxy Note20 Ultra" },
            { title: "Brand", value: "Samsung" },
            { title: "Form Factor", value: "Smart Phone" },
            { title: "Memory storage capacity", value: "256 GB" },
          ],
        },
      },
      {
        productID: ID(),
        productName: "Samsung Galaxy A52s",
        imageUrl:
          "https://m.media-amazon.com/images/I/71lvzz864+L._AC_UL480_QL65_.jpg",
        productDescription:
          "Samsung Galaxy A52s 5G Dual SIM Smartphone, 256GB Storage and 8GB RAM (UAE Version), Awesome Black",
        rating: 4.0,
        price: 1379.0,
        currency: "AED",
        brand: "Samsung",
        storage: "256 GB",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/71lvzz864+L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/811OxBQ2wIL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/81eRb3r4VUL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/81A+3fSPCpL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71ad2wgwC5L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/41bt5eeVVrL._AC_SL1500_.jpg",
          ],
          details: [
            { title: "Model Name", value: "Galaxy A52s 5G" },
            { title: "Brand", value: "Samsung" },
            { title: "Form Factor", value: "Touch Screen" },
            { title: "Memory storage capacity", value: "256 GB" },
          ],
        },
      },
      {
        productID: ID(),
        productName: "iPhone 13 Pro",
        imageUrl:
          "https://m.media-amazon.com/images/I/61sDyXAepuL._AC_UL480_QL65_.jpg",
        productDescription:
          "New Apple iPhone 13 Pro with Facetime (256GB) - Gold",
        rating: 4.0,
        price: 4619.0,
        currency: "AED",
        brand: "Apple",
        storage: "256 GB",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/61sDyXAepuL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71k0zz+8paL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71VNa3QYKcL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/7161nwSVX9L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/81UbpiiNwrL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61M2F7QmmtL._AC_SL1500_.jpg",
          ],
          details: [
            { title: "Model Name", value: "IPhone 13 Pro 256GB Gold" },
            { title: "Brand", value: "Apple" },
            { title: "Form Factor", value: "Slider" },
            { title: "Memory storage capacity", value: "256 GB" },
          ],
        },
      },
      {
        productID: ID(),
        productName: "iPhone 13",
        imageUrl:
          "https://m.media-amazon.com/images/I/71xb2xkN5qL._AC_UL480_QL65_.jpg",
        productDescription: "New Apple iPhone 13 with FaceTime (128GB) - Blue",
        rating: 4.0,
        price: 3200.86,
        currency: "AED",
        brand: "Apple",
        storage: "128 GB",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/71xb2xkN5qL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61d8XHJuE2L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/81junVbiuyL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/817WqZsxjWL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/81D+jJBOfpL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61jcXSsEXzL._AC_SL1500_.jpg",
          ],
          details: [
            { title: "Model Name", value: "IPhone 13 128GB Blue" },
            { title: "Brand", value: "Apple" },
            { title: "Form Factor", value: "Slider" },
            { title: "Memory storage capacity", value: "128 GB" },
          ],
        },
      },
      {
        productID: ID(),
        productName: "Samsung Galaxy S21",
        imageUrl:
          "https://m.media-amazon.com/images/I/61qcH1P2XjS._AC_UL480_QL65_.jpg",
        productDescription:
          "SAMSUNG Galaxy S21 Ultra 5G Pro Grade Quad Camera, 100x Space Zoom, 8K Video Dual SIM Smartphone, S Pen Compatible All Day Battery UAE Version Phantom Black 256GB",
        rating: 4.0,
        price: 3898.25,
        currency: "AED",
        brand: "Samsung",
        storage: "256 GB",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/61qcH1P2XjS._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/61pPSCCFlVS._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/61s79-4guRS._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/51IkjJFQGVS._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/51kNe+rL7kS._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/51B2pWTVvnS._AC_SL1000_.jpg",
          ],
          details: [
            { title: "Model Name", value: "Galaxy S21 Ultra" },
            { title: "Brand", value: "Samsung" },
            { title: "Form Factor", value: "Touch Bar" },
            { title: "Memory storage capacity", value: "256 GB" },
          ],
        },
      },
      {
        productID: ID(),
        productName: "Xiaomi Redmi Note10",
        imageUrl:
          "https://m.media-amazon.com/images/I/51JXERYpvHL._AC_UL480_QL65_.jpg",
        productDescription:
          "Xiaomi Redmi Note 10S Dual SIM Amoled Display Onyx Gray 6GB RAM 128GB 4G LTE",
        rating: 4.0,
        price: 788.0,
        currency: "AED",
        brand: "Xiaomi",
        storage: "256 GB",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/51JXERYpvHL._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/411Ope3OU8S._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/41+fBUFxy3S._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/41G3+iLLfWS._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/31iGFAFB5hS._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/317VqGb4FrS._AC_SL1000_.jpg",
          ],
          details: [
            { title: "Model Name", value: "Redmi Note 10S" },
            { title: "Brand", value: "Xiaomi" },
            { title: "Form Factor", value: "Bar" },
            { title: "Memory storage capacity", value: "6 GB" },
          ],
        },
      },
      {
        productID: ID(),
        productName: "Samsung Galaxy M12",
        imageUrl:
          "https://m.media-amazon.com/images/I/81+Zecmq92S._AC_UL480_QL65_.jpg",
        productDescription:
          "Samsung Galaxy M12 LTE Dual SIM Smartphone, 64GB Storage and 4GB RAM (UAE Version), Blue",
        rating: 4.0,
        price: 548.0,
        currency: "AED",
        brand: "Samsung",
        storage: "64 GB",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/81+Zecmq92S._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61MHYiq2UpS._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/81DQJw1g+DL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/91Xw+aaC-8S._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61ajWntv13L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71gs42tfPAL._AC_SL1500_.jpg",
          ],
          details: [
            { title: "Model Name", value: "Galaxy M12" },
            { title: "Brand", value: "Samsung" },
            { title: "Form Factor", value: "Touch Bar" },
            { title: "Memory storage capacity", value: "64 GB" },
          ],
        },
      },
      {
        productID: ID(),
        productName: "Samsung Galaxy A12",
        imageUrl:
          "https://m.media-amazon.com/images/I/81aP7ztJqhL._AC_UL480_QL65_.jpg",
        productDescription:
          "SAMSUNG Galaxy A12 LTE Dual SIM Smartphone, 128GB Storage and 4GB RAM UAE Version, Black",
        rating: 3.5,
        price: 559.34,
        currency: "AED",
        brand: "Samsung",
        storage: "128 GB",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/81aP7ztJqhL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71m7CmsUJfL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/81txYj85lrL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71b77mY6NeL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61rjfrVyW9L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/611HLyoc-AL._AC_SL1500_.jpg",
          ],
          details: [
            { title: "Model Name", value: "Galaxy A12" },
            { title: "Brand", value: "Samsung" },
            { title: "Form Factor", value: "Touch Bar" },
            { title: "Memory storage capacity", value: "128 GB" },
          ],
        },
      },
      {
        productID: ID(),
        productName: "OPPO Reno6",
        imageUrl:
          "https://m.media-amazon.com/images/I/81yGsmHeOYL._AC_UL480_FMwebp_QL65_.jpg",
        productDescription:
          "OPPO Reno6 5G Dual SIM Smartphone 128GB 8GB RAM, 65W Super VOOC Flash Charge, 90Hz Display, 5G Mobile Phone Unlocked (UAE Version) Aurora + OPPO True Wireless + Mobile Stand",
        rating: 3.0,
        price: 2099.75,
        currency: "AED",
        brand: "OPPO",
        storage: "128 GB",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/81yGsmHeOYL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71eurrqqFEL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71yCCTcQo5L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/810nlIAz8WL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/810ZhGa054L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/81IndOEvVBL._AC_SL1500_.jpg",
          ],
          details: [
            { title: "Model Name", value: "Reno6 5G" },
            { title: "Brand", value: "OPPO" },
            { title: "Form Factor", value: "Bar" },
            { title: "Memory storage capacity", value: "128 GB" },
          ],
        },
      },
      {
        productID: ID(),
        productName: "Google Pixel 6",
        imageUrl:
          "https://m.media-amazon.com/images/I/71SsBCLDt9L._AC_UL480_FMwebp_QL65_.jpg",
        productDescription:
          "Google Pixel 6 - Unlocked Android 5G Smartphone with 50 Megapixel Camera and Wide-Angle Lens - 128 GB - Stormy Black",
        rating: 3.0,
        price: 2683.0,
        currency: "AED",
        brand: "Google",
        storage: "128 GB",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/71SsBCLDt9L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/41Y3cU3zB7L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/51vCfU1c8lL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71t4x1uHzBL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71sFiWYEB-L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/51pmbK+XhjL._AC_SL1500_.jpg",
          ],
          details: [
            { title: "Model Name", value: "Pixel 6" },
            { title: "Brand", value: "Google" },
            { title: "Form Factor", value: "Bar" },
            { title: "Memory storage capacity", value: "128 GB" },
          ],
        },
      },
    ],
  },

  // HEADPHONES
  {
    category: "Headphones",
    data: [
      {
        productID: "ubtxe14",
        productName: "Apple AirPods",
        imageUrl:
          "https://m.media-amazon.com/images/I/615ekapl+pL._AC_UL480_QL65_.jpg",
        productDescription: "New Apple AirPods (3rd generation)",
        rating: 4.5,
        price: 642.89,
        currency: "AED",
        brand: "Apple",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/615ekapl+pL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/81ilB-UjbUL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61EcSkrkl2L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/718TuVzLbbL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61ZvNJ-b+KL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61csINpjQEL._AC_SL1500_.jpg",
          ],
          details: [
            { title: "Brand", value: "Apple" },
            {
              title: "Colour",
              value: "White",
            },
            {
              title: "Connectivity technology",
              value: "Wireless",
            },
            { title: "Model name", value: "Apple AirPods (3rd generation)" },
            { title: "Form factor", value: "In Ear" },
          ],
        },
      },
      {
        productID: "oo6zs7m",
        productName: "Apple Airpods Pro",
        imageUrl:
          "https://m.media-amazon.com/images/I/71bhWgQK-cL._AC_UL480_QL65_.jpg",
        productDescription:
          "Apple AirPods Pro with MagSafe charging case (2021)",
        rating: 4.5,
        price: 719.0,
        currency: "AED",
        brand: "Apple",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/71bhWgQK-cL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71+oSLK5SIL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71zny7BTRlL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71V9-3bT9rL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/81nuOe+XCtL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71tbMyhmxcL._AC_SL1500_.jpg",
          ],
          details: [
            { title: "Brand", value: "Apple" },
            {
              title: "Colour",
              value: "White",
            },
            {
              title: "Compatible devices",
              value: "MacBook, Ipad, IPhone",
            },
            { title: "Model name", value: "Apple AirPods (3rd generation)" },
            { title: "Special features", value: "Microphone Included" },
          ],
        },
      },
      {
        productID: "5ibzbu9",
        productName: "Sony WH-1000XM4",
        imageUrl:
          "https://m.media-amazon.com/images/I/7160xoKFtgL._AC_UL480_QL65_.jpg",
        productDescription:
          "Sony WH-1000XM4 Wireless Noise Cancelling Bluetooth Over-Ear Headphones With Speak to Chat Function and Mic For Phone Call, Black, Universal",
        rating: 4.5,
        price: 1076.0,
        currency: "AED",
        brand: "Sony",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/7160xoKFtgL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71aJDxS2chL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71j45pa+tSL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/81cNDE7K--L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71z+umZklqL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/81pxczpLKtL._AC_SL1500_.jpg",
          ],
          details: [
            { title: "Brand", value: "Sony" },
            {
              title: "Colour",
              value: "Black",
            },
            {
              title: "Connectivity technology",
              value: "Wireless",
            },
            { title: "Model name", value: "WH-1000XM4" },
            { title: "Form Factor", value: "Over Ear" },
          ],
        },
      },
      {
        productID: "diu581m",
        productName: "Apple EarPods",
        imageUrl:
          "https://m.media-amazon.com/images/I/41wYbyr3LLL._AC_UL480_QL65_.jpg",
        productDescription: "Apple EarPods with Lightning Connector Earphone",
        rating: 4.0,
        price: 74.0,
        currency: "AED",
        brand: "Apple",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/41wYbyr3LLL._AC_SL1144_.jpg",
            "https://m.media-amazon.com/images/I/41zg4DOTl2L._AC_SL1144_.jpg",
            "https://m.media-amazon.com/images/I/41hpli-aKoL._AC_SL1144_.jpg",
            "https://m.media-amazon.com/images/I/41VjW3LcESL._AC_SL1144_.jpg",
            "https://m.media-amazon.com/images/I/412yYCVrObL._AC_SL1144_.jpg",
            "https://m.media-amazon.com/images/I/41Mqt+x5mLL._AC_SL1144_.jpg",
          ],
          details: [
            { title: "Brand", value: "Apple" },
            {
              title: "Colour",
              value: "White",
            },
            {
              title: "Connectivity technology",
              value: "Wired",
            },
            { title: "Model name", value: "MMTN2ZM/A" },
            { title: "Form factor", value: "In Ear" },
          ],
        },
      },
      {
        productID: "ybz5mna",
        productName: "SoundPEATS Air 3",
        imageUrl:
          "https://m.media-amazon.com/images/I/61p6od98YQL._AC_UL480_QL65_.jpg",
        productDescription:
          "SoundPEATS Air3 Wireless Earbuds Mini Bluetooth V5.2 Earphones with Qualcomm QCC3040 and aptX-Adaptive, 4-Mic and CVC 8.0 Noise Cancellation, TrueWireless Mirroring Tech, in-Ear Detection, Game Mode",
        rating: 4.0,
        price: 151.0,
        currency: "AED",
        brand: "SoundPEATS",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/61Qn0RflvVL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61NfsMfUpeL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61WDTlRhE2L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71zfAPn240L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/7136B9BXcKL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/51BxSzmFHOL._AC_SL1500_.jpg",
          ],
          details: [
            { title: "Brand", value: "SoundPEATS" },
            {
              title: "Colour",
              value: "Black",
            },
            {
              title: "Connectivity technology",
              value: "Wireless",
            },
            { title: "Noise control", value: "Active Noise Cancellation" },
            { title: "Form factor", value: "In Ear" },
          ],
        },
      },
      {
        productID: "mcudvzu",
        productName: "Sony WF-1000XM4",
        imageUrl:
          "https://m.media-amazon.com/images/I/41yNMJgWAkS._AC_UL480_QL65_.jpg",
        productDescription:
          "Sony WF-1000XM4 Industry Leading Noise Cancelling Truly Wireless Earbuds Headphones, Wireless Charging, Google Voice Assistant, Alexa, Siri, Splash proof, Smart Listening And Mic For Phone Call, Black",
        rating: 4.0,
        price: 863.25,
        currency: "AED",
        brand: "Sony",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/41yNMJgWAkS._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/41Lg1Cnb1rS._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/419OTN+RzMS._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/31K+FL431xS._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/410tAjyiJRS._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/31dcGHevh9S._AC_SL1000_.jpg",
          ],
          details: [
            { title: "Brand", value: "Sony" },
            {
              title: "Colour",
              value: "Black",
            },
            {
              title: "Connectivity technology",
              value: "Wireless",
            },
            { title: "Model Name", value: "WF-1000XM4" },
            { title: "Form factor", value: "In Ear" },
          ],
        },
      },
      {
        productID: "sg1nkyy",
        productName: "SoundPEATS TrueAir 2",
        imageUrl:
          "https://m.media-amazon.com/images/I/61jDXJmW6JL._AC_UL480_QL65_.jpg",
        productDescription:
          "SOUNDPEATS TrueAir2 Wireless Earbuds with Qualcomm QCC3040 Bluetooth V5.2 headphones, 4 Mic and CVC 8.0 Noise Cancellation for clear calls, True Wireless Mirroring, Total 25 Hours,aptX Codec",
        rating: 4.0,
        price: 119.25,
        currency: "AED",
        brand: "SoundPEATS",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/61jDXJmW6JL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/81nxdgum7+L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/612H6QQshTL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71Qb8UNWFbL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61y-83EA4OL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71GKthvnC0L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61hgdM3WNNL._AC_SL1500_.jpg",
          ],
          details: [
            { title: "Brand", value: "SoundPEATS" },
            {
              title: "Colour",
              value: "Black",
            },
            {
              title: "Connectivity technology",
              value: "Wireless",
            },
            { title: "Noise Control", value: "None" },
            { title: "Form factor", value: "In Ear" },
          ],
        },
      },
      {
        productID: "nxn60at",
        productName: "Anker Soundcore Life P2",
        imageUrl:
          "https://m.media-amazon.com/images/I/51hsq3bombL._AC_UL480_QL65_.jpg",
        productDescription:
          "Anker Soundcore Life P2 Mini Bluetooth Earphones, 10mm Drivers with Big Bass Wireless Earbuds, Custom EQ, Bluetooth 5.2, 32H Playtime, USB-C for Fast Charging, Tiny Size for Commute, Work",
        rating: 4.5,
        price: 129.0,
        currency: "AED",
        brand: "Anker",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/51hsq3bombL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71yG19NdeUL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71dFiKhUklL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71PEZI42j0L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71oieebfahL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61+lMQIIZFL._AC_SL1500_.jpg",
          ],
          details: [
            { title: "Brand", value: "Soundcore" },
            {
              title: "Colour",
              value: "Black",
            },
            {
              title: "Connectivity technology",
              value: "Wireless",
            },
            { title: "Model Name", value: "Life P2 Mini" },
            { title: "Form factor", value: "In Ear" },
          ],
        },
      },
      {
        productID: "y6ehj8j",
        productName: "Xiaomi Mi True Wireless",
        imageUrl:
          "https://m.media-amazon.com/images/I/51Upw655zvL._AC_UL480_QL65_.jpg",
        productDescription:
          "Xiaomi Mi True Wireless Earbuds Basic 2, Black, 16.2 x 7.4 x 3.2 cm; 40 Grams",
        rating: 4.0,
        price: 55.35,
        currency: "AED",
        brand: "Xiaomi",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/51Upw655zvL._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/51gPTs2GbBL._AC_SL1477_.jpg",
            "https://m.media-amazon.com/images/I/5100Jsm9YCL._AC_SL1500_.jpg",
          ],
          details: [
            { title: "Brand", value: "Xiaomi" },
            {
              title: "Colour",
              value: "Black",
            },
            {
              title: "Connectivity technology",
              value: "Wireless",
            },
            { title: "Model Name", value: "Earbuds" },
            { title: "Form factor", value: "In Ear" },
          ],
        },
      },
      {
        productID: "325ep8n",
        productName: "JBL T110",
        imageUrl:
          "https://m.media-amazon.com/images/I/51sv1xBLGvL._AC_UL480_QL65_.jpg",
        productDescription:
          "JBL - T110 Wired Universal In-Ear Headphone, Black",
        rating: 4.0,
        price: 27.0,
        currency: "AED",
        brand: "JBL",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/51sv1xBLGvL._AC_SL1350_.jpg",
            "https://m.media-amazon.com/images/I/71lrk1MJn7L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/41OpkSOx3wL._AC_.jpg",
            "https://m.media-amazon.com/images/I/41Cy3BZsFcL._AC_.jpg",
          ],
          details: [
            { title: "Brand", value: "JBL" },
            {
              title: "Colour",
              value: "Black",
            },
            {
              title: "Connectivity technology",
              value: "Wired",
            },
            { title: "Model Name", value: "T110" },
            { title: "Form factor", value: "In Ear" },
          ],
        },
      },
      {
        productID: "5fupgck",
        productName: "Bose Headphones 700",
        imageUrl:
          "https://m.media-amazon.com/images/I/412wLL5PxtL._AC_UL480_QL65_.jpg",
        productDescription:
          "Bose Noise Cancelling Headphones 700 — Wireless, Bluetooth,Over Ear Headphones with Built-In Microphone for Clear Calls &amp; Voice Control, Black",
        rating: 4.5,
        price: 1305.0,
        currency: "AED",
        brand: "Bose",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/61UzY7vPUIL._AC_SL1200_.jpg",
            "https://m.media-amazon.com/images/I/51QydmrHL6L._AC_SL1200_.jpg",
            "https://m.media-amazon.com/images/I/61m41zN0f4L._AC_SL1200_.jpg",
            "https://m.media-amazon.com/images/I/61MtnIhvcML._AC_SL1200_.jpg",
            "https://m.media-amazon.com/images/I/61XS95-+aFL._AC_SL1200_.jpg",
            "https://m.media-amazon.com/images/I/71bkhXYsv9L._AC_SL1200_.jpg",
          ],
          details: [
            { title: "Brand", value: "Bose" },
            {
              title: "Colour",
              value: "Black",
            },
            {
              title: "Connectivity technology",
              value: "Wired",
            },
            { title: "Model Name", value: "794297-0100" },
            { title: "Form factor", value: "Over Ear" },
          ],
        },
      },
      {
        productID: "lyj5htg",
        productName: "JBL T750",
        imageUrl:
          "https://m.media-amazon.com/images/I/61drMUJ7VZL._AC_UL480_QL65_.jpg",
        productDescription:
          "JBL JBLT750BTNCBLK JBL Wireless Over Ear Headphones with active Noise Cancellation- Black - (Pack of1)",
        rating: 3.5,
        price: 262.9,
        currency: "AED",
        brand: "JBL",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/61drMUJ7VZL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/611zte1-OvL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61AaGcxANwL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71GZPV6xOAL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71DeXjP1QfL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61k+jB--G6L._AC_SL1500_.jpg",
          ],
          details: [
            { title: "Brand", value: "JBL" },
            {
              title: "Colour",
              value: "Black",
            },
            {
              title: "Connectivity technology",
              value: "Wired",
            },
            { title: "Model Name", value: "T750BTns" },
            { title: "Form factor", value: "Over Ear" },
          ],
        },
      },
      {
        productID: "5me6zc3",
        productName: "Beats Solo Pro",
        imageUrl:
          "https://m.media-amazon.com/images/I/61w+edOrp9L._AC_UL480_QL65_.jpg",
        productDescription:
          "Beats Solo Pro Wireless Noise Cancelling Headphones - Grey",
        rating: 4.5,
        price: 942.9,
        currency: "AED",
        brand: "Beats",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/61w+edOrp9L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61rZWebeCHL._AC_SL1500_.jpg",
          ],
          details: [
            { title: "Brand", value: "Beats" },
            {
              title: "Colour",
              value: "Grey",
            },
            {
              title: "Connectivity technology",
              value: "Wired",
            },
            { title: "Model Name", value: "MRJ82AE/A" },
            { title: "Form factor", value: "Over Ear" },
          ],
        },
      },
      {
        productID: "eguwz4q",
        productName: "Seinnheiser PXC 550-II",
        imageUrl:
          "https://m.media-amazon.com/images/I/71JHUS7ox1L._AC_UL480_FMwebp_QL65_.jpg",
        productDescription:
          "Sennheiser PXC 550-II Wireless – NoiseGard Adaptive Noise Cancelling, Bluetooth Headphone with Touch Sensitive Control and 30-Hour Battery Life",
        rating: 4.5,
        price: 799.0,
        currency: "AED",
        brand: "Sennheiser",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/71JHUS7ox1L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61tcBG0nLuL._AC_SL1200_.jpg",
          ],
          details: [
            { title: "Brand", value: "Sennheiser" },
            {
              title: "Colour",
              value: "Black",
            },
            {
              title: "Connectivity technology",
              value: "Wired",
            },
            { title: "Model Name", value: "PX550-II" },
            { title: "Form factor", value: "Over Ear" },
          ],
        },
      },
      {
        productID: "jrgfiox",
        productName: "Seinnheiser M3AEBTXL",
        imageUrl:
          "https://m.media-amazon.com/images/I/71CkHZLa6WL._AC_UL480_FMwebp_QL65_.jpg",
        productDescription:
          "Sennheiser M3AEBTXL Momentum Wireless Noise Cancelling Headphones With Auto On/Off, Smart Pause Functionality And Smart Control App - Black",
        rating: 4.5,
        price: 969.0,
        currency: "AED",
        brand: "Sennheiser",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/71CkHZLa6WL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/41eJh2utKkL._AC_SL1500_.jpg",
          ],
          details: [
            { title: "Brand", value: "Sennheiser" },
            {
              title: "Colour",
              value: "Black",
            },
            {
              title: "Connectivity technology",
              value: "Wired",
            },
            { title: "Model Name", value: "M3AEBTXL" },
            { title: "Form factor", value: "Over Ear" },
          ],
        },
      },
    ],
  },
  // TVS
  {
    category: "Tvs",
    data: [
      {
        productID: "2cmjyk4",
        productName: "Samsung AU8100 Crystal UHD 4K",
        imageUrl:
          "https://m.media-amazon.com/images/I/61JbtXgTM2L._AC_UL480_QL65_.jpg",
        productDescription:
          "Samsung 55 Inches AU8100 Crystal UHD 4K Flat Smart TV (2021), Black, UA55AU8100UXZN",
        rating: 3.5,
        price: 2089.0,
        currency: "AED",
        brand: "Samsung",
        screenSize: "55 Inch",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/71J99loOfwL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71ufYW9hPAL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71JEUwYJ7iL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/611cRdLziYL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61ohgfAcAiL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61hEiXN3w4L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61CRRvLhQzL._AC_SL1500_.jpg",
          ],
          details: [
            { title: "Screen Size", value: "55 Inches" },
            {
              title: "Supported Internet Services",
              value: "Netflix, Hulu, YouTube, Browser",
            },
            {
              title: "Connectivity technology",
              value: "Bluetooth, Wi-Fi, USB, Ethernet, HDMI",
            },
            { title: "Brand", value: "SAMSUNG" },
            { title: "Resolution", value: "4K" },
            { title: "Model name", value: "Crystal UHD 4K" },
            { title: "Special features", value: "Smart" },
          ],
        },
      },
      {
        productID: "4cx4goy",
        productName: "Hisense 55A6GE UHD ",
        imageUrl:
          "https://m.media-amazon.com/images/I/71tS3EY6cXL._AC_UL480_QL65_.jpg",
        productDescription:
          "Hisense 55 inch 55A6GE UHD SMART TV（2021） HDR 10/HLG Wifi(2.4GHZ) Bluetooth5.0 DLNA 'HDCP 2.2 H.265 decoder",
        rating: 4.0,
        price: 1545.0,
        currency: "AED",
        brand: "Hisense",
        screenSize: "55 Inch",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/71tS3EY6cXL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71GjP6wh8fS._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/716vpxsQbuS._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71wExTHDB7L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61QRN4TgxQL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71mil+iqcHS._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61PZ7-t20RL._AC_SL1500_.jpg",
          ],
          details: [
            { title: "Screen Size", value: "55 Inches" },
            {
              title: "Supported Internet Services",
              value: "Netflix, YouTube, Free view",
            },
            {
              title: "Connectivity technology",
              value: "Bluetooth, USB, Wireless",
            },
            { title: "Brand", value: "Hisense" },
            { title: "Resolution", value: "4K" },
            { title: "Model name", value: "55A6GE" },
            { title: "Special features", value: "HDR10, DLNA, Smart" },
          ],
        },
      },
      {
        productID: "83vwxh7",
        productName: "Samsung AU8000 Crystal UHD 4K",
        imageUrl:
          "https://m.media-amazon.com/images/I/61JbtXgTM2L._AC_UL480_QL65_.jpg",
        productDescription:
          "SAMSUNG 60 Inches AU8000 Crystal UHD 4K Flat Smart TV 2021, Black, UA60AU8000UXZN",
        rating: 4.0,
        price: 2499.0,
        currency: "AED",
        brand: "Samsung",
        screenSize: "60 Inch",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/71J99loOfwL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/611cRdLziYL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61hEiXN3w4L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61CRRvLhQzL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71xHQAmhOpL._AC_SL1200_.jpg",
            "https://m.media-amazon.com/images/I/61SZYGnTlzL._AC_SL1200_.jpg",
            "https://m.media-amazon.com/images/I/61PKaWIONFL._AC_SL1200_.jpg",
          ],
          details: [
            { title: "Screen Size", value: "60 Inches" },
            {
              title: "Supported Internet Services",
              value: "Netflix, Hulu, YouTube, Browser",
            },
            {
              title: "Connectivity technology",
              value: "Bluetooth, Wi-Fi, USB, Ethernet, HDMI",
            },
            { title: "Brand", value: "SAMSUNG" },
            { title: "Resolution", value: "4K" },
            { title: "Model name", value: "Crystal UHD 4K" },
            { title: "Special features", value: "Smart" },
          ],
        },
      },
      {
        productID: "b4u7giy",
        productName: "Samsung Q70A QLED 4K",
        imageUrl:
          "https://m.media-amazon.com/images/I/81rK-tWN0EL._AC_UL480_QL65_.jpg",
        productDescription:
          "Samsung 65 Inches Q70A QLED 4K Smart TV (2021), Silver, QA65Q70AAUXZN",
        rating: 3.5,
        price: 4353.0,
        currency: "AED",
        brand: "Samsung",
        screenSize: "65 Inch",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/81rK-tWN0EL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/712BFrzvXxL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61dORzHo+BL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71Ik0wjR-CL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61+phOQ7ULL._AC_SL1200_.jpg",
            "https://m.media-amazon.com/images/I/61MXr9gq9GL._AC_SL1200_.jpg",
            "https://m.media-amazon.com/images/I/610aLMLkSSL._AC_SL1200_.jpg",
          ],
          details: [
            { title: "Screen Size", value: "65 Inches" },
            {
              title: "Supported Internet Services",
              value: "Netflix, Hulu, YouTube, Browser",
            },
            {
              title: "Connectivity technology",
              value: "Bluetooth, Wi-Fi, USB, Ethernet, HDMI",
            },
            { title: "Brand", value: "SAMSUNG" },
            { title: "Resolution", value: "4K" },
            { title: "Model name", value: "Neo QLED 4K" },
            { title: "Special features", value: "Smart" },
          ],
        },
      },
      {
        productID: "ag33ct6",
        productName: "Samsung AU7000 Crystal UHD 4K",
        imageUrl:
          "https://m.media-amazon.com/images/I/61IUE6Ju3vL._AC_UL480_QL65_.jpg",
        productDescription:
          "SAMSUNG 58 Inches AU7000 Crystal UHD 4K Flat Smart TV 2021, Black, UA58AU7000UXZN",
        rating: 4.5,
        price: 2099.0,
        currency: "AED",
        brand: "Samsung",
        screenSize: "58 Inch",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/61IUE6Ju3vL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61uMl1NDu0S._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/610gjUUY-tL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/6199CObQ2vL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71txffssWlL._AC_SL1200_.jpg",
            "https://m.media-amazon.com/images/I/61SZYGnTlzL._AC_SL1200_.jpg",
            "https://m.media-amazon.com/images/I/61hE9GAI40L._AC_SL1200_.jpg",
          ],
          details: [
            { title: "Screen Size", value: "58 Inches" },
            {
              title: "Supported Internet Services",
              value: "Netflix, Hulu, YouTube, Browser",
            },
            {
              title: "Connectivity technology",
              value: "Bluetooth, Wi-Fi, USB, Ethernet, HDMI",
            },
            { title: "Brand", value: "SAMSUNG" },
            { title: "Resolution", value: "4K" },
            { title: "Model name", value: "Crystal UHD 4K" },
            { title: "Special features", value: "Smart" },
          ],
        },
      },
      {
        productID: "z0v5z77",
        productName: "LG OLED B1 Series",
        imageUrl:
          "https://m.media-amazon.com/images/I/51opUODtLmS._AC_UL480_QL65_.jpg",
        productDescription:
          "LG OLED TV 55 Inch B1 Series Cinema Screen Design 4K Cinema HDR webOS Smart with ThinQ AI Pixel Dimming",
        rating: 5.0,
        price: 3734.0,
        currency: "AED",
        brand: "LG",
        screenSize: "55 Inch",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/61H-4qb5thL._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/71wGlAkbJxL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/715dRqAwk9L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71QQNGVv3iL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/31Qike-kAfL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/41Ty3FP3R7L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/41EJNV2dq4L._AC_SL1500_.jpg",
          ],
          details: [
            { title: "Screen Size", value: "55 Inches" },

            {
              title: "Connectivity technology",
              value: "HDMI",
            },
            { title: "Brand", value: "LG" },
            { title: "Resolution", value: "4K" },
            { title: "Model name", value: "Smart Tv" },
            { title: "Special features", value: "Smart" },
          ],
        },
      },
      {
        productID: "nivmc72",
        productName: "Sony Bravia X80J",
        imageUrl:
          "https://m.media-amazon.com/images/I/71sIJMpGuDS._AC_UL480_QL65_.jpg",
        productDescription:
          "Sony 65 Inch BRAVIA X80J Smart Google TV, 4K Ultra HD With High Dynamic Range HDR, KD-65X80J, 2021 Model",
        rating: 4.5,
        price: 2987.0,
        currency: "AED",
        brand: "Sony",
        screenSize: "65 Inch",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/71sIJMpGuDS._AC_SL1200_.jpg",
            "https://m.media-amazon.com/images/I/811vH++WYES._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/71IML17RlSL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61j+tB1qj1S._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/61OaWatCIeS._AC_SL1200_.jpg",
            "https://m.media-amazon.com/images/I/81cQC1WKQHS._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/41kh8cl9M3L._AC_SL1200_.jpg",
          ],
          details: [
            { title: "Screen Size", value: "65 Inches" },
            {
              title: "Supported Internet Services",
              value: "Netflix, Google Tv, YouTube",
            },
            {
              title: "Connectivity technology",
              value: "Bluetooth, Wi-Fi, USB, Ethernet, HDMI",
            },
            { title: "Brand", value: "Sony" },
            { title: "Resolution", value: "4K" },
            { title: "Display Technology", value: "4K UHD LCD" },
            {
              title: "Special features",
              value: "Smart Google TV, 4K UHD, Dolby Vision",
            },
          ],
        },
      },
      {
        productID: "macvc7c",
        productName: "Samsung 40T5300 FHD",
        imageUrl:
          "https://m.media-amazon.com/images/I/51jt+E8besL._AC_UL480_FMwebp_QL65_.jpg",
        productDescription: "SAMSUNG 40 Inch FHD Smart TV 40T5300, UA40T5300AU",
        rating: 4.0,
        price: 1105.0,
        currency: "AED",
        brand: "Samsung",
        screenSize: "40 Inch",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/51jt+E8besL._AC_.jpg",
          ],
          details: [
            { title: "Screen Size", value: "40 Inches" },
            {
              title: "Supported Internet Services",
              value: "Netflix, Amazon Instant Video, YouTube",
            },
            {
              title: "Connectivity technology",
              value: " Wi-Fi",
            },
            { title: "Brand", value: "SAMSUNG" },
            { title: "Resolution", value: "1080p" },
            { title: "Display Technology", value: "LED" },
            { title: "Special features", value: "Smart" },
          ],
        },
      },
      {
        productID: "00k970w",
        productName: "Hisense FHD",
        imageUrl:
          "https://m.media-amazon.com/images/I/51W6yZxMlbL._AC_UL480_FMwebp_QL65_.jpg",
        productDescription:
          "Hisense 43 Inch TV FHD Smart TV, With Dolby Vision HDR, DTS Virtual X, YouTube, Netflix, Freeview Play &amp; Alexa Built-in, Bluetooth &amp; WiFi Black Model 43A4GTUK -1 Year Full Warranty.",
        rating: 4.0,
        price: 987.0,
        currency: "AED",
        brand: "Hisense",
        screenSize: "43 Inch",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/51W6yZxMlbL._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/71Oz0q9OHML._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71+zESXHtKL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/819ADGId6yL._AC_SL1500_.jpg",
          ],
          details: [
            { title: "Screen Size", value: "43 Inches" },
            {
              title: "Supported Internet Services",
              value: "Netflix, Amazon Instant Video, YouTube, Free View",
            },
            {
              title: "Connectivity technology",
              value: " Wi-Fi",
            },
            { title: "Brand", value: "Hisense" },
            { title: "Resolution", value: "4K" },
            { title: "Model Name", value: "43A4GTUK" },
            { title: "Display Technology", value: "FHD" },
            { title: "Special features", value: "Dolby Vision, Smart" },
          ],
        },
      },
      {
        productID: "21pe76u",
        productName: "Sony Bravia XR X90J",
        imageUrl:
          "https://m.media-amazon.com/images/I/71YKL-RtchS._AC_UL480_FMwebp_QL65_.jpg",
        productDescription:
          "Sony 65 Inch BRAVIA XR X90J Full Array LED Smart Google TV, 4K Ultra HD High Dynamic Range HDR, XR-65X90J, 2021 Model",
        rating: 4.0,
        price: 4612.0,
        currency: "AED",
        brand: "Sony",
        screenSize: "65 Inch",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/71XhYmcZPZS._AC_SL1200_.jpg",
            "https://m.media-amazon.com/images/I/71rghfibVXS._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/71r+4i3uT3L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61xE4dQHHJS._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/81NGNBntPcS._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61EqXAc1cQS._AC_SL1200_.jpg",
            "https://m.media-amazon.com/images/I/81hNFxZ+aCS._AC_SL1500_.jpg",
          ],
          details: [
            { title: "Screen Size", value: "75 Inches" },
            {
              title: "Supported Internet Services",
              value: "Netflix, Google TV, YouTube",
            },
            {
              title: "Connectivity technology",
              value: " Bluetooth, Wi-Fi, USB, Ethernet, HDMI",
            },
            { title: "Brand", value: "Sony" },
            { title: "Resolution", value: "4K" },
            { title: "Model Name", value: "BRAVIA X90J" },
            { title: "Display Technology", value: "4K Ultra HD" },
            {
              title: "Special features",
              value:
                "XR COGNITIVE PROCESSOR, DOLBY VISION, IMAX ENHANCED, NETFLIX CALIBRATED MODE, HDMI 2.1, ACOUSTIC MULTI-AUDIO, APPLE AIRPLAY, XR MOTION CLARITY™",
            },
          ],
        },
      },
    ],
  },
  // SPEAKERS
  {
    category: "Speakers",
    data: [
      {
        productID: "hspazqx",
        productName: "Echo Dot 4th Gen",
        imageUrl:
          "https://m.media-amazon.com/images/I/616VCBUJdnL._AC_UL480_QL65_.jpg",
        productDescription:
          "Echo Dot (4th generation) | Smart speaker with Alexa (Arabic or English) | Charcoal",
        rating: 4.0,
        price: 229.0,
        currency: "AED",
        brand: "Echo Dot",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/616oAFh1szL._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/616VCBUJdnL._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/61hYbiPPgaL._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/61t-tFhh9HL._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/61Wvzy6OYnL._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/61WOoooHGbL._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/61MrGZJGAeL._AC_SL1000_.jpg",
          ],
          details: [
            { title: "Brand", value: "Echo Dot" },
            { title: "Colour", value: "Charcoal" },
          ],
        },
      },
      {
        productID: "qtr1zvt",
        productName: "Echo Dot 3rd Gen",
        imageUrl:
          "https://m.media-amazon.com/images/I/61Rr8uxmREL._AC_UL480_QL65_.jpg",
        productDescription:
          "Echo Dot (3rd generation) | Smart speaker with Alexa (Arabic or English) | Charcoal",
        rating: 3.5,
        price: 189.0,
        currency: "AED",
        brand: "Echo Dot",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/61MrSaQQDpL._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/61Rr8uxmREL._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/61RGy8pbSDL._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/6112lX7wP8L._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/61Ud0w+-+iL._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/61uHxUukMML._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/61ZH+Zb5bBL._AC_SL1000_.jpg",
          ],
          details: [
            { title: "Brand", value: "Echo Dot" },
            { title: "Colour", value: "Charcoal" },
          ],
        },
      },
      {
        productID: "fklpilw",
        productName: "JBL Flip 5",
        imageUrl:
          "https://m.media-amazon.com/images/I/81xUOh2WLVL._AC_UL480_QL65_.jpg",
        productDescription:
          "JBL Flip 5 Portable Bluetooth Wireless Speaker, Black",
        rating: 4.5,
        price: 299.0,
        currency: "AED",
        brand: "JBL",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/81xUOh2WLVL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/81NBhYHSOIL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/817yVJ9gtyL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71yYhw9ID-L._AC_SL1500_.jpg",
          ],
          details: [
            { title: "Connectivity Technology", value: "Bluetooth" },
            { title: "Brand", value: "JBL" },
            { title: "Model Name", value: "FLIP5BLK" },
            {
              title: "Recommended uses for product",
              value:
                "Outing, Partying, Playing, Outdoor, Swimming, Gathering, Indoor, Hiking",
            },
            {
              title: "Special features",
              value:
                "Durable Fabric Material, Booming Bass, 12 Hours of Playtime, IPX7 Waterproof Design, JBL PartyBoost Compatible, Rugged Rubber Housing",
            },
          ],
        },
      },
      {
        productID: "buvdbz8",
        productName: "JBL GO 2",
        imageUrl:
          "https://m.media-amazon.com/images/I/71bsb-XWmaS._AC_UL480_QL65_.jpg",
        productDescription:
          "JBL GO 2 Portable Bluetooth Speaker, Black - JBLGO2BLK",
        rating: 4.5,
        price: 95.0,
        currency: "AED",
        brand: "JBL",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/71bsb-XWmaS._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/71j2gEVCQQL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/710EzhDzVYL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/81p9jbpecEL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/616EKvXH1jL._AC_SL1500_.jpg",
          ],
          details: [
            { title: "Connectivity Technology", value: "Bluetooth" },
            { title: "Brand", value: "JBL" },
            { title: "Model Name", value: "JBLGO2BLK" },
            {
              title: "Recommended uses for product",
              value:
                "Outing, Partying, Playing, Outdoor, Swimming, Gathering, Indoor, Hiking",
            },
          ],
        },
      },
      {
        productID: "76a45wy",
        productName: "Sony SRS-XB13",
        imageUrl:
          "https://m.media-amazon.com/images/I/81-lt27AAYL._AC_UL480_QL65_.jpg",
        productDescription:
          "Sony SRS-XB13 - Compact & Portable Waterproof Wireless Bluetooth® speaker with EXTRA BASS™ - Black",
        rating: 4.5,
        price: 178.0,
        currency: "AED",
        brand: "Sony",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/81-lt27AAYL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/81Aqn3rX18S._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/81w2RY0CDDS._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71n91k3YazS._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/81Qp53UOEwL._AC_SL1500_.jpg",
          ],
          details: [
            { title: "Connectivity Technology", value: "Bluetooth" },
            { title: "Brand", value: "Sony" },
            { title: "Model Name", value: "SRS-XB13" },
            {
              title: "Recommended uses for product",
              value: "For Music Players",
            },
          ],
        },
      },
      {
        productID: "gflvdq9",
        productName: "Sony 120W Soundbar",
        imageUrl:
          "https://m.media-amazon.com/images/I/61EsdpUZdYL._AC_UL480_QL65_.jpg",
        productDescription:
          "Sony 2.0ch 120W Single Soundbar With Bluetooth, Bass Reflex Speaker S Force Surround, Ht S100 Black, HT-S100",
        rating: 4.0,
        price: 279.0,
        currency: "AED",
        brand: "Sony",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/61EsdpUZdYL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71ZEVpXXonL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/81-o1tzqy-L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71Dvn-1EkBL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71MtgT-VVyL._AC_SL1500_.jpg",
          ],
          details: [
            { title: "Connectivity Technology", value: "Wired/Wireless" },
            { title: "Brand", value: "Sony" },
            { title: "Speaker type", value: "Soundbar" },
            { title: "Model Name", value: "Ht-S100" },
            {
              title: "Audio output mode",
              value: "Surround",
            },
          ],
        },
      },
      {
        productID: "bh73x2z",
        productName: "JBL 4K Ultra HD Soundbar",
        imageUrl:
          "https://m.media-amazon.com/images/I/31k5iFpCHRL._AC_UL480_QL65_.jpg",
        productDescription:
          "JBL 5.1 Channel 4K Ultra HD Soundbar with Wireless Subwoofer BAR 5.1, Black, 5.1 4K True Wireless",
        rating: 4.5,
        price: 1979.0,
        currency: "AED",
        brand: "JBL",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/31k5iFpCHRL._AC_.jpg",
          ],
          details: [
            { title: "Connectivity Technology", value: "Wired/Wireless" },
            { title: "Brand", value: "JBL" },
            { title: "Speaker type", value: "Soundbar" },
            { title: "Model Name", value: "5.1 4K True Wireless" },
            {
              title: "Recommended uses for product",
              value:
                "For Surround Sound Systems, For Televisions, For Smartphones or Tablets, For Music Players, For DVD Players",
            },
          ],
        },
      },
      {
        productID: "1uesjg2",
        productName: "Edifier Studio Speaker R1280Db",
        imageUrl:
          "https://m.media-amazon.com/images/I/913SI3UTzTL._AC_UL480_FMwebp_QL65_.jpg",
        productDescription: "Edifier Studio Bookshelf Speaker Black R1280Db Bk",
        rating: 4.5,
        price: 471.0,
        currency: "AED",
        brand: "Edifier",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/913SI3UTzTL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/81wWs9djLFL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/81fJxUOZLCL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/617bOpYPKNL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/81rZW7YM0SL._AC_SL1500_.jpg",
          ],
          details: [
            { title: "Connectivity Technology", value: "Bluetooth" },
            { title: "Brand", value: "Edifier" },
            { title: "Speaker type", value: "Computer" },
            { title: "Model Name", value: "R1280DB BK" },
            {
              title: "Recommended uses for product",
              value: "For computers",
            },
          ],
        },
      },
      {
        productID: "x3rap47",
        productName: "Edifier Studio speaker S100oMKii",
        imageUrl:
          "https://m.media-amazon.com/images/I/618nqC0xiML._AC_UL480_FMwebp_QL65_.jpg",
        productDescription:
          "Edifier Studio Bookshelf Speaker Brown S1000Mkii Bn",
        rating: 4.5,
        price: 1271.0,
        currency: "AED",
        brand: "Edifier",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/618nqC0xiML._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71qSagK1kpL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/510rAjZitlL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71ppuycdYNL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61JwHrzgM+L._AC_SL1500_.jpg",
          ],
          details: [
            { title: "Connectivity Technology", value: "Bluetooth" },
            { title: "Brand", value: "Edifier" },
            { title: "Speaker type", value: "Bookshelf" },
            { title: "Model Name", value: "S1000MKII" },
            {
              title: "Colour",
              value: "Brown",
            },
          ],
        },
      },
    ],
  },
  // HEALTH & PERSONAL CARE
  {
    category: "Health & Personal Care",
    data: [
      {
        productID: "apbdpqk",
        productName: "Harpic Toilet Speaker",
        imageUrl:
          "https://m.media-amazon.com/images/I/71ZVt6SkX6L._AC_UL480_QL65_.jpg",
        productDescription:
          "Harpic Toilet Cleaner Liquid Limescale Remover Original, 750ml 2+1",
        rating: 4.5,
        price: 15.62,
        currency: "AED",
        brand: "Harpic",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/71ZVt6SkX6L._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/71oC2bEE1UL._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/61yKOMe9kBL._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/61Xgm3F8SzL._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/61FIJmFOZJL._AC_SL1000_.jpg",
          ],
          details: [
            { title: "Item form", value: "Liquid" },
            { title: "Brand", value: "Harpic" },
            { title: "Surface recommendationr", value: "Tiolet" },
            { title: "Scent", value: "LOriginal" },
            { title: "Item volume", value: "750ml x 3" },
          ],
        },
      },
      {
        productID: "3idf54m",
        productName: "Fairy Lemon Dishwashing soap ",
        imageUrl:
          "https://m.media-amazon.com/images/I/71IXc-Q7XUL._AC_UL480_QL65_.jpg",
        productDescription: "Fairy Lemon Dishwashing Liquid Soap, 2 x 750 ml",
        rating: 4.5,
        price: 13.95,
        currency: "AED",
        brand: "Fairy",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/71IXc-Q7XUL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/81NXwB7U59L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/81GobL1spGL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/81V-05n0M4L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/81RZGdwjSAL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/81MjdZTMpKL._AC_SL1500_.jpg",
          ],
          details: [
            { title: "Item form", value: "Liquid" },
            { title: "Brand", value: "Fairy" },
            { title: "Surface recommendationr", value: "Sink" },
            { title: "Scent", value: "Lemon" },
            { title: "Item volume", value: "750ml" },
          ],
        },
      },
      {
        productID: "x9geg8o",
        productName: "Fine Fluffy Facial Tissues",
        imageUrl:
          "https://m.media-amazon.com/images/I/71zvhpPDlFL._AC_UL480_QL65_.jpg",
        productDescription:
          "Fine Fluffy Facial Tissues, Nylon Pack of 10 x 200 Sheets x 2 Ply",
        rating: 4.5,
        price: 17.65,
        currency: "AED",
        brand: "Fine",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/71zvhpPDlFL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/81rmOBk-G3L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71rPZwFJW0L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71MBd7D5gOL._AC_SL1500_.jpg",
          ],
          details: [
            { title: "Brand", value: "Fine" },
            { title: "Colour", value: "White" },
            { title: "Material", value: "Nylon" },
            { title: "Item weight", value: "140g" },
          ],
        },
      },
      {
        productID: "2hpdbxk",
        productName: "Jif Cream Clean",
        imageUrl:
          "https://m.media-amazon.com/images/I/61pVab2aZzS._AC_UL480_QL65_.jpg",
        productDescription: "Jif Cream Cleaner Lemon, 500ml",
        rating: 3.0,
        price: 8.4,
        currency: "AED",
        brand: "Jif",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/71X9uVky8+L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71Rke+3MUhL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/31+8bIKt7rL._AC_.jpg",
          ],
          details: [
            { title: "Brand", value: "Jif" },
            { title: "Format", value: "Cream" },
            { title: "Item Volume", value: "500ml" },
            { title: "Item weight", value: "2kg" },
          ],
        },
      },
      {
        productID: "2ixvicj",
        productName: "AEMOVER Face Mask",
        imageUrl:
          "https://m.media-amazon.com/images/I/719VfZ7rLQL._AC_UL480_QL65_.jpg",
        productDescription:
          "AEMOVER Disposаble Face Mask Certified Protectịon Adult's 4-Ply Filtеr Face Mask - Individually Packaged (50PCS black, ABC, Regular",
        rating: 2.0,
        price: 32.95,
        currency: "AED",
        brand: "AEMOVER",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/719VfZ7rLQL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61-adBfHKGL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61TIZ2wSgWL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61YjpipyeBL._AC_SL1500_.jpg",
          ],
          details: [
            { title: "Brand", value: "AEMOVER" },
            { title: "Size", value: "Regular" },
            { title: "Colour", value: "Black" },
            { title: "Style", value: "Regular" },
            { title: "Material", value: "Cotton" },
          ],
        },
      },
      {
        productID: "nnkgzkx",
        productName: "Kleenex Kitchen Towel",
        imageUrl:
          "https://m.media-amazon.com/images/I/81uuGENeLiL._AC_UL480_QL65_.jpg",
        productDescription:
          "Kleenex Kitchen Towel - Pack of 4 Rolls, 90 Sheets x 2 Ply",
        rating: 4.5,
        price: 15.2,
        currency: "AED",
        brand: "Kleenex",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/81uuGENeLiL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/81LDkK+M77L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/81zLVk+GejL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71aIYvV4aSL._AC_SL1500_.jpg",
          ],
          details: [
            { title: "Brand", value: "Kleenex" },
            { title: "Size", value: "90 sheets" },
            { title: "Colour", value: "White" },
            { title: "Item Weight", value: "960g" },
          ],
        },
      },
      {
        productID: "qchwbow",
        productName: "Downy Fabric Softener",
        imageUrl:
          "https://m.media-amazon.com/images/I/71XOlqLIpwL._AC_UL480_QL65_.jpg",
        productDescription:
          "Downy Fabric Softener, Valley Dew Scent, Fabric and Wrinkle Protector, Long-Lasting Freshness, Special Offer, Pack of 3 Liters",
        rating: 4.5,
        price: 15.0,
        currency: "AED",
        brand: "Downy",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/71XOlqLIpwL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/81laC0MWONL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/819xBkEAwjL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/712s5TRaLVL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71DEAUsx7BL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71G1fbI7baL._AC_SL1500_.jpg",
          ],
          details: [
            { title: "Brand", value: "Downy" },
            { title: "Format", value: "Softener" },
            { title: "Units", value: "3 litres" },
          ],
        },
      },
      {
        productID: "vyrw876",
        productName: "Persil Power Gel",
        imageUrl:
          "https://m.media-amazon.com/images/I/81ZNU9oWF6L._AC_UL480_QL65_.jpg",
        productDescription:
          "Persil Power Gel Liquid Laundry Detergent - 3 Litres + 1 Litre",
        rating: 4.5,
        price: 42.5,
        currency: "AED",
        brand: "Persil",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/81ZNU9oWF6L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/813DtZ+8LoL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71srDjECs6L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/81vKkbWoe8L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/819iXETNCHL._AC_SL1500_.jpg",
          ],
          details: [
            { title: "Brand", value: "Persil" },
            { title: "Format", value: "Gel" },
            { title: "Units", value: "4 litres" },
            { title: "Item weight", value: "560g" },
          ],
        },
      },
      {
        productID: "q4gvgm6",
        productName: "Colgate Max Fresh",
        imageUrl:
          "https://m.media-amazon.com/images/I/817GRuNdD7L._AC_UL480_QL65_.jpg",
        productDescription:
          "Colgate Max Fresh Cool Mint Gel Toothpaste - 4 x 75ml",
        rating: 4.5,
        price: 23.17,
        currency: "AED",
        brand: "Colgate",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/817GRuNdD7L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/616F0MFPCXL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71mXTmt0VPL._AC_SL1500_.jpg",
          ],
          details: [
            { title: "Brand", value: "Colgate" },
            { title: "Type", value: "Toothpaste" },
            { title: "Item weight", value: "30g" },
            { title: "Format", value: "Gel" },
            { title: "Type", value: "Toothpaste" },
          ],
        },
      },
      {
        productID: "jzowqkx",
        productName: "Sensodyne ToothPaste",
        imageUrl:
          "https://m.media-amazon.com/images/I/71ALUDSeRbL._AC_UL480_QL65_.jpg",
        productDescription:
          "Sensodyne Toothpaste for Sensitive Teeth, Extra Fresh Flavour, 75 ml, Value Pack of 2",
        rating: 4.5,
        price: 36.5,
        currency: "AED",
        brand: "Sensodyne",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/71ALUDSeRbL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71BiZFvgZvL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61q6C7N6rrL._AC_SL1500_.jpg",
          ],
          details: [
            { title: "Brand", value: "Sensodyne" },
            { title: "Type", value: "Toothpaste" },
          ],
        },
      },
      {
        productID: "c6lyuab",
        productName: "Colgate Zigzag Toothbrush",
        imageUrl:
          "https://m.media-amazon.com/images/I/813YWpTzByL._AC_UL480_QL65_.jpg",
        productDescription:
          "Colgate Zigzag Toothbrush Medium, 3 Pack Value Pack, Assorted Color",
        rating: 4.0,
        price: 12.2,
        currency: "AED",
        brand: "Colgate",
        productInfo: {
          infoImages: [
            "https://m.media-amazon.com/images/I/813YWpTzByL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/618uMQV9ieL._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/616xP3OaNJS._AC_SL1000_.jpg",
          ],
          details: [
            { title: "Colour", value: "Assorted Color" },
            { title: "Brand", value: "Colgate" },
            { title: "Item weight", value: "0.48g" },
            { title: "Item firmness description", value: "Medium" },
          ],
        },
      },
    ],
  },
];

// export const shopData2 = {
//   // FASHION
//   Fashion: [
//     {
//       productID: ID(),
//       prodyctName: "Wildhorn Wallet",
//       imageUrl:
//         "https://images-eu.ssl-images-amazon.com/images/I/816R47XrV1L._AC_UL450_SR450,320_.jpg",
//       productDescription:
//         "WILDHORN Genuine Leather Hand-Crafted Wallet For Men, Bifold Leather Wallet, Model-WH1173",
//       rating: 4.0,
//       price: 26.42,
//       currency: "AED",
//       brand: "Wildhorn",
//       gender: "Men",
//     },
//     {
//       productID: ID(),
//       prodyctName: "Tommy Hilfiger Wallet",
//       imageUrl:
//         "https://images-eu.ssl-images-amazon.com/images/I/81vjOpKpMzS._AC_UL450_SR450,320_.jpg",
//       productDescription:
//         "Tommy Hilfiger Men's Thin Sleek Casual Bifold Wallet with 6 Credit Card Pockets and Removable Id Window",
//       rating: 4.5,
//       price: 86.24,
//       currency: "AED",
//       brand: "Tommy Hilfiger",
//       gender: "Men",
//     },
//     {
//       productID: ID(),
//       prodyctName: "Wildhorn Wallet",
//       imageUrl:
//         "https://images-eu.ssl-images-amazon.com/images/I/71THAJcBgDL._AC_UL450_SR450,320_.jpg",
//       productDescription:
//         "WILDHORN Genuine Leather Hand-Crafted Wallet For Men",
//       rating: 4.0,
//       price: 100.0,
//       currency: "AED",
//       brand: "Wildhorn",
//       gender: "Men",
//     },
//     {
//       productID: ID(),
//       prodyctName: "Swarovski Necklace",
//       imageUrl:
//         "https://images-eu.ssl-images-amazon.com/images/I/71lUei6ancL._AC_UL450_SR450,320_.jpg",
//       productDescription:
//         "Swarovski Elements 925 Sterling Silver Pendant Necklace for Women Gift JRosee Jewelry",
//       rating: 4.5,
//       price: 119.0,
//       currency: "AED",
//       brand: "Swarovski",
//       gender: "Women",
//     },
//     {
//       productID: ID(),
//       prodyctName: "Margoun Apple Watch Band",
//       imageUrl:
//         "https://images-eu.ssl-images-amazon.com/images/I/5174NFvC+WL._AC_UL450_SR450,320_.jpg",
//       productDescription:
//         "MARGOUN Milanese Loop Strap for Apple Watch Band 41mm 30mm 38mm, Stainless Steel Alloy Replacement Watchband.",
//       rating: 3.5,
//       price: 69.0,
//       currency: "AED",
//       brand: "Margoun",
//       gender: "Unisex",
//     },
//     {
//       productID: ID(),
//       prodyctName: "Einskey Slouchy Beanie",
//       imageUrl:
//         "https://images-eu.ssl-images-amazon.com/images/I/71DFHWUOJwL._AC_UL450_SR450,320_.jpg",
//       productDescription:
//         "EINSKEY Slouchy Beanie for Men/Women 2-Pack Baggy Skull Cap Summer Winter Knit Hat",
//       rating: 4.0,
//       price: 135.73,
//       currency: "AED",
//       brand: "Einskey",
//       gender: "Unisex",
//     },
//     {
//       productID: ID(),
//       prodyctName: "Jack & Jones Polo-Shirt",
//       imageUrl:
//         "https://images-eu.ssl-images-amazon.com/images/I/41Ft-R32uCL._AC_UL450_SR450,320_.jpg",
//       productDescription: "Jack & Jones Men's Black Polo-Shirt",
//       rating: 4.0,
//       price: 63.55,
//       currency: "AED",
//       brand: "Jack & Jones",
//       gender: "Men",
//     },
//     {
//       productID: ID(),
//       prodyctName: "Skechers Backpack",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/910CwIXDRXL._AC_UL480_FMwebp_QL65_.jpg",
//       productDescription: "Skechers Unisex-adult BACKPACK BACKPACK",
//       rating: 3.0,
//       price: 63.5,
//       currency: "AED",
//       brand: "Skechers",
//       gender: "Unisex",
//     },
//     {
//       productID: ID(),
//       prodyctName: "Skechers Messenger Bag",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/81Py0mSD+DL._AC_UL480_FMwebp_QL65_.jpg",
//       productDescription:
//         "Skechers Messenger Bag For Unisex-Adult Black - S359",
//       rating: 4.0,
//       price: 92.54,
//       currency: "AED",
//       brand: "Skechers",
//       gender: "Unisex",
//     },
//     {
//       productID: ID(),
//       prodyctName: "Skechers Messenger Bag",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/A1jT2nGrByL._AC_UL480_FMwebp_QL65_.jpg",
//       productDescription: "Skechers S363-38 Unisex Messenger Bag, Grey",
//       rating: 4.0,
//       price: 73.64,
//       currency: "AED",
//       brand: "Skechers",
//       gender: "Unisex",
//     },
//     {
//       productID: ID(),
//       prodyctName: "Skechers Backpack",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/81KwPQjkkuL._AC_UL480_FMwebp_QL65_.jpg",
//       productDescription: "Skechers 2 Compartments Backpack Black",
//       rating: 3.5,
//       price: 98.82,
//       currency: "AED",
//       brand: "Skechers",
//       gender: "Unisex",
//     },
//     {
//       productID: ID(),
//       prodyctName: "Swarovski Necklace",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/71GR7C-d-pL._AC_UL480_FMwebp_QL65_.jpg",
//       productDescription:
//         "SWAROVSKI Women's Symbolic Jewelry Collection, Rhodium Finish, Multi-Colored Crystals",
//       rating: 5.0,
//       price: 495.82,
//       currency: "AED",
//       brand: "Swarovski",
//       gender: "Women",
//     },
//   ],

//   // LAPTOPS
//   Laptops: [
//     {
//       productID: ID(),
//       prodyctName: "HP 15 Laptop",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/81skV7BufjL._AC_UL480_QL65_.jpg",
//       productDescription:
//         "HP 15 Laptop, 11th Gen Intel Core i5-1135G7 CPU, 8 GB RAM, 256 GB SSD Storage, 15.6” Full HD IPS Display, Windows 10 Home, HP Fast Charge, Lightweight Design (15-dy2021nr, 2020)",
//       rating: 4.5,
//       price: 2093.0,
//       currency: "AED",
//       brand: "HP",
//       CPU: "Intel Core i5",
//       memory: "8 GB",
//       productInfo: {
//         infoImages: [
//           "https://m.media-amazon.com/images/I/81skV7BufjL._AC_SL1500_.jpg",
//           "https://m.media-amazon.com/images/I/81YWu8ohvbL._AC_SL1500_.jpg",
//           "https://m.media-amazon.com/images/I/81xWpvGSfNL._AC_SL1500_.jpg",
//           "https://m.media-amazon.com/images/I/81ikM81zLlS._AC_SL1500_.jpg",
//           "https://m.media-amazon.com/images/I/81YTj+qtptL._AC_SL1500_.jpg",
//           "https://m.media-amazon.com/images/I/81HXtXwgrcL._AC_SL1500_.jpg",
//           "https://m.media-amazon.com/images/I/81ibie1y5oL._AC_SL1500_.jpg",
//           "https://m.media-amazon.com/images/I/814CETeoZkL._AC_SL1500_.jpg",
//         ],
//         series: "HP 15 Laptop",
//         screenSize: "15.6 Inches",
//         OS: "Windows 10 Home",
//         CPU: "Intel",
//         color: "Natural Silver",
//         connectivity: "Bluetooth, USB,Wi-Fi, HDMI",
//       },
//     },
//     {
//       productID: ID(),
//       prodyctName: "ASUS ZenBook 13",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/71krHTRvglL._AC_UL480_FMwebp_QL65_.jpg",
//       productDescription:
//         "ASUS ZenBook 13 OLED UX325EA-OLED001T (Pine Grey)- 11th Gen Intel Core i7 CPU,16GB RAM LPDDR4X, Intel Iris Xe Graphics,1TB SSD, 13.3-inch OLED, Windows 10, Backlit-Eng-Arb-KB",
//       rating: 4.5,
//       price: 4479.0,
//       currency: "AED",
//       brand: "ASUS",
//       CPU: "Intel Core i7",
//       memory: "16 GB",
//     },
//     {
//       productID: ID(),
//       prodyctName: "Lenovo Thinkbook 15",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/41dx9Mp9TXL._AC_UL480_FMwebp_QL65_.jpg",
//       productDescription:
//         "2021 Latest Lenovo Thinkbook 15 Gen 2 11th Gen Core I7-1165G7 Upto 4.7Ghz 15.6 FHD 220NIts Anti Glare Display 8GB 1TB HDD Bluetooth Webcam with ThinkShutter English Keyboard WIN10 PRO Mineral Grey",
//       rating: 4.0,
//       price: 2590.0,
//       currency: "AED",
//       brand: "Lenovo",
//       CPU: "Intel Core i7",
//       memory: "8 GB",
//     },
//     {
//       productID: ID(),
//       prodyctName: "Lenovo IdeaPad 3",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/61cjgSurDdS._AC_UL480_FMwebp_QL65_.jpg",
//       productDescription:
//         "Lenovo IdeaPad 3 15 Inch Laptop intel core i3 1005G1 8GB Memory 256GB SSD",
//       rating: 4.5,
//       price: 1633.0,
//       currency: "AED",
//       brand: "Lenovo",
//       CPU: "Intel Core i3",
//       memory: "8 GB",
//     },
//     {
//       productID: ID(),
//       prodyctName: "Acer Aspire 5",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/41ErRwcJ0OS._AC_UL480_FMwebp_QL65_.jpg",
//       productDescription:
//         "2021 Acer Aspire 5 Slim Laptop, A515-56-36UT, 15.6 Full HD Display,11th Gen Intel Core i3-1115G4 CPU (Beat i5-8265U), WiFi 6, Amazon Alexa, Windows 10 Home (S Mode) (8GB|256GB SSD)",
//       rating: 1.0,
//       price: 1922.0,
//       currency: "AED",
//       brand: "Acer",
//       CPU: "Intel Core i3",
//       memory: "8 GB",
//     },
//     {
//       productID: ID(),
//       prodyctName: "HP Envy x360",
//       imageUrl:
//         "https://images-na.ssl-images-amazon.com/images/I/61s9j%2BxvKxL._AC_UL200_SR200,200_.jpg",
//       productDescription:
//         "HP ENVY x360 Convertible Laptop i7-1165G7, 16GB RAM, 1TB SSD",
//       rating: 4.5,
//       price: 3887.0,
//       currency: "AED",
//       brand: "HP",
//       CPU: "Intel Core i7",
//       memory: "16 GB",
//     },
//     {
//       productID: ID(),
//       prodyctName: "Dell Latitude E6430",
//       imageUrl:
//         "https://images-na.ssl-images-amazon.com/images/I/61HSrzaLbcS._AC_UL200_SR200,200_.jpg",
//       productDescription:
//         "Dell Latitude E6430 Laptop WEBCAM - HDMI - Intel Core i5 2.6ghz - 8GB DDR3-128GB SSD…",
//       rating: 4.0,
//       price: 527.0,
//       currency: "AED",
//       brand: "Dell",
//       CPU: "Intel Core i5",
//       memory: "8 GB",
//     },
//     {
//       productID: ID(),
//       prodyctName: "Acer Nitro 5 Gaming",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/71dT+SyIpWL._AC_UL480_FMwebp_QL65_.jpg",
//       productDescription:
//         "Acer Nitro5 Gaming NB AMD Ryzen5-4600H/8GB DDR4/1TB HDD+256GB SSD/4GB Nvidia GTX1650/15.6 FHD IPS/Win10-WiFi-6+Gaming Headset+Mouse Pad- Arabic&English Keyboard-One year warranty by Acer call 8004711",
//       rating: 3.5,
//       price: 3199.0,
//       currency: "AED",
//       brand: "ASUS",
//       CPU: "AMD Ryzen5",
//       memory: "8 GB",
//     },
//     {
//       productID: ID(),
//       prodyctName: "ASUS ROG Strix G15",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UL480_QL65_.jpg",
//       productDescription:
//         "ASUS ROG Strix G15 (2021) Gaming Laptop, 15.6” 300Hz IPS Type FHD Display, NVIDIA GeForce RTX 3070, AMD Ryzen R9-5900HX, 32GB DDR4, 1TB PCIe SSD, Per-Key RGB Keyboard, Windows 10, G513QR-AS98",
//       rating: 4.5,
//       price: 6889.0,
//       currency: "AED",
//       brand: "ASUS",
//       CPU: "AMD Ryzen9",
//       memory: "32 GB",
//     },
//   ],

//   // TABLETS
//   Tablets: [
//     {
//       productID: ID(),
//       prodyctName: "Apple Ipad 2021",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/61AMxJG2wcL._AC_UL480_QL65_.jpg",
//       productDescription:
//         "New 2021 Apple iPad (10.2-inch, Wi-Fi, 64GB) - Space Grey (9th Generation)",
//       rating: 4.0,
//       price: 1399.0,
//       currency: "AED",
//       brand: "Apple",
//       OS: "IOS",
//     },
//     {
//       productID: ID(),
//       prodyctName: "Apple Ipad 2021",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/415c6dx5XrL._AC_UL480_QL65_.jpg",
//       productDescription:
//         "New 2021 Apple iPad (10.2-inch, Wi-Fi, 64GB) - silver (9th Generation)",
//       rating: 4.0,
//       price: 1399.0,
//       currency: "AED",
//       brand: "Apple",
//       OS: "IOS",
//     },
//     {
//       productID: ID(),
//       prodyctName: "Aple Ipad 2021",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/61AMxJG2wcL._AC_UL480_QL65_.jpg",
//       productDescription:
//         "New 2021 Apple iPad (10.2-inch, Wi-Fi, 256GB) - Space Grey (9th Generation)",
//       rating: 4.0,
//       price: 1999.0,
//       currency: "AED",
//       brand: "Apple",
//       OS: "IOS",
//     },
//     {
//       productID: ID(),
//       prodyctName: "Apple Ipad Air 2020",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/71AJC-PE5IS._AC_UL480_QL65_.jpg",
//       productDescription:
//         "2020 Apple iPad Air (10.9-inch, Wi-Fi, 64GB) - Sky Blue (4th Generation)",
//       rating: 4.5,
//       price: 2179.0,
//       currency: "AED",
//       brand: "Apple",
//       OS: "IOS",
//     },
//     {
//       productID: ID(),
//       prodyctName: "Lenovo Tab M8",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/513tmuYpH9L._AC_UL480_FMwebp_QL65_.jpg",
//       productDescription:
//         "Lenovo Tab M8 HD 2ND GEN (TB-8505F), 8 inch Tablet, MediaTek Helio A22 Processor,…",
//       rating: 4.0,
//       price: 399.0,
//       currency: "AED",
//       brand: "Lenovo",
//       OS: "Android",
//     },
//     {
//       productID: ID(),
//       prodyctName: "Lenovo Tab M10",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/71MDku1iKgL._AC_UL480_FMwebp_QL65_.jpg",
//       productDescription:
//         "Lenovo Tab M10 (TB-X505F), 10.1 inch Tablet, Qualcomm Snapdragon 429 Processor, 2GB…",
//       rating: 3.5,
//       price: 456.95,
//       currency: "AED",
//       brand: "Lenovo",
//       OS: "Android",
//     },
//     {
//       productID: ID(),
//       prodyctName: "Apple Ipad Pro 2021",
//       imageUrl:
//         "https://images-na.ssl-images-amazon.com/images/I/81Y5WuARqpS._AC_UL200_SR200,200_.jpg",
//       productDescription:
//         "2021 Apple iPad Pro (11-inch, Wi-Fi, 128GB) - Space Grey (3rd Generation)",
//       rating: 4.5,
//       price: 3956.95,
//       currency: "AED",
//       brand: "Apple",
//       OS: "IOS",
//     },
//     {
//       productID: ID(),
//       prodyctName: "Apple Ipad Mini 2021",
//       imageUrl:
//         "https://images-na.ssl-images-amazon.com/images/I/71hM0QvGshL._AC_UL200_SR200,200_.jpg",
//       productDescription:
//         "New 2021 Apple iPad mini (8.3-inch, Wi-Fi + Cellular, 256GB) - Space Grey (6th Generation)",
//       rating: 4.5,
//       price: 3329.95,
//       currency: "AED",
//       brand: "Apple",
//       OS: "IOS",
//     },
//     {
//       productID: ID(),
//       prodyctName: "Microsoft Surface GO 2",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/610F-2TJaCL._AC_UL480_FMwebp_QL65_.jpg",
//       productDescription:
//         "Microsoft Surface GO 2 10 Inch Tablet PC Silver Intel, Windows 10 Home in S Mode, 2020 Model, Device Only, 1901, Core M3 Wifi, 8GB, 128GB SSD",
//       rating: 4.5,
//       price: 2815.95,
//       currency: "AED",
//       brand: "Microsoft",
//       OS: "Windows",
//     },
//     {
//       productID: ID(),
//       prodyctName: "Microsoft Surface Go",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/31+t7B681+L._AC_UL480_FMwebp_QL65_.jpg",
//       productDescription: "Microsoft Surface Go 10 Tablet",
//       rating: 4.5,
//       price: 1649,
//       currency: "AED",
//       brand: "Microsoft",
//       OS: "Windows",
//     },
//     {
//       productID: ID(),
//       prodyctName: "Samsung Galaxy Book",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/71GXjvnIlcL._AC_UL480_FMwebp_QL65_.jpg",
//       productDescription:
//         "Samsung Galaxy Book 12 Tablet - Intel Core i5-7200U, 12 Inch,128GB, 4GB RAM, 4G LTE, Windows 10 Home, Silver with En Keyboard Black and S Pen",
//       rating: 4.0,
//       price: 2499,
//       currency: "AED",
//       brand: "Samsung",
//       OS: "Windows",
//     },
//     {
//       productID: ID(),
//       prodyctName: "Samsung Galaxy Tab A7",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/81AG6QYrM+S._AC_UL480_QL65_.jpg",
//       productDescription:
//         "Samsung Galaxy Tab A7 Lite 8.7 Inch LTE Android Tablet 64 GB Grey (UK Version) - Amazon Exclusive",
//       rating: 4.0,
//       price: 799.99,
//       currency: "AED",
//       brand: "Samsung",
//       OS: "Android",
//     },
//   ],

//   // MOBILE PHONES
//   MobilePhones: [
//     {
//       productID: ID(),
//       productName: "iPhone 13 Pro Max",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/61i8Vjb17SL._AC_UL480_QL65_.jpg",
//       productDescription:
//         "New Apple iPhone 13 Pro Max with FaceTime (256GB) - Sierra Blue",
//       rating: 4.5,
//       price: 5099.75,
//       currency: "AED",
//       brand: "Apple",
//       storage: "256 GB",
//     },
//     {
//       productID: ID(),
//       productName: "iPhone 12 Pro Max",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/71MHTD3uL4L._AC_UL480_QL65_.jpg",
//       productDescription:
//         "Apple iPhone 12 Pro Max with FaceTime (256GB) - Pacific Blue",
//       rating: 4.5,
//       price: 4399.13,
//       currency: "AED",
//       brand: "Apple",
//       storage: "256 GB",
//     },
//     {
//       productID: ID(),
//       productName: "Samsung Galaxy Note20",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/51jomkh3CFS._AC_UL480_QL65_.jpg",
//       productDescription:
//         "Samsung Galaxy Note20 Ultra Dual SIM 256 GB 12GB RAM 5G (UAE Version) - Mystic Black - 1 year local brand warranty",
//       rating: 4.0,
//       price: 3099.0,
//       currency: "AED",
//       brand: "Samsung",
//       storage: "256 GB",
//     },
//     {
//       productID: ID(),
//       productName: "Samsung Galaxy A52s",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/71lvzz864+L._AC_UL480_QL65_.jpg",
//       productDescription:
//         "Samsung Galaxy A52s 5G Dual SIM Smartphone, 256GB Storage and 8GB RAM (UAE Version), Awesome Black",
//       rating: 4.0,
//       price: 1379.0,
//       currency: "AED",
//       brand: "Samsung",
//       storage: "256 GB",
//     },
//     {
//       productID: ID(),
//       productName: "iPhone 13 Pro",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/61sDyXAepuL._AC_UL480_QL65_.jpg",
//       productDescription:
//         "New Apple iPhone 13 Pro with Facetime (256GB) - Gold",
//       rating: 4.0,
//       price: 4619.0,
//       currency: "AED",
//       brand: "Apple",
//       storage: "256 GB",
//     },
//     {
//       productID: ID(),
//       productName: "iPhone 13",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/71xb2xkN5qL._AC_UL480_QL65_.jpg",
//       productDescription: "New Apple iPhone 13 with FaceTime (128GB) - Blue",
//       rating: 4.0,
//       price: 3200.86,
//       currency: "AED",
//       brand: "Apple",
//       storage: "128 GB",
//     },
//     {
//       productID: ID(),
//       productName: "Samsung Galaxy S21",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/61qcH1P2XjS._AC_UL480_QL65_.jpg",
//       productDescription:
//         "SAMSUNG Galaxy S21 Ultra 5G Pro Grade Quad Camera, 100x Space Zoom, 8K Video Dual SIM Smartphone, S Pen Compatible All Day Battery UAE Version Phantom Black 256GB",
//       rating: 4.0,
//       price: 3898.25,
//       currency: "AED",
//       brand: "Samsung",
//       storage: "256 GB",
//     },
//     {
//       productID: ID(),
//       productName: "Xiaomi Redmi Note10",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/51JXERYpvHL._AC_UL480_QL65_.jpg",
//       productDescription:
//         "Xiaomi Redmi Note 10S Dual SIM Amoled Display Onyx Gray 6GB RAM 128GB 4G LTE",
//       rating: 4.0,
//       price: 788.0,
//       currency: "AED",
//       brand: "Xiaomi",
//       storage: "256 GB",
//     },
//     {
//       productID: ID(),
//       productName: "Samsung Galaxy M12",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/81+Zecmq92S._AC_UL480_QL65_.jpg",
//       productDescription:
//         "Samsung Galaxy M12 LTE Dual SIM Smartphone, 64GB Storage and 4GB RAM (UAE Version), Blue",
//       rating: 4.0,
//       price: 548.0,
//       currency: "AED",
//       brand: "Samsung",
//       storage: "64 GB",
//     },
//     {
//       productID: ID(),
//       productName: "Samsung Galaxy A12",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/81aP7ztJqhL._AC_UL480_QL65_.jpg",
//       productDescription:
//         "SAMSUNG Galaxy A12 LTE Dual SIM Smartphone, 128GB Storage and 4GB RAM UAE Version, Black",
//       rating: 3.5,
//       price: 559.34,
//       currency: "AED",
//       brand: "Samsung",
//       storage: "128 GB",
//     },
//     {
//       productID: ID(),
//       productName: "OPPO Reno6",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/81yGsmHeOYL._AC_UL480_FMwebp_QL65_.jpg",
//       productDescription:
//         "OPPO Reno6 5G Dual SIM Smartphone 128GB 8GB RAM, 65W Super VOOC Flash Charge, 90Hz Display, 5G Mobile Phone Unlocked (UAE Version) Aurora + OPPO True Wireless + Mobile Stand",
//       rating: 3.0,
//       price: 2099.75,
//       currency: "AED",
//       brand: "OPPO",
//       storage: "128 GB",
//     },
//     {
//       productID: ID(),
//       productName: "Google Pixel 6",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/71SsBCLDt9L._AC_UL480_FMwebp_QL65_.jpg",
//       productDescription:
//         "Google Pixel 6 - Unlocked Android 5G Smartphone with 50 Megapixel Camera and Wide-Angle Lens - 128 GB - Stormy Black",
//       rating: 3.0,
//       price: 2683.0,
//       currency: "AED",
//       brand: "Google",
//       storage: "128 GB",
//     },
//   ],

//   // GAMING
//   Gaming: [
//     {
//       productID: ID(),
//       productName: "Oculus Quest 2",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/615YaAiA-ML._AC_UL480_QL65_.jpg",
//       productDescription: "Oculus Quest 2 - 128 GB - Virtual Reality Headset",
//       rating: 4.0,
//       price: 1297.0,
//       currency: "AED",
//       brand: "Oculus",
//     },
//     {
//       productID: ID(),
//       productName: "Nintendo Switch",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/61k5IJVYTUL._AC_UL480_QL65_.jpg",
//       productDescription:
//         "Nintendo Switch (OLED Model) - Neon Red & Neon Blue Joy Con (UAE Version)",
//       rating: 4.5,
//       price: 1518.5,
//       currency: "AED",
//       brand: "Nintendo",
//     },
//     {
//       productID: ID(),
//       productName: "PS4 FIFA 2022",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/81fprhh1OCL._AC_UL480_QL65_.jpg",
//       productDescription: "FIFA 2022 (PS4) - Int'l version",
//       rating: 4.0,
//       price: 154.77,
//       currency: "AED",
//       brand: "PS4",
//     },
//     {
//       productID: ID(),
//       productName: "Xbox Series X Console",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/515tLyCgdXL._AC_UL480_QL65_.jpg",
//       productDescription:
//         "Microsoft Xbox Series X Gaming Console, 1TB, Black (UAE Version)",
//       rating: 4.5,
//       price: 2437.0,
//       currency: "AED",
//       brand: "Xbox",
//     },
//     {
//       productID: ID(),
//       productName: "Playstation 5 Console",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/51NsAufNveL._AC_UL480_QL65_.jpg",
//       productDescription: "PlayStation 5 Console (UAE Version)",
//       rating: 4.5,
//       price: 3225.0,
//       currency: "AED",
//       brand: "PS5",
//     },
//     {
//       productID: ID(),
//       productName: "PlayStation 5 Wireless Controller",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/61CdkDnFw6S._AC_UL480_QL65_.jpg",
//       productDescription:
//         "PlayStation 5 DualSense Wireless Controller (UAE Version) - Midnight Black",
//       rating: 4.5,
//       price: 228.0,
//       currency: "AED",
//       brand: "PS5",
//     },
//     {
//       productID: ID(),
//       productName: "PlayStation 5 Wireless Headset",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/6185q-YAwPL._AC_UL480_QL65_.jpg",
//       productDescription:
//         "PlayStation 5 PULSE 3D Wireless Headset (UAE Version)",
//       rating: 4.5,
//       price: 272.85,
//       currency: "AED",
//       brand: "PS5",
//     },
//     {
//       productID: ID(),
//       productName: "PlayStation 5 Disc Console",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/416ASNUOdOL._AC_UL480_QL65_.jpg",
//       productDescription:
//         "PlayStation 5 Disc Console Standard Edition with Extra DualSense Controller White and PS5 Spiderman Miles Morales Game",
//       rating: 4.5,
//       price: 3613.0,
//       currency: "AED",
//       brand: "PS5",
//     },
//     {
//       productID: ID(),
//       productName: "Sony PlayStation VR Bundle",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/31q23-L3y6L._AC_UY327_FMwebp_QL65_.jpg",
//       productDescription:
//         "Sony PlayStation Virtual Reality Bundle - VR Headset (Version 2 - CUH-ZVR2), VR Camera, 2 Move Motion Controllers, VR Worlds Game",
//       rating: 4.0,
//       price: 2105.0,
//       currency: "AED",
//       brand: "Sony",
//     },
//   ],

//   // HEADPHONES
//   Headphones: [
//     {
//       productID: ID(),
//       productName: "Apple AirPods",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/615ekapl+pL._AC_UL480_QL65_.jpg",
//       productDescription: "New Apple AirPods (3rd generation)",
//       rating: 4.5,
//       price: 642.89,
//       currency: "AED",
//       brand: "Apple",
//     },
//     {
//       productID: ID(),
//       productName: "Apple Airpods Pro",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/71bhWgQK-cL._AC_UL480_QL65_.jpg",
//       productDescription: "Apple AirPods Pro with MagSafe charging case (2021)",
//       rating: 4.5,
//       price: 719.0,
//       currency: "AED",
//       brand: "Apple",
//     },
//     {
//       productID: ID(),
//       productName: "Sony WH-1000XM4",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/7160xoKFtgL._AC_UL480_QL65_.jpg",
//       productDescription:
//         "Sony WH-1000XM4 Wireless Noise Cancelling Bluetooth Over-Ear Headphones With Speak to Chat Function and Mic For Phone Call, Black, Universal",
//       rating: 4.5,
//       price: 1076.0,
//       currency: "AED",
//       brand: "Sony",
//     },
//     {
//       productID: ID(),
//       productName: "Apple EarPods",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/41wYbyr3LLL._AC_UL480_QL65_.jpg",
//       productDescription: "Apple EarPods with Lightning Connector Earphone",
//       rating: 4.0,
//       price: 74.0,
//       currency: "AED",
//       brand: "Apple",
//     },
//     {
//       productID: ID(),
//       productName: "SoundPEATS Air 3",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/61p6od98YQL._AC_UL480_QL65_.jpg",
//       productDescription:
//         "SoundPEATS Air3 Wireless Earbuds Mini Bluetooth V5.2 Earphones with Qualcomm QCC3040 and aptX-Adaptive, 4-Mic and CVC 8.0 Noise Cancellation, TrueWireless Mirroring Tech, in-Ear Detection, Game Mode",
//       rating: 4.0,
//       price: 151.0,
//       currency: "AED",
//       brand: "SoundPEATS",
//     },
//     {
//       productID: ID(),
//       productName: "Sony WF-1000XM4",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/41yNMJgWAkS._AC_UL480_QL65_.jpg",
//       productDescription:
//         "Sony WF-1000XM4 Industry Leading Noise Cancelling Truly Wireless Earbuds Headphones, Wireless Charging, Google Voice Assistant, Alexa, Siri, Splash proof, Smart Listening And Mic For Phone Call, Black",
//       rating: 4.0,
//       price: 863.25,
//       currency: "AED",
//       brand: "Sony",
//     },
//     {
//       productID: ID(),
//       productName: "SoundPEATS TrueAir 2",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/61jDXJmW6JL._AC_UL480_QL65_.jpg",
//       productDescription:
//         "SOUNDPEATS TrueAir2 Wireless Earbuds with Qualcomm QCC3040 Bluetooth V5.2 headphones, 4 Mic and CVC 8.0 Noise Cancellation for clear calls, True Wireless Mirroring, Total 25 Hours,aptX Codec",
//       rating: 4.0,
//       price: 119.25,
//       currency: "AED",
//       brand: "SoundPEATS",
//     },
//     {
//       productID: ID(),
//       productName: "Anker Soundcore Life P2",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/51hsq3bombL._AC_UL480_QL65_.jpg",
//       productDescription:
//         "Anker Soundcore Life P2 Mini Bluetooth Earphones, 10mm Drivers with Big Bass Wireless Earbuds, Custom EQ, Bluetooth 5.2, 32H Playtime, USB-C for Fast Charging, Tiny Size for Commute, Work",
//       rating: 4.5,
//       price: 129.0,
//       currency: "AED",
//       brand: "Anker",
//     },
//     {
//       productID: ID(),
//       productName: "Xiaomi Mi True Wireless",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/51Upw655zvL._AC_UL480_QL65_.jpg",
//       productDescription:
//         "Xiaomi Mi True Wireless Earbuds Basic 2, Black, 16.2 x 7.4 x 3.2 cm; 40 Grams",
//       rating: 4.0,
//       price: 55.35,
//       currency: "AED",
//       brand: "Xiaomi",
//     },
//     {
//       productID: ID(),
//       productName: "JBL T110",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/51sv1xBLGvL._AC_UL480_QL65_.jpg",
//       productDescription: "JBL - T110 Wired Universal In-Ear Headphone, Black",
//       rating: 4.0,
//       price: 27.0,
//       currency: "AED",
//       brand: "JBL",
//     },
//     {
//       productID: ID(),
//       productName: "Bose Headphones 700",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/412wLL5PxtL._AC_UL480_QL65_.jpg",
//       productDescription:
//         "Bose Noise Cancelling Headphones 700 — Wireless, Bluetooth,Over Ear Headphones with Built-In Microphone for Clear Calls &amp; Voice Control, Black",
//       rating: 4.5,
//       price: 1305.0,
//       currency: "AED",
//       brand: "Bose",
//     },
//     {
//       productID: ID(),
//       productName: "JBL T750",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/61drMUJ7VZL._AC_UL480_QL65_.jpg",
//       productDescription:
//         "JBL JBLT750BTNCBLK JBL Wireless Over Ear Headphones with active Noise Cancellation- Black - (Pack of1)",
//       rating: 3.5,
//       price: 262.9,
//       currency: "AED",
//       brand: "JBL",
//     },
//     {
//       productID: ID(),
//       productName: "Beats Solo Pro",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/61w+edOrp9L._AC_UL480_QL65_.jpg",
//       productDescription:
//         "Beats Solo Pro Wireless Noise Cancelling Headphones - Grey",
//       rating: 4.5,
//       price: 942.9,
//       currency: "AED",
//       brand: "Beats",
//     },
//     {
//       productID: ID(),
//       productName: "Seinnheiser PXC 550-II",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/71JHUS7ox1L._AC_UL480_FMwebp_QL65_.jpg",
//       productDescription:
//         "Sennheiser PXC 550-II Wireless – NoiseGard Adaptive Noise Cancelling, Bluetooth Headphone with Touch Sensitive Control and 30-Hour Battery Life",
//       rating: 4.5,
//       price: 799.0,
//       currency: "AED",
//       brand: "Sennheiser",
//     },
//     {
//       productID: ID(),
//       productName: "Seinnheiser M3AEBTXL",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/71CkHZLa6WL._AC_UL480_FMwebp_QL65_.jpg",
//       productDescription:
//         "Sennheiser M3AEBTXL Momentum Wireless Noise Cancelling Headphones With Auto On/Off, Smart Pause Functionality And Smart Control App - Black",
//       rating: 4.5,
//       price: 969.0,
//       currency: "AED",
//       brand: "Sennheiser",
//     },
//   ],

//   // TVS
//   Tvs: [
//     {
//       productID: ID(),
//       productName: "Samsung AU8100 Crystal UHD 4K",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/61JbtXgTM2L._AC_UL480_QL65_.jpg",
//       productDescription:
//         "Samsung 55 Inches AU8100 Crystal UHD 4K Flat Smart TV (2021), Black, UA55AU8100UXZN",
//       rating: 3.5,
//       price: 2089.0,
//       currency: "AED",
//       brand: "Samsung",
//       screenSize: "55 Inch",
//     },
//     {
//       productID: ID(),
//       productName: "Hisense 55A6GE UHD ",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/71tS3EY6cXL._AC_UL480_QL65_.jpg",
//       productDescription:
//         "Hisense 55 inch 55A6GE UHD SMART TV（2021） HDR 10/HLG Wifi(2.4GHZ) Bluetooth5.0 DLNA 'HDCP 2.2 H.265 decoder",
//       rating: 4.0,
//       price: 1545.0,
//       currency: "AED",
//       brand: "Hisense",
//       screenSize: "55 Inch",
//     },
//     {
//       productID: ID(),
//       productName: "Samsung AU8000 Crystal UHD 4K",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/61JbtXgTM2L._AC_UL480_QL65_.jpg",
//       productDescription:
//         "SAMSUNG 60 Inches AU8000 Crystal UHD 4K Flat Smart TV 2021, Black, UA60AU8000UXZN",
//       rating: 4.0,
//       price: 2499.0,
//       currency: "AED",
//       brand: "Samsung",
//       screenSize: "60 Inch",
//     },
//     {
//       productID: ID(),
//       productName: "Samsung Q70A QLED 4K",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/81rK-tWN0EL._AC_UL480_QL65_.jpg",
//       productDescription:
//         "Samsung 65 Inches Q70A QLED 4K Smart TV (2021), Silver, QA65Q70AAUXZN",
//       rating: 3.5,
//       price: 4353.0,
//       currency: "AED",
//       brand: "Samsung",
//       screenSize: "65 Inch",
//     },
//     {
//       productID: ID(),
//       productName: "Samsung AU7000 Crystal UHD 4K",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/61IUE6Ju3vL._AC_UL480_QL65_.jpg",
//       productDescription:
//         "SAMSUNG 58 Inches AU7000 Crystal UHD 4K Flat Smart TV 2021, Black, UA58AU7000UXZN",
//       rating: 4.5,
//       price: 2099.0,
//       currency: "AED",
//       brand: "Samsung",
//       screenSize: "58 Inch",
//     },
//     {
//       productID: ID(),
//       productName: "LG OLED B1 Series",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/51opUODtLmS._AC_UL480_QL65_.jpg",
//       productDescription:
//         "LG OLED TV 55 Inch B1 Series Cinema Screen Design 4K Cinema HDR webOS Smart with ThinQ AI Pixel Dimming",
//       rating: 5.0,
//       price: 3734.0,
//       currency: "AED",
//       brand: "LG",
//       screenSize: "55 Inch",
//     },
//     {
//       productID: ID(),
//       productName: "Sony Bravia X80J",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/71sIJMpGuDS._AC_UL480_QL65_.jpg",
//       productDescription:
//         "Sony 65 Inch BRAVIA X80J Smart Google TV, 4K Ultra HD With High Dynamic Range HDR, KD-65X80J, 2021 Model",
//       rating: 4.5,
//       price: 2987.0,
//       currency: "AED",
//       brand: "Sony",
//       screenSize: "65 Inch",
//     },
//     {
//       productID: ID(),
//       productName: "Samsung 40T5300 FHD",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/51jt+E8besL._AC_UL480_FMwebp_QL65_.jpg",
//       productDescription: "SAMSUNG 40 Inch FHD Smart TV 40T5300, UA40T5300AU",
//       rating: 4.0,
//       price: 1105.0,
//       currency: "AED",
//       brand: "Samsung",
//       screenSize: "40 Inch",
//     },
//     {
//       productID: ID(),
//       productName: "Hisense FHD",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/51W6yZxMlbL._AC_UL480_FMwebp_QL65_.jpg",
//       productDescription:
//         "Hisense 43 Inch TV FHD Smart TV, With Dolby Vision HDR, DTS Virtual X, YouTube, Netflix, Freeview Play &amp; Alexa Built-in, Bluetooth &amp; WiFi Black Model 43A4GTUK -1 Year Full Warranty.",
//       rating: 4.0,
//       price: 1283.0,
//       currency: "AED",
//       brand: "Hisense",
//       screenSize: "43 Inch",
//     },
//     {
//       productID: ID(),
//       productName: "Sony Bravia XR X90J",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/71YKL-RtchS._AC_UL480_FMwebp_QL65_.jpg",
//       productDescription:
//         "Sony 65 Inch BRAVIA XR X90J Full Array LED Smart Google TV, 4K Ultra HD High Dynamic Range HDR, XR-65X90J, 2021 Model",
//       rating: 4.0,
//       price: 4612.0,
//       currency: "AED",
//       brand: "Sony",
//       screenSize: "65 Inch",
//     },
//   ],

//   // SPEAKERS
//   Speakers: [
//     {
//       productID: ID(),
//       productName: "Echo Dot 4th Gen",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/616VCBUJdnL._AC_UL480_QL65_.jpg",
//       productDescription:
//         "Echo Dot (4th generation) | Smart speaker with Alexa (Arabic or English) | Charcoal",
//       rating: 4.0,
//       price: 229.0,
//       currency: "AED",
//       brand: "Echo Dot",
//     },
//     {
//       productID: ID(),
//       productName: "Echo Dot 3rd Gen",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/61Rr8uxmREL._AC_UL480_QL65_.jpg",
//       productDescription:
//         "Echo Dot (3rd generation) | Smart speaker with Alexa (Arabic or English) | Charcoal",
//       rating: 3.5,
//       price: 189.0,
//       currency: "AED",
//       brand: "Echo Dot",
//     },
//     {
//       productID: ID(),
//       productName: "JBL Flip 5",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/81xUOh2WLVL._AC_UL480_QL65_.jpg",
//       productDescription:
//         "JBL Flip 5 Portable Bluetooth Wireless Speaker, Black",
//       rating: 4.5,
//       price: 299.0,
//       currency: "AED",
//       brand: "JBL",
//     },
//     {
//       productID: ID(),
//       productName: "JBL GO 2",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/71bsb-XWmaS._AC_UL480_QL65_.jpg",
//       productDescription:
//         "JBL GO 2 Portable Bluetooth Speaker, Black - JBLGO2BLK",
//       rating: 4.5,
//       price: 95.0,
//       currency: "AED",
//       brand: "JBL",
//     },
//     {
//       productID: ID(),
//       productName: "Sony SRS-XB13",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/81-lt27AAYL._AC_UL480_QL65_.jpg",
//       productDescription:
//         "Sony SRS-XB13 - Compact & Portable Waterproof Wireless Bluetooth® speaker with EXTRA BASS™ - Black",
//       rating: 4.5,
//       price: 178.0,
//       currency: "AED",
//       brand: "Sony",
//     },
//     {
//       productID: ID(),
//       productName: "Sony 120W Soundbar",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/61EsdpUZdYL._AC_UL480_QL65_.jpg",
//       productDescription:
//         "Sony 2.0ch 120W Single Soundbar With Bluetooth, Bass Reflex Speaker S Force Surround, Ht S100 Black, HT-S100",
//       rating: 4.0,
//       price: 279.0,
//       currency: "AED",
//       brand: "Sony",
//     },
//     {
//       productID: ID(),
//       productName: "JBL 4K Ultra HD Soundbar",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/31k5iFpCHRL._AC_UL480_QL65_.jpg",
//       productDescription:
//         "JBL 5.1 Channel 4K Ultra HD Soundbar with Wireless Subwoofer BAR 5.1, Black, 5.1 4K True Wireless",
//       rating: 4.5,
//       price: 1979.0,
//       currency: "AED",
//       brand: "JBL",
//     },
//     {
//       productID: ID(),
//       productName: "Edifier Studio Speaker R1280Db",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/913SI3UTzTL._AC_UL480_FMwebp_QL65_.jpg",
//       productDescription: "Edifier Studio Bookshelf Speaker Black R1280Db Bk",
//       rating: 4.5,
//       price: 471.0,
//       currency: "AED",
//       brand: "Edifier",
//     },
//     {
//       productID: ID(),
//       productName: "Edifier Studio speaker S100oMKii",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/618nqC0xiML._AC_UL480_FMwebp_QL65_.jpg",
//       productDescription: "Edifier Studio Bookshelf Speaker Brown S1000Mkii Bn",
//       rating: 4.5,
//       price: 1271.0,
//       currency: "AED",
//       brand: "Edifier",
//     },
//   ],

//   // HEALTH & PERSONAL CARE
//   Health: [
//     {
//       productID: ID(),
//       productName: "Harpic Toilet Speaker",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/71ZVt6SkX6L._AC_UL480_QL65_.jpg",
//       productDescription:
//         "Harpic Toilet Cleaner Liquid Limescale Remover Original, 750ml 2+1",
//       rating: 4.5,
//       price: 15.62,
//       currency: "AED",
//       brand: "Harpic",
//     },
//     {
//       productID: ID(),
//       productName: "Fairy Lemon Dishwashing soap ",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/71IXc-Q7XUL._AC_UL480_QL65_.jpg",
//       productDescription: "Fairy Lemon Dishwashing Liquid Soap, 2 x 750 ml",
//       rating: 4.5,
//       price: 13.95,
//       currency: "AED",
//       brand: "Fairy",
//     },
//     {
//       productID: ID(),
//       productName: "Fine Fluffy Facial Tissues",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/71zvhpPDlFL._AC_UL480_QL65_.jpg",
//       productDescription:
//         "Fine Fluffy Facial Tissues, Nylon Pack of 10 x 200 Sheets x 2 Ply",
//       rating: 4.5,
//       price: 17.65,
//       currency: "AED",
//       brand: "Fine",
//     },
//     {
//       productID: ID(),
//       productName: "Jif Cream Clean",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/61pVab2aZzS._AC_UL480_QL65_.jpg",
//       productDescription: "Jif Cream Cleaner Lemon, 500ml",
//       rating: 3.0,
//       price: 8.4,
//       currency: "AED",
//       brand: "Jif",
//     },
//     {
//       productID: ID(),
//       productName: "AEMOVER Face Mask",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/719VfZ7rLQL._AC_UL480_QL65_.jpg",
//       productDescription:
//         "AEMOVER Disposаble Face Mask Certified Protectịon Adult's 4-Ply Filtеr Face Mask - Individually Packaged (50PCS black, ABC, Regular",
//       rating: 2.0,
//       price: 32.95,
//       currency: "AED",
//       brand: "AEMOVER",
//     },
//     {
//       productID: ID(),
//       productName: "Kleenex Kitchen Towel",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/81uuGENeLiL._AC_UL480_QL65_.jpg",
//       productDescription:
//         "Kleenex Kitchen Towel - Pack of 4 Rolls, 90 Sheets x 2 Ply",
//       rating: 4.5,
//       price: 15.2,
//       currency: "AED",
//       brand: "Kleenex",
//     },
//     {
//       productID: ID(),
//       productName: "Downy Fabric Softener",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/71XOlqLIpwL._AC_UL480_QL65_.jpg",
//       productDescription:
//         "Downy Fabric Softener, Valley Dew Scent, Fabric and Wrinkle Protector, Long-Lasting Freshness, Special Offer, Pack of 3 Liters",
//       rating: 4.5,
//       price: 15.0,
//       currency: "AED",
//       brand: "Downy",
//     },
//     {
//       productID: ID(),
//       productName: "Persil Power Gel",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/81ZNU9oWF6L._AC_UL480_QL65_.jpg",
//       productDescription:
//         "Persil Power Gel Liquid Laundry Detergent - 3 Litres + 1 Litre",
//       rating: 4.5,
//       price: 42.5,
//       currency: "AED",
//       brand: "Persil",
//     },
//     {
//       productID: ID(),
//       productName: "Colgate Max Fresh",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/817GRuNdD7L._AC_UL480_QL65_.jpg",
//       productDescription:
//         "Colgate Max Fresh Cool Mint Gel Toothpaste - 4 x 75ml",
//       rating: 4.5,
//       price: 23.17,
//       currency: "AED",
//       brand: "Colgate",
//     },
//     {
//       productID: ID(),
//       productName: "Sensodyne ToothPaste",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/71ALUDSeRbL._AC_UL480_QL65_.jpg",
//       productDescription:
//         "Sensodyne Toothpaste for Sensitive Teeth, Extra Fresh Flavour, 75 ml, Value Pack of 2",
//       rating: 4.5,
//       price: 36.5,
//       currency: "AED",
//       brand: "Sensodyne",
//     },
//     {
//       productID: ID(),
//       productName: "Colgate Zigzag Toothbrush",
//       imageUrl:
//         "https://m.media-amazon.com/images/I/813YWpTzByL._AC_UL480_QL65_.jpg",
//       productDescription:
//         "Colgate Zigzag Toothbrush Medium, 3 Pack Value Pack, Assorted Color",
//       rating: 4.0,
//       price: 12.2,
//       currency: "AED",
//       brand: "Colgate",
//     },
//   ],
// };
