# 指针

## 什么是指针？

指针也是一个变量，但它是一种特殊的变量，它里面存储的是另一个变量的内存地址，而不是具体的值

![20210727113605](https://nodeing-book.oss-cn-beijing.aliyuncs.com/nodeing-dashu-blog/20210727113605.png)

## 指针定义

语法

```go
var 指针变量名  *类型
```

```go
  var a int = 10
	var p *int = &a
	fmt.Printf("%p\n", p)
	fmt.Printf("%p", &a)
  fmt.Println(*p)
  // 修改值
  *p = 20
  fmt.Println(p)
```

## 指针使用注意事项

空指针

```go
	var a *int
	fmt.Println(a)
```

不要操作没有合法指向的内存

```go
	var a *int
	*a = 56
	fmt.Println(a)
```

new 函数的使用

```go
  var a *int
	// new 函数作用 开辟一个对应类型的内存空间，返回指针
	a = new(int)
	*a = 56
	fmt.Println(a)
```

## 指针作为函数的参数

```go
package main

import "fmt"


func main(){
	var num int = 10
	test(&num)
	fmt.Println(num)
}

func test(n *int){
	*n = 20
}

```

## 数组和指针

定义指针，指向数组

```go
arr := [3]int{1,2,3}
var p *[3]int = &arr
fmt.Println(*p)
```

指针数组，一个数组里面的元素都是指针

```go
a := 10
b := 20
arr := [2]*int{&a,&b}
fmt.Println(arr)
```

## 指针与切片

```go
s := []int{1,2,3}
var p *[]int = &s
fmt.Println(*p)
fmt.Println((*p)[0])
```

## 指针与结构体

```go
package main

import "fmt"

type Student struct{
	id int
	name string
}
func main(){
	s := Student{id: 1, name: "zhangsan"}
	var p *Student = &s
	fmt.Println(p.name)
	p.name = "lisi"
	fmt.Println(p)
	fmt.Println(*p)
}

```

```go
package main

import "fmt"

type Student struct{
	id int
	name string
}
func main(){
	s := Student{id: 1, name: "zhangsan"}
	var p *Student = &s

	test(p)
	fmt.Println(s)
}

func test(s *Student){
	s.name = "lisi"
}

```
