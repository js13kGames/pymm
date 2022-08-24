$W=window
for(n in $W){$W[n.substr(0,3)]=$W[n]}
$D=doc

$PYMM=()=>{
$S=String
P$='prototype'
$S[P$].$r=$S[P$].replaceAll
F$='function'
$L=(a)=>a.length
$E=eval
R='return'
C='continue'
$MMD=""
$S[P$].pymm=function(){
var $=this.split('\n'), __=[],q=0,_,t,ms={}
for(i=0;i<$L($);i++){
_=$[i];T=_.trim().split(' ');t=T[0];
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
for(n in ms)_=_.$r(n,ms[n])
js=_.$r('^',";break} case ").$r('~',C)
__.push(js)
}
return __.join('\n')
}

$MMD=`# AB if(t==' '){_=_.$r('
A'&&q){_+='}';q--}
AifBif ', 'if (') +'){';q++}
AelifBelif ', '}else if (') +'){';}
if(_.trim()=='else'&&q){_='}else{'}
A@'){
q++
k='@ '
I='i'
if($L(T)>2){I=T[1];k+=I}
_=_.$r(k,"for("+I+"=0;"+I+"<$L(")+");"+I+"++){"
}
if(_[0]=='B\u0001',F$+' ')+'{';q++}
A<<B<<',R)}
`.pymm()

$m=(a,b)=>$E(("# "+a+'\n'+b+'\n#').pymm())

$m("A?FR $S[P$]. this.sth( "+F$+ " ){"+R,
`Asw=F(a,b,cR ?a)||?b)||?c)}
Acount=F(a='\t'R $L(this.sit(a))-1}
Alines=F(a,bR this.sit('\\n')}`)

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

M=Math
$R=(a=1)=>M.random()*a
$r=(a)=>$R()<a
$MF=(a)=>M.floor(a)

E$='Element'
$m(`ABN =E$+'.'+P$+"[ +n.str(0,3)" +"+n[l-1]"+`,
`
_1A'$'B
_2="]="+F$+"(a){this.style."
_3A'_'B
_4="]="+F$+"(){return this.style."
for(n in $D.body.style){
if(n.iOf('-')!=-1)~
l=$L(n)
$E(_1+_2+n+'=a};'+_1N_2+n+'=a}')
$E(_3+_4+n+'};'+_3N_4+n+'}')
}`)

$py=(s)=>s.$r('@','for i in range(len(').$r(_$S_,'def ')

$EL=Element
$m('QUXF "rgba("+ this.$bacd("linear-gradient("+ +","+ '+F$,
`
$EL[P$].clr=F(a,d=0,f=1){
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

$DO=Document
}


# M m=m.str(
def $dom()
p= [$EL,$DO]
@ p
P= p[i][P$]
a= Object.keys(P).sort().reverse()
@ j a
n= a[j]
L= $L(n)
if(L<3)~
try{var b=P[n]}catch{~}
m= n.Lower()
if m.sw('get','set','create')
ML-5, L)
else
M0,2)+n[L-1]

P[m]=b



#