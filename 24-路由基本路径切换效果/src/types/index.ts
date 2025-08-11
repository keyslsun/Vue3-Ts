//定义一个接口，用于限制person对象的属性
export interface PersonInter {
    id: string,
    name: string,
    age: number
}

//定义一个自定义类型
export type Persons = Array<PersonInter> //声明数组内部对象属性为PersonInter标准