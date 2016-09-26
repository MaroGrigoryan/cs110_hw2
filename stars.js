



const triangleStars = function(n)
{
	return triangleStarsMain(n, 0);
};








const triangleStarsMain = function(n,count){ 
	if(n===0){
		return ""; 
	}
	return triangleStarsMain(n-1,count+1)+ "\n" + 
	space(count)+star(2*n-1);
};








const space=function(n){
	if(n===0){
		return "";
	}
	return " " + space(n-1);
};






const star=function(n){
	if(n===0){
		return "";
	}
	return "*"+ star(n-1);

};



console.log(triangleStars(20));
