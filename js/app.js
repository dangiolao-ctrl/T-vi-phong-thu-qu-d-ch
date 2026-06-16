function capNhatThoiGian(){

const now=new Date();

const thu=[
"Chủ Nhật",
"Thứ Hai",
"Thứ Ba",
"Thứ Tư",
"Thứ Năm",
"Thứ Sáu",
"Thứ Bảy"
];

let ngay=
String(now.getDate()).padStart(2,"0");

let thang=
String(now.getMonth()+1).padStart(2,"0");

let nam=
now.getFullYear();

let gio=
String(now.getHours()).padStart(2,"0");

let phut=
String(now.getMinutes()).padStart(2,"0");

let giay=
String(now.getSeconds()).padStart(2,"0");

document.getElementById("dongho").innerHTML=
`
📅 ${thu[now.getDay()]}
<br>
🗓️ ${ngay}/${thang}/${nam}
<br>
🕒 ${gio}:${phut}:${giay}
`;

}

capNhatThoiGian();

setInterval(
capNhatThoiGian,
1000
);
