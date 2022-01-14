     function nolasa(){
   
    const malas=document.getElementsByClassName("mala");
      
    const mala1 = parseFloat (m1.value);  //ievadīto informāciju atgriež kā decimālu skaitli
    const mala2 = parseFloat (m2.value);
    const mala3 = parseFloat (m3.value);
      
      if(mala1>0&&mala2>0&&mala3>0){//pārbauda vai malu gaurmi ir lielāki par 0
        console.log({mala1,mala2,mala3});
       return (mala1,mala2,mala3);
     }else{
       console.log(false);
      return false;
    
     }
       
    }
    
    
    function perimetrs(mala1,mala2,mala3) {
     const m= nolasa();
      mala1= m.mala1; mala2=m.mala2; mala3=m.mala3;
     console.log(mala1,mala2,mala3);
     const p= mala1 + mala2 + mala3 ;
      console.log(p)
     return(p);
      
    }
    
    
    function calculate() {
      
      
      const malas=document.getElementsByClassName("mala");
      
    const mala1 = parseFloat (m1.value);  //ievadīto informāciju atgriež kā decimālu skaitli
    const mala2 = parseFloat (m2.value);
    const mala3 = parseFloat (m3.value);
      
    const pusp = (mala1 + mala2 + mala3) * 0.5;
    const area = Math.sqrt(pusp * (pusp - mala1) * (pusp - mala2) * (pusp - mala3));
    
      console.log (area);
      return area;
    }
    
    
    
    
    
    
    