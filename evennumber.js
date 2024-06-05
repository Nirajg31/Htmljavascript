let evenno=[];
let oddno=[];
for(let i=1 ;i<=40;i++)
    {
        if(i%2==0)
            {
        
               evenno.push([i]);
    
            }
            else 
            {
                oddno.push([i]);
            }
    }
    console.log("Odd number between 1 to 40 " +oddno.join (","));
    
    console.log("Even number between 1 to 40 " +evenno.join (","));