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
      },
      {
        productID: "6bd31i",
        prodyctName: "Aple Ipad 2021",
        imageUrl:
          "https://m.media-amazon.com/images/I/61AMxJG2wcL._AC_UL480_QL65_.jpg",
        productDescription:
          "New 2021 Apple iPad (10.2-inch, Wi-Fi, 256GB) - Space Grey (9th Generation)",
        rating: 4.0,
        price: 1999.0,
        currency: "AED",
        brand: "Apple",
        OS: "IOS",
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
      },
      {
        productID: "6ly9tp",
        prodyctName: "Lenovo Tab M8",
        imageUrl:
          "https://m.media-amazon.com/images/I/513tmuYpH9L._AC_UL480_FMwebp_QL65_.jpg",
        productDescription:
          "Lenovo Tab M8 HD 2ND GEN (TB-8505F), 8 inch Tablet, MediaTek Helio A22 Processor,…",
        rating: 4.0,
        price: 399.0,
        currency: "AED",
        brand: "Lenovo",
        OS: "Android",
      },
      {
        productID: "p58wf9",
        prodyctName: "Lenovo Tab M10",
        imageUrl:
          "https://m.media-amazon.com/images/I/71MDku1iKgL._AC_UL480_FMwebp_QL65_.jpg",
        productDescription:
          "Lenovo Tab M10 (TB-X505F), 10.1 inch Tablet, Qualcomm Snapdragon 429 Processor, 2GB…",
        rating: 3.5,
        price: 456.95,
        currency: "AED",
        brand: "Lenovo",
        OS: "Android",
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
      },
      {
        productID: "2lfrk1",
        prodyctName: "Microsoft Surface Go",
        imageUrl:
          "https://m.media-amazon.com/images/I/31+t7B681+L._AC_UL480_FMwebp_QL65_.jpg",
        productDescription: "Microsoft Surface Go 10 Tablet",
        rating: 4.5,
        price: 1649,
        currency: "AED",
        brand: "Microsoft",
        OS: "Windows",
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
      },
    ],
  },
  // GAMING
  {
    category: "Gaming",
    data: [
      {
        productID: ID(),
        productName: "Oculus Quest 2",
        imageUrl:
          "https://m.media-amazon.com/images/I/615YaAiA-ML._AC_UL480_QL65_.jpg",
        productDescription: "Oculus Quest 2 - 128 GB - Virtual Reality Headset",
        rating: 4.0,
        price: 1297.0,
        currency: "AED",
        brand: "Oculus",
      },
      {
        productID: ID(),
        productName: "Nintendo Switch",
        imageUrl:
          "https://m.media-amazon.com/images/I/61k5IJVYTUL._AC_UL480_QL65_.jpg",
        productDescription:
          "Nintendo Switch (OLED Model) - Neon Red & Neon Blue Joy Con (UAE Version)",
        rating: 4.5,
        price: 1518.5,
        currency: "AED",
        brand: "Nintendo",
      },
      {
        productID: ID(),
        productName: "PS4 FIFA 2022",
        imageUrl:
          "https://m.media-amazon.com/images/I/81fprhh1OCL._AC_UL480_QL65_.jpg",
        productDescription: "FIFA 2022 (PS4) - Int'l version",
        rating: 4.0,
        price: 154.77,
        currency: "AED",
        brand: "PS4",
      },
      {
        productID: ID(),
        productName: "Xbox Series X Console",
        imageUrl:
          "https://m.media-amazon.com/images/I/515tLyCgdXL._AC_UL480_QL65_.jpg",
        productDescription:
          "Microsoft Xbox Series X Gaming Console, 1TB, Black (UAE Version)",
        rating: 4.5,
        price: 2437.0,
        currency: "AED",
        brand: "Xbox",
      },
      {
        productID: ID(),
        productName: "Playstation 5 Console",
        imageUrl:
          "https://m.media-amazon.com/images/I/51NsAufNveL._AC_UL480_QL65_.jpg",
        productDescription: "PlayStation 5 Console (UAE Version)",
        rating: 4.5,
        price: 3225.0,
        currency: "AED",
        brand: "PS5",
      },
      {
        productID: ID(),
        productName: "PlayStation 5 Wireless Controller",
        imageUrl:
          "https://m.media-amazon.com/images/I/61CdkDnFw6S._AC_UL480_QL65_.jpg",
        productDescription:
          "PlayStation 5 DualSense Wireless Controller (UAE Version) - Midnight Black",
        rating: 4.5,
        price: 228.0,
        currency: "AED",
        brand: "PS5",
      },
      {
        productID: ID(),
        productName: "PlayStation 5 Wireless Headset",
        imageUrl:
          "https://m.media-amazon.com/images/I/6185q-YAwPL._AC_UL480_QL65_.jpg",
        productDescription:
          "PlayStation 5 PULSE 3D Wireless Headset (UAE Version)",
        rating: 4.5,
        price: 272.85,
        currency: "AED",
        brand: "PS5",
      },
      {
        productID: ID(),
        productName: "PlayStation 5 Disc Console",
        imageUrl:
          "https://m.media-amazon.com/images/I/416ASNUOdOL._AC_UL480_QL65_.jpg",
        productDescription:
          "PlayStation 5 Disc Console Standard Edition with Extra DualSense Controller White and PS5 Spiderman Miles Morales Game",
        rating: 4.5,
        price: 3613.0,
        currency: "AED",
        brand: "PS5",
      },
      {
        productID: ID(),
        productName: "Sony PlayStation VR Bundle",
        imageUrl:
          "https://m.media-amazon.com/images/I/31q23-L3y6L._AC_UY327_FMwebp_QL65_.jpg",
        productDescription:
          "Sony PlayStation Virtual Reality Bundle - VR Headset (Version 2 - CUH-ZVR2), VR Camera, 2 Move Motion Controllers, VR Worlds Game",
        rating: 4.0,
        price: 2105.0,
        currency: "AED",
        brand: "Sony",
      },
    ],
  },
  // HEADPHONES
  {
    category: "Headphones",
    data: [
      {
        productID: ID(),
        productName: "Apple AirPods",
        imageUrl:
          "https://m.media-amazon.com/images/I/615ekapl+pL._AC_UL480_QL65_.jpg",
        productDescription: "New Apple AirPods (3rd generation)",
        rating: 4.5,
        price: 642.89,
        currency: "AED",
        brand: "Apple",
      },
      {
        productID: ID(),
        productName: "Apple Airpods Pro",
        imageUrl:
          "https://m.media-amazon.com/images/I/71bhWgQK-cL._AC_UL480_QL65_.jpg",
        productDescription:
          "Apple AirPods Pro with MagSafe charging case (2021)",
        rating: 4.5,
        price: 719.0,
        currency: "AED",
        brand: "Apple",
      },
      {
        productID: ID(),
        productName: "Sony WH-1000XM4",
        imageUrl:
          "https://m.media-amazon.com/images/I/7160xoKFtgL._AC_UL480_QL65_.jpg",
        productDescription:
          "Sony WH-1000XM4 Wireless Noise Cancelling Bluetooth Over-Ear Headphones With Speak to Chat Function and Mic For Phone Call, Black, Universal",
        rating: 4.5,
        price: 1076.0,
        currency: "AED",
        brand: "Sony",
      },
      {
        productID: ID(),
        productName: "Apple EarPods",
        imageUrl:
          "https://m.media-amazon.com/images/I/41wYbyr3LLL._AC_UL480_QL65_.jpg",
        productDescription: "Apple EarPods with Lightning Connector Earphone",
        rating: 4.0,
        price: 74.0,
        currency: "AED",
        brand: "Apple",
      },
      {
        productID: ID(),
        productName: "SoundPEATS Air 3",
        imageUrl:
          "https://m.media-amazon.com/images/I/61p6od98YQL._AC_UL480_QL65_.jpg",
        productDescription:
          "SoundPEATS Air3 Wireless Earbuds Mini Bluetooth V5.2 Earphones with Qualcomm QCC3040 and aptX-Adaptive, 4-Mic and CVC 8.0 Noise Cancellation, TrueWireless Mirroring Tech, in-Ear Detection, Game Mode",
        rating: 4.0,
        price: 151.0,
        currency: "AED",
        brand: "SoundPEATS",
      },
      {
        productID: ID(),
        productName: "Sony WF-1000XM4",
        imageUrl:
          "https://m.media-amazon.com/images/I/41yNMJgWAkS._AC_UL480_QL65_.jpg",
        productDescription:
          "Sony WF-1000XM4 Industry Leading Noise Cancelling Truly Wireless Earbuds Headphones, Wireless Charging, Google Voice Assistant, Alexa, Siri, Splash proof, Smart Listening And Mic For Phone Call, Black",
        rating: 4.0,
        price: 863.25,
        currency: "AED",
        brand: "Sony",
      },
      {
        productID: ID(),
        productName: "SoundPEATS TrueAir 2",
        imageUrl:
          "https://m.media-amazon.com/images/I/61jDXJmW6JL._AC_UL480_QL65_.jpg",
        productDescription:
          "SOUNDPEATS TrueAir2 Wireless Earbuds with Qualcomm QCC3040 Bluetooth V5.2 headphones, 4 Mic and CVC 8.0 Noise Cancellation for clear calls, True Wireless Mirroring, Total 25 Hours,aptX Codec",
        rating: 4.0,
        price: 119.25,
        currency: "AED",
        brand: "SoundPEATS",
      },
      {
        productID: ID(),
        productName: "Anker Soundcore Life P2",
        imageUrl:
          "https://m.media-amazon.com/images/I/51hsq3bombL._AC_UL480_QL65_.jpg",
        productDescription:
          "Anker Soundcore Life P2 Mini Bluetooth Earphones, 10mm Drivers with Big Bass Wireless Earbuds, Custom EQ, Bluetooth 5.2, 32H Playtime, USB-C for Fast Charging, Tiny Size for Commute, Work",
        rating: 4.5,
        price: 129.0,
        currency: "AED",
        brand: "Anker",
      },
      {
        productID: ID(),
        productName: "Xiaomi Mi True Wireless",
        imageUrl:
          "https://m.media-amazon.com/images/I/51Upw655zvL._AC_UL480_QL65_.jpg",
        productDescription:
          "Xiaomi Mi True Wireless Earbuds Basic 2, Black, 16.2 x 7.4 x 3.2 cm; 40 Grams",
        rating: 4.0,
        price: 55.35,
        currency: "AED",
        brand: "Xiaomi",
      },
      {
        productID: ID(),
        productName: "JBL T110",
        imageUrl:
          "https://m.media-amazon.com/images/I/51sv1xBLGvL._AC_UL480_QL65_.jpg",
        productDescription:
          "JBL - T110 Wired Universal In-Ear Headphone, Black",
        rating: 4.0,
        price: 27.0,
        currency: "AED",
        brand: "JBL",
      },
      {
        productID: ID(),
        productName: "Bose Headphones 700",
        imageUrl:
          "https://m.media-amazon.com/images/I/412wLL5PxtL._AC_UL480_QL65_.jpg",
        productDescription:
          "Bose Noise Cancelling Headphones 700 — Wireless, Bluetooth,Over Ear Headphones with Built-In Microphone for Clear Calls &amp; Voice Control, Black",
        rating: 4.5,
        price: 1305.0,
        currency: "AED",
        brand: "Bose",
      },
      {
        productID: ID(),
        productName: "JBL T750",
        imageUrl:
          "https://m.media-amazon.com/images/I/61drMUJ7VZL._AC_UL480_QL65_.jpg",
        productDescription:
          "JBL JBLT750BTNCBLK JBL Wireless Over Ear Headphones with active Noise Cancellation- Black - (Pack of1)",
        rating: 3.5,
        price: 262.9,
        currency: "AED",
        brand: "JBL",
      },
      {
        productID: ID(),
        productName: "Beats Solo Pro",
        imageUrl:
          "https://m.media-amazon.com/images/I/61w+edOrp9L._AC_UL480_QL65_.jpg",
        productDescription:
          "Beats Solo Pro Wireless Noise Cancelling Headphones - Grey",
        rating: 4.5,
        price: 942.9,
        currency: "AED",
        brand: "Beats",
      },
      {
        productID: ID(),
        productName: "Seinnheiser PXC 550-II",
        imageUrl:
          "https://m.media-amazon.com/images/I/71JHUS7ox1L._AC_UL480_FMwebp_QL65_.jpg",
        productDescription:
          "Sennheiser PXC 550-II Wireless – NoiseGard Adaptive Noise Cancelling, Bluetooth Headphone with Touch Sensitive Control and 30-Hour Battery Life",
        rating: 4.5,
        price: 799.0,
        currency: "AED",
        brand: "Sennheiser",
      },
      {
        productID: ID(),
        productName: "Seinnheiser M3AEBTXL",
        imageUrl:
          "https://m.media-amazon.com/images/I/71CkHZLa6WL._AC_UL480_FMwebp_QL65_.jpg",
        productDescription:
          "Sennheiser M3AEBTXL Momentum Wireless Noise Cancelling Headphones With Auto On/Off, Smart Pause Functionality And Smart Control App - Black",
        rating: 4.5,
        price: 969.0,
        currency: "AED",
        brand: "Sennheiser",
      },
    ],
  },
  // TVS
  {
    category: "Tvs",
    data: [
      {
        productID: ID(),
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
      },
      {
        productID: ID(),
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
      },
      {
        productID: ID(),
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
      },
      {
        productID: ID(),
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
      },
      {
        productID: ID(),
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
      },
      {
        productID: ID(),
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
      },
      {
        productID: ID(),
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
      },
      {
        productID: ID(),
        productName: "Samsung 40T5300 FHD",
        imageUrl:
          "https://m.media-amazon.com/images/I/51jt+E8besL._AC_UL480_FMwebp_QL65_.jpg",
        productDescription: "SAMSUNG 40 Inch FHD Smart TV 40T5300, UA40T5300AU",
        rating: 4.0,
        price: 1105.0,
        currency: "AED",
        brand: "Samsung",
        screenSize: "40 Inch",
      },
      {
        productID: ID(),
        productName: "Hisense FHD",
        imageUrl:
          "https://m.media-amazon.com/images/I/51W6yZxMlbL._AC_UL480_FMwebp_QL65_.jpg",
        productDescription:
          "Hisense 43 Inch TV FHD Smart TV, With Dolby Vision HDR, DTS Virtual X, YouTube, Netflix, Freeview Play &amp; Alexa Built-in, Bluetooth &amp; WiFi Black Model 43A4GTUK -1 Year Full Warranty.",
        rating: 4.0,
        price: 1283.0,
        currency: "AED",
        brand: "Hisense",
        screenSize: "43 Inch",
      },
      {
        productID: ID(),
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
      },
    ],
  },
  // SPEAKERS
  {
    category: "Speakers",
    data: [
      {
        productID: ID(),
        productName: "Echo Dot 4th Gen",
        imageUrl:
          "https://m.media-amazon.com/images/I/616VCBUJdnL._AC_UL480_QL65_.jpg",
        productDescription:
          "Echo Dot (4th generation) | Smart speaker with Alexa (Arabic or English) | Charcoal",
        rating: 4.0,
        price: 229.0,
        currency: "AED",
        brand: "Echo Dot",
      },
      {
        productID: ID(),
        productName: "Echo Dot 3rd Gen",
        imageUrl:
          "https://m.media-amazon.com/images/I/61Rr8uxmREL._AC_UL480_QL65_.jpg",
        productDescription:
          "Echo Dot (3rd generation) | Smart speaker with Alexa (Arabic or English) | Charcoal",
        rating: 3.5,
        price: 189.0,
        currency: "AED",
        brand: "Echo Dot",
      },
      {
        productID: ID(),
        productName: "JBL Flip 5",
        imageUrl:
          "https://m.media-amazon.com/images/I/81xUOh2WLVL._AC_UL480_QL65_.jpg",
        productDescription:
          "JBL Flip 5 Portable Bluetooth Wireless Speaker, Black",
        rating: 4.5,
        price: 299.0,
        currency: "AED",
        brand: "JBL",
      },
      {
        productID: ID(),
        productName: "JBL GO 2",
        imageUrl:
          "https://m.media-amazon.com/images/I/71bsb-XWmaS._AC_UL480_QL65_.jpg",
        productDescription:
          "JBL GO 2 Portable Bluetooth Speaker, Black - JBLGO2BLK",
        rating: 4.5,
        price: 95.0,
        currency: "AED",
        brand: "JBL",
      },
      {
        productID: ID(),
        productName: "Sony SRS-XB13",
        imageUrl:
          "https://m.media-amazon.com/images/I/81-lt27AAYL._AC_UL480_QL65_.jpg",
        productDescription:
          "Sony SRS-XB13 - Compact & Portable Waterproof Wireless Bluetooth® speaker with EXTRA BASS™ - Black",
        rating: 4.5,
        price: 178.0,
        currency: "AED",
        brand: "Sony",
      },
      {
        productID: ID(),
        productName: "Sony 120W Soundbar",
        imageUrl:
          "https://m.media-amazon.com/images/I/61EsdpUZdYL._AC_UL480_QL65_.jpg",
        productDescription:
          "Sony 2.0ch 120W Single Soundbar With Bluetooth, Bass Reflex Speaker S Force Surround, Ht S100 Black, HT-S100",
        rating: 4.0,
        price: 279.0,
        currency: "AED",
        brand: "Sony",
      },
      {
        productID: ID(),
        productName: "JBL 4K Ultra HD Soundbar",
        imageUrl:
          "https://m.media-amazon.com/images/I/31k5iFpCHRL._AC_UL480_QL65_.jpg",
        productDescription:
          "JBL 5.1 Channel 4K Ultra HD Soundbar with Wireless Subwoofer BAR 5.1, Black, 5.1 4K True Wireless",
        rating: 4.5,
        price: 1979.0,
        currency: "AED",
        brand: "JBL",
      },
      {
        productID: ID(),
        productName: "Edifier Studio Speaker R1280Db",
        imageUrl:
          "https://m.media-amazon.com/images/I/913SI3UTzTL._AC_UL480_FMwebp_QL65_.jpg",
        productDescription: "Edifier Studio Bookshelf Speaker Black R1280Db Bk",
        rating: 4.5,
        price: 471.0,
        currency: "AED",
        brand: "Edifier",
      },
      {
        productID: ID(),
        productName: "Edifier Studio speaker S100oMKii",
        imageUrl:
          "https://m.media-amazon.com/images/I/618nqC0xiML._AC_UL480_FMwebp_QL65_.jpg",
        productDescription:
          "Edifier Studio Bookshelf Speaker Brown S1000Mkii Bn",
        rating: 4.5,
        price: 1271.0,
        currency: "AED",
        brand: "Edifier",
      },
    ],
  },
  // HEALTH & PERSONAL CARE
  {
    category: "Health & Personal Care",
    data: [
      {
        productID: ID(),
        productName: "Harpic Toilet Speaker",
        imageUrl:
          "https://m.media-amazon.com/images/I/71ZVt6SkX6L._AC_UL480_QL65_.jpg",
        productDescription:
          "Harpic Toilet Cleaner Liquid Limescale Remover Original, 750ml 2+1",
        rating: 4.5,
        price: 15.62,
        currency: "AED",
        brand: "Harpic",
      },
      {
        productID: ID(),
        productName: "Fairy Lemon Dishwashing soap ",
        imageUrl:
          "https://m.media-amazon.com/images/I/71IXc-Q7XUL._AC_UL480_QL65_.jpg",
        productDescription: "Fairy Lemon Dishwashing Liquid Soap, 2 x 750 ml",
        rating: 4.5,
        price: 13.95,
        currency: "AED",
        brand: "Fairy",
      },
      {
        productID: ID(),
        productName: "Fine Fluffy Facial Tissues",
        imageUrl:
          "https://m.media-amazon.com/images/I/71zvhpPDlFL._AC_UL480_QL65_.jpg",
        productDescription:
          "Fine Fluffy Facial Tissues, Nylon Pack of 10 x 200 Sheets x 2 Ply",
        rating: 4.5,
        price: 17.65,
        currency: "AED",
        brand: "Fine",
      },
      {
        productID: ID(),
        productName: "Jif Cream Clean",
        imageUrl:
          "https://m.media-amazon.com/images/I/61pVab2aZzS._AC_UL480_QL65_.jpg",
        productDescription: "Jif Cream Cleaner Lemon, 500ml",
        rating: 3.0,
        price: 8.4,
        currency: "AED",
        brand: "Jif",
      },
      {
        productID: ID(),
        productName: "AEMOVER Face Mask",
        imageUrl:
          "https://m.media-amazon.com/images/I/719VfZ7rLQL._AC_UL480_QL65_.jpg",
        productDescription:
          "AEMOVER Disposаble Face Mask Certified Protectịon Adult's 4-Ply Filtеr Face Mask - Individually Packaged (50PCS black, ABC, Regular",
        rating: 2.0,
        price: 32.95,
        currency: "AED",
        brand: "AEMOVER",
      },
      {
        productID: ID(),
        productName: "Kleenex Kitchen Towel",
        imageUrl:
          "https://m.media-amazon.com/images/I/81uuGENeLiL._AC_UL480_QL65_.jpg",
        productDescription:
          "Kleenex Kitchen Towel - Pack of 4 Rolls, 90 Sheets x 2 Ply",
        rating: 4.5,
        price: 15.2,
        currency: "AED",
        brand: "Kleenex",
      },
      {
        productID: ID(),
        productName: "Downy Fabric Softener",
        imageUrl:
          "https://m.media-amazon.com/images/I/71XOlqLIpwL._AC_UL480_QL65_.jpg",
        productDescription:
          "Downy Fabric Softener, Valley Dew Scent, Fabric and Wrinkle Protector, Long-Lasting Freshness, Special Offer, Pack of 3 Liters",
        rating: 4.5,
        price: 15.0,
        currency: "AED",
        brand: "Downy",
      },
      {
        productID: ID(),
        productName: "Persil Power Gel",
        imageUrl:
          "https://m.media-amazon.com/images/I/81ZNU9oWF6L._AC_UL480_QL65_.jpg",
        productDescription:
          "Persil Power Gel Liquid Laundry Detergent - 3 Litres + 1 Litre",
        rating: 4.5,
        price: 42.5,
        currency: "AED",
        brand: "Persil",
      },
      {
        productID: ID(),
        productName: "Colgate Max Fresh",
        imageUrl:
          "https://m.media-amazon.com/images/I/817GRuNdD7L._AC_UL480_QL65_.jpg",
        productDescription:
          "Colgate Max Fresh Cool Mint Gel Toothpaste - 4 x 75ml",
        rating: 4.5,
        price: 23.17,
        currency: "AED",
        brand: "Colgate",
      },
      {
        productID: ID(),
        productName: "Sensodyne ToothPaste",
        imageUrl:
          "https://m.media-amazon.com/images/I/71ALUDSeRbL._AC_UL480_QL65_.jpg",
        productDescription:
          "Sensodyne Toothpaste for Sensitive Teeth, Extra Fresh Flavour, 75 ml, Value Pack of 2",
        rating: 4.5,
        price: 36.5,
        currency: "AED",
        brand: "Sensodyne",
      },
      {
        productID: ID(),
        productName: "Colgate Zigzag Toothbrush",
        imageUrl:
          "https://m.media-amazon.com/images/I/813YWpTzByL._AC_UL480_QL65_.jpg",
        productDescription:
          "Colgate Zigzag Toothbrush Medium, 3 Pack Value Pack, Assorted Color",
        rating: 4.0,
        price: 12.2,
        currency: "AED",
        brand: "Colgate",
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
