class Student{
     name:string;
     age:number;
     

     constructor(name:string, age:number) {
          this.name = name;
          this.age = age;
     }

     getStudent(){
          console.log("Student => Name: "+ this.name +" Age: "+ this.age)
     }
}

// create instance of our class
let student1 = new Student("Baby Yoda", 5);
student1.getStudent();