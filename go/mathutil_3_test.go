package myproject

import "testing"

func TestOrc(t *testing.T){
	test1 := func(t *testing.T){
		t.Log("Test1")
	}

	test2 := func(t *testing.T){
		t.Fatal("Wrong")
	}

	t.Run("test1",test1)
	t.Run("test2",test2)
}

