//break condition



for(let i=2;i<=20;i++) 

    {

        let isPrime = true;

        for (let j=2;j<i;j++) 

            {

                if (i%j===0)

                    {

                        isPrime = false;

                        break;

                    }

            } 

            if(isPrime) 

                {

                    console.log("Prime numbers:",i);

                    break;

                }

    }



//continue



for (let i = 1; i <= 20; i++) 

    {

        if (i%2===0) 

            {

                continue;

            }

            console.log(i);

    }

