import logo from './logo.svg';
import './App.css';
import Pricecard from './Pricecard';

function App() {
  let details=[
    {
      packageName:"FREE",
      price: 0,
      currency:"$",
      period:"/month",
      features:[
        {
          name: "Single User",
          isEnabled:true            
        },
        {
          name:"5 GB Storage",
          isEnabled:true
        },
        {
          name:"Unlimited Public Projects",
          isEnabled:true
        },
        {
          name:"Community Access",
          isEnabled:true
        },
        {
          name:"Unlimited Private Projects",
          isEnabled:false
        },
        {
          name:"Dedicated Phone Support",
          isEnabled:false
        },
        {
          name:"Free Subdomain",
          isEnabled:false
        },
        {
          name:"Monthly Status Reports",
          isEnabled:false
        }
      ]
    }
    ,
    {
      packageName:"PLUS",
      price: 9,
      currency:"$",
      period:"/month",
      features:[
        {
          name: "5 Users",
          isEnabled:true,
          isBold:true         
        },
        {
          name:"50 GB Storage",
          isEnabled:true
        },
        {
          name:"Unlimited Public Projects",
          isEnabled:true
        },
        {
          name:"Community Access",
          isEnabled:true
        },
        {
          name:"Unlimited Private Projects",
          isEnabled:true
        },
        {
          name:"Dedicated Phone Support",
          isEnabled:true
        },
        {
          name:"Free Subdomain",
          isEnabled:true
        },
        {
          name:"Monthly Status Reports",
          isEnabled:false
        }
      ]
    },
    {
      packageName:"PRO",
      price: 49,
      currency:"$",
      period:"/month",
      features:[
        {
          name: "Unlimited Users",
          isEnabled:true,
          isBold:true          
        },
        {
          name:"150 GB Storage",
          isEnabled:true
        },
        {
          name:"Unlimited Public Projects",
          isEnabled:true
        },
        {
          name:"Community Access",
          isEnabled:true
        },
        {
          name:"Unlimited Private Projects",
          isEnabled:true
        },
        {
          name:"Dedicated Phone Support",
          isEnabled:true
        },
        {
          name:"Umlimited Free Subdomains",
          isEnabled:true
        },
        {
          name:"Monthly Status Reports",
          isEnabled:true
        }
      ]
    }
  ];
  return (
    <section class="pricing py-5">
      <div class="container">
        <div class="row">
          {
            details.map((card)=>{
              return <Pricecard data={card}></Pricecard>
            })
          }
        </div>
      </div>
    </section>
    
  );
}

export default App;
