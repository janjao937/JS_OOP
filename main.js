//Class

const BaseUser = class{

    #password;//private
    constructor(name,password)
    {
        this.name = name;
        this.#password = password;//en-capsulation
    }

    get GetPassword()//getter 
    {
        return this.#password;
    }
    set SetPassword(password)//setter
    {
        this.#password = password;
    }

    _GetInfo()//protected
    {
        return`${name}`;
    }

    Activity()
    {
        console.log("Activity");
    }
}
const User = class extends BaseUser//Inherritance
{
    constructor(name,password)
    {
        super(name,password);//link base class
    }
    _GetInfo()
    {
        return `${this.name} :I am User`;
    }

    Activity()//Override (Polymorphism)
    {
        console.log(this._GetInfo());
    }

}
const Addmin = class extends BaseUser{

    constructor(name,password)
    {
        super(name,password);
        this.isAddmin = true;
    }
    _GetInfo()
    {
        return `${this.name} :I am Addmin ${this.isAddmin} Pass ${this.GetPassword}`;
    }

    Activity()
    {
        console.log(this._GetInfo());
        console.log("I am Admin");
    }
}


const GodStatic = class
{   
    static Database = [];

    static Hello(text)
    {
        console.log("Hello");
    }


}

GodStatic.Database[0] = new Addmin("A",123);
GodStatic.Database[1] = new Addmin("C",456);
GodStatic.Database[2] = new Addmin("D",4879);
GodStatic.Database[3] = new User("E",456);
GodStatic.Database[4] = new Addmin("F",9875);



for(let i = 0;i< GodStatic.Database.length;i++)
{
 
    GodStatic.Database[i].Activity();
}