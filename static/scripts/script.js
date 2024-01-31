function openNav(){
    document.getElementById("navbar").style.width="200px";
}

//constant variables for the sidebar btn and the target element (the navbar element)
const elem = document.getElementById("navbar");
const navbtn = document.getElementById("navbtn");

//used to check if a user has clicked away from navbar in order to close it
document.addEventListener("click",function(event){
    //checking if the navbar is part of the element clicked. e.g. if menu button pressed it is part of
    //if not then it returns false but since this is a IS NOT statement true will be returned.
    const outsideClick = !elem.contains(event.target);
    //if the outside click is true then the navbar will close
    if(outsideClick==true && screen.width<1024 && event.target!=navbtn){
        elem.style.width="0px";
    }
})



//on scroll event 
// When the user scrolls the page
window.onscroll = function() {scrollHeader()};
//scrolling sticky header effect thing
function scrollHeader(){
    var header = document.getElementById("header");
    //sticky value from header
    var sticky = header.offsetTop;
    if (window.pageYOffset > sticky) {
        header.style.background="gray";
      } else {
        header.style.background="transparent";
      }
}


function openEmail(type){
    var content = "";
    var space = escape("\n\n");
    var ol = escape("\n");
    //getting the name inputted as managing director
    var md = document.getElementById("managingdirector").value;
    //load getting attention one template
    if(type==1){
        content=`Management Team,${space}All members of the Board hold themselves accountable for the results and outcomes achieved by our managers. Overall, we are proud with what you have achieved and are achieving however the bar (required standard of performance) is constantly being raised which means managers must up their game if they are going to be able to achieve the higher standard of performance required in the future. To address this, we are implementing MBOpro, a continuous manager Improvement (CMI) process within the organisation.${space} The format of MBOpro is not new; it is simply a Management by Objective process that specifically focuses on manager performance and follows the Performance Management Cycle as a framework and timeline.${space}What sets MBOpro apart is that it is self-managed. managers will be required to:${space}1) Identify important objectives for improvement and personal development during the review period.${space}2) Create plans, set priorities, and concentrate on achieving these objectives.${space}3) Regularly review progress and accomplishments to stay focused on what is most important.${space}4) At the end of each year, conduct a self-appraisal of their own performance.${space}Obviously your objectives will need to be agreed and signed off with your respective line manager and you will need to periodically update them on your progress and achievement. The plan is to review all objectives achievements at the end of the year to see how much the business has moved forward during the review period and reward accordingly.${space}More information on MBOpro is to follow. but in the meantime, start thinking about your improvement and development objectives for next year.${space}${md}${ol}Managing Director`;
    }
    //load getting attention two template
    else if(type==2){
        //getting the new joining NED
        var ned = document.getElementById("newmember").value;
        content = `Management Team,${space}I am pleased to inform you that ${ned} has joined our team as a Non-Executive Director. In this role, ${ned} will be responsible for overseeing and leading the continuous manager improvement initiative - MBOpro on my behalf. As a non-executive director, ${ned} will not be directly involved in managing performance but will ensure that manager performance is managed effectively through the MBOpro process.${space}For more information about the NED (Manager Performance) role, please refer to the attached role profile.${space}Please join me in extending a warm welcome to ${ned} and providing him with the necessary support to ensure the success of this performance management initiative.${space}${md}${ol}Managing Director`;
    }

    //opening mail
    window.location.href=`mailto:?subject=Continuous Manager Improvement (CMI)&body=${content}`;
}