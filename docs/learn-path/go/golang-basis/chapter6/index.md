# 函数

## 函数声明和调用

基本语法

```
// 函数定义
func 函数名() {
  函数体
}
// 调用
函数名()
```

案例

```go
package main

import "fmt"

func PrintText(){
	fmt.Println("hello world")
}
func main(){
	PrintText()
}
```

## 函数参数

基本语法

```
// 函数定义
func 函数名(参数) {
  函数体
}
// 调用
函数名(参数)
```

案例

```go
package main

import "fmt"

func PrintText(st string){
	fmt.Println(st)
}
func main(){
	PrintText("hello world")
}
```

不定参数列表

```go
package main

import "fmt"

func sum(args...int){
	s := 0
	for i := 0; i < len(args); i++ {
		s += args[i]
	}
	fmt.Println(s)
}
func main(){
	sum(1,2,3,4)
}
```

注意： 不定参数需要放到最后

## 函数返回值

返回单个值

```go
import "fmt"

func sum(args...int) int {
	s := 0
	for i := 0; i < len(args); i++ {
		s += args[i]
	}
	return s
}
func main(){
	s := sum(1,2,3,4)
	fmt.Println(s)
}
```

返回多个值

```go
package main

import "fmt"

func sum(args...int) (int,int){
	s := 0
	for i := 0; i < len(args); i++ {
		s += args[i]
	}
	return s, args[0]
}
func main(){
	s, s2 := sum(1,2,3,4)
	fmt.Println(s,s2)
}
```

## 函数作用域

局部变量，即定义在函数内部的变量称为局部变量

```go
package main

import "fmt"

func Test() {
	fmt.Println(a)  // 报错：undefined: a

}
func main(){
	a := 10
	Test()
}
```

全局变量，定义在函数外面的变量，函数内部可以使用

```go
package main

import "fmt"

var a int

func Test() {
	fmt.Println(a)

}
func main(){
	a = 10
	Test()
}
```

## defer 延迟调用

defer 关键字用于延迟执行一个函数，下面请看基本使用

```go
package main

import "fmt"


func main(){
	defer fmt.Println("hello")
	fmt.Println("world")
}
```

defer 执行顺序

如果一个函数中有多个 defer 语句，它会以后进先出的顺序执行

```go
package main

import "fmt"


func main(){
	defer fmt.Println("1")
	defer fmt.Println("2")
	defer fmt.Println("3")
	defer fmt.Println("4")
	defer fmt.Println("5")
  fmt.Println("6")
}
```
