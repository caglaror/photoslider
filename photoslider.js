function nY(hN){return document.getElementById(hN);}; // id den nesne yaratır

function seritKaysin(yon)
						{
var mS = nY('menuseridi');
var liList = nY('menuseridi').getElementsByTagName('li'); 
var pA = nY('panoalti');
//alert(mS.style.paddingLeft);
var liW = (parseInt(liList[0].offsetWidth)); // bunun üzerinden gidilecek birde paddingler var 
//var beherMiktar = 216;

var beherMiktar = parseInt(parseInt(liW));
//alert(beherMiktar);
var ustFark = -(parseInt(liList.length*beherMiktar) - parseInt(pA.offsetWidth));
//alert(mS.offsetWidth+'\n'+pA.offsetWidth);
var animSuresi = 1;
var beherPiksel = 5;
//alert('Soldaki kısım:' + mS.style.marginLeft);
switch (yon)
{
case 'g':
		var zamanlayici = setInterval(function(){
													//alert('test');
													nesneSolMargin = parseInt(mS.style.marginLeft.replace('px',''));
													if(nesneSolMargin==0||nesneSolMargin>0){
																							clearInterval(zamanlayici);
																							mS.style.marginLeft = 0 +'px';
																							return
																							};
													nesneSolMargin+=beherPiksel;
													//alert(nesneSolMargin);
													mS.style.marginLeft = nesneSolMargin +'px';
													if (nesneSolMargin%beherMiktar==0||((nesneSolMargin+(beherMiktar%beherPiksel))%beherMiktar)==0){clearInterval(zamanlayici);};
													},
										animSuresi);
		break;

case 'i':
		var zamanlayici = setInterval(function(){
													//alert('test2');
													nesneSolMargin = parseInt(mS.style.marginLeft.replace('px',''));
													if(nesneSolMargin==ustFark||nesneSolMargin<ustFark){
																							clearInterval(zamanlayici);
																							//mS.style.marginLeft = ustFark +'px';
																							return
																							};
													nesneSolMargin-=beherPiksel;
													mS.style.marginLeft = nesneSolMargin +'px';
													//if(nesneSolMargin<ustFark){alert(ustFark+'\n'+nesneSolMargin)};
													if (nesneSolMargin%beherMiktar==0||((nesneSolMargin+(beherMiktar%beherPiksel))%beherMiktar)==0){clearInterval(zamanlayici);};
													},
										animSuresi);
		break;

}						
						}





