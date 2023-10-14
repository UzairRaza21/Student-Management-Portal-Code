
import chalkAnimation, { rainbow } from "chalk-animation";
import inquirer from "inquirer";
import chalk from "chalk";
import { log } from "console";


class Person {
    name: string;
    age: number;

    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }
    getName(){
        return this.name
    }
}

class Student extends Person{
    rollNumber :string;
    courses:Course[] = [];

    constructor(name:string, age: number, rollNumber : string){
        super(name, age);
        this.rollNumber= rollNumber;
    }
    registerForCourse(course:Course){
        this.courses.push(course)
    }
}

class Instructor extends Person{
    private salary: number;
    courses:Course []= [];
    constructor(name:string, age:number, salary:number){
        super(name, age);
        this.salary = salary
    }
    assignCourse(course:Course){
        this.courses.push(course)
    }
}

class Course {
    id: string;
    name: string;
    students: Student[] = [];
    instructor!: Instructor;
    constructor(id:string, name: string){
        this.id = id;
        this.name = name;
    }
    addStudent(student: Student, ){
        this.students.push(student)
        student.registerForCourse(this)
    }
    setInstructor(instructor: Instructor){
        this.instructor = instructor
        instructor.assignCourse(this)
    }
}

class Department{
    name: string;
    courses: Course[] = [];
    constructor(name:string){
        this.name = name;
    }
    addCourse(course:Course){
        this.courses.push(course)
    }
}



const student1 = new Student ("uzair", 30, "12345")
const instructor1 = new Instructor("Zia", 70, 400000)
const course1 = new Course("course1", "Javascript")
const department1 = new Department ("Computer Science");
department1.addCourse(course1)


course1.addStudent(student1);
course1.setInstructor(instructor1);
console.log(course1)
