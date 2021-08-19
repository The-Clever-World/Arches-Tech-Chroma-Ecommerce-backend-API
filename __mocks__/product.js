// basic products for prototyping

const products = [
  {
    name: "HP 15s-dr3001TU (34W43PA#ACJ) Core i3 11th Gen Windows 10 Home Thin and Light Laptop (8GB RAM, 1TB HDD, Intel UHD Graphics, 39.6cm, Natural Silver)",
    images: [
      "/images/pro1.png",
      "/images/pro2.jfif",
      "/images/pro3.png",
      "/images/pro4.png",
    ],
    description: {
      keyFeatures: [
        '39.62 cm (15.6"),FHD',
        "intel Corei3 10th Gen",
        "RAM: 8GB DDR4, ROM: 1TB HDD",
        "Intel UHD Graphics",
        "Windows 10 Home",
        "Best Suited For: Home | Office Use | Students",
      ],
      specifications:
        "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.",
      highlights:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe facilis dolorem, laborum culpa veniam sed id iusto non reiciendis ducimus!",
      overview:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, dolore!",
    },
    reviews: [
      {
        name: "soumava Banerjee",
        comment: "Hire me if you like my work",
        rating: "4.5",
      },
    ],
    price: 89111.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: "DELL 138q7i 1TB HDD 256GB SSD I5 8th GEN, NVIDIA 110mx)",
    images: [
      "/images/pro1.png",
      "/images/laptop-new-2.jpg",
      "/images/laptop-new-3.jpg",
    ],
    description: {
      keyFeatures: [
        "Intel UHD Graphics",
        "Windows 10 Home",
        "Best Suited For: Home | Office Use | Students",
      ],
      specifications:
        "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.",
      highlights:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe facilis dolorem, laborum culpa veniam sed id iusto non reiciendis ducimus!",
      overview:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, dolore!",
    },
    reviews: {
      name: "soumava Banerjee",
      comment: "Dummy review",
      rating: "4.5",
    },
    price: 100000.99,
    countInStock: 100,
    rating: 4.0,
    numReviews: 10,
  },
  {
    name: "HP 138q7i 1TB HDD 256GB SSD I5 8th GEN, NVIDIA 110mx)",
    images: [
      "/images/pro1.png",
      "/images/laptop-new-2.jpg",
      "/images/pro1.png",
    ],
    description: {
      keyFeatures: [
        "Intel UHD Graphics",
        "Windows 11 Home",
        "Best Suited For: Home | Office Use | Students",
      ],
      specifications:
        "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.",
      highlights:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe facilis dolorem, laborum culpa veniam sed id iusto non reiciendis ducimus!",
      overview:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, dolore!",
    },
    reviews: {
      name: "Shubham Banerjee",
      comment: "Nice product",
      rating: "4.5",
    },
    price: 1060.99,
    countInStock: 60,
    rating: 4.0,
    numReviews: 90,
  },
  {
    name: "ASUS vivobook 1TB HDD 256GB SSD I5 8th GEN, NVIDIA 110mx)",
    images: [
      "/images/laptop-new-2.jpg",
      "/images/pro1.png",
      "/images/laptop-new-3.jpg",
    ],
    description: {
      keyFeatures: [
        "Intel UHD Graphics",
        "Windows 10 Home",
        "Best Suited For: Home | Office Use | Students",
      ],
      specifications:
        "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.",
      highlights:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe facilis dolorem, laborum culpa veniam sed id iusto non reiciendis ducimus!",
      overview:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, dolore!",
    },
    reviews: {
      name: "Prasun Banerjee",
      comment: "Great review",
      rating: "4.5",
    },
    price: 60000.99,
    countInStock: 1500,
    rating: 4.8,
    numReviews: 90,
  },
  {
    name: "Lenovo 1TB HDD 256GB SSD I5 8th GEN, NVIDIA 110mx)",
    images: [
      "/images/laptop-new-3.jpg",
      "/images/pro1.png",
      "/images/laptop-new-2.jpg",
    ],
    description: {
      keyFeatures: [
        "Intel UHD Graphics",
        "Windows 10 Home",
        "Best Suited For: Home | Office Use | Students",
      ],
      specifications:
        "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.",
      highlights:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe facilis dolorem, laborum culpa veniam sed id iusto non reiciendis ducimus!",
      overview:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, dolore!",
    },
    reviews: {
      name: "Alex Chakroborti",
      comment: "Great Product",
      rating: "4.5",
    },
    price: 60000.99,
    countInStock: 1500,
    rating: 4.8,
    numReviews: 90,
  },
  {
    name: "LG TV",
    images: [
      "/images/television.png",
      "/images/pro1.png",
      "/images/laptop-new-2.jpg",
    ],
    description: {
      keyFeatures: [
        "Intel UHD Graphics",
        "Windows 10 Home",
        "Best Suited For: Home | Office Use | Students",
      ],
      specifications:
        "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.",
      highlights:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe facilis dolorem, laborum culpa veniam sed id iusto non reiciendis ducimus!",
      overview:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, dolore!",
    },
    reviews: {
      name: "Alex Chakroborti",
      comment: "Great Product",
      rating: "4.5",
    },
    price: 60000.99,
    countInStock: 1500,
    rating: 4.8,
    numReviews: 90,
  },
  {
    name: "SONY TV",
    images: [
      "/images/television.png",
      "/images/pro1.png",
      "/images/laptop-new-2.jpg",
    ],
    description: {
      keyFeatures: [
        "Intel UHD Graphics",
        "Windows 10 Home",
        "Best Suited For: Home | Office Use | Students",
      ],
      specifications:
        "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.",
      highlights:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe facilis dolorem, laborum culpa veniam sed id iusto non reiciendis ducimus!",
      overview:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, dolore!",
    },
    reviews: {
      name: "Alex Chakroborti",
      comment: "Great Product",
      rating: "4.5",
    },
    price: 60000.99,
    countInStock: 1500,
    rating: 4.8,
    numReviews: 90,
  },
  {
    name: "Parasonic TV",
    images: [
      "/images/television.png",
      "/images/pro1.png",
      "/images/laptop-new-2.jpg",
    ],
    description: {
      keyFeatures: [
        "Intel UHD Graphics",
        "Windows 10 Home",
        "Best Suited For: Home | Office Use | Students",
      ],
      specifications:
        "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.",
      highlights:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe facilis dolorem, laborum culpa veniam sed id iusto non reiciendis ducimus!",
      overview:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, dolore!",
    },
    reviews: {
      name: "Alex Chakroborti",
      comment: "Great Product",
      rating: "4.5",
    },
    price: 60000.99,
    countInStock: 1500,
    rating: 4.8,
    numReviews: 90,
  },
  {
    name: "TUSIBA TV",
    images: [
      "/images/television.png",
      "/images/pro1.png",
      "/images/laptop-new-2.jpg",
    ],
    description: {
      keyFeatures: [
        "Intel UHD Graphics",
        "Windows 10 Home",
        "Best Suited For: Home | Office Use | Students",
      ],
      specifications:
        "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.",
      highlights:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe facilis dolorem, laborum culpa veniam sed id iusto non reiciendis ducimus!",
      overview:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, dolore!",
    },
    reviews: {
      name: "Alex Chakroborti",
      comment: "Great Product",
      rating: "4.5",
    },
    price: 60000.99,
    countInStock: 1500,
    rating: 4.8,
    numReviews: 90,
  },
  {
    name: "Samsung Airise 1.5 Ton 4 Star Inverter Split AC (Copper Condenser, AR18AY4ZAWK, Deco Wk (DA White))",
    images: [
      "/images/air-conditioning.png",
    ],
    description: {
      keyFeatures: [
        "Intel UHD Graphics",
        "Windows 10 Home",
        "Best Suited For: Home | Office Use | Students",
      ],
      specifications:
        "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.",
      highlights:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe facilis dolorem, laborum culpa veniam sed id iusto non reiciendis ducimus!",
      overview:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, dolore!",
    },
    reviews: {
      name: "Alex Chakroborti",
      comment: "Great Product",
      rating: "4.5",
    },
    price: 60000.99,
    countInStock: 1500,
    rating: 4.8,
    numReviews: 90,
  },
  {
    name: "Panasonic WU 1.5 Ton 4 Star Inverter Split AC (Air Purification Filter, Wi-Fi, Copper Condenser, CS/CU-WU18XKYXF, White)",
    images: [
      "/images/air-conditioning.png",
    ],
    description: {
      keyFeatures: [
        "Intel UHD Graphics",
        "Windows 10 Home",
        "Best Suited For: Home | Office Use | Students",
      ],
      specifications:
        "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.",
      highlights:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe facilis dolorem, laborum culpa veniam sed id iusto non reiciendis ducimus!",
      overview:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, dolore!",
    },
    reviews: {
      name: "Alex Chakroborti",
      comment: "Great Product",
      rating: "4.5",
    },
    price: 60000.99,
    countInStock: 1500,
    rating: 4.8,
    numReviews: 90,
  },
  {
    name: "Samsung Airise 0.5 Ton 2.5 Star Inverter Split AC (Copper Condenser,  Deco Wk (DA White))",
    images: [
      "/images/air-conditioning.png",
    ],
    description: {
      keyFeatures: [
        "Intel UHD Graphics",
        "Windows 10 Home",
        "Best Suited For: Home | Office Use | Students",
      ],
      specifications:
        "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.",
      highlights:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe facilis dolorem, laborum culpa veniam sed id iusto non reiciendis ducimus!",
      overview:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, dolore!",
    },
    reviews: {
      name: "Alex Chakroborti",
      comment: "Great Product",
      rating: "4.5",
    },
    price: 60000.99,
    countInStock: 1500,
    rating: 4.8,
    numReviews: 90,
  },
  {
    name: "Panasonic WU 3.5 Ton 5 Star Inverter Split AC (Air Purification Filter, CS/CU-WU18XKYXF, White)",
    images: [
      "/images/air-conditioning.png",
    ],
    description: {
      keyFeatures: [
        "Intel UHD Graphics",
        "Windows 10 Home",
        "Best Suited For: Home | Office Use | Students",
      ],
      specifications:
        "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.",
      highlights:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe facilis dolorem, laborum culpa veniam sed id iusto non reiciendis ducimus!",
      overview:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, dolore!",
    },
    reviews: {
      name: "Alex Chakroborti",
      comment: "Great Product",
      rating: "4.5",
    },
    price: 60000.99,
    countInStock: 1500,
    rating: 4.8,
    numReviews: 90,
  },
  {
    name: "Realme GT Master Edition (128GB ROM, 8GB RAM, RMX3360, Lunar White)",
    images: [
      "/images/phone.png",
    ],
    description: {
      keyFeatures: [
        "Intel UHD Graphics",
        "Windows 10 Home",
        "Best Suited For: Home | Office Use | Students",
      ],
      specifications:
        "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.",
      highlights:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe facilis dolorem, laborum culpa veniam sed id iusto non reiciendis ducimus!",
      overview:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, dolore!",
    },
    reviews: {
      name: "Alex Chakroborti",
      comment: "Great Product",
      rating: "4.5",
    },
    price: 60000.99,
    countInStock: 1500,
    rating: 4.8,
    numReviews: 90,
  },
  {
    name: "Vivo Y12G (32GB ROM, 3GB RAM, PD2060EF_IN, Glacier Blue)",
    images: [
      "/images/phone.png",
    ],
    description: {
      keyFeatures: [
        "Intel UHD Graphics",
        "Windows 10 Home",
        "Best Suited For: Home | Office Use | Students",
      ],
      specifications:
        "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.",
      highlights:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe facilis dolorem, laborum culpa veniam sed id iusto non reiciendis ducimus!",
      overview:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, dolore!",
    },
    reviews: {
      name: "Alex Chakroborti",
      comment: "Great Product",
      rating: "4.5",
    },
    price: 60000.99,
    countInStock: 1500,
    rating: 4.8,
    numReviews: 90,
  },
  {
    name: "JBL Live 660NC Over-Ear Adaptive Noise Cancellation Wireless Headphone with Mic (Bluetooth 5.0, JBL Signature Sound, JBLLIVE660NCBLK, Black)",
    images: [
      "/images/headphone.png",
    ],
    description: {
      keyFeatures: [
        "Intel UHD Graphics",
        "Windows 10 Home",
        "Best Suited For: Home | Office Use | Students",
      ],
      specifications:
        "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.",
      highlights:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe facilis dolorem, laborum culpa veniam sed id iusto non reiciendis ducimus!",
      overview:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, dolore!",
    },
    reviews: {
      name: "Alex Chakroborti",
      comment: "Great Product",
      rating: "4.5",
    },
    price: 60000.99,
    countInStock: 1500,
    rating: 4.8,
    numReviews: 90,
  },
  {
    name: "BOAT Live 660NC Over-Ear Adaptive Noise Cancellation Wireless Headphone with Mic (Bluetooth 5.0, JBL Signature Sound, JBLLIVE660NCBLK, Black)",
    images: [
      "/images/headphone.png",
    ],
    description: {
      keyFeatures: [
        "Intel UHD Graphics",
        "Windows 10 Home",
        "Best Suited For: Home | Office Use | Students",
      ],
      specifications:
        "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.",
      highlights:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe facilis dolorem, laborum culpa veniam sed id iusto non reiciendis ducimus!",
      overview:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, dolore!",
    },
    reviews: {
      name: "Alex Chakroborti",
      comment: "Great Product",
      rating: "4.5",
    },
    price: 60000.99,
    countInStock: 1500,
    rating: 4.8,
    numReviews: 90,
  },
  {
    name: "Glen 4 Burner Glass Gas Stove (Multi Spark Auto Ignition, 1048 SQ GT AI Forged BB FFD, Black)",
    images: [
      "/images/headphone.png",
    ],
    description: {
      keyFeatures: [
        "Intel UHD Graphics",
        "Windows 10 Home",
        "Best Suited For: Home | Office Use | Students",
      ],
      specifications:
        "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.",
      highlights:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe facilis dolorem, laborum culpa veniam sed id iusto non reiciendis ducimus!",
      overview:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, dolore!",
    },
    reviews: {
      name: "Alex Chakroborti",
      comment: "Great Product",
      rating: "4.5",
    },
    price: 60000.99,
    countInStock: 1500,
    rating: 4.8,
    numReviews: 90,
  },
];

export default products;
