import React from "react";
import "./styles/Comentario.css";

function Comentario(props) {
  return (
    <div 
    className="Comentario show-slider">
      <h2>Lorem ipsum dolor sit.</h2>
      <div className="puntos">
        {
        (() => {
          switch (props.estrella) {
            case "0":
              return (
                <>
                  <ion-icon name="star-outline"></ion-icon>
                  <ion-icon name="star-outline"></ion-icon>
                  <ion-icon name="star-outline"></ion-icon>
                  <ion-icon name="star-outline"></ion-icon>
                  <ion-icon name="star-outline"></ion-icon>
                </>
              );
            break;
            case "0.5":
              return (
                <>
                  <ion-icon name="star-half"></ion-icon>
                  <ion-icon name="star-outline"></ion-icon>
                  <ion-icon name="star-outline"></ion-icon>
                  <ion-icon name="star-outline"></ion-icon>
                  <ion-icon name="star-outline"></ion-icon>
                </>
              );
            break;
            case "1":
              return (
                <>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star-outline"></ion-icon>
                  <ion-icon name="star-outline"></ion-icon>
                  <ion-icon name="star-outline"></ion-icon>
                  <ion-icon name="star-outline"></ion-icon>
                </>
              );
            break;
            case "1.5":
              return (
                <>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star-half"></ion-icon>
                  <ion-icon name="star-outline"></ion-icon>
                  <ion-icon name="star-outline"></ion-icon>
                  <ion-icon name="star-outline"></ion-icon>
                </>
              );
            break;
            case "2":
              return (
                <>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star-outline"></ion-icon>
                  <ion-icon name="star-outline"></ion-icon>
                  <ion-icon name="star-outline"></ion-icon>
                </>
              );
            break;
            case "2.5":
              return (
                <>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star-half"></ion-icon>
                  <ion-icon name="star-outline"></ion-icon>
                  <ion-icon name="star-outline"></ion-icon>
                </>
              );
            break;
            case "3":
              return (
                <>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star-outline"></ion-icon>
                  <ion-icon name="star-outline"></ion-icon>
                </>
              );
            break;
            case "3.5":
              return (
                <>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star-half"></ion-icon>
                  <ion-icon name="star-outline"></ion-icon>
                </>
              );
            break;
            case "4":
              return (
                <>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star-outline"></ion-icon>
                </>
              );
            break;
            case "4.5":
              return (
                <>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star-half"></ion-icon>
                </>
              );
            break;
            case "5":
              return (
                <>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                </>
              );
            break;
            default: alert('No funciona');
            break;
          }

        })()
        }
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ratione tempore aperiam dolorum iure voluptates delectus similique blanditiis voluptatem rerum. Magnam consequuntur molestiae impedit asperiores vero natus distinctio quam repudiandae?</p>
    </div>
  );
}

export default Comentario;
