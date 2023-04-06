# map

数组和切片都是通过下标来取值的，你需要精准的知道下标才能取出值，而这些下标仅仅是数字，并没有任何其他的意义，从这个角度来说，仅仅通过下标来取值是比较麻烦的，而 map 的结构，可以很方便的取值

map 是一种无序的键值（key/value）对的集合，通过键（key）可以快速的检索数据，键类似于索引，指向数据的值（value）

## map 的创建与初始化

三种方式创建 map

```go
var map名字 map[键类型]值类型
map名字 := map[键类型]值类型{}
make(map[键类型]值类型)
```

举例

```go
var m1 map[int]string
fmt.Println(m1)

m2 := map[string]string

fmt.Println(m2)

m3 := make(map[int]int)
fmt.Println(m3)  // 可以通过len来获取map中已有键/值对的个数
```

map 的初始化

```go
  var m1 map[int]int = map[int]int{0:1,1:2,2:3}
	fmt.Println(m1)
	m2 := map[string]string{"name": "xiaoqiang", "age":"20", "gender": "man"}
	fmt.Println(m2)
	m3 := make(map[string]int)
	m3["zhangsan"] = 20
	m3["lisi"] = 30
	fmt.Println(m3)
```

注意：键是不允许重复的

```go
m3 := make(map[string]int)
m3["zhangsan"] = 20
m3["zhangsan"] = 30
fmt.Println(m3)  // 键重复 后面覆盖前面
```

## map 的键和值

知识点 1:通过键盘获取值

```go
m2 := map[string]string{"name": "xiaoqiang", "age":"20", "gender": "man"}
fmt.Println(m2["name"])
```

知识点 2:获取值做判断

```go
m2 := map[string]string{"name": "zhangsan", "age":"20", "gender": "man"}
v,ok := m2["name"]   // xiaoqiang true 判断name是否存在，存在就获取值，e就为true
if ok {
  fmt.Println(v, ok)
} else {
  fmt.Println("不存在")
}
```

知识点 3:循环获取值

```go
m2 := map[string]string{"name": "zhangsan", "age":"20", "gender": "man"}

for k, v:= range m2 {
  fmt.Println(k, v)
}
```

知识点 4:删除值

```go
m2 := map[string]string{"name": "zhangsan", "age":"20", "gender": "man"}
delete(m2, "name")
fmt.Println(m2)
```

## map 作为函数的参数

```go
package main

import "fmt"


func main(){
	m2 := map[string]string{"name": "zhangsan", "age":"20", "gender": "man"}
	test(m2)
	fmt.Println(m2)
}

func test(m map[string]string){
	m["name"] = "lisi"
}
```
