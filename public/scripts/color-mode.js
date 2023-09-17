var icon = document.getElementById("iconsun");

icon.onclick = async function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {

    console.log("selam");
    try{
        await fetch("/colormode", {
          method: "POST",
          body: JSON.stringify({
            color: "dark",
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        icon.src = "/images/sun.png";

    }catch(error){
        console.log("ERROR HAPPENED");
    }
    
  } else {

    try{
        await fetch("/colormode", {
          method: "POST",
          body: JSON.stringify({
            color: "daylight",
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        icon.src = "/images/moon.png";

    }catch(error){
        console.log("ERROR HAPPENED");
    }
  }
};
