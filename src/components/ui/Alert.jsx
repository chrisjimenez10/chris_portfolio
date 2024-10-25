import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Alert = ({formSent, setFormSent, style, theme}) => {

  //Navigate
  const navigate = useNavigate();

  let color = "";
  switch(style){
    case "primary":
        color = "rgba(85, 136, 255, 100%)";
        break;
    case "red":
        color = "rgba(199, 52, 36, 100%)";
        break;
    case "green":
        color = "rgba(88, 212, 74, 100%)";
        break;
    case "purple":
        color = "rgba(211, 73, 242, 100%)";
        break;
    default:
        color = "rgba(0, 0, 0, 100%)";
  };

  //Create SubClass Object (MySwal) with ALL the same instance and static methods as Swal
  const MySwal = withReactContent(Swal);
  
  //Function
  const showAlert = () => {
    //Documentation to customize Alert Window on website
    MySwal.fire({
      title: <h1 className="font-black text-background">Thank You!</h1>,
      html: <p className="font-normal text-background/85">Message was sent successfully.</p>,
      icon: "success",
      iconColor: color,
      confirmButtonColor: color,
      background: theme === "dark" ? "#ffffff" : "#000000",
      timer: 2000,
      didClose: ()=> {
        setTimeout(() => navigate("/"), 1000);
      }
    });
  };

  useEffect(()=>{
    if(formSent){
      showAlert();
      setFormSent(false);
    }
  },[formSent]);


  return (
    <></>
  )
}

export default Alert;