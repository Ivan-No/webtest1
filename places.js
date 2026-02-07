const PLACES = [
{ group:"temple", lat:18.8223698, lng:100.6224822, th:"วัดภูมินทร์", en:"Wat Phumin", img:"images/joker with one tooth.gif", info:"วัดเก่าแก่ใจกลางเมืองน่าน มีภาพจิตรกรรมฝาผนังที่มีชื่อเสียง" },
{ group:"temple", lat:18.7698843, lng:100.7480521, th:"วัดพระธาตุเขาน้อย", en:"Wat Phra That Khao Noi", img:"images/marker/phrathatkhaonoi temple.jpg", info:"วัดบนยอดเขา สามารถชมวิวเมืองน่านได้" },
{ group:"temple", lat:19.1653656, lng:100.93413, th:"วัดภูเก็ต", en:"Wat Phuket", img:"images/marker/phuket temple.jpg", info:"วัดท่ามกลางทุ่งนา บรรยากาศเงียบสงบ" },

{ group:"nature", lat:18.7722264, lng:100.7680237, th:"บ้านธนานุสร", en:"Ban Thananusorn", img:"images/marker/banthananusorn.jpg", info:"บ้านวัฒนธรรมท้องถิ่นของชาวน่าน" },
{ group:"nature", lat:18.7762417, lng:100.770759, th:"พิพิธภัณฑสถานแห่งชาติน่าน", en:"Nan National Museum", img:"images/marker/national museum of nan.jpg", info:"พิพิธภัณฑ์แสดงประวัติศาสตร์และศิลปวัฒนธรรมเมืองน่าน" },
{ group:"nature", lat:18.7762417, lng:100.6389231, th:"ซุ้ม ลีลาวดี", en:"Leelawadee Area", img:"images/marker/lilaowadee area.jpg", info:"จุดถ่ายรูปท่ามกลางต้นลีลาวดีและธรรมชาติ" },

{ group:"nature", lat:19.1863116, lng:101.1892794, th:"จุดชมวิวสะปัน", en:"Sapan Viewpoint", img:"images/marker/sapan viewpoint.jpg", info:"จุดชมวิวภูเขาและหมู่บ้านสะปัน" },
{ group:"nature", lat:19.1905747, lng:101.1962677, th:"น้ำตกสะปัน", en:"Sapan Waterfall", img:"images/marker/sapan waterfall.jpg", info:"น้ำตกเล็ก ๆ ใกล้หมู่บ้าน บรรยากาศร่มรื่น" },
{ group:"nature", lat:19.1746827, lng:101.1038714, th:"จุดชมวิวดอยภูคา 1715", en:"Doi Phu Kha Viewpoint 1715", img:"images/marker/doiphuka 1715 viewpoint.jpg", info:"จุดชมวิวบนภูเขาสูง เห็นวิวกว้างไกล" },

{ group:"cafe", lat:19.1905747, lng:101.1962677, th:"หยุดเวลา คาเฟ่", en:"Time Stop Cafe", img:"images/marker/time stop cafe.jpg", info:"คาเฟ่เล็ก ๆ ในหมู่บ้านสะปัน บรรยากาศสบาย ๆ" },
{ group:"cafe", lat:19.1533682, lng:101.1551859, th:"ร้านหัวสะพาน", en:"Hua Saphan Cafe", img:"images/marker/bridge entrace shop (sapan).jpg", info:"ร้านกาแฟใกล้สะพาน วิวธรรมชาติ" },
{ group:"cafe", lat:19.1570835, lng:101.1558629, th:"อาโป เดอ มาร์น", en:"Arpo de Marng", img:"images/marker/arpo de marng.jpg", info:"คาเฟ่วิวภูเขา เหมาะกับการพักผ่อน" },
{ group:"cafe", lat:19.1457335, lng:100.9381224, th:"กาแฟบ้านไทลื้อ", en:"Tai Lue House Coffee", img:"images/marker/tailue house coffee.jpg", info:"ร้านกาแฟสไตล์ท้องถิ่นไทลื้อ" },

{ group:"stay", lat:19.2317025, lng:100.8821492, th:"บ้านสะปัน", en:"Ban Sapan", img:"images/marker/bansapan.jpg", info:"หมู่บ้านเล็ก ๆ กลางหุบเขา เงียบสงบ" },
{ group:"stay", lat:19.1928271, lng:101.1941919, th:"อุ่นไอมาง ณ สะปัน", en:"Aun Jai Mang at Sapan", img:"images/marker/aunjaimang at sapan.jpg", info:"ที่พักและโฮมสเตย์ บรรยากาศอบอุ่น" },
{ group:"stay", lat:18.9161628, lng:100.875333, th:"น่านเนทีฟ กิ่วม่วง", en:"Nan Native Giwmuang", img:"images/marker/nan native giwmuang.jpg", info:"รีสอร์ทท่ามกลางธรรมชาติและภูเขา" },
{ group:"stay", lat:18.915472, lng:100.8644056, th:"กิ่วม่วง เมาน์เทนไฮแคมป์", en:"Kiwmuang Mountain High Camp", img:"images/marker/kiwmuang mountain high camp.jpg", info:"ที่พักแนวแคมป์ปิ้ง ใกล้ชิดธรรมชาติ" },
{ group:"stay", lat:18.9065846, lng:100.928357, th:"ศรีนาม่าน", en:"Sri Na Man", img:"images/marker/srinaman.jpg", info:"โฮมสเตย์ในจังหวัดน่าน บรรยากาศเรียบง่าย" },

{ group:"nature", lat:19.1358268, lng:100.9506635, th:"ฟาร์มเห็ดบ้านหัวน้ำ", en:"Huanam Mushroom Farm", img:"images/marker/huanam house mushroom farm.jpg", info:"ฟาร์มเห็ดของชุมชน เรียนรู้วิถีเกษตร" },
// ===== แม่จริม ===== ********************************* IMAGES MISSING
{ group:"nature", lat:18.6015744, lng:100.5441754, th:"อุทยานแห่งชาติแม่จริม", en:"Mae Charim National Park", img:"images/marker/mae charim national park.jpg", info:"พื้นที่อนุรักษ์แนวเทือกเขาหลวงพระบาง" },
{ group:"nature", lat:18.7146651, lng:101.0304811, th:"ภูบ่อว้า", en:"Phu Bo Wa", img:"", info:"จุดชมวิวและกางเต็นท์สูง 1,700 ฟุต มองเห็นลำน้ำว้า" },
{ group:"temple", lat:18.7148651, lng:101.0304811, th:"วัดพระธาตุดอยหงษ์", en:"Wat Phra That Doi Hong", img:"images/marker/wat phra that doi hong.jpg", info:"โบราณสถานศักดิ์สิทธิ์คู่บ้านคู่เมืองแม่จริม" },
{ group:"nature", lat:18.7192193, lng:100.7020088, th:"ล่องแก่งบ้านวังลูน-บ้านน้ำว้า", en:"Wang Loon–Nam Wa Rafting", img:"", info:"เส้นทางล่องแก่งลำน้ำว้าตอนล่าง สนุกและปลอดภัย" },

// ===== นาน้อย =====
{ group:"nature", lat:18.6257843, lng:100.4228623, th:"ดอยเสมอดาว", en:"Doi Samer Dao", img:"", info:"จุดกางเต็นท์ชมทะเลหมอกและพระอาทิตย์ 360 องศา" },
{ group:"nature", lat:18.367461, lng:100.8374558, th:"อุทยานแห่งชาติศรีน่าน", en:"Si Nan National Park", img:"", info:"ภูเขาสูงชัน ป่าอุดมสมบูรณ์ เหมาะกับการท่องเที่ยวธรรมชาติ" },
{ group:"nature", lat:18.2771071, lng:100.5187683, th:"อุทยานแห่งชาติขุนสถาน", en:"Khun Sathan National Park", img:"", info:"อากาศหนาวเย็นตลอดปี จุดชมทะเลหมอกสวยงาม" },
{ group:"nature", lat:18.3034944, lng:100.7504208, th:"เสาดินนาน้อย", en:"Nan Noi Earth Pillars", img:"", info:"เสาดินธรรมชาติจากการกัดเซาะยาวนานกว่า 30,000 ปี" },
{ group:"temple", lat:18.2688302, lng:100.5764829, th:"วัดถ้ำเชตวัน", en:"Wat Tham Chetawan", img:"", info:"วัดล้านนาผสมพม่า ตั้งอยู่ท่ามกลางหุบเขา" },

// ===== ปัว =====
{ group:"nature", lat:19.1368806, lng:100.9551558, th:"วังศิลาแลง", en:"Wang Sila Laeng", img:"", info:"แกรนด์แคนยอนเมืองน่าน โขดหินรูปทรงแปลกตา" },
{ group:"nature", lat:19.1985923, lng:101.0777405, th:"อุทยานแห่งชาติดอยภูคา", en:"Doi Phu Kha National Park", img:"", info:"ชมดอกชมพูภูคาและธรรมชาติภูเขาสูง" },

// ===== เวียงสา =====
{ group:"temple", lat:18.5712805, lng:100.749640, th:"วัดบุญยืน", en:"Wat Bun Yuen", img:"", info:"พระอารามหลวง วิหารทรงแปลกตา" },
{ group:"nature", lat:18.5729996, lng:100.7412724, th:"ตลาดเช้าเวียงสา", en:"Wiang Sa Morning Market", img:"", info:"ตลาดพื้นเมืองยามเช้า สัมผัสวิถีชีวิตชาวบ้าน" },

// ===== เชียงกลาง =====
{ group:"temple", lat:18.5732633, lng:100.5812578, th:"วัดหนองแดง", en:"Wat Nong Daeng", img:"", info:"วิหารไทยลื้อสร้างด้วยไม้ตะเคียนทั้งหลัง" },
{ group:"nature", lat:19.1460914, lng:100.8709583, th:"จุดชมวิวบ้านเปียงซ้อ", en:"Ban Piang So Viewpoint", img:"", info:"จุดชมทะเลหมอก เงียบสงบ ยังไม่ค่อยมีนักท่องเที่ยว" },

// ===== สองแคว =====
{ group:"nature", lat:19.3742067, lng:100.5346804, th:"อุทยานแห่งชาติถ้ำสะเกิน", en:"Tham Sakoen National Park", img:"", info:"อุทยานแห่งชาติที่มีถ้ำและเส้นทางศึกษาธรรมชาติ" },
{ group:"nature", lat:19.3942449, lng:100.5598133, th:"น้ำตกห้วยหาด", en:"Huai Hat Waterfall", img:"", info:"น้ำตกหลายชั้นกลางป่าลึก บรรยากาศธรรมชาติ" },

// ===== เฉลิมพระเกียรติ =====
{ group:"nature", lat:19.5789539, lng:101.0658324, th:"ฐานปฏิบัติการห้วยโก๋น", en:"Huai Kon Military Base", img:"", info:"อนุสรณ์สถานการสู้รบในอดีตชายแดนไทย-ลาว" },
{ group:"nature", lat:19.5967934, lng:101.0822963, th:"ตลาดชายแดนห้วยโก๋น", en:"Huai Kon Border Market", img:"", info:"ตลาดนัดไทย–ลาว เปิดเฉพาะวันเสาร์" },

// ===== บ้านหลวง =====
{ group:"temple", lat:18.7073089, lng:100.4826061, th:"วัดพระธาตุแช่แห้ง พระอารามหลวง", en:"Wat Phra That Chae Haeng Phra Aram Luang", img:"", info:"พระธาตุสีขาวบนยอดดอย วิวสวยงาม" },
{ group:"nature", lat:19.16169, lng:101.012077, th:"ม่อนผาเวียง", en:"Mon Pha Wing", img:"", info:"จุดชมวิวหน้าผาหินขาวและทะเลหมอก" }
];