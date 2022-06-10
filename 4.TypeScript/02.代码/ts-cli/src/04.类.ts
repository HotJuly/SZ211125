(function(){

    // class Person{
    //     public name:string;
    //     protected phone:number;
    //     private age:number;

    //     constructor(name:string,age:number,phone:number){
    //         this.name = name;
    //         this.age = age;
    //         this.phone = phone;
    //     }

    //     say(content){
    //         console.log(content);
    //         console.log(this.age);
    //     }
    // }

    // class Student extends Person{
    //     readonly price:number;

    //     constructor(name:string,age:number,phone:number,price:number){
    //         super(name,age,phone);
    //         this.price = price;
    //     }

    //     sayAge(){
    //         // console.log(this.age);
    //         console.log(this.phone)
    //     }
    // }
    

    // const s1 = new Student("xiaoming",18,177777777,1);

    // console.log(s1.name);
    // console.log(s1.age);
    // console.log(s1.phone);
    // s1.price += 1000;


    // interface IPerson{
    //     eat:(food:string)=>void
    // }

    abstract class A{
        abstract eat:(food:string)=>void;

        sayTitle(title){
            console.log(title);
        }
    }
    
    class Person extends A{
        public name:string;
        protected phone:number;
        private age:number;

        constructor(name:string,age:number,phone:number){
            super();
            this.name = name;
            this.age = age;
            this.phone = phone;
        }

        say(content){
            console.log(content);
            console.log(this.age);
        }

        eat=function(food:string){
            console.log(food);
        }
    }

    const p1 = new Person('xiaoming',23,19999);
    p1.sayTitle("hello")
})();