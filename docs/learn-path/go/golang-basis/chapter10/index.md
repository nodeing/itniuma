# 结构体

## 结构体的应用场景和概念

当我们想要去存储一个学生的相关信息，基于目前所学的知识，我们可能会这样去写

```go
var id int
var name string
var gender byte
var age int
var addr string
```

从上面的代码可以看出，当我们存储某个对象的相关信息的时候，属性非常多，定义非常多的变量相对来说比较麻烦，而且每个变量之间没有联系，这不利于维护，因为，学生这个对象是一个整体，我们有没有一种方式能把学生的所有信息统一管理起来呢？这就要用到我们这章的内容，结构体，下面我们使用结构体来定义学生对象

```go
type Student struct{
  id int
  name string
  gender byte
  age int
  addr string
}
```

通过结构体来定义的学生对象，能更方便的管理和维护对象的数据

概念：结构体是由一系列具有相同类型或不同类型的数据构成的数据集合，可以方便的管理一批有联系的数据，使用结构体可以提高程序的易读性

## 结构体的创建与初始化

语法

```go
type 名字 struct {
  成员名  数据类型
  ...
}
```

结构体初始化

```go
type Student struct {
  id int
  name string
  age  int
  address string
}
var s Student = Student{
  id: 1,
  name: "xiaoqiang",
  age: 20,
  address: "地球",
}
fmt.Println(s)
```

注意：初始化的时候，可以只给部分属性初始化赋值

可以单独给结构体成员赋值

```go
type Student struct {
  id int
  name string
  age  int
  address string
}
var s Student
s.id = 1
s.name = "zhangsan"
fmt.Println(s)
```

## 结构体与数组

```go
package main

import "fmt"

type Student struct {
	id int
	name string
	age  int
	address string
}

func main(){
	var students [3]Student = [3]Student{
		{id: 1, name: "张三", age: 20, address: "地球"},
		{id: 2, name: "李四", age: 21, address: "地球"},
		{id: 3, name: "王武", age: 22, address: "地球"},
	}
	for _, s := range students {
		fmt.Println(s)
	}
}

```

## 结构体切片

```go
package main

import "fmt"

type Student struct {
	id int
	name string
	age  int
	address string
}

func main(){
	var students []Student = []Student{
		{id: 1, name: "张三", age: 20, address: "地球"},
		{id: 2, name: "李四", age: 21, address: "地球"},
		{id: 3, name: "王武", age: 22, address: "地球"},
	}
	for _, s := range students {
		fmt.Println(s)
	}
  // 追加数据
  students = append(students, Student{id: 4, name: "赵六", age: 23, address: "地球"})
	fmt.Println(students)
}
```

## 结构体 map

```go
package main

import "fmt"

type Student struct {
	id int
	name string
	age  int
	address string
}

func main(){
	var students map[int]Student = map[int]Student{
		0:{id: 1, name: "张三", age: 20, address: "地球"},
		1:{id: 2, name: "李四", age: 21, address: "地球"},
		2:{id: 3, name: "王武", age: 22, address: "地球"},
	}
	for i, s := range students {
		fmt.Println(i,s)
	}

}

```

## 结构体作为函数参数

```go
package main

import "fmt"

type Student struct {
	id int
	name string
	age  int
	address string
}

func main(){
	var stu Student = Student{id: 1, name: "张三", age: 20, address: "地球"}
	test(stu)
	// 函数修改成员值后不会影响原来结构体的内容
	fmt.Println(stu)
}

func test(s Student){
	// 修改成员值
	s.id = 200
}
```
