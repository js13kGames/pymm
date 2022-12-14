$W=window
for(n in $W){$W[n.substr(0,3)]=$W[n]}
$D=doc
/// py-- setup function
/// must be called before using py--
$PYMM=()=>{
/// minimal stuff required to define basic pymm function
$S=String
P$='prototype'
$S[P$].$r=$S[P$].replaceAll
F$='function'
$L=(a)=>a.length
$E=eval
R='return'
C='continue'
/// note: MMD is the dynamic part of pymm translator
/// first define it as an empty string
$MMD=""
$oid=0
/// note: eval is used directly below to capture local variables
$S[P$].pymm=function(){
	var $=this.split('\n'), __=[],q=0,_,t,ms={}
	for(var _i=0;_i<$L($);_i++){
		_=$[_i];T=_.trim().split(' ');t=T[0];
		eval($MMD)
		if(t.endsWith('='))_='var '+_
		if(t=='#'){
			if($L(_)==1)ms={}
			else { for(j=0;j<$L(T[1]);j++)ms[T[1][j]]=T[2+j];}
			if(q)__.push('}')
			else __.push('')
			q=0
			continue
		}
		for(var n in ms)_=_.$r(n,ms[n])
		js=_.$r('~',C)
		__.push(js)
	}
	return __.join('\n')
}
/// now that pymm is defined, extend the definition of $MDD
/// to support a minimal python like syntax
$MMD=`# ABE if(t==' '){_=_.$r(' else
A'&&q){_+='}';q--}
AifBif ', 'if (') +'){';q++}
AelifBelif ', '}E if (') +'){';} 
if(_.trim()=='E'&&q){_='}E{'}
A@'){
	q++
	k='@ '
	I='i'
	if($L(T)>2){I=T[1];k+=I}
	_=_.$r(k,"for(var "+I+"=0;"+I+"<$L(")+");"+I+"++){"
}
if(_[0]=='B\u0001',F$+' ')+'{';q++;$oid=0}
A<<B<<',R)}
`.pymm()

/// define low level macro replace function
$m=(a,b)=>$E(("# "+a+'\n'+b+'\n#').pymm())

$m("QFR $S[P$]. "+F$+ " ){"+R,
`Qsw=F(a){
	a= a.split(' ')
	r= 0
	@ a
		if this.sth(a[i])
			r++


	<< r
}
Qcount=F(a='\t'R $L(this.sit(a))-1}
Qlines=F(a,bR this.sit('\\n')}
Qwords=F(R this.replace(/([a-z])([A-Z])/g, '$1 $2').$r('-', ' ').split(' ')}
`)

/// bootstrap smaller String API
$SS=`
b= Object.getOwnPropertyNames(A)
@ b
	n= b[i]
	l= $L(n)
	A[n[0]+n.substr(l-2,l)]=A[n]
	A[n.substr(2,5)]=A[n]

`
$m("A $S[P$]",$SS)
$m("A $S",$SS)

chr=(a)=>$S.fde(a)
ord=(a)=>a.charCodeAt(0)

$MMD+= `
if t==':'
	ks= T[1]
	vs= T.slice(2,$L(T))
	if ks.iOf(',')!=-1
		if ks.iOf('|')!=-1
			[ka,kb]= ks.split('|')
			ks=ka.split(',').concat(kb.split(''))
		else
			ks=ks.split(',')

	elif $L(vs)==1
		vs=vs[0]

	d= '$save(o'+$oid+'={'
	$oid++
	@ ks
		kc= ks[i]
		vl= vs[i]
		if vl==undefined
			if kc.endsWith('s')
				vl='[]'
			elif kc.iOf('t')!=-1
				vl='""'
			else
				vl='0'


		d+=kc+':'+vl+','

	_=d.substr(0,$L(d)-1)+'})'

`.pymm()

M=Math
$R=(a=1)=>M.random()*a
$r=(a)=>$R()<a
$MF=(a)=>M.floor(a)



$cs=[]
$EL=Element
$m("ABF a=n.str( if(a==' "+F$,
`
for(n in $D.body.style){
	l=$L(n)
	A0,3)
	Bfon')A4,7)
	Bbor')A6,9)
	a+=n[l-1]
	if(n.iOf('-')!=-1||$cs.indexOf(a)!=-1)~
	$cs.push(a)
	b='this.style.'+n
	$EL[P$]['$'+a]=$E("(F $(s){if(s)"+b+"=s;return "+b+"})")
}
`)

$py=(s)=>s.$r('@','for i in range(len(').$r(_$S_,'def ')

$m('QUXF "rgba("+ this.$bacd("linear-gradient("+ +","+ '+F$,
`
$EL[P$].clr=F(a,d=0,f=1){
	if typeof(a)=='string'
		this.$bacr(a)
		<<

	if a[3]<=0.4
		this.$filr('blur(5px)')

	if(!this._iclr)this._iclr=[a[0],a[1],a[2],a[3]]
	p= Qa[0]Xa[1]Xa[2]+","
	c= p+a[3]+')'
	if f
		if(f==2) Ud+"deg,"+p+"0),"+c+")");
		else Ud+"deg,"+Q(a[0]/4)X(a[1]/2)X(a[2]/2)Xa[3]+"),"+c+")");
	else
		this.$bacr(c)

}`)

$t=`$T=function(){
	r= []
	@ A
		r.push($("T",A[i],1))

	<< r[0]
}`

f=(t)=>$m('TA '+t+' arguments',$t);
'a hr div code span pre'.split(' ').forEach(f)

$DO=Document
}
