package main

import (
	"fmt"
)

type Person struct {
	Name string `json:"custom_name"`
	F Family 
}

type Family struct {
	Name string `json:"inspirer"`
}

type auth struct {
	name string
	fame string
}


func callme(b auth) *auth {
	b.name = "NI" 
	fmt.Println(b)
	return &b
}

func main() {
	// p := Person{Name: "Teach", F: Family{
	// 	Name: "Rocks D. Xebec", 
	// } }
	// pBytes, err := json.MarshalIndent(p, "", "\t")

	// log.Print(err)
	// log.Print(string(pBytes))
	a := auth{name: "akagami", fame: "shanks"}

	fmt.Println(a)
	b := callme(a)

	fmt.Println(&a == b)
	// log.Panic(errors.New("ERROR OF NOTHING"))
	// fmt.Println("NICE WORK")

}