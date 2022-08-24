# py--

- decompress `py--` script at runtime into javascript
- includes mini transpiler with user defined macro syntax
- defines smaller CSS and DOM API

## syntax: local variables
RULE: no space before equals is assignment to a local variable.

py--
```python
a= b
```
js translation:
```javascript
var a= b
```

## syntax: global variables
RULE: a space before equals is assignment to a global variable.

py--
```python
a =b
```
js translation:
```javascript
a =b
```

## syntax: for loop
RULE: for loop symbol is `@`.
- in short form `@ a` translates to `for i in range(len(a))`, the default loop index variable is `i`
- long form is `@ j a`, this sets the loop index variable to `j`
- a blank space terminates the loop (appends `}` to the translation)

py--
```python
a =[1,2,3]
@ a
	console.log('index', i)
	console.log('value', a[i])

```
js translation:
```javascript
var a =[1,2,3]
for(i=0;i<a.length;i++){
	console.log('index', i)
	console.log('value', a[i])
}
```
