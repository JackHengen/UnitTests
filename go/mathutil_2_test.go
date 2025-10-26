package myproject

import "testing"
import "fmt"

func TestManyAdd(t *testing.T) {
	cases := []struct{ a, b, want int }{
		{1, 1, 2},
		{-1, 5, 4},
		// {6, 2, 7},
	}
	for _, c := range cases {
		if got := Add(c.a, c.b); got != c.want {
			t.Errorf("Add(%d,%d)=%d; want %d", c.a, c.b, got, c.want)
		}
	}
}

func TestPass(j *testing.T){
	c := 10
	fmt.Println(c)	
}
