// Đã tự động tạo bởi Script
export interface Recipe {
  id?: string;
  title: string;
  image: string;
  prepTime: string;
  ingredients: string[];
  steps: string[];
  tags: string[];
}

export const mockRecipes: Recipe[] = [
  {
    "title": "Thịt Kho Tàu",
    "image": "/images/food1.jpg",
    "prepTime": "15 phút",
    "ingredients": [
      "500g ba chỉ heo",
      "5 quả trứng vịt",
      "1 trái dừa xiêm",
      "Nước mắm, đường, hành tỏi"
    ],
    "steps": [
      "Rửa thịt, thái viên to. Luộc trứng, bóc vỏ.",
      "Ướp thịt với muối, mắm, đường, tỏi 30 phút.",
      "Thắng đường caramel, cho thịt vào đảo săn lại.",
      "Đổ nước dừa tươi đun sôi, hạ nhỏ lửa.",
      "Thả trứng vào kho liu riu 1 tiếng cho thịt thật mềm ngấm."
    ],
    "tags": [
      "Món Việt Nam",
      "Dễ làm",
      "Bữa cơm"
    ]
  },
  {
    "title": "Canh Rau Ngót Thịt Băm",
    "image": "/images/food2.jpg",
    "prepTime": "30 phút",
    "ingredients": [
      "1 bó rau ngót",
      "100g thịt băm",
      "Hành khô",
      "Gia vị, hạt nêm"
    ],
    "steps": [
      "Tuốt lá rau ngót, vò nát nhẹ tay để lá mềm.",
      "Phi hành khô với xíu dầu, đảo thịt băm cho xém chín.",
      "Đổ 1 bát nước to vào nồi, đun đến khi sôi sùng sục.",
      "Thả rau ngót vào, nêm nếm vừa miệng. Đun sôi lại là chớp tắt bếp bảo toàn màu cọng rau."
    ],
    "tags": [
      "Món Việt Nam",
      "Gia đình",
      "Bữa cơm"
    ]
  },
  {
    "title": "Trứng Cà Chua (Canh Mây)",
    "image": "/images/food3.jpg",
    "prepTime": "45 phút",
    "ingredients": [
      "2 quả trứng gà",
      "2 quả cà chua",
      "Ngò rí, hành lá",
      "Dầu ăn, bột canh"
    ],
    "steps": [
      "Cà chua thái múi cau. Trứng đập ra bát đánh thật tan.",
      "Xào cà chua nhuyễn như tương, nêm xíu đường cho nhanh mềm.",
      "Đổ nước vào đun canh. Khi nước sôi ùng ục thì khuấy nhẹ vòng tròn.",
      "Rót từ từ trứng vào tạo dòng xoáy vân mây. Tắt bếp rắc hành."
    ],
    "tags": [
      "Món Việt Nam",
      "Dễ làm",
      "Bữa cơm"
    ]
  },
  {
    "title": "Cá Lóc Kho Tộ",
    "image": "/images/food4.jpg",
    "prepTime": "15 phút",
    "ingredients": [
      "500g cá lóc",
      "100g mỡ heo",
      "Hành, tỏi, tiêu sọ, ớt",
      "Nước màu, nước mắm"
    ],
    "steps": [
      "Làm sạch thịt cá, cắt khúc. Thắng mỡ heo cho ra tóp mỡ.",
      "Ướp cá với đẫm nước mắm, đường, tiêu, nước màu cỡ 30 phút.",
      "Bắc nồi tộ lên bếp, cho cá và nước ướp vào đun sôi bùng.",
      "Hạ nhỏ ngọn lửa nhất, liu riu đến khi kẹo nước sền sệt thì rắc tiêu.",
      "Dọn ra mâm, cắp ăn cùng dưa leo xoài sống chấm cực đã."
    ],
    "tags": [
      "Món Việt Nam",
      "Gia đình",
      "Bữa cơm"
    ]
  },
  {
    "title": "Rau Muống Xào Tỏi",
    "image": "/images/food5.jpg",
    "prepTime": "30 phút",
    "ingredients": [
      "1 bó to rau muống non",
      "1 củ tỏi (ít nhất 10 tép)",
      "Dầu ăn",
      "Nước mắm, hạt nêm"
    ],
    "steps": [
      "Rửa rau sạch dứt, để vẩy sạch nước. Tỏi khô đập dập 1 nửa.",
      "Bắc chảo bỏ xíu dầu phi tỏi thơm vàng lên.",
      "Đẩy LỬA TO NHẤT, thả nguyên rổ rau muống vào đảo tốc hành liên tục.",
      "Khi rau vừa chuyển màu xanh ngắt, thả nốt phần tỏi còn lại vào. Tắt bếp ra đĩa ngay."
    ],
    "tags": [
      "Món Việt Nam",
      "Dễ làm",
      "Bữa cơm"
    ]
  },
  {
    "title": "Gà Luộc Tiêu Chanh",
    "image": "/images/food6.jpg",
    "prepTime": "45 phút",
    "ingredients": [
      "1/2 con gà ta (1kg)",
      "Gừng, củ hành tím",
      "Muối hạt, chanh, lá chanh",
      "Tiêu sọ đập dập"
    ],
    "steps": [
      "Xát muối gừng ngoài da gà tắm rửa bay hết mùi hôi.",
      "Bắc nồi nước LẠNH ngập thân gà, bỏ 2 lát gừng mỏng, đu đun râm ran.",
      "Khi nước sôi liu riu, vặn thật nhỏ lửa đậy nắp trong 15 phút.",
      "Tắt bếp NGÂM GÀ thêm 15 phút rục tới xương, rồi vớt ra thau nước đá lạnh.",
      "Chặt gà dính da xắp ra đĩa rắc lá chanh. Chấm muối tiêu ớt cực cuốn."
    ],
    "tags": [
      "Món Việt Nam",
      "Gia đình",
      "Bữa cơm"
    ]
  },
  {
    "title": "Phở Bò Gia Truyền",
    "image": "/images/food7.jpg",
    "prepTime": "15 phút",
    "ingredients": [
      "500g thịt bò (tái, nạm)",
      "1kg xương ống bò",
      "Hoa hồi, quế, thảo quả, gừng, hành nướng",
      "Bánh phở"
    ],
    "steps": [
      "Ninh xương ống 4 tiếng làm nước dùng, hớt bọt vớt liên tục cho trong.",
      "Nướng thơm gừng, hành củ, thảo quả, quế rồi thả vào nồi xương.",
      "Đun đến khi ngửi mùi phở bốc lên, nêm xíu mắm, bột canh.",
      "Chần bánh phở nóng qua nước sôi, xếp vào tô phở.",
      "Thái thịt bò mỏng, trang trí trên phở, dội nồi nước dùng đang sôi sục ngập lên thịt."
    ],
    "tags": [
      "Món Việt Nam",
      "Dễ làm",
      "Bữa cơm"
    ]
  },
  {
    "title": "Bún Bò Huế",
    "image": "/images/food8.jpg",
    "prepTime": "30 phút",
    "ingredients": [
      "1kg xương heo/bò",
      "Mắm ruốc Huế xịn",
      "Sả cây đập dập non 10 nhánh",
      "Bắp bò, chả cua",
      "Bún sợi to"
    ],
    "steps": [
      "Hầm nhừ xương với sả cây đập dập cho ngấm mùi thơm.",
      "Pha mắm ruốc lấy nước trong, đổ vào xông nồi nước hầm đánh thức hương vị bùn bò.",
      "Tạo dầu màu điều xào hành tỏi, đổ vào chảo đun thêm 15 phút nêm mắm.",
      "Thái bắp bò hầm nhừ, luộc chả viên, múc chan nước lèo mắm ruốc ăn với hoa chuối thái."
    ],
    "tags": [
      "Món Việt Nam",
      "Gia đình",
      "Bữa cơm"
    ]
  },
  {
    "title": "Cơm Tấm Sườn Bì",
    "image": "/images/food9.jpg",
    "prepTime": "45 phút",
    "ingredients": [
      "3 lạng sườn cốt lết (loại dày thịt)",
      "Gạo tấm hạt nát",
      "Nước mắm ngọt, tỏi",
      "Bì heo, mỡ hành"
    ],
    "steps": [
      "Ướp sườn cốt lết qua đêm cùng tỏi, mật ong, nước mắm, dầu hào, tiêu.",
      "Nấu cơm tấm bằng gạo vỡ với lượng nước ít dẻo khô.",
      "Nướng sườn trên than hoa hừng hực tới khi thịt sém cạnh mỡ cháy.",
      "Pha nước mắm kẹo chua ngọt đặc sánh, bào sợi xoài cà rốt.",
      "Bày mâm: Rưới mỡ hành lên mặt cơm, cắt miếng sườn, chan ngập nước mắm tỏi."
    ],
    "tags": [
      "Món Việt Nam",
      "Dễ làm",
      "Bữa cơm"
    ]
  },
  {
    "title": "Bún Chả Hà Nội",
    "image": "/images/food10.jpg",
    "prepTime": "15 phút",
    "ingredients": [
      "500g thịt nách, thịt băm",
      "Hành ngò, sả xay, tỏi, ớt",
      "Nước cốt dừa thơm, mật phèn",
      "Đu đủ xanh, mắm dấm"
    ],
    "steps": [
      "Băm thịt viên và thái thịt miếng, ướp sả, tỏi băm, mật phèn, mắm ruốc xíu.",
      "Nặn viên chả thành miếng tròn vừa miệng, xếp lên vỉ chả nướng than hoa quạt hồng.",
      "Pha nước lèo: Mắm ngon, dấm loãng, mắm, phèn loãng xíu vị chua nhẹ ngai ngái.",
      "Chần bún lá tươi ngon. Ăn gắp kẹp chả nóng hổi chan nước mắm, rau xà lách xông nách."
    ],
    "tags": [
      "Món Việt Nam",
      "Gia đình",
      "Bữa cơm"
    ]
  },
  {
    "title": "Nem Rán Giòn (Chả Giò)",
    "image": "/images/food11.jpg",
    "prepTime": "30 phút",
    "ingredients": [
      "Thịt băm 3 lạng",
      "Mộc nhĩ, miến, giá đỗ",
      "Trứng gà non 2 quả",
      "Bánh đa cởi"
    ],
    "steps": [
      "Ngâm mộc nhĩ nấm hương miến thái lún chún nhỏ băm đều.",
      "Trộn nhân thị băm trứng hạt tiêu mỏng nhuyễn không nhão.",
      "Trải lớp bánh đa đem cuốn thon đều nhẹ tay mỏng vỏ tôm.",
      "Chiên chảo sâu ngập dầu 2 lần chiên thật lửa để vàng rụm dai.",
      "Chấm mắm dấm chanh tỏi chua ngọt ngấu cùng dưa góp thanh mát."
    ],
    "tags": [
      "Món Việt Nam",
      "Dễ làm",
      "Bữa cơm"
    ]
  },
  {
    "title": "Gỏi Cuốn Tôm Thịt",
    "image": "/images/food12.jpg",
    "prepTime": "45 phút",
    "ingredients": [
      "Tôm sú tươi 2 lạng",
      "Thịt ba chỉ luộc trắng",
      "Bún tươi, rau xà lách, hẹ tía",
      "Bánh tráng dày"
    ],
    "steps": [
      "Luộc tôm có chút rượu trắng lột vỏ chẻ đôi lưng. Luộc ba rọi thái mỏng tanh.",
      "Rửa rau xà lách bún non vẩy kiệt để ráo cạn nước.",
      "Thấm ướt bánh tráng trải ra thớt. Xếp rau bùn trước phủ.",
      "Cuộn tiếp với lớp thịt rồi nhấn tôm sú chìa lưng cam ở ngoài mặt cuối bánh lộn lại.",
      "Làm nước xốt tương đen (hoặc mắm nêm), cắm thêm quả đậu giang rang giã đậu phộng."
    ],
    "tags": [
      "Món Việt Nam",
      "Gia đình",
      "Bữa cơm"
    ]
  },
  {
    "title": "Bún Riêu Cua Ngoại",
    "image": "/images/food13.jpg",
    "prepTime": "15 phút",
    "ingredients": [
      "5 lạng cua đồng giã nát xối",
      "Cà chua biên, sấu chua mẻ",
      "Đậu phụ rán giòn",
      "Bún, dọc mùng"
    ],
    "steps": [
      "Lọc mẻ cua lấy xác, đổ nước lã đun nhấc cua cho đóng váng đông tảng gạch vớt riêng ra khay.",
      "Thái cà chua xào hành sấu chưng đỏ quạch.",
      "Đổ vào nồi nước cua, nêm mắm tôm xíu rưới dậy mùi.",
      "Thả đậu phụ rán vàng thả rế. Chan nóng ăn bún sợi dọc mùng xanh mướt mát."
    ],
    "tags": [
      "Món Việt Nam",
      "Dễ làm",
      "Bữa cơm"
    ]
  },
  {
    "title": "Canh Chua Cá Lóc",
    "image": "/images/food14.jpg",
    "prepTime": "30 phút",
    "ingredients": [
      "1 con cá lóc béo",
      "Dọc mùng (bạc hà), đậu bắp",
      "Me chua / dứa, cà chua",
      "Ngò gai mắm ruốc xíu"
    ],
    "steps": [
      "Làm sạch để khúc cá lóc, xào cà chua đổ me dứa cho vớt nước chua.",
      "Nấu nước dầm đổ cá lóc đun tráng bọt. Nêm mắm cốt chanh đường mặn ngọt.",
      "Thả dọc mùng, giá đõ, đậu bắp xanh vặn lửa 3 phút.",
      "Nấu vừa chín tắt nếp rắc ngò gai rau ngổ tỏi phi. Ngon hơn khi chấm nước mắm mặn xoe cay."
    ],
    "tags": [
      "Món Việt Nam",
      "Gia đình",
      "Bữa cơm"
    ]
  },
  {
    "title": "Thịt Luộc Chấm Mắm Nêm",
    "image": "/images/food15.jpg",
    "prepTime": "45 phút",
    "ingredients": [
      "Ba chỉ heo ngon (chỗ rút sườn)",
      "Mắm nêm nguyên cốt",
      "Dứa băm, tỏi ớt, chanh",
      "Bún, dưa leo, ngò"
    ],
    "steps": [
      "Luộc thịt ba chỉ nước muối hạt với lõi hành nướng, xôi 20 phút lấy ra để nguội cho bó da.",
      "Thái miếng mỏng đều thớ ba chỉ.",
      "Pha mắm nêm: Đổ mắm cốt xối với dứa băm xay tỏi ớt đường quậy tăm xèo sủi.",
      "Gói mâm bành cuốn thịt bún dưa chuột ngập vị."
    ],
    "tags": [
      "Món Việt Nam",
      "Dễ làm",
      "Bữa cơm"
    ]
  },
  {
    "title": "Đậu Hũ Sốt Cà Chua",
    "image": "/images/food16.jpg",
    "prepTime": "15 phút",
    "ingredients": [
      "3 bìa đậu non / dậu hũ",
      "2 quả cà chua xay",
      "Hành hoa cọng tím",
      "Dầu chiên"
    ],
    "steps": [
      "Cắt hũ đậu bìa vuông vức rán ngập mỡ vàng nhẹ tay vớt giá gáo.",
      "Sốt cà chua mắm đường, bỏ hạt nêm đun dầm nhuyễn cháo.",
      "Nêm tỏi, trút đậu phụ xào sệt ngấm áo sốt đỏ 3 phút.",
      "Thả gắp hành non thơm mùi lá bắc đĩa vội ăn cơm vội."
    ],
    "tags": [
      "Món Việt Nam",
      "Gia đình",
      "Bữa cơm"
    ]
  },
  {
    "title": "Sườn Xào Chua Ngọt",
    "image": "/images/food17.jpg",
    "prepTime": "30 phút",
    "ingredients": [
      "Sườn nghé non lạng rưỡi",
      "Ớt chuông hành phi",
      "Dấm mắm đường vôi",
      "Tỏi phi giòn"
    ],
    "steps": [
      "Chần nước sườn luộc sấp 5 phút vớt xương rửa nhớt.",
      "Phi hành rán sườn xem xém vảy mỡ.",
      "Trộn 3 muỗng dấm, 2 muỗng đường, xíu mắm đổ xèo xèo vô chảo rim lửa nhò xém cạn dẻo quẹo.",
      "Quệt tỏi lên gắp thơm nức hột mỡ nóng xôi vèo bát cơm đầy."
    ],
    "tags": [
      "Món Việt Nam",
      "Dễ làm",
      "Bữa cơm"
    ]
  },
  {
    "title": "Mực Khổ Chiên Nước Mắm",
    "image": "/images/food18.jpg",
    "prepTime": "45 phút",
    "ingredients": [
      "3 lạng Mực Ống Tươi",
      "Nước mắm nhỉ",
      "Hành tây củ nhỏ",
      "Đường, tiêu đen"
    ],
    "steps": [
      "Rửa mực rượu gừng đập rút túi mục. Cắt từng khoanh khứa đuôi hoa.",
      "Chiên ngập dầu chao nhanh mực sống vớt gấp.",
      "Tạo chảo áo: nước mắm hạt đường tiêu, đun lăng tăn thả mực áo xóc xo le đều tay.",
      "Mực co cứng da thơm lừng tỏi giòn là nhậu xực nách."
    ],
    "tags": [
      "Món Việt Nam",
      "Gia đình",
      "Bữa cơm"
    ]
  },
  {
    "title": "Tôm Rim Ba Chỉ",
    "image": "/images/food19.jpg",
    "prepTime": "15 phút",
    "ingredients": [
      "1,5 lạng Tôm Rảo sông",
      "1 lạng Ba Rọi",
      "Hành lá khô tước",
      "Đường dầu màu"
    ],
    "steps": [
      "Xào ba chỉ heo cháy góc chắt mỡ béo.",
      "Cho rảo tôm nhỏ xuống đỏ au gạch, ướp đường đun chao xoáy sệt nước.",
      "Rưới thìa mắm tạo mùi khê khê. Vặn lửa 3 dạo rút cạn keo đen nhánh đường viền.",
      "Rang thêm tiêu nén lá ngò."
    ],
    "tags": [
      "Món Việt Nam",
      "Dễ làm",
      "Bữa cơm"
    ]
  },
  {
    "title": "Cà Tím Nhồi Thịt",
    "image": "/images/food20.jpg",
    "prepTime": "30 phút",
    "ingredients": [
      "2 Quả cà tím dài mỡ màng",
      "Thịt lợn nạc vai băm",
      "Hành, nấm hương, trứng",
      "Sốt dầu hào tương cà"
    ],
    "steps": [
      "Khoét nhẹ ruột dọc sóng lưng cà tím, ngâm muối để không thâm xỉm.",
      "Trộn nhồi nhân thịt nấm mộc nhĩ dậm ép đầy thân cà tím nèn chạt.",
      "Chiên áp chảo xém mặt nhân cà mềm dai, xối nước sốt xì dầu tương ướt sền sệt rim 10 phút.",
      "Bày cạn dĩa rắc ngò gai mướt mát đậm vị xới cơm."
    ],
    "tags": [
      "Món Việt Nam",
      "Gia đình",
      "Bữa cơm"
    ]
  },
  {
    "title": "Gà Kho Sả Ớt",
    "image": "/images/food21.jpg",
    "prepTime": "45 phút",
    "ingredients": [
      "Nửa con gà nòi",
      "Sả băm đập dập 3 cây lớn",
      "Ớt sừng, tỏi khô",
      "Mắm ngon, muối ngot"
    ],
    "steps": [
      "Chặt gà miếng vừa miệng nhai. Ướp tỏi ớt sừng đập nát để vị.",
      "Phi xoong mỡ sả xào xè xè vàng lên màu.",
      "Trút gà vào xào săn khịt, nêm mắm muối, đổ độ lưng bát nước đun nắp khép.",
      "Cạn nước rim mặt gà kẹo dầu mỡ bóng loáng mướt lá xả cay khè là đạt gác bếp."
    ],
    "tags": [
      "Món Việt Nam",
      "Dễ làm",
      "Bữa cơm"
    ]
  },
  {
    "title": "Bò Lúc Lắc",
    "image": "/images/food22.jpg",
    "prepTime": "15 phút",
    "ingredients": [
      "Thăn bò mềm 3 lạng",
      "Ớt chuông xanh đỏ 3 góc",
      "Hành tây tỏi viên",
      "Xì dầu bơ nhạt bơ pháp"
    ],
    "steps": [
      "Vuông vức miếng bò xúc xắc, ướp mắm tỏi dầu hào dầu mè thấm 15p.",
      "Thái ớt chuông hạt lựu. Đảo vừa xém chảo ra rổ.",
      "Cho bò chảo dập lửa lửa bốc (Lâm bê). Đảo nhanh bò chín lòng hồng đọng nước ngọt.",
      "Thả bơ thơm ngát cùng ớt viên vào, lắc chảo rào rào trút đĩa 1 phút trút ra mâm củ."
    ],
    "tags": [
      "Món Việt Nam",
      "Gia đình",
      "Bữa cơm"
    ]
  },
  {
    "title": "Mắm Kho Quẹt",
    "image": "/images/food23.jpg",
    "prepTime": "30 phút",
    "ingredients": [
      "Tôm khô nõn bóc",
      "Ba rọi thái hạt lựu mỡ",
      "Hành tỏi tiêu xanh hạt lựu",
      "Mắm nhũ đường tán"
    ],
    "steps": [
      "Rim áp chảo tóp mỡ vàng rụm vớt mỡ dồn đĩa riệng.",
      "Ngâm tôm khô thả đun sôi đường nước mắm đặc quánh như mật đun lửa ruồi.",
      "Trộn đảo tóp mỡ tiêu khô vào, rim mặn ngọt keo xôi đất nồi đất mẻ.",
      "Quẹt dưa leo, khổ qua luộc nách rát lưỡi chấm giọt trọn ngót."
    ],
    "tags": [
      "Món Việt Nam",
      "Dễ làm",
      "Bữa cơm"
    ]
  },
  {
    "title": "Trứng Rán Ngải Cứu",
    "image": "/images/food24.jpg",
    "prepTime": "45 phút",
    "ingredients": [
      "Lá ngải non, ngọn phớt chát",
      "3 quả gà so trứng lạt",
      "Hạt nêm, tiêu sọ, mắm",
      "Dầu nóng vàng"
    ],
    "steps": [
      "Thái lún vụn ngải cứu vò nhũn để phai vị đắng.",
      "Đập hột trứng đánh tan bọt khí. Xáo ngải xào đều xèo.",
      "Chảo dầu tráng trơn giòn lòng đều. Rót trứng dàn bánh trứng dẹt tròn chiên chín xốp.",
      "Lật trứng không nát nhừ 1 phút vớt bày mâm vuông xắt miếng như pizza."
    ],
    "tags": [
      "Món Việt Nam",
      "Gia đình",
      "Bữa cơm"
    ]
  },
  {
    "title": "Đậu Cô Ve Luộc",
    "image": "/images/food25.jpg",
    "prepTime": "15 phút",
    "ingredients": [
      "Đậu đỗ tây (cô ve) 200g",
      "Vừng mè rang muối",
      "Dầu olive (tuỳ thích)",
      "Nước tỏi cất"
    ],
    "steps": [
      "Tước xơ già sống chẻ đôi hạt mướt.",
      "Nhiệt rảo nước bùng. Thả đậu xanh luộc 3-4 phút dìm nước lạnh có muối hạt cho giòn mướt xanh ngọc.",
      "Vớt để rảo khô nhún đĩa.",
      "Rang vừng đâm xơ ướp thính nước tỏi rẩy trộn đậu lạt, thuần mặn mồ hôi tự nhiên."
    ],
    "tags": [
      "Món Việt Nam",
      "Dễ làm",
      "Bữa cơm"
    ]
  },
  {
    "title": "Cá Rô Kho Tộ",
    "image": "/images/food26.jpg",
    "prepTime": "30 phút",
    "ingredients": [
      "Cá rô vện (cá đồng) nhỏ",
      "Hành hoa củ sả",
      "Tiêu hạt đường đen mắm",
      "Khế chua lát mỏng kho dấm"
    ],
    "steps": [
      "Móc mật làm tanh cá. Xếp đáy xoong khế chua lát tạo lớp áo.",
      "Xếp ươm cá nêm 4 muỗng nước mắm giọt 2 thìa tiêu khô giã nhỏ hạt.",
      "Để tĩnh sừng đường đen. Bắc nồi đun bật mỡ.",
      "Hạ nhò thật nấc cạn lóng mắm sôi vẩy cá dai cạn nẻ đĩa cưa nồi vặn lửa láng mỡ xém đuôi."
    ],
    "tags": [
      "Món Việt Nam",
      "Gia đình",
      "Bữa cơm"
    ]
  },
  {
    "title": "Đậu Phụ Nhồi Thịt",
    "image": "/images/food27.jpg",
    "prepTime": "45 phút",
    "ingredients": [
      "Đậu hũ thạch dày 4 miếng",
      "Nấm hương rôm. Thịt xay",
      "Cà chua sệt rảo non",
      "Mắm đường nêm hạt"
    ],
    "steps": [
      "Mổ nắp nạo xíu lõi đậu trắng tinh thơm. Nhồi thịt nấm tỏi mộc nhĩ trén nêm ứ nhân lồi nhện.",
      "Dán khẽ mặt nhồi thịt lúp xụp trong mỡ vàng rảo xém nhạt cạnh.",
      "Ướt cà chua sốt nấm xì bọt, đổ đậu rim hờ sũng gạch vị cháo.",
      "Nhấc đặt lên ngò sả phia xoi ừng ực."
    ],
    "tags": [
      "Món Việt Nam",
      "Dễ làm",
      "Bữa cơm"
    ]
  },
  {
    "title": "Nộm Hoa Chuối",
    "image": "/images/food28.jpg",
    "prepTime": "15 phút",
    "ingredients": [
      "Bắp chuối tây nón đỏ",
      "Tai lợn luộc khía mòng",
      "Lạc rang chanh tỏi",
      "Đường dấm mắm xiêm"
    ],
    "steps": [
      "Thái lén bắp phiến chuối mỏng như dao bào xoáy dừa. Ngâm mẻ dấm trong lót nhựa thâm đen trắng giòn phới.",
      "Lấy thịt tai nhai nhũn vắt mỏng, khía tai. Lạc đập dập thơm rụng xôi.",
      "Xoi nước cốt chanh đường mắm cốt trộn nộm đảo bóp hờ nhẹ tránh nát cháo chẻ.",
      "Vãi thơm bò đậu nhậu khai vị mát gan xé lưỡi mặn."
    ],
    "tags": [
      "Món Việt Nam",
      "Gia đình",
      "Bữa cơm"
    ]
  },
  {
    "title": "Lẩu Gà Lá Giang",
    "image": "/images/food29.jpg",
    "prepTime": "30 phút",
    "ingredients": [
      "Gà nòi/ Gà tre non",
      "Lá giang rừng vò nhàu",
      "Sả thái lát, ớt nén",
      "Rau đắng ngổ nêm"
    ],
    "steps": [
      "Cạo rửa gà xương lốc thăn nấu nước khía thơm sả riềng đảo nén mỡ tỏi nhét.",
      "Xào gà săn chằng nhện đổ lẩu đun xôi dạn vung lót rảo nước dùng váng mỡ vàng trứng vữa.",
      "Lá giang tuốt vò nát nhào tay đổ ục vào tạo chua dịu thét ruột sảng vị thơm nồng bay mướt.",
      "Nhúng rau đắng ăn kèm bún nhão nước vã xoài sống nách."
    ],
    "tags": [
      "Món Việt Nam",
      "Dễ làm",
      "Bữa cơm"
    ]
  },
  {
    "title": "Cháo Gà Hạt Sen",
    "image": "/images/food30.jpg",
    "prepTime": "45 phút",
    "ingredients": [
      "Rập gạo lứt xay nhuyễn",
      "Thăn gà xé lông ngực",
      "Hạt sen tươi bó mẩy",
      "Mắm cốt hạt tiêu ớt hành mùi"
    ],
    "steps": [
      "Nấu cháo nhừ dẻo đặc thơm mùi rạ cạn gậy ngọc nát cháo.",
      "Gà luộc xé miếng tơi dạn dầy sợi rải đều khay dọn lán.",
      "Hầm hạt sen tới nhúng sụn thả vào cháo đơm nhát lướt bát rảo cháo chẻ vị.",
      "Rắc hành ngò thơm nức sáo hột tiêu bay róc bát ốm yếu quật dậy khỏi gường lúc."
    ],
    "tags": [
      "Món Việt Nam",
      "Gia đình",
      "Bữa cơm"
    ]
  },
  {
    "title": "Thịt Bò Xào Cần Tây",
    "image": "/images/food31.jpg",
    "prepTime": "15 phút",
    "ingredients": [
      "300g thịt bò nạc",
      "1 bó cần tây, hành tây",
      "Tỏi băm, dầu hào",
      "Gia vị, hạt tiêu"
    ],
    "steps": [
      "Thái mỏng thịt bò, ướp với dầu hào, tỏi, hạt tiêu 15 phút.",
      "Rửa sạch cần tây, cắt khúc. Hành tây bổ múi cau.",
      "Phi thơm tỏi, xào thịt bò nanh trên lửa lớn cho tái rồi trút ra đĩa.",
      "Cho hành tây và cần tây vào xào nhanh, nêm chút gia vị.",
      "Đổ bò lại vào chảo xào đều trong 1 phút là tắt bếp. Món xào đậm đà, thơm nức."
    ],
    "tags": [
      "Món Việt Nam",
      "Dễ làm",
      "Bữa cơm"
    ]
  },
  {
    "title": "Cá Chép Chiên Xù",
    "image": "/images/food32.jpg",
    "prepTime": "30 phút",
    "ingredients": [
      "1 con cá chép cỡ 1kg",
      "Dầu ăn",
      "Nước mắm, tỏi, ớt, chanh",
      "Thì là, ngò gai"
    ],
    "steps": [
      "Làm sạch cá chép, để ráo nước, có thể khứa nhẹ trên mình cá.",
      "Đun chảo ngập dầu nóng già.",
      "Thả cá chép vào chiên vàng giòn hai mặt, vớt ra đĩa lót giấy thấm dầu.",
      "Pha mắm tỏi ớt chanh chua ngọt để chấm cá.",
      "Thưởng thức khi vỏ cá vàng rụm, thịt cá trắng ngần, chấm ngập mắm chua ngọt."
    ],
    "tags": [
      "Món Việt Nam",
      "Gia đình",
      "Bữa cơm"
    ]
  },
  {
    "title": "Canh Ngao Nấu Chua",
    "image": "/images/food33.jpg",
    "prepTime": "45 phút",
    "ingredients": [
      "1kg ngao tươi",
      "Dứa(thơm), cà chua, dọc mùng",
      "Hành khô, rau răm, rau ngổ",
      "Nước mắm, bột nêm"
    ],
    "steps": [
      "Luộc ngao nhặt lấy ruột, giữ lại phần nước luộc gạn cặn.",
      "Phi hành xào cà chua và ngao cho thơm.",
      "Đổ nước luộc ngao vào nồi, thêm mấy lát thơm cắt mỏng đun sôi.",
      "Thả dọc mùng, đun sôi lại, thả rau răm ngổ cắt nhỏ vào rồi tắt bếp.",
      "Canh có vị ngọt thanh của ngao, chua dịu của dứa, rất đưa cơm."
    ],
    "tags": [
      "Món Việt Nam",
      "Dễ làm",
      "Bữa cơm"
    ]
  },
  {
    "title": "Mướp Đắng Xào Giá",
    "image": "/images/food34.jpg",
    "prepTime": "15 phút",
    "ingredients": [
      "2 quả mướp đắng (khổ qua)",
      "150g giá đỗ",
      "Hành lá",
      "Dầu ăn, gia vị"
    ],
    "steps": [
      "Mướp đắng thái mỏng, lược bớt ruột. Giá đỗ rửa sạch.",
      "Phi thơm hành, cho mướp đắng vào xào nhanh.",
      "Mướp đắng vừa chín tới, đổ giá đỗ vào xào cùng thêm vài vòng.",
      "Nêm gia vị vừa ăn rồi cho hành lá vào đảo đều tắt bếp.",
      "Món ăn thanh mát, vị đắng dịu xen lẫn vị ngọt giòn."
    ],
    "tags": [
      "Món Việt Nam",
      "Gia đình",
      "Bữa cơm"
    ]
  },
  {
    "title": "Chả Lá Lốt Thịt Băm",
    "image": "/images/food35.jpg",
    "prepTime": "30 phút",
    "ingredients": [
      "300g thịt nạc vai băm",
      "1 nắm lá lốt tươi",
      "Hành khô, tiêu sọ",
      "Nước mắm, mỡ nước"
    ],
    "steps": [
      "Lá lốt xắt nhỏ một ít trộn vào thịt băm cùng hành, nước mắm, tiêu.",
      "Chọn những lá lốt to đẹp, gói thịt thành từng cuộn nhỏ mập mạp.",
      "Bắc chảo dầu nóng, rán chả trên lửa vừa để thịt bên trong mềm chín.",
      "Khi lá bọc ngoài chuyển màu xém xanh đen và tỏa mùi thơm nức thì vớt ra.",
      "Chả chín thơm lừng, chấm với nước mắm pha tỏi ớt rất ngon."
    ],
    "tags": [
      "Món Việt Nam",
      "Dễ làm",
      "Bữa cơm"
    ]
  },
  {
    "title": "Chè Trôi Nước",
    "image": "/images/food36.jpg",
    "prepTime": "45 phút",
    "ingredients": [
      "Bột nếp 200g",
      "Đậu xanh xát vỏ 100g",
      "Đường thốt nốt, gừng tươi",
      "Nước cốt dừa, vừng rang"
    ],
    "steps": [
      "Đậu xanh hấp chín, giã nhuyễn sên với chút đường làm nhân viên viên tròn.",
      "Nhào bột nếp với nước ấm tới khi dẻo mịn.",
      "Bọc bột bên ngoài nhân đậu xanh, vo tròn kín tay.",
      "Nấu nước đường với gừng thái sợi, thả từng viên trôi nước vào, luộc tới khi nổi lên.",
      "Múc ra bát, dội nước cốt dừa và rắc vừng rang lên."
    ],
    "tags": [
      "Món Việt Nam",
      "Gia đình",
      "Bữa cơm"
    ]
  },
  {
    "title": "Lòng Lợn Xào Dưa",
    "image": "/images/food37.jpg",
    "prepTime": "15 phút",
    "ingredients": [
      "300g lòng non và dạ dày",
      "1 củ dưa chua (cải bẹ chua)",
      "Hành khô, cà chua",
      "Dầu ăn, nước mắm"
    ],
    "steps": [
      "Lòng lợn làm sạch kỹ bằng dấm và muối, thái miếng vừa ăn.",
      "Phi thơm hành, xào cà chua và dưa chua trước cho ngấm gia vị.",
      "Trút lòng lợn vào xào chung thật nhanh tay ở lửa lớn.",
      "Nêm nếm cho vừa miệng, rắc chút hành lá, hạt tiêu.",
      "Lòng giòn sần sật quyện vị chua dịu của dưa ăn rất tốn cơm."
    ],
    "tags": [
      "Món Việt Nam",
      "Dễ làm",
      "Bữa cơm"
    ]
  },
  {
    "title": "Bánh Tráng Trộn",
    "image": "/images/food38.jpg",
    "prepTime": "30 phút",
    "ingredients": [
      "Bánh tráng cắt sợi",
      "Khô bò, mắm ruốc non",
      "Xoài xanh bào, rau răm",
      "Trứng cút, tắc (quất), sa tế"
    ],
    "steps": [
      "Bào sợi xoài xanh, luộc trứng cút bóc vỏ.",
      "Cho bánh tráng, tôm khô bò, xoài, rau răm vào thau lớn.",
      "Pha tương sa tế, muối tôm, quất vắt nước trộn đều.",
      "Đeo bao tay trộn nhẹ tránh nát bánh. Thả thêm đậu phộng rang dập.",
      "Món ăn vặt thơm ngon, chua cay mặn ngọt bùng nổ."
    ],
    "tags": [
      "Món Việt Nam",
      "Gia đình",
      "Bữa cơm"
    ]
  },
  {
    "title": "Gà Rang Muối",
    "image": "/images/food39.jpg",
    "prepTime": "45 phút",
    "ingredients": [
      "500g gà đùi hoặc cánh",
      "Bột gạo nếp rang xay mịn",
      "Sả, lá chanh",
      "Dầu ăn, muối hạt, tiêu"
    ],
    "steps": [
      "Chặt gà miếng vừa ăn, luộc sơ để thịt săn lại.",
      "Lăn gà qua bột năng mỏng, chiên giòn rụm trong chảo ngập dầu.",
      "Gắp gà ra, trộn nóng với hỗn hợp muối rang (gạo nếp rang, đỗ xanh xát xay).",
      "Chiên vàng lá chanh và sả xé sợi rồi trộn cùng gà.",
      "Thịt gà ngoài giòn trong mềm, vị mặn nhẹ bùi bùi."
    ],
    "tags": [
      "Món Việt Nam",
      "Dễ làm",
      "Bữa cơm"
    ]
  },
  {
    "title": "Canh Sườn Nấu Sấu",
    "image": "/images/food40.jpg",
    "prepTime": "15 phút",
    "ingredients": [
      "300g sườn non",
      "5 quả sấu xanh",
      "Cà chua, hành hoa",
      "Gia vị"
    ],
    "steps": [
      "Chần sườn lợn qua nước sôi cho sạch, vớt ra rửa lại.",
      "Ninh sườn trong 20 phút. Thêm sấu dập sơ và cà chua xào qua vào.",
      "Khi sấu nhừ, dầm nhẹ sấu ra nước canh, nêm nếm gia vị vừa miệng.",
      "Rắc hành lá thái nhỏ và mùi tàu vào, tắt bếp ngay.",
      "Vị canh chua thanh, sườn mềm ngọt ăn giải nhiệt ngày hè."
    ],
    "tags": [
      "Món Việt Nam",
      "Gia đình",
      "Bữa cơm"
    ]
  },
  {
    "title": "Bắp Cải Cuộn Thịt",
    "image": "/images/food41.jpg",
    "prepTime": "30 phút",
    "ingredients": [
      "1 bắp cải xanh",
      "200g thịt xay",
      "Mộc nhĩ, nấm hương xay",
      "Hành lá, gia vị"
    ],
    "steps": [
      "Thái gốc bắp cải, tách từng lá nguyên vẹn rụng, chần qua nước xôi cho mềm.",
      "Nhồi nhân: Trộn thịt băm với nấm hương, mộc nhĩ hành củ gia vị.",
      "Trải lá bắp cải ra, xúc 1 thìa nhân gói lại, dùng cọng hành chần buộc nhẹ.",
      "Hấp những cuộn bắp cải trong 15-20 phút cho thịt bên trong chín.",
      "Ăn rất thanh đạm, cuốn miếng bắp cải ngọt mềm, nhân sần sật."
    ],
    "tags": [
      "Món Việt Nam",
      "Dễ làm",
      "Bữa cơm"
    ]
  },
  {
    "title": "Cà Cuống Chiên Giòn",
    "image": "/images/food42.jpg",
    "prepTime": "45 phút",
    "ingredients": [
      "200g cà cuống (nếu có) hoặc tôm nhỏ",
      "Bột chiên giòn",
      "Dầu ăn",
      "Tương ớt"
    ],
    "steps": [
      "Rửa sạch thực phẩm tươi mỏng, để tĩnh cho ráo hẳn nước.",
      "Pha bột chiên giòn với chút nước tạo độ sệt như kem lỏng.",
      "Nhúng đồ tươi vào bột, thả vào chảo dầu sôi chiên.",
      "Vớt ra giấy thấm dầu khi lớp áo từ bột ngả màu vàng cánh gián.",
      "Ăn lúc còn nóng với tương ớt để cảm nhận độ giòn rụm."
    ],
    "tags": [
      "Món Việt Nam",
      "Gia đình",
      "Bữa cơm"
    ]
  },
  {
    "title": "Chả Mực Hạ Long",
    "image": "/images/food43.jpg",
    "prepTime": "15 phút",
    "ingredients": [
      "500g mực mai tươi dày",
      "Hút hành khô, bột nếp",
      "Nước mắm ngon, tiêu",
      "Mỡ lợn phần"
    ],
    "steps": [
      "Thái hạt lựu một phần thân mực, phần vây và râu mực đem xay dối.",
      "Giã tay thủ công phần tôm với mỡ lợn để chả dai giòn sần sật chứ không bở.",
      "Nêm xíu mắm, hạt tiêu, vo tròn hình bánh tráng dẹp.",
      "Chiên vàng chảo dầu nhỏ lửa đến khi chả phồng lên thơm mùi biển.",
      "Dùng với xôi trắng hoặc bún, rưới thêm tương ớt trứ danh."
    ],
    "tags": [
      "Món Việt Nam",
      "Dễ làm",
      "Bữa cơm"
    ]
  },
  {
    "title": "Canh Khổ Qua Nhồi Thịt",
    "image": "/images/food44.jpg",
    "prepTime": "30 phút",
    "ingredients": [
      "3 quả khổ qua (mướp đắng)",
      "200g thịt nạc dăm xay",
      "Mộc nhĩ, miến",
      "Hành ngò, tiêu tỏi"
    ],
    "steps": [
      "Cắt mướp đắng làm đôi, móc ruột, chần nước sôi cho bớt đắng.",
      "Trộn nhân thịt băm, mộc nhĩ, miến xắt nhỏ với gia vị đậm đà.",
      "Nhồi nhân vào từng khúc khổ qua sao cho thật chặt.",
      "Nấu với nước luộc gà dầm hoặc nước trong khoảng 30. Nêm hạt nêm.",
      "Khổ qua mềm thanh không quá đắng, thịt dai giăng giòn."
    ],
    "tags": [
      "Món Việt Nam",
      "Gia đình",
      "Bữa cơm"
    ]
  },
  {
    "title": "Miến Trộn Hàn/Việt",
    "image": "/images/food45.jpg",
    "prepTime": "45 phút",
    "ingredients": [
      "200g miến dong xịn",
      "100g thịt lợn thái sợi",
      "Rau cải ngọt, cà rốt",
      "Xì dầu, dầu mè, đường"
    ],
    "steps": [
      "Ngâm miến cho mềm bớt, chần nhanh qua xôi nước nóng rồi xả với chậu đá.",
      "Cà rốt xắt sợi, rau cải chần sơ, vớt ráo.",
      "Xào thịt cùng nấm hương, xào cà rốt nêm xì dầu nhạt.",
      "Trộn miến, rau, thịt với hỗn hợp nước sốt (xì dầu, đường, dầu mè, tỏi phi).",
      "Sợi miến dai mềm, đậm màu, quyện hương dầu mè rất ngậy."
    ],
    "tags": [
      "Món Việt Nam",
      "Dễ làm",
      "Bữa cơm"
    ]
  },
  {
    "title": "Nem Nướng Thanh Hóa",
    "image": "/images/food46.jpg",
    "prepTime": "15 phút",
    "ingredients": [
      "Thịt lợn nac dăm, mỡ màng",
      "Thính gạo, lá đinh lăng",
      "Tỏi lát, ớt, lá chuối",
      "Mắm ngon, muối"
    ],
    "steps": [
      "Xay thịt và mỡ quyện thật dẻo, trộn cùng thính tỏi tiêu thính.",
      "Vo thành những viên nâm dạng ống trụ tròn, cuộn mỡ chài bên ngoài.",
      "Xiên nâm đem nướng trên bếp than hồng rực, xoay đều cho mỡ chảy xèo.",
      "Thịt xém ngoài, mọng nước trong, cuộn lá đinh lăng chấm tương ớt.",
      "Vị nâm mềm, chua nhẹ, tỏi nồng, ngon khó cưỡng."
    ],
    "tags": [
      "Món Việt Nam",
      "Gia đình",
      "Bữa cơm"
    ]
  },
  {
    "title": "Gò Cua Đu Đủ Xanh",
    "image": "/images/food47.jpg",
    "prepTime": "30 phút",
    "ingredients": [
      "1 quả đu đủ xanh to",
      "200g thịt cua biển hấp",
      "Cà rốt, ngò rí, đậu phộng rang",
      "Chanh, đường, nước mắm"
    ],
    "steps": [
      "Bào sợi đu đủ xanh và cà rốt, ngâm nước đá loãng cho thật giòn, vắt ráo.",
      "Làm nước trộn gỏi: Pha mắm, đường, nước cốt chanh dầm với tỏi ớt.",
      "Gắp cua, đu đủ vào thau, rưới nước trộn vào và bóp nhẹ.",
      "Xếp ra đĩa, rắc rau ngò và đậu phộng nát lên trên.",
      "Ăn kèm phồng tôm, vị chua cay mặn đậm giòn cực nách."
    ],
    "tags": [
      "Món Việt Nam",
      "Dễ làm",
      "Bữa cơm"
    ]
  },
  {
    "title": "Bánh Bèo Chén",
    "image": "/images/food48.jpg",
    "prepTime": "45 phút",
    "ingredients": [
      "Bột gạo 200g",
      "Tôm cháy (tôm khô làm nhuyễn)",
      "Mỡ hành, tóp mỡ",
      "Mắm ngọt"
    ],
    "steps": [
      "Hòa bột gạo với nước, khuấy thật nhẹ cho tan, đợi 15 phút.",
      "Đổ bột vào từng chén sành nhỏ, hấp trên hơi nước bốc lên xôi khoảng 5 phút.",
      "Chín trắng đục, khoét lỗ lõm nhỏ. Rắc tôm chà xé, tóp mỡ, quết xíu mỡ hành.",
      "Chan nước mắm mặn ngọt thơm ớt lên rồi thưởng thức ngay.",
      "Mềm mịn, béo ngậy khó lòng dừng ở chén thứ 5."
    ],
    "tags": [
      "Món Việt Nam",
      "Gia đình",
      "Bữa cơm"
    ]
  },
  {
    "title": "Chả Cá Lã Vọng",
    "image": "/images/food49.jpg",
    "prepTime": "15 phút",
    "ingredients": [
      "Phi lê cá lăng/cá quả",
      "Riềng, Mẻ, Mắm tôm",
      "Thì là, mắm nêm, bún tươi",
      "Lạc rang, hành chẻ"
    ],
    "steps": [
      "Ướp cá phi lê với riềng, mẻ, mắm tôm, xíu mỡ nghệ để thịt mềm.",
      "Nướng thả kẹp cá trên than hoa sơ qua cho se vàng xém cạnh.",
      "Lấy chảo láng dầu, rải ngập hành lá và thì là cắt khúc. Cho cá lên áp lại.",
      "Gắp bún tươi, gắp cá kẹp chung hành thì là xèo cháy, rắc lạc rang.",
      "Chấm mắm tôm đánh bọt tơi bồng vị khó quên."
    ],
    "tags": [
      "Món Việt Nam",
      "Dễ làm",
      "Bữa cơm"
    ]
  },
  {
    "title": "Bò Nhúng Dấm",
    "image": "/images/food50.jpg",
    "prepTime": "30 phút",
    "ingredients": [
      "500g bò bắp, bò thăn thái lát",
      "Nước dừa tươi, dấm gạo",
      "Thơm, sả, hành tây",
      "Bánh tráng, rau rừng mát"
    ],
    "steps": [
      "Pha nước lẩu: Dừa tươi, dấm, đường, dứa dầm, sả cuống gốc tạo nồi chua kẹo.",
      "Thái bò tươi càng mỏng càng tái ngon.",
      "Chuẩn bị mâm rau, dưa leo xắt bẹt. Đun nồi nước lẩu dấm sôi sùng sục.",
      "Nhúng miếng bò tái cong tròn, cuốn với rau bánh tráng, chấm mắm nêm tỏi.",
      "Ngọt bò, chua dấm cắn ngập miệng xốc nách."
    ],
    "tags": [
      "Món Việt Nam",
      "Gia đình",
      "Bữa cơm"
    ]
  }
];
