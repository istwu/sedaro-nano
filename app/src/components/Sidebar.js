import React from "react";
import "../App.css";

function Sidebar() {
    return (
        <div className="Sidebar">
            <img src="/logo.webp"/>
            <h3>Traces</h3>
            <div className="TraceButton">
                Trace 0 - Planet
            </div>
            <div className="TraceButton">
                Trace 1 - Satellite
            </div>
            <div className="TraceButton">
                Trace 3
            </div>
        </div>
    )
}

export default Sidebar