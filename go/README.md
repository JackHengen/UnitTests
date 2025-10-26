# Testing in go

1. go test some/path/here
1. looks for all files ending in _test.go
1. builds all tests into a temp executable
1. runs functions in _test.go with the name Test...(t *testing.T) (t can be any name to call the testing framework and its methods)
1. Reports results

### Important parts of the interface 
- Failure (if these aren't called the function passes)
    - t.Fail() — marks test as failed, continues.
    - t.FailNow() — marks failed, stops immediately.
- Logging
    - t.Error(args...) — logs and calls Fail().
    - t.Errorf(format, args...) — formatted log + Fail().
    - t.Fatal(args...) — logs and calls FailNow().
    - t.Fatalf(format, args...) — formatted log + FailNow().
- Verbose Mode Logging
    - t.Log(args...) — prints only with go test -v.
    - t.Logf(format, args...) - formatted printing only with go test -v
- Misc
    - t.Cleanup(func) - register a cleanup function to run after this test
    - t.Skip() - stop test now, but marks as skipped not failed
    - t.Run() - orchestrate subtests with their own new instance of testing.T

### Output examples

```
> go test
--- FAIL: TestOrc (0.00s)
    --- FAIL: TestOrc/test2 (0.00s)
        mathutil_3_test.go:11: Wrong
FAIL
FAIL	command-line-arguments	0.002s
FAIL
```

```
> go test -v

=== RUN   TestOrc
=== RUN   TestOrc/test1
    mathutil_3_test.go:7: Test1
=== RUN   TestOrc/test2
    mathutil_3_test.go:11: Wrong
--- FAIL: TestOrc (0.00s)
    --- PASS: TestOrc/test1 (0.00s)
    --- FAIL: TestOrc/test2 (0.00s)
FAIL
FAIL	command-line-arguments	0.001s
FAIL
```

### Other commandline args and subcommands
- go test -v (see Logs, See all functions ran, see what passed)
- go test -cover
- go test -bench -takes in testing.B and runs performance based tests
- go test -timeout 8m (default 10)
- go test ./filename 
- go test -run (regex to match a function)

### Documentation
https://pkg.go.dev/testing
