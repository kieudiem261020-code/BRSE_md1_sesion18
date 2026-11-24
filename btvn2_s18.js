//=== Bai 1:
let products = [
    {id: 1, name: "Milk", count: 100},
    {id: 2, name: "Organe", count: 100},
    {id: 3, name: "Butter", count: 100},
];
//them
products.push({ id: 4, name: "Bread", count: 50});
//xoa
products = products.filter((item) => item.id !== 2);
// tim
const item3 = products.find((item) => item.id === 3);
if (item3) item3.count = 0;
// tu khoa Butter
const found = products.find((item) => item.name === "Butter");
console.log(found ? found : "Không có dữ liệu bạn tìm kiếm");
//=== Bai 2
let courses = [
    { id: 1, name: "HTML", complete: false},
    { id: 2, name: "CSS", complete: false},
    { id: 3, name: "Basic of javascript", complete: false},
    { id: 4, name: "Node package Manager (npm)", complete: false}, 
    { id: 5, name: "Git", complete: false},
];
//In
function printCourses() {
    courses. forEach((c, index) =>{
        console.log('${index + 1}. ${c.name}');
        console.log('Complete: ${c.complete}');
    });
}
printCourses();
while (true) {
    const choice = (prompt("Nhập C / R / U / D / E:") || "").trim().toUpperCase();
    if (choice === "C") {
        const name = prompt ("Nhập tên khoá học mới:");
        const complete = prompt ("Trạng thái hoàn thành (true/flase):") === "true";
        if (name) {
            courses.push({ id: Date.now(), name, complete});
            printCourses();
        }
    } else if (choice === "R") {
        printCourses();
    } else if (choice === "U") {
        const index = Number(prompt("Nhập vị trí khoá học muốn update (1, 2...):")) - 1;
        if (courses[index]) {
            courses[index].name = prompt("Tên khoá học mới:", courses[index].name) || courses[index].name;
            courses[index].complete = prompt("Trạng thái mới (true/false):", courses[index].complete) === "true";
            printCourses();
        } else {
            alert ("Vị trí không tồn tại!");
        }
    } else if (choice ==="D") {
        const index = Number(prompt("Nhập vị trí khoá học muốn xoá (1, 2...):")) -1;
        if (courses[index]) {
            courses.splice(index, 1);
            printCourses();
        } else {
            alert(" Vị trí không tồn tại!");
        }
    } else if (choice === "E") {
        alert("Cảm ơn bạn đã đến với Rikkei Academy");
        break;
    }
}