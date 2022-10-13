
// Dynamic Tab Script
var getSummary = document.getElementById('summaryTab');
var getNetwork = document.getElementById('networkTab');
var getOrdering = document.getElementById('orderingTab');
var getMaintenance=document.getElementById('maintenanceTab');

var getSummaryInfo = document.getElementById('summaryTabInfo');
var getNetworkInfo = document.getElementById('networkTabInfo');
var getOrderingInfo = document.getElementById('orderingTabInfo');
var getMaintenanceInfo=document.getElementById('maintenanceTabInfo');

function clickSummary(){
    getSummaryInfo.className="";
    getNetworkInfo.className="hide";
    getOrderingInfo.className="hide";
    getMaintenanceInfo.className="hide";



    getSummary.style.width="380px";
    getSummaryInfo.style.marginTop="25px";
    getSummary.className="greyBgColor firstTabAS";
    getNetwork.className="";
    getOrdering.className="";
    getMaintenance.className="";
}
function clickNetwork(){
    getSummaryInfo.className="hide";
    getNetworkInfo.className="";
    getOrderingInfo.className="hide";
    getMaintenanceInfo.className="hide";

    getSummary.style.width="100%";

    getSummary.className="";
    getNetwork.className="greyBgColor";
    getOrdering.className="";
    getMaintenance.className="";
}
function clickOrdering(){
    getSummaryInfo.className="hide";
    getNetworkInfo.className="hide";
    getOrderingInfo.className="";
    getMaintenanceInfo.className="hide";

    getSummary.style.width="100%";
    getSummary.className="";
    getNetwork.className="";
    getOrdering.className="greyBgColor";
    getMaintenance.className="";
}

function clickMaintenance(){
    getSummaryInfo.className="hide";
    getNetworkInfo.className="hide";
    getOrderingInfo.className="hide";
    getMaintenanceInfo.className="";

    getSummary.style.width="100%";
    getSummary.className="";
    getNetwork.className="";
    getOrdering.className="";
    getMaintenance.className="greyBgColor";
}



getSummary.addEventListener('click',clickSummary);
getNetwork.addEventListener('click',clickNetwork);
getOrdering.addEventListener('click',clickOrdering);
getMaintenance.addEventListener('click',clickMaintenance);
