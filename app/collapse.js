"use client"

export default function Collapse() {

    function collapseDisplay() {
        let collapse = document.getElementById('collapse-nav')
        let collapseF = document.getElementById('collapseF')
        let collapseS = document.getElementById('collapseS')
        let collapseT = document.getElementById('collapseT')

        let nav = document.getElementById("myNav")
        if (nav.style.display === "") {
            nav.style.display = "block";
            collapse.style.cssText = "background-color: cadetblue"
            collapseF.style.cssText = "border: 1px solid white"
            collapseS.style.cssText = "border: 1px solid white"
            collapseT.style.cssText = "border: 1px solid white"
        } else {
            nav.style.display = "";
            collapse.style.cssText = "background-color: none"
            collapseF.style.cssText = "border: 1px solid black"
            collapseS.style.cssText = "border: 1px solid black"
            collapseT.style.cssText = "border: 1px solid black"
        }
    }

    return (
        <>
            <div className='collapse-button' id='collapse-nav' onClick={collapseDisplay}>
                <div id='collapseF'></div>
                <div id='collapseS'></div>
                <div id='collapseT'></div>
            </div>
        </>
    )
}