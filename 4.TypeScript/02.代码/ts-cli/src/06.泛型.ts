(function(){

    // 个人理解:泛型其实就是一种新式的形参,只不过形参是用来接收类型的
    // 名字随意取,调用函数的时候传入即可
    // function createArray<T>(val: T,count:number):T[]{
    //     const arr: T[] = [];

    //     for (let index = 0; index < count; index++) {
    //         arr.push(val);
    //     }

    //     return arr;
    // }

    // const arr1 = createArray<number>(1,10);
    // const arr2 = createArray<string>("a",10);

    // arr2[0].

    // console.log(arr1,arr2);


    
    // function fn1<J,A>(a:J,b:A):[J,A]{
    //     return [a,b]
    // }

    // fn1<number,boolean>(1,"abc")
})();

(function(){
    //   class User {
    //     id?: number; //id主键自增
    //     name: string; //姓名
    //     age: number; //年龄
      
    //     constructor (name, age) {
    //       this.name = name
    //       this.age = age
    //     }
    //   }
    // interface IBaseCRUD<T>{
    //     data: T[];
    //     getById:(id:number)=>T
    // }

    //   interface IUserCRUD{
    //     data: User[];
    //     getById:(id:number)=>User
    //   }
      
    //   class UserCRUD implements IBaseCRUD<User>{
    //     data: User[] = []
        
    //     add(user: User): void {
    //       user = {...user, id: Date.now()}
    //       this.data.push(user)
    //       console.log('保存user', user.id)
    //     }
      
    //     getById(id: number): User {
    //       return this.data.find(item => item.id===id)
    //     }
    //   }

    //   const user1 = new User("xiaoming",23);
    //   const user2 = new User("xiaowang",26);

    //   const userCRUD = new UserCRUD();

    //   userCRUD.add(user1);
    //   userCRUD.add(user2);

      

    // //   interface IStudentCRUD{
    // //     data: Student[];
    // //     getById:(id:number)=>Student
    // //   }
      
    //   class Student {
    //     id?: number; //id主键自增
    //     name: string; //姓名
    //     age: number; //年龄
      
    //     constructor (name, age) {
    //       this.name = name
    //       this.age = age
    //     }
    //   }
      
    //   class StudentCRUD implements IBaseCRUD<Student>{
    //     data: User[] = []
        
    //     add(user: User): void {
    //       user = {...user, id: Date.now()}
    //       this.data.push(user)
    //       console.log('保存user', user.id)
    //     }
      
    //     getById(id: number): User {
    //       return this.data.find(item => item.id===id)
    //     }
    //   }
      
      
})();


(function(){
  class GenericNumber<T> {
    zeroValue: T
    add: (x: T, y: T) => T
  }
  
  let myGenericNumber = new GenericNumber<number>()
  myGenericNumber.zeroValue = 0
  myGenericNumber.add = function(x, y) {
    return x + y 
  }

  // myGenericNumber.add(1,"a");
  
  let stringNumeric = new GenericNumber<string>()
  stringNumeric.zeroValue = 'abc'
  stringNumeric.add = function(x, y) { 
    return x + y
  }
  
  console.log(stringNumeric.add(stringNumeric.zeroValue, 'test'))
})();

(function(){
  interface IT{
    length:number;
  }
  function fn<T extends IT>(x:T): void {
    console.log(x.length)
  }

  fn<string>("abc")
})();