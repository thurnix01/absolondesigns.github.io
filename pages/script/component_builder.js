     function addStyle(){
  var buttonHref = "https://thurnix01.github.io/absolondesigns/pages/css/pb_newsletter.css";
  var button = document.createElement("link");
  button.href = buttonHref;
  container.appendChild(button);
    }


function addTemplate() {
        var heroImage = document.getElementById("hero-image").value;
        var introLine = document.getElementById("intro-line").value;
        var bodyCopy = document.getElementById("body-copy").value;
          
   
          
        var container = document.getElementById("container");
        var template = document.createElement("table");
        template.className = "_header-section";
        template.innerHTML = `


        <tr><td><img src="${heroImage}" alt="Hero Image" style="max-width: 600px; width: 100%; min-height: 320px; height: 580px; display: flex; object-fit: cover; object-position: top;"></td></tr>
        <tr><td><h1>${introLine}</h1></td></tr>
        <tr><td><p>${bodyCopy}</p></td></tr

        `;
        container.appendChild(template);
      }
      function removeTemplate() {
        var container = document.getElementById("container");
        var templates = container.getElementsByClassName("_header-section");
        if (templates.length > 0) {
          container.removeChild(templates[templates.length - 1]);
        }
      }
        
                
                      //-------------------------------------------
        
        
      function addTemplate1() {
      var buttonLabel = document.getElementById("buttonLabel").value;
      var buttonHref = document.getElementById("buttonHref").value;

      var resultDiv = document.getElementById("container");
      var button = document.createElement("a");
      button.href = buttonHref;

      button.target = "_blank";
      button.className = "_header-cta";
      button.innerHTML = `

      ${buttonLabel}

      `;
      resultDiv.appendChild(button);
      }
      function removeTemplate1() {
      var resultDiv = document.getElementById("container");
      var buttons = resultDiv.getElementsByClassName("_header-cta");
      if (buttons.length > 0) {
      resultDiv.removeChild(buttons[buttons.length - 1]);
      }
      }
        
    
                
          //-------------------------------------------
        
        
      function addTemplate2() {
        var introBodyTitle = document.getElementById("intro-body-title").value;  
        var container = document.getElementById("container");
        var template = document.createElement("table");
        template.className = "_section-title";
        template.innerHTML = `

        <tr><td><h3>${introBodyTitle}</h3></td></tr>

        `;
        container.appendChild(template);
      }
      function removeTemplate2() {
        var container = document.getElementById("container");
        var templates = container.getElementsByClassName("_section-title");
        if (templates.length > 0) {
          container.removeChild(templates[templates.length - 1]);
        }
      }
        
          //-------------------------------------------
        
      function addTemplate3() {
        var image1 = document.getElementById("image-1").value;
        var imageCopy1 = document.getElementById("image-copy-1").value;
        var buttonLabel1 = document.getElementById("buttonLabel1").value;
        var buttonHref1 = document.getElementById("buttonHref1").value;
          
        var container = document.getElementById("container");
        var template = document.createElement("div");
        template.className = "_double_section";
        template.innerHTML = `

                <tr><td>
        <a href="${buttonHref1}" target="_blank"><img src="${image1}" alt="Product Image" style="width: 90%; margin: 0 auto; display: flex; mix-blend-mode: multiply; "></a>
        <p style="font-family:'UniversLTStd-Cn', sans-serif;font-weight: 500; line-height:1.25rem; font-size: 1rem; text-align: center; margin: 1rem 0; color: #000;"> ${imageCopy1}</p>
                            <div style="margin:0 auto; width: 80%; margin-bottom: 16px;">
                        <table style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;background: #464647;width: 100%; border-radius: 4px" border="0" cellpadding="0" cellspacing="0" role="presentation">
                            <tbody>
                                <tr>
                                    <td style="mso-padding-alt:16px 12px 12px; text-align:center;"> <a style="color: #fff;display: block;padding: 16px 12px 12px; text-align: center;font: 500 16px/20px 'UniversLTStd-Cn', sans-serif;text-decoration: none;box-shadow: 0 3px 3px #00000029; text-transform:uppercase;" href="${buttonHref1}" target="_blank">${buttonLabel1}</a> </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
        </td></tr>

            
        `;
        container.appendChild(template);
      }
      function removeTemplate3() {
        var container = document.getElementById("container");
        var templates = container.getElementsByClassName("_double_section ");
        if (templates.length > 0) {
          container.removeChild(templates[templates.length - 1]);
        }
      }
        
                    
          //-------------------------------------------
        
        
      function addTemplate4() {
       

        var image2 = document.getElementById("image-2").value;
        var container = document.getElementById("container");
        var template = document.createElement("table");
        template.className = "_body-image";
        template.innerHTML = `

        
               <tr><td>
          <img src="${image2}" alt="Lifestyle Image" style=" width: 90%; height: 300px; object-fit: cover; object-position: top; margin: 0 auto 15px; display: flex;" >
             </td></tr>

        `;
        container.appendChild(template);
      }
      function removeTemplate4() {
        var container = document.getElementById("container");
        var templates = container.getElementsByClassName("_body-image");
        if (templates.length > 0) {
          container.removeChild(templates[templates.length - 1]);
        }
      }
    
        
          //-------------------------------------------
        
        
      function addTemplate5() {
        var imageCopy2 = document.getElementById("body-copy-2").value;
  
        var container = document.getElementById("container");
        var template = document.createElement("table");
        template.className = "_body-copy";
        template.innerHTML = `

  

        <tr><td><p>${imageCopy2}</p></td></tr>

        `;
        container.appendChild(template);
      }
      function removeTemplate5() {
        var container = document.getElementById("container");
        var templates = container.getElementsByClassName("_body-copy");
        if (templates.length > 0) {
          container.removeChild(templates[templates.length - 1]);
        }
      }        
    
            
          //-------------------------------------------
        
        
      function addTemplate6() {
    var buttonLabel2 = document.getElementById("buttonLabel2").value;
    var buttonHref2 = document.getElementById("buttonHref2").value;
 
     var resultDiv = document.getElementById("container");
      var button = document.createElement("a");
      button.href = buttonHref2;


      button.target = "_blank";
      button.className = "_body-cta";
      button.innerHTML = `

      ${buttonLabel2}

      `;
    resultDiv.appendChild(button);
  }
      function removeTemplate6() {
        var resultDiv = document.getElementById("container");     
        var buttons = resultDiv.getElementsByClassName("_body-cta");  
        if (buttons.length > 0) {
          resultDiv.removeChild(buttons[buttons.length - 1]);
        }

      }

        

    
        
      function addTemplate7() {
      var image3 = document.getElementById("image-3").value;
      var introBodyTitle2 = document.getElementById("intro-body-title-2").value;
      var imageCopy3 = document.getElementById("body-copy-3").value;

      var buttonLabel3 = document.getElementById("buttonLabel3").value;
      var buttonHref3 = document.getElementById("buttonHref3").value;

      var container = document.getElementById("container");
      var template = document.createElement("div");
      template.className = "_body-footer";
      template.innerHTML = `
  


        <div style="width:100%; max-width: 600px; margin: 0 auto; display: flex; flex-wrap: wrap; justify-content: center; margin: 32px 0;">
            <a href="${buttonHref3}" target="_blank"><div style="background-color: #777; height: 300px; width: 300px; "><img src="${image3}" alt="Promo Image" style="width: 100%; display: flex; object-fit: cover; height: 300px; object-position: center;"></div></a>


            <div style="background-color: #f9f9f9; height: 300px; width: 300px; display: flex;">
                <div style="padding: 16px; display: flex;flex-direction: column;justify-content: center;">
                <h3 style="text-align: left; margin:32px 0 16px;">${introBodyTitle2}</h3>
                <p style="font-family:'UniversLTStd-Cn', sans-serif;font-weight: 500; line-height:1.5rem; font-size: 1rem; text-align: left; margin: 1rem 0; color: #000;">${imageCopy3}</p>
                <a href="${buttonHref3}" target="_blank" style="font-family:'UniversLTStd-Cn', sans-serif;font-weight: 500; line-height:1.5rem; font-size: 1rem; text-align: left; margin: 1rem 0; color: #000; text-transform: uppercase;">${buttonLabel3}</a>
                </div>
            </div>
        </div>


        `;
        container.appendChild(template);
      }
      function removeTemplate7() {
        var container = document.getElementById("container");
        var templates = container.getElementsByClassName("_body-footer");
        if (templates.length > 0) {
          container.removeChild(templates[templates.length - 1]);
        }
      }        
        