//Bài 1: tạo đối tượng một người và truy xuất thuộc tính
const person ={
    name: "Nguyen Van An",
    age: 25,
    address: "Tokyo, Japan",
    phone: "0901234567"
};
console.log("Bai 1:",person.name, person.age, person.address, person.phone);
//Bai 2: Tao student, newStudent, đưa vào mảng students và truy xuất newStudent
const student = {
    id: 1,
    name: "Nguyen Van An",
    gender: "nam",
    age: 20,
    mark: 8,
};
const newstudent = {
    id: 2,
    name: "Tran Thi B",
    gender: "nu",
    age: 21,
    mark: 9.5,

};
const students = [student, newstudent];
console.log("Bai 2 - newStudent:", students[1]);
console.log(
    students [1].id,
    students[1].name,
    students[1].gender,
    students[1].age,
    students[1].mark
);
//Bai 3: 
let topStudent = students[0];
for (const s of students) {
    if (s.mark > topStudent.mark){
        topStudent = s;
    }
}
console.log("Bai 3 - Học sinh điểm cao nhất:", topStudent);

