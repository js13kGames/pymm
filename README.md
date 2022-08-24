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

