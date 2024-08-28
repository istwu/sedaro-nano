import React from "react";
import "../App.css";

function Sidebar() {
    return (
        <div className="Sidebar">
            <img src="logo.png" style={{textAlign: 'center'}}/>

            <h3>Traces</h3>
            <div className="TraceButton">
                Trace 0 - Planet
            </div>
            <div className="TraceButton">
                Trace 1 - Satellite
            </div>
            <div className="TraceButton">
                Trace 2
            </div>

            <p className="Footer">Double click on a trace to isolate it.</p>
        </div>
    )
}

export default Sidebar