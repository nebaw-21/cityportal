import DashBox from "./decorations/DashBox";

export default function HorizontalCard() {
    return (
        <div className="p-4 md:p-8  border border-gray-600 mx-4 mt-8 rounded-md inline-block">
            <h1 className="text-2xl">Let&apos;s Hear from </h1>
            <div className=" relative pl-10  inline-block pb-[35px]">
              <h2 className="text-3xl inline-block">the <span className="text-5xl">Mayor</span></h2>
              <DashBox customStyles={" right-0 bottom-0 "} />
            </div>
           

      <div className="w-full  flex flex-row  rounded-lg overflow-hidden">
        <div className="w-2/5 shrink-0">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6 w-3/5">
         
           <p className="text-gray-600 mb-6">
           “As the mayor of Shaggar City, I am excited to share our bold vision 
           for the future of our community. We are committed to transforming Shaggar 
           into a model smart city—competitive, livable, and responsive to the needs 
           of all residents. Our goal is to establish Shaggar as a com-pact, polycentric
            economic hub, fostering inclusivity, connectivity, and environmental sustainability
             through strategic spatial planning and targeted investments in innovative infrastructure.”
          </p>
<h1 className="text-3xl">Teshome Adugna (Ph.D.) Shaggar City Mayor</h1>
        </div>
      </div>
        
        </div>
    );
  }
  