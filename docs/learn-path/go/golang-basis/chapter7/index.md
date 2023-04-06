# 数组

定义数组

```go
package main

import "fmt"


func main(){
	// 定义5个int元素的数组,默认int元素的初始值为0
	var arr1 [5]int
	fmt.Println(arr1)
	// 定义的时候给值
	arr2 := [3]int{1,2,3}
	fmt.Println(arr2)
	// 让编译器来判断数组的长度
	arr3 := [...]int{1,2,3,4}
	// 定义二维数组
	var arr4 [4][5]int
	fmt.Println(arr3)

}
```

遍历数组

使用 for 语句遍历数组

```go
package main

import "fmt"


func main(){
	arr1 := [5]int{2,4,5,7,8}
	for i := 0; i < len(arr1); i++ {
		fmt.Println(arr1[i])
	}

}
```

使用 range 遍历数组

```go
package main

import "fmt"


func main(){
	arr1 := [5]int{2,4,5,7,8}
	for i:= range arr1 {
		fmt.Println(arr1[i])
	}
}
```

```go
package main

import "fmt"


func main(){
	arr1 := [5]int{2,4,5,7,8}
  // i 下标 v 下标对应的值
	for i,v:= range arr1 {
		fmt.Println(i, v)
	}
}
```

```go
func main(){
	arr1 := [5]int{2,4,5,7,8}
  // 忽略下标
	for _,v:= range arr1 {
		fmt.Println(v)
	}
}
```

注意：数组是值类型

```go
package main

import "fmt"

func test(arr [5]int){
  // 这里的arr改变 不会影响外面 arr1
	arr[0] = 100
	fmt.Println("arr:", arr)  // arr: [100 4 5 7 8]
}
func main(){
	arr1 := [5]int{2,4,5,7,8}
	test(arr1)
	fmt.Println("arr1:", arr1)  // arr1: [2 4 5 7 8]
}
```

注意 2: [5]int 和 [10]int 是不同的类型，在 go 语言中一般不直接使用数组，常用的是切片(slice)，我们在下一章详解
