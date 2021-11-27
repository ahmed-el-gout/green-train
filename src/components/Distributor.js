import React from 'react'
import collabora1 from "../assets/thalys-mono.png"
import collabora2 from "../assets/Path 91.png"
import collabora3 from "../assets/gwr-mono.png"
import collabora4 from "../assets/trenitalia-mono.png"
import collabora5 from "../assets/eurostar-mono.png"
import collabora6 from "../assets/heathrowexpress-mono.png"
import collabora7 from "../assets/italo-mono.png"
import collabora8 from "../assets/lner-mono.png"

function Distributor() {
    return (
        <div className="container">
                <div className="row">
                    <div className="col-12 my-3 text-center ">
                        <h3>Trusted seller and official distributor <br/> for hundreds of operators</h3>
                    </div>
                    <div className="wrapper col-12 my-2  text-center ">
                        <img className="img-fluid colobra m-2  " src={collabora1} alt="collaborator" />
                        <img className="img-fluid colobra m-2  " src={collabora2} alt="collaborator" />
                        <img className="img-fluid colobra m-2  " src={collabora3} alt="collaborator" />
                        <img className="img-fluid colobra m-2  " src={collabora4} alt="collaborator" />
                        <img className="img-fluid colobra m-2  " src={collabora5} alt="collaborator" />
                        <img className="img-fluid colobra m-2  " src={collabora6} alt="collaborator" />
                        <img className="img-fluid colobra m-2  " src={collabora7} alt="collaborator" />
                        <img className="img-fluid colobra m-2  " src={collabora8} alt="collaborator" />
                    </div>
                </div>
        </div>
    )
}

export default Distributor
