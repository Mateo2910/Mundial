function MiFunction() {    
    var n1 = document.getElementById('numb1').value;
    var n2 = document.getElementById('numb2').value;
    var n3 = document.getElementById('numb3').value;
    var n4 = document.getElementById('numb4').value;
    var n5 = document.getElementById('numb5').value;
    var n6 = document.getElementById('numb6').value;
    var n7 = document.getElementById('numb7').value;
    var n8 = document.getElementById('numb8').value;
    var n9 = document.getElementById('numb9').value;
    var n10 = document.getElementById('numb10').value;
    var n11 = document.getElementById('numb11').value;
    var n12 = document.getElementById('numb12').value;
    var img1, img2, img3, img4, imp1, imp2, imp3, imp4, ip1=0, ip2=0, ip3=0, ip4=0, ig1=0, ig2=0, ig3=0, ig4=0, ie1=0, ie2=0, ie3=0, ie4=0, pp1=0, pp2=0, pp3=0, pp4=0, pg1=0, pg2=0, pg3=0, pg4=0, pe1=0, pe2=0, pe3=0, pe4=0, t1=0, t2=0, t3=0, t4=0
    img1 = parseInt(n1)+parseInt(n3)+parseInt(n5)
    img2 = parseInt(n2)+parseInt(n7)+parseInt(n9)
    img3 = parseInt(n4)+parseInt(n8)+parseInt(n11)
    img4 = parseInt(n6)+parseInt(n10)+parseInt(n12)
    document.getElementById('c4').innerHTML = img1;
    document.getElementById('c10').innerHTML = img2;
    document.getElementById('c16').innerHTML = img3;
    document.getElementById('c22').innerHTML = img4;
    imp1 = parseInt(n2)+parseInt(n4)+parseInt(n6)
    imp2 = parseInt(n1)+parseInt(n8)+parseInt(n10)
    imp3 = parseInt(n3)+parseInt(n7)+parseInt(n12)
    imp4 = parseInt(n5)+parseInt(n9)+parseInt(n11)
    document.getElementById('c5').innerHTML = imp1;
    document.getElementById('c11').innerHTML = imp2;
    document.getElementById('c17').innerHTML = imp3;
    document.getElementById('c23').innerHTML = imp4;
 
    if (n5<n6 && n1<n2 && n3<n4) {
       ip1=ip1+3
    }
    else if(n3<n4 && n1<n2 || n1<n2 && n5<n6 || n3<n4 && n5<n6) {
       ip1=ip1+2
    }
    else if   (n1<n2 || n3<n4 || n5<n6) {
       ip1=ip1+1
    }
    document.getElementById('c2').innerHTML = ip1;
 
    if (n1>n2 && n7<n8 && n9<n10) {
       ip2=ip2+3
    }
    else if(n1>n2 && n7<n8 || n1>n2 && n9<n10 || n7<n8 && n9<n10) {
       ip2=ip2+2
    }
    else if   (n1>n2 || n7<n8 || n9<n10) {
       ip2=ip2+1
    }
    document.getElementById('c8').innerHTML = ip2;
 
    if (n3>n4 && n7>n8 && n11<n12) {
       ip3=ip3+3
    }
    else if(n3>n4 && n7>n8 || n3>n4 && n11<n12 || n7>n8 && n11<n12) {
       ip3=ip3+2
    }
    else if   (n3>n4 || n7>n8 || n11<n12) {
       ip3=ip3+1
    }
    document.getElementById('c14').innerHTML = ip3;
 
    if (n5>n6 && n9>n10 && n11>n12) {
       ip4=ip4+3
    }
    else if(n5>n6 && n9>n10 || n5>n6 && n11>n12 || n9>n10 && n11>n12) {
       ip4=ip4+2
    }
    else if   (n5>n6 || n9>n10 || n11<n12) {
       ip4=ip4+1
    }
    document.getElementById('c20').innerHTML = ip4;
 
    if (n1>n2 && n3>n4 && n5>n6) {
       ig1=ig1+3
    }
    else if(n1>n2 && n3>n4 || n1>n2 && n5>n6 || n3>n4 && n5>n6) {
       ig1=ig1+2
    }
    else if   (n1>n2 || n3>n4 || n5>n6) {
       ig1=ig1+1
    }
    document.getElementById('c1').innerHTML = ig1;
 
    if (n1<n2 && n7>n8 && n9>n10) {
       ig2=ig2+3
    }
    else if(n1<n2 && n7>n8 || n1<n2 && n9>n10 || n7>n8 && n9>n10) {
       ig2=ig2+2
    }
    else if   (n1<n2 || n7>n8 || n9>n10) {
       ig2=ig2+1
    }
    document.getElementById('c7').innerHTML = ig2;
 
    if (n3<n4 && n7<n8 && n11>n12) {
       ig3=ig3+3
    }
    else if(n3<n4 && n7<n8 || n3<n4 && n11>n12 || n7>n8 && n11>n12) {
       ig3=ig3+2
    }
    else if   (n3<n4 || n7<n8 || n11>n12) {
       ig3=ig3+1
    }
    document.getElementById('c13').innerHTML = ig3;
 
    if (n5<n6 && n9<n10 && n11<n12) {
       ig4=ig4+3
    }
    else if(n5<n6 && n9<n10 || n5<n6 && n11<n12 || n9<n10 && n11<n12) {
       ig4=ig4+2
    }
    else if   (n5<n6 || n9<n10 || n11<n12) {
       ig4=ig4+1
    }
    document.getElementById('c19').innerHTML = ig4;
    
    if (n1==n2 && n3==n4 && n5==n6) {
       ie1=ie1+3
    }
    else if(n1==n2 && n3==n4 || n1==n2 && n5==n6 || n3==n4 && n5==n6) {
       ie1=ie1+2
    }
    else if   (n1==n2 || n3==n4 || n5==n6) {
       ie1=ie1+1
    }
    document.getElementById('c3').innerHTML = ie1;
 
    if (n1==n2 && n7==n8 && n9==n10) {
       ie2=ie2+3
    }
    else if(n1==n2 && n7==n8 || n1==n2 && n9==n10 || n7==n8 && n9==n10) {
       ie2=ie2+2
    }
    else if(n1==n2 || n7==n8 || n9==n10) {
       ie2=ie2+1
    }
    document.getElementById('c9').innerHTML = ie2;
 
    if (n3==n4 && n7==n8 && n11==n12) {
       ie3=ie3+3
    }
    else if(n3==n4 && n7==n8 || n3==n4 && n11==n12 || n7==n8 && n11==n12) {
       ie3=ie3+2
    }
    else if   (n3==n4 || n7==n8 || n11==n12) {
       ie3=ie3+1
    }
    document.getElementById('c15').innerHTML = ie3;
 
    if (n5==n6 && n9==n10 && n11==n12) {
       ie4=ie4+3
    }
    else if(n5==n6 && n9==n10 || n5==n6 && n11==n12 || n9==n10 && n11==n12) {
       ie4=ie4+2
    }
    else if(n5==n6 || n9==n10 || n11==n12) {
       ie4=ie4+1
    }
    document.getElementById('c21').innerHTML = ie4;
 
    pp1=ip1*0
    pg1=ig1*3
    pe1=ie1*1
    t1=pp1+pg1+pe1
    document.getElementById('c6').innerHTML = t1;
 
    pp2=ip2*0
    pg2=ig2*3
    pe2=ie2*1
    t2=pp2+pg2+pe2
    document.getElementById('c12').innerHTML = t2;
 
    pp3=ip3*0
    pg3=ig3*3
    pe3=ie3*1
    t3=pp3+pg3+pe3
    document.getElementById('c18').innerHTML = t3;
 
    pp4=ip4*0
    pg4=ig4*3
    pe4=ie4*1
    t4=pp4+pg4+pe4
    document.getElementById('c24').innerHTML = t4;
 }