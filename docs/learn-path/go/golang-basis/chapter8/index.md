# 8.切片

在 Go 语言中，数组定义完成后，长度是固定的，如果往数组里面添加内容会报错,这显得不太灵活，通常我们不会直接使用数组，而常用的是切片

切片与数组相比，切片的长度是不固定的，可以追加元素，在追加时，切片的容量增大，可以大致理解为“动态的数组”

### 8.1.定义切片

有三种方式可以定义切片

```
1 var 切片名 []数据类型
2 切片名 := []类型{}
3 使用 make() 函数创建
```

```go
var s[]int
fmt.Println(s)
fmt.Println(len(s))
```

```go
s := []int{}
fmt.Println(s)
fmt.Println(len(s))
```

```go
// make(切片类型，长度，容量)
s := make([]int, 3, 5)
fmt.Println(s)
fmt.Println(len(s))
```

注意：长度不能大于容量，并且容量参数可以省略

```go
// make(切片类型，长度，容量)
s := make([]int, 3)
fmt.Println(s)
fmt.Println(len(s))
fmt.Println(cap(s))
```

### 8.2.切片的初始化

使用 append 追加值

```go
var s[]int
s=append(s, 1,2,3)
fmt.Println(s)
```

你可以任意给切片增加元素，因为切片是没有固定长度的

定义的时候初始化

```go
s := []int{1,2,3,4}
fmt.Println(s)
```

### 8.3.切片遍历

for 循环遍历

```go
s := []int{1,2,3,4,5}
for i:=0;i < len(s); i++{
	fmt.Println(s[i])
}
```

for range 遍历

```go
for i,v := range s {
	fmt.Println(i, v)
}
```

### 8.4.切片的截取

```go
package main

import "fmt"


func main(){
	s := []int{1,2,3,4,5,6,7,8}
	fmt.Println("s[1:5]=", s[1:5])
	fmt.Println("s[:5]=", s[:5])
	fmt.Println("s[1:]=", s[1:])
	fmt.Println("s[:]=", s[:])
}
```

### 8.5.切片的扩容

```go
s := make([]int, 4, 7)
s = append(s, 1)
s = append(s, 2)
s = append(s, 3)
s = append(s, 4)
fmt.Println("s 的长度是:", len(s))
fmt.Println("s 的容量是:", cap(s))
```

注意：一般扩容方式为上一次容量的 2 倍，如果超过 1024 字节，每次扩容是上一次的 1/4

注意：Slice 本身是没有数据的，是对底层 array 的一个 view

```go
package main

import "fmt"


func main(){
	arr := [9]int{1,2,3,4,5,6,7,8,9}
	s := arr[2:]
	s[2]= 20
	fmt.Println("arr[2:6] = ", arr[2:6])
	fmt.Println("arr = ", arr)
}
```

在 Slice 源码中，Slice 的结构如下

```go
// runtime/slice.go
type slice struct {
	array unsafe.Pointer // 数组指针
	len   int // 长度
	cap   int // 容量
}
```

举例：

```go
arr := [...]int{0, 1, 2, 3, 4, 5, 6, 7}
s := a[1:6]
```

![20210722195636](https://nodeing-book.oss-cn-beijing.aliyuncs.com/nodeing-dashu-blog/20210722195636.png)

注意：当发生扩容，slice 指向新的扩容后的数组

```go
package main

import "fmt"


func main(){
	arr := [...]int{0, 1, 2, 3, 4, 5, 6, 7}
	s := arr[1:6]
	fmt.Println("s的容量是：", cap(s))
	s = append(s, 8, 9,9)
	fmt.Println("扩容后，s的容量是：", cap(s))
	// s 底层数组发生变化
	s[0] = 200
	// 原来数组没有变
	fmt.Println(arr)
}
```

### 8.6.copy 函数应用

如果想将一个切片中的内容，拷贝到另外一个切片中去，就需要用到 copy 函数

语法

```go
// 切片2中的内容，拷贝到切片1中去
copy(切片1， 切片2)
```

```go
	s1 := []int{1,2,3,4}
	s2 := []int{9,8}
	// s2 中的内容拷贝到s1中去，覆盖s1中原来的一部分内容，对应位置拷贝
	copy(s1, s2)
	fmt.Println(s1,s2)
```

### 8.7.切片作为函数参数

注意：切片是引用类型，在函数中修改切片内容会影响原来切片

```go
package main

import "fmt"


func main(){
	s1 := []int{1,2,3,4}
	test(s1)
	fmt.Println(s1)  // [10 2 3 4]
}
func test(s []int){
	s[0] = 10
```
